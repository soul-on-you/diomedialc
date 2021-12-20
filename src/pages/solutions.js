import React from "react";
import theme from "theme";
import { Theme, Text, Box, Image, Section } from "@quarkly/widgets";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as GlobalComponents from "components/global";
import { BackToTop } from "@quarkly/community-kit";
export default () => {
  return (
      <Theme theme={theme}>
        <GlobalQuarklyPageStyles pageUrl={"solutions"} />
        <GlobalComponents.Helmet />
        <GlobalComponents.HeaderMobileSidePanel />
        <Section
          padding="80px 0 80px 0"
          sm-padding="60px 0 60px 0"
          background="--color-grey"
        >
          <Override
            slot="SectionContent"
            flex-direction="row"
            flex-wrap="wrap"
          />
          <Box
            display="flex"
            width="50%"
            flex-direction="column"
            justify-content="center"
            align-items="flex-start"
            lg-align-items="center"
            lg-margin="0px 0px 20px 0px"
            sm-padding="0px 0px 0px 0px"
            padding="16px 16px 16px 0px"
            lg-width="100%"
            md-margin="0px 0px 20px 0px"
            sm-margin="0px 0px 30px 0px"
          >
            <Text
              margin="0px 0px 0px 0px"
              color="--dark"
              font="--headline2"
              lg-text-align="center"
              sm-font='normal 700 42px/1.2 "Source Sans Pro", sans-serif'
              padding="0px 16px 0px 0px"
            >
              О моделяциях и плюсах внедрения данной технологии
            </Text>
          </Box>
          <Box
            display="flex"
            width="50%"
            flex-direction="column"
            justify-content="flex-start"
            align-items="flex-start"
            lg-align-items="center"
            lg-margin="0px 0px 0px 0px"
            sm-padding="0px 0px 0px 0px"
            padding="28px 0px 16px 16px"
            lg-width="100%"
            md-margin="0px 0px 20px 0px"
            sm-margin="0px 0px 0px 0px"
          >
            <Text
              margin="0px 0px 0px 0px"
              color="--darkL1"
              font="--lead"
              lg-text-align="left"
              display="flex"
              align-items="flex-start"
              sm-text-align="left"
            >
              На протяжении всей истории возможность моделирования помогала
              развитию множества наук. Модели в медицине, симулирующие
              человеческое тело, улучшают изучение анатомии. Различные
              программы-тренажеры также позволяют исследовать реакцию на
              террористические атаки, пандемии и другие возможные кризисные
              явления. Моделирование, или симуляция (simulation), — это метод,
              при котором спроектированная модель эмулирует какую-либо систему
              или процесс из реальной жизни. Модель инкапсулирует все
              характеристики и поведения системы, а сама симуляция заключается в
              выполнении этой системы в течение времени. Моделирование обычно
              включает либо непрерывный процесс, либо дискретные события. Наши
              разработки включают в себя программное обеспечение для
              моделирования событий. Оно доступно на всех платформах и помогает
              воссоздать необходимые ситуации.
            </Text>
          </Box>
          <Box
            display="grid"
            width="100%"
            margin="80px 0px 0px 0px"
            lg-margin="40px 0px 0px 0px"
            grid-template-columns="repeat(3, 1fr)"
            grid-gap="32px"
            sm-grid-template-columns="1fr"
          >
            <Image
              src="/DiomedialCNet/analitics/modeling3.png"
              object-fit="cover"
              width="100%"
              height="100%"
              grid-column="1 / span 1"
              border-radius="24px"
            />
            <Image
              src="/DiomedialCNet/analitics/modeling.jpg"
              object-fit="cover"
              width="100%"
              height="100%"
              grid-column="2 / span 2"
              border-radius="24px"
              sm-grid-column="1 / span 1"
            />
          </Box>
        </Section>
        <Section
          padding="80px 0 80px 0"
          sm-padding="60px 0 60px 0"
          background="--color-dark"
        >
          <Override
            slot="SectionContent"
            flex-direction="row"
            md-flex-wrap="wrap"
          />
          <Box
            width="50%"
            display="flex"
            flex-direction="column"
            justify-content="space-between"
            md-width="100%"
            padding="0px 80px 0px 0px"
            lg-padding="0px 30px 0px 0px"
            md-padding="0px 0px 0px 0px"
            md-margin="0 0 10px 0"
            lg-justify-content="center"
          >
            <Image src="/DiomedialCNet/analitics/2.jpg" display="block" />
          </Box>
          <Box
            width="50%"
            display="flex"
            flex-direction="column"
            justify-content="space-between"
            md-width="100%"
          >
            <Text
              margin="0px 0px 0px 0px"
              color="#ffffff"
              text-align="center"
              font="--headline4"
              lg-margin="0px 0px 10px 0px"
            >
              Круглосуточная поддержка.{" "}
            </Text>
            <Text
              margin="0px 0px 0px 0px"
              color="#F7FBFF"
              font="--base"
              lg-margin="0px 0px 10px 0px"
            >
              Наши специалисты всегда готовы оказать необходимую информационную
              помощь и решить любую проблему сразу, в любое время. Удобная и
              простая документация. Вам не придется потратить много времени на
              изучение проектов. Инструкции представлены в максимально понятной
              форме с необходимым объемом информации. Возможность совместимости
              с любыми форматами. Наша компания предоставляет широкий спектр
              допустимых форматов продукта.{" "}
            </Text>
            <Text margin="0px 0px 0px 0px" color="#ffffff" font="--base">
              API для интегрирования системы в крупные проекты. С помощью API
              выполняется мгновенное подключение к серверам других ресурсов и
              программных решений, которое в обычной реализации заняло бы недели
              разработок. API упрощает жизнь там, где не нужна уникальная
              реализация, и в приоритете надежность и безопасность.{" "}
            </Text>
          </Box>
        </Section>
        <Section
          padding="80px 0 80px 0"
          sm-padding="60px 0 60px 0"
          background="--color-dark"
        >
          <Override
            slot="SectionContent"
            flex-direction="row"
            md-flex-wrap="wrap"
          />
          <Box
            width="50%"
            display="flex"
            flex-direction="column"
            justify-content="space-between"
            md-width="100%"
            padding="0px 80px 0px 0px"
            lg-padding="0px 30px 0px 0px"
            md-padding="0px 0px 0px 0px"
            lg-flex-direction="column"
            lg-justify-content="space-around"
            md-margin="0 0 10px 0"
          >
            <Text
              margin="0px 0px 10px 0px"
              color="--light"
              font="--headline4"
              md-margin="0px 0px 30px 0px"
              text-align="center"
            >
              Плюсы внедрения
            </Text>
            <Image src="/DiomedialCNet/analitics/5.jpg" display="block" />
          </Box>
          <Box
            width="50%"
            display="flex"
            flex-direction="column"
            justify-content="space-between"
            md-width="100%"
          >
            <Text margin="0px 0px 10px 0px" color="--light" font="--base">
              Мы меняем подход. Сначала разработка, потом выпуск. Все происходит
              последовательно, с учетом всех пожеланий и возможных корректировок
              на различных этапах. Нет необходимости в физических экземплярах.
              Вы экономите огромные ресурсы по сравнению с реальными
              испытаниями, при тех же условиях. Моделирование дает больше
              информации за счет вычислений.
            </Text>
            <Text margin="0px 0px 10px 0px" color="--light" font="--base">
              Польза для окружающей среды. С нашими разработками Вам не придется
              наносить вред природе и тратить ресурсы впустую. А также
              отсутствует необходимость в последующих затратах на детали.
            </Text>
            <Text margin="0px 0px 10px 0px" color="--light" font="--base">
              Технологии виртуализации помогут перейти к новому методу работы.
              Виртуализация, виртуальные машины снижают стоимость владения
              ИТ-инфраструктурой и помогают в будущем сэкономить на ее
              содержании и модернизации. Технология объединяет в пределах одного
              мощного оборудования функции нескольких физических устройств, а
              морально устаревшему «железу» дает вторую жизнь — его можно
              использовать в качестве терминальных компьютеров. С уменьшением
              количества единиц оборудования снижается потребность в
              электроснабжении и охлаждении, сокращается штат технических
              специалистов для его обслуживания.
            </Text>
          </Box>
        </Section>
        <Section
          padding="80px 0 80px 0"
          sm-padding="60px 0 60px 0"
          background="--color-dark"
        >
          <Override
            slot="SectionContent"
            flex-direction="row"
            md-flex-wrap="wrap"
          />
          <Box
            width="50%"
            display="flex"
            flex-direction="column"
            justify-content="space-between"
            md-width="100%"
            padding="0px 80px 0px 0px"
            lg-padding="0px 30px 0px 0px"
            md-padding="0px 0px 0px 0px"
            lg-justify-content="center"
            md-margin="0 0 10px 0"
          >
            <Image src="/DiomedialCNet/analitics/6.jpg" display="block" />
          </Box>
          <Box
            width="50%"
            display="flex"
            flex-direction="column"
            justify-content="space-between"
            md-width="100%"
          >
            <Text
              margin="0px 0px 10px 0px"
              color="--light"
              font="--headline4"
              md-margin="0px 0px 30px 0px"
              text-align="center"
            >
              Основные преимущества
            </Text>
            <Text margin="0px 0px 10px 0px" color="--light" font="--base">
              Возможность получать прогноз при планировании. События могут быть
              спрогнозированы с помощью наших облачных вычислений и
              использования специального ПО.
            </Text>
            <Text margin="0px 0px 10px 0px" color="--light" font="--base">
              Персональные рекомендации. На всех этапах планирования реализован
              индивидуальный подход к каждому проекту персонально. Мы укажем на
              ошибки, предложим пути решения и улучшения результата.
            </Text>
            <Text margin="0px 0px 0px 0px" color="--light" font="--base">
              Анализ износостойкости. При планировании производится детальный
              анализ объекта, расчет прочности, необходимых затрат на обработку.
            </Text>
            <Text margin="0px 0px 0px 0px" color="--light" font="--base">
              Связывайте проекты с подобранным списком предприятий, чтобы
              сделать организацию производства более эффективной. Объединение
              усилий позволит повысить покупательскую способность продукта,
              облегчит внедрение новых технологий в производственный процесс.
              Для бизнеса открыты возможности для роста эффективности и
              полезного сотрудничества.
            </Text>
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
