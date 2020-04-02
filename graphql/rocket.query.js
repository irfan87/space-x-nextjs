import gql from "graphql-tag";

const ROCKET_QUERY = gql`
  {
    rocket(id: String) {
      name
    }
  }
`;

export default ROCKET_QUERY;
