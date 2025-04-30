# Automatización de pruebas con CodeceptJS + Github Actions

## Historia de Usuario

Como usuario de Wikipedia, quiero buscar artículos sobre temas específicos para acceder rápidamente a información confiable y estructurada.

- **Actor principal**: Usuario no registrado.
- **Objetivo**: Buscar tema de interes.
- **Valor esperado**: Acceder al artículo correcto que contenga contenido relevante sobre el tema buscado.

## Casos de prueba funcionales

### 1. Busqueda exitosa de termino existente

#### Objetivo:
Validar que el buscador devuelve resultados correctos para un término válido.

#### Steps:
1. Navegar a https://www.wikipedia.org
2. Selecciónar idioma español.
3. Ingrsar el termino "Python" en el campo de búsqueda.
4. Presionar "Enter".

**RE**: Se muestra pagina de resultados relevantes.

### 2. Busqueda de un termino inexistente

#### Objetivo: 
Comprobar el manejo de búsquedas inválidas.
#### Steps:
1.  Navegar a https://www.wikipedia.org
2. Selecciónar idioma español.
3. Buscar el termino "xxyyzzinvalidterm"

**RE**: Se muestra una página con el mensaje "The page 'xxyyzzinvalidterm' no existe."

### 3. Cambio de idioma muestra el mensaje de bienvenida correspondiente

#### Objetivo: 
Validar que al seleccionar un idioma, el contenido de la página de inicio se actualiza correctamente.
#### Steps:
1.  Navegar a https://www.wikipedia.org
2. Seleccionar el idioma "idioma"

**RE**:Se muestra la página principal con el texto de bienvenida en el idioma correspondiente.

### 4. Verificar sección específica en un artículo existente.

#### Objetivo:
Validar que un artículo contiene una sección específica.

#### Steps:

1. Buscar "Software testing"
2. Acceder al primer articulo relacionado con la búsqueda.

**RE**: Se encuentra el encabezado visible con el texto "Referencias".

### 5. Validar que los enlaces internos de un artículo son funcionales

#### Objetivo:
Asegurar que los enlaces internos dentro de un artículo redirigen a páginas válidas.

#### Steps:
1. Ir al artículo "Software testing" en inglés: https://en.wikipedia.org/wiki/Software_testing
2. Obtener todos los enlaces internos (aquellos que comienzan con /wiki/)
3. Acceder a cada uno de los enlaces internos.

**RE**: Todos los enlaces internos conducen a páginas válidas (no deben redirigir a páginas con errores 404 ni páginas inexistentes).




