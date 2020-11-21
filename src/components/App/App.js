import "./App.css";
import { Route, Switch } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";

function App() {
  return (
    <div className="app">
      <Header></Header>
      <Switch>
        <Route path="/saved-news">
          <SavedNews></SavedNews>
        </Route>
        <Route path="*">
          <Main></Main>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
