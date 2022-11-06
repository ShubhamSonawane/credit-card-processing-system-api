module.exports = {
    components: {
      schemas: {
        // credit card model
        Card: {
          type: "object", // data type
          properties: {
            id: {
              type: "string", // data-type
              description: "Card identification number", // desc
              example: "ytyVgh", // example of an id
            },
            name: {
              type: "string", // data-type
              description: "Card holder's name", // desc
              example: "Some Name", // example of a title
            },
            cardNumber: {
              type: "number", // data type
              description: "Card number of user", // desc
              example: 374245455400126, // example of a completed value
            },
            balance: {
                type: "number", // data type
                description: "Balance for the card", // desc
                example: 456, // example of a completed value
            },
              limit: {
                type: "number", // data type
                description: "Credit card limit", // desc
                example: 450, // example of a completed value
              },
          },
        },
        // Add Card input model
        AddCard: {
          type: "object", // data type
          properties: {
            name: {
              type: "string", // data-type
              description: "Card holder's name", // desc
              example: "Some Name", // example of a title
            },
            cardNumber: {
              type: "number", // data type
              description: "Card number of user", // desc
              example: 374245455400126, // example of a completed value
            },
            limit: {
              type: "number", // data type
              description: "Credit card limit", // desc
              example: 450, // example of a completed value
            },
          },
        },
        // error model
        Error: {
          type: "object", //data type
          properties: {
            message: {
              type: "string", // data type
              description: "Error message", // desc
              example: "Not found", // example of an error message
            },
            internal_code: {
              type: "string", // data type
              description: "Error internal code", // desc
              example: "Invalid parameters", // example of an error internal code
            },
          },
        },
      },
    },
  };