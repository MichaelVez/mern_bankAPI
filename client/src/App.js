import "./App.css";
import { userAPI } from "./api";
import { useEffect, useState } from "react";
import User from "./components/User";
import NewUser from "./components/NewUser";
import GetId from "./components/GetId";
import Deposit from "./components/Deposit";
import Withdraw from "./components/Withdraw";
function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    loadAllUsers();
  }, []);
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
    <div className='App'>
      <h1>Bank API </h1>
      <NewUser loadAllUsers={loadAllUsers} />
      <GetId mapUsers={mapUsers} />
      <Withdraw loadAllUsers={loadAllUsers} />
      <Deposit loadAllUsers={loadAllUsers} />
      <button onClick={loadAllUsers}>Fetch all</button>
      <div className='usersDisplay'>{users}</div>
    </div>
  );
}

export default App;
