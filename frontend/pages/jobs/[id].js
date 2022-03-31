import Layout from "../../components/layout/Layout";

import axios from "axios";

export default function JobDetailsPage({ job, candidates }) {
  console.log(job);
  console.log(candidates);
  return (
    <Layout>
      <h1>Job Details</h1>
    </Layout>
  );
}

export async function getServerSideProps({ params }) {
  const res = await axios.get(`${process.env.API_URL}/api/jobs/${params.id}/`);
  const candidates = res.data.candidates;
  const job = res.data.job;

  return {
    props: {
      job,
      candidates,
    },
  };
}
