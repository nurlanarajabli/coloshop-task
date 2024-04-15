const product = document.querySelector("#productCard")
function getAllProducts() {
    axios.get("https://dummyjson.com/products").then(res => {
        let db = res.data.products;
        db.forEach((item)=> {
            let box = document.createElement('div');
            box.className = "productCard";
            box.innerHTML = ` <img
        src = "${item.thumbnail}"
        alt="product"
        style="width:100%;height:100px"
      />
      <div class="cardDesc">
        <h3>${item.title}</h3>
        <p>${item.price}</p>
        <button class="cartBtn" onclick="addToCard(${item.id})">Sebte ekle</button>
      </div>
      `
            product.appendChild(box);
        })
    })
}
getAllProducts()

function addToCard(id){
    console.log("click");
    let card=JSON.parse(localStorage.getItem('card'))||[]
    card.push(db.find(item=>item.id==id))
    localStorage.setItem('card', JSON.stringify(card))
}
window.onload=()=>{
    getAllProducts() 
}
let card = JSON.parse(localStorage.getItem('card'))
if(card.length != 0){
  count.innerHTML = card.length
} else {
  count.style.display = 'none'
}
getAllProducts()
