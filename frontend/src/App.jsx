import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("/api/contacts").then((response) => {
      setData(response?.data?.data);
    });
  }, []);
  console.log("data", data);
  return (
    <>
      <div>
        <h1>FullStack web app</h1>
        {data?.map((item) => {
          return <div>{item.title}</div>;
        })}
      </div>
    </>
  );
}

export default App;
