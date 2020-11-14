import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Login from './components/login'
import Registro from './components/registro'
import Crud from './components/crud'
import Inicio from './components/inicio'
import 'rsuite/dist/styles/rsuite-dark.css'
function App() {
  return (
    <Router>
    <div className="container p-4">
      <Switch>
      <Route path="/registro" component={Registro}/>
      <Route path="/inicio" component={Inicio}/>
      <Route path="/crud" component={Crud}/>
      <Route path="/" component={Login}/>

      
      </Switch>
    </div>
  </Router>
  );
}

export default App;
