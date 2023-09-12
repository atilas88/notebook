// SPDX-FileCopyrightText: Orelvys García Guzmán <o.kgarcia1988@gmail.com>
// SPDX-License-Identifier: AGPL-3.0-or-later
module.exports = {
    globals: {
        appVersion: true
    },
    parserOptions: {
        requireConfigFile: false
    },
    extends: [
        '@nextcloud'
    ],
    rules: {
        'jsdoc/require-jsdoc': 'off',
        'jsdoc/tag-lines': 'off',
        'vue/first-attribute-linebreak': 'off',
        'import/extensions': 'off'
    }
}
