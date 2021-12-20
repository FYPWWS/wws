import { Route, Switch } from "react-router-dom";

import IntroPage from "./pages/Intro";
import FireWatcherPage from "./pages/FireWatcher";
import MainNavigation from "./components/layout/MainNavigation";

function App() {
  return (
    <div>
      <MainNavigation/>
      <Switch>
        <Route path="/" exact>
          <IntroPage />
        </Route>
        <Route path="/fire-watcher">
          <FireWatcherPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
