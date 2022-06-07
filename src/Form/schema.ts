import * as yup from 'yup';
import { FormShape } from '../types';

export const FormSchema: yup.SchemaOf<FormShape> = yup.object({
  name: yup.string().required('Filter name is required'),
  description: yup.string().required('Filter type is required'),
});
