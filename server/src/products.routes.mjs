import express from 'express';
import { getProducts } from './products.service.mjs';
import { addProduct } from './products.service.mjs';
import { getProduct } from './products.service.mjs';
import { editProduct } from './products.service.mjs';
import { deleteProduct } from './products.service.mjs';

export const productsRouter = express.Router();

// Get products list
productsRouter.get('/', async (req, res) => {
    res.send(await getProducts());
});

// Create new product in the products list
productsRouter.post('/', (req, res) => {
    res.send(addProduct(req.body));
});

// Get single product from the list
productsRouter.get('/:id', async (req, res) => {
    res.send(await getProduct());
});

// Update single product from the list
productsRouter.put('/:id', (req, res) => {
    res.send(editProduct(req.params.id, req.body))
});

// Delete single product from the list
productsRouter.delete('/:id', (req, res) => {
    res.send(deleteProduct(req.params.id));
});



