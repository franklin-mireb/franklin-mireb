// productManager.js

export let products = [];
export let clients = [];

export function updateProductList() {
    const productList = document.getElementById("product-list");
    productList.innerHTML = '';
    products.forEach((product, index) => {
        productList.innerHTML += `
            <li>${product.name} - ${product.price}€ - ${product.description} - Stock: ${product.stock}
                <button onclick="removeProduct(${index})">Supprimer</button>
            </li>`;
    });
  
    localStorage.setItem("products", JSON.stringify(products));
}

export function removeProduct(index) {
    products.splice(index, 1);
    updateProductList();
    updateStats();
}

export function updateStats() {
    document.getElementById("product-count").innerText = products.length;
    document.getElementById("client-count").innerText = clients.length;
}

export function removeClient(index) {
    clients.splice(index, 1);
    updateClientList();
    updateStats();
}

export function updateClientList() {
    const clientList = document.getElementById("client-list");
    clientList.innerHTML = '';
    clients.forEach((client, index) => {
        clientList.innerHTML += `<li>${client} <button onclick="removeClient(${index})">Supprimer</button></li>`;
    });
}