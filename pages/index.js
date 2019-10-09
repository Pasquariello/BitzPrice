
import Layout from '../components/Layout';
import Prices from '../components/Prices';

import Fetch from 'isomorphic-unfetch';

const Index =(props) => (
    <Layout>
        <div>
            <h1>Welcome to BitzPrice</h1>
            <p>Check current Bitcoin Rate</p>
            <Prices bpi={props.bpi}/>
        </div>
    </Layout>
);

Index.getInitialProps = async function() {
    let url = "https://api.coindesk.com/v1/bpi/currentprice.json";

    const res = await fetch(url); 
    //fetch returns a promise that needs to be mapped to json
    const data = await res.json();

    //bpi comes from the bitcoin api
    return {
        bpi: data.bpi
    }
}

export default Index;