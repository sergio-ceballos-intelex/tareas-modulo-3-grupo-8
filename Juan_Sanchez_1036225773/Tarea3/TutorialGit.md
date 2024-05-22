# Tutorial sobre: inicialización, Agregado y Subida de Archivos a GitHub con Git

## **Es de gran importancia versionar archivos en un repositorio; ya que nos permite tener un alto control en el manejo de nuestro codigo base (main), también permite crear ramas sobre el main para no afectarlo y poder revisarlo antes de ser enviado por medio de un pull request.**

### ¿Cómo inicializar un repositorio Git en tu máquina local?
Primero debemos crear o definir la carpeta donde utilizaremos Git, con el comando **cd {nombre_de_la_carpeta}** podemos seleccionar la carpeta que necesitamos, luego allí, escribimos el comando **git init**, para inicializar el repositorio git. Lo anterior, se puede distinguir al ir a la carpeta inicializada anteriormente y encontrar un nuevo subdirectorio .git.

### ¿Cómo agregar archivos al área de preparación (staging area)?
Se debe tener muy presente la ruta donde vamos a ejecutar el comando **git add** para que sea efectivo, su uso puede ser de dos maneras:
1. La primera es utilizando el comando **git add {nombre_del_archivo}** *(el cual agrega al area de preparación solo este archivo)*
2. La segunda es usando el comando **git add .** *(el cual agrega al area de preparación todos los archivos en la ruta actual)*.

### ¿Cómo realizar un commit de los archivos agregados?
Luego de realizar el git add, procedemos a utilizar el comando **git commit**, el cual su estructura es: **git commit -m "mensaje explicito del cambio realizado"**.

### ¿Cómo vincular tu repositorio local con un repositorio remoto en GitHub?
Para vincular el repositorio local con el remoto en GitHub, basta con utilizar el comando git remote add origin <URL_del_repositorio_en_GitHub>, con ello se realiza la sincronización en el repositorio en la nube.

### ¿Cómo subir los cambios a GitHub?
Como ultimo paso, se deben subir los cambios realizados en nuestro repositorio por medio del comando git push -u origin main, con ello confirmamos lo realizado anteriormente.