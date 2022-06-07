import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { FormShape } from '../types';
import { FormSchema } from './schema';
import { SimpleForm } from './SimpleForm';

const defaultValues: FormShape = {
  name: '',
  description: ''
}

function Form() {
  const formContext = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(FormSchema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  }

  return (
    <FormProvider {...formContext}>
      <SimpleForm submitForm={onSubmit} />
    </FormProvider>
  );
}

export default Form;
