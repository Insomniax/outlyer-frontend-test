import React, {Component} from 'react';
import './styles.css'

class TrendArrow extends Component {

    render() {
        const {from, to} = this.props;

        if (!from || !to) {
            return '';
        }

        const trend = (to - from) / from;
        let sign = trend > 0 ? '+' : '';
        let trendArrowClasses = 'trend-arrow';
        let faClasses = 'fa';

        if (trend > 0) {
            trendArrowClasses += ' up'
            faClasses += ' fa-arrow-up';
        } else if (trend < 0) {
            trendArrowClasses += ' down';
            faClasses += ' fa-arrow-down';
        }

        if (trend !== 0) {
            return (
                <div className={trendArrowClasses}>
                    <i className={faClasses} aria-hidden="true"></i> {sign}{(trend * 100).toFixed(2)}%
                </div>
            );
        } else {
            return '';
        }
    }

}

export default TrendArrow;