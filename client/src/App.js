import "./App.css";
import { userAPI } from "./api";
import { useState } from "react";
import User from "./components/User";
import NewUser from "./components/NewUser";
function App() {
  const [users, setUsers] = useState([]);
  const loadAllUsers = async () => {
    try {
      const { data } = await userAPI.get("/getAll");
      mapUsers(data);
    } catch (e) {
      console.log(e);
    }
  };
  const mapUsers = (users) => {
    setUsers(
      users.map((user) => {
        return (
          <div key={user._id}>
            <User key={user._id} user={user} />
          </div>
        );
      })
    );
  };
  return (
    <div>
      <h1>Bank API </h1>
      <button onClick={loadAllUsers}>Fetch all</button>
      <div>{users}</div>
      <NewUser loadAllUsers={loadAllUsers} />
    </div>
  );
}

export default App;
