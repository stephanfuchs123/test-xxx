import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

// App
import UserProfile from '../views/backend/app/usermanagement/userprofile';
import UserAccountSettingList from '../views/backend/app/usermanagement/useraccountsetting';
import Contact from '../views/backend/pages/contact';

// Category
import CategoryList from '../views/backend/category/category-list';

// Movie
import MovieList from '../views/backend/movie/movie-list';

// Show
import ShowList from '../views/backend/show/show-list';

// Home
import Homepage from '../views/backend/home/home';
import Cinema from '../views/backend/cinema/Cinema';
import Searched from '../views/backend/pages/searched';
import VideoPlayer from '../components/Video-player';

const Layout1Route = () => {
  let location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        classNames="fade"
        timeout={300}
      >
        <Switch location={location}>
          {/* App */}
          <Route path="/manage-profile" component={UserProfile} />
          <Route path="/setting" component={UserAccountSettingList} />
          <Route path="/contact" component={Contact} />

          {/* Category */}
          <Route path="/show-category" component={CategoryList} />

          {/* Movie */}
          <Route path="/movie-category" component={MovieList} />

          <Route path="/search" component={Searched} />

          {/* Show */}
          <Route path="/show-details" component={ShowList} />

          {/* Homepage */}
          <Route path="/" exact component={Homepage} />
          <Route path="/movies" component={VideoPlayer} />
          <Route path="/tv-series" component={VideoPlayer} />

          <Route path="/cinema" component={Cinema} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default Layout1Route;
