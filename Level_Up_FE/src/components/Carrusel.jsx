import style from '../css/carrusel.module.css'
import { carousel } from 'react-responsive-carousel';
import cat1 from '../images/image_cat_1.jpg'
import cat2 from '../images/image_cat_2.jpg'
import cat3 from '../images/image_cat_3.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

export function Carrusel() {
  return (

    <carousel
      autoPlay={true}      
      infiniteLoop={true}  
      showThumbs={false}   
      showStatus={false}    
      interval={3000}       
    >
      <div className={style.carruselImagen}>
        <div> 
            <img src={cat1} alt="gato" />
        </div>
        <div> 
            <img src={cat2} alt="skot" />
        </div>
        <div> 
            <img src={cat3} alt="gato" />
        </div>
      </div>

    </carousel>
  );
}