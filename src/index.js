const express = required('express');
const app = express();
const port = 3000;

app.get('/',(req,resp)=>{

    res.send('hola mundo');
});
 app.listen(port,()=>{

    console.log(`servidor corriendo en http://localhost:${port}`)
 })