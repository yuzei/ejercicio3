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
```
app.use((req,res) => {  
console.log("Middleware ejecutado");  
}); 
```
este codigo bloquea la cadena y quedaria sin poder avanzar

###Solución:
```
app.use((req,res,next) => {  
  console.log("Middleware ejecutado");  
  <ins>next();</ins>  
}); 
```

-------------------------------------------------------------------------------

##Error 2: asignación erroneo
-------------

se le asigna a usuarios todo el req en de usar req.body

app.post("/usuarios",(req,res) => {  
	const usuario = req;   
	usuarios.push(usuario);   
	res.send("Usuario agregado");   
}); 

###Solución:

app.post("/usuarios",(req,res) => { 
	<ins>const usuario = req.body;</ins> 
	usuarios.push(usuario); 
	res.send("Usuario agregado"); 
}); 

--------------------------------------------------------------------------------

##Error 3: usuarios no está definido/creado
---------------
###solución:
const express = require("express");   
const app = express();  

<ins>const usuarios = [];</ins>

--------------------------------------------------------------------

##Error 4: el servidor no está escuchando
---------------------

Se imprime el mensaje pero la app realmente no inicializa
console.log("servidor corriendo en puerto 3000");

###Solución:

<ins>app.listen(3000, () => {</ins>
  console.log("servidor corriendo en puerto 3000");
<ins>});</ins>
