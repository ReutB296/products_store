import loadJson from 'load-json-file';
import { ObjectId } from 'mongodb';
import { getUser } from './users.service.mjs';
import { getProductsCollection } from '../db/connect.mjs';

export let products = loadJson.sync('./data/products.json');

export function getProducts() {
    return getProductsCollection()
    .find({})
    .toArray();
}

export async function getProduct(id) {
    const product = await getProductsCollection()
    .findOne({_id: ObjectId(id)});
   
    const owner = await getUser(product.userId);

    product.owner = owner;

    return product;
}

export function addProduct(product) {
    return getProductsCollection()
    .insertOne(product)
}

export function deleteProduct(id) {
    return getProductsCollection()
    .deleteOne({id: parseInt(id)});
}

export function editProduct(id, newProduct) {
    return getProductsCollection()
    .updateOne(
        {id: parseInt(id)},
        {$set: newProduct}
    )
}

export function getProductsByUserId(userId) {
    return products.filter(product => product.userId == userId);
}