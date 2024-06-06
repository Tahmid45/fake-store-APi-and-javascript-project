
const loadAllProduct = () => {
    fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((data)=>{
                displayProduct(data);
            });
};

const displayProduct = (products) => {
    const productContainer = document.getElementById("product-container");

    products.forEach(product => {
        console.log(product);
        const div = document.createElement("div");
            div.classList.add("card");
        div.innerHTML= `
        <img class="card-img" src = ${product.image} alt=" "/>
        <h5>${product.title.slice(0,10)}</h5>
        <h5>${product.price}</h5>
        <p>${product.description.slice(0, 50)}</p>
        <button onclick = "singleProduct('${product.id}')">Details</button>
        <button onclick="handleAddToCart('${product.title}',${product.price})">Add to Cart</button>
        `;

        productContainer.appendChild(div);
        
    });
};

const handleAddToCart = (name, price) =>{
    const cartCount = document.getElementById("count").innerText; 
    let convertCount = parseInt(cartCount); 
    convertCount = convertCount + 1;
    document.getElementById("count").innerText = convertCount;
    const cartContainer = document.getElementById("cart-main-container");

    const div = document.createElement("div");
    div.classList.add("cart-info")
    div.innerHTML = `
    <p>${name.slice(0,5)}</p>
    <h3 class="price">${price}</h3>
    `;

    cartContainer.appendChild(div);
    updateTotal();
};

const updateTotal = () => {
    const allPrice = document.getElementsByClassName("price");
    let count = 0;
    for(const element of allPrice){
        count = count + parseFloat(element.innerText);
    }
    document.getElementById("total").innerText = count.toFixed(2);
};

const singleProduct = (id)=> {
    console.log(id);
    fetch(`https://fakestoreapi.com/products/${id}`)
                .then((res)=>res.json())
                .then(data => modal_func(data))
};


const modal_func = (product_info) => {
    
}; 

loadAllProduct();