import React from 'react';
import {fetchBtcGbp} from "../../actions/btcgbp";
import {connect} from "react-redux";
import Chart from '../../components/Chart';
import "./styles.css";
import TrendArrow from '../../components/TrendArrow/index';
import LoadingOverlay from '../../components/LoadingOverlay/index';

export class PricesChartPage extends React.Component {

    componentDidMount () {
        const fetchPricesInterval = 30000;
        this.props.dispatch(fetchBtcGbp());

        setInterval(() => {
            this.props.dispatch(fetchBtcGbp());
        }, fetchPricesInterval);
    }

    render () {
        const { timePrices, loading, error } = this.props;
        const times = timePrices.map(tp => tp.time);
        const prices = timePrices.map(tp => tp.price);
        const lastTwoPrices = prices && prices.length > 1 && prices.slice(-2);

        const lineChartData = {
            labels: [...times],
            datasets: [
                {
                    type: "line",
                    label: "BTC - GBP",
                    backgroundColor: "transparent",
                    borderColor: "#336699",
                    pointBackgroundColor: "#F0F0F0",
                    pointBorderColor: "#336699",
                    borderWidth: "3",
                    lineTension: 0.5,
                    data: [...prices]
                }
            ]
        };

        const lineChartOptions = {
            responsive: true,
            maintainAspectRatio: false,
            tooltips: {
                enabled: true
            }
        };

        const lastPriceHeading = prices.length ? <h4>Last Price: <span className='last-price'>£{prices.slice(-1)}</span></h4> : '';

        return (
            <section>
                <header>
                    <h1>BTC to GBP</h1>
                    <div className="last-price-container">
                        {lastPriceHeading}
                        <TrendArrow from={lastTwoPrices[0]} to={lastTwoPrices[1]}/>
                    </div>
                </header>
                <div className="chart-container">
                    <div className='loading-overlay-container'>
                        {loading ? <LoadingOverlay/> : ''}
                    </div>
                    <Chart data={lineChartData} options={lineChartOptions}/>
                </div>
                {error && !loading ? <div className="error-message">Error fetching new BTC/GBP price. {error.message}</div> : ''}
            </section>
        );
    }
}

const mapStateToProps = state => {
    return ({
        timePrices: state.timePrices,
        loading: state.loading,
        error: state.error
    });
}

export default connect(mapStateToProps)(PricesChartPage)