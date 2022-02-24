import GlobalStyle from './styles/global'
import Routes from './Routes'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <GlobalStyle/>
      <Routes/>
    </div>
  );
}

export default App;
