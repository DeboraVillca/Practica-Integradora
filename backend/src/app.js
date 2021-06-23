const express= require('express')
const cors=require('cors');
const tutorial=require('./tutoriales.json')
const app=express()
const port=5000

app.use(express.json())
app.use(cors());

app.get('/tutoriales',(req,res)=>{
  res.status(200).json(tutorial)
})
app.get('/tutoriales/:id',(req, res)=>{
  const ide=req.params.id
  const id= tutorial.find(l=>l.id==ide)
  if(undefined != id)
    res.status(200).json(id)
    else
    res.status(404).json({mensaje:`id ${ide} no fue encontado.`})
})
app.put('/tutoriales/:id/activar',(req, res)=>{
  const ide=req.params.id
  const tuto= tutorial.find(t=>t.id==ide)
  if(undefined!=tuto){
  const idx=tutorial.indexOf(tuto)
  tuto.activo=!tuto.activo
  tutorial.splice(idx,1,tuto)
  res.status(202).json({"mensaje":`El id${ide} fue modificado`})
  }
  else 
  res.status(404).json({"mensaje":`El id${ide} no fue encontrado.`})
})

app.delete('/tutoriales/:id',(req, res)=>{
  const ide=req.params.id
  const tuto = tutorial.find(l=>l.id==ide)
  if(undefined!=tuto){
    const idx=tutorial.indexOf(tuto)
    tutorial.splice(idx,1)
    res.status(200).json({mensaje: `El id ${ide} fue eliminado.`}) 
  }else 
    res.status(404).json({mensaje:`El id ${idej} no fue encontado.`})

})
app.post('/tutoriales',(req, res)=>{
  const cuerpo=req.body
  const ids=tutorial.map(t=>t.id)
  const max=ids.length>0 ? Math.max(...ids)+1 :1
  tutorial.push({'id': max,
                 'nombretutorial':cuerpo.nombretutorial, 
                 'tipoTutorial':cuerpo.tipoTutorial ,
                 'url':cuerpo.url,
                 'activo':true})
  res.status(201).json(tutorial[tutorial.lenght-1])
})

app.listen(port, () =>{
  console.log(`App iniciada en el puerto${port}`)
})