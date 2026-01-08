import './index.css'

const BannerItem = ({ bannerDetails }) => {
  const { headerText, description, className, imageUrl } = bannerDetails

  return (
    <li className={`banner-card ${className}`} style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="banner-content">
        <h1 className="banner-heading">{headerText}</h1>
        <p className="banner-description">{description}</p>
        <button className="banner-button">Explore</button>
      </div>
    </li>
  )
}

export default BannerItem
