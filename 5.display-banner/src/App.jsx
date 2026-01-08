import './App.css'
import BannerItem from './components/BannerItem'

const bannerItemsList = [
  {
    id: 1,
    headerText: 'Top Products',
    description: 'Get the Top Products in a flick of your hand',
    className: 'card-1',
    imageUrl:
      'https://png.pngtree.com/thumb_back/fw800/background/20190223/ourmid/pngtree-light-pastel-geometric-banner-background-bluegeometrygraywhiteliterarysimple-image_83281.jpg',
  },
  {
    id: 2,
    headerText: 'Our New Patterns',
    description:
      'Get the specially curated designs and patterns made by our in-house creators',
    className: 'card-2',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTe4uCfV39rzksakQbRZO-ghvBncTdCd3d4jQnPthUYup4pv7mB3PzgK_Z6LNfdxp3UBw&usqp=CAU',
  },
  {
    id: 3,
    headerText: 'Customized Designs',
    description: 'Get customized designs for yourself with an extra off',
    className: 'card-3',
    imageUrl:
      'https://t3.ftcdn.net/jpg/00/77/26/32/360_F_77263286_0BkXVWphNtPTazI4xPHpFUfhxDkHlRJc.jpg',
  }
]

function App() {
  return (
    <div className="app-bg">
      <ul className="banner-list">
        {bannerItemsList.map(bannerItem => (
          <BannerItem key={bannerItem.id} bannerDetails={bannerItem} />
        ))}
      </ul>
    </div>
  )
}

export default App
