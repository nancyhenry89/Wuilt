var hasIntl = typeof(Intl) !== "undefined";


function de(cb, scope) {
  if (!hasIntl)
    require.ensure(['intl/locale-data/jsonp/de.js', './de'], function (require) {
      console.log('Loaded bundle for de (with Intl)');
      require('intl/locale-data/jsonp/de.js');
      var i18n = require('./de');
      cb.call(scope, i18n);
    }, 'de-intl');
  else {
    require.ensure(['./de'], function (require) {
      console.log('Loaded bundle for de (without Intl)');
      var i18n = require('./de');
      cb.call(scope, i18n);
    }, 'de-without-intl');
  }
}

function en(cb, scope) {
  if (!hasIntl)
    require.ensure(['intl/locale-data/jsonp/en.js', './en'], function (require) {
      console.log('Loaded bundle for en (with Intl)');
      require('intl/locale-data/jsonp/en.js');
      var i18n = require('./en');
      cb.call(scope, i18n);
    }, 'en-intl');
  else {
    require.ensure(['./en'], function (require) {
      console.log('Loaded bundle for en (without Intl)');
      var i18n = require('./en');
      cb.call(scope, i18n);
    }, 'en-without-intl');
  }
}

var loaders = {
  en: en,
  de: de,

}

module.exports = function(locale, cb, scope) {
  if(!hasIntl)
    require.ensure(['intl/Intl'], function (require) {
      require('intl/Intl');
      loaders[locale](cb, scope);
    }, 'intl-shim');
  else
    loaders[locale](cb, scope);
};
