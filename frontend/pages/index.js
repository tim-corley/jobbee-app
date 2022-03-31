import Layout from "../components/layout/Layout";
import Home from "../components/Home";

import axios from "axios";

export default function Index({ data }) {
  console.log("\nJOBS DATA:\n", data);
  return (
    <Layout>
      <Home />
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await axios.get(`${process.env.API_URL}/api/jobs/`);
  const data = res.data;

  return {
    props: {
      data,
    },
  };
}
