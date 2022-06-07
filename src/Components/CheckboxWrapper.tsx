import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { BasicComponentProps } from '../types';

export function CheckboxWrapper({ name, label }: BasicComponentProps) {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormGroup>
          <FormControlLabel
            control={<Checkbox {...field} checked={field.value} />}
            label={label}
          />
        </FormGroup>
      )}
    />
  );
}
