import express from 'express';
import logger from 'morgan';

import { productsRouter } from './src/products.routes.mjs';
import { usersRouter } from './src/users.routes.mjs';
import { categoriesRouter } from './src/categories.routes.mjs';
import { postsRouter } from './src/posts.routes.mjs'

export const app = express();

app.use(logger('dev'));

app.use(express.json());

app.use('/products', productsRouter);
app.use('/users', usersRouter);
app.use('/categories', categoriesRouter);
app.use('/posts', postsRouter);

app.use(express.static('../simple-products-catalog-react/build/'));

app.listen(8080);

console.log("Server is listening on http://localhost:8080");