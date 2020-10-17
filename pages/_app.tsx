import '../styles/globals.css';
import { AppProps } from 'next/app';
import { applyPolyfills, defineCustomElements } from 'ice-todo-list/loader';

function MyApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}

applyPolyfills().then(() => {
	defineCustomElements();
});

export default MyApp;
