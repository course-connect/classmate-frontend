import CookieHandler from "../components/CookieHandler";
import Layout from "../components/Layout";
import { Provider } from "react-redux";
import "../styles/globals.scss";
import { wrapper } from "../redux/store";
import {
	createTheme,
	ThemeProvider,
	StyledEngineProvider,
} from "@mui/material";
import axios from "axios";
import { PersistGate } from "redux-persist/integration/react";

axios.defaults.baseURL =
	process.env.NODE_ENV == "production" ? "" : "http://localhost:5000";

export default function MyApp({ Component, pageProps, router }) {
	const { store } = wrapper.useWrappedStore(pageProps);
	const theme = createTheme({
		typography: {
			fontFamily: "georgia",
		},
		components: {
			MuiCssBaseline: {
				styleOverrides: `
					@font-face {
						font-family: 'georgia';
						font-style: normal;
						font-weight: normal;
						src: local('georgia'), url('../public/fonts/georgia.woff') format('woff');
						}
					`,
			},
		},
	});

	return (
		<ThemeProvider theme={theme}>
			<StyledEngineProvider injectFirst>
				<Provider store={store}>
					<PersistGate persistor={store.__PERSISTOR} loading={null}>
						<CookieHandler />
						<Layout>
							<Component {...pageProps} />
						</Layout>
					</PersistGate>
				</Provider>
			</StyledEngineProvider>
		</ThemeProvider>
	);
}
