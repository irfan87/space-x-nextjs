import React, { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

import RootQuery from "../graphql/spacex.query";
import RocketDetail from "./rocket_detail";

const ROCKETS_QUERY = gql`
  query RocketQuery {
    rockets {
      id
      name
      company
      country
    }
  }
`;

const Home = () => {
  const { data, loading, error } = useQuery(ROCKETS_QUERY);

  if (loading) return <p>Loading..</p>;
  if (error) return <p>Error: {JSON.stringify(error)}</p>;
  // const ShowRocketDetails = ({ rocket }) => {
  //   return <Link href="wwww.google.com">Test</Link>;
  // };
  const rocketsMap = data.rockets.map(rocket => {
    return (
      <Fragment>
        {/* <ShowRocketDetails /> */}

        <li key={rocket.id}>
          <p>
            Rocket Name:{" "}
            <Link href="/p/[id]" as={`/p/${rocket.id}`}>
              {rocket.name}
            </Link>
          </p>
          <p>Owned By: {rocket.company}</p>
          <p>From: {rocket.country}</p>
          <p>Rocket ID: {rocket.id}</p>
          <p>Description: {rocket.description}</p>
        </li>
      </Fragment>
    );
  });

  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <ul>{rocketsMap}</ul>
    </div>
  );
};

export default Home;
