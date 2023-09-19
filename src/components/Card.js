import React from "react"
import PropTypes from "prop-types"

const Card = ({ value, image, isSelected = false }) => {
  const imgStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "10px",
    pointerEvents: "none",
  };
  if (isSelected) {
    return <object type="image/svg+xml" data={image} alt={value} style={imgStyle} />
  }

  const deckCard = (
    <div className="card" key={value}>
      <img className="card-img-top" src={image} alt={value} />
    </div>
  )
  return deckCard
}

Card.propTypes = {
  value: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  isSelected: PropTypes.bool
}

export default Card
