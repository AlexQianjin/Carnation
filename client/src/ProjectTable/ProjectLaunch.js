import React from 'react';

class ProjectLaunch extends React.Component {
    componentDidMount () {
        // Render the component
        window.CommonPageComponent.render({
            prefilledEmail: 'foo@bar.com',
            onLogin: function(email) {
                console.log('User logged in with email:', email);
                document.querySelector('#result').innerText = email + ' logged in!';
            }
        }, '#container');
        const { match } = this.props;
        console.log(match.params.id);
    }

    render () {
        return (<div>
            <h3>Project Launch</h3>
            <div id="container"></div>
        </div>);
    }
}

export default ProjectLaunch;
