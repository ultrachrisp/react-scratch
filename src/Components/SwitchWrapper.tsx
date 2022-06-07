import { FormControlLabel, FormGroup, Switch } from '@mui/material';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { BasicComponentProps } from '../types';

export function SwitchWrapper({ name, label }: BasicComponentProps) {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormGroup>
          <FormControlLabel
            control={<Switch {...field} checked={field.value} />}
            label={label}
          />
        </FormGroup>
      )}
    />
  );
}
