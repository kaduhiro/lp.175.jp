import { ReactNode, VFC, useContext } from 'react';
import Head from 'next/head';
import { ThemeContext } from '@/themes/Context';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

type Props = {
	children: ReactNode;
	title: string;
};

const Layout: VFC<Props> = ({ children, title }) => {
	const { theme } = useContext(ThemeContext);

	return (
		<>
			<Head>
				<title>{title}</title>
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Header />
				<main>{children}</main>
				<Footer />
			</ThemeProvider>
		</>
	);
};

export default Layout;
