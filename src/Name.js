import React from 'react';

const EnhancedComponent = (OriginalComponent) => {
    class NewComponent extends React.Component {
        // Logic Here

        render() {
            return <OriginalComponent name="Jatin Component" />
        }
    }
    return NewComponent
}

export default EnhancedComponent;