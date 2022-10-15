import './index.css'

const DenominationItem = props => {
  const {withdraw, amount} = props
  const onWithdraw = () => {
    withdraw()
  }
  return (
    <button type="button" className="button" onClick={onWithdraw}>
      {amount}
    </button>
  )
}

export default DenominationItem
