![GitLogo](../Tutorial-Git/resources/git_logo_.png)

# **HOMEWORK 03 | TUTORIAL - GIT - GITHUB**

Git es un sistema de control de versiones de código, es decir; un sistema que registra los cambios realizados en un archivo o conjunto de archivos a lo largo del tiempo, de modo que puedas recuperar versiones específicas más adelante. 

## **📋 Pasos para la instalación de Git**

- Tener instalado Git en la computadora [**GIT-BASH**](https://git-scm.com/downloads/).
- Crear una cuenta en [**GITHUB**](https://www.github.com/).
- Configurar Git con el nombre de usuario y correo electrónico.

```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tuemail@example.com"
```
---

## **📌 INSTRUCCIONES**

### **1️⃣ Se inicializa un repositorio Git**

- Se crea una carpeta o directorio con los siguientes comandos.

```sh
mkdir mi-carpeta
cd mi-carpeta
```

- Como iniciar el repositorio Git.

```bash
git init
```

### **2️⃣ Se agrega archivos al repositorio**

- Se crea un archivo README.md

```sh
bash "/d/Kambcode/mi-carpeta" > README.md
```

- Una vez se haya modificado o ingresado información al archivo se prepara para ser agregado al área de trabajo.

```sh
git status --> "Para determinar qué archivos están en qué estado"  
git add README.md | git add .
```

- Después de agregar los archivos a la área de trabajo, se hace un Commit.

```sh
git commit -m "Se añade archivo README.md"
```

### **3️⃣ Subir los archivos a GitHub**

- Crear un nuevo repositorio en GitHub [**GitHub**](https://github.com/).
- Se busca la pestaña `New repository` y damos Clic sobre el botón.
- Nombra el repositorio, por ejemplo, `mi-carpeta`
- No inicializar el repositorio con un README, ya que la idea es trabajarlo localmente.
- Por ultimo damos clic en `Create repository`

#### **➡️ Ahora vamos a realizar la conexión del repositorio local a GitHub**

```sh
git remote add origin https://github.com/Usuario/mi-carpeta.git
```

#### **➡️ Realizaremos el proceso de subir los cambios al repositorio remoto en GitHub**

```sh
git push -u origin (master) --> Identificamos la rama
```

## **🔳 Comandos para el manejo de la terminal**

- ✔️ Git:
    - **pwd**. Imprimir el directorio en donde nos encontramos. .
    - **ls**. Imprime archivos o carpetas dentro del cual estamos trabajando.
    - **mkdir**. Crea una carpeta llamada 'carpetaPrueba' en el directorio que estamos situados. Si queremos crear una carpeta que lleve espacios en su nombre se debe utilizar comillas. Por ej "Course Kambcode" 
    - **cd**. Para ir hacia el directorio que contiene la carpeta o directorio en donde nos encontramos. También podemos usarla para movernos entre carpetas, por ejemplo al usar cd carpetaPrueba cambiamos de la carpeta actual hacia "carpetaPrueba"
    - **touch**. Archivo.txt : crea un archivo con nombre "archivo.txt" o depende de la extesión.
    - **rm -r**. Nos muestra la ruta actual en la que nos encontramos.
    - **Print Working Directory**. CarpetaPrueba: elimina la carpeta de nombre "carpetaPrueba"
    - **clear**. Limpia la pantalla de la terminal.

- ✔️ Tools:
    - **Git**. Documentación [**Git - Book**](https://git-scm.com/docs/)
    - **Markdown Guide**. Documentación [**Basic Syntax**](https://www.markdownguide.org/basic-syntax/)

## **📌 CONCLUSIONES**

- Este tutorial está desarrollado para cualquier tipo de persona, donde se va a encontrar una guía paso a paso para iniciar un repositorio en Git, agregar archivos y subirlos a GitHub, Además se documenta todo el proceso en un archivo Markdown. Esta es una excelente herramienta para presentar y manejar proyectos organizados y documentados.

   

















