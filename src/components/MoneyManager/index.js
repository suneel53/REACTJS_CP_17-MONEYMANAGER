import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails/index'
import TransactionItem from '../TransactionItem/index'
import './index.css'

/*
const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]
*/
// Write your code here
const initialHistorylist = []

class MoneyManager extends Component {
  state = {
    inputTitle: '',
    inputAmount: '',
    inputType: 'INCOME',
    historyList: initialHistorylist,
    totbal: 0,
    inc: 0,
    exp: 0,
  }

  changeTitle = event => {
    this.setState({inputTitle: event.target.value})
  }

  changeAmount = event => {
    this.setState({inputAmount: event.target.value})
  }

  changeType = event => {
    this.setState({inputType: event.target.value})
  }

  addIncome = inputAmount => {
    this.setState(prevState => ({
      totbal: prevState.totbal + parseInt(inputAmount),
      inc: prevState.inc + parseInt(inputAmount),
    }))
  }

  addExpense = inputAmount => {
    this.setState(prevState => ({
      totbal: prevState.totbal - parseInt(inputAmount),
      exp: prevState.exp + parseInt(inputAmount),
    }))
  }

  updateAccount = newHistory => {
    const {inputAmount, inputType} = newHistory

    if (inputType === 'INCOME') {
      this.addIncome(inputAmount)
    } else {
      this.addExpense(inputAmount)
    }
  }

  addHistory = event => {
    event.preventDefault()
    const {inputTitle, inputAmount, inputType} = this.state
    const newHistory = {
      id: uuidv4(),
      inputTitle,
      inputAmount,
      inputType,
    }

    this.updateAccount(newHistory)
    this.setState(prevState => ({
      historyList: [...prevState.historyList, newHistory],
      inputTitle: '',
      inputAmount: '',
      inputType: 'INCOME',
    }))
  }

  ondeleteTransaction = id => {
    const {historyList} = this.state
    const deleteditem = historyList.filter(eachlist => eachlist.id === id)
    const {inputType, inputAmount} = deleteditem[0]
    if (inputType === 'INCOME') {
      this.setState(prevState => ({
        totbal: prevState.totbal - parseInt(inputAmount),
        inc: prevState.inc - parseInt(inputAmount),
      }))
    } else {
      this.setState(prevState => ({
        totbal: prevState.totbal + parseInt(inputAmount),
        exp: prevState.exp - parseInt(inputAmount),
      }))
    }

    this.setState(prevState => ({
      historyList: prevState.historyList.filter(eachi => eachi.id !== id),
    }))
  }

  render() {
    const {
      inputTitle,
      inputAmount,
      inputType,
      historyList,
      inc,
      totbal,
      exp,
    } = this.state
    return (
      <div className="bg-cont">
        <div className="moneymanager-cont">
          <div className="moneymanager-profile-cont">
            <h1 className="hed1">Hi, Richard</h1>
            <p>
              Welcome back to your <span className="span1">Money Manger</span>
            </p>
          </div>
          <div className="moneyDetails-cont">
            <MoneyDetails inc={inc} totbal={totbal} exp={exp} />
          </div>
          <div className="inputAndTransactions-cont">
            <form className="form" onSubmit={this.addHistory}>
              <h1 className="form-hed">Add Transaction</h1>
              <label htmlFor="title" className="label">
                TITLE
              </label>
              <input
                type="text"
                id="title"
                className="input"
                placeholder="TITLE"
                value={inputTitle}
                onChange={this.changeTitle}
              />
              <label htmlFor="amount" className="label">
                AMOUNT
              </label>
              <input
                type="number"
                id="amount"
                className="input"
                placeholder="AMOUNT"
                value={inputAmount}
                onChange={this.changeAmount}
              />
              <label htmlFor="type" className="label">
                TYPE
              </label>
              <select
                id="type"
                className="input"
                name="type"
                value={inputType}
                onChange={this.changeType}
              >
                <option value="INCOME">Income</option>
                <option value="Expenses">Expenses</option>
              </select>
              <button type="submit" className="form-but">
                Add
              </button>
            </form>
            <div className="history-cont">
              <h1 className="history-hed">History</h1>
              <ul className="historylist-cont">
                <li className="list-cont">
                  <p className="list-title">Title</p>
                  <p className="list-amount">Amount</p>
                  <p className="list-type">Type</p>
                </li>
                {historyList.map(eachItem => (
                  <TransactionItem
                    details={eachItem}
                    ondeleteTransaction={this.ondeleteTransaction}
                    key={eachItem.id}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
