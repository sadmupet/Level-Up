import FirstpageH from '../components/FirstpageH.jsx'
import FirstpageContent from '../components/FirstpageContent.jsx'
import FirstpageFooter from '../components/FirstpageFooter.jsx'

function FirstPage() {
  return (
    <>
      <header>
        <FirstpageH />
      </header>
      <div>
        <FirstpageContent />
      </div>
      <footer>
        <FirstpageFooter />
      </footer>
    </>
  )
}


export default FirstPage;