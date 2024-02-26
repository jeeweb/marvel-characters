import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import "./styles.css";

export default function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route path="/character/:id">
            <Detail />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
