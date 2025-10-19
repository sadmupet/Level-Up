import LoginContent from '../components/LoginContent'
import FirstpageH from '../components/FirstpageH'
import style from '../css/LoginContainer.module.css'
import FirstpageFooter from '../components/FirstpageFooter'

function Login() {
  return (
    <>
      <div className={style.bgLogin}></div>
      <header>
        <FirstpageH />
      </header>
      <div>
        <LoginContent />
      </div>
      <footer>
        <FirstpageFooter />
      </footer>
    </>

  )
}

export default Login;