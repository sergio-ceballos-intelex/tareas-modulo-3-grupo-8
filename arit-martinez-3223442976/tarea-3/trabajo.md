# Inicializacion, Agregado y Subida de Archivos a GitHub con Git

## Introduccion

Es importante versionar archivos en un repositorio ya que nos hace ser mas eficientes, ordenados, nos permite trabajar con otras personas en un mismo proyecto y ayuda a que los lideres del proyecto tengan control de lo que se agrega o no al proyecto.

## ¿Como inicializar un repositorio Git en tu maquina local?

primeramente debes tener en cuenta que voy a usar vscode para esta explicacion y a continuacion dare un paso a paso de como inicializar un repositorio Git en tu maquina local.

**Pasos a seguir :**
1. Crea una carpeta en tu escritorio, luego da click derecho sobre la carpeta que creaste y click sobre abrir en vscode.

2. Ahora ya estando en vscode abre la terminal presionando 
(ctrl + ñ), luego para inicializar tu repositorio en Git escribe en la terminal el siguiente comando:
 > git init

3. ahora para poder agregar todos los cambios realizados, al area de preparacion, escribe en la terminal el siguiente comando: 
> git add .

pero si solo quieres agregar un archivo especifico puedes escribir el mismo codigo pero le quitas el punto y agregas el nombre del archivo entre comillas.

4. Ahora para confirmar los cambios realizados debes realizar un commit en la consola de la siguiente manera:
> git commit -m "Descripcion de  los cambios que se realizaron"

5. Ahora vincularemos tu repositorio local con un repositorio remoto en Github para eso debemos ir a GitHub para buscar la URL del repositorio remoto en el cual vas a trabajar aunque deberian habertela pasado junto con los permisos para poder trabajar en el repositorio. 

[imagen explicativa quinto punto](../../../../../../Downloads/img-explicativa-detallada.png)

Ya que copiaste la URL como lo explica la imagen anterior, dirigete a la terminal y escribe el siguiente comando:
> git remote add origin "Pega-la-URL-del-repositorio-de-GitHub"

6. Ahora se debemos subir los cambios a GitHub para que sean guardados en el repositorio remoto para que el encargado del proyecto revise si todo esta como lo pidio el cliente, escribe el siguiente comando:
> git push -u origin main

**En resumen debes inicializar el repositorio con (git init), luego debes guardar los cambios con (git add .), despues hacer la confirmacion de los cambios realizados en el documento con (git commit), luego vinculamos el repositorio local al remoto con (git remote add origin "aqui va la URL del repositorio en GitHub"), y finalmente subimos los cambios al repo remoto que esta en GitHub con (git push -u origin main), esto es todo recuerda que por mas dificil se vea si practicas sera mas facil.**