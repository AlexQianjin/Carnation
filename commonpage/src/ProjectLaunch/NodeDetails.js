import React from 'react';
import NodeParameter from './NodeParameter';

class NodeDetails extends React.Component {
    render () {
        const { node } = this.props;
        return (
            <div>
                <h3>{node.nodeName}</h3>
                {node.parameters.map(parameter => <NodeParameter key={parameter.keyName} parameter = {parameter} />)}
            </div>
        );
    }
}

export default NodeDetails;