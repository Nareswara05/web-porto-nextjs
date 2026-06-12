import React from 'react'

const CardDo = ({ icon: Icon, title, desc }) => {
  return (
    <div className="card-do group">
      <div className="card-do-icon-wrap">
        <Icon className="text-xl" />
      </div>
      <div className="card-do-body">
        <h4 className="card-do-title">{title}</h4>
        <p className="card-do-desc">{desc}</p>
      </div>
      {/* Hover glow */}
      <div className="card-do-glow" />
    </div>
  )
}

export default CardDo