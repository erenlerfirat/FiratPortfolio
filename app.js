
//Yorumlar
function addComment() {
    let parent = document.getElementById("addComment");

    //temel div parent oluştur,attribute ver
    let newCard = document.createElement("div")
    newCard.setAttribute("class", "card comment")
    let newCardBody = document.createElement("div")
    newCardBody.setAttribute("class", "card-body")
    newCard.appendChild(newCardBody);

    //yeni div içine child elementler oluştur
    let cardTitle = document.createElement("h4")
    let cardEmail = document.createElement("h5")
    let cardText = document.createElement("p")
    let btnDelete = document.createElement("button")

    //child elementleri yeni div'e ekle
    newCardBody.appendChild(cardTitle);
    newCardBody.appendChild(cardText);
    newCardBody.appendChild(cardEmail);
    newCardBody.appendChild(btnDelete);

    //child elementlerin attribute'larını yaz

    cardTitle.setAttribute("class", "card-title")
    cardEmail.setAttribute("class", "card-title")
    cardText.setAttribute("class", "card-text")
    btnDelete.setAttribute("class", "btn btn-danger mx-2")
    btnDelete.setAttribute("onclick", "deleteRow(this)");

    //Butonun içini doldur    
    const btnText2 = document.createTextNode("Delete Comment");
    btnDelete.appendChild(btnText2);

    //İnputlardan bilgi al ve yeni cardın içini doldur

    let comment = document.getElementById("comment").value;
    let commentText = document.createTextNode("Comment : " +comment);
    cardText.appendChild(commentText);

    let fullName = document.getElementById("fullName").value;
    let fullNameText = document.createTextNode("Full Name : "+fullName);
    cardTitle.appendChild(fullNameText);

    let email=document.getElementById("email").value;
    let emailText=document.createTextNode("Email : "+email);
    cardEmail.appendChild(emailText);

    //card-body    

    //yeni div'i var olan elemente ekle ve bitir

    parent.appendChild(newCard);

}

function deleteRow(e) {
    e.parentNode.parentNode.remove();

}




