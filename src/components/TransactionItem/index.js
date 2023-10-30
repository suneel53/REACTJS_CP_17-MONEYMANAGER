// Write your code here
import {Component} from 'react'
import './index.css'

class TransactionItem extends Component {
  render() {
    const {details, ondeleteTransaction} = this.props
    const {id, inputTitle, inputAmount, inputType} = details
    const ondelete = () => {
      ondeleteTransaction(id)
    }
    return (
      <li className="list-cont list-item">
        <p>{inputTitle}</p>
        <p>Rs {inputAmount}</p>
        <p>{inputType === 'INCOME' ? 'Income' : 'Expense'}</p>
        <button
          type="button"
          className="list-but"
          onClick={ondelete}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
            className="delete-img"
          />
        </button>
      </li>
    )
  }
}

export default TransactionItem
