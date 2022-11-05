extern "C" {
    #include <nfc/nfc-types.h>
    #include <nfc/nfc.h>
}

#include <iostream>
#include <vector>
#include <chrono>
#include <thread>
#include <fstream>


#include "headers/application.h"
#include "headers/device_nfc.h"
#include "headers/tools.h"

enum Mode { fast, full, GPO, UNKNOWN, scam };

void brute_device_records(DeviceNFC &device, Application &app, Mode mode) {
    device.select_application(app);
    std::cerr << std::endl;

    size_t to_record = (mode == Mode::fast ? 16:255);

    for (size_t sfi = 1; sfi <= 31; ++sfi) {
        bool file_exist = false;
        for (size_t record = 1; record <= to_record; ++record) {
            APDU res = device.read_record(sfi, record);

            byte_t sw1 = res.data[res.size-2];
            byte_t sw2 = res.data[res.size-1];

            if (sw1 == 0x90 && sw2 == 0x00) {
                file_exist = true;
            } else if (sw1 == 0x6A && sw2 == 0x82) {
                break; // FileNotExist at this SFI
            }
        }
        if (file_exist) {
            std::cerr << std::endl;
        }
    }
}

void walk_through_gpo_files(DeviceNFC &device, Application &app) {
    device.select_application(app);
    APDU gpo = device.get_processing_options(app);

    // Find AFL tag to locate files on card
    size_t i = 0;
    while (i < gpo.size && gpo.data[i] != 0x94) {
        i++;
    }

    if (i >= gpo.size) {
        std::cerr << "Can't get AFL" << std::endl;
        return;
    }

    APDU afl = {0, {0}};
    afl.size = parse_TLV(afl.data, gpo.data, i);

    std::cerr << std::endl;
    for (size_t j = 0; j < afl.size; j+=4) {
        byte_t sfi = afl.data[j] >> 3;
        byte_t from_record = afl.data[j+1];
        byte_t to_record = afl.data[j+2];

        for (size_t record = from_record; record <= to_record; ++record) {
            device.read_record(sfi, record);
        }
        std::cerr << std::endl;
    }
}

void start_scam(DeviceNFC &device, Application &app) {
    device.select_application(app);
    std::cerr << std::endl;
 
    //TODO EDIT THIS COMMAND TO SEND GOOD COMMANDS
     byte_t const command[] = {
        0x40, 0x01, // Pn532 InDataExchange
        0x00, 0xA4, // SELECT ppse
        0x04, 0x00, // P1:By name, P2:_

        0x0e, // Lc: Data length
        0x32, 0x50, 0x41, 0x59, 0x2e, 0x53, 0x59, // Data string:
        0x53, 0x2e, 0x44, 0x44, 0x46, 0x30, 0x31, // 2PAY.SYS.DDF01 (PPSE)
        0x00 // Le
    };
    APDU res =device.execute_command(command, sizeof(command), "OWN COMMAND");
    bool file_exist = false;

    byte_t sw1 = res.data[res.size-2];
    byte_t sw2 = res.data[res.size-1];

    if (sw1 == 0x90 && sw2 == 0x00) {
        file_exist = true;
    } else if (sw1 == 0x6A && sw2 == 0x82) {
        file_exist = false; // file does not exist
    }
    if (file_exist) {
        std::cerr << std::endl;
    }
}

int main(int argc, char *argv[]) {
    Mode mode = Mode::UNKNOWN;

    if (argc == 1) {
        std::cerr << GREEN("[Info]") << " Use mode 'fast', 'full' or 'GPO' (or 'scam')" << std::endl;
        return 0;
    }

    std::string mode_str(argv[1]);
    if (mode_str == "fast") {
        mode = Mode::fast;
    } else if (mode_str == "full") {
        mode = Mode::full;
    } else if (mode_str == "GPO") {
        mode = Mode::GPO;
    } else if (mode_str == "scam") {
        mode = Mode::scam;
    } else {
        std::cerr << RED("[Error]") << " Unknown mode" << std::endl;
        return 0;
    }

    try {
        DeviceNFC device;
        std::cerr << GREEN("[Info]") << " NFC reader: " << device.get_name() << " opened.\n";

        while (!device.pool_target()) {
            std::cerr << GREEN("[Info]") << " Searching card..." << std::endl;
            std::this_thread::sleep_for(std::chrono::seconds(1));
        }
        std::cerr << std::endl;

        std::ofstream outfile;
        outfile.open("output.txt");
        outfile.close();

        std::vector<Application> list = device.load_applications_list();

        if (mode == Mode::fast || mode == Mode::full) {
            for (Application &app : list) {
                brute_device_records(device, app, mode);
            }
        } else if (mode == Mode::GPO) {
            for (Application &app : list) {
                walk_through_gpo_files(device, app);
            }
        } else if (mode == Mode::scam) {
            for (Application &app : list) {
                start_scam(device, app);
            }
        }

    } catch (std::exception &e) {
        std::cerr << e.what() << std::endl;
        return 1;
    }

    return 0;
}
