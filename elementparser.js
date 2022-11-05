const table = document.getElementsByTagName("table")[1].outerHTML;

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

let dataObjectsNew = [{
    name: "name field",
    data: "data gained",
    description: "description",
}]
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
        keyword: "Country Code",
        name: "Country Code",
        description: "This code can be parsed to show the origin country of the card"    
    },
    {
        keyword: "Expiration Date",
        name: "Expiration date",
        description: "Expiration date of the card (YYMMDD)"
    },
    {
        keyword: "application Usage Control",
        name: "Usage control",
        description: "Code can be translated to show restrictions regarding i.e online payments and abroad use"
    }
]

const checkImportance = (data) => {
    const headerkeywords = data.header.toLowerCase()
    importantHeaders.forEach(imp => {
        if (headerkeywords.includes(imp.keyword)) {
            dataObjectsNew.push({data: data.data, name: imp.name, description: imp.description})
        }
    })
}
dataObjects.forEach(data  => checkImportance(data));

console.log(dataObjectsNew);

dataObjects = dataObjectsNew;
