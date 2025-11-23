import FirstpageH from "../components/FirstpageH";
import RegisterContent from "../components/RegisterContent";
import style from "../css/registroBG.module.css"
import FirstpageFooter from '../components/FirstpageFooter'

function Register() {
  return (
    <>

      <div className={style.bgRegister}></div>
      <header>
          <FirstpageH />
      </header>

      <div className={style.bodyRegister}>
        
        <div className={style.registerContent}>
            <RegisterContent />
        </div>
        


      </div>

      <footer>
        <FirstpageFooter />
      </footer>
    </>
  )
}

export default Register;