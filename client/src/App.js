import "./App.css";
import { userAPI } from "./api";
function App() {
  const handleClick = async () => {
    // const data1 = await fetch("/users/getAll");
    // console.log(data1);
    try {
      const data = await userAPI.get("/getAll");
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <h1>Bank API </h1>
      <button onClick={handleClick}>test</button>
    </div>
  );
}

export default App;
