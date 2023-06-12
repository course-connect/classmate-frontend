import Layout from '../components/Layout';
import { Provider } from 'react-redux';
import '../styles/globals.scss';
import { wrapper } from '../store/store';

export default function MyApp({ Component, pageProps }) {
	const { store } = wrapper.useWrappedStore(pageProps);

	return (
		<Provider store={store}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</Provider>
	);
}
