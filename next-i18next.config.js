const path = require('path')
module.exports = {
    i18n: {
        defaultLocale: 'es',
        locales: ['es', 'en', 'it', 'de', 'fr'],
        localePath: path.resolve('./public/locales'),
        reloadOnPrerender: true
    }
};