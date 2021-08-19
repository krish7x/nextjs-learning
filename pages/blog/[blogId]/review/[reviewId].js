import { useRouter } from "next/router";

const Review = () => {
  const router = useRouter();
  const blogId = router.query.blogId;
  return (
    <div>
      <h1>This is review {blogId} </h1>
    </div>
  );
};

export default Review;
