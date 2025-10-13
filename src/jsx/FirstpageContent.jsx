import '../css/firstpage.css'
import cat1 from '../images/image_cat_1.jpg'
import cat2 from '../images/image_cat_2.jpg'
import cat3 from '../images/image_cat_3.jpg'
import cat4 from '../images/image_cat_4.jpg'

export default function FirstpageContent() {
  return (

    <section>
        <a href="register.html"><img src={cat1} alt="Perifericos"></img></a>
        <a href="register.html"><img src={cat2} alt="Videojuegos"></img></a>
        <a href="register.html"><img src={cat3} alt="Guias Gamer"></img></a>
        <a href="register.html"><img src={cat4} alt="Consolas"></img></a>
    </section>
    
  )
}
