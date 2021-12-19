import React from "react";
import theme from "theme";
import { Theme, Link, Image, Text, Section, Box, Span, Input, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, SocialMedia, Formspree } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
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
		<Section
			padding="20px 0 20px 0"
			quarkly-title="Header"
			position="fixed"
			top="0px"
			z-index="1"
			background="#ffffff"
			border-color="#ffffff"
		>
			<Override slot="SectionContent" flex-direction="row" display="flex" />
			<Image src="https://uploads.quarkly.io/61b732d81805d0001e1dae35/images/%D0%BB%D0%BE%D0%B3%D0%BE.png?v=2021-12-13T18:59:47.194Z" display="block" object-fit="contain" />
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
		</Section>
		<Section
			background="--color-darkL1"
			padding="0px 0 0px 0"
			quarkly-title="HeroBlock"
			md-flex-wrap="wrap"
			position="static"
			margin="146px 0 0 0"
		>
			<Override slot="SectionContent" flex-direction="row" md-flex-wrap="wrap" />
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
				<Box display="flex" flex-direction="column" width="80%" lg-width="100%">
					<Text margin="0px 0px 0px 0px" font="--headline4" color="--light" sm-font="400 36px/1.2 &quot;Fira Sans&quot;, sans-serif">
						Доказывать безопасность автомобиля - это важная обязанность для каждого производителя.
					</Text>
					<Text margin="32px 0px 0px 0px" font="--lead" color="--light" md-padding="0px 0px 40px 0px">
						Цель нашего проекта заключается в налаживании отношений с мировыфми компаниями для дальнейшего сотрудничества. Это пойдет на благо общества и экономики, и конечного потребителя.
					</Text>
					<Text margin="32px 0px 0px 0px" color="--light">
						Методы оценки безопасности для водителя и пассажира, выбираемые производителями автомобилей в настоящее время.
					</Text>
				</Box>
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
					src="https://uploads.quarkly.io/61b732d81805d0001e1dae35/images/ctesla1.jpg?v=2021-12-13T19:09:24.461Z"
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
						sm-font="normal 400 16px/1.5 &quot;Fira Sans&quot;, sans-serif"
						display="flex"
					>
						Мы предоставляем возможности по оценке безопасности автомобиля, анализируя возможные сценарии поведения при различных обстоятельствах, погодных условиях и по итогам предоставляем отчет по собранным данным.
					</Text>
					<Box width="33.333%" margin="32px 0px 0px 0px" padding="0px 30px 0px 0px" md-width="100%">
						<Text margin="0px 0px 16px 0px" font="normal 500 18px/1.5 --fontFamily-googleFiraSans" color="--dark">
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
					<Box width="33.333%" margin="32px 0px 0px 0px" padding="0px 30px 0px 0px" md-width="100%">
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
						<Text margin="0px 0px 16px 0px" font="normal 500 18px/1.5 --fontFamily-googleFiraSans" color="--dark">
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
			<Override slot="SectionContent" flex-direction="row" md-flex-wrap="wrap" />
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
				<Text margin="0px 0px 0px 0px" font="--headline2" color="--dark" lg-font="400 30px/1.2 &quot;Fira Sans&quot;, sans-serif">
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
					lg-font="normal 400 20px/1.3 &quot;Fira Sans&quot;, sans-serif"
					sm-font="normal 400 18px/1.4 &quot;Fira Sans&quot;, sans-serif"
					background="--color-primary"
					padding="32px 24px 32px 24px"
				>
					Лучшие автомобили создаются путем сочетания точного планирования и передовых технологий. Вот почему производители будут обращаються к универсальному программному обеспечению для моделирования и обработки событий, чтобы автоматизировать процессы и сократить расходы и время на разработку.
				</Text>
			</Box>
		</Section>
		<Section padding="0px 0 0px 0">
			<Override slot="SectionContent" flex-direction="row" md-flex-wrap="wrap" />
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
						lg-font="normal 400 24px/1.3 &quot;Fira Sans&quot;, sans-serif"
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
						Упростите проектирование с помощью удобной разработки моделирования, которая работает на всех устройствах и операционных системах.
					</Text>
					<Link
						href="#"
						text-decoration-line="initial"
						color="--primary"
						padding="5px 35px 5px 0px"
						background="url(https://uploads.quarkly.io/6143a05129a0a1001e6c835c/images/keyboard_arrow_right_blue.svg?v=2021-09-16T22:45:08.539Z) 100% -5px/contain no-repeat"
						font="--lead"
					>
						Learn more
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
						lg-font="normal 400 24px/1.3 &quot;Fira Sans&quot;, sans-serif"
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
						Связывайте проекты с подобранным списком предприятий, чтобы сделать организацию производства более эффективной.
					</Text>
					<Link
						href="#"
						text-decoration-line="initial"
						color="--primary"
						padding="5px 35px 5px 0px"
						background="url(https://uploads.quarkly.io/6143a05129a0a1001e6c835c/images/keyboard_arrow_right_blue.svg?v=2021-09-16T22:45:08.539Z) 100% -5px/contain no-repeat"
						font="--lead"
					>
						Learn more
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
					lg-font="400 30px/1.2 &quot;Fira Sans&quot;, sans-serif"
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
							sm-font="normal 400 16px/1.5 &quot;Fira Sans&quot;, sans-serif"
							lg-margin="0px 0px 16px 0px"
							display="flex"
						>
							Организуйте общую сеть рабочих станций для гибридного управления с помощью обращения к API серверу, это позволит сделать работу более удобной и эффективной.
						</Text>
						<Text
							margin="0px 0px 32px 0px"
							font="--lead"
							color="--dark"
							width="100%"
							sm-font="normal 400 16px/1.5 &quot;Fira Sans&quot;, sans-serif"
							lg-margin="0px 0px 16px 0px"
							display="flex"
						>
							Откройте перспективы перевода отдела проектировщиков на удаленную работу. Получайте понятную статистику о проделанной работы и текущим результатам.
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
							src="https://uploads.quarkly.io/61b732d81805d0001e1dae35/images/istockphoto-1355038193-170667a.jpg?v=2021-12-14T10:30:40.658Z"
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
						sm-font="normal 400 16px/1.5 &quot;Fira Sans&quot;, sans-serif"
						lg-margin="0px 0px 45px 0px"
					>
						Основа работы лежит в алгоритмах глубокого обучения ИИ на базе более 10000 совершенных crashtest'ов и отладке независимых результатов производимых в ходе процесса моделирования.
					</Text>
				</Box>
				<Link
					href="#"
					text-decoration-line="initial"
					color="--primary"
					padding="5px 35px 5px 0px"
					background="url(https://uploads.quarkly.io/6143a05129a0a1001e6c835c/images/keyboard_arrow_right_blue.svg?v=2021-09-16T22:45:08.539Z) 100% -5px/contain no-repeat"
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
						sm-font="normal 400 16px/1.5 &quot;Fira Sans&quot;, sans-serif"
						lg-margin="0px 0px 45px 0px"
					>
						Программное обеспечение для непрерывного управления бизнес процессами, которое улучшает эффективность и обеспечивает бесперебойное проведение личных тестов с оценкой безопасности.
					</Text>
				</Box>
				<Link
					href="#"
					text-decoration-line="initial"
					color="--primary"
					padding="5px 35px 5px 0px"
					background="url(https://uploads.quarkly.io/6143a05129a0a1001e6c835c/images/keyboard_arrow_right_blue.svg?v=2021-09-16T22:45:08.539Z) 100% -5px/contain no-repeat"
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
						sm-font="normal 400 16px/1.5 &quot;Fira Sans&quot;, sans-serif"
						sm-margin="0px 0px 4px 0px"
						lg-margin="0px 0px 45px 0px"
					>
						Избавляет от затрат на создание физических экземпляров для представления отчетов crashtest'ов на презентациях для СМИ и прессы.
					</Text>
				</Box>
				<Link
					href="#"
					text-decoration-line="initial"
					color="--primary"
					padding="5px 35px 5px 0px"
					background="url(https://uploads.quarkly.io/6143a05129a0a1001e6c835c/images/keyboard_arrow_right_blue.svg?v=2021-09-16T22:45:08.539Z) 100% -5px/contain no-repeat"
					font="--lead"
				>
					Запустить демо
				</Link>
			</Box>
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
					lg-font="400 30px/1.2 &quot;Fira Sans&quot;, sans-serif"
					md-padding="32px 0px 32px 0px"
				>
					Crash test Simulation{" "}
					<br />
					Software{"  "}
					<Span
						color="--primary"
						font="700 50px/60px &quot;Fira Sans&quot;, sans-serif"
						lg-font="400 30px/1.2 &quot;Fira Sans&quot;, sans-serif"
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
					lg-font="normal 400 24px/1.3 &quot;Fira Sans&quot;, sans-serif"
				>
					Мы за выгодное сотрудничество
				</Text>
				<Text margin="0px 0px 16px 0px" font="--base" color="--light" width="100%">
					Никаких долгосрочных обязательств, сборов за установку, сборов за отмену или скрытых сборов.{" "}
				</Text>
			</Box>
		</Section>
		<Section padding="0px 0 0px 0">
			<Override slot="SectionContent" flex-direction="row" lg-flex-wrap="wrap" />
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
					<Text margin="15px 0px 16px 0px" font="--headline3" color="--dark" lg-font="400 30px/1.2 &quot;Fira Sans&quot;, sans-serif">
						Обычное
					</Text>
					<Text
						margin="0px 0px 8px 0px"
						font="--lead"
						color="--dark"
						width="100%"
						sm-font="normal 400 16px/1.5 &quot;Fira Sans&quot;, sans-serif"
					>
						Моделирование на сервере
					</Text>
					<Text
						margin="0px 0px 8px 0px"
						font="--lead"
						color="--dark"
						width="100%"
						sm-font="normal 400 16px/1.5 &quot;Fira Sans&quot;, sans-serif"
					>
						Полный набор функционала
					</Text>
					<Text
						margin="0px 0px 0px 0px"
						font="--lead"
						color="--dark"
						width="100%"
						sm-font="normal 400 16px/1.5 &quot;Fira Sans&quot;, sans-serif"
					>
						Доступ к API
					</Text>
				</Box>
				<Link
					href="#"
					text-decoration-line="initial"
					color="--primary"
					padding="5px 35px 5px 0px"
					background="url(https://uploads.quarkly.io/6143a05129a0a1001e6c835c/images/keyboard_arrow_right_blue.svg?v=2021-09-16T22:45:08.539Z) 100% -5px/contain no-repeat"
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
			>
				<Image
					src="https://uploads.quarkly.io/6143a05129a0a1001e6c835c/images/Vectary%20texture.png?v=2021-09-18T00:09:23.228Z"
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
					sm-left="auto"
					sm-top="auto"
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
						lg-font="400 30px/1.2 &quot;Fira Sans&quot;, sans-serif"
					>
						Расширенное
					</Text>
					<Box width="55%" sm-width="100%">
						<Text
							margin="0px 0px 8px 0px"
							font="--lead"
							color="--dark"
							width="100%"
							sm-font="normal 400 16px/1.5 &quot;Fira Sans&quot;, sans-serif"
						>
							Моделирование на сервере
						</Text>
						<Text
							margin="0px 0px 8px 0px"
							font="--lead"
							color="--dark"
							width="100%"
							sm-font="normal 400 16px/1.5 &quot;Fira Sans&quot;, sans-serif"
						>
							Полный набор функционала
						</Text>
						<Text
							margin="0px 0px 8px 0px"
							font="--lead"
							color="--dark"
							width="100%"
							sm-font="normal 400 16px/1.5 &quot;Fira Sans&quot;, sans-serif"
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
							sm-font="normal 400 16px/1.5 &quot;Fira Sans&quot;, sans-serif"
						>
							Совместная работа
						</Text>
						<Text
							margin="0px 0px 8px 0px"
							font="--lead"
							color="--dark"
							width="100%"
							sm-font="normal 400 16px/1.5 &quot;Fira Sans&quot;, sans-serif"
						>
							Поддержка 24/7
						</Text>
					</Box>
				</Box>
				<Link
					href="#"
					text-decoration-line="initial"
					color="--primary"
					padding="5px 35px 5px 0px"
					background="url(https://uploads.quarkly.io/6143a05129a0a1001e6c835c/images/keyboard_arrow_right_blue.svg?v=2021-09-16T22:45:08.539Z) 100% -5px/contain no-repeat"
					font="--lead"
				>
					From $899
				</Link>
			</Box>
		</Section>
		<Section padding="0px 0 0px 0">
			<Override slot="SectionContent" flex-direction="row" md-flex-wrap="wrap" />
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
				<Box display="flex" flex-direction="column" width="80%" lg-width="100%">
					<Text
						margin="0px 0px 0px 32px"
						font="--headline3"
						color="--light"
						sm-font="400 36px/1.2 &quot;Fira Sans&quot;, sans-serif"
						lg-text-align="center"
						lg-margin="0px 0px 0px 0px"
					>
						Отзывы
					</Text>
					<Box padding="32px 35px 32px 32px" margin="32px 0px 0px 0px" background="--color-darkL2">
						<Text font="--lead" color="--light" margin="0px 0px 0px 0px" lg-text-align="center">
							Нам понравилась гибкость программного обеспечения, позволяющая адаптироваться к нашим меняющимся требованиям. Например, недавно наша компания начала разрабатывать электрокары и моделирование учитывало это и предлагало внести ряд изменений в конструкцию корпуса.
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
					background="url(https://uploads.quarkly.io/6143a05129a0a1001e6c835c/images/keyboard_arrow_right.svg?v=2021-09-16T22:08:39.193Z) 100% -12px/51px no-repeat"
					font="--headline3"
					sm-padding="5px 55px 5px 0px"
					sm-font="400 30px/1.2 &quot;Fira Sans&quot;, sans-serif"
				>
					Наши клиенты говорят...
				</Link>
			</Box>
		</Section>
		<Section padding="0px 0 0px 0">
			<Override slot="SectionContent" flex-direction="row" md-flex-wrap="wrap" />
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
					lg-font="400 30px/1.2 &quot;Fira Sans&quot;, sans-serif"
					width="80%"
					lg-width="100%"
				>
					Изучайте наш{" "}
					<Span
						font="700 50px/60px &quot;Fira Sans&quot;, sans-serif"
						color="--primary"
						lg-font="400 30px/1.2 &quot;Fira Sans&quot;, sans-serif"
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
					>
						сервис
					</Span>
					{" "}и создавайте более высококачественную продукцию.
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
			</Box>
		</Section>
		<Section padding="0px 0 48px 0" quarkly-title="Footer">
			<Override slot="SectionContent" flex-direction="row" lg-flex-wrap="wrap" />
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
					lg-font="400 30px/1.2 &quot;Fira Sans&quot;, sans-serif"
					sm-font="400 22px/1.2 &quot;Fira Sans&quot;, sans-serif"
				>
					Подпишитесь на получение наших новостей.
				</Text>
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
					lg-font="normal 400 20px/1.3 &quot;Fira Sans&quot;, sans-serif"
					sm-font="normal 400 18px/1.4 &quot;Fira Sans&quot;, sans-serif"
				>
					Связаться с нами
				</Text>
				<Text
					margin="0px 0px 16px 0px"
					font="--lead"
					color="--light"
					lg-font="normal 400 20px/1.3 &quot;Fira Sans&quot;, sans-serif"
					sm-font="normal 400 18px/1.4 &quot;Fira Sans&quot;, sans-serif"
				>
					125319, Россия, Москва, Ленинградский проспект, 64
				</Text>
				<Link
					href="tel:12345678"
					text-decoration-line="initial"
					color="--light"
					font="--lead"
					margin="0px 0px 16px 0px"
				>
					+7 (985) 939-1998
				</Link>
				<Link
					href="mailto:info@b2bpltfrm.com"
					text-decoration-line="initial"
					color="--light"
					font="--lead"
					margin="0px 0px 0px 0px"
				>
					diomedialc@gmail.com
				</Link>
				<Link
					href="mailto:info@b2bpltfrm.com"
					text-decoration-line="initial"
					color="--light"
					font="--lead"
					margin="0px 0px 20px 0px"
				>
					rerpledday@gmail.com
				</Link>
				<Text
					margin="0px 0px 16px 0px"
					font="--headline4"
					color="--light"
					lg-font="normal 400 20px/1.3 &quot;Fira Sans&quot;, sans-serif"
					sm-font="normal 400 18px/1.4 &quot;Fira Sans&quot;, sans-serif"
				>
					Мы в соц.сетях
				</Text>
				<SocialMedia
					margin="0px 0px 0px 0px"
					justify-content="flex-start"
					facebook="https://www.facebook.com/diomedialc"
					github="https://github.com/soul-on-you/2bASU_Angel_Twinc_Pleasure_Club-"
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
					href="#"
					text-decoration-line="initial"
					color="--dark"
					padding="5px 35px 5px 0px"
					background="url(https://uploads.quarkly.io/6143a05129a0a1001e6c835c/images/keyboard_arrow_right_black.svg?v=2021-09-18T00:53:14.815Z) 100% 0px/30px no-repeat"
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
					background="url(https://uploads.quarkly.io/6143a05129a0a1001e6c835c/images/keyboard_arrow_right_black.svg?v=2021-09-18T00:53:14.815Z) 100% 0px/30px no-repeat"
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
					background="url(https://uploads.quarkly.io/6143a05129a0a1001e6c835c/images/keyboard_arrow_right_black.svg?v=2021-09-18T00:53:14.815Z) 100% 0px/30px no-repeat"
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
					background="url(https://uploads.quarkly.io/6143a05129a0a1001e6c835c/images/keyboard_arrow_right_black.svg?v=2021-09-18T00:53:14.815Z) 100% 0px/30px no-repeat"
					font="--headline4"
					margin="0px 0px 27px 0px"
					lg-margin="0px 0px 0px 0px"
				>
					Блог
				</Link>
			</Box>
		</Section>
		<Section background="--color-light" color="--dark" padding="64px 0 64px 0">
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
						<Formspree endpoint="xeqpgrlv">
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
										Name
									</Text>
									<Input width="100%" name="name" type="text" />
								</Box>
								<Box sm-width="100%" display="flex" flex-direction="column">
									<Text font="--base" margin="0 0 4px 0">
										Email
									</Text>
									<Input width="100%" type="email" name="email" />
								</Box>
								<Box display="flex" flex-direction="column" grid-column="1 / span 2">
									<Text font="--base" margin="0 0 4px 0">
										Message
									</Text>
									<Input as="textarea" rows="4" width="100%" name="message" />
								</Box>
								<Box display="flex" flex-direction="column" align-items="flex-start" grid-column="1 / span 2">
									<Button>
										Send
									</Button>
								</Box>
							</Box>
						</Formspree>
					</Box>
				</Box>
			</Box>
		</Section>
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
					<Text margin="0px 0px 0px 0px" color="#949494">
						+7 (985) 939-1998
					</Text>
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