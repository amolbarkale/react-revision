import "./App.css";
import { TodoInput } from "./Compenents/TodoInput";
import { Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "./Compenents/Dashboard";
import NoteState from "./Context/NoteState";
import CleanUp from "./Compenents/CleanUp";
import { Couter } from "./Compenents/Couter";
import { UseRef } from "./Compenents/UseRef";
import { Memoization } from "./Compenents/Memoization";
import UseRedu from "./Compenents/UseRedu";
import { TicTacToe } from "./Compenents/TicTacToe";
import { Chess } from "./Compenents/Chess";

function checkAuth() {}

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        checkAuth() ? <Component /> : <Redirect to={{ pathname: "/login" }} />
      }
    />
  );
}

function App() {
  return (
    <>
      {/* <NoteState>
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route path="/todo">
            <TodoInput />
          </Route>
        </Switch>
        <CleanUp />
      </NoteState>
      <Couter />
      <UseRef />
      <UseRedu />
      <Memoization /> 
      <TicTacToe />*/}
      <Chess />
    </>
  );
}

export default App;
