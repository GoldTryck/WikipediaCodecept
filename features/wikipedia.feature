Feature: Wikipedia Search

    Background: Navigate to Wikipedia
        Given Estoy en la pagina principal de Wikipedia

    @test
    Scenario: Busqueda exitosa de un termino existente
        When Selecciono "Español" como idioma
        And Ingreso "Python" en el campo de búsqueda
        Then Se muestra la página de resultados relacionada con "Python"

    Scenario: Busqueda fallida de un termino inexistente
        When Selecciono "Español" como idioma
        And Ingreso "xxyyzzinvalidterm" en el campo de búsqueda
        Then No se encontraron resultados relacionados

    Scenario Outline: Cambio de idioma muestra el mensaje de bienvenida correspondiente
        When Selecciono "<idioma>" como idioma
        Then Se muestra el mensaje de bienvenida correspondiente en "<idioma>"
        Examples:
            | idioma    |
            | Español   |
            | Ingles    |
            | Japones   |
            | Ruso      |
            | Aleman    |
            | Frances   |
            | Chino     |
            | Portugues |
            | Italiano  |
            | Polaco    |

    Scenario Outline: Verificar sección especifica en articulo existente
        When Selecciono "Español" como idioma
        And Ingreso "Python" en el campo de búsqueda
        Then Verifico que la sección "<seccion>" está presente

        Examples:
            | seccion         |
            | Referencias     |

    Scenario: Verificar enlaces internos en un artículo existente
        When Selecciono "Español" como idioma
        And Ingreso "Python" en el campo de búsqueda
        Then Obtengo todos los enlaces internos
        And Verifico que los enlaces internos son válidos