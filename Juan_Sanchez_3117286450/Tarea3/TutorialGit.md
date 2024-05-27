# Tutorial sobre: Inicialización, Agregado y Subida de Archivos a GitHub con Git

## **Es de gran importancia versionar archivos en un repositorio; ya que nos permite tener un alto control en el manejo de nuestro codigo base (main), también permite crear ramas sobre el main para no afectarlo y poder revisarlo antes de ser enviado por medio de un pull request.**

### 1. ¿Cómo inicializar un repositorio Git en tu máquina local?
Primero debemos crear o definir la carpeta donde utilizaremos Git, con el comando **cd {nombre_de_la_carpeta}** podemos seleccionar la carpeta que necesitamos, luego allí, escribimos el comando **git init**, para inicializar el repositorio git. Lo anterior, se puede distinguir al ir a la carpeta inicializada anteriormente y encontrar un nuevo subdirectorio .git.

* Ejemplo:

Se crea una carpeta llamada first_repository, en la cual se ejecuta el comando **cd first_repository** (para selecionarla), luego el comando **git init** (para iniciarlo), esto creará un subdirectorio .git dentro de first_repository, que contendrá todos los archivos necesarios para el repositorio Git.

### 2. ¿Cómo agregar archivos al área de preparación (staging area)?
Se debe tener muy presente la ruta donde vamos a ejecutar el comando **git add** para que sea efectivo, su uso puede ser de dos maneras:

- La primera es utilizando el comando **git add {nombre_del_archivo}** *(el cual agrega al area de preparación solo este archivo)*
- La segunda es usando el comando **git add .** *(el cual agrega al area de preparación todos los archivos en la ruta actual)*.

* Ejemplo:

Se tienen dos archivos en first_repository: index.html y style.css.

- Para agregar solo index.html al área de preparación, utilizamos el comando **git add index.html**
- Ó para agregar todos los archivos en la carpeta actual al área de preparación, utilizamos **git add .** *(esto agregaría tanto el archivo index.html como style.css).

### 3. ¿Cómo realizar un commit de los archivos agregados?
Luego de realizar el git add, procedemos a utilizar el comando **git commit**, el cual su estructura es: **git commit -m "mensaje explicito del cambio realizado"**.

Después que se agreguen los archivos al área de preparación, se realiza un commit con un mensaje que describa los cambios realizados con el comando **git commit -m "Se ingresan los archivos index.html y style.css"**

### 4. ¿Cómo vincular tu repositorio local con un repositorio remoto en GitHub?
Para vincular el repositorio local con el remoto en GitHub, basta con utilizar el comando git remote add origin <URL_del_repositorio_en_GitHub>, con ello se realiza la sincronización en el repositorio en la nube.

Se crea un repositorio en GitHub llamado mi_primer_repositorio, el cual arroja la URL del repositorio que es https://github.com/nombre_de_su_usuario/mi_primer_repositorio.git. y para poder acceder a este repositorio remotamente debemos ejecutar el comando **git remote add origin https://github.com/nombre_de_su_usuario/mi_primer_repositorio.git**

### 5. ¿Cómo subir los cambios a GitHub?
Como ultimo paso, se deben subir los cambios realizados en nuestro repositorio por medio del comando git push -u origin main, con ello confirmamos lo realizado anteriormente.

* Ejemplo:

Por ultimo, para subir los cambios de la rama main a GitHub, se usa el comando: **git push -u origin main**m el cual subirá los commits de la rama local main a la rama remota origin/main en GitHub y creará la rama upstream.

## CONCLUSIÓN

Se puede concluir que en este tutorial, aprendimos los pasos básicos para usar Git y GitHub, que son herramientas muy útiles para cualquier desarrollador.

Les dejo un resumen de lo visto anteriormente:

* Inicializar un repositorio Git: Cómo empezar a usar Git en una carpeta local con git init.
* Agregar archivos al área de preparación y cómo seleccionar los archivos que queremos incluir en el próximo commit usando git add.
* Realizar commits: Cómo guardar los cambios con un mensaje explicativo usando git commit -m "mensaje".
* Vincular con un repositorio remoto: Cómo conectar nuestro repositorio local con uno en GitHub usando git remote add origin <URL>.
* Subir cambios a GitHub: Cómo enviar nuestros commits al repositorio remoto con git push -u origin main.

Estos comandos son la base para trabajar con Git y GitHub. Estos nos ayudará a ser más organizados en nuestros proyectos.

**Espero haya sido de gran ayuda este tutorial y aimate a practicar estos comandos!**

### Como un adicional, a continuación les comparto algunos links con recursos que te permitirán afinar y profundizar en este gran mundo llamado git:

- [Git Documentation](https://git-scm.com/doc)
- [GitHub Docs](https://docs.github.com)
- [Pro Git Book](https://git-scm.com/book/en/v2)