import React from "react";
import theme from "theme";
import { Theme, Link, Image, Text, Section, Box, Span, Input, Button, Icon, } from "@quarkly/widgets";
import { Sugar } from 'react-preloaders2'; 
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, SocialMedia, Formspree } from "@quarkly/components";
import {
	Carousel,
	NetlifyForm,
	Popup,
	YouTube,
	BackToTop
  } from "@quarkly/community-kit";
import * as Components from "components/main";
import * as GlobalComponents from "components/global"
export default () => {
	return (
		<Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<GlobalComponents.Helmet/>
		<GlobalComponents.HeaderMobileSidePanel/>
		<Section
        background="--color-darkL1"
        padding="0px 0 0px 0"
        quarkly-title="HeroBlock"
        md-flex-wrap="wrap"
        margin="0px 0 0px 0"
      >
        <Override
          slot="SectionContent"
          flex-direction="row"
          md-flex-wrap="wrap"
        />
        <Box
          empty-min-width="64px"
          empty-min-height="64px"
          empty-border-width="1px"
          empty-border-style="solid"
          empty-border-color="LightGray"
          width="50%"
          display="flex"
          flex-direction="column"
          justify-content="space-between"
          padding="80px 0px 40px 0px"
          lg-padding="80px 32px 40px 0px"
          md-padding="40px 0px 40px 0px"
          md-width="100%"
        >
          <Box
            display="flex"
            flex-direction="column"
            width="80%"
            lg-width="100%"
          >
            <Text
              margin="0px 0px 0px 0px"
              font="--headline4"
              color="--light"
              sm-font='400 36px/1.2 "Fira Sans", sans-serif'
            >
              Доказывать безопасность автомобиля - это важная обязанность для
              каждого производителя.
            </Text>
            <Text
              margin="32px 0px 0px 0px"
              font="--lead"
              color="--light"
              md-padding="0px 0px 40px 0px"
            >
              Цель нашего проекта заключается в налаживании отношений с
              мировыми компаниями для дальнейшего сотрудничества. Это пойдет на
              благо общества и экономики, и конечного потребителя.
            </Text>
            <Text margin="32px 0px 0px 0px" color="--light">
              Методы оценки безопасности для водителя и пассажира, выбираемые
              производителями автомобилей в настоящее время.
            </Text>
          </Box>
          <Popup>
            <Override
              slot="Button Open"
              color="--light"
              background="url(/DiomedialCNet/arrows/keyboard_arrow_right.svg) 100% -5px/contain no-repeat"
              height="40px"
              transition="opacity 0.3s ease-in-out 0s"
              hover-opacity="0.8"
              padding="3px 40px 5px 0px"
              font="--headline4"
              opacity="1"
              lg-font='normal 400 24px/1.3 "Fira Sans", sans-serif'
            >
              Посмотреть ролик
            </Override>
            <Override slot="Wrapper" display="block" width="80%" />
            <Override
              slot="Button Close"
              size="40px"
              transition="transform 0.3s ease-in-out 0s"
              hover-transform="rotateZ(180deg)"
            />
            <YouTube
              url="https://www.youtube.com/watch?v=N7xdojTN2Ok"
              height="100%"
            />
          </Popup>
        </Box>
        <Box
          empty-min-width="64px"
          empty-min-height="64px"
          empty-border-width="1px"
          empty-border-style="solid"
          empty-border-color="LightGray"
          width="70%"
          md-width="100%"
        >
          <Image
            src="/DiomedialCNet/etc/ctesla1.jpg"
            max-width="100%"
            min-height="600px"
            object-fit="cover"
            lg-min-height="500px"
            sm-min-height="400px"
          />
        </Box>
      </Section>
      <Section padding="64px 0 64px 0" lg-padding="40px 0 40px 0">
        <Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" />
        <Box
          empty-min-width="64px"
          empty-min-height="64px"
          empty-border-width="1px"
          empty-border-style="solid"
          empty-border-color="LightGray"
          width="100%"
          lg-width="100%"
        >
          <Text
            margin="0px 0px 0px 0px"
            font="normal 500 60px/1.2 --fontFamily-googleFiraSans"
            color="--dark"
            md-font="normal 500 40px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
            lg-margin="0px 0px 0px 0px"
            display="flex"
            justify-content="center"
            align-items="center"
          >
            Почему вы должны выбрать нас?
          </Text>
          <Box
            empty-min-width="64px"
            empty-min-height="64px"
            empty-border-width="1px"
            empty-border-style="solid"
            empty-border-color="LightGray"
            width="100%"
            display="flex"
            flex-wrap="wrap"
            lg-width="100%"
          >
            <Text
              margin="32px 0px 0px 0px"
              font="--lead"
              color="--dark"
              sm-font='normal 400 16px/1.5 "Fira Sans", sans-serif'
              display="flex"
            >
              Мы предоставляем возможности по оценке безопасности автомобиля,
              анализируя возможные сценарии поведения при различных
              обстоятельствах, погодных условиях и по итогам предоставляем отчет
              по собранным данным.
            </Text>
            <Box
              width="33.333%"
              margin="32px 0px 0px 0px"
              padding="0px 30px 0px 0px"
              md-width="100%"
            >
              <Text
                margin="0px 0px 16px 0px"
                font="normal 500 18px/1.5 --fontFamily-googleFiraSans"
                color="--dark"
              >
                Начало работы{" "}
              </Text>
              <Text margin="0px 0px 8px 0px" font="--base" color="--dark">
                Мы предоставляем круглосуточную поддержку
              </Text>
              <Text margin="0px 0px 8px 0px" font="--base" color="--dark">
                Удобная и простая документация
              </Text>
              <Text margin="0px 0px 8px 0px" font="--base" color="--dark">
                Возможность совместимости с форматами
              </Text>
              <Text margin="0px 0px 0px 0px" font="--base" color="--dark">
                API для интегрирования системы в крупные проекты
              </Text>
            </Box>
            <Box
              width="33.333%"
              margin="32px 0px 0px 0px"
              padding="0px 30px 0px 0px"
              md-width="100%"
            >
              <Text
                margin="0px 0px 16px 0px"
                font="normal 500 18px/1.5 --fontFamily-googleFiraSans"
                color="--dark"
                display="block"
                align-items="center"
                justify-content="flex-start"
              >
                Планирование
              </Text>
              <Text margin="0px 0px 8px 0px" font="--base" color="--dark">
                Возможность получать предикт при планировании
              </Text>
              <Text margin="0px 0px 8px 0px" font="--base" color="--dark">
                Выявление слабых мест кузова
              </Text>
              <Text margin="0px 0px 8px 0px" font="--base" color="--dark">
                Анализ износостойкости
              </Text>
              <Text margin="0px 0px 0px 0px" font="--base" color="--dark">
                Персональные рекомендации
              </Text>
            </Box>
            <Box width="33.333%" margin="32px 0px 0px 0px" md-width="100%">
              <Text
                margin="0px 0px 16px 0px"
                font="normal 500 18px/1.5 --fontFamily-googleFiraSans"
                color="--dark"
              >
                Плюсы внедрения
              </Text>
              <Text margin="0px 0px 8px 0px" font="--base" color="--dark">
                Мы меняем подход, сначала разработка, потом выпуск
              </Text>
              <Text margin="0px 0px 8px 0px" font="--base" color="--dark">
                Для моделирования не нужны физические экземпляры
              </Text>
              <Text margin="0px 0px 8px 0px" font="--base" color="--dark">
                Польза для окружающей среды, меньше металломусора
              </Text>
              <Text margin="0px 0px 0px 0px" font="--base" color="--dark">
                Технологии виртуализации помогут перейти к новому методу работы
              </Text>
            </Box>
          </Box>
        </Box>
      </Section>
      <Section padding="0px 0 0px 0">
        <Override
          slot="SectionContent"
          flex-direction="row"
          md-flex-wrap="wrap"
        />
        <Box
          empty-min-width="64px"
          empty-min-height="64px"
          empty-border-width="1px"
          empty-border-style="solid"
          empty-border-color="LightGray"
          width="50%"
          align-items="center"
          display="flex"
          border-width="1px 0px 0px 0px"
          border-style="solid"
          border-color="#C4C4C4"
          padding="80px 0px 80px 0px"
          md-width="100%"
          md-padding="60px 0px 60px 0px"
        >
          <Text
            margin="0px 0px 0px 0px"
            font="--headline2"
            color="--dark"
            lg-font='400 30px/1.2 "Fira Sans", sans-serif'
          >
            &DiomedialC Platform
          </Text>
        </Box>
        <Box
          empty-min-width="64px"
          empty-min-height="64px"
          empty-border-width="1px"
          empty-border-style="solid"
          empty-border-color="LightGray"
          width="50%"
          md-width="100%"
        >
          <Text
            margin="0px 0px 0px 0px"
            font="--lead"
            color="--light"
            lg-font='normal 400 20px/1.3 "Fira Sans", sans-serif'
            sm-font='normal 400 18px/1.4 "Fira Sans", sans-serif'
            background="--color-primary"
            padding="32px 24px 32px 24px"
          >
            Лучшие автомобили создаются путем сочетания точного планирования и
            передовых технологий. Вот почему производители будут обращаються к
            универсальному программному обеспечению для моделирования и
            обработки событий, чтобы автоматизировать процессы и сократить
            расходы и время на разработку.
          </Text>
        </Box>
      </Section>
      <Section padding="0px 0 0px 0">
        <Override
          slot="SectionContent"
          flex-direction="row"
          md-flex-wrap="wrap"
        />
        <Box
          empty-min-width="64px"
          empty-min-height="64px"
          empty-border-width="1px"
          empty-border-style="solid"
          empty-border-color="LightGray"
          width="50%"
          display="flex"
          md-width="100%"
        >
          <Image
            src="https://images.unsplash.com/photo-1603539947678-cd3954ed515d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
            max-width="100%"
            min-height="632px"
            object-fit="cover"
            sm-min-height="16px"
          />
        </Box>
        <Box
          empty-min-width="64px"
          empty-min-height="64px"
          empty-border-width="1px"
          empty-border-style="solid"
          empty-border-color="LightGray"
          width="50%"
          display="flex"
          flex-direction="column"
          md-width="100%"
        >
          <Box
            empty-min-width="64px"
            empty-min-height="64px"
            empty-border-width="1px"
            empty-border-style="solid"
            empty-border-color="LightGray"
            padding="32px 32px 32px 32px"
            height="50%"
          >
            <Text
              margin="0px 0px 16px 0px"
              font="--headline4"
              color="--dark"
              width="80%"
              lg-width="100%"
              lg-font='normal 400 24px/1.3 "Fira Sans", sans-serif'
            >
              Программное обеспечение для моделирования событий.
            </Text>
            <Text
              margin="0px 0px 65px 0px"
              font="--base"
              color="--dark"
              width="70%"
              lg-width="100%"
            >
              Упростите проектирование с помощью удобной разработки
              моделирования, которая работает на всех устройствах и операционных
              системах.
            </Text>
            <Link
              href="solutions"
              text-decoration-line="initial"
              color="--primary"
              padding="5px 35px 5px 0px"
              background="url(/DiomedialCNet/arrows/keyboard_arrow_right_blue.svg) 100% -5px/contain no-repeat"
              font="--lead"
            >
              Узнать больше
            </Link>
          </Box>
          <Box
            empty-min-width="64px"
            empty-min-height="64px"
            empty-border-width="1px"
            empty-border-style="solid"
            empty-border-color="LightGray"
            padding="32px 32px 32px 32px"
            background="--color-lightD1"
            height="50%"
          >
            <Text
              margin="0px 0px 16px 0px"
              font="--headline4"
              color="--dark"
              width="80%"
              lg-width="100%"
              lg-font='normal 400 24px/1.3 "Fira Sans", sans-serif'
            >
              Платформа для помощи бизнесу.
            </Text>
            <Text
              margin="0px 0px 65px 0px"
              font="--base"
              color="--dark"
              width="70%"
              lg-width="100%"
            >
              Связывайте проекты с подобранным списком предприятий, чтобы
              сделать организацию производства более эффективной.
            </Text>
            <Link
              href="solutions"
              text-decoration-line="initial"
              color="--primary"
              padding="5px 35px 5px 0px"
              background="url(/DiomedialCNet/arrows/keyboard_arrow_right_blue.svg) 100% -5px/contain no-repeat"
              font="--lead"
            >
              Узнать больше
            </Link>
          </Box>
        </Box>
      </Section>
      <Section padding="64px 0 0px 0">
        <Override
          slot="SectionContent"
          display="grid"
          grid-template-columns="repeat(3, 1fr)"
          grid-gap="0px"
          lg-grid-template-columns="1fr"
        />
        <Box
          empty-min-width="64px"
          empty-min-height="64px"
          empty-border-width="1px"
          empty-border-style="solid"
          empty-border-color="LightGray"
          grid-column="1 / span 3"
          padding="16px 32px 60px 16px"
          lg-grid-column="auto / auto"
        >
          <Text
            margin="0px 0px 16px 0px"
            font="--headline2"
            color="--dark"
            lg-font='400 30px/1.2 "Fira Sans", sans-serif'
            display="flex"
            align-items="center"
            justify-content="center"
          >
            Локальное управление
          </Text>
          <Box
            empty-min-width="64px"
            empty-min-height="64px"
            empty-border-width="1px"
            empty-border-style="solid"
            empty-border-color="LightGray"
            width="100%"
            display="flex"
            flex-wrap="wrap"
            lg-width="100%"
          >
            <Box
              empty-min-width="64px"
              empty-min-height="64px"
              empty-border-width="1px"
              empty-border-style="solid"
              empty-border-color="LightGray"
              width="50%"
              grid-column="1 / span 3"
              padding="16px 32px 0px 16px"
              lg-grid-column="auto / auto"
              display="block"
              md-width="100%"
            >
              <Text
                margin="0px 0px 32px 0px"
                font="--lead"
                color="--dark"
                width="100%"
                sm-font='normal 400 16px/1.5 "Fira Sans", sans-serif'
                lg-margin="0px 0px 16px 0px"
                display="flex"
              >
                Организуйте общую сеть рабочих станций для гибридного управления
                с помощью обращения к API серверу, это позволит сделать работу
                более удобной и эффективной.
              </Text>
              <Text
                margin="0px 0px 32px 0px"
                font="--lead"
                color="--dark"
                width="100%"
                sm-font='normal 400 16px/1.5 "Fira Sans", sans-serif'
                lg-margin="0px 0px 16px 0px"
                display="flex"
              >
                Откройте перспективы перевода отдела проектировщиков на
                удаленную работу. Получайте понятную статистику по проделанной
                работе и текущим результатам.
              </Text>
            </Box>
            <Box
              empty-min-width="64px"
              empty-min-height="64px"
              empty-border-width="1px"
              empty-border-style="solid"
              empty-border-color="LightGray"
              width="50%"
              display="flex"
              md-width="100%"
            >
              <Image
                src="/DiomedialCNet/etc/productscase1.jpg"
                display="block"
                max-width="100%"
                height="300px"
                object-fit="cover"
                width="100%"
                lg-height="460px"
                padding="0px 0px 0px 0px"
              />
            </Box>
          </Box>
        </Box>
        <Box
          empty-min-width="64px"
          empty-min-height="64px"
          empty-border-width="1px"
          empty-border-style="solid"
          empty-border-color="LightGray"
          padding="16px 32px 32px 16px"
          border-style="solid"
          border-width="1px 1px 1px 0px"
          border-color="--color-grey"
          lg-border-style="none"
          lg-border-width="0px"
        >
          <Box>
            <Text margin="15px 0px 16px 0px" font="--headline4" color="--dark">
              AI — Базирование
            </Text>
            <Text
              margin="0px 0px 20px 0px"
              font="--lead"
              color="--dark"
              width="100%"
              sm-font='normal 400 16px/1.5 "Fira Sans", sans-serif'
              lg-margin="0px 0px 45px 0px"
            >
              Основа работы лежит в алгоритмах глубокого обучения ИИ на базе
              более 10000 совершенных crashtest'ов и отладке независимых
              результатов производимых в ходе процесса моделирования.
            </Text>
          </Box>
          <Link
            href="products"
            text-decoration-line="initial"
            color="--primary"
            padding="5px 35px 5px 0px"
            background="url(/DiomedialCNet/arrows/keyboard_arrow_right_blue.svg) 100% -5px/contain no-repeat"
            font="--lead"
          >
            Узнать больше
          </Link>
        </Box>
        <Box
          empty-min-width="64px"
          empty-min-height="64px"
          empty-border-width="1px"
          empty-border-style="solid"
          empty-border-color="LightGray"
          padding="16px 32px 32px 16px"
          border-width="1px 1px 1px 0px"
          border-style="solid"
          border-color="--color-grey"
          lg-border-style="none"
          lg-border-width="0px"
        >
          <Box>
            <Text margin="15px 0px 16px 0px" font="--headline4" color="--dark">
              Экономия ресурсов
            </Text>
            <Text
              margin="0px 0px 16px 0px"
              font="--lead"
              color="--dark"
              width="100%"
              sm-font='normal 400 16px/1.5 "Fira Sans", sans-serif'
              lg-margin="0px 0px 45px 0px"
            >
              Программное обеспечение для непрерывного управления бизнес
              процессами, которое улучшает эффективность и обеспечивает
              бесперебойное проведение личных тестов с оценкой безопасности.
            </Text>
          </Box>
          <Link
            href="products"
            text-decoration-line="initial"
            color="--primary"
            padding="5px 35px 5px 0px"
            background="url(/DiomedialCNet/arrows/keyboard_arrow_right_blue.svg) 100% -5px/contain no-repeat"
            font="--lead"
          >
            Узнать больше
          </Link>
        </Box>
        <Box
          empty-min-width="64px"
          empty-min-height="64px"
          empty-border-width="1px"
          empty-border-style="solid"
          empty-border-color="LightGray"
          padding="16px 32px 60px 16px"
          border-width="1px 0px 1px 0px"
          border-style="solid"
          border-color="--color-grey"
          lg-border-style="none"
          lg-border-width="0px"
        >
          <Box>
            <Text margin="15px 0px 16px 0px" font="--headline4" color="--dark">
              3D Визуализация
            </Text>
            <Text
              margin="0px 0px 20px 0px"
              font="--lead"
              color="--dark"
              width="100%"
              sm-font='normal 400 16px/1.5 "Fira Sans", sans-serif'
              sm-margin="0px 0px 4px 0px"
              lg-margin="0px 0px 45px 0px"
            >
              Избавляет от затрат на создание физических экземпляров для
              представления отчетов crashtest'ов на презентациях для СМИ и
              прессы.
            </Text>
          </Box>
          <Link
            href="visual"
            text-decoration-line="initial"
            color="--primary"
            padding="5px 35px 5px 0px"
            background="url(/DiomedialCNet/arrows/keyboard_arrow_right_blue.svg) 100% -5px/contain no-repeat"
            font="--lead"
          >
            Запустить демо
          </Link>
        </Box>
      </Section>
      <Section padding="0px 0 0px 0">
        <Components.Tabs
          defaultTab="one"
          display="flex"
          flex-direction="row-reverse"
          width="100%"
          md-flex-wrap="wrap"
          margin="0px 0px -4px 0px"
        >
          <Override
            slot="Tablist"
            width="25%"
            flex-direction="column"
            padding="16px 16px 16px 24px"
            lg-width="40%"
            md-width="100%"
            md-padding="0px 0px 0px 0px"
            md-position="static"
            md-align-items="flex-start"
            md-order="1"
            md-flex-direction="row"
            md-flex-wrap="wrap"
          />
          <Override
            slot="TabPanels"
            width="75%"
            lg-width="60%"
            md-width="100%"
          />
          <Override
            slot="Tab"
            padding="16px 6px 16px 6px"
            text-align="left"
            background="rgba(32, 108, 236, 0)"
            color="--dark"
            font="--headline4"
            transition="transform 1s ease 0s"
            transform="translateX(0px)"
            opacity="0.5"
            margin="0px 0px 40px 0px"
            md-opacity="1"
            md-width="50%"
            sm-width="50%"
            sm-font='normal 400 20px/1.3 "Fira Sans", sans-serif'
            md-margin="0px 0px 8px 0px"
            md-font='normal 400 16px/1.3 "Fira Sans", sans-serif'
            md-color="--grey"
            sm-text-align="left"
          />
          <Override
            slot="Tab :active"
            transform="translateX(0px)"
            opacity="1"
            md-color="--dark"
          >
            Возможности
          </Override>
          <Override slot="Tab two">Юзер-Френдли</Override>
          <Override slot="Tab three">Кастомизация</Override>
          <Override slot="Tab four" margin="0px 0px 20px 0px">
            Эффективность
          </Override>
          <Override slot="Tab one">Возможности</Override>
          <Components.Tab tabId="one">
            <Override slot="Tab two">Юзер-Френдли</Override>
            <Image
              src="https://images.unsplash.com/photo-1590402494587-44b71d7772f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              max-width="100%"
              height="560px"
              object-fit="cover"
              width="100%"
              lg-height="460px"
              padding="0px 0px 0px 0px"
            />
          </Components.Tab>
          <Components.Tab tabId="two">
            <Image
              src="https://images.unsplash.com/photo-1560439514-4e9645039924?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1000"
              max-width="100%"
              height="560px"
              object-fit="cover"
              width="100%"
              lg-height="460px"
            />
          </Components.Tab>
          <Components.Tab tabId="three">
            <Image
              src="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1000"
              max-width="100%"
              height="560px"
              object-fit="cover"
              width="100%"
              lg-height="460px"
            />
          </Components.Tab>
          <Components.Tab tabId="four">
            <Image
              src="https://images.unsplash.com/photo-1561489413-985b06da5bee?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1000"
              height="560px"
              object-fit="cover"
              width="100%"
              lg-height="460px"
            />
          </Components.Tab>
        </Components.Tabs>
      </Section>
      <Section padding="0px 0 0px 0">
        <Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" />
        <Box
          empty-min-width="64px"
          empty-min-height="64px"
          empty-border-width="1px"
          empty-border-style="solid"
          empty-border-color="LightGray"
          width="75%"
          display="flex"
          align-items="center"
          lg-width="60%"
          md-width="100%"
        >
          <Text
            margin="0px 0px 0px 0px"
            font="--headline2"
            color="--dark"
            lg-font='400 30px/1.2 "Fira Sans", sans-serif'
            md-padding="32px 0px 32px 0px"
          >
            Crash test Simulation <br />
            Software{"  "}
            <Span
              color="--primary"
              font='700 50px/60px "Fira Sans", sans-serif'
              lg-font='400 30px/1.2 "Fira Sans", sans-serif'
              overflow-wrap="normal"
              word-break="normal"
              white-space="normal"
              text-indent="0"
              text-overflow="clip"
              hyphens="manual"
            >
              Предложения
            </Span>
          </Text>
        </Box>
        <Box
          empty-min-width="64px"
          empty-min-height="64px"
          empty-border-width="1px"
          empty-border-style="solid"
          empty-border-color="LightGray"
          width="25%"
          background="--color-primary"
          padding="32px 32px 79px 32px"
          lg-width="40%"
          md-width="100%"
          sm-padding="32px 32px 32px 32px"
          md-padding="32px 32px 32px 32px"
        >
          <Text
            margin="0px 0px 16px 0px"
            font="--headline4"
            color="--light"
            width="100%"
            lg-font='normal 400 24px/1.3 "Fira Sans", sans-serif'
          >
            Мы за выгодное сотрудничество
          </Text>
          <Text
            margin="0px 0px 16px 0px"
            font="--base"
            color="--light"
            width="100%"
          >
            Никаких долгосрочных обязательств, сборов за установку, сборов за
            отмену или скрытых сборов.{" "}
          </Text>
        </Box>
      </Section>
      <Section padding="0px 0 0px 0">
        <Override
          slot="SectionContent"
          flex-direction="row"
          lg-flex-wrap="wrap"
        />
        <Box
          empty-min-width="64px"
          empty-min-height="64px"
          empty-border-width="1px"
          empty-border-style="solid"
          empty-border-color="LightGray"
          width="50%"
          background="--color-lightD1"
          padding="16px 32px 65px 32px"
          border-width="1px 1px 1px 0px"
          border-style="solid"
          border-color="--color-grey"
          lg-width="100%"
          lg-border-width="0px"
        >
          <Box margin="0px 0px 54px 0px">
            <Text
              margin="15px 0px 16px 0px"
              font="--headline3"
              color="--dark"
              lg-font='400 30px/1.2 "Fira Sans", sans-serif'
            >
              Обычное
            </Text>
            <Text
              margin="0px 0px 8px 0px"
              font="--lead"
              color="--dark"
              width="100%"
              sm-font='normal 400 16px/1.5 "Fira Sans", sans-serif'
            >
              Моделирование на сервере
            </Text>
            <Text
              margin="0px 0px 8px 0px"
              font="--lead"
              color="--dark"
              width="100%"
              sm-font='normal 400 16px/1.5 "Fira Sans", sans-serif'
            >
              Полный набор функционала
            </Text>
            <Text
              margin="0px 0px 0px 0px"
              font="--lead"
              color="--dark"
              width="100%"
              sm-font='normal 400 16px/1.5 "Fira Sans", sans-serif'
            >
              Доступ к API
            </Text>
          </Box>
          <Link
            href="pricing"
            text-decoration-line="initial"
            color="--primary"
            padding="5px 35px 5px 0px"
            background="url(/DiomedialCNet/arrows/keyboard_arrow_right_blue.svg) 100% -5px/contain no-repeat"
            font="--lead"
          >
            From $399
          </Link>
        </Box>
        <Box
          empty-min-width="64px"
          empty-min-height="64px"
          empty-border-width="1px"
          empty-border-style="solid"
          empty-border-color="LightGray"
          width="50%"
          padding="16px 32px 65px 32px"
          border-color="--color-grey"
          position="relative"
          border-width="1px 0px 1px 0px"
          border-style="solid"
          lg-width="100%"
          lg-border-width="0px"
          // md-overflow-x="hidden"
        >
          <Image
            src="/DiomedialCNet/etc/VectaryTexture.png"
            position="absolute"
            right="88px"
            bottom="18px"
            left="auto"
            top="auto"
            lg-right="0px"
            md-bottom="0px"
            sm-bottom="0px"
            sm-right="0px"
            height="156px"
            width="200px"
            sm-top="auto"
            sm-left="auto"
          />
          <Box
            margin="0px 0px 54px 0px"
            display="flex"
            width="100%"
            flex-wrap="wrap"
            sm-flex-direction="column"
          >
            <Text
              margin="15px 0px 16px 0px"
              font="--headline3"
              color="--dark"
              width="100%"
              lg-font='400 30px/1.2 "Fira Sans", sans-serif'
            >
              Расширенное
            </Text>
            <Box width="55%" sm-width="100%">
              <Text
                margin="0px 0px 8px 0px"
                font="--lead"
                color="--dark"
                width="100%"
                sm-font='normal 400 16px/1.5 "Fira Sans", sans-serif'
              >
                Моделирование на сервере
              </Text>
              <Text
                margin="0px 0px 8px 0px"
                font="--lead"
                color="--dark"
                width="100%"
                sm-font='normal 400 16px/1.5 "Fira Sans", sans-serif'
              >
                Полный набор функционала
              </Text>
              <Text
                margin="0px 0px 8px 0px"
                font="--lead"
                color="--dark"
                width="100%"
                sm-font='normal 400 16px/1.5 "Fira Sans", sans-serif'
              >
                Доступ к API
              </Text>
            </Box>
            <Box width="45%" sm-width="100%">
              <Text
                margin="0px 0px 8px 0px"
                font="--lead"
                color="--dark"
                width="100%"
                sm-font='normal 400 16px/1.5 "Fira Sans", sans-serif'
              >
                Совместная работа
              </Text>
              <Text
                margin="0px 0px 8px 0px"
                font="--lead"
                color="--dark"
                width="100%"
                sm-font='normal 400 16px/1.5 "Fira Sans", sans-serif'
              >
                Поддержка 24/7
              </Text>
            </Box>
          </Box>
          <Link
            href="pricing"
            text-decoration-line="initial"
            color="--primary"
            padding="5px 35px 5px 0px"
            background="url(/DiomedialCNet/arrows/keyboard_arrow_right_blue.svg) 100% -5px/contain no-repeat"
            font="--lead"
          >
            From $899
          </Link>
        </Box>
      </Section>
      <Section padding="0px 0 0px 0">
        <Override
          slot="SectionContent"
          flex-direction="row"
          md-flex-wrap="wrap"
        />
        <Box
          empty-min-width="64px"
          empty-min-height="64px"
          empty-border-width="1px"
          empty-border-style="solid"
          empty-border-color="LightGray"
          width="50%"
          padding="64px 32px 257px 0px"
          background="--color-dark"
          md-width="100%"
          md-padding="64px 32px 64px 32px"
          sm-align-items="center"
          sm-display="flex"
          sm-justify-content="center"
          sm-padding="32px 16px 32px 16px"
        >
          <Box
            display="flex"
            flex-direction="column"
            width="80%"
            lg-width="100%"
          >
            <Text
              margin="0px 0px 0px 32px"
              font="--headline3"
              color="--light"
              sm-font='400 36px/1.2 "Fira Sans", sans-serif'
              lg-text-align="center"
              lg-margin="0px 0px 0px 0px"
            >
              Отзывы
            </Text>
            <Box
              padding="32px 35px 32px 32px"
              margin="32px 0px 0px 0px"
              background="--color-darkL2"
            >
              <Text
                font="--lead"
                color="--light"
                margin="0px 0px 0px 0px"
                lg-text-align="center"
              >
                Нам понравилась гибкость программного обеспечения, позволяющая
                адаптироваться к нашим меняющимся требованиям. Например, недавно
                наша компания начала разрабатывать электрокары и моделирование
                учитывало это и предлагало внести ряд изменений в конструкцию
                корпуса.
              </Text>
            </Box>
          </Box>
        </Box>
        <Box
          empty-min-width="64px"
          empty-min-height="64px"
          empty-border-width="1px"
          empty-border-style="solid"
          empty-border-color="LightGray"
          width="50%"
          background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1543269665-7821011040ee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80) 0% 40% /cover repeat scroll padding-box"
          padding="64px 32px 0px 32px"
          lg-padding="64px 0px 0px 32px"
          md-width="100%"
          md-padding="64px 0px 274px 32px"
        >
          <Link
            href="#"
            text-decoration-line="initial"
            color="--light"
            padding="5px 85px 5px 0px"
            background="url(/DiomedialCNet/arrows/keyboard_arrow_right.svg) 100% -12px/51px no-repeat"
            font="--headline3"
            sm-padding="5px 55px 5px 0px"
            sm-font='400 30px/1.2 "Fira Sans", sans-serif'
          >
            Наши клиенты говорят...
          </Link>
        </Box>
      </Section>
      <Section padding="0px 0 0px 0">
        <Override
          slot="SectionContent"
          flex-direction="row"
          md-flex-wrap="wrap"
        />
        <Box
          empty-min-width="64px"
          empty-min-height="64px"
          empty-border-width="1px"
          empty-border-style="solid"
          empty-border-color="LightGray"
          width="75%"
          display="flex"
          align-items="center"
          lg-width="55%"
          md-width="100%"
          padding="80px 32px 80px 0px"
          md-padding="32px 0px 32px 0px"
        >
          <Text
            margin="0px 0px 0px 0px"
            font="--headline2"
            color="--dark"
            lg-font='400 30px/1.2 "Fira Sans", sans-serif'
            width="80%"
            lg-width="100%"
          >
            Изучайте наш{" "}
            <Span
              font='700 50px/60px "Fira Sans", sans-serif'
              color="--primary"
              lg-font='400 30px/1.2 "Fira Sans", sans-serif'
              overflow-wrap="normal"
              word-break="normal"
              white-space="normal"
              text-indent="0"
              text-overflow="clip"
              hyphens="manual"
            >
              сервис
            </Span>{" "}
            и создавайте более высококачественную продукцию.
          </Text>
        </Box>
        <Box
          empty-min-width="64px"
          empty-min-height="64px"
          empty-border-width="1px"
          empty-border-style="solid"
          empty-border-color="LightGray"
          width="25%"
          padding="42px 32px 42px 32px"
          border-width="0px 0px 0px 1px"
          border-color="--color-grey"
          border-style="solid"
          lg-width="45%"
          md-width="100%"
          display="flex"
          flex-direction="column"
          justify-content="center"
          md-border-width="0px"
          md-border-style="none"
          sm-padding="16px 32px 0px 32px"
        >
          <Text
            margin="0px 0px 16px 0px"
            font="--headline4"
            color="--dark"
            width="100%"
            text-align="center"
            md-margin="0px 0px 32px 0px"
            md-text-align="left"
          >
            Наши партнеры
          </Text>
          <Carousel
            showHead={false}
            showLink={false}
            showText={false}
            autoPlayIntervalProp="5s"
            autoPlay
            showDots={false}
            slidesProp="5"
            aspectRatio="auto"
            md-padding="0px 0px 30% 0px"
            overflow-y="hidden"
            height="150px"
            md-overflow-x="visible"
            md-overflow-y="hidden"
            md-width="100%"
            sm-padding="0px 0px 22% 0px"
            sm-height="100px"
            // max-height="100%"
            // max-width="100%"
          >
            <Override
              slot="Slide Image 1"
              src="/DiomedialCNet/logos/logo-lexus.png"
            />
            <Override
              slot="Slide Image 2"
              src="/DiomedialCNet/logos/kawasaki-team-racing-vector-logo.png"
            />
            <Override
              slot="Slide Image 3"
              src="/DiomedialCNet/logos/logo-ford.png"
            />
            <Override
              slot="Arrow"
              background="none"
              md-display="none"
              align-items="flex-end"
            />
            <Override
              slot="Arrow Icon"
              color="--primary"
              border-color="#206CEC"
              border-width="1px"
              border-style="solid"
              border-radius="100%"
              size="38px"
            />
            <Override slot="Slide Image" md-height="auto" md-width="70%" />
            <Override
              slot="Slide Image 4"
              src="/DiomedialCNet/logos/nascar-auto-vector-logo.png"
            />
            <Override
              slot="Slide Image 5"
              src="/DiomedialCNet/logos/logo-tesla.png"
            />
            <Override slot="Arrow Prev" background="none" />
            <Override slot="Arrow Next" background="none" />
          </Carousel>
        </Box>
      </Section>
      <Section padding="0px 0 48px 0" quarkly-title="Footer">
        <Override
          slot="SectionContent"
          flex-direction="row"
          lg-flex-wrap="wrap"
        />
        <Box
          empty-min-width="64px"
          empty-min-height="64px"
          empty-border-width="1px"
          empty-border-style="solid"
          empty-border-color="LightGray"
          width="33.333%"
          padding="32px 32px 32px 32px"
          display="flex"
          flex-direction="column"
          align-items="flex-start"
          lg-width="100%"
          border-width="1px 0px 0px 0px"
          border-style="solid"
          border-color="--color-grey"
        >
          <Text
            margin="0px 0px 16px 0px"
            font="--headline4"
            color="--dark"
            lg-font='400 30px/1.2 "Fira Sans", sans-serif'
            sm-font='400 22px/1.2 "Fira Sans", sans-serif'
          >
            Подпишитесь на получение наших новостей.
          </Text>
          <NetlifyForm
            border-width="0px 0px 1px 0px"
            border-style="solid"
            border-color="--color-grey"
            width="240px"
            md-width="360px"
            sm-width="100%"
          >
            <Override
              slot="Form"
              align-items="center"
              display="flex"
              justify-content="center"
            />
            <Box
              display="flex"
              align-items="center"
              justify-content="flex-start"
            >
              <Input
                placeholder="Type your email here..."
                name="Email"
                required
                type="email"
                padding="6px 16px 6px 0px"
                border-color="--color-grey"
                border-width="0px"
                border-style="none"
                md-width="100%"
              />
              <Button
                color="transparent"
                background="transparent"
                font='normal 400 0px/1.5 "Fira Sans", sans-serif'
              >
                <Icon
                  category="md"
                  icon="MdKeyboardArrowRight"
                  color="--dark"
                />
                Подтвердить
              </Button>
            </Box>
          </NetlifyForm>
        </Box>
        <Box
          empty-min-width="64px"
          empty-min-height="64px"
          empty-border-width="1px"
          empty-border-style="solid"
          empty-border-color="LightGray"
          width="33.333%"
          padding="32px 32px 32px 32px"
          background="--color-primary"
          display="flex"
          flex-direction="column"
          align-items="flex-start"
          lg-width="100%"
        >
          <Text
            margin="0px 0px 16px 0px"
            font="--headline4"
            color="--light"
            lg-font='normal 400 20px/1.3 "Fira Sans", sans-serif'
            sm-font='normal 400 18px/1.4 "Fira Sans", sans-serif'
          >
            Связаться с нами
          </Text>
          <Text
            margin="0px 0px 16px 0px"
            font="--lead"
            color="--light"
            lg-font='normal 400 20px/1.3 "Fira Sans", sans-serif'
            sm-font='normal 400 18px/1.4 "Fira Sans", sans-serif'
          >
            125319, Россия, Москва, Ленинградский проспект, 64
          </Text>
          <Link
            href="tel:+79859391998"
            text-decoration-line="initial"
            color="--light"
            font="--lead"
            margin="0px 0px 16px 0px"
          >
            +7 (985) 939-1998
          </Link>
          <Link
            href="mailto:diomedialc@gmail.com"
            text-decoration-line="initial"
            color="--light"
            font="--lead"
            margin="0px 0px 5px 0px"
          >
            diomedialc@gmail.com
          </Link>
          <Link
            href="mailto:rerpledday@gmail.com"
            text-decoration-line="initial"
            color="--light"
            font="--lead"
            margin="0px 0px 32px 0px"
          >
            rerpledday@gmail.com
          </Link>
          <Text
            margin="0px 0px 16px 0px"
            font="--headline4"
            color="--light"
            lg-font='normal 400 20px/1.3 "Fira Sans", sans-serif'
            sm-font='normal 400 18px/1.4 "Fira Sans", sans-serif'
          >
            Мы в соц.сетях
          </Text>
          <SocialMedia
			margin="0px 0px 0px 0px"
			justify-content="flex-start"
			facebook="https://www.facebook.com/diomedialc"
			github="https://github.com/soul-on-you/diomedialc"
			telegram="https://t.me/diomedialc"
		>
			<Override
				slot="link"
				border-radius="50%"
				color="--grey"
				hover-color="--light"
				hover-background="transparent"
				margin="0 5px 0 5px"
				padding="5x 5px 5px 5px"
				width="36px"
				height="36px"
				display="flex"
				align-items="center"
				justify-content="center"
				background="none"
			/>
			<Override
				slot="icon"
				color="--light"
				padding="7px 7px 7px 7px"
				border-width="0px"
				size="34px"
				border-radius="50px"
			/>
			<Override slot="link-facebook" margin="0px 5px 0px 0px">
				<div />
			</Override>
		</SocialMedia>
        </Box>
        <Box
          empty-min-width="64px"
          empty-min-height="64px"
          empty-border-width="1px"
          empty-border-style="solid"
          empty-border-color="LightGray"
          width="33.333%"
          padding="32px 32px 32px 32px"
          background="--color-lightD1"
          display="flex"
          flex-direction="column"
          align-items="flex-start"
          lg-width="100%"
        >
          <Link
            href="aboutus"
            text-decoration-line="initial"
            color="--dark"
            padding="5px 35px 5px 0px"
            background="url(/DiomedialCNet/arrows/keyboard_arrow_right_black.svg) 100% 0px/30px no-repeat"
            font="--headline4"
            margin="0px 0px 27px 0px"
          >
            О нас
          </Link>
          <Link
            href="#"
            text-decoration-line="initial"
            color="--dark"
            padding="5px 35px 5px 0px"
            background="url(/DiomedialCNet/arrows/keyboard_arrow_right_black.svg) 100% 0px/30px no-repeat"
            font="--headline4"
            margin="0px 0px 27px 0px"
          >
            Помощь
          </Link>
          <Link
            href="#"
            text-decoration-line="initial"
            color="--dark"
            padding="5px 35px 5px 0px"
            background="url(/DiomedialCNet/arrows/keyboard_arrow_right_black.svg) 100% 0px/30px no-repeat"
            font="--headline4"
            margin="0px 0px 27px 0px"
          >
            FAQ
          </Link>
          <Link
            href="#"
            text-decoration-line="initial"
            color="--dark"
            padding="5px 35px 5px 0px"
            background="url(/DiomedialCNet/arrows/keyboard_arrow_right_black.svg) 100% 0px/30px no-repeat"
            font="--headline4"
            margin="0px 0px 27px 0px"
            lg-margin="0px 0px 0px 0px"
          >
            Блог
          </Link>
        </Box>
      </Section>
      <Section
        background="--color-light"
        color="--dark"
        padding="64px 0 64px 0"
      >
        <Box margin="-16px -16px -16px -16px" display="flex" flex-wrap="wrap">
          <Box padding="16px 16px 16px 16px" width="50%" lg-width="100%">
            <Box>
              <Text
                font="--base"
                color="--grey"
                letter-spacing="1px"
                text-transform="uppercase"
                margin="0"
              >
                Contact
              </Text>
              <Text font="--headline2" max-width="500px" margin="10px 0 0 0">
                Напишите нам, если у вас есть вопросы
              </Text>
            </Box>
          </Box>
          <Box width="50%" padding="8px 8px 8px 8px" lg-width="100%">
            <Box>
              <Formspree endpoint="mqknkdvp">
                <Box
                  gap="16px"
                  display="grid"
                  flex-direction="row"
                  flex-wrap="wrap"
                  grid-template-columns="repeat(2, 1fr)"
                  grid-gap="16px"
                >
                  <Box sm-width="100%" display="flex" flex-direction="column">
                    <Text font="--base" margin="0 0 4px 0">
                      Имя
                    </Text>
                    <Input width="100%" name="name" type="text" />
                  </Box>
                  <Box sm-width="100%" display="flex" flex-direction="column">
                    <Text font="--base" margin="0 0 4px 0">
                      Email
                    </Text>
                    <Input width="100%" type="email" name="email" />
                  </Box>
                  <Box
                    display="flex"
                    flex-direction="column"
                    grid-column="1 / span 2"
                  >
                    <Text font="--base" margin="0 0 4px 0">
                      Сообщение
                    </Text>
                    <Input as="textarea" rows="4" width="100%" name="message" />
                  </Box>
                  <Box
                    display="flex"
                    flex-direction="column"
                    align-items="flex-start"
                    grid-column="1 / span 2"
                  >
                    <Button>Отправить</Button>
                  </Box>
                </Box>
              </Formspree>
            </Box>
          </Box>
        </Box>
      </Section>
      <GlobalComponents.Footer/>
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
