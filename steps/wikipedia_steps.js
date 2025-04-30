const Wiki_main_page = require('../pages/Wiki_main_page');

const context = require('../utils/context');

Given('Estoy en la pagina principal de Wikipedia', async () => {
    Wiki_main_page.open();
});

When('Selecciono {string} como idioma', async (idioma) => {
    Wiki_main_page.selectLanguage(idioma);
});
When('Ingreso {string} en el campo de búsqueda', async (texto) => {
    Wiki_main_page.fillSearchField(texto);
});

Then('Se muestra la página de resultados relacionada con {string}', async (texto) => {
    Wiki_main_page.validateSearchResults(texto);
});

Then("No se encontraron resultados relacionados", async () => {
    Wiki_main_page.validateNoResults();
});

Then('Se muestra el mensaje de bienvenida correspondiente en {string}', async (idioma) => {
    await Wiki_main_page.validateWelcomeMessage(idioma);
});

Then('Verifico que la sección {string} está presente', async (seccion) => {
    await Wiki_main_page.validateSection(seccion);
});

Then('Obtengo todos los enlaces internos', async () => {
    const links = await Wiki_main_page.getAllInternalLinks();
    context.internal_links = links;
});

Then('Verifico que los enlaces internos son válidos', async () => {
    await Wiki_main_page.validateInternalLinks(context.internal_links);
});