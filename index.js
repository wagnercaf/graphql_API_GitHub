const { ApolloServer } = require("apollo-server");
const graphql = require("./src/graphql");
const config = require("./src/Config")

const server = new ApolloServer({
  ...graphql,
  ...config,
});

server.listen().then(({ url }) => console.log(url));