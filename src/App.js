import { BrowserRouter, Route, Switch } from "react-router-dom";
import HeaderPage from "./header/header-page";
import MainPage from "./main/main-page";
import SchedulePage from "./schedule/schedule-page";
import "./common/App.css"


// TODO: CREATE THE DATABASE, CREATE MAIN, SCHEDULE, PROMO AND ABOUT PAGES.

function App() {
  return (
    <BrowserRouter>
      <HeaderPage />
      <Switch>
        <Route path="/" exact>
          <MainPage />
        </Route>
        <Route path="/citas">
          <SchedulePage/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
