import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pagess/homepage/homepage.jsx";
import ShopPage from "./pagess/shops/shop.component.jsx";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
