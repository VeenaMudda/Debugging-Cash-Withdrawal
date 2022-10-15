import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  withdraw50 = () => {
    console.log('50 withdrew')
    this.setState(prevState => {
      console.log(`Previous state value ${prevState.amount}`)
      return {amount: prevState.amount - 50}
    })
  }

  withdraw100 = () => {
    console.log('100 withdrew')
    this.setState(prevState => {
      console.log(`Previous state value ${prevState.amount}`)
      return {amount: prevState.amount - 100}
    })
  }

  withdraw200 = () => {
    console.log('200 withdrew')
    this.setState(prevState => {
      console.log(`Previous state value ${prevState.amount}`)
      return {amount: prevState.amount - 200}
    })
  }

  withdraw500 = () => {
    console.log('500 withdrew')
    this.setState(prevState => {
      console.log(`Previous state value ${prevState.amount}`)
      return {amount: prevState.amount - 500}
    })
  }

  render() {
    const {amount} = this.state

    return (
      <div className="bg">
        <div className="container">
          <div className="who">
            <h1 className="letter">S</h1>
            <h1 className="name">Sarah Williams</h1>
          </div>
          <div className="balance">
            <p className="your-balance">Your Balance</p>
            <div className="amount">
              <p className="money">{amount}</p>
              <p className="your-balance">in Rupees</p>
            </div>
          </div>
          <div className="withdrawal">
            <p className="withdraw">Withdraw</p>
            <p className="your-balance">CHOOSE SUM (IN RUPEES)</p>
            <ul>
              <div className="button-container">
                <li>
                  <DenominationItem withdraw={this.withdraw50} amount="50" />
                </li>
                <li>
                  <DenominationItem withdraw={this.withdraw100} amount="100" />
                </li>
              </div>
              <div className="button-container">
                <li>
                  <DenominationItem withdraw={this.withdraw200} amount="200" />
                </li>
                <li>
                  <DenominationItem withdraw={this.withdraw500} amount="500" />
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
