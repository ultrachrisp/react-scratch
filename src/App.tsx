import Grid from '@mui/material/Grid';
import Textfield from '@mui/material/TextField';
import React from 'react';
import { useForm } from 'react-hook-form';
import './App.css';





function App() {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  }

  console.log(errors);

  return (
    <div className="App">
      <br />
      <br />
      <br />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <input {...register("dummy", { required: true, maxLength: 80 })} />
          </Grid>
          <Grid item xs={12}>
            <Textfield label="Outlined" variant="outlined"  {...register("dummy2", {
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
            <button type="submit">Submit</button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default App;
