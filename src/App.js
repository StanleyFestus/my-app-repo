import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

const Landing = () => {
  return (
    <>
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
    </>
  )
}

const Experiment = () => {
  return (
    <div>
      Experiment
    </div>
  )
}

const Contact = () => {
  return (
    <div>
      Contact
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Router>
      <header className="App-header">
        <Navigation />
      </header>
        <Switch>
          <Route   exact path="/">
            <Landing />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/experiment">
            <Experiment />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
