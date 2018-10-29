import React from 'react';

import ProjectLaunch from './ProjectLaunch';

require('es6-promise').polyfill();
require('isomorphic-fetch');

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { projectName: '', data: '' };
    }

    componentDidMount() {
        // let email = '';
        // if (window.xprops.prefilledEmail) {
        //     email = window.xprops.prefilledEmail;
        // }
        // console.log(email);
        console.log(this.props.prefilledEmail);
    }

    render() {
        return (<ProjectLaunch />);
    }
}

export default App;


