import Head from 'next/head';
import Navbar from './Navbar';

const Layout = (props) => (

    <div>
        <Head>
            <link rel="stylesheet" href="https://bootswatch.com/4/slate/bootstrap.min.css"></link>
            <title>
                BitzPrice
            </title>
        </Head>
        <Navbar/>
        <div className="container">
            {props.children}
        </div>
    </div>

);

export default Layout;
