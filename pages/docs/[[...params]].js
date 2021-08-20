import Link from "next/link";
import { useRouter } from "next/router";

const DocsParams = () => {
  const router = useRouter();
  const { params = [] } = router.query;

  let arr = [1, 2, 3, 4, 5];

  if (params?.length === 1) {
    return (
      <div>
        <Link href='/docs'>
          <button>Go Back</button>
        </Link>
        <h1>You are in the docs {params[0]} Page</h1>
        <Link href={`/docs/${params[0]}/feature`}>
          <button>See Feature</button>
        </Link>
      </div>
    );
  } else if (params?.length === 2 && params[1] === "feature") {
    return (
      <div>
        <Link href={`/docs/${params[0]}`}>
          <button>Go Back</button>
        </Link>
        <h1>
          You are in the docs {params[0]} {params[1]} Page
        </h1>
        {arr.map((data) => (
          <Link href={`/docs/${params[0]}/${params[1]}/${data}`}>
            <button>Go to {data} Page</button>
          </Link>
        ))}
      </div>
    );
  } else if (params?.length === 3) {
    return (
      <div>
        <Link href={`/docs/${params[0]}/${params[1]}`}>
          <button>Go Back</button>
        </Link>
        <h1>
          You are in the docs {params[0]} {params[1]} {params[2]} Page
        </h1>
      </div>
    );
  }

  return (
    <div>
      <Link href='/'>
        <button>Go to home</button>
      </Link>
      <h1>Docs Home Page</h1>
      {arr.map((data) => (
        <div key={data}>
          <Link href={`/docs/${data}`}>
            <button>Docs {data}</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default DocsParams;
