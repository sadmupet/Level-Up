import '../css/firstpage.css'
import cat1 from '../images/image_cat_1.jpg'
import cat2 from '../images/image_cat_2.jpg'
import cat3 from '../images/image_cat_3.jpg'
import cat4 from '../images/image_cat_4.jpg'
import { Link } from 'react-router-dom'


export default function FirstpageContent() {
  return (
    <div className="bg-firstpage">
      <section>
          <Link to="/register"><img src={cat1} alt="Perifericos"></img></Link>
          <Link to="/register"><img src={cat2} alt="Videojuegos"></img></Link>
          <Link to="/register"><img src={cat3} alt="Guias Gamer"></img></Link>
          <Link to="/register"><img src={cat4} alt="Consolas"></img></Link>
      </section>
    </div>
    
  )
}
