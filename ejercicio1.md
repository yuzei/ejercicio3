Se muestra a continuacion un fragmento de código de un servidor en node.js usando express. el código contiene 4 errores que afectan su correcta ejecución. analice detenidamente el codigo, identifique los errores y explique como corregirlos. 

```
const express = require("express"); 
const app = express(); 

app.use(express.json());

app.use((req,res) => { 
console.log("Middleware ejecutado"); 
}); 

app.post("/usuarios",(req,res) => { 
const usuario = req; 
usuarios.push(usuario); 
res.send("Usuario agregado"); 
}); 

console.log("servidor corriendo en puerto 3000");
```
----------------------------------------------------------------------------------

##Error 1: no existencia de next();
-------------

app.use((req,res) => {   
console.log("Middleware ejecutado");   
}); 

este codigo bloquea la cadena y quedaria sin poder avanzar

###Solución:

app.use((req,res,next) => { 
  console.log("Middleware ejecutado"); 
  next();
}); 


-------------------------------------------------------------------------------

##Error 2: asignación erroneo
-------------

se le asigna a usuarios todo el req en de usar req.body

app.post("/usuarios",(req,res) => {   
	<ins> const usuario = req;	</ins>   
usuarios.push(usuario);   
res.send("Usuario agregado");   
}); 

###Solución:

app.post("/usuarios",(req,res) => { 
const usuario = req.body; 
usuarios.push(usuario); 
res.send("Usuario agregado"); 
}); 
