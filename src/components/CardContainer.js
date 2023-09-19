import React, { Component } from "react"
import { Link } from "react-router-dom"

import Card from "./Card"

import { PlanningPoker } from "../cards"

class CardContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { value: "", image: "", isSelected: true }
  }

  componentDidMount() {
    const {
      match: {
        params: { cardValue }
      }
    } = this.props
    const selectedCard =
      PlanningPoker.find(card => card.value === cardValue) || {}
    this.setState({ ...selectedCard })
  }

  render() {
    return (
      <Link to="/" style={{position: "absolute", height: "100%", width: "100%"}}>
        <Card {...this.state} />
      </Link>
    )
  }
}

export default CardContainer
