import React from "react";

import Head from "next/head";
import { useQuery } from "@apollo/react-hooks";

import ROCKET_QUERY from "../graphql/rocket.query";

const RocketDetail = () => {
  const { data, loading, error } = useQuery(ROCKET_QUERY);

  if (loading) return <p>Loading..</p>;
  if (error) return <p>Error: {JSON.stringify(error)}</p>;

  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <ul>
        <li key={data.rocket.id}>
          <p>Rocket Name: {data.rocket.name}</p>
          {/* <p>Owned By: {rocket.company}</p>
            <p>From: {rocket.country}</p>
            <p>Rocket ID: {rocket.id}</p>
            <p>Description: {rocket.description}</p> */}
        </li>
      </ul>
    </div>
  );
};

export default RocketDetail;
