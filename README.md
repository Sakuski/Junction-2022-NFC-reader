# Credit Card Scam

Project that utilizes NFC to gather data from credit cards.


## Requirements
The project requires nfc reader (duh).

## Dependancies
libnfc (https://github.com/nfc-tools/libnfc)

## Usage
The application was tested only in wsl ubuntu 20.04.

Cloning the project and installing dependancies.

Build the application using
```
make
```
Then run (assuming wsl)
```
bash ./runscript.sh
```
which automatically opens the results in browser.

If not using wsl, run
```
sudo ./creditScam fast
```


The raw data is saved to 'output.txt'.
Open 'result.html' (with javascript) to get a look at all the juicy data.


## Aknowledgements

The project used nfc-frog as its basis. Check them out https://github.com/cuamckuu/nfc-frog