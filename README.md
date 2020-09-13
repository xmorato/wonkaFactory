# Willie Wonka's 🏭🍫

Mi aproximación al ejercicio de Willie Wonka con React.

## Estructura del código ⚙️
En la carpeta **/public** están las dos imágenes, logo y lupa.

Bajo la carpeta **/src** está **App.js**, que es el componente principal formado por el **Header**, el **contextProvider** y las **rutas** que llevan a las dos páginas principales. También contiene el **App.css** con los estilos. El código está estructurado bajo /src en las siguientes sub-carpetas:

- **/hooks:** hooks encargados de obtener la lista de Oompas y el el detalle de un Oompa
- **/services:** métodos encargados de hacer las llamadas al endpoint para obtener la lista de oOmpas o el detalle de un Oompa  
- **/context:** creación del contexto necesario para mantener los datos
- **/pages:** Detail y Home son las dos páginas de las que se compone la aplicación
- **/components:** componentes que forman la aplicación
- **/tests:** tests unitarios

## ¿Qué he utilizado?  🛠️
Teniendo presente que estoy en la última versión de Chrome (como dice el enunciado) he utilizado las siguientes funcionalidades y/o librerías:

- **create-react-app** como boilerplate para el ejecercio
- **Wouter** para el enrutado, por ser muy ligero y no necesitar más para esta aplicación.
- **Context** para los datos, ya que Mario comentó en la entevista que la empresa pararía de Redux a Context.
- **IntersecctionObserver** para implementar el scroll infinito
- **LocalStorage** para guardar los datos en el navegador y "caducarlos/renovarlos" pasadas 24horas del último fetch (asumo que estará disponible en el navegador y que el usuario no lo habrá deshabilitado).
- **CSS Flex** directamente para estilos de la App, ya que Mario comentó en la entrevista que se estaba abandonando SaSS.
- **Jest y Enzyme** para el apartado de testing
- DangerouslySetInnerHTML para el formateo del detalle de los Ooompa cuando viene con HTML.


## ¿ Cómo arrancar el proyecto ? 🚀

IMPORTANTE: usar versión mínima de Node 10.15.2
```
git clone https://github.com/xmorato/wonkaFactory.git
npm install
npm start
```
Se levanta un servidor en localhost:3000 que directamente abre la aplicación


## ¿ Cómo ejecutar los test ? 🔩

```
npm run test
```

## Consideraciones y explicaciones 📋

**LocalStorage**

Una vez hecho el primer fetch los datos se guardan en el LocalStorage. A no ser que los datos estén caducados (haya pasado más de 24Hrs desde el ultimo fetch, hay una constante para ello) los datos se toman del LocalStorage. Para probar el uso del LocalStorage se pueden borrar directamente las keys que se almacenan en él, que corresponden a:
- id{id} -> clave de Oompa Detail
- t-id{id} -> momento en ms en que se hizo el fetch del Oompa Detail
- p{numeropag} -> array de 25 oompas de numeropag
- t-p{numeropag} ->  momento en ms en que se hizo el fetch de la página con 25 oompas

**IntersecctionObserver**

Para conseguir el efecto de endless scroll con paginación se usa una referencia al final la página principal (id="observer"), para controlar cuando el usuario llega a esa posición y recargar otra página más a continuación.


### Autor

_Xavi Morató - Septiembre 2020_