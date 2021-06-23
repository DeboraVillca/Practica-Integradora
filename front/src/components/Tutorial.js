const Tutorial =({indice,tutorial,desactivarTutorial,borrarTutorial})=>{

    return(
        <div className="tutorial">
           {tutorial.tipoTutorial}- {tutorial.nombretutorial}
            <div>
                
                <button onClick={()=>desactivarTutorial(indice)}>{!tutorial.activo ? "Activar":"Desactivar"}</button>
                <button onClick={()=>borrarTutorial(indice)}>Borrar</button> 
                {!tutorial.activo ? "":<a href={tutorial.url}>  Link Tutorial</a> }
            </div>
            
        </div>
    )
}
export default Tutorial