export interface FormShape {
  name: string;
  description: string;
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
