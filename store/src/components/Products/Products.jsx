import React from 'react';
import Grid from '@material-ui/core';

const products = [
    {id: 1, name: 'lego', description: 'building toy', price: '$20'},
    {id: 1, name: 'barbie', description: 'dolltoy', price: '$15'},
]

const Products = () => {
    <main>
        <Grid container justify="center" spaceing={4}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product}/>
                </Grid>
            ))}
        </Grid>
    </main>
}

export default Products;