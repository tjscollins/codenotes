/// <reference path="./resume.d.ts" />

import * as React from 'react';

interface Props {
    data: {
        skills: Array<{
            name: string
            keywords: string[]
        }>
    }
}

const SkillsSection = ({ data: { skills }}: Props) => (
    <section className="container skills-container">
        <h2>Skills</h2>
        {skills.map(SkillComponent)}
    </section>
);

const SkillComponent = (skill: any) => (
    <section className="skill container">
        {skill.name ? <SkillName name={skill.name} /> : null}
        {skill.keywords.length ? <SkillList items={skill.keywords} /> : null}
    </section>
);

const SkillName = ({ name }: { name: string }) => (
    <div className="section-header clearfix">
        <h3 className="section-header__title pull-left">
            {name}
        </h3>
    </div>
);

const SkillList = ({ items }: { items: string[] }) => (
    <ul className="minimal skill__list">
        {items.map((keyword: string) => (<li className="skill__list__item">{keyword} </li>))}
    </ul>
);

export default SkillsSection;