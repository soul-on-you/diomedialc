import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Image, Section, List } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"pricing"} />
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
		<Section padding="112px 0 0px 0" background="--color-darkL2" md-padding="96px 0 0px 0" sm-padding="72px 0 0px 0">
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" />
			<Components.QuarklycommunityKitBgImageParallax imageURL="https://drive.google.com/uc?export=view&id=1XHk9ndiA6TIjRLPmqY6hPewoZ5rN_XXf">
				<Box
					display="flex"
					width="100%"
					flex-direction="column"
					justify-content="center"
					align-items="center"
					lg-width="100%"
					lg-align-items="center"
					lg-margin="0px 0px 60px 0px"
					sm-margin="0px 0px 40px 0px"
					margin="0px 0px 40px 0px"
					padding="0px 0px 0px 0px"
					sm-padding="0px 0px 0px 0px"
				>
					<Text
						margin="0px 0px 24px 0px"
						color="--greyD1"
						font="--headline1"
						lg-text-align="center"
						sm-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
						text-align="center"
						width="80%"
						md-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
						sm-width="100%"
					>
						Решения для наших клиентов
					</Text>
					<Text
						margin="0px 0px 32px 0px"
						color="--greyD2"
						font="--lead"
						lg-text-align="center"
						text-align="center"
						width="60%"
					>
						Безкомпромисно и под конкретные задачи, выберите ваш профессиональный инструмент
					</Text>
				</Box>
				<Box
					display="flex"
					width="100%"
					justify-content="center"
					overflow-y="hidden"
					overflow-x="hidden"
					lg-width="100%"
				>
					<Image
						src="https://uploads.quarkly.io/612695d67f2b1f001fa06c1f/images/Component%209.png?v=2021-08-25T23:48:27.512Z"
						max-width="100%"
						transform="translateY(10px)"
						transition="transform 0.5s ease-in-out 0s"
						hover-transform="translateY(0px)"
					/>
				</Box>
			</Components.QuarklycommunityKitBgImageParallax>
		</Section>
		<Section padding="80px 0 80px 0">
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" />
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
				<Text margin="0px 0px 16px 0px" font="--headline1" text-align="center" sm-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif">
					Предложения
				</Text>
				<Text margin="0px 0px 0px 0px" color="--darkL2" text-align="center" font="--lead">
					Благодаря развитию и применению ПО с искусственным интеллектом человечество делает огромный шаг на пути гиперавтоматизации.
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
						src="https://drive.google.com/uc?export=view&id=1LXDYcgCIyLSKpvcAVIjRgHCLvEunytWY"
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
						<List margin="0px 0px 20px 0px" padding="0px 0px 0px 0px" list-style-type="disc" as="ul">
							<Text margin="0px 0px 4px 0px" color="--darkL2" font="--base">
								Мощный сервер на базе indel xeon gold 6185 и rtx 3080
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
							buy now $ 399
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
						Recomended
					</Text>
					<Image
						src="https://drive.google.com/uc?export=view&id=1wtS8Jgs1yF2c3aISE4ZlfjurA68YyD2j"
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
						<List margin="0px 0px 20px 0px" padding="0px 0px 0px 0px" list-style-type="disc" as="ul">
							<Text margin="0px 0px 4px 0px" color="--darkL2" font="--base">
								Мощный сервер на базе indel xeon platinum 8225 и rtx A6000
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
							buy now $ 899
						</Link>
					</Box>
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