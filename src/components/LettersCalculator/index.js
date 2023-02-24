// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {count: 0, textInput: ''}

  onChangeTextType = event => {
    this.setState(prevState => ({
      count: prevState.count + 1,
      textInput: event.target.value,
    }))
  }

  onClickClearCount = () => {
    this.setState({count: 0, textInput: ''})
  }

  render() {
    const {count, textInput} = this.state
    console.log(count)

    return (
      <div className="bg-container">
        <div>
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label className="label-text">
            Enter the Phrase <br />
            <input
              onChange={this.onChangeTextType}
              type="text"
              id="userInput"
              value={textInput}
              placeholder="Enter the Phrase"
            />
          </label>
          <button
            onClick={this.onClickClearCount}
            className="button"
            type="button"
          >
            <p className="text">No.of Letters: {count}</p>
          </button>
        </div>
        <div>
          <img
            className="image"
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
