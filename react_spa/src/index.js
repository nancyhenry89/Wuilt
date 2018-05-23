import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
import "./index.css";
import {IntlProvider} from "react-intl";
import { addLocaleData } from "react-intl";
import locale_en from 'react-intl/locale-data/en';
import locale_de from 'react-intl/locale-data/de';

import messages_de from "./translations/de.json";
import messages_en from "./translations/en.json";
addLocaleData([...locale_en, ...locale_de]);
const messages = {
    'de': messages_de,
    'en': messages_en
};

const language = navigator.language.split(/[-_]/)[0];  // language without region code
ReactDOM.render(
  <IntlProvider locale={language} messages={messages[language]}>
  <Main/>
</IntlProvider>,  
  document.getElementById("root")
);
