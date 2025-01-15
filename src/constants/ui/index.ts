import { InputLabel } from './input';
import { ButtonText } from './button';

export { InputLabel, ButtonText };

export type InputLabelType = (typeof InputLabel)[keyof typeof InputLabel];
export type ButtonTextType = (typeof ButtonText)[keyof typeof ButtonText];
