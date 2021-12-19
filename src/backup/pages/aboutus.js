import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Section, Icon, Image } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, Menu, StackItem, Stack, SocialMedia } from "@quarkly/components";
import * as Components from "components";
import { MdArrowDownward } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"aboutus"} />
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
		<Section>
			<Box
				display="flex"
				padding="12px 0"
				justify-content="space-between"
				align-items="center"
				flex-direction="row"
				md-flex-direction="column"
			>
				<Text margin="0" md-margin="0px 0 20px 0" text-align="left" font="--lead">
					Awesome Company
				</Text>
				<Menu
					display="flex"
					justify-content="center"
					font="--base"
					font-weight="700"
					md-flex-direction="column"
					md-align-items="center"
				>
					<Override slot="link" text-decoration="none" color="--dark" padding="6px 12px" />
					<Override slot="link-active" color="--primary" />
					<Override slot="item" padding="6px" />
				</Menu>
			</Box>
		</Section>
		<Section color="--light" font="--base">
			<Components.QuarklycommunityKitBgImageParallax
				padding="64px 0 30px 0"
				sm-padding="40px 0"
				imageURL="https://drive.google.com/uc?export=view&id=1T0niHr6N-wVUFwE5b_EIKQ7ukI0CisuX"
				imageRepeat="no-repeat"
				scrollSpeedProp="0.1"
			>
				<Stack>
					<StackItem width="75%" lg-width="100%" margin="0 0 0 20px">
						<Override slot="StackItemContent" flex-direction="column" />
						<Text color="--lightD2" letter-spacing="1px" text-transform="uppercase" margin="0">
							Excellence in everything
						</Text>
						<Text as="h1" font="--headline1" md-font="--headline2" margin="10px 0">
							Striving for perfection in everything we do. Unparalleled service for everyone.
						</Text>
					</StackItem>
				</Stack>
				<Box text-align="center" margin="96px 0 0 0">
					<Text margin="8px 0" text-transform="uppercase">
						Who we are
					</Text>
					<Icon category="md" margin="0 auto" icon={MdArrowDownward} />
				</Box>
			</Components.QuarklycommunityKitBgImageParallax>
		</Section>
		<Section padding="80px 0 80px 0">
			<Box
				align-items="center"
				display="flex"
				justify-content="center"
				flex-direction="column"
				margin="0px 0px 32px 0px"
				width="100%"
			>
				<Text
					margin="0px 0px 0px 0px"
					font="--headline1"
					color="--dark"
					sm-text-align="center"
					text-align="center"
				>
					Наша команда
				</Text>
				<Text
					margin="16px 0px 0px 0px"
					font="--lead"
					display="block"
					width="50%"
					text-align="center"
					color="--darkL2"
					lg-width="100%"
				>
					Новейший человек, рождает новеншний подход.
				</Text>
			</Box>
			<Box
				display="grid"
				grid-template-columns="repeat(3, 1fr)"
				grid-gap="32px"
				md-grid-template-columns="1fr"
				width="100%"
			>
				<Box position="relative" display="flex" flex-direction="column">
					<Box
						width="100%"
						height="auto"
						overflow-x="hidden"
						overflow-y="hidden"
						position="relative"
						padding="100% 0px 0px 0px"
						border-radius="16px"
					>
						<Image
							src="https://drive.google.com/uc?export=view&id=14KIZdYKh4Q5y7p33_9lse4U9mK1F9jHC"
							border-radius="16px"
							width="100%"
							object-fit="cover"
							position="absolute"
							top={0}
							left={0}
							bottom={0}
							right={0}
							max-height="100%"
						/>
					</Box>
					<Box padding="0px 20px 0px 20px" margin="0px 0px 16px 0px">
						<Text
							margin="24px 0px 0px 0px"
							font="--headline3"
							display="block"
							text-align="center"
							color="--darkL1"
						>
							Юдаков Данила
						</Text>
						<Text
							margin="16px 0px 0px 0px"
							font="normal 500 14px/1.2 --fontFamily-sans"
							display="block"
							text-align="center"
							color="--grey"
							letter-spacing="2.8px"
						>
							Разработка и проектировщик
						</Text>
						<Text
							margin="16px 0px 0px 0px"
							font="--base"
							display="block"
							text-align="center"
							color="--darkL2"
						>
							Я смею всё, что можно человеку, кто смеет больше, тот не человек!
						</Text>
					</Box>
					<SocialMedia margin="12px 0px 24px 0px" telegram="https://t.me/diomedialc" github="https://github.com/soul-on-you">
						<Override
							slot="link"
							border-radius="50%"
							color="--grey"
							hover-color="--light"
							background="transparent"
							hover-background="transparent"
							margin="0 5px 0 5px"
							padding="0px 0px 0px 0px"
						/>
						<Override slot="icon-facebook" color="#000000" />
						<Override
							slot="icon"
							color="--darkL1"
							padding="10px 10px 10px 10px"
							border-color="--color-grey"
							border-style="solid"
							size="40px"
							border-radius="50px"
							background="--color-lightD2"
							border-width="0px"
						/>
					</SocialMedia>
				</Box>
				<Box position="relative" display="flex" flex-direction="column">
					<Box
						width="100%"
						height="auto"
						overflow-x="hidden"
						overflow-y="hidden"
						position="relative"
						padding="100% 0px 0px 0px"
						border-radius="16px"
					>
						<Image
							src="https://drive.google.com/uc?export=view&id=1A0JWz0gVkMloffn_txh4P9lg1QXt3Bby"
							border-radius="16px"
							width="100%"
							object-fit="cover"
							position="absolute"
							top={0}
							left={0}
							bottom={0}
							right={0}
							max-height="100%"
						/>
					</Box>
					<Box padding="0px 20px 0px 20px" margin="0px 0px 16px 0px">
						<Text
							margin="24px 0px 0px 0px"
							font="--headline3"
							display="block"
							text-align="center"
							color="--darkL1"
						>
							Бутушин Федор
						</Text>
						<Text
							margin="16px 0px 0px 0px"
							font="normal 500 14px/1.2 --fontFamily-sans"
							display="block"
							text-align="center"
							color="--grey"
							letter-spacing="2.8px"
						>
							Разработка
						</Text>
						<Text
							margin="16px 0px 0px 0px"
							font="--base"
							display="block"
							text-align="center"
							color="--darkL2"
						>
							One shall stand and one shall fall
							<br />
						</Text>
					</Box>
					<SocialMedia margin="12px 0px 24px 0px" github="https://github.com/VainglorPrime" vkontakte="https://vk.com/vainglor_prime">
						<Override
							slot="link"
							border-radius="50%"
							color="--grey"
							hover-color="--light"
							background="transparent"
							hover-background="transparent"
							margin="0 5px 0 5px"
							padding="0px 0px 0px 0px"
						/>
						<Override slot="icon-facebook" color="#000000" />
						<Override
							slot="icon"
							color="--darkL1"
							padding="10px 10px 10px 10px"
							border-color="--color-grey"
							border-style="solid"
							size="40px"
							border-radius="50px"
							background="--color-lightD2"
							border-width="0px"
						/>
					</SocialMedia>
				</Box>
				<Box position="relative" display="flex" flex-direction="column">
					<Box
						width="100%"
						height="auto"
						overflow-x="hidden"
						overflow-y="hidden"
						position="relative"
						padding="100% 0px 0px 0px"
						border-radius="16px"
					>
						<Image
							src="https://drive.google.com/uc?export=view&id=1xyFrUbPTQZ66KuBhFn_StJqmYPUuqCqg"
							border-radius="16px"
							width="100%"
							object-fit="cover"
							position="absolute"
							top={0}
							left={0}
							bottom={0}
							right={0}
							max-height="100%"
						/>
					</Box>
					<Box padding="0px 20px 0px 20px" margin="0px 0px 16px 0px">
						<Text
							margin="24px 0px 0px 0px"
							font="--headline3"
							display="block"
							text-align="center"
							color="--darkL1"
						>
							Борисов Кирилл
						</Text>
						<Text
							margin="16px 0px 0px 0px"
							font="normal 500 14px/1.2 --fontFamily-sans"
							display="block"
							text-align="center"
							color="--grey"
							letter-spacing="2.8px"
						>
							Аналитик и тестировщик
						</Text>
						<Text
							margin="16px 0px 0px 0px"
							font="--base"
							display="block"
							text-align="center"
							color="--darkL2"
						>
							Важная составляющая любого начинания - не потерять к нему интереса
						</Text>
					</Box>
					<SocialMedia margin="12px 0px 24px 0px" vkontakte="https://vk.com/lovchui " telegram="https://t.me/limon1488">
						<Override
							slot="link"
							border-radius="50%"
							color="--grey"
							hover-color="--light"
							background="transparent"
							hover-background="transparent"
							margin="0 5px 0 5px"
							padding="0px 0px 0px 0px"
						/>
						<Override slot="icon-facebook" color="#000000" />
						<Override
							slot="icon"
							color="--darkL1"
							padding="10px 10px 10px 10px"
							border-color="--color-grey"
							border-style="solid"
							size="40px"
							border-radius="50px"
							background="--color-lightD2"
							border-width="0px"
						/>
					</SocialMedia>
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