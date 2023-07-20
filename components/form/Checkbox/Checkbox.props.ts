import { DetailedHTMLProps, HtmlHTMLAttributes, Key } from 'react';
import { FieldValues } from 'react-hook-form';

export interface CheckboxProps
  extends DetailedHTMLProps<
    HtmlHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
  className?: string;
  value: string;
  watchValue?: FieldValues;
  info?: boolean;
  infoInd?: Key;
}
