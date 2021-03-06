import { ChangeEvent, FunctionComponent, ReactNode } from "react";
import { Theme } from "styled-system";
import { CommonProps } from "../../utils/common";
import { BoxProps } from "../Box";

export interface CheckboxProps extends CommonProps {
  checked: boolean;
  children: ReactNode;
  defaultChecked: boolean;
  disabled?: boolean;
  error?: "default" | "error" | "warning" | "success";
  id: string;
  name?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  theme?: Theme;
  value?: any;
}

export interface CheckboxGroupProps extends BoxProps {
  children: ReactNode;
  defaultValue: any;
  disabled?: boolean;
  error?: "default" | "error" | "warning" | "success";
  theme?: Theme;
  vertical?: boolean;
}

interface Checkbox extends FunctionComponent<CheckboxProps> {
  Group: FunctionComponent<CheckboxGroupProps>;
}

declare const Checkbox: Checkbox;

export default Checkbox;
