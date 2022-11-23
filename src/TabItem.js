import './TabItem.css'

const TabItem = props => {
  const {tabdetails, updatetabId, isActive} = props
  const {displayText, tabId} = tabdetails

  const onbutton = () => {
    updatetabId(tabId)
  }

  const activeTab = isActive ? 'style' : ''

  return (
    <div>
      <button
        className={`tab-item ${activeTab}`}
        onClick={onbutton}
        type="button"
      >
        {displayText}
      </button>
    </div>
  )
}

export default TabItem
