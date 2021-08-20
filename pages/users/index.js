import User from "../../components/user";
const Users = ({ users, todos }) => {
  console.log(todos);
  return (
    <div>
      <h1>User Component</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "80%",
        }}>
        <div
          style={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}>
          {users?.map((data) => (
            <User user={data} />
          ))}
        </div>
        <div
          style={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}>
          {todos?.map((data) => (
            <p>{data?.title}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Users;

export const getStaticProps = async () => {
  const users = await fetch("https://jsonplaceholder.typicode.com/users");
  const todos = await fetch("https://jsonplaceholder.typicode.com/todos");
  return {
    props: {
      users: await users.json(),
      todos: await todos.json(),
    },
  };
};
