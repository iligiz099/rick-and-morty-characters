import CharactersList from './pages/CharactersList';
import Character from './pages/Character'
import Header from './pages/Header'
import './styles.css';
import { Route, Switch } from "react-router"

function App() {
  return (
    <div className="App">
       <Header />
       <Switch>
         <Route strict exact path="/" component={CharactersList} />
         <Route strict exact path="/:id" component={Character} />
       </Switch>
    </div>
  );
}

export default App;