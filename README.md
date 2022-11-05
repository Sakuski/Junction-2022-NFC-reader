# Junction-2022-NFC-reader
NFC reader for Junction 2022

VERIFU COMAND:         0x00,0x20,0x00,0x81,0x08,0x12,0x34, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff


Junction discord https://discord.com/invite/nHeYaBuq5R

Nexi Hint 1: https://gist.github.com/jkauk-n/93bf368efa1f566cb686a05ca3b4f7d3

Nexi Hint 2: https://gist.github.com/jkauk-n/4d667a6f2dbf797461d660029c3e8f77

--

## Usage
```
make
sudo ./creditScam
```

NOTE! Heavily based on nfc-frog


# nfc frog original


```
*-
* Free/Libre Near Field Communication (NFC) library
*
* Libnfc historical contributors:
* Copyright (C) 2009      Roel Verdult
* Copyright (C) 2009-2015 Romuald Conty
* Copyright (C) 2010-2012 Romain Tartière
* Copyright (C) 2010-2013 Philippe Teuwen
* Copyright (C) 2012-2013 Ludovic Rousseau
* Additional contributors:
* See AUTHORS file
-*
```

General Information
===================

libnfc is a library which allows userspace application access to NFC devices.

The official web site is:
  http://www.nfc-tools.org/

The official forum site is:
  http://www.libnfc.org/community/

The official development site is:
  https://github.com/nfc-tools/libnfc

Important note: this file covers POSIX systems, for Windows please read README-Windows.md

Requirements
============

Some NFC drivers depend on third party software:

* pn53x_usb & acr122_usb:
  
  - libusb-0.1 http://libusb.sf.net

* acr122_pcsc:
  
  - pcsc-lite https://pcsclite.apdu.fr/
- pcsc:
  
  - Support build with pcsc driver, which can be using all compatible readers, Feitian R502 and bR500 already passed the test.

The regression test suite depends on the cutter framework:
http://cutter.sf.net

Building
========

Note: If working directly from a git clone of the repository, some of the files need to be generated first. To do this run
`autoreconf -vis`

Alternatively use a .tar.bz2 version of a packaged release (which already contains ./configure):
https://github.com/nfc-tools/libnfc/releases/

The build should be as simple as running these commands:

    ./configure
    make


To build with specific driver(s), see option `--with-drivers=...` detailed in `./configure --help`.

Installation
============
    
    make install

You may need to grant permissions to your user to drive your device.
Under GNU/Linux systems, if you use udev, you could use the provided udev rules.
  e.g. under Debian, Ubuntu, etc.

    sudo cp contrib/udev/93-pn53x.rules /lib/udev/rules.d/

Under FreeBSD, if you use devd, there is also a rules file: contrib/devd/pn53x.conf.

Configuration
=============

In order to change the default behavior of the library, the libnfc uses a
configuration file located in sysconfdir (as provided to ./configure).

A sample commented file is available in sources: libnfc.conf.sample

If you have compiled using:

    ./configure --prefix=/usr --sysconfdir=/etc

you can make configuration directory and copy the sample file:

    sudo mkdir /etc/nfc
    sudo cp libnfc.conf.sample /etc/nfc/libnfc.conf

To configure multiple devices, you can either modify libnfc.conf or create a
file per device in a nfc/devices.d directory:

    sudo mkdir -p /etc/nfc/devices.d
    printf 'name = "My first device"\nconnstring = "pn532_uart:/dev/ttyACM0"\n' | sudo tee /etc/nfc/devices.d/first.conf
    printf 'name = "My second device"\nconnstring = "pn532_uart:/dev/ttyACM1"\n' | sudo tee /etc/nfc/devices.d/second.conf

How to report bugs
==================

To report a bug, visit https://github.com/nfc-tools/libnfc/issues and fill
out a bug report form.

If you have questions, remarks, we encourage you to post this in the developers
community:
http://www.libnfc.org/community

Please make sure to include:

* The version of libnfc

* Information about your system. For instance:
  
  - What operating system and version
  - For Linux, what version of the C library
  
  And anything else you think is relevant.

* A trace with debug activated.
  
  Reproduce the bug with debug, e.g. if it was:
  
        $ nfc-list -v
  
  run it as:
  
        $ LIBNFC_LOG_LEVEL=3 nfc-list -v

* How to reproduce the bug.
  
  Please include a short test program that exhibits the behavior.
  
  As a last resort, you can also provide a pointer to a larger piece
  
  of software that can be downloaded.

