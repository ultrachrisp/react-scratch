export interface FormShape {
  name: string;
  description: string;
  email: string;
  phone: number;
}

export interface BasicComponentProps {
  name: string;
  label: string;
}

export interface TextFieldWrapperProps extends BasicComponentProps {
  placeholder?: string;
  multiline?: boolean;
  disabled?: boolean;
}
