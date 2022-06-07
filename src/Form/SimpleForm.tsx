import { Box, Grid, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import React from 'react';
import { useFormContext } from 'react-hook-form';
import TextFieldWrapper from '../Components/TextFieldWrapper';

export function SimpleForm(
  { submitForm }: {
    submitForm: (formValues: any) => void;
  }
) {
  const { handleSubmit } = useFormContext();

  return (
    <Box sx={{ p: 4, margin: 'auto' }} justifyContent="center" alignItems="center" width="50vw">
      <form onSubmit={handleSubmit(val => submitForm(val))}>
        <Grid container spacing={2}>

          <Grid item xs={12}>
            <Typography variant="h3">Start of a form</Typography>
          </Grid>

          <Grid item xs={12}>
            <TextFieldWrapper name="name" label="What is your name" />
          </Grid>

          <Grid item xs={12}>
            <TextFieldWrapper name="description" label="Please give a short description" />
          </Grid>

          <Grid item xs={12}>
            <Box display="flex" justifyContent="flex-end">
              <Button type="submit" variant="contained" >Submit</Button>
            </Box>
          </Grid>

        </Grid>
      </form>
    </Box >
  )
}
