import React, { lazy, Suspense } from "react";
// import Index from "pages/index";
// import Solutions from "pages/solutions";
// import Products from "pages/products";
// import Pricing from "pages/pricing";
// import Aboutus from "pages/aboutus";
// import Visual from "pages/visual";
// import Page404 from "pages/page404";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
// import ScrollToTop from "components/global/ScrollToTop";
import { Sugar } from "react-preloaders2";
// import { useEffect } from "react";
// import { useLocation, withRouter } from "react-router-dom";
import * as GlobalComponents from "components/global";

const Index = lazy(() => import("pages/index"));
const Solutions = lazy(() => import("pages/solutions"));
const Products = lazy(() => import("pages/products"));
const Pricing = lazy(() => import("pages/pricing"));
const Aboutus = lazy(() => import("pages/aboutus"));
const Visual = lazy(() => import("pages/visual"));
const Page404 = lazy(() => import("pages/page404"));

// function _ScrollToTop(props) {
//   const { pathname } = useLocation();
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);
//   return props.children;
// }
// const ScrollToTop = withRouter(_ScrollToTop);

const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
    }
    canvas { 
        width: 100vw;
        height: 100vh;
        display: block; 
    }
    .backToTopBtn button{
        bottom: 100px;
    }
`;

export default () => (
  <Router>
      <GlobalStyles />
      <GlobalComponents.Helmet />
      {/* <GlobalComponents.HeaderMobileSidePanel /> */}
      <Suspense fallback={null}>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/index" component={Index} />
          <Route exact path="/solutions" component={Solutions} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/pricing" component={Pricing} />
          <Route exact path="/aboutus" component={Aboutus} />
          <Route exact path="/visual" component={Visual} />
          <Route component={Page404} />
        </Switch>
        <GlobalComponents.Footer/>
        <Sugar />
      </Suspense>
  </Router>
);
