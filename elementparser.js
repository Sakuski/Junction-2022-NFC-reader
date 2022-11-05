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
