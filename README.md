# ejercicio3
Este proyecto implementa un chatbot interactivo con interfaz flotante (tipo burbuja) desarrollado en Next.js con TypeScript, utilizando TailwindCSS para el diseño, Framer Motion para animaciones, y Lucide React para íconos.
El bot permite al usuario interactuar con respuestas simuladas

para la instalacion se utilizo el comando:

```
npx create-next-app@latest edge-signal-chatbot --typescript --use-npm
```

esto genera una plantilla con el nombre edge-signal-chatbot
al comenzar la creacion de la plantilla hará las sgtes preguntas.

------------------------------------------------------------------------------------
? Which linter would you like to use? » - Use arrow-keys. Return to submit. 
ESLint 
Biome 
None 

Se escogio el None, si fuera necesario se puede agregar despues con.

npm install eslint --save-dev
npx eslint --init

------------------------------------------------------------------------------------
? Would you like to use React Compiler? No / Yes

Se escogio la opción No, porque Framer Motion y algunos hooks personalizados (como useChat) pueden tener comportamientos inesperados con el nuevo compilador.

------------------------------------------------------------------------------------
? Would you like to use Tailwind CSS?  No / Yes

Se escogio la opción Yes, esto porque todo el diseño esta planeado y armado con tailwindCSS

-------------------------------------------------------------------------------------
? Would you like your code inside a src/ directory?  No / Yes

Se escogio la opción No, el codigo utilizado trabaja con una estructura sin /src

---------------------------------------------------------------------------------------
? Would you like to use App Router? (recommended)  No / Yes

La opción escogida fue Yes, porque es recomendado por Next.js, más moderno y compatible con el stack

--------------------------------------------------------------------------------------
? Customize import alias (@/*)? No / Yes

La opción tomada fue No, Next.js ya crea por defecto el alias @/*, que apunta a la raíz del proyecto (es decir, puedes importar con @/components/... en lugar de rutas largas).

--------------------------------------------------------------------------------------

Despues de haber sido generado la plantilla se ejecuto:

```
npm install framer-motion lucide-react
```

para trabajar con 2 librerías que se usaran para las animaciones y los iconos

----------------------------------------------------------------------------------------
Ahora en el modelo 2 lo haremos modular
dentro de la carpeta "app" generaremos la carpeta "components" en la cual contendra 3 archivos .tsx que se llamarán "ChatBubble", "Footer" y "Headder" y una carpeta llamada "hooks" en la cual contendra el archivo .tsx nombrado "useChat" 

Ahora explicare en que sirven los archivos:

¬ ChatBubble.tsx
-------------------
Este tsx realiza:
°    Mostrar el botón flotante.

°    Usar Framer Motion para abrir/cerrar la ventana del chat.

°    Importa ChatWindow dentro.

°    Controla el estado open.

°    Renderiza el chat

°   Transforma al chatbot en un componente independiente con props por ejemplo:
```
    <ChatWindow open={open} toggleOpen={toggleOpen} />
```

¬ useChat.tsx
---------------
Este tsx realiza:
°   La lógica: estado de mensajes, envío, input y sugerencias.

°   Simular la API, en respuesta y en procesar la info.

¬ Footer.tsx
--------------
° Contiene la informacion del pie de página

¬ Header.tsx
---------------
° Contiene la información de la cabezera de la página

----------------------------------------------------------------------------------------

¬ Cosas que se entregan en este diseño:
---------------------------------------
° Burbuja flotante con animaciones.

° Persistencia temporal del estado del chat.

° Preguntas sugeridas.

° Scroll automático a los mensajes más recientes.

° Respuesta simulada (mock) con retardo.

° Un hook funcional.

-----------------------------------------------------------------------------------------
Estructura:
---------
```
edge-signal-chatbot/
│
├── .next/
├── app/
│   ├── components/
│   │   ├── ChatBubble.tsx
|   |   ├── Footer.tsx
│   │   └── Header.tsx
│   ├── hooks/
│   │   └── useChat.tsx
|   ├──api/
|   |   └── chat/
|   |       └── route.ts
│   ├── globals.css
|   ├── layout.tsx
│   └── page.tsx
|
├── node_modules/
├── public/
|
├── tsconfig.json
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── .env.local
└── next.config.ts
README.md (donde estas leyendo esto)
```

-----------------------------------------------------------------------------------------

Imagenes del codigo corriendo:
-------------
<img width="1577" height="949" alt="imagen" src="https://github.com/user-attachments/assets/a75dd295-e815-4b25-9f23-e0adf30b498e" />
<img width="475" height="543" alt="imagen" src="https://github.com/user-attachments/assets/4258d666-0035-496e-bd48-36d2345f1d0f" />
<img width="393" height="403" alt="imagen" src="https://github.com/user-attachments/assets/b2496d04-dd70-43b2-ab97-7bda3265a067" />


-----------------------------------------------------------------------------------------
Proyecto desarrollado por Yuzei(Matías García) para fines de aprendizaje y demostración.
Basado en tecnologías de código abierto.
