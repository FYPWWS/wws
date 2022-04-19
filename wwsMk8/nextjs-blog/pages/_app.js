import '../styles/globals.css'
import Layout from '../components/layout';
import { DataContextProvider } from "../store/data-store";
import { NextUIProvider, createTheme } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from 'next-themes';

const darkTheme = createTheme({
    type: 'dark',
    theme: {
      
    }
  })

function App({ Component, pageProps }) {
    return (
        <NextThemesProvider
            defaultTheme="system"
            attribute="class"
            value={{
            dark: darkTheme.className
            }}
        >
            <NextUIProvider>
                <DataContextProvider>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </DataContextProvider>
            </NextUIProvider>
        </NextThemesProvider>
    );
  }

  export default App