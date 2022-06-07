import * as yup from 'yup';
import { FormShape } from '../types';

export const FormSchema: yup.SchemaOf<FormShape> = yup.object({
  name: yup.string().required('Name is required').min(5, 'Name must be more than 5 charaters'),
  description: yup.string().required('Description is required'),
  email: yup.string().required('Email is required').email('Email is not correctly formatted'),
  phone: yup.number().required("Number is required").min(5, "More than 5 numbers"),
});
