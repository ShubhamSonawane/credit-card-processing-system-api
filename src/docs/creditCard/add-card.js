module.exports = {
    // operation's method
    post: {
      tags: ["Add Card operation"], // operation's tag
      description: "Add Card", // short desc
      operationId: "addCard", // unique operation id
      parameters: [], // expected params
      requestBody: {
        // expected request body
        content: {
          // content-type
          "application/json": {
            schema: {
              $ref: "#/components/schemas/AddCard", // todo input data model
            },
          },
        },
      },
      // expected responses
      responses: {
        // response code
        201: {
          description: "Card added successfully", // response desc
        },
        // response code
        500: {
          description: "Server error", // response desc
        },
      },
    },
  };