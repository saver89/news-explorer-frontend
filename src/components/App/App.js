import "./App.css";
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Switch>
        <Route path="/saved-news">{'1'}</Route>
        <Route path="*">{'*'}</Route>
      </Switch>
    </div>
  );
}

export default App;
