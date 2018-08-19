import React, {Component} from 'react';

class LoadingIndicator extends Component {
    render() {
        return (
            <div>
                <i className='fa fa-spinner fa-pulse fa-3x fa-fw' />
                <span className='sr-only'>Loading...</span>
            </div>
        )
    }
}

export default LoadingIndicator;