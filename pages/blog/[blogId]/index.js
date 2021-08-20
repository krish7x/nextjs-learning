import Link from "next/link";
import { useRouter } from "next/router";

const Blogs = () => {
  const router = useRouter();
  const blogId = router.query.blogId;
  return (
    <div>
      <Link href='/blog'>
        <button>Go Back</button>
      </Link>
      <h1>This is blog {blogId} </h1>
    </div>
  );
};

export default Blogs;
