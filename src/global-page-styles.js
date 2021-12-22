import React from "react";
import { transformVar } from "@quarkly/atomize";
import { createGlobalStyle } from "styled-components";

const pageStyles = {
    "404": {
        "overflow-x": "hidden",
        "overflow-y": ""
    },
    "index": {
        "overflow-x": "hidden",
        "overflow-y": ""
    },
    "aboutus": {
        "overflow-x": "hidden",
        "overflow-y": ""
    },
    "pricing": {
        "overflow-x": "hidden",
        "overflow-y": ""
    },
    "products": {
        "overflow-x": "hidden",
        "overflow-y": ""
    },
    "solutions": {
        "overflow-x": "hidden",
        "overflow-y": ""
    },
    "visual": {
        "overflow-x": "hidden",
        "overflow-y": ""
    }
};

const PageStyles = createGlobalStyle`
    body {
        ${({ styles }) =>
            Object.entries(styles || {}).map(
                ([prop, value]) => `${prop}: ${transformVar(prop, value)};`
            )}
    }
`;
export const GlobalPageStyles = ({ pageUrl }) => <PageStyles styles={pageStyles[pageUrl]} />
