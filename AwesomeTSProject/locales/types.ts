import {LANGUAGE} from './constants';

export interface ITranslaterOptions {
  value: number;
  variants: string[];
  converter: (value: number, variant: string) => string;
}

export interface ITranslate {
  [key: string]: ReturnType<string>;
}

export interface IState {
  language: keyof typeof LANGUAGE;
  translate: ITranslate;
  changeLanguage: (newLanguage: keyof typeof LANGUAGE) => void;
}
