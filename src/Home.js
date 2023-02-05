import { useState, useEffect } from "react";
import Login from "./components/Login";
import App from "./App";
import firebase from "./services/firebase";

import "./App.css";

function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  console.log(user);

  return (
    <div className="app" >
      <h1 className="headi">Welcome to Shopcart</h1>
      {user ? <App user={user} /> : <Login />}
    </div>
  );
}

export default Home;
