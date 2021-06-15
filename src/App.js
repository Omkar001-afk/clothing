import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pagess/homepage/homepage.jsx";
import ShopPage from "./pagess/shops/shop.component.jsx";
import Header from "./component/header/header.component";
function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
