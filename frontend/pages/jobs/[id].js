import Layout from "../../components/layout/Layout";
import JobDetails from "../../components/job/JobDetails";
import NotFound from "../../components/layout/NotFound";

import axios from "axios";

export default function JobDetailsPage({ job, candidates, error }) {
  if (error?.includes("Not found")) return <NotFound />;
  return (
    <Layout title={job.title}>
      <JobDetails job={job} candidates={candidates} />
    </Layout>
  );
}

export async function getServerSideProps({ params }) {
  try {
    const res = await axios.get(
      `${process.env.API_URL}/api/jobs/${params.id}/`
    );
    const candidates = res.data.candidates;
    const job = res.data.job;

    return {
      props: {
        job,
        candidates,
      },
    };
  } catch (error) {
    return { props: { error: error.response.data.detail } };
  }
}
