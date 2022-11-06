const getCards = require('./get-cards');
const addCard = require('./add-card');

module.exports = {
    paths:{
        '/':{
            ...getCards
        },
        '/add-card':{
            ...addCard
        }
    }
}