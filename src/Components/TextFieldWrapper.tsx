import TextField from '@mui/material/TextField';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { TextFieldWrapperProps } from '../types';

export default function TextFieldWrapper({
  name,
  label,
  placeholder,
  multiline,
  disabled,
}: TextFieldWrapperProps) {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          fullWidth
          multiline={multiline}
          disabled={disabled}
          placeholder={placeholder}
          label={label}
          error={!!error}
          helperText={error?.message}
        />
      )}
    />
  );
}
