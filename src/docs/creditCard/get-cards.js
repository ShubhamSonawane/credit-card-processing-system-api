module.exports = {
    // method of operation
    get: {
      tags: ["Get existing cards operations"], // operation's tag.
      description: "Get existing Cards", // operation's desc.
      operationId: "getCards", // unique operation id.
      parameters: [], // expected params.
      // expected responses
      responses: {
        // response code
        200: {
          description: "Cards were obtained", // response desc.
          content: {
            // content-type
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Card", // Card model
              },
            },
          },
        },
      },
    },
  };