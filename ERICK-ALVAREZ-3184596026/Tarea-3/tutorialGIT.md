# Inicialización, Agregado y Subida de Archivos a GitHub con Git

### Pasos para trabajar con un repositorio en github:

#### 1. Inicializamos un repositorio en [github.](https://github.com)
- Seguimos el paso a paso para realizar la configuracion del repositorio.
- Tener presente marcar la casilla para generar el archivo README.md.


#### 2. Clonamos el repositorio en nuestro editor de codigo.
- Copiamos el link del repositorio que se genera en el github.
- Abrimos nuestro editor de codigo para clonar este repositorio en nuestra maquina local.
- Ejecutamos el siguiente codigo.  
  ```git clone <URL_del_repositorio>```


#### 3. Creamos una rama para trabajar en nuestro repositorio, usamos nuestra terminal.
- Con el siguiente comando vamos a crear nuestra primer rama en el repositorio.  
```git branch NOMBRE-NUEVA-RAMA```

#### 4. Hacemos el primer push hacia nuestro repositorio github.

- Con el comando ```git add``` . vamos a anexar los archivos que hemos creado para prepararlos al commit.
- Seguido a esto con el comando 
```git commit -m "Mensaje de commit descriptivo aquí"``` vamos a confirmar los cambios.
- Por ultimo con el comando
```git push origin main``` vamos a subir nuestros cambios al repositorio en github; En este caso el "main" se reemplaza por el nombre que le asignamos a nuestra rama (branch).

#### Conclusion:
- Es importante siempre tener presente en que rama estamos trabajando para asegurarnos que estamos realizando los cambios donde deben ir.



