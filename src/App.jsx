import { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);
  let BASE_URL = "https://randomuser.me/api/?inc=name,picture&results=48";

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(BASE_URL);
        const data = await res.json();
        const users = data.results;

        // console.log(dataReq);
        setUsers(users);
        // console.log(users);
      } catch (error) {
        console.log("error");
      }
    }

    fetchData();
  }, []);

  if (!users) return <div>Loading...</div>;

  return (
    <div className="container">
      <ul className="col-2 user">
        {users.map((user) => (
          <li key={user.id}>
            {user.name.title} {user.name.first} {user.name.last}
            <img src={user.picture.large} alt={user.picture.large} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
