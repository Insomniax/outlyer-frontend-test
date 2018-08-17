import React from 'react';
import {fetchBtcGbp} from "../../actions/btcgbp";
import {connect} from "react-redux";

export class PricesChartPage extends React.Component {

    componentDidMount () {
        const fetchPricesInterval = 30000;
        this.props.dispatch(fetchBtcGbp());

        setInterval(() => {
            this.props.dispatch(fetchBtcGbp());
        }, fetchPricesInterval);
    }

    render () {
        const { prices, loading, error } = this.props;

        if (error) {
            return <div>Error fetching latest BTC/GBP price</div>;
        } else {
            return (
                <section>
                    {prices.map(price => <div>{price}</div>)}
                    {loading ? <div>Loading new price...</div> : ''}
                </section>
            );
        }
    }
}

const mapStateToProps = state => {
    console.log('state', state);
    return ({
        prices: state.get('prices'),
        loading: state.get('loading'),
        error: state.get('error')
    });
}

export default connect(mapStateToProps)(PricesChartPage)