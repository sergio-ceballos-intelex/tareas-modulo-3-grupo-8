# TUTORIAL DE GIT -TAREA 3

**Git es una herramienta de suprema importancia para las desarrolladores de software, que consiste en un sistema de versiones distribuido. A continuación se explicaran los pasos basicos para explicar algunos de sus principapales funciones.**

**1-inicializar un repositorio Git (git init).**
Para crear un nuevo repositorio en Git se debe utilizar el comando **git init** y asi dar inicio a la configuración inicial del repositorio. 

```git init```

```Nota: se debe ubicar el directorio previamente donde estan los archivos a subir en el repositorio```

**2-agregar archivos al área de preparación (staging area) utilizando el comando git add.**

La staging area en Git es el lugar temporal y luego ser llevados al repositorio, para ello se utiliza el comando **git add** que los lleva al staging area.

- para envio de archivos individuales se puede hacer de la siguiente manera:

   ```Git add <nombrearchivo>```

- En caso de enviar todos los archivos de la carpeta utiliza el comando:

   ```Git add .```



**Ejemplo:**

al escribir el comando "git add indexpage.html." se alistara el archivo temporalmente en el staging area y una vez ejecutado, seguira realizar un commit.

**3-Realizar un commit.**

Para asegurar los cambios en el repositorio se realiza el uso del comando **git commit**, este comando confirmara que se realice el cargue en el repositorio local y en el ramal seleccionado.

```Git commit -m "Mensaje de commit"```


**4-vincular el repositorio local con un repositorio remoto en GitHub.**

para lograr conectar el repositorio local con el repositorio remoto se debe tener en cuenta la url  que creamos en el github. el comando a utilizar **git remote add origin**.

- ```git remote add origin <https://dirección url en github>```


**Ejemplo**

Se debe localizar la url en git hub y esta se agrega a la linea de comando: ```**git remote add origin https://github.com/jerrycol25/Mis-Tareas-Modulo-3.git**```


**5-subir los cambios a GitHub.**

Para garantizar que los contenidos del repositorio local se guarden en GitHub se utiliza un comando de envio. 

```**git push -u origin <nombre-rama>**.```

Nota: se debe tener en cuenta en que rama deseo hacer el repositorio,  recordar qe la rama principal o padre es **main**

**ejemplo:** 

```**git push -u origin main**.``` 

## CONCLUSIONES

El uso de un repositorio en GIT nos permitira poder gestionar nuestros archivos mediante un historico de versiones sin afectar los contenidos previos.






