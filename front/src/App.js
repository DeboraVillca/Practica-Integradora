import './App.css';
import Tutoriales from './components/Tutoriales';
//se puede mostrar, es el body del html 
const App=()=>{
  return(
    <div className="main">
    <h1 className="titulo"><i>Tutoriales de la UNPAZ</i></h1>
    <Tutoriales></Tutoriales>
    </div>
  )
}
export default App;