const tabl = document.getElementsByTagName("table");
if (tabl.length != 2) {
    document.body.innerHTML = "THERE WAS AN ERROR"
} else {
const table = tabl[1].outerHTML;
const body = document.body;
var t = document.getElementsByClassName("tlvdecode");

var tr = document.getElementsByTagName("tr");
console.log(tr);
let dataObjects = [];
for(var i = 2; i < tr.length; i++){
    for(var x = 0; x < tr[i].childNodes.length;x++){
        var currentNode = tr[i].childNodes[x];
        if(currentNode.classList != undefined){
            //has class
            if(currentNode.classList.contains("tlvprimitive")){
                //data
                var header = tr[i-1].childNodes[tr[i-1].childNodes.length-2].innerText;
                console.log(header + " : " + currentNode.innerText);
                var obj = {
                    "header": header,
                    "data": currentNode.innerText
                };
                
                dataObjects[dataObjects.length] = obj;
                
            }
            
        }
        
    }
    
}
console.log(dataObjects);


const CNTR = {
    "004": "Afghanistan",
    "008": "Albania",
    "010": "Antarctica",
    "012": "Algeria",
    "016": "American Samoa",
    "020": "Andorra",
    "024": "Angola",
    "028": "Antigua and Barbuda",
    "031": "Azerbaijan",
    "032": "Argentina",
    "036": "Australia",
    "040": "Austria",
    "044": "Bahamas",
    "048": "Bahrain",
    "050": "Bangladesh",
    "051": "Armenia",
    "052": "Barbados",
    "056": "Belgium",
    "060": "Bermuda",
    "064": "Bhutan",
    "068": "Bolivia",
    "070": "Bosnia and Herzegovina",
    "072": "Botswana",
    "074": "Bouvet Island",
    "076": "Brazil",
    "084": "Belize",
    "086": "British Indian Ocean Territory",
    "090": "Solomon Islands",
    "092": "British Virgin Islands",
    "096": "Brunei Darussalam",
    100: "Bulgaria",
    104: "Myanmar",
    108: "Burundi",
    112: "Belarus",
    116: "Cambodia",
    120: "Cameroon",
    124: "Canada",
    132: "Cabo Verde",
    136: "Cayman Islands",
    140: "Central African Republic",
    144: "Sri Lanka",
    148: "Chad",
    152: "Chile",
    156: "China",
    158: "Taiwan",
    162: "Christmas Island",
    166: "Cocos (Keeling) Islands",
    170: "Colombia",
    174: "Comoros",
    175: "Mayotte",
    178: "Republic of the Congo",
    180: "Democratic Republic of the Congo",
    184: "Cook Islands",
    188: "Costa Rica",
    191: "Croatia",
    192: "Cuba",
    196: "Cyprus",
    203: "Czech Republic",
    204: "Benin",
    208: "Denmark",
    212: "Dominica",
    214: "Dominican Republic",
    218: "Ecuador",
    222: "El Salvador",
    226: "Equatorial Guinea",
    231: "Ethiopia",
    232: "Eritrea",
    233: "Estonia",
    234: "Faroe Islands",
    238: "Falkland Islands",
    239: "South Georgia and the South Sandwich Islands",
    242: "Fiji",
    246: "Finland",
    248: "Aland Islands",
    250: "France",
    254: "French Guiana",
    258: "French Polynesia",
    260: "French Southern Territories",
    262: "Djibouti",
    266: "Gabon",
    268: "Georgia",
    270: "Gambia",
    275: "State of Palestine",
    276: "Germany",
    280: "Germany",
    288: "Ghana",
    292: "Gibraltar",
    296: "Kiribati",
    300: "Greece",
    304: "Greenland",
    308: "Grenada",
    312: "Guadeloupe",
    316: "Guam",
    320: "Guatemala",
    324: "Guinea",
    328: "Guyana",
    332: "Haiti",
    334: "Heard Island and McDonald Islands",
    336: "Vatican City",
    340: "Honduras",
    344: "Hong Kong",
    348: "Hungary",
    352: "Iceland",
    356: "India",
    360: "Indonesia",
    364: "Iran",
    368: "Iraq",
    372: "Republic of Ireland",
    376: "Israel",
    380: "Italy",
    384: "Cote d'Ivoire",
    388: "Jamaica",
    392: "Japan",
    398: "Kazakhstan",
    400: "Jordan",
    404: "Kenya",
    408: "North Korea",
    410: "South Korea",
    414: "Kuwait",
    417: "Kyrgyzstan",
    418: "Laos",
    422: "Lebanon",
    426: "Lesotho",
    428: "Latvia",
    430: "Liberia",
    434: "Libya",
    438: "Liechtenstein",
    440: "Lithuania",
    442: "Luxembourg",
    446: "Macao",
    450: "Madagascar",
    454: "Malawi",
    458: "Malaysia",
    462: "Maldives",
    466: "Mali",
    470: "Malta",
    474: "Martinique",
    478: "Mauritania",
    480: "Mauritius",
    484: "Mexico",
    492: "Monaco",
    496: "Mongolia",
    498: "Moldova",
    499: "Montenegro",
    500: "Montserrat",
    504: "Morocco",
    508: "Mozambique",
    512: "Oman",
    516: "Namibia",
    520: "Nauru",
    524: "Nepal",
    528: "Netherlands",
    531: "Curaçao",
    533: "Aruba",
    534: "Sint Maarten",
    535: "Caribbean Netherlands",
    540: "New Caledonia",
    548: "Vanuatu",
    554: "New Zealand",
    558: "Nicaragua",
    562: "Niger",
    566: "Nigeria",
    570: "Niue",
    574: "Norfolk Island",
    578: "Norway",
    580: "Northern Mariana Islands",
    581: "United States Minor Outlying Islands",
    583: "Federated States of Micronesia",
    584: "Marshall Islands",
    585: "Palau",
    586: "Pakistan",
    591: "Panama",
    598: "Papua New Guinea",
    600: "Paraguay",
    604: "Peru",
    608: "Philippines",
    612: "Pitcairn Islands",
    616: "Poland",
    620: "Portugal",
    624: "Guinea-Bissau",
    626: "East Timor",
    630: "Puerto Rico",
    634: "Qatar",
    638: "Reunion",
    642: "Romania",
    643: "Russian Federation",
    646: "Rwanda",
    652: "Saint Barthelemyy",
    654: "Saint Helena",
    659: "Saint Kitts and Nevis",
    660: "Anguilla",
    662: "Saint Lucia",
    663: "Saint Martin",
    666: "Saint Pierre and Miquelon",
    670: "Saint Vincent and the Grenadines",
    674: "San Marino",
    678: "Sao Tome and Principe",
    682: "Saudi Arabia",
    686: "Senegal",
    688: "Serbia",
    690: "Seychelles",
    694: "Sierra Leone",
    702: "Singapore",
    703: "Slovakia",
    704: "Vietnam",
    705: "Slovenia",
    706: "Somalia",
    710: "South Africa",
    716: "Zimbabwe",
    724: "Spain",
    728: "South Sudan",
    729: "Sudan",
    732: "Western Sahara",
    740: "Suriname",
    744: "Svalbard and Jan Mayen",
    748: "Eswatini",
    752: "Sweden",
    756: "Switzerland",
    760: "Syria",
    762: "Tajikistan",
    764: "Thailand",
    768: "Togo",
    772: "Tokelau",
    776: "Tonga",
    780: "Trinidad and Tobago",
    784: "United Arab Emirates",
    788: "Tunisia",
    792: "Turkey",
    795: "Turkmenistan",
    796: "Turks and Caicos Islands",
    798: "Tuvalu",
    800: "Uganda",
    804: "Ukraine",
    807: "North Macedonia",
    818: "Egypt",
    826: "United Kingdom",
    831: "Guernsey",
    832: "Jersey",
    833: "Isle of Man",
    834: "Tanzania",
    840: "United States of America",
    850: "Virgin Islands",
    854: "Burkina Faso",
    858: "Uruguay",
    860: "Uzbekistan",
    862: "Venezuela",
    876: "Wallis and Futuna",
    882: "Samoa",
    887: "Yemen",
    894: "Zambia"
}
const CURR = {
    "008": {
        a3: "ALL",
        desc: "Albanian lek"
    },
    "012": {
        a3: "DZD",
        desc: "Algerian dinar"
    },
    "032": {
        a3: "ARS",
        desc: "Argentine peso"
    },
    "036": {
        a3: "AUD",
        desc: "Australian dollar"
    },
    "044": {
        a3: "BSD",
        desc: "Bahamian dollar"
    },
    "048": {
        a3: "BHD",
        desc: "Bahraini dinar"
    },
    "050": {
        a3: "BDT",
        desc: "Bangladeshi taka"
    },
    "051": {
        a3: "AMD",
        desc: "Armenian dram"
    },
    "052": {
        a3: "BBD",
        desc: "Barbados dollar"
    },
    "060": {
        a3: "BMD",
        desc: "Bermudian dollar"
    },
    "064": {
        a3: "BTN",
        desc: "Bhutanese ngultrum"
    },
    "068": {
        a3: "BOB",
        desc: "Boliviano"
    },
    "072": {
        a3: "BWP",
        desc: "Botswana pula"
    },
    "084": {
        a3: "BZD",
        desc: "Belize dollar"
    },
    "090": {
        a3: "SBD",
        desc: "Solomon Islands dollar"
    },
    "096": {
        a3: "BND",
        desc: "Brunei dollar"
    },
    104: {
        a3: "MMK",
        desc: "Myanmar kyat"
    },
    108: {
        a3: "BIF",
        desc: "Burundian franc"
    },
    116: {
        a3: "KHR",
        desc: "Cambodian riel"
    },
    124: {
        a3: "CAD",
        desc: "Canadian dollar"
    },
    132: {
        a3: "CVE",
        desc: "Cape Verdean escudo"
    },
    136: {
        a3: "KYD",
        desc: "Cayman Islands dollar"
    },
    144: {
        a3: "LKR",
        desc: "Sri Lankan rupee"
    },
    152: {
        a3: "CLP",
        desc: "Chilean peso"
    },
    156: {
        a3: "CNY",
        desc: "Chinese yuan"
    },
    165: {
        a3: "MRU",
        desc: "Mauritanian ouguiya"
    },
    170: {
        a3: "COP",
        desc: "Colombian peso"
    },
    174: {
        a3: "KMF",
        desc: "Comoro franc"
    },
    188: {
        a3: "CRC",
        desc: "Costa Rican colon"
    },
    191: {
        a3: "HRK",
        desc: "Croatian kuna"
    },
    192: {
        a3: "CUP",
        desc: "Cuban peso"
    },
    203: {
        a3: "CZK",
        desc: "Czech koruna"
    },
    208: {
        a3: "DKK",
        desc: "Danish krone"
    },
    214: {
        a3: "DOP",
        desc: "Dominican peso"
    },
    222: {
        a3: "SVC",
        desc: "Salvadoran colón"
    },
    230: {
        a3: "ETB",
        desc: "Ethiopian birr"
    },
    232: {
        a3: "ERN",
        desc: "Eritrean nakfa"
    },
    238: {
        a3: "FKP",
        desc: "Falkland Islands pound"
    },
    242: {
        a3: "FJD",
        desc: "Fijian dollar"
    },
    262: {
        a3: "DJF",
        desc: "Djiboutian franc"
    },
    270: {
        a3: "GMD",
        desc: "Gambian dalasi"
    },
    292: {
        a3: "GIP",
        desc: "Gibraltar pound"
    },
    320: {
        a3: "GTQ",
        desc: "Guatemalan quetzal"
    },
    324: {
        a3: "GNF",
        desc: "Guinean franc"
    },
    328: {
        a3: "GYD",
        desc: "Guyanese dollar"
    },
    332: {
        a3: "HTG",
        desc: "Haitian gourde"
    },
    340: {
        a3: "HNL",
        desc: "Honduran lempira"
    },
    344: {
        a3: "HKD",
        desc: "Hong Kong dollar"
    },
    348: {
        a3: "HUF",
        desc: "Hungarian forint"
    },
    352: {
        a3: "ISK",
        desc: "Icelandic króna"
    },
    356: {
        a3: "INR",
        desc: "Indian rupee"
    },
    360: {
        a3: "IDR",
        desc: "Indonesian rupiah"
    },
    364: {
        a3: "IRR",
        desc: "Iranian rial"
    },
    368: {
        a3: "IQD",
        desc: "Iraqi dinar"
    },
    376: {
        a3: "ILS",
        desc: "Israeli shekel"
    },
    388: {
        a3: "JMD",
        desc: "Jamaican dollar"
    },
    392: {
        a3: "JPY",
        desc: "Japanese yen"
    },
    398: {
        a3: "KZT",
        desc: "Kazakhstani tenge"
    },
    400: {
        a3: "JOD",
        desc: "Jordanian dinar"
    },
    404: {
        a3: "KES",
        desc: "Kenyan shilling"
    },
    408: {
        a3: "KPW",
        desc: "North Korean won"
    },
    410: {
        a3: "KRW",
        desc: "South Korean won"
    },
    414: {
        a3: "KWD",
        desc: "Kuwaiti dinar"
    },
    417: {
        a3: "KGS",
        desc: "Kyrgyzstani som"
    },
    418: {
        a3: "LAK",
        desc: "Lao kip"
    },
    422: {
        a3: "LBP",
        desc: "Lebanese pound"
    },
    426: {
        a3: "LSL",
        desc: "Lesotho loti"
    },
    430: {
        a3: "LRD",
        desc: "Liberian dollar"
    },
    434: {
        a3: "LYD",
        desc: "Libyan dinar"
    },
    446: {
        a3: "MOP",
        desc: "Macanese pataca"
    },
    454: {
        a3: "MWK",
        desc: "Malawian kwacha"
    },
    458: {
        a3: "MYR",
        desc: "Malaysian ringgit"
    },
    462: {
        a3: "MVR",
        desc: "Maldivian rufiyaa"
    },
    480: {
        a3: "MUR",
        desc: "Mauritian rupee"
    },
    484: {
        a3: "MXN",
        desc: "Mexican peso"
    },
    496: {
        a3: "MNT",
        desc: "Mongolian tögrög"
    },
    498: {
        a3: "MDL",
        desc: "Moldovan leu"
    },
    504: {
        a3: "MAD",
        desc: "Moroccan dirham"
    },
    512: {
        a3: "OMR",
        desc: "Omani rial"
    },
    516: {
        a3: "NAD",
        desc: "Namibian dollar"
    },
    524: {
        a3: "NPR",
        desc: "Nepalese rupee"
    },
    532: {
        a3: "ANG",
        desc: "Netherlands Antillean guilder"
    },
    533: {
        a3: "AWG",
        desc: "Aruban florin"
    },
    548: {
        a3: "VUV",
        desc: "Vanuatu vatu"
    },
    554: {
        a3: "NZD",
        desc: "New Zealand dollar"
    },
    558: {
        a3: "NIO",
        desc: "Nicaraguan córdoba"
    },
    566: {
        a3: "NGN",
        desc: "Nigerian naira"
    },
    578: {
        a3: "NOK",
        desc: "Norwegian krone"
    },
    586: {
        a3: "PKR",
        desc: "Pakistani rupee"
    },
    590: {
        a3: "PAB",
        desc: "Panamanian balboa"
    },
    598: {
        a3: "PGK",
        desc: "Papua New Guinean kina"
    },
    600: {
        a3: "PYG",
        desc: "Paraguayan guaraní"
    },
    604: {
        a3: "PEN",
        desc: "Peruvian sol"
    },
    608: {
        a3: "PHP",
        desc: "Philippine peso"
    },
    634: {
        a3: "QAR",
        desc: "Qatari riyal"
    },
    643: {
        a3: "RUB",
        desc: "Russian ruble"
    },
    646: {
        a3: "RWF",
        desc: "Rwandan franc"
    },
    654: {
        a3: "SHP",
        desc: "Saint Helena pound"
    },
    682: {
        a3: "SAR",
        desc: "Saudi riyal"
    },
    690: {
        a3: "SCR",
        desc: "Seychelles rupee"
    },
    694: {
        a3: "SLL",
        desc: "Sierra Leonean leone"
    },
    702: {
        a3: "SGD",
        desc: "Singapore dollar"
    },
    704: {
        a3: "VND",
        desc: "Vietnamese đồng"
    },
    706: {
        a3: "SOS",
        desc: "Somali shilling"
    },
    710: {
        a3: "ZAR",
        desc: "South African rand"
    },
    728: {
        a3: "SSP",
        desc: "South Sudanese pound"
    },
    748: {
        a3: "SZL",
        desc: "Swazi lilangeni"
    },
    752: {
        a3: "SEK",
        desc: "Swedish krona"
    },
    756: {
        a3: "CHF",
        desc: "Swiss franc"
    },
    760: {
        a3: "SYP",
        desc: "Syrian pound"
    },
    764: {
        a3: "THB",
        desc: "Thai baht"
    },
    776: {
        a3: "TOP",
        desc: "Tongan paʻanga"
    },
    780: {
        a3: "TTD",
        desc: "Trinidad and Tobago dollar"
    },
    784: {
        a3: "AED",
        desc: "United Arab Emirates dirham"
    },
    788: {
        a3: "TND",
        desc: "Tunisian dinar"
    },
    800: {
        a3: "UGX",
        desc: "Ugandan shilling"
    },
    807: {
        a3: "MKD",
        desc: "Macedonian denar"
    },
    818: {
        a3: "EGP",
        desc: "Egyptian pound"
    },
    826: {
        a3: "GBP",
        desc: "Pound sterling"
    },
    834: {
        a3: "TZS",
        desc: "Tanzanian shilling"
    },
    840: {
        a3: "USD",
        desc: "United States dollar"
    },
    858: {
        a3: "UYU",
        desc: "Uruguayan peso"
    },
    860: {
        a3: "UZS",
        desc: "Uzbekistan som"
    },
    882: {
        a3: "WST",
        desc: "Samoan tala"
    },
    886: {
        a3: "YER",
        desc: "Yemeni rial"
    },
    901: {
        a3: "TWD",
        desc: "New Taiwan dollar"
    },
    926: {
        a3: "VED",
        desc: "Venezuelan bolívar digital"
    },
    927: {
        a3: "UYW",
        desc: "Unidad previsional"
    },
    928: {
        a3: "VES",
        desc: "Venezuelan bolívar soberano"
    },
    930: {
        a3: "STN",
        desc: "São Tomé and Príncipe dobra"
    },
    931: {
        a3: "CUC",
        desc: "Cuban convertible peso"
    },
    932: {
        a3: "ZWL",
        desc: "Zimbabwean dollar"
    },
    933: {
        a3: "BYN",
        desc: "Belarusian ruble"
    },
    934: {
        a3: "TMT",
        desc: "Turkmenistan manat"
    },
    936: {
        a3: "GHS",
        desc: "Ghanaian cedi"
    },
    938: {
        a3: "SDG",
        desc: "Sudanese pound"
    },
    941: {
        a3: "RSD",
        desc: "Serbian dinar"
    },
    943: {
        a3: "MZN",
        desc: "Mozambican metical"
    },
    944: {
        a3: "AZN",
        desc: "Azerbaijani manat"
    },
    946: {
        a3: "RON",
        desc: "Romanian leu"
    },
    949: {
        a3: "TRY",
        desc: "Turkish lira"
    },
    951: {
        a3: "XCD",
        desc: "East Caribbean dollar"
    },
    952: {
        a3: "XOF",
        desc: "West African CFA franc"
    },
    967: {
        a3: "ZMW",
        desc: "Zambian kwacha"
    },
    968: {
        a3: "SRD",
        desc: "Surinamese dollar"
    },
    969: {
        a3: "MGA",
        desc: "Malagasy ariary"
    },
    971: {
        a3: "AFN",
        desc: "Afghan afghani"
    },
    972: {
        a3: "TJS",
        desc: "Tajikistani somoni"
    },
    973: {
        a3: "AOA",
        desc: "Angolan kwanza"
    },
    975: {
        a3: "BGN",
        desc: "Bulgarian lev"
    },
    976: {
        a3: "CDF",
        desc: "Congolese franc"
    },
    977: {
        a3: "BAM",
        desc: "Bosnia and Herzegovina convertible mark"
    },
    978: {
        a3: "EUR",
        desc: "Euro"
    },
    980: {
        a3: "UAH",
        desc: "Ukrainian hryvnia"
    },
    981: {
        a3: "GEL",
        desc: "Georgian lari"
    },
    984: {
        a3: "BOV",
        desc: "Bolivian Mvdol"
    },
    985: {
        a3: "PLN",
        desc: "Polish zloty"
    },
    986: {
        a3: "BRL",
        desc: "Brazilian real"
    }
};

let dataObjectsNew = [];
const importantHeaders = [
    {
        keyword: "application identifier",
        name: "Card Issuer Type",
        description: "Application Identifier (AID)"
    },
    {
        keyword: "application label",
        name: "Card Type",
        description: "Type of card"
    },
    {
        keyword: "language preference",
        name: "Languages",
        description: "Preferred languages"
    },
    {
        keyword: "try counter",
        name: "PIN tries left",
        description: "Number of PIN tries left"
    },
    {
        keyword: "5a application primary account number",
        name: "Card Number",
        description: "Number of the card"
    },
    {
        keyword: "issuer country code",
        name: "Country Code",
        description: "This code can be parsed to show the origin country of the card"    
    },
    {
        keyword: "expiration date",
        name: "Expiration date",
        description: "Expiration date of the card (YYMMDD)"
    },
    {
        keyword: "application Usage Control",
        name: "Usage control",
        description: "Code can be translated to show restrictions regarding i.e online payments and abroad use"
    },
    {
        keyword: "currency",
        name: "Default Currency",
        description: "Default currency for the card set by card issuer"
        
    }
]

const checkImportance = (data) => {
    const headerkeywords = data.header.toLowerCase()
    importantHeaders.forEach(imp => {
        if (headerkeywords.includes(imp.keyword)) {
            var dataedited = data.data
            if (headerkeywords.includes("issuer country code")) {
                console.log("here")
                dataedited = CNTR[Number(data.data).toString()]
            } else if (headerkeywords.includes("currency")) {
                console.log("here currency")
                dataedited = CURR[Number(data.data).toString()]
                dataedited = `${dataedited.desc} (${dataedited.a3})`
            }
            dataObjectsNew.push({data: dataedited, name: imp.name, description: imp.description})
        }
    })
}
dataObjects.forEach(data  => checkImportance(data));

console.log(dataObjectsNew);

dataObjects = dataObjectsNew;

body.innerHTML = "";
body.style.background = "white";
var headerDiv = document.createElement("div");
headerDiv.innerHTML = '<h1 style="text-align: center; font-weight: bold; text-decoration: underline">CREDIT CARD DATA</h1>';
headerDiv.style.textAlign = "center";

body.appendChild(headerDiv);

var tDiv = document.createElement("div");
tDiv.style.display = "flex";
tDiv.style.flexWrap = "wrap";
body.appendChild(tDiv);

var header2Div = document.createElement("div");
header2Div.innerHTML = '<h3 style="text-align: center; font-weight: bold; text-decoration: underline">MORE DETAILED DATA</h3>';
header2Div.style.textAlign = "center";
header2Div.style.background = "white";
body.appendChild(header2Div);

for(var i = 0; i < dataObjects.length;i++){
    
    var outerDiv = document.createElement("div");
    //outerDiv.style.display = "block";
    outerDiv.style.margin = "1%";
    outerDiv.style.width = "48%";
    outerDiv.style.background = "white";
    
    var headerDiv = document.createElement("div");
    headerDiv.innerHTML = dataObjects[i].name;
    headerDiv.style.outline = "1px solid black";
    headerDiv.style.textAlign = "center";
    headerDiv.style.fontWeight = "bold";
    
    
    var dataDiv = document.createElement("div");
    dataDiv.innerHTML = dataObjects[i].data;
    dataDiv.style.outline = "1px solid black";
    dataDiv.style.wordWrap = "break-word";
    dataDiv.style.textAlign = "center";
    
    var descDiv = document.createElement("div");
    descDiv.innerHTML = dataObjects[i].description;
    descDiv.style.outline = "1px solid black";
    descDiv.style.wordWrap = "break-word";
    descDiv.style.textAlign = "center";
    descDiv.style.margin = "1px";
    
    outerDiv.appendChild(headerDiv);
    outerDiv.appendChild(dataDiv);
    outerDiv.appendChild(descDiv);
    
    
    /*var tab = document.createElement("table");
    
    var header = tab.insertRow();
    header.innerText = dataObjects[i].header;
    header.style.outline = "1px solid black";
    
    var data = tab.insertRow();
    data.innerText = dataObjects[i].data;
    data.style.outline = "1px solid black";
    
    var empty = tab.insertRow();
    empty.innerText = "\n";*/
    
    tDiv.appendChild(outerDiv);
    
}
var dd = document.createElement("div");
dd.innerHTML = table;
body.appendChild(dd);

const as = document.getElementsByTagName("a")
console.log(as)
for (var i = 0; i < as.length; i++) {
    as[i].removeAttribute("href");
    as[i].style.fontWeight = "bold";
}
// as.forEach(elem => elem.removeAttribute("href"));
}
console.log(tabl)
