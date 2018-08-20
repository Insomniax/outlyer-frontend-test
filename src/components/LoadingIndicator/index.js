import React, {Component} from 'react';

class LoadingIndicator extends Component {
    render() {
        const {srLoadingText} = this.props;

        return (
            <div>
                <i className='fa fa-spinner fa-pulse fa-3x fa-fw' />
                <span className='sr-only'>{srLoadingText}</span>
            </div>
        )
    }
}

export default LoadingIndicator;