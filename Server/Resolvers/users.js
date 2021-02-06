const resolvers = {
  Query: {
    getPerson: () => [
      { title: "Hola Emmanuel", stack: "MERN" },
      { title: "Pao", stack: "Dynamo" },
    ],
  },
};

module.exports = resolvers;
