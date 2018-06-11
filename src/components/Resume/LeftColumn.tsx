import * as React from 'react';

import AboutSection from './About';

class LeftResumeColumn extends React.Component {

    public render() {
        return (
            <aside className="left-column">
                <AboutSection {...this.props} />
                {/* {{> about }}
                {{> skills }}
                {{> languages }}
                {{> interests }} */}
            </aside>
        );
    }
}

export default LeftResumeColumn;