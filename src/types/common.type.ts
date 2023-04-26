import type { sizeType } from '@/configs/common.config';

export type SizeType = keyof typeof sizeType;

export type SingleValueType = string | number;

export type HandleChange = (value: SingleValueType) => void;