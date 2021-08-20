import Link from "next/link";

const index = () => {
  let arr = [1, 2, 3, 4, 5];

  return (
    <div>
      <h1>This is a Blog Landing Page</h1>
      {arr.map((data) => (
        <div key={data}>
          <Link href={`/blog/${data}`}>
            <button>Blog {data}</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default index;
