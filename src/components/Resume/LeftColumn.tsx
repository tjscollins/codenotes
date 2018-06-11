/// <reference path="./resume.d.ts" />
import * as React from 'react';

import AboutSection from './About';
import SkillsSection from './Skills';

class LeftResumeColumn extends React.Component<ResumeData> {

    public render() {
        return (
            <aside className="left-column">
                <AboutSection {...this.props} />
                <SkillsSection {...this.props} />
                {/* <LanguagesSection {...this.props} /> */}
                {/* <Interests {...this.props} /> */}
            </aside>
        );
    }
}

export default LeftResumeColumn;