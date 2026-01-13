import { useState } from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

const QuickCash = ({ denominationsList }) => {
  const [balance, setBalance] = useState(5000)

  const onWithdraw = value => {
    setBalance(prevBalance => prevBalance - value)
  }

  return (
    <div className="cash-card">
     
      <div className="profile">
        <div className="avatar">S</div>
        <p className="name">Steve Jobs</p>
      </div>

     
      <div className="balance-container">
        <p className="balance-label">Your Balance</p>
        <p className="balance-amount">₹{balance}</p>
      </div>

     
      <h1 className="withdraw-title">Withdraw</h1>
      <p className="choose-text">CHOOSE SUM (IN RUPEES)</p>

      <ul className="denominations-list">
        {denominationsList.map(eachItem => (
          <DenominationItem
            key={eachItem.id}
            details={eachItem}
            onWithdraw={onWithdraw}
          />
        ))}
      </ul>
    </div>
  )
}

export default QuickCash
