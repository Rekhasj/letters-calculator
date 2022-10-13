import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: 0, searchInput: ''}

  onChangeInputValue = event => {
    const {count, searchInput} = this.state

    const string = event.target.value

    if (string !== ' ') {
      this.setState(prevState => ({count: prevState.count + 1}))
    }
    this.setState(prevState => ({count: prevState.count}))
  }

  render() {
    const {count, searchInput} = this.state

    return (
      <div className="home-container">
        <div className="calculator-container">
          <div className="input-container">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <label className="details" htmlFor="searchInput">
              Enter the Phrase
            </label>
            <input
              type="text"
              id="searchInput"
              placeholder="Enter the Pharse"
              onChange={this.onChangeInputValue}
              value={searchInput}
              className="search"
            />
            <p className="count">No.of letters: {count}</p>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            className="calculator-image"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}
export default LettersCalculator
