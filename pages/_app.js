import CookieHandler from "../components/CookieHandler";
import Layout from "../components/Layout";
import { Provider } from "react-redux";
import "../styles/globals.scss";
import { wrapper } from "../redux/store";
import axios from "axios";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "@material-tailwind/react";
import customTheme from "../styles/theme/customTheme";

axios.defaults.baseURL =
	process.env.NODE_ENV == "production" ? "" : "http://localhost:5000";

export default function MyApp({ Component, pageProps }) {
	const { store } = wrapper.useWrappedStore(pageProps);

	return (
		<ThemeProvider value={customTheme}>
			<Provider store={store}>
				<PersistGate persistor={store.__PERSISTOR} loading={null}>
					<CookieHandler />
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</PersistGate>
			</Provider>
		</ThemeProvider>
	);
}
