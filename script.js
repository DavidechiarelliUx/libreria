fetch("https://striveschool-api.herokuapp.com/books")
  .then((response) => {
    console.log(response);

    if (response.ok) {
      return response.json();
    } else {
      console.log("error");
    }
  })
  .then((elementCard) => {
    console.log(elementCard);

    const row = document.getElementById("row");
    elementCard.forEach((bookChar) => {

        console.log(bookChar.title);
        const col = document.createElement("div");
        const card = document.createElement("div");
        const image = document.createElement("img");
        const title =document.createElement("h5");
        const category = document.createElement("p");
        const price= document.createElement("h3");
        const rowDiv=document.createElement("div");
        const colAdd = document.createElement("div");
        const colRemove = document.createElement("div");
        const removeBtn = document.createElement("button");
        const addCartBtn =document.createElement("button");



        col.classList.add("col-6", "col-md-4", "col-lg-3", "mt-3");
        card.classList.add("card", "d-flex", "text-center");
        image.classList.add("card-img-top");
        title.classList.add("card-title", "my-2");
        category.classList.add("card-text");
        price.classList.add("card-text", "text-success", "my-2");
        rowDiv.classList.add("row");
        addCartBtn.classList.add("btn", "btn-dark", "my-2", "addButton");
        removeBtn.classList.add("btn", "btn-danger", "clickRemove");
        colAdd.classList.add("col");
        colRemove.classList.add("col", "mt-2")
        
        title.textContent=bookChar.title;
        image.src=bookChar.img;
        category.textContent = bookChar.category;
        price.textContent =`${bookChar.price} € `
        addCartBtn.textContent="add";
        removeBtn.textContent="remove";


        card.appendChild(image);
        card.appendChild(category);
        card.appendChild(title);
        card.appendChild(price);
        card.appendChild(rowDiv);
        rowDiv.appendChild(colAdd);
        colAdd.appendChild(addCartBtn)
        rowDiv.appendChild(colRemove);
        colRemove.appendChild(removeBtn);
        col.appendChild(card);
        row.appendChild(col);
        removeCard();
        openModal();
    });
  })
  .catch((err) => console.log(err));

// <div class="container">
//             <h2 class="mt-5">Explore book</h2>
//             <div class="row" id="row">
//                 <!-- <div class="col-6 col-md-4 col-lg-3 mt-3">
//                     <div class="card d-flex text-center">
//                         <img src="https://cdn.dribbble.com/userupload/6804327/file/original-a13b8ee0c4c4cd8ea423f49dfe4dd34f.webp?resize=1024x768&vertical=center" class="card-img-top" alt="...">
//                         <div class="card-body">
//                             <h5 class="card-title">Titolo</h5>
//                             <p class="card-text ">Category</p>
//                             <p class="card-text text-center">Price</p>
//                             <a href="#" class="btn btn-primary">Go somewhere</a>
//                         </div>
//                     </div>
//                 </div> -->

//             </div>
//         </div>

function removeCard(){
  const buttons = document.querySelectorAll(".clickRemove");
  const cards = document.querySelectorAll(".card");
  buttons.forEach((button, index) => {
    button.addEventListener("click", (e) => {
        e.preventDefault();
      console.log("mi hai cliccato");
      cards[index].classList.add("d-none"); 
    });
  });
}

function openModal(){
    const buttonAdd = document.querySelectorAll(".addButton")
    const bodyModal = document.querySelector(".modal-body");
    const cards = document.querySelectorAll(".card");

    buttonAdd.forEach((button, index) => {
    
        button.addEventListener("click", () => {
            const element = document.getElementById("addElementDiv");
            if(!element){

                console.log("mi hai cliccato");

                const divBookCartCol = document.createElement("div");
                const divBookCart = document.createElement("div");
                const titleCartBook = document.createElement("h3");

                divBookCartCol.id=("addElementDiv");

                divBookCartCol.classList.add("col-12");
                divBookCart.classList.add("bg-secondary");
                titleCartBook.classList.add("text-primary");

                titleCartBook.textContent = "mi hai aggiunto";

                divBookCart.appendChild(titleCartBook);
                divBookCartCol.appendChild(divBookCart);
                bodyModal.appendChild(divBookCartCol);
            }else {
                console.log("l'elemento è stato aggiunto")
            }
        })

    });
}

