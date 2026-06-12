import React from 'react';

const CardSkill = ({ logo: Logo, title, difficulty, color, borderColor, backgroundColor }) => {
  return (
    <div className="card-skill group">
      <div className="card-skill-icon">
        <Logo className={`text-3xl transition-colors duration-300 text-white/70 ${color}`} />
      </div>
      <div className="card-skill-info">
        <span className={`card-skill-title ${color}`}>{title}</span>
        <span className="card-skill-level">{difficulty}</span>
      </div>
      {/* Bottom border accent on hover */}
      <div className="card-skill-bar" />
    </div>
  );
};

export default CardSkill;
