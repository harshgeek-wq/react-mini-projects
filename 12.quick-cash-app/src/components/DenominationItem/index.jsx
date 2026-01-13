import './index.css'

const DenominationItem = ({ details, onWithdraw }) => {
  const { value } = details

  return (
    <li>
      <button
        className="denomination-button"
        onClick={() => onWithdraw(value)}
      >
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
