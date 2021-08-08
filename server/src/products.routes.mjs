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
productsRouter.post('/',async (req, res) => {
    res.send(await addProduct(req.body));
});

// Get single product from the list
productsRouter.get('/:id', async (req, res) => {
    try{
    res.send(await getProduct(req.params.id));
    }catch(e){
        console.log(e);
    }
});

// Update single product from the list
productsRouter.put('/:id',async (req, res) => {
    res.send(await editProduct(req.params.id, req.body))
});

// Delete single product from the list
productsRouter.delete('/:id',async (req, res) => {
    res.send(await deleteProduct(req.params.id));
});



