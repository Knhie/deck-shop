let products = {
    data: [
        {
            name: "MATRIX 1999 DECK",
            price: "780.000đ - 1.470.000đ",
            image: "images/matrix-1999-1.jpg"
        },

        {
            name: "RAEDA DECK",
            price: "780.000đ - 1.470.000đ",
            image: "images/Raeda-Deck.jpg"
        },

        {
            name: "MUSTY DECK",
            price: "780.000đ - 1.470.000đ",
            image: "images/Musty-Deck.jpg"
        },

        {
            name: "TRISTIQUE DECK",
            price: "780.000đ - 1.470.000đ",
            image: "images/Tristique-deck.jpg"
        },

        {
            name: "FIELD TRIP DECK",
            price: "780.000đ - 1.470.000đ",
            image: "images/Fied-Trip-deck.jpg"
        },

        {
            name: "TARO RAINBOW LOGO DECK",
            price: "780.000đ - 1.670.000đ",
            image: "images/web-5.jpg"
        },

        {
            name: "NEON RAINBOW LOGO DECK",
            price: "780.000đ - 1.670.000đ",
            image: "images/web-1.jpg"
        },

        {
            name: "ORANAGE RAINBOW LOGO DECK",
            price: "780.000đ - 1.670.000đ",
            image: "images/web-2.jpg"
        },

        {
            name: "BLUE RAINBOW LOGO DECK",
            price: "780.000đ - 1.670.000đ",
            image: "images/web-3.jpg"
        },

        {
            name: "WHITE RAINBOW LOGO DECK",
            price: "780.000đ - 1.670.000đ",
            image: "images/web-4.jpg"
        },

        {
            name: "CUTIS MODEL DECK",
            price: "780.000đ - 1.670.000đ",
            image: "images/cutis.jpg"
        },

        {
            name: "CAM VU MODEL DECK",
            price: "780.000đ - 1.670.000đ",
            image: "images/cam-vu.jpg"
        },

        {
            name: "SON NGUYEN MODEL DECK",
            price: "780.000đ - 1.670.000đ",
            image: "images/son-nguyen.jpg"
        },
    ]
};

for (let i = 0; i < products.data.length; i++) {
    // console.log(products.data[i].image);
    //tạo div có class là card
    let card = document.createElement("div");
    card.classList.add("card");
    //tạo thẻ img có src là từ các obj trong mảng, có class là img-container
    let img = document.createElement("img");
    img.classList.add("img-container");
    img.setAttribute("src", products.data[i].image);
    card.appendChild(img);
    //tạo thẻ div có class là container
    let container = document.createElement("div");
    container.classList.add("container");
    //tạo thẻ h5 có phần content là tên sản phẩm từ các obj bên trong mảng
    let name = document.createElement("h5");
    name.classList.add("product-name")
    name.innerText = products.data[i].name;
    container.appendChild(name);

    let price = document.createElement("h6");
    price.innerHTML = "<b>Price: </b>" + products.data[i].price;
    container.appendChild(price);

    let btn = document.createElement("button");
    btn.setAttribute("onclick", `addToCart("${products.data[i].name}")`);
    btn.innerText = "THÊM VÀO GIỎ HÀNG";
    container.appendChild(btn);

    card.appendChild(container);
    document.getElementById("products").appendChild(card);
}

let carts = [
    {
        name: "MATRIX 1999 DECK",
        price: "780.000đ - 1.470.000đ",
        image: "images/matrix-1999-1.jpg",
        quantity: 0
    },

    {
        name: "RAEDA DECK",
        price: "780.000đ - 1.470.000đ",
        image: "images/Raeda-Deck.jpg",
        quantity: 0
    },

    {
        name: "MUSTY DECK",
        price: "780.000đ - 1.470.000đ",
        image: "images/Musty-Deck.jpg",
        quantity: 0
    },

    {
        name: "TRISTIQUE DECK",
        price: "780.000đ - 1.470.000đ",
        image: "images/Tristique-deck.jpg",
        quantity: 0
    },

    {
        name: "FIELD TRIP DECK",
        price: "780.000đ - 1.470.000đ",
        image: "images/Fied-Trip-deck.jpg",
        quantity: 0
    },

    {
        name: "TARO RAINBOW LOGO DECK",
        price: "780.000đ - 1.670.000đ",
        image: "images/web-5.jpg",
        quantity: 0
    },

    {
        name: "NEON RAINBOW LOGO DECK",
        price: "780.000đ - 1.670.000đ",
        image: "images/web-1.jpg",
        quantity: 0
    },

    {
        name: "ORANAGE RAINBOW LOGO DECK",
        price: "780.000đ - 1.670.000đ",
        image: "images/web-2.jpg",
        quantity: 0
    },

    {
        name: "BLUE RAINBOW LOGO DECK",
        price: "780.000đ - 1.670.000đ",
        image: "images/web-3.jpg",
        quantity: 0
    },

    {
        name: "WHITE RAINBOW LOGO DECK",
        price: "780.000đ - 1.670.000đ",
        image: "images/web-4.jpg",
        quantity: 0
    },

    {
        name: "CUTIS MODEL DECK",
        price: "780.000đ - 1.670.000đ",
        image: "images/cutis.jpg",
        quantity: 0
    },

    {
        name: "CAM VU MODEL DECK",
        price: "780.000đ - 1.670.000đ",
        image: "images/cam-vu.jpg",
        quantity: 0
    },

    {
        name: "SON NGUYEN MODEL DECK",
        price: "780.000đ - 1.670.000đ",
        image: "images/son-nguyen.jpg",
        quantity: 0
    }
];

function addToCart(name) {
    for (let i = 0; i < carts.length; i++) {
        if (carts[i].name == name) {
            carts[i].quantity += 1;
        }
    }

    localStorage.setItem("carts", JSON.stringify(carts));
}


function search () {
    let searchInput = document.getElementById("searchInput").value
    let h5_product_name = document.getElementsByClassName("product-name")
    let card = document.getElementsByClassName("card")

    for ( let i=0; i<card.length; i++){
        if (h5_product_name[i].innerText.includes(searchInput.toUpperCase())) {
            card[i].classList.remove("hide")
        }else {
            card[i].classList.add("hide")
        }
    }


}

