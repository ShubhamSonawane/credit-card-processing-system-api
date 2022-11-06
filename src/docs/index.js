
const basicInfo = require('./basicInfo');
const servers = require('./servers');
const components = require('./components');
const tags = require('./tags');
const creditCard = require('./creditCard');

module.exports = {
    ...basicInfo,
    ...servers,
    ...components,
    ...tags,
    ...creditCard
};