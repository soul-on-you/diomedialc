import React from "react";
import Index from "pages/index";
import Aboutus from "pages/aboutus";
import Pricing from "pages/pricing";
import Products from "pages/products";
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
			<Route exact path='/aboutus' component={Aboutus}/>
			<Route exact path='/pricing' component={Pricing}/>
			<Route exact path='/products' component={Products}/>
			<Route component={Page404}/>
        </Switch>
    </Router>
);
