// adminFunctions.js

import { products, clients, updateProductList, updateStats } from './productManager.js';

export function addProduct() {
    const productName = document.getElementById("product-name").value;
    const productPrice = parseFloat(document.getElementById("product-price").value);
    const productDescription = document.getElementById("product-description").value;
    const productStock = parseInt(document.getElementById("product-stock").value);

    if (productName && !isNaN(productPrice) && !isNaN(productStock) && productStock >= 0) {
        const product = {
            name: productName,
            price: productPrice,
            description: productDescription,
            stock: productStock
        };
        products.push(product);
        document.getElementById("product-name").value = '';
        document.getElementById("product-price").value = '';
        document.getElementById("product-description").value = '';
        document.getElementById("product-stock").value = '';
        updateProductList();
        updateStats();
    }
}

export function addClient() {
    const clientName = document.getElementById("client-name").value;
    if (clientName) {
        clients.push(clientName);
        document.getElementById("client-name").value = '';
        updateClientList();
        updateStats();
    }
}

export function generateReport() {
    const reportOutput = document.getElementById("report-output");
    reportOutput.innerHTML = `<strong>Rapport:</strong><br>Produits: ${products.map(p => p.name).join(", ") || 'Aucun produit'}<br>Clients: ${clients.join(", ") || 'Aucun client'}`;
}