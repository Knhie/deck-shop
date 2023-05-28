let carts = JSON.parse(localStorage.getItem("carts")) || [];
a=0
for (let i = 0; i < carts.length; i++) {
    // console.log(products.data[i].image);
    //tạo div có class là card
    if (carts[i].quantity > 0) {
        let card = document.createElement("div");
        card.classList.add("card");
        //tạo thẻ img có src là từ các obj trong mảng, có class là img-container
        let img = document.createElement("img");
        img.classList.add("img-container");
        img.setAttribute("src", carts[i].image);
        card.appendChild(img);
        //tạo thẻ div có class là container
        let container = document.createElement("div");
        container.classList.add("container");
        //tạo thẻ h5 có phần content là tên sản phẩm từ các obj bên trong mảng
        let name = document.createElement("h5");
        name.innerText = carts[i].name;
        container.appendChild(name);

        let price = document.createElement("h6");
        price.innerHTML = "<b>Price: </b>" + carts[i].price;
        container.appendChild(price);

        let quantity = document.createElement("h6");
        quantity.innerHTML = "<b>Quantity: </b>" + carts[i].quantity;
        container.appendChild(quantity);
        a+=parseInt(carts[i].quantity)*parseInt((carts[i].price).split('đ -')[0])
        card.appendChild(container);
        document.getElementById("products").appendChild(card);
    }
}
document.getElementsByClassName("cart-total-price")[0].innerText=a
