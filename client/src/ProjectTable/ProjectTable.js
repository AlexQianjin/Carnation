import React from 'react';
import { Link } from 'react-router-dom';

class ProjectTable extends React.Component {
    componentDidMount () {

    }

    render () {
        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td>No</td>
                            <td>Name</td>
                            <td>Operation</td>
                        </tr>
                        <tr>
                            <td>6666</td>
                            <td>Prject1</td>
                            <td><Link to="/projects/launch/6666">Launch</Link></td>
                        </tr>
                    </tbody>
                    
                </table>
                
            </div>
        );
    }
}

export default ProjectTable;
