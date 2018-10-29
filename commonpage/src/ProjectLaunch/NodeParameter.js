import React from 'react';

class NodeParameter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: this.props.parameter.value} ;
        
        this.handleValueChange = this.handleValueChange.bind(this);
    }

    handleValueChange (e) {
        let inputValue = e.target.value;
        console.log(inputValue);
        this.setState({value: inputValue})
    }

    render () {
        const { parameter } = this.props;
        return (<div>
            <p>{parameter.keyName}</p>
            <p><input type="text" value={this.state.value} onChange={this.handleValueChange}/></p>
        </div>);
    }
}

export default NodeParameter;
