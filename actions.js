function openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
  }


function changeText(){
    
    var temp =  document.getElementById("searchStart").value;
    document.getElementById("searchStart").value = document.getElementById("searchFinish").value;
    document.getElementById("searchFinish").value = temp;
    console.log("finito");


}

var isVisible = true;
//document.getElementById("searchBar-buttons").style.opacity = 1;

function hideShow(){

    if(isVisible){
        document.getElementById("searchBar-buttons").style.opacity = 0.15;
        document.getElementById("eye").src = "Immagini/eyeno.png";

        document.getElementById("searchFinish").disabled = isVisible;
        document.getElementById("add-button").disabled = isVisible;
        document.getElementById("confirm-button").disabled = isVisible;
        document.getElementById("searchStart").disabled = isVisible;
        document.getElementById("changeButton").disabled = isVisible;

        for(let i = 0; i < nTappe; i++){
            document.getElementById(idBtnsArray[i]).disabled = isVisible;
            document.getElementById(idDelBtns[i]).disabled = true;
        }


    }else{
        document.getElementById("searchBar-buttons").style.opacity = 1;
        document.getElementById("eye").src = "Immagini/eye.png";

        document.getElementById("searchFinish").disabled = isVisible;
        document.getElementById("add-button").disabled = isVisible;
        document.getElementById("confirm-button").disabled = isVisible;
        document.getElementById("searchStart").disabled = isVisible;
        document.getElementById("changeButton").disabled = isVisible;

        for(let i = 1; i <= nTappe; i++){
            for(let i = 0; i < nTappe; i++){
                document.getElementById(idBtnsArray[i]).disabled = isVisible;
                document.getElementById(idDelBtns[i]).disabled = false;
            }
        }
    }
    

    isVisible = !isVisible;
}

var posY = 65;  // posizione Y dove creare la barra di ricerca; ogni volta si aggiorna di +36
var deleteBtnY = 68;
var nTappe = 0;

var idBtnsArray = ["Tappa1", "Tappa2", "Tappa3", "Tappa4", "Tappa5", "Tappa6", "Tappa7", "Tappa8", "Tappa9", "Tappa10", "Tappa11", "Tappa12", "Tappa13", "Tappa14"];
var idDelBtns = ["delBtn1", "delBtn2", "delBtn3", "delBtn4", "delBtn5", "delBtn6", "delBtn7", "delBtn8", "delBtn9", "delBtn10", "delBtn11", "delBtn12", "delBtn13", "delBtn14"];

function newStage(){

    if(nTappe < 14){
        let form = document.getElementById("searchForm");
        let searchField = document.createElement("input");
        let finish = document.getElementById("searchFinish");

    // sposta la casella 'destinazione' e il pulsante 'cerca' in basso
        let tempPos = posY + 36;
        finish.setAttribute("style", "top: " + tempPos+ "px");

        tempPos += 36;
        document.getElementById("confirm-button").setAttribute("style", "top: " + tempPos+ "px");

        nTappe++;
    // crea una nuova casella di ricerca
        
        searchField.id = "Tappa" + nTappe.toString();                               // assegna ID
        
        searchField.setAttribute("placeholder", "Tappa " + nTappe.toString());      // assegna placeholder
        searchField.classList.add("search");                                        // assegna classe CSS
        
        searchField.setAttribute("style", "top: " + posY + "px");
        posY += 36;

        //idBtnsArray.push("Tappa" + nTappe.toString());              // aggiungo l'id all'array

    // crea un nuovo pulsante delete
        let delBtn = document.createElement("button");
        delBtn.id = "delBtn" + nTappe;
        delBtn.classList.add("delete-button");
        delBtn.setAttribute("onclick", "deleteButtons('Tappa" + nTappe + "', 'delBtn" + nTappe + "', '" + nTappe + "')");   // passa come argomento il pulsante a lui associato
        delBtn.setAttribute("style", "top: " + deleteBtnY + "px");
        deleteBtnY += 36;

        //idDelBtns.push("delBtn" + nTappe.toString());              // aggiungo l'id all'array

        form.appendChild(delBtn);
        form.insertBefore(searchField, finish);

        if(nTappe == 14){
            document.getElementById("add-button").disabled = true;
        }
    
    }
    
}

function deleteButtons(id, idBtn, index){
    document.getElementById(id).remove();
    document.getElementById(idBtn).remove();

    //console.log("index value: " + index);
    
    document.getElementById("add-button").disabled = false;

// sposta in alto i pulsanti sotto quello cancellato

    for(let i = index; i < nTappe; i++){
        try{
            //alert("i: " + i);
            let pos = document.getElementById(idBtnsArray[i]).style.top;
            document.getElementById(idBtnsArray[i]).style.top = (parseInt(pos) - 36) + "px";

            pos = document.getElementById(idDelBtns[i]).style.top;
            document.getElementById(idDelBtns[i]).style.top = (parseInt(pos) - 36) + "px";


            //let element = document.getElementById(idBtnsArray[i]);
            document.getElementById(idBtnsArray[i]).placeholder = "Tappa " + i.toString();
            document.getElementById(idBtnsArray[i]).id = "Tappa"+i.toString();
           
            //element = document.getElementById(idDelBtns[i]);
            
            document.getElementById(idDelBtns[i]).removeAttribute("onclick");
            document.getElementById(idDelBtns[i]).setAttribute("onclick", "deleteButtons('Tappa" + i + "', 'delBtn" + i + "', '" + i + "')");
            document.getElementById(idDelBtns[i]).id = "delBtn" + i.toString();

            console.log("idBtnsArray[" + i + "]: " + idBtnsArray[i]);
            console.log("idDelBtns[" + i + "]: " + idDelBtns[i]);

        }catch(error){
            alert("Error with i: " + i);
            console.log("i: " + i + "/" + idBtnsArray.length);
            console.log("i: " + i + "/" + idDelBtns.length);
        }
        

        
    }

    let pos = document.getElementById("searchFinish").style.top;
    document.getElementById("searchFinish").style.top = (parseInt(pos) - 36) + "px";

    pos = document.getElementById('confirm-button').style.top;
    document.getElementById('confirm-button').style.top = (parseInt(pos) - 36) + "px";

    nTappe--;
    posY -= 36;
    deleteBtnY -= 36;
}