* If the bug was a crash, the exact text that was printed out
  
  when the crash occured.

* Further information such as stack traces may be useful, but
  
  is not necessary.

Patches
=======

Patches can be posted to https://github.com/nfc-tools/libnfc/issues

If the patch fixes a bug, it is usually a good idea to include
all the information described in "How to Report Bugs".

Troubleshooting
===============

Touchatag/ACR122:
-----------------

If your Touchatag or ACR122 device fails being detected by libnfc, make sure
that PCSC-lite daemon (`pcscd`) is installed and is running.

If your Touchatag or ACR122 device fails being detected by PCSC-lite daemon
(`pcsc_scan` doesn't see anything) then try removing the bogus firmware detection
of libccid: edit libccid_Info.plist configuration file (usually
`/etc/libccid_Info.plist`) and locate `<key>ifdDriverOptions</key>`, turn
`<string>0x0000</string>` value into `0x0004` to allow bogus devices and restart
pcscd daemon.

ACR122:
-------

Using an ACR122 device with libnfc and without tag (e.g. to use NFCIP modes or
card emulation) needs yet another PCSC-lite tweak: You need to allow usage of
CCID Exchange command.  To do this, edit `libccid_Info.plist` configuration file
(usually `/etc/libccid_Info.plist`) and locate `<key>ifdDriverOptions</key>`,
turn `<string>0x0000</string>` value into `0x0001` to allow CCID exchange or
`0x0005` to allow CCID exchange and bogus devices (cf previous remark) and
restart pcscd daemon.

Warning: if you use ACS CCID drivers (acsccid), configuration file is located
in something like: `/usr/lib/pcsc/drivers/ifd-acsccid.bundle/Contents/Info.plist`

SCL3711:
--------

Libnfc cannot be used concurrently with the PCSC proprietary driver of SCL3711.
Two possible solutions:

* Either you don't install SCL3711 driver at all
* Or you stop the PCSC daemon when you want to use libnfc-based tools

PN533 USB device on Linux >= 3.1:
---------------------------------

Since Linux kernel version 3.1, a few kernel-modules must not be loaded in order
to use libnfc : "nfc", "pn533" and "pn533_usb".
To prevent kernel from loading automatically these modules, you can blacklist
them in a modprobe conf file. This file is provided within libnfc archive:

    sudo cp contrib/linux/blacklist-libnfc.conf /etc/modprobe.d/blacklist-libnfc.conf

FEITIAN bR500 and R502:
-----------------------

Libnfc can work with PCSC proprietary driver of bR500 and R502, which is already available on most Linux setups.
To activate the PCSC support: `./configure --with-drivers=pcsc`.
Readers known to work:

- Feitian bR500
- Feitian R502 Dual interface reader
- Feitian R502 CL(Contactless) reader

These readers are support by CCID since v1.4.25, make sure your CCID driver version higher or equal to 1.4.25.

On MacOS, you can check your CCID version with the following command, and if required, you can install latest CCID driver from [https://github.com/martinpaljak/osx-ccid-installer/releases](https://github.com/martinpaljak/osx-ccid-installer/releases)

```
grep -A 1 CFBundleShortVersionString /usr/local/libexec/SmartCardServices/drivers/ifd-ccid.bundle/Contents/Info.plist
```

On Linux, you can check your CCID version with the following command, and if required, you can install latest CCID driver from [https://ccid.apdu.fr/](https://ccid.apdu.fr/)

```
grep -A 1 CFBundleShortVersionString /usr/lib/pcsc/drivers/ifd-ccid.bundle/Contents/Info.plist
```

Proprietary Notes
=================
FeliCa is a registered trademark of the Sony Corporation.
MIFARE is a trademark of NXP Semiconductors.
Jewel Topaz is a trademark of Innovision Research & Technology.
All other trademarks are the property of their respective owners.


https://emvlab.org/tlvutils/?data=6F+41+84+0E+32+50+41+59+2E+53+59+53+2E+44+44+46+30+31+A5+2F+BF+0C+2C+61+2A+50+0A+56+69+73+61+20+44+65+62+69+74+4F+07+A0+00+00+00+03+10+10+87+01+01+9F+0A+08+00+01+05+01+00+00+00+00+BF+63+04+DF+20+01+80+%0D%0A6F+66+84+07+A0+00+00+00+03+10+10+A5+5B+50+0A+56+69+73+61+20+44+65+62+69+74+9F+38+18+9F+66+04+9F+02+06+9F+03+06+9F+1A+02+95+05+5F+2A+02+9A+03+9C+01+9F+37+04+87+01+01+5F+2D+02+66+69+9F+11+01+01+9F+12+0A+56+69+73+61+20+44+65+62+69+74+BF+0C+18+9F+4D+02+0B+0A+9F+0A+08+00+01+05+01+00+00+00+00+9F+5A+05+31+09+78+02+46+%0D%0A70+0A+5F+28+02+02+46+9F+07+02+00+00+%0D%0A70+30+9F+47+01+03+92+23+77+C5+4E+4D+4C+72+0A+57+47+2B+30+66+36+D7+AD+97+3A+DC+81+2F+42+15+71+71+CA+73+17+9A+EE+2D+C4+8A+B8+A0+0B+9F+32+01+03+8F+01+09+%0D%0A70+81+FB+90+81+F8+0F+06+03+06+2B+D8+D9+9B+4C+45+22+10+F8+E4+C6+37+41+EE+66+3C+FB+1B+4F+72+FF+56+95+33+D3+BB+BC+E8+21+C6+80+FF+6E+52+E7+51+D7+90+CF+21+BB+66+1D+30+B9+89+86+5F+3A+64+77+29+E0+28+2A+C1+BC+E8+9E+3B+40+A5+99+63+7E+85+FB+81+3D+95+ED+63+FA+88+41+B2+50+11+FD+AA+ED+1E+E8+41+33+43+53+F3+5B+28+22+BE+2E+56+6F+65+E2+DA+FC+F1+8A+D3+A6+A5+F8+A0+E2+A5+68+06+CD+6E+C4+2C+FF+C1+4F+41+3B+8C+01+94+4C+E8+D5+68+11+27+5A+52+84+4C+C2+33+C4+71+D0+2F+5A+0B+6E+52+7B+EE+F9+EB+8E+61+83+5C+EC+9C+32+71+C4+56+C4+58+B3+B9+7A+D6+0F+15+58+BD+36+94+86+EC+DA+70+54+1A+AC+CF+7D+F1+B6+6B+78+49+67+24+B4+A2+35+17+29+40+5E+B5+B6+2D+43+8F+B2+4A+12+BA+D8+41+39+49+10+55+16+D6+49+35+F4+CA+D2+23+F5+53+84+78+28+7B+68+06+02+F0+D4+B3+A4+8B+07+91+43+FB+51+61+1D+E4+CF+4B+00+5E+EA+68+4E+5A+%0D%0A70+81+FB+9F+46+81+F7+16+38+83+D0+F8+BC+05+75+9F+98+D3+60+B2+D5+FA+88+25+6C+47+E2+D6+9B+EB+20+F6+2C+3C+56+A4+D0+18+4A+77+8B+9B+F7+0A+BF+73+58+E0+4B+94+27+0C+9A+B6+10+4A+03+A5+6D+D8+82+94+E1+0E+5A+61+87+D9+2A+A6+58+D3+C6+71+5B+71+C0+B3+08+6E+92+4D+96+4D+E1+C7+9E+C1+F7+40+C1+F6+9E+44+EA+B0+7D+C2+AC+46+6F+D1+DA+25+0F+C5+45+F4+65+E2+76+10+F4+5A+41+C3+E0+BA+BE+22+0D+76+F2+5B+86+A0+32+A9+65+D7+D5+05+33+A4+E9+44+C6+0E+28+82+B7+17+31+03+3F+F6+C2+DE+CC+A6+95+14+6F+97+EF+9A+23+0C+93+BA+2F+2E+C7+86+2A+41+33+15+78+5B+8C+81+37+43+D8+CE+A0+5A+51+29+7E+86+F5+0B+EE+A7+36+A4+83+EE+03+99+C0+E9+D7+B8+1B+16+6D+B8+6A+69+E1+98+F5+6D+23+DD+88+93+23+0C+60+D8+C0+38+21+55+F0+40+48+CB+25+E8+E9+C0+3B+EB+8F+63+CC+C0+0F+16+54+05+63+6D+BC+B3+A7+04+B7+AA+4A+05+B2+B3+55+D2+B0+EF+AA+9D+%0D%0A70+1A+5A+08+49+20+17+00+32+87+99+34+5F+24+03+26+09+30+5F+28+02+02+46+9F+07+02+00+00+%0D%0A
