import React from "react";
import theme from "theme";
import { Theme, Text, Section, Box, Span } from "@quarkly/widgets";
import { BackToTop } from "@quarkly/community-kit";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as GlobalComponents from "components/global"
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"404"} />
		<GlobalComponents.Helmet/>
		<GlobalComponents.HeaderMobileSidePanel/>
		<Section padding="0px 0 0px 0">
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" />
			<Box
				width="50%"
				padding="0px 0px 0px 16px"
				flex-direction="column"
				md-width="100%"
				md-padding="0px 0px 0px 0px"
				display="flex"
				lg-padding="0px 0px 0px 0px"
			>
				<Box
					border-width="1px 0px 0px 0px"
					border-style="solid"
					border-color="#C4C4C4"
					padding="80px 16px 80px 0px"
					md-padding="60px 16px 60px 0px"
					display="flex"
					height="100%"
					align-items="flex-start"
					flex-direction="column"
				>
					<Text margin="0px 0px 0px 0px" font="--headline2" color="--dark" lg-font="400 30px/1.2 &quot;Fira Sans&quot;, sans-serif">
						Что-то произошло{" "}
						<Span color="--primary" font="700 50px/60px &quot;Fira Sans&quot;, sans-serif" lg-font="700 30px/60px &quot;Fira Sans&quot;, sans-serif">
							ошибка
						</Span>
					</Text>
					<Text margin="16px 0px 0px 0px" font="--headline4" color="--dark" lg-font="400 24px/1.2 &quot;Fira Sans&quot;, sans-serif">
						ошибка 404
					</Text>
				</Box>
			</Box>
			<Box
				width="50%"
				display="flex"
				padding="24px 32px 24px 32px"
				flex-direction="column"
				justify-content="space-between"
				border-color="#"
				background="--color-primary"
				md-width="100%"
				md-margin="0px 0px 0px 0px"
				md-padding="44px 16px 44px 16px"
			>
				<Text
					margin="0px 0px 0px 0px"
					font="--headline4"
					color="--light"
					lg-font="normal 400 20px/1.3 &quot;Fira Sans&quot;, sans-serif"
					sm-font="normal 400 18px/1.4 &quot;Fira Sans&quot;, sans-serif"
				>
					Оооой... эта страница пока временно недоступна.
				</Text>
			</Box>
		</Section>
		<BackToTop/>
		<GlobalComponents.Footer/>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"6143a05129a0a1001e6c835a"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}\n\n* {\n    scroll-behavior: smooth;\n    }"}
			</style>
		</RawHtml>
	</Theme>;
});