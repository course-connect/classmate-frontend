import Layout from '../components/Layout';
import { Provider } from 'react-redux';
import '../styles/globals.scss';
import { wrapper } from '../redux/store';
import {
	createTheme,
	ThemeProvider,
	StyledEngineProvider,
} from '@mui/material';

export default function MyApp({ Component, pageProps }) {
	const { store } = wrapper.useWrappedStore(pageProps);
	// const theme = createTheme({
	// 	typography: {
	// 		fontFamily: 'georgia',
	// 	},
	// 	components: {
	// 		MuiCssBaseline: {
	// 			styleOverrides: `
	// 				@font-face {
	// 					font-family: 'georgia';
	// 					font-style: normal;
	// 					font-weight: normal;
	// 					src: local('georgia'), url('../public/fonts/georgia.woff') format('woff');
	// 					}
	// 				`,
	// 		},
	// 		MuiTextField: {
	// 			styleOverrides: {
	// 				root: {
	// 					'& label': {
	// 						color: '#788473',
	// 					},
	// 					'& label.Mui-focused': {
	// 						color: '#D0A13D',
	// 					},
	// 					'& label.Mui-error': {
	// 						color: '#d32f2f',
	// 					},
	// 					'& .MuiOutlinedInput-root': {
	// 						'& fieldset': {
	// 							borderColor: '#B0B4B0 ',
	// 						},
	// 						'&:hover fieldset': {
	// 							borderColor: '#788473',
	// 						},
	// 						'&.Mui-focused fieldset': {
	// 							borderColor: '#D0A13D',
	// 						},
	// 						'&.Mui-error fieldset': {
	// 							borderColor: '#d32f2f',
	// 						},
	// 					},
	// 					'& .MuiOutlinedInput-input': {
	// 						color: '#788473',
	// 					},
	// 				},
	// 			},
	// 		},
	// 		MuiFormControl: {
	// 			styleOverrides: {
	// 				root: {
	// 					'& label': {
	// 						color: '#788473',
	// 					},
	// 					'& label.Mui-focused': {
	// 						color: '#D0A13D',
	// 					},
	// 					'& label.Mui-error': {
	// 						color: '#d32f2f',
	// 					},
	// 					'& .MuiOutlinedInput-root': {
	// 						'& fieldset': {
	// 							borderColor: '#B0B4B0 ',
	// 						},
	// 						'&:hover fieldset': {
	// 							borderColor: '#788473',
	// 						},
	// 						'&.Mui-focused fieldset': {
	// 							borderColor: '#D0A13D',
	// 						},
	// 						'&.Mui-error fieldset': {
	// 							borderColor: '#d32f2f',
	// 						},
	// 					},
	// 					'& .MuiOutlinedInput-input': {
	// 						color: '#788473',
	// 					},
	// 				},
	// 			},
	// 		},
	// 	},
	// });

	return (
		// <ThemeProvider theme={theme}>
		<StyledEngineProvider injectFirst>
			<Provider store={store}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</Provider>
		</StyledEngineProvider>
		// </ThemeProvider>
	);
}
