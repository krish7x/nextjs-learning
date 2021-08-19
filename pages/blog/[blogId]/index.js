import { useRouter } from "next/router";

const Blogs = () => {
  const router = useRouter();
  const blogId = router.query.blogId;
  return (
    <div>
      <h1>This is blog {blogId} </h1>
    </div>
  );
};

export default Blogs;
