import React from "react";
import theme from "theme";
import { Theme } from "@quarkly/widgets";
import { GlobalPageStyles } from "global-page-styles";
// import * as GlobalComponents from "components/global";
// import { Sugar } from "react-preloaders2";     <Sugar />
import { Visual } from "components/visual";
import { HeaderMobileSidePanel } from "components/global";
export default () => {
  return (
    <>
      <Theme theme={theme}>
        <GlobalPageStyles pageUrl={"visual"} />
        <HeaderMobileSidePanel />
        {/* <GlobalComponents.Helmet />
        <GlobalComponents.HeaderMobileSidePanel /> */}
        <Visual />
        {/* <GlobalComponents.Footer /> */}
      </Theme>
    </>
  );
};
