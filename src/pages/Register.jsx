import FirstpageH from "../components/FirstpageH";
import RegisterContent from "../components/RegisterContent";
import style from "../css/registroBG.module.css"

function Register() {
  return (
    <>
      <div className={style.bgRegister}></div>
      <header>
          <FirstpageH />
      </header>
      <div>
          <RegisterContent />
      </div>
    
    </>
  )
}

export default Register;