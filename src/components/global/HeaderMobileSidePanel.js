import React from "react";
import {
    Link,
    Image,
    Text,
    Section,
    Box,
  } from "@quarkly/widgets";
import { Override, } from "@quarkly/components";
import {
    MobileSidePanel,
  } from "@quarkly/community-kit";
export default () => {
  return (
    <Section 
      padding="20px 0 20px 0"
      md-margin="0 0 0 0"
      quarkly-title="Header" 
      position="sticky"
      top="0px"
      z-index="10"
      background="#ffffff"
      border-color="#ffffff"
    >
      <Override slot="SectionContent" flex-direction="row" display="flex" />
      <Image
        src="/DiomedialCNet/dioLogo/logo.webp"
        display="block"
        object-fit="contain"
      />
      <Link
        href="/"
        display="flex"
        text-decoration-line="initial"
        hover-opacity=".8"
        width="20%"
        md-width="40%"
        sm-width="50%"
        justify-content="center"
        align-items="center"
      >
        <Text margin="0px 0px 0px 0px" font="--headline4" color="--dark">
          &DiomedialC
        </Text>
      </Link>
      <MobileSidePanel md-justify-content="flex-end">
        <Override slot="Children" display="flex" />
        <Override
          slot="Content"
          padding="0px 0px 0px 0px"
          md-margin="38px 0px 0px 0px"
        />
        <Override
          slot="Button Text"
          md-font="--lead"
          md-text-transform="uppercase"
          sm-margin="3px 6.3px 0px 0px"
          md-margin="1px 6.3px 0px 0px"
        />
        <Box
          display="flex"
          justify-content="flex-end"
          md-align-items="center"
          md-flex-direction="column"
          md-justify-content="center"
          md-padding="20px 0px 20px 0px"
          md-margin="0px 0px 0px 0px"
        >
          <Link
            href="solutions"
            text-decoration-line="initial"
            color="--dark"
            font="--lead"
            padding="5px 10px 5px 10px"
            margin="0px 15px 0px 15px"
            transition="opacity 0.3s ease-in-out 0s"
            hover-opacity=".8"
            md-margin="0 0px 8px 0px"
            md-font='normal 400 18px/1.5 "Fira Sans", sans-serif'
          >
            Решения
          </Link>
          <Link
            href="products"
            text-decoration-line="initial"
            color="--dark"
            font="--lead"
            padding="5px 10px 5px 10px"
            margin="0px 15px 0px 15px"
            transition="opacity 0.3s ease-in-out 0s"
            hover-opacity=".8"
            md-margin="0 0px 8px 0px"
            md-font='normal 400 18px/1.5 "Fira Sans", sans-serif'
          >
            Технологии
          </Link>
          <Link
            href="pricing"
            text-decoration-line="initial"
            color="--dark"
            font="--lead"
            padding="5px 10px 5px 10px"
            margin="0px 15px 0px 15px"
            transition="opacity 0.3s ease-in-out 0s"
            hover-opacity=".8"
            md-margin="0 0px 8px 0px"
            md-font='normal 400 18px/1.5 "Fira Sans", sans-serif'
          >
            Предложения
          </Link>
          <Link
            href="aboutus"
            text-decoration-line="initial"
            color="--dark"
            font="--lead"
            padding="5px 10px 5px 10px"
            margin="0px 0px 0px 15px"
            transition="opacity 0.3s ease-in-out 0s"
            hover-opacity=".8"
            md-margin="0 0px 8px 0px"
            md-font='normal 400 18px/1.5 "Fira Sans", sans-serif'
          >
            О нас
          </Link>
        </Box>
      </MobileSidePanel>
    </Section>
  );
};
