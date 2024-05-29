# TUTORIAL DE ARCHIVOS GitHub CON Git
es de gran importancia poder fucionar archivos para darle un gran manejo, por medio de github podemos podemos tener el control de nuestras tareas y crear ramas para despues enviar al padre main y darle su destino final
 

> ## 1. Inicializacion de repositorio 
>
> Para inicializar un repositorio de manera local en nuestras maquinas, creamos una carpeta que utilizaremos en git, luego ejecutamos el comando - **git init**
>
> 
> ## 2. Preparar archivos al area de staging
>
> El area de **staging** es como un pre-commit y para agregar los archivos lo hacemos por medio del comando *git add*.
>
> A este comando le agregamos bien sea el nombre del archivo que queremos agregar o un punto para agregar todos los archivos ejemplo:
>
> ## git add index.html
>
> ## git add . 

> ## 3. Confirmar los pasos
>
> Para confirmar los pasos que hicimos ejecutamos el comando 
>
> ## git commit -m ""
dentro de las comillas debemos colocar un mensaje relacionado a los pasos en los archivos que vamos a subir, ejemplo:
>
> ## git commit -m "Subo cambios de mi primer repositorio"

>## 4. Sincronizar nuestro repositorio local con el remoto 
>
> Para sincronizar nuestro repositorio local con nuestro repositorio remoto, ejecutamos el comando 
>
> ## git remote add origin
>
> A este comando le debemos añadir la url que nos da nuestro repositorio remoto

>## 5. Cambiar el nombre de la rama (OP)
>
>En algunos casos cuando creamos un repositorio nos va a dar una rama la cual puede tener un nombre como *master*, para no tener quizas conflictos con git lo mejor es cambiar el nombre de la rama, para hacer esto utilizamos el comando 
>
> ## git branch -M
>
> A este comando le agregamos el nuevo nombre que va a tener nuestra rama ejemplo:
>
> ## git branch -M main

>## 6. Subir los cambios al repositorio remoto 
>
> Para subir los cambios al repositorio remoto utilizamos el comando
>
> ## git push -u origin main
>
> Este comando lo ejecutamos una ves y es para indicarle a nuestro repositorio remoto que la rama en la cual estamos trabajando la debe crear en el repositorio remoto.

    
    