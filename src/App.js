import './App.css';
import './components/Navbar/Navbar';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Hero from './components/Hero/Hero';
import Home from './components/Home/Home';


function App() {
  return (
   <>
     <Router>
       <Navbar/>
       <Switch>
         <Route path='/' exact component={Home}/>
       </Switch>
       <Hero/>
     </Router>
   </>
  );
}

export default App;
