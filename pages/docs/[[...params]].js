import { useRouter } from "next/router";

const DocsParams = () => {
  const router = useRouter();
  const { params = [] } = router.query;

  if (params?.length === 1) {
    return (
      <div>
        <h1>You are in the docs {params[0]} Page</h1>
      </div>
    );
  } else if (params?.length === 2 && params[1] === "feature") {
    return (
      <div>
        <h1>
          You are in the docs {params[0]} {params[1]} Page
        </h1>
      </div>
    );
  } else if (params?.length === 3) {
    return (
      <div>
        <h1>
          You are in the docs {params[0]} {params[1]} {params[2]} Page
        </h1>
      </div>
    );
  }

  return (
    <div>
      <h1>Docs Home Page</h1>
    </div>
  );
};

export default DocsParams;
