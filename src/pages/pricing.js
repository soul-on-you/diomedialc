import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Image, Section, Icon, List } from "@quarkly/widgets";
import * as GlobalComponents from "components/global";
import { BackToTop } from "@quarkly/community-kit";
import BgImageParallax from "@quarkly/community-kit/BgImageParallax";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, StackItem, Stack, Override } from "@quarkly/components";
import { MdArrowDownward } from "react-icons/md";
export default () => {
  return (
      <Theme theme={theme}>
        <GlobalQuarklyPageStyles pageUrl={"pricing"} />
        <GlobalComponents.Helmet />
        <GlobalComponents.HeaderMobileSidePanel />
        <Section
          padding="112px 0 0px 0"
          background="--color-darkL2"
          md-padding="96px 0 0px 0"
          sm-padding="72px 0 0px 0"
        >
		  <BgImageParallax
				padding="64px 0 30px 0"
				margin="0px 0 0px 0"
				sm-padding="40px 0"
				imageURL="/DiomedialCNet/etc/parallaxv2.png"
				imageRepeat="no-repeat"
				scrollSpeedProp="0.1"
			>
				<Stack>
					<StackItem width="75%" lg-width="100%" margin="0 0 0 20px">
						<Override slot="StackItemContent" flex-direction="column" />
						<Text color="--lightD2" letter-spacing="1px" text-transform="uppercase" margin="0">
							Решения для наших клиентов
						</Text>
						<Text as="h1" font="--headline1" md-font="--headline2" color="--greyD1" margin="10px 0">
							Безкомпромисно и под конкретные задачи, выберите ваш
							профессиональный инструмент
						</Text>
					</StackItem>
				</Stack>
				<Box text-align="center" margin="96px 0 0 0">
					<Text margin="8px 0" color="--lightD2" text-transform="uppercase">
						Смотреть подробности
					</Text>
					<Icon category="md" color="--lightD2" margin="0 auto" icon={MdArrowDownward} />
				</Box>
			</BgImageParallax>
        </Section>
        <Section padding="80px 0 80px 0">
          <Override
            slot="SectionContent"
            flex-direction="row"
            flex-wrap="wrap"
          />
          <Box
            display="flex"
            align-items="center"
            flex-direction="column"
            justify-content="center"
            margin="0px 0px 64px 0px"
            width="100%"
            sm-margin="0px 0px 30px 0px"
            padding="0px 200px 0px 200px"
            lg-padding="0px 0px 0px 0px"
          >
            <Text
              margin="0px 0px 16px 0px"
              font="--headline1"
              text-align="center"
              sm-font='normal 700 42px/1.2 "Source Sans Pro", sans-serif'
            >
              Предложения
            </Text>
            <Text
              margin="0px 0px 0px 0px"
              color="--darkL2"
              text-align="center"
              font="--lead"
            >
              Благодаря развитию и применению ПО с искусственным интеллектом
              человечество делает огромный шаг на пути гиперавтоматизации.
            </Text>
          </Box>
          <Box
            display="grid"
            flex-wrap="wrap"
            width="100%"
            align-items="center"
            justify-content="center"
            grid-template-columns="repeat(2, 1fr)"
            grid-gap="30px"
            md-grid-template-columns="1fr"
          >
            <Box
              width="100%"
              display="flex"
              padding="7px 7px 40px 7px"
              border-radius="24px"
              align-items="center"
              flex-direction="column"
              border-width="1px"
              border-style="solid"
              border-color="--color-lightD2"
              justify-content="center"
            >
              <Image
                src="/DiomedialCNet/etc/offer1.jpg"
                border-radius="16px"
                margin="0px 0px 32px 0px"
                max-width="100%"
                md-width="100%"
                width="100%"
                height="278px"
                object-fit="cover"
              />
              <Box
                display="flex"
                flex-direction="column"
                padding="0px 30px 0px 30px"
                align-items="flex-start"
                justify-content="flex-start"
              >
                <Text margin="0px 0px 8px 0px" font="--headline3">
                  Стандартное
                </Text>
                <List
                  margin="0px 0px 20px 0px"
                  padding="0px 0px 0px 0px"
                  list-style-type="disc"
                  as="ul"
                >
                  <Text margin="0px 0px 4px 0px" color="--darkL2" font="--base">
                    Мощный сервер на базе Intel Xeon Gold 6185 и RTX 3080
                  </Text>
                  <Text margin="0px 0px 4px 0px" color="--darkL2" font="--base">
                    Возможность создавать до 3 моделяций в день
                  </Text>
                  <Text margin="0px 0px 4px 0px" color="--darkL2" font="--base">
                    Полный набор возможностей функционала моделяций
                  </Text>
                  <Text margin="0px 0px 4px 0px" color="--darkL2" font="--base">
                    Отчет с оформлением по каждому пункту
                  </Text>
                  <Text margin="0px 0px 4px 0px" color="--darkL2" font="--base">
                    Доступ к API для интеграции в сторонние сервисы
                  </Text>
                  <Text margin="0px 0px 4px 0px" color="--darkL2" font="--base">
                    Демо визуализация
                  </Text>
                  <Text margin="0px 0px 4px 0px" color="--darkL2" font="--base">
                    Поддержка отсутствует
                  </Text>
                </List>
                <Link
                  href="#"
                  text-decoration-line="initial"
                  color="--dark"
                  font="--lead"
                  padding="12px 24px 12px 24px"
                  border-radius="8px"
                  background="--color-secondary"
                  lg-padding="12px 20px 12px 20px"
                  transition="background-color 0.2s ease-in-out 0s"
                  hover-transition="background-color 0.2s ease-in-out 0s"
                  hover-background="--color-orange"
                >
                  Buy now $ 399
                </Link>
              </Box>
            </Box>
            <Box
              width="100%"
              height="100%"
              display="flex"
              padding="7px 7px 40px 7px"
              border-radius="24px"
              align-items="center"
              flex-direction="column"
              border-width="1px"
              border-style="solid"
              border-color="--color-lightD2"
              justify-content="center"
              position="relative"
            >
              <Text
                margin="0px 0px 0px 0px"
                font="--base"
                color="#ffffff"
                padding="4px 16px 4px 16px"
                background="--color-green"
                border-radius="50px"
                position="absolute"
                top="24px"
                right="24px"
                bottom="auto"
                left="auto"
              >
                Рекомендуемое
              </Text>
              <Image
                src="/DiomedialCNet/etc/offer2.jpg"
                border-radius="16px"
                margin="0px 0px 32px 0px"
                max-width="100%"
                md-width="100%"
                max-height="278px"
                object-fit="cover"
                width="100%"
              />
              <Box
                display="flex"
                flex-direction="column"
                padding="0px 30px 0px 30px"
                align-items="flex-start"
                justify-content="flex-start"
              >
                <Text margin="0px 0px 8px 0px" font="--headline3">
                  Расширенное
                </Text>
                <List
                  margin="0px 0px 20px 0px"
                  padding="0px 0px 0px 0px"
                  list-style-type="disc"
                  as="ul"
                >
                  <Text margin="0px 0px 4px 0px" color="--darkL2" font="--base">
                    Мощный сервер на базе Intel Xeon Platinum 8225 и RTX A6000
                  </Text>
                  <Text margin="0px 0px 4px 0px" color="--darkL2" font="--base">
                    Без ограничений на моделяции
                  </Text>
                  <Text margin="0px 0px 4px 0px" color="--darkL2" font="--base">
                    Полный набор возможностей функционала моделяций
                  </Text>
                  <Text margin="0px 0px 4px 0px" color="--darkL2" font="--base">
                    Отчет с оформлением по каждому пункту
                  </Text>
                  <Text margin="0px 0px 4px 0px" color="--darkL2" font="--base">
                    Доступ к API для интеграции в сторонние сервисы
                  </Text>
                  <Text margin="0px 0px 4px 0px" color="--darkL2" font="--base">
                    Возможность 3D визуализации
                  </Text>
                  <Text margin="0px 0px 4px 0px" color="--darkL2" font="--base">
                    Круглосуточная поддержка
                  </Text>
                </List>
                <Link
                  href="#"
                  text-decoration-line="initial"
                  color="--dark"
                  font="--lead"
                  padding="12px 24px 12px 24px"
                  border-radius="8px"
                  background="--color-secondary"
                  lg-padding="12px 20px 12px 20px"
                  transition="background-color 0.2s ease-in-out 0s"
                  hover-transition="background-color 0.2s ease-in-out 0s"
                  hover-background="--color-orange"
                >
                  Buy now $ 899
                </Link>
              </Box>
            </Box>
          </Box>
        </Section>
        <GlobalComponents.Footer />
        <RawHtml>
          <style place={"endOfHead"} rawKey={"6143a05129a0a1001e6c835a"}>
            {
              ":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}\n\n* {\n    scroll-behavior: smooth;\n    }"
            }
          </style>
        </RawHtml>
		<BackToTop className="backToTopBtn"/>
      </Theme>
  );
};
