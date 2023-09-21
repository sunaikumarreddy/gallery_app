import './index.css'

// Write your code here.
const ThumbnailItem = props => {
  const {
    eachImage,
    updateActiveId,
    isActive,
    thumbnailUrl,
    thumbnailAltText,
  } = props
  const {id, imageAltText} = eachImage
  const onClickImageItem = () => {
    updateActiveId(id)
  }
  const activeImageClassName = isActive ? 'active' : 'thumbnail'

  return (
    <li className="thumbnail-list-item">
      <button
        type="button"
        onClick={onClickImageItem}
        className="thumbnail-container"
      >
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={`thumbnail ${activeImageClassName}`}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
