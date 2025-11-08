# ejercicio3

para la instalacion se utilizo el comando

npx create-next-app@latest edge-signal-chatbot --typescript --use-npm

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

npm install framer-motion lucide-react

para trabajar con 2 librerías que se usaran para las animaciones y los iconos