import React from 'react'
import { Switch, Route, Redirect } from 'react-router';
import { PATHS, PAGES } from '../constants';
import BasePage from '../containers/base-page';

const configureRoutes = () => {
  return [
    {
      path: PATHS.HOMEPAGE,
      exact: true,
      pageID: PAGES.HOMEPAGE,
      pageClass: 'HOME',
      component: BasePage,
    },
    {
        path: PATHS.PRODUCT,
        exact: true,
        pageID: PAGES.PRODUCT,
        pageClass: 'PRODUCT',
        component: BasePage,
    },
    {
        path: PATHS.USERINFO,
        exact: true,
        pageID: PAGES.USERINFO,
        pageClass: 'USERINFO',
        component: BasePage,
    },
    {
        path: PATHS.CONTACT,
        exact: true,
        pageID: PAGES.CONTACT,
        pageClass: 'CONTACT',
        component: BasePage,
    },
  ];
}

const renderPage = (props, path, redirect, options) => {
  console.log(props)
  return (
    <options.Component
      pageID={options.pageID}
      pageClass={options.pageClass}
      goBackLink={options.goBackLink}
      path={path}
      {...props}
    />
  );
};

const Routes = () => 
  <Switch>
    {
      configureRoutes().map((route, index) => {
        const { path, exact, pageID, pageClass, goBackLink, redirect, status } = route;
        const Component = route.component;
        //props是啥子东西 match, location, history
        
        return (
          <Route
            key={index}
            path={path}
            exact={exact}
            render={
              props => 
                renderPage(
                  props,
                  path,
                  { url: redirect, status },
                  { Component, pageID, pageClass, goBackLink},
                )
            }
          >
          </Route>
        )
      })
    }
  </Switch>

export default Routes;
