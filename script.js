let cart = [];
let total = 0;

function addToCart(name, price) {
    cart.push({ name, price });
    total += price;

    document.getElementById("cart-count").innerText = cart.length;
    updateCart();
}

function updateCart() {
    let list = document.getElementById("cart-list");
    list.innerHTML = "";

    cart.forEach((item) => {
        let li = document.createElement("li");
        li.innerText = `${item.name} - ₹${item.price}`;
        list.appendChild(li);
    });

    document.getElementById("total-price").innerText = total;
}

function toggleCart() {
    let box = document.getElementById("cart-box");
    box.style.display = box.style.display === "none" || box.style.display === "" 
        ? "block" 
        : "none";
}
