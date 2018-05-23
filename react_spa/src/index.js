import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
import "./index.css";
import {IntlProvider} from "react-intl";
import { addLocaleData } from "react-intl";
import locale_en from 'react-intl/locale-data/en';
import locale_ar from 'react-intl/locale-data/ar';

import messages_ar from "./translations/ar.json";
import messages_en from "./translations/en.json";
addLocaleData([...locale_en, ...locale_ar]);
const messages = {
    'ar': messages_ar,
    'en': messages_en
};
if(localStorage.getItem('lang')==null){
  debugger;
  var language="en";
}else{
  var language =localStorage.getItem('lang');
}
ReactDOM.render(
  <IntlProvider locale={language} messages={messages[language]}>
  <Main/>
</IntlProvider>,  
  document.getElementById("root")
);
