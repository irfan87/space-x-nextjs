import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList,
  GraphQLSchema
} from "graphql";
import gql from "graphql-tag";

const RocketType = new GraphQLObjectType({
  name: "Rocket",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    company: { type: GraphQLString },
    country: { type: GraphQLString },
    description: { type: GraphQLString }
  })
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    rockets: {
      type: new GraphQLList(RocketType),
      resolve: (parent, args) => {
        return args;
      }
    }
  }
});

module.exports = new GraphQLSchema({ query: RootQuery });
