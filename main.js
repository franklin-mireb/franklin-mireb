// main.js

import { updateProductList, updateStats, removeProduct, removeClient, products, clients } from './productManager.js';
import { addProduct, addClient, generateReport } from './adminFunctions.js';

document.getElementById("add-product-btn").addEventListener("click", addProduct);
document.getElementById("add-client-btn").addEventListener("click", addClient);
document.getElementById("generate-report-btn").addEventListener("click", generateReport);

// mise à jour de la liste des produits et des statistiques au chargement de la page
window.onload = () => {
    updateProductList();
    updateStats();
};