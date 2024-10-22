import React, { useState } from 'react';
import SkillCard from '../../components/SkillCard';
import '../../css/technicalSkills.css';

const SKILL_CARD_MAPPING = [
  {
    skill: 'Java',
    img: 'devicon-java-plain skill-icon',
    category: 'languages',
  },
  {
    skill: 'Python',
    img: 'devicon-python-plain skill-icon',
    category: 'languages',
  },
  {
    skill: 'TypeScript',
    img: 'devicon-typescript-plain skill-icon',
    category: 'languages',
  },
  { skill: 'C', img: 'devicon-c-plain skill-icon', category: 'languages' },
  {
    skill: 'GraphQL',
    img: 'devicon-graphql-plain skill-icon',
    category: 'frameworks',
  },
  {
    skill: 'React',
    img: 'devicon-react-plain skill-icon',
    category: 'frameworks',
  },
  {
    skill: 'Node.js',
    img: 'devicon-nodejs-plain skill-icon',
    category: 'frameworks',
  },
  {
    skill: 'MongoDB',
    img: 'devicon-mongodb-plain skill-icon',
    category: 'databases',
  },
  {
    skill: 'PostgreSQL',
    img: 'devicon-postgresql-plain skill-icon',
    category: 'databases',
  },
  {
    skill: 'Redis',
    img: 'devicon-redis-plain skill-icon',
    category: 'databases',
  },
];

const SkillsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  return (
    <div className="technical-skills-section">
      <h3>Skills</h3>

      <div className="skills-selector-container">
        <div className="skills-category-selector">
          <div className="category-label-container">
            <label
              className={
                selectedCategory === 'all'
                  ? 'category-label selected'
                  : 'category-label'
              }
              onClick={(e) => setSelectedCategory('all')}
            >
              All
            </label>
          </div>

          <div className="category-label-container">
            <label
              className={
                selectedCategory === 'languages'
                  ? 'category-label selected'
                  : 'category-label'
              }
              onClick={(e) => setSelectedCategory('languages')}
            >
              Languages
            </label>
          </div>

          <div className="category-label-container">
            <label
              className={
                selectedCategory === 'frameworks'
                  ? 'category-label selected'
                  : 'category-label'
              }
              onClick={(e) => setSelectedCategory('frameworks')}
            >
              Frameworks
            </label>
          </div>

          <div className="category-label-container">
            <label
              className={
                selectedCategory === 'databases'
                  ? 'category-label selected'
                  : 'category-label'
              }
              onClick={(e) => setSelectedCategory('databases')}
            >
              Databases
            </label>
          </div>
        </div>
      </div>

      <div className="skills-container">
        {SKILL_CARD_MAPPING.map(
          ({ category, skill, img }) =>
            (category === selectedCategory || selectedCategory === 'all') && (
              <SkillCard skill={skill} imgClass={img} />
            )
        )}
      </div>
    </div>
  );
};

export default SkillsSection;
