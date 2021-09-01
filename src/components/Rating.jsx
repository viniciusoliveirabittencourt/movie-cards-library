import React from 'react';

class Rating extends React.Component {
    render() {
        return (
            <footer>
                <h4>{ this.props.rating }</h4>
            </footer>
        )
    }
}

export default Rating;
