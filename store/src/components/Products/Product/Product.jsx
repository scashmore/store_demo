import React from 'react'
import {Card, CardMedi, CardContent, CardActinos, Typography, IconButton} from '@material-ui-core'
import {AddShoppingCart} from '@material-ui/icons'


const Product = () => {
    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image='' title={Product.name} />

        </Card>
    )
}

export default Product
