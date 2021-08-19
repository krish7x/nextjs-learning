import { useRouter } from "next/router";

const Review = () => {
  const router = useRouter();
  const { blogId, reviewId } = router.query;
  return (
    <div>
      <h1>
        This is blog {blogId} and its review is {reviewId}
      </h1>
    </div>
  );
};

export default Review;
