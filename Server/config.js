const { ApolloServer } = require("apollo-server");
const typeDefs = require("./Schema/users.graphql");
const resolvers = require("./Resolvers/users.js");

//Instancia de ApolloServer
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

//Setup del Servidor
server.listen().then(({ url }) => {
  console.log(`*** Servidor de Apollo | URL: ${url}`);
});
