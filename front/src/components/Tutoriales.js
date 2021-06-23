import Tutorial from './Tutorial'
import React,{useState, useEffect} from 'react'
import AltaTutorial from './AltaTutorial'
//Tutoriales es la generacion de tareas 
const Tutoriales = () =>{
    //se renderisa automaticamente 
    const[tutoriales,setTutoriales]=useState([])
    const[hayCambio, setHayCambio]=useState(false)


    useEffect( ()=>{
        fetch('http://localhost:5000/tutoriales')
        .then(res=>res.json())
        .then(datos => setTutoriales(datos))
    },[hayCambio])

    const agregarTutorial =(nombre,url,tipo)=>{
        const opciones={
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body:  JSON.stringify({nombretutorial:nombre,
                                     tipoTutorial:tipo,
                                        url:url})
        }
        fetch('http://localhost:5000/tutoriales',opciones)
        .then(res=>res.json())
        .then(datos=>setHayCambio(!hayCambio))
      
    }
   
        const activarTutorial=(index)=>{
            const opciones={
                method:'PUT'
            }
            fetch(`http://localhost:5000/tutoriales/${index}/activar`,opciones)
            .then(res=>res.json())
            .then(datos=>setHayCambio(!hayCambio))
           
        }
         const borrarTutorial=(index)=>{
            fetch(`http://localhost:5000/tutoriales/${index}`,{method:'DELETE'})
            .then(res=>res.json())
            .then(datos=>setHayCambio(!hayCambio))
        
        }
    return(
        <div>
            <div className="tutoriales">
                {tutoriales.map(
                    (el, idx)=>{return (<Tutorial key={idx} indice={el.id} tutorial={el} desactivarTutorial={activarTutorial} borrarTutorial={borrarTutorial}/> )}
                )}
            </div>
            <br/>
            <AltaTutorial agregarTutorial={agregarTutorial }/>
        </div>
    )
}
export default Tutoriales