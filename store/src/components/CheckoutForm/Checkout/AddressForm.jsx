import React from 'react'
import { InputLabel, Select, MenuItem, Button, Grid, Typography} from '@material-ui/core';
import {useForm, FormProvider} from 'react-hook-form';
import FormInput from './CustomTextFeild';

const AddressForm = () => {
    const methods = useForm();
    return (
        <>
          <Typography variant='h6' gutterbottom>Shipping Address</Typography>
          <FormProvider {...methods}>
            <form onSubmit=''>
                <Grid container spacing={3}>
                    <FormInput required name='firstName' label='First Name' />
                    <FormInput required name='lastName' label='Last Name' />
                    <FormInput required name='address1' label='Address' />
                    <FormInput required name='email' label='Eamil' />
                    <FormInput required name='city' label='City' />
                    <FormInput required name='zip' label='Postal Code' />
                    <Grid item xs={12} sm={6}>
                        <InputLabel>Shipping Country</InputLabel>
                        <Select value={} fullWidth onChange={}>
                            <MenuItem key={} value={}>
                                Select Me
                            </MenuItem>
                        </Select>
                    </Grid>
                </Grid>
            </form>
          </FormProvider>
        </>
    );
}

export default AddressForm
