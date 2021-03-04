import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Review from './components/Review/Review';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Inventory from './components/Inventory/Inventory';
import NoFound from './components/NoFound/NoFound';
import ProductDetail from './components/ProductDetail/ProductDetail';

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Route path ="/shop">
            <Shop />
          </Route>
          <Route path ="/review">
            <Review />
          </Route>
          <Route path="/inventory">
            <Inventory />
          </Route>
          <Route path="/product/:productKey">
            <ProductDetail />
          </Route>
          <Route exact path="/">
            <Shop />
          </Route>
          <Route path="*">
            <NoFound />
          </Route>
        </Switch>
      </Router>
      
      
    </div>
  );
}

export default App;
