import "@/styles/globals.css";
import "@/styles/typography.css";

import type { AppProps } from "next/app";
import NextThemeProvider from "@/components/next-theme-provider";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<NextThemeProvider defaultTheme="dark">
				<Component {...pageProps} />
			</NextThemeProvider>
		</>
	);
}
