import React from 'react';
import Grid from '@material-ui/core';

const products = [
    {id: 1, name: 'lego', description: 'building toy'},
    {id: 1, name: 'barbie', description: 'dolltoy'},
]

const Products = () => {
    <main>
        <Grid container justify="center" spaceing={4}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product />
                </Grid>
            ))}
        </Grid>
    </main>
}

export default Products;