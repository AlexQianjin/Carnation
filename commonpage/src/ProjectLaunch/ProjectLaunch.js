import React from 'react';
import NodeDetails from './NodeDetails';

class ProjectLaunch extends React.Component {
    constructor (props) {
        super(props);
        this.state = { projectName: '', data: '' };

        this.renderForm = this.renderForm.bind(this);
    }

    componentDidMount() {
        this.fetchProjectData();
    }

    fetchProjectData() {
        fetch('http://localhost:5000/api/v1/project')
            .then(response => {
                if (response.status >= 400) {
                    throw new Error('Bad response from server');
                }
                return response.json();
            })
            .then(project => {
                console.log(project);
                this.setState({ projectName: project.projectName, data: project });
            });
    }

    renderForm () {
        const { data } = this.state;
        if (data.nodes && data.nodes.length > 0) {
            return data.nodes.map(node => {
                return (
                    <NodeDetails key={node.nodeName} node = {node}/>
                );
            })
        }

        return '';
    }

    render () {
        if(this.state.projectName === '') {
            return (<div>Loading...</div>);
        }

        return (<div style={{backgroundColor: '#0f76c7', color: '#fff'}}>
            <p>{this.state.projectName}</p>
            <div>{this.renderForm()}</div>
        </div>);
    }
}

export default ProjectLaunch;