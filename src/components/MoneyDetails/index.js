// Write your code here
import {Component} from 'react'
import './index.css'

class MoneyDetails extends Component {
  render() {
    const {totbal, inc, exp} = this.props
    return (
      <>
        <div className="totalbal-cont">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            alt="balance"
            className="balance-img"
          />
          <div>
            <p>Your Balance</p>
            <p className="amount" data-testid="balanceAmount">
              Rs <span>{totbal}</span>
            </p>
          </div>
        </div>

        <div className="income-cont">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
            alt="income"
            className="balance-img"
          />
          <div>
            <p>Your Income</p>
            <p className="amount" data-testid="incomeAmount">
              Rs <span>{inc}</span>
            </p>
          </div>
        </div>
        <div className="expenses-cont">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
            alt="expenses"
            className="balance-img"
          />
          <div>
            <p>Your Expenses</p>
            <p className="amount" data-testid="expensesAmount">
              Rs <span>{exp}</span>
            </p>
          </div>
        </div>
      </>
    )
  }
}

export default MoneyDetails
