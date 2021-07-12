
try {
    var data = JSON.parse(document.getElementById("jsonData").innerHTML)
    var lodd_data = []

    document.getElementById("trekk_knapp").addEventListener("click", function() {
        let vinner_liste = document.getElementById("vinner_liste")
        
        if(Object.keys(data).length > 0){
            if (lodd_data.length > 0) {
                let random = Math.floor(Math.random() * lodd_data.length);
            
                let node = document.createElement("LI");
                let textnode = document.createTextNode(lodd_data[random]);
                node.appendChild(textnode);
                vinner_liste.appendChild(node);
                lodd_data.splice(random, 1);

                if (lodd_data.length === 0){
                    document.getElementById("trekk_knapp").disabled = true; 
                }
                
    
            }else{
                Object.keys(data).forEach(key => {
                    for (const x of Array(data[key]).keys()) {
                        lodd_data.push(key)
                    }
                    Array(data[key]).keys()
                });
    
                let random = Math.floor(Math.random() * lodd_data.length);
    
                let node = document.createElement("LI");
                let textnode = document.createTextNode(lodd_data[random]);
                node.appendChild(textnode);
                vinner_liste.appendChild(node);
    
                lodd_data.splice(random, 1);
    
            }
        }
   }); 
  }
  catch(err) {
    
  }