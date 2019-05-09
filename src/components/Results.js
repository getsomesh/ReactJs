var React = require('react');

class Results extends React.Component {
    render() {
        console.log(this.prop);
        return (
            <div>Results!</div>
        )
    }
}

module.exports = Results;