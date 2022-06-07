import { Box, Grid, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Textfield from '@mui/material/TextField';
import React from 'react';
import { useForm } from 'react-hook-form';

function Form() {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  }

  console.log(errors);

  return (
    <Box sx={{ p: 4 }} justifyContent="center" alignItems="center" minWidth="100px">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h3">Start of a form</Typography>
              </Grid>
              <Grid item xs={12}>
                <Textfield label="Outlined" variant="outlined" fullWidth  {...register("dummy2", {
                  required: true,
                  minLength: {
                    value: 10,
                    message: "greater than 10"
                  },
                  maxLength: {
                    value: 15,
                    message: "less than 15"
                  },
                })} error={!!errors.dummy2} helperText={errors.dummy2 && errors.dummy2.message} />
              </Grid>
              <Grid item xs={12}>
                <Box display="flex" justifyContent="flex-end">
                  <Button type="submit" variant="contained" >Submit</Button>
                </Box>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Form;
