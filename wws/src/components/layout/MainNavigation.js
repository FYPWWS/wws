import {Link} from 'react-router-dom'

import classes from './MainNavigation.module.css'

function MainNavigation() {
  return (
    <header className= {classes.header}>
      <div className={classes.logo}>Wild Fire Warning System</div>
      <nav>
          <ul>
              <li>
                  <Link to='/'>Introduction</Link>
              </li>
              <li>
                  <Link to='/fire-watcher'>Fire Watcher</Link>
              </li>
              
          </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
