import React from 'react';
import {fetchBtcGbp} from "../../actions/btcgbp";
import {connect} from "react-redux";
import Chart from '../../components/Chart';

export class PricesChartPage extends React.Component {

    componentDidMount () {
        const fetchPricesInterval = 3000;
        this.props.dispatch(fetchBtcGbp());

        setInterval(() => {
            this.props.dispatch(fetchBtcGbp());
        }, fetchPricesInterval);
    }

    render () {
        const { timePrices, loading, error } = this.props;

        const lineChartData = {
            labels: [...timePrices.map(tp => tp.time)],
            datasets: [
                {
                    type: "line",
                    label: "BTC-GBP",
                    backgroundColor: "transparent",
                    borderColor: "#336699",
                    pointBackgroundColor: "#CC0000",
                    pointBorderColor: "#336699",
                    borderWidth: "3",
                    lineTension: 0.5,
                    data: [...timePrices.map(tp => tp.price)]
                }
            ]
        };

        const lineChartOptions = {
            responsive: true,
                maintainAspectRatio: false,
                tooltips: {
                enabled: true
            },
            scales: {
                xAxes: [
                    {
                        ticks: {
                            autoSkip: true,
                            maxTicksLimit: 10
                        }
                    }
                ]
            }
        };

        return (
            <section>
                <div className="chart-container">
                    <Chart data={lineChartData} options={lineChartOptions}/>
                </div>
                {loading ? <div>Loading new price...</div> : ''}
                {error && !loading ? <div>Error fetching new BTC/GBP price. {error.message}</div> : ''}
            </section>
        );
    }
}

const mapStateToProps = state => {
    console.log('state', state);
    return ({
        timePrices: state.timePrices,
        loading: state.loading,
        error: state.error
    });
}

export default connect(mapStateToProps)(PricesChartPage)