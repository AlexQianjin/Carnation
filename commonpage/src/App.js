import React from 'react';

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

        this.fetchProjectData();
    }

    fetchProjectData() {
        fetch('http://localhost:5000/api/v1/project')
            .then(function (response) {
                if (response.status >= 400) {
                    throw new Error('Bad response from server');
                }
                return response.json();
            })
            .then(project => {
                console.log(project);
                this.setState({ projectName: project.projectName, data: JSON.stringify(project) });
            });
    }

    render() {
        if(this.state.projectName === '') {
            return (<div>Loading...</div>);
        }

        return (<div style={{backgroundColor: '#0f76c7', color: '#fff'}}>
            <p>{this.state.projectName}</p>
            <p>{this.state.data}</p>
        </div>);
    }
}

export default App;


