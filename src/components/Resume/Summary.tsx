/// <reference path="./resume.d.ts" />

import * as React from 'react';

interface Props {
    summary: string
}

const Summary = ({ summary }: Props) => (
    <div className="container summary-container">
        {/* <h2>Summary</h2> */}
        <p className="summary">
            { summary }
        </p>
    </div>
);

export default Summary;