import React,{useState} from 'react'


const AltaTutorial =({agregarTutorial})=>{

    const[nombreInput,setnombreInput]= useState('')
    const[urlInput,setUrlInput]=useState('')
    const[tipoInput,setTipoInput]=useState('')
    const cambioNombre= (e)=>{
        setnombreInput(e.currentTarget.value)
    }
    const cambioUrl=(e)=>{
        setUrlInput(e.currentTarget.value)
    }
    const cambioTipo=(e)=>{
        setTipoInput(e.currentTarget.value)
    }
    const alEnviar=(e)=>{
            agregarTutorial(nombreInput, urlInput, tipoInput);
            setnombreInput("");
            setTipoInput("");
            setUrlInput("");
    }
return(
    <div>
        <form onSubmit={alEnviar}>
        <input value={nombreInput} type="text" onChange={cambioNombre} placeholder="Ingrese nombre tutorial"/>
        <input value={urlInput} type="text" onChange={cambioUrl}placeholder="Ingrese url"/>
            <select value={tipoInput} onChange={cambioTipo}>
            <option value="Clase Grabada">Clase Grabada</option>
            <option value="Programacion">Programacion</option>
            <option value="Matematica">Matematica</option>
            </select>
            <br/> <br/>
            <button > Agregar Tutorial</button>
        </form>
    </div>
)
}
export default AltaTutorial