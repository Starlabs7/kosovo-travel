
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './components/Home'
import Tickets from './components/Tickets'
import Posts from './components/Posts'


function App() {
  return (

    <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/tickets' component={Tickets}/>
            <Route path='/carousel/:id' component={Posts}/>
          </Switch>
          <Footer />
        </div>
    </Router>
  );
}

export default App;
