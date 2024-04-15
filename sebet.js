const product = document.querySelector('#productCard')
function getCardData() {
    product.innerHTML = ``
  let card = JSON.parse(localStorage.getItem("card")) || [];
  card.forEach((item, index) => {
    let box = document.createElement("div");
    box.className = "productCard";
    box.innerHTML = `
            <img
              src="${item.thumbnail}"
              alt=""
              style="width:100%;height:100px"
            />
            <div class="cardDesc">
              <h3>${item.title}</h3>
              <p>${item.price}</p>
              <button class="cartBtn" onclick="deleteItem(${index})">Sil</button>
            </div>
            `;
    product.appendChild(box);
  });
}
getCardData()

function deleteItem(index) {
    let card = JSON.parse(localStorage.getItem("card")) || [];
    card.splice(index, 1)
    localStorage.setItem('card',JSON.stringify(card))
    getCardData()
}

getCardData()