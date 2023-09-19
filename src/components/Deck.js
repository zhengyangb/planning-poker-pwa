import React, { Component } from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

import Card from "./Card"
import coverImage from "../cards/cover.svg"

import "./Deck.css"

class Deck extends Component {
  constructor(props) {
    super(props)
    this.state = { valueSelected: "", isPreSelected: false }
  }

  handleFlipCard = ({ value }) =>
    this.setState({ isPreSelected: !this.state.isPreSelected, valueSelected: value })

  render() {
    if (this.state.isPreSelected) {
      return (
        <Link to={`/${this.state.valueSelected}`} style={{position: "absolute", height: "100%", width: "100%"}}>
          <Card value="COVER" image={coverImage} isSelected />
        </Link>
      )
    }

    return (
      <div className="card-deck">
        <div className="row">
          {this.props.cards.map(card => (
            <div
              onClick={() => this.handleFlipCard(card)}
              className="row-item"
              key={card.value}
            >
              <Card {...card} />
            </div>
          ))}
        </div>
      </div>
    )
  }
}

Deck.propTypes = {
  cards: PropTypes.array.isRequired
}

export default Deck
