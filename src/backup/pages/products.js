import React from "react";
import theme from "theme";
import { Theme, Link, Image, Text, Box, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"products"} />
		<Helmet>
			<title>
				Business Matchmaking Has Never Been Easier
			</title>
			<meta name={"description"} content={"Manage all your events in a single app. Our online event management platform provides various services event planners and project managers may need."} />
			<meta property={"og:title"} content={"Business Matchmaking Has Never Been Easier"} />
			<meta property={"og:description"} content={"Manage all your events in a single app. Our online event management platform provides various services event planners and project managers may need."} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/6143a05129a0a1001e6c835c/images/OG-image.png?v=2021-09-22T11:33:13.239Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/6143a05129a0a1001e6c835c/images/favicon%2032x32.png?v=2021-09-22T11:33:41.498Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/6143a05129a0a1001e6c835c/images/152x152.png?v=2021-09-22T11:33:48.679Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/6143a05129a0a1001e6c835c/images/152x152.png?v=2021-09-22T11:33:48.679Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/6143a05129a0a1001e6c835c/images/152x152.png?v=2021-09-22T11:33:48.679Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/6143a05129a0a1001e6c835c/images/152x152.png?v=2021-09-22T11:33:48.679Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/6143a05129a0a1001e6c835c/images/270x270.png?v=2021-09-22T11:33:55.934Z"} />
		</Helmet>
		<Section padding="80px 0 80px 0" sm-padding="60px 0 60px 0" background="--color-grey">
			<Override slot="SectionContent" flex-direction="row" md-flex-wrap="wrap" />
			<Box
				width="30%"
				display="flex"
				flex-direction="column"
				justify-content="space-between"
				md-width="100%"
				margin="0px 20px 0px 0px"
				padding="0px 0px 0px 0px"
				lg-padding="0px 20px 0px 0px"
				md-padding="0px 0px 0px 0px"
				md-margin="0px 0px 30px 0px"
			>
				<Image max-width="340px" src="https://drive.google.com/uc?export=view&id=1YXoVPZc_ioB1Fh1hPrNPg76l3YPgzQDc" md-margin="0px 0px 20px 0px" />
				<Text margin="0px 0px 0px 0px" color="--darkL2" font="--base" position="static">
					Дэвид Грумбридж, вице-президент Gartner.
				</Text>
			</Box>
			<Box
				width="70%"
				display="flex"
				flex-direction="column"
				justify-content="space-between"
				md-width="100%"
			>
				<Text margin="0px 0px 40px 0px" color="--dark" font="--headline4" md-margin="0px 0px 30px 0px">
					Gartner, Inc. объявила об основных стратегических технологических тенденциях, которые организациям необходимо изучить в 2022 году.
				</Text>
				<Text margin="0px 0px 40px 0px" color="--darkL2" font="--base">
					«Поскольку генеральные директора и советы директоровстремятся к росту за счет прямых цифровых связей склиентами, приоритеты ИТ-директоров должны отражатьте же бизнес-императивы, которые присутствуют вкаждой из основных стратегических технологическихтенденций Gartner на 2022 год», - сказал ДэвидГрумбридж.
				</Text>
				<Text margin="0px 0px 0px 0px" color="--darkL2" font="--base">
					«ИТ-директора должны найти множители ИТ-ресурсов, чтобы обеспечить рост и инновации, а также создать масштабируемую, устойчивую техническую основу, масштабируемость которой позволит высвободить денежные средства для цифровых инвестиций. Эти императивы составляют три темы тенденций этого года: инженерное доверие, моделирование изменений и ускорение роста ».
				</Text>
			</Box>
		</Section>
		<Section padding="80px 0 80px 0" sm-padding="60px 0 60px 0" background="--color-dark">
			<Override slot="SectionContent" flex-direction="row" md-flex-wrap="wrap" />
			<Box
				width="50%"
				display="flex"
				flex-direction="column"
				justify-content="space-between"
				md-width="100%"
				padding="0px 80px 0px 0px"
				lg-padding="0px 30px 0px 0px"
				md-padding="0px 0px 0px 0px"
				sm-margin="0 0 10px 0"
			>
				<Text
					margin="0px 0px 10px 0px"
					color="--orange"
					font="--lead"
					md-margin="0px 0px 20px 0px"
					text-align="center"
				>
					Основные стратегические технологические тенденциями на 2022 год, поддерживаемые нашей компанией.
				</Text>
				<Image src="https://drive.google.com/uc?export=view&id=1gFqbVK0V48QIhBd6HocHUdLrTWS80UjK" display="block" />
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
					color="#ffffff"
					sm-align-self="auto"
					sm-text-align="center"
					sm-margin="0px 0px 10px 0px"
					text-align="center"
					font="--headline4"
				>
					Генеративный искусственный интеллект
				</Text>
				<Text margin="0px 0px 10px 0px" color="--light" font="--base">
					Одним из наиболее заметных и мощных методов ИИ, поступающих на рынок, является генеративный ИИ - методы машинного обучения, которые изучают контент или объекты из их данных и используют их для создания совершенно новых, полностью оригинальных и реалистичных артефактов.
				</Text>
				<Text margin="0px 0px 10px 0px" color="--light" font="--base">
					Генеративный ИИ может использоваться для ряда действий, таких как создание программного кода, облегчение разработки лекарств и целевого маркетинга, но также может использоваться для мошенничества, мошенничества, политической дезинформации, подделки личности и многого другого. К 2025 году Gartner ожидает, что на генеративный ИИ будет приходиться 10% всех производимых данных по сравнению с менее чем 1% сегодня.{" "}
				</Text>
				<Text margin="0px 0px 0px 0px" color="--light" font="--base">
					Несмотря на то, что многие проекты с ИИ, особенно в промышленности, пока носят экспериментальный характер, аналитики уверены в грандиозных перспективах этого направления. «Инфосистемы Джет» и TAdviser в своих материалах прогнозируют рост мирового рынка искусственного интеллекта и машинного обучения до уже к 2023 году.{" "}
				</Text>
			</Box>
		</Section>
		<Section padding="80px 0 80px 0" sm-padding="60px 0 60px 0" background="--color-dark">
			<Override slot="SectionContent" flex-direction="row" md-flex-wrap="wrap" />
			<Box
				width="50%"
				display="flex"
				flex-direction="column"
				justify-content="space-between"
				md-width="100%"
				sm-margin="0 0 10px 0"
			>
				<Text
					margin="0px 0px 10px 0px"
					color="#ffffff"
					sm-align-self="auto"
					sm-text-align="center"
					sm-margin="0px 0px 10px 0px"
					text-align="center"
					font="--headline4"
				>
					Фабрика данных
				</Text>
				<Text margin="0px 0px 10px 0px" color="--light" font="--base">
					Количество разрозненных данных и приложений резко выросло за последнее десятилетие, в то время как количество квалифицированного персонала в командах данных и аналитики (D&A) либо осталось неизменным, либо даже сократилось. Фабрики данных - гибкая, устойчивая интеграция данных между платформами и бизнес-пользователями - появились для упрощения инфраструктуры интеграции данных в организации и создания масштабируемой архитектуры, которая сокращает технический долг, наблюдаемый в большинстве команд D&A из-за растущих проблем интеграции.
				</Text>
				<Text margin="0px 0px 10px 0px" color="--light" font="--base">
					Настоящая ценность фабрики данных заключается в ее способности динамически улучшать использование данных с помощью встроенной аналитики, сокращая усилия по управлению данными до 70% и ускоряя время окупаемости.
				</Text>
				<Text margin="0px 0px 0px 0px" color="--light" font="--base">
					Несмотря на то, что многие проекты с ИИ, особенно в промышленности, пока носят экспериментальный характер, аналитики уверены в грандиозных перспективах этого направления. «Инфосистемы Джет» и TAdviser в своих материалах прогнозируют рост российского рынка искусственного интеллекта и машинного обучения до 28 млрд рублей уже к 2020 году.{" "}
				</Text>
			</Box>
			<Box
				width="50%"
				display="flex"
				flex-direction="column"
				justify-content="space-between"
				md-width="100%"
				padding="0px 0px 0px 40px"
				lg-padding="0px 0px 0px 20px"
				md-padding="0px 0px 0px 0px"
				sm-margin="0 0 10px 0"
				lg-justify-content="center"
				lg-align-items="center"
				lg-flex="0 0 auto"
				lg-flex-direction="row-reverse"
			>
				<Image
					src="https://drive.google.com/uc?export=view&id=1bcyWM2NDQvGYtsX0iDi6s9h00U9pXDfP"
					display="block"
					width="100%"
					heigth="100%"
					object-fit="cover"
					height="100%"
					lg-align-self="flex-end"
				/>
			</Box>
		</Section>
		<Section padding="80px 0 80px 0" sm-padding="60px 0 60px 0" background="--color-dark">
			<Override slot="SectionContent" flex-direction="row" md-flex-wrap="wrap" />
			<Box
				width="50%"
				display="flex"
				flex-direction="column"
				justify-content="space-between"
				md-width="100%"
				padding="0px 80px 0px 0px"
				lg-padding="0px 30px 0px 0px"
				md-padding="0px 0px 0px 0px"
				sm-margin="0 0 10px 0"
			>
				<Image src="https://drive.google.com/uc?export=view&id=1-QLy-s740g8Z756LlVwF9ILUxfSYrkKt" display="block" />
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
					color="#ffffff"
					sm-align-self="auto"
					sm-text-align="center"
					sm-margin="0px 0px 10px 0px"
					text-align="center"
					font="--headline4"
				>
					Облачные платформы (CNP)
				</Text>
				<Text margin="0px 0px 10px 0px" color="--light" font="--base">
					Чтобы по-настоящему предоставлять цифровые возможности везде и всюду, предприятиям необходимо отказаться от привычных миграций по принципу «подъем и сдвиг» и перейти к CNP. CNP используют основные возможности облачных вычислений для предоставления масштабируемых и эластичных ИТ-возможностей «как услуга» для создателей технологий, использующих Интернет-технологии, что сокращает время окупаемости и снижает затраты.
				</Text>
				<Text margin="0px 0px 10px 0px" color="--light" font="--base">
					По этой причине Gartner прогнозирует, что облачные платформы будут служить основой для более 95% новых цифровых инициатив к 2025 году по сравнению с менее чем 40% в 2021 году.
				</Text>
				<Text margin="0px 0px 0px 0px" color="--light" font="--base">
					Активное развитие наблюдается в области CNF-контейнеров и VNF-виртуальных машин, полностью разделяемые ресурсы между VNF и CNF, позволяют лучше использовать ресурсы, из-за чего требуется намного меньше операционных процедур. Виртуальные машины работают на 30% быстрее, чем на  других устаревших платформах - это проверено заказчиками.{" "}
				</Text>
			</Box>
		</Section>
		<Section padding="80px 0 80px 0" sm-padding="60px 0 60px 0" background="--color-dark">
			<Override slot="SectionContent" flex-direction="row" md-flex-wrap="wrap" />
			<Box
				width="50%"
				display="flex"
				flex-direction="column"
				justify-content="space-between"
				md-width="100%"
				sm-margin="0 0 10px 0"
			>
				<Text
					margin="0px 0px 10px 0px"
					color="#ffffff"
					sm-align-self="auto"
					sm-text-align="center"
					sm-margin="0px 0px 10px 0px"
					text-align="center"
					font="--headline4"
				>
					Разведка решений (DI)
				</Text>
				<Text margin="0px 0px 10px 0px" color="--light" font="--base">
					Компетенция организации в области принятия решений может быть значительным источником конкурентного преимущества, но она становится все более требовательной.
				</Text>
				<Text margin="0px 0px 10px 0px" color="--light" font="--base">
					Интеллект при принятии решений - это практическая дисциплина, используемая для улучшения процесса принятия решений путем четкого понимания и разработки того, как принимаются решения, а результаты оцениваются, управляются и улучшаются с помощью обратной связи. Gartner прогнозирует, что в следующие два года треть крупных организаций будет использовать аналитику решений для структурированного принятия решений с целью повышения конкурентного преимущества.{" "}
				</Text>
				<Text margin="0px 0px 0px 0px" color="--light" font="--base">
					Gartner полагает, что треть всех крупных организаций будут нанимать аналитиков, которые практикуют анализ решений, включая моделирование решений, уже к 2023 году. Это еще раз указывает на актуальность этого вопроса и внедрение искусственного интеллекта в эти процессы поможет развитию и раширению мировых компаний.
				</Text>
			</Box>
			<Box
				width="50%"
				display="flex"
				flex-direction="column"
				justify-content="space-between"
				md-width="100%"
				padding="0px 0px 0px 40px"
				lg-padding="0px 0px 0px 20px"
				md-padding="0px 0px 0px 0px"
				sm-margin="0 0 10px 0"
				lg-justify-content="center"
				lg-align-items="center"
				lg-flex="0 0 auto"
				lg-flex-direction="row-reverse"
			>
				<Image
					src="https://drive.google.com/uc?export=view&id=1BZMkCg_RxXWu2Ckv4so9JM2lRK0d2EEN"
					display="block"
					width="100%"
					heigth="100%"
					object-fit="cover"
					height="100%"
					lg-align-self="flex-end"
				/>
			</Box>
		</Section>
		<Section padding="80px 0 80px 0" sm-padding="60px 0 60px 0" background="--color-dark">
			<Override slot="SectionContent" flex-direction="row" md-flex-wrap="wrap" />
			<Box
				width="50%"
				display="flex"
				flex-direction="column"
				justify-content="space-between"
				md-width="100%"
				padding="0px 80px 0px 0px"
				lg-padding="0px 30px 0px 0px"
				md-padding="0px 0px 0px 0px"
				sm-margin="0 0 10px 0"
			>
				<Image src="https://drive.google.com/uc?export=view&id=1XdAZEjK_0eW8YKWAV5JpBbLkF0HKz42X" display="block" />
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
					color="#ffffff"
					sm-align-self="auto"
					sm-text-align="center"
					sm-margin="0px 0px 10px 0px"
					text-align="center"
					font="--headline4"
				>
					Гиперавтоматизация
				</Text>
				<Text margin="0px 0px 10px 0px" color="--light" font="--base">
					Гиперавтоматизация обеспечивает ускоренный рост и повышение устойчивости бизнеса за счет быстрой идентификации, проверки и автоматизации как можно большего числа процессов.
				</Text>
				<Text margin="0px 0px 10px 0px" color="--light" font="--base">
					«Исследование Gartner показывает, что наиболее эффективные группы гиперавтоматизации сосредоточены на трех ключевых приоритетах: повышение качества работы, ускорение бизнес-процессов и повышение гибкости принятия решений», - сказал Грумбридж. «Бизнес-технологи также поддержали в среднем 4,2 инициативы по автоматизации в прошлом году».{" "}
				</Text>
				<Text margin="0px 0px 0px 0px" color="--light" font="--base">
					Быстрая и недорогая роботизация рутиных операций силами бизнес-пользователей – вот основная причина интереса к гиперавтоматизации. Разрывы в автоматизированных процессах можно быстро и самостятельно сшить с помощью инструментария гиперавтоматизации, часто не обращаясь к помощи ИТ-специалистов.
				</Text>
			</Box>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"6143a05129a0a1001e6c835a"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}\n\n* {\n    scroll-behavior: smooth;\n    }"}
			</style>
		</RawHtml>
	</Theme>;
});