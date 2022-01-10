import React, {createContext, Component} from 'react';
import {LANGUAGE} from '../locales/constants';
import {ITranslate, IState} from '../locales/types';
import ru from '../locales/ru/translate';
import en from '../locales/en/translate';

export const localeContex = createContext<IState>(undefined!);

export default class LocaleProvider extends Component {
  state = {
    language: LANGUAGE.en,
    translate: en,
    changeLanguage: (newLanguage: keyof typeof LANGUAGE) => {
      let translate: ITranslate;
      let language: keyof typeof LANGUAGE;
      switch (newLanguage) {
        case LANGUAGE.ru:
          language = LANGUAGE.ru;
          translate = ru;
          break;
        case LANGUAGE.en:
          language = LANGUAGE.en;
          translate = en;
          break;
        default:
          language = LANGUAGE.en;
          translate = en;
      }
      this.setState(prev => ({...prev, language, translate}));
    },
  };

  render() {
    return (
      <localeContex.Provider value={this.state}>
        {this.props.children}
      </localeContex.Provider>
    );
  }
}
