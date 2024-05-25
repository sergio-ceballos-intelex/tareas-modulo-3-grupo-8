# Inicialización, Agregado y Subida de Archivos a GitHub con Git y Markdown

## **Introducción**

<p>Mantener un versionado de archivos a la hora de trabajar con software es un
proceso super importante ya que es mediante este que podemos mantener un control sobre cada versión de nuestro codigo, y el codigo que construya nuestro equipo de trabajo, mediante este tutorial te explicare paso a paso como usar los comandos de git para mantener una versión de archivos y codigo.</p>

### **1. Inicializar un Repositorio Git**

Para iniciar con un repositorio en tu ***maquina local*** usamos el siguiente comando:

```
git init 
```
mediante ese comando creamos un subdirectorio llamado `git` que nos permite contener todos los archivos necesarios del repositorio. A partir de ahi el proyecto estara versionado en Git

### **2. Agregar Archivos al Área de Preparación (Staging Area)**

Una vez que tienes tu repositorio inicializado, puedes agregar archivos al área de preparación usando el comando git add. Este comando prepara los archivos que quieres incluir en tu próximo commit.

```
git add <nombre_archivo>
```

Por ejemplo, para agregar un archivo index.html lo hariamos de la siguiente forma:
```
git add index.html
```
Y si queremos añadir todos los archivos seria asi:
```
git add .
```
### **3. Realizar un commit**

Una vez que tengamos nuestros archivos en el area de preparación debemos realizar un commit, mediante esto es como guardamos nuestros cambios en el historial del repositorio, debemos usar el comando `git commit -m` seguido de un __mensaje que describa los cambios o lo que hicimos.__ 

```
git commit -m "mensaje donde se describe lo que se hizo"
```
Por ejemplo, siguiendo la estructura de enviar un archivo html seria asi:
```
git commit -m se añadio archivo .html con estructura de una pagina web
```

### **4. Vincular el repo local con el repo remoto de GitHub**

Para poder subir los cambios a GitHub, primero hay que vincular el repositorio local con un repositorio remoto. Esto se hace mediante un comando `git remote add origin <URL_del_repositorio_en_GitHub>.`

```
git remote add origin https://github.com/usuario_personal/nombre_repositorio.git
```
Logicamente hay que reemplazar el enlace proporcionado como ejemplo por un enlace real de repositorio remoto de GitHub.

### **5. Subir los cambios a GitHub**

Para finalizar, ahora es cuando podemos subir nuestros cambios al repo remoto de GitHub mediante el comando `git push -u origin master` .

```
git push -u origin master
```

### **Conclusión**

En este tutorial, hemos visto cómo iniciar un repositorio Git, agregar archivos, hacer commits, conectar con GitHub y subir tus cambios. Practicar estos comandos te ayudará a entender mejor cómo funciona Git y GitHub, facilitando la gestión de tus proyectos y la colaboración con otros.
