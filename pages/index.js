import Link from "next/link";
import { useRouter } from "next/router";
const App = () => {
  const router = useRouter();
  const handleClick = () => {
    alert("Navigating you to Docs Page!");
    router.push("/docs");
  };

  return (
    <div className='container'>
      <h1>hello world</h1>

      {/* using Link Comp directly */}
      <Link href='/blog'>
        <button>Go to Blog</button>
      </Link>

      {/* using on click event */}
      <button onClick={handleClick}>Go to Docs</button>

      <Link href='/article'>
        <button>Go to Article</button>
      </Link>
    </div>
  );
};

export default App;
