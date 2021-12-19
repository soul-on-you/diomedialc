import React from "react";
import { Link, Text, Section, Box } from "@quarkly/widgets";
export default () => {
  return (
    <Section background-color="--dark" text-align="center" padding="32px 0">
      <Box
        min-width="100px"
        min-height="80px"
        display="flex"
        height="80px"
        sm-flex="1 1 0%"
        sm-height="auto"
        sm-flex-direction="column"
        sm-margin="0 0 8px 0"
      >
        <Box
          min-width="100px"
          width="50%"
          height="100%"
          sm-margin="0 0 8px 0"
          sm-width="100%"
        >
          <Text margin="0px 0px 5px 0px" color="#949494">
            Проект команды группы 2бАСУ3 по Веб-Приложениям
          </Text>
          <Text margin="0px 0px 5px 0px" color="#949494">
            125319, Россия, Москва, Ленинградский проспект, 64
          </Text>
          <Link
            href="tel:12345678"
            text-decoration-line="initial"
            color="--light"
            font="--lead"
            margin="0px 0px 0px 0px"
            color="#949494"
          >
            +7 (985) 939-1998
          </Link>
        </Box>
        <Box
          min-width="100px"
          width="50%"
          height="100%"
          display="flex"
          justify-content="flex-start"
          align-items="center"
          flex-direction="column"
          sm-width="100%"
          sm-margin="0 0 8px 0"
        >
          <Text margin="0px 0px 0px 0px" color="#949494">
            Email для связи
          </Text>
          <Link
            href="mailto:info@b2bpltfrm.com"
            text-decoration-line="initial"
            color="#949494"
            font="--lead"
            margin="0px 0px 0px 0px"
          >
            diomedialc@gmail.com
          </Link>
          <Link
            href="mailto:info@b2bpltfrm.com"
            text-decoration-line="initial"
            color="#949494"
            font="--lead"
            margin="0px 0px 0px 0px"
          >
            rerpledday@gmail.com
          </Link>
        </Box>
        <Box min-width="100px" height="20px">
          <Text margin="0px 0px 0px 0px" color="#949494">
            © 2021 DiomedialC Interactive Entertainment LLC
          </Text>
        </Box>
      </Box>
    </Section>
  );
};
