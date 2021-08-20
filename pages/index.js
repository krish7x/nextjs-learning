import Link from "next/link";

const App = () => {
  return (
    <div className='container'>
      <h1>hello world</h1>
      <Link href='/blog'>
        <button>Click Me</button>
      </Link>
    </div>
  );
};

export default App;
