// Write your code here
import './index.css'

const EventItem = props => {
  const {eachItem, clickButton, isActive} = props
  const {imageUrl, name, location, id} = eachItem

  const imageBorder = isActive ? 'imageBorder' : 'normalImage'

  const imageButton = () => {
    clickButton(id)
  }
  return (
    <li className="listed-item">
      <button type="button" className="button-image" onClick={imageButton}>
        <img src={imageUrl} alt="event" className={imageBorder} />
      </button>
      <p className="name">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}

export default EventItem
