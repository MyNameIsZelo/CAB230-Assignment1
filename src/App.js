import React from "react";
import Index from "pages/index";
import Movie from "pages/movie";
import Login from "pages/login";
import Register from "pages/register";
import Page404 from "pages/page404";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
    }
`;

export default () => (
    <Router>
        <GlobalStyles />
        <Switch>
        			<Route exact path='/' component={Index}/>
			<Route exact path='/index' component={Index}/>
			<Route exact path='/movie' component={Movie}/>
			<Route exact path='/login' component={Login}/>
			<Route exact path='/register' component={Register}/>
			<Route component={Page404}/>
        </Switch>
    </Router>
);
