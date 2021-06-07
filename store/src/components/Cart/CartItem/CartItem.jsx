import React from 'react'
import { Typography, Button, Card, CardActions, CardContent, CardMedia} from '@material-ui/core';
import useStyles from './styles';

const CartItem = ({item}) => {
    const classes = useStyles();
    return (
        <Card>
            <CardMedia image={item.media.source} alt={item.name} className={classes.media}/>
            <CardContent classname={classes.cardContent}>
                <Typography variant="h4">{item.name}</Typography>
                <Typography variant="h5">{item.line_total.fotmatted_with_symbol}</Typography>
            </CardContent>
            <CardActions className={classes.action}>
                <div className={classes.buttons}>
                    <Button type="buttom" size="small">-</Button>
                    <Typography>{item.quantity}</Typography>
                    <Button type="buttom" size="small">+</Button>
                </div>
                <Button variant="contained" type="button" color="secondary">
                    Remove
                </Button>
            </CardActions>
            
        </Card>
    )
}

export default CartItem
