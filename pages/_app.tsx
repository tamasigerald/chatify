import type { AppProps } from 'next/app';

import 'reset.css';
import GlobalProvider from '/contexts/GlobalContext';
import '/styles/styles.scss';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <GlobalProvider>
            <Component {...pageProps} />
        </GlobalProvider>
    );
}

export default MyApp;
