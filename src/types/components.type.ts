import type { SingleValueType, SizeType } from './common.type';

export interface IInput {
  value: SingleValueType;
  placeholder?: string;
  size?: SizeType;
}
