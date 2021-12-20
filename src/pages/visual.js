import React from "react";
import theme from "theme";
import {
  Theme,
} from "@quarkly/widgets";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import * as GlobalComponents from "components/global";
import { Visual } from "components/visual";
export default () => {
  return (
    <>
      <Theme theme={theme}>
        <GlobalQuarklyPageStyles pageUrl={"visual"} />
        <GlobalComponents.Helmet />
        <GlobalComponents.HeaderMobileSidePanel />
        <Visual/>
        <GlobalComponents.Footer />
      </Theme>
    </>
  );
};

