/// <reference path="./resume.d.ts" />
import * as React from 'react';

import Summary from './Summary';

class RightResumeColumn extends React.Component<ResumeData> {

    public render() {
        const { data } = this.props;
        return (
            <div className="right-column">
                <Summary summary={data.basics.summary}/>
                {/* {{> summary}}
                {{> work }}
                {{> projects }}
                {{> volunteer }}
                {{> education }}
                {{> awards }}
                {{> publications }}
                {{> references }} */}
            </div>
        );
    }
}

export default RightResumeColumn;