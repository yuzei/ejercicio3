Las opciones puestas son las respuestas que se consideran como correctas
Encuentra las respuestas correctas:
Welcome.js
```
import React from "react";

function Welcome({ name }) {
  return (
    <div>
      <h1>Hola {name}!</h1>
      <p>Bienvenido a la aplicación</p>
    </div>
  );
}

export default Welcome;
```

App.js
```
import Welcome from "./Welcome";

function App() {
  return (
    <div>
      <Welcome name="Nico" />
    </div>
  );
}

export default App;

```

-------------------------------------------------------------
#1 Marque la(s) respuesta(s) correcta(s):

A. El componente Welcome se está importando y usando correctamente dentro de App.

B. Si Welcome.js no tuviera export default, el import fallaría.

C. El return del componente debe devolver un único elemento padre.

D. {name} dentro del JSX imprime el valor de la prop name.

------------------------------------------------------------

#2 Marque la(s) frase(s) verdadera(s):

B. El archivo index.html contiene normalmente un ```<div id="root">,``` donde React “monta” la app.

D. React actualiza solo las partes del DOM que cambian, gracias al Virtual DOM.

--------------------------------------------------------------
inv.js
```
export default function Inventory() {
  const [items, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    dispatch({
      type: "add",
      payload: { id: 1, name: "Pan", qty: 5 },
    });
    dispatch({
      type: "add",
      payload: { id: 1, name: "Pan", qty: 3 },
    });
    dispatch({
      type: "sell",
      payload: { id: 1, qty: 10 },
    });
    dispatch({
      type: "add",
      payload: { id: 2, name: "Leche", qty: 4 },
    });
    dispatch({ type: "clearZero" });
  }, []);

  return (
    <ul>
      {items.map((p) => (
        <li key={p.id}>
          {p.name} (x{p.qty})
        </li>
      ))}
    </ul>
  );
}

import { useReducer, useEffect } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "add": {
      const existing = state.find((p) => p.id === action.payload.id);
      if (existing) {
        return state.map((p) =>
          p.id === action.payload.id
            ? { ...p, qty: p.qty + action.payload.qty }
            : p
        );
      }
      return [...state, action.payload];
    }

    case "sell":
      return state.map((p) =>
        p.id === action.payload.id
          ? { ...p, qty: Math.max(p.qty - action.payload.qty, 0) }
          : p
      );

    case "clearZero":
      return state.filter((p) => p.qty > 0);

    default:
      return state;
  }
}
```

---------------------------------------------
#3 Despues de ejecutar el useeffect ¿qué mostrará el componente en pantalla? Marque la(s) respuesta(s) correcta(s).

A.  Solo aparece "Leche (x4)".

B.  "Pan" se elimina tras la acción "clearZero".

C.  El orden de los dispatch afecta el resultado final.

D.  Si se quita "clearZero", aparecerían "Pan (x0)" y "Leche (x4)".

------------------------------------
#4 ¿Cuál de las siguientes afirmaciones sobre protocolos y API's es correcta?

Marque la(s) respuestas correctas.

A.  HTTP es un protocolo que define cómo se envían y reciben mensajes entre cliente y servidor.

B.  Una API define reglas para que dos aplicaciones se comuniquen entre sí.

D.  Una API REST usa el protocolo HTTP para organizar peticiones y respuestas.

-----------------------------------------------------------------------
Padre.js
```
import { useState } from "react";
import Hijo from "./Hijo";

function Padre() {
  const [mensaje, setMensaje] = useState("Hola");

  return (
    <div>
      <p>{mensaje}</p>
      <Hijo mensaje={mensaje} />
    </div>
  );
}

export default Padre;
```
Hijo.js
```
function Hijo({ mensaje }) {
  return (
    <button onClick={() => setMensaje("Adiós")}>
      Cambiar mensaje
    </button>
  );
}

export default Hijo;
```
-----------------------------------------------------------------
#5 ¿Qué ocurrirá cuando se haga clic en el botón del hijo?

A.  En pantalla seguirá mostrando "Hola".

B.  setMensaje no existe en el hijo y generará un error al hacer clic.

D.  Si se corrigiera pasando setMensaje como prop, entonces se mostraría "Adiós".
