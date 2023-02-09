import { useState, useEffect } from "react";
import Login from "./components/Login";
import App from "./App";
import firebase from "./services/firebase";

import "./App.css";

function Home() {
  const [user, setUser] = useState(null);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
      setloading(false);
    });
  }, []);

  console.log(user);

  return (
    <div className="app">
      <h1 className="headi">Welcome to Shopcart</h1>
      {loading ? <h1>Loading</h1> : user ? <App user={user} /> : <Login />}
    </div>
  );
}

export default Home;
