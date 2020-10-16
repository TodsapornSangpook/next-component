import '../styles/globals.css';
import { applyPolyfills, defineCustomElements } from 'ice-todo-list/loader';

function MyApp({ Component, pageProps }) {
	return <Component {...pageProps} />;
}

applyPolyfills().then(() => {
	defineCustomElements();
});

export default MyApp;
