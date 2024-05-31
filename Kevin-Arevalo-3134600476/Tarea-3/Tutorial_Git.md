# Inicialización, Agregado y Subida de Archivos a GitHub con Git
### Git conciste en ser mas eficiente a la hora de trabajar en grupo con varios compañeros ya sean de trabajo o de estudio, Git nos ayuda a resolver errores con mayor facilidad y rapidez

## Tutorial para subir archivo en Github

1. **Abrir la Terminal: Abre tu terminal o línea de comandos en tu sistema operativo.**


2. **Inicializar el Repositorio:**
- Una vez dentro del directorio del proyecto, ejecuta el comando git init.

    `git init`

3. **Agregar Archivos al Repositorio:**
- Añade los archivos de tu proyecto al área de preparación (staging area) usando git add.

    `git add . Nombre_Del_Archivo`

4. **Confirmar los Cambios (Commit):**
- Realiza el primer commit para guardar los cambios en el historial del repositorio.

    `git commit -m "Inicializar repositorio con archivos iniciales"`

5. **Verificar el Estado del Repositorio (Opcional):**
- Puedes verificar el estado del repositorio para asegurarte de que los archivos han sido agregados y confirmados correctamente.

    `git status`

6. **Vincular el Repositorio Local con el Remoto:**
- Puedes verificar que el repositorio remoto se ha agregado correctamente con el comando git remote -v.
- Deberías ver dos líneas, una para fetch y otra para push, apuntando a la URL del repositorio remoto.

    `git remote add origin https://github.com/tu_usuario/tu_repositorio.git (EJEMPLO)`

7. **Enviar Cambios al Repositorio Remoto:**
- Envía los cambios confirmados en tu repositorio local al repositorio remoto en GitHub usando git push.
- El parámetro -u establece la rama master en el remoto como la rama predeterminada para futuros push y pull.

    `git push -u origin master`
