import React from 'react'
import {TextField, Button} from '@material-ui/core';

const Search = ({keyword, setKeyword}) => {
    return (
        <div>
        <TextField variant="outlined" 
        placeholder='Search our Store!' 
        style={{marginTop: '1%', marginBottom: '1%', marginLeft: '10%', marginRight: '10%', width: '80%'}} 
        value={keyword}
        InputProps={{ endAdornment: 
        <Button variant="contained">Search</Button> }}>
        </TextField>
        </div>
    )
}

export default Search
