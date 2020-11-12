import React from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import CreateUser from "./components/CreateUser";
import UpdateUser from "./components/UpdateUser";
import DeleteUser from "./components/DeleteUser";

function App() {

  return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/createUser">
              <CreateUser />
            </Route>
            <Route path="/updateUser">
              <UpdateUser />
            </Route>
            <Route path="/deleteUser">
              <DeleteUser />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
