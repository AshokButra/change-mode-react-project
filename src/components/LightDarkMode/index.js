import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {
    text: 'Light Mode',
    card: 'card1',
    heading: 'heading1',
    button: 'button1',
  }

  changeMode = () => {
    const {text} = this.state
    if (text === 'Light Mode') {
      this.setState({
        text: 'Dark Mode',
        card: 'card2',
        heading: 'heading2',
        button: 'button2',
      })
    } else {
      this.setState({
        text: 'Light Mode',
        card: 'card1',
        heading: 'heading1',
        button: 'button1',
      })
    }
  }

  render() {
    const {text, card, heading, button} = this.state
    return (
      <div className="container">
        <div className={card}>
          <h1 className={heading}>Click To Change Mode</h1>
          <button className={button} onClick={this.changeMode}>
            {text}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
