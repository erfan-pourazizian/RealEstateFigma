import Head from "next/head";
import Navbar from '../Navbar'
import Footer from '../Footer'

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Real Estate</title>
            </Head>
            <header>
                <Navbar />
            </header>
            <main>{children}</main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default Layout
