# GUIDE BASIC SYSTAX

---

## tutorial paso a paso de un subir repositorio local a uno remoto

---

Se deben tener en cuenta los siguientes pasos:

![alt](./imagenes/git.png)

>[descargar git](https://git-scm.com/ "git dowload")

>Recuerda tener un repositorio remoto ya creado en git hub
1. Se debe crear una carpeta en donde quieras que este tu repositorio local.

2. Nos ubicamos en la carpeta recien creada, click derecho y click en "open git bash here". <!-- ya se debe tener git descargado antes de este proceso -->

3. Se nos abrira la consola de git bash con la informacion de la carpeta, _ejemplo: Daniel@DESKTOP-547BDS7 MINGW64 ~//Desktop/mi-primer-repo-local_.

4. Para hacer que esta carpeta sea un repositorio, usaremos el comando **git init** para inicializar nuestro proyecto o repositorio.

5. Una vez tengamos nuestro proyecto podemos modificarlo o cambiarlo, teniendo en cuenta que estamos en un **main** o **master**.

6. Ahora podemos confirmar los cambios o modificaciones de nuestro repositorio local al remoto, usamos **git add .** para subir todos los cambios o usamos **git add (nombre de la carpeta o cambios que queremos subir)**.

7. Tendremos que dejar un mensaje de lo que hicimos o se realizo, utilizamos **git commit -m "mensaje acerca de lo que se realizo en este repo remoto"**.

8. Crear un repositorio remoto:
    * Inicia seccion en **git hub**
    * Click en el "+" de la ezquina superior derecha
    * Click en "new repository"
    * Termina de llenar la informacion de tu nuevo repositorio, _ejemplo:nombre, decripcion, agregar README.md, etc._

9. Debemos vincular el repositori remoto de git hub con nustro repositorio local, nos ubicamos en la consola de git bash y usamos el comando **git remote add origin (_URL del repositorio remoto(git hub)_)**.

10. Ahora podremos subir o empujar los cambios a mi repositorio remoto una vez vinculado, usaremos el comando **git push -u origin master(o "main" segun sea el caso)**.

11. Ahora ya puedes ver tu repositorio local en tu repositorio remoto.

![alt text](./imagenes/git-logo.jpg)