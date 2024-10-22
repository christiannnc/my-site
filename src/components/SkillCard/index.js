import '../../css/technicalSkills.css';

const SkillCard = ({ skill, imgClass }) => {
  return (
    <div className="skill-card">
      <i class={imgClass}></i>

      <label className="skill-label">{skill}</label>
    </div>
  );
};

export default SkillCard;
