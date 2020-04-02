import React from "react";
import App from "next/app";
import { ApolloProvider } from "@apollo/react-hooks";

import withData from "../util/apollo_client";

// const MyApp = ({Component, pageProps, apollo}) => {
//   return (
//     <ApolloProvider client={apollo}>
//       <Component {...pageProps} />
//     </ApolloProvider>
//   );
// }

class SpaceXApp extends App {
  render() {
    const { Component, pageProps, apollo } = this.props;
    return (
      <ApolloProvider client={apollo}>
        <Component {...pageProps} />
      </ApolloProvider>
    );
  }
}

export default withData(SpaceXApp);
