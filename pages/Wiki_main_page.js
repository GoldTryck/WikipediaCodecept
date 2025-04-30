const { I } = inject();
const axios = require("axios");
class Wiki_main_page {
  constructor() {
    this.fields = {
      lang_es: "#js-link-box-es",
      lang_en: "#js-link-box-en",
      lang_ja: "#js-link-box-ja",
      lang_ru: "#js-link-box-ru",
      lang_de: "#js-link-box-de",
      lang_fr: "#js-link-box-fr",
      lang_zh: "#js-link-box-zh",
      lang_it: "#js-link-box-it",
      lang_pt: "#js-link-box-pt",
      lang_pl: "#js-link-box-pl",
      search_input: "#searchInput",
      result_title: "//h1/span[@class='mw-page-title-main']",
      none_found: "p.mw-search-nonefound",
      welcome_es: "//a[@title='Wikipedia:Bienvenidos']",
      welcome_en: "#Welcome_to_Wikipedia",
      welcome_ja: "//a[@title='Wikipedia:ウィキペディアについて']",
      welcome_ru: "h1.main-top-header",
      welcome_de: "#Willkommen_bei_Wikipedia",
      welcome_fr: "//h1[@id='firstHeading']",
      welcome_zh: "//a[@title='Wikipedia:关于']",
      welcome_it: "//a[@title='Aiuto:Benvenuto']",
      welcome_pt: "//a[@title='Wikipédia:Boas-vindas']",
      welcome_pl: "//div[@id='main-page-welcome']",
      content: "#content",
      sections:
        "//*[contains(@class, 'mw-heading') and contains(@class, 'mw-heading2')]//h2",
      internal_refs:
        "//div[@id='bodyContent']//a[starts-with(@href, '/wiki/')]",
    };
  }

  async open() {
    I.amOnPage("/");
    I.wait(2);
    I.say("Abriendo la pagina principal de Wikipedia");
    I.waitForElement(this.fields.lang_es, 10);
  }

  async selectLanguage(language) {
    switch (language) {
      case "Español":
        I.waitForElement(this.fields.lang_es, 10);
        I.click(this.fields.lang_es);
        I.say("Seleccionando Español", "green");
        break;
      case "Ingles":
        I.waitForElement(this.fields.lang_en, 10);
        I.say("Seleccionando Ingles", "green");
        I.click(this.fields.lang_en);
        break;
      case "Japones":
        I.waitForElement(this.fields.lang_ja, 10);
        I.say("Seleccionando Japones", "green");
        I.click(this.fields.lang_ja);
        break;
      case "Ruso":
        I.waitForElement(this.fields.lang_ru, 10);
        I.say("Seleccionando Ruso", "green");
        I.click(this.fields.lang_ru);
        break;
      case "Aleman":
        I.waitForElement(this.fields.lang_de, 10);
        I.say("Seleccionando Aleman", "green");
        I.click(this.fields.lang_de);
        break;
      case "Frances":
        I.waitForElement(this.fields.lang_fr, 10);
        I.say("Seleccionando Frances", "green");
        I.click(this.fields.lang_fr);
        break;
      case "Chino":
        I.waitForElement(this.fields.lang_zh, 10);
        I.say("Seleccionando Chino", "green");
        I.click(this.fields.lang_zh);
        break;
      case "Italiano":
        I.waitForElement(this.fields.lang_it, 10);
        I.say("Seleccionando Italiano", "green");
        I.click(this.fields.lang_it);
        break;
      case "Portugues":
        I.waitForElement(this.fields.lang_pt, 10);
        I.say("Seleccionando Portugues", "green");
        I.click(this.fields.lang_pt);
        break;
      case "Polaco":
        I.waitForElement(this.fields.lang_pl, 10);
        I.say("Seleccionando Polaco", "green");
        I.click(this.fields.lang_pl);
        break;
      default:
        throw new Error("Language not supported");
    }
  }

  async fillSearchField(text) {
    I.waitForElement(this.fields.search_input, 10);
    I.fillField(this.fields.search_input, text);
    I.pressKey("Enter");
  }

  async validateSearchResults(text) {
    I.waitForElement(this.fields.result_title, 10);
    I.see(text, this.fields.result_title);
    I.say(
      `Validando que el resultado de la busqueda contenga: ${text}`,
      "green"
    );
  }
  async validateNoResults() {
    I.waitForElement(this.fields.none_found, 10);
    I.see(
      "No hay resultados que cumplan los criterios de búsqueda.",
      this.fields.none_found
    );
    I.say("No se encontraron resultados relacionados", "green");
  }

  async validateWelcomeMessage(language) {
    I.waitForElement(this.fields.content, 10);
    I.say(`Validando el mensaje de bienvenida en ${language}`, "white");
    switch (language) {
      case "Español":
        I.see("Bienvenidos", this.fields.welcome_es);
        break;
      case "Ingles":
        I.see("Welcome to ", this.fields.welcome_en);
        break;
      case "Japones":
        I.see("ウィキペディア", this.fields.welcome_ja);
        break;
      case "Ruso":
        I.see("Добро пожаловать в ", this.fields.welcome_ru);
        break;
      case "Aleman":
        I.see("Willkommen bei Wikipedia", this.fields.welcome_de);
        break;
      case "Frances":
        I.see("Bienvenue sur Wikipédia", this.fields.welcome_fr);
        break;
      case "Chino":
        I.see("维基百科", this.fields.welcome_zh);
        break;
      case "Italiano":
        I.see("Benvenuti", this.fields.welcome_it);
        break;
      case "Portugues":
        I.see("Boas-vindas", this.fields.welcome_pt);
        break;
      case "Polaco":
        I.see("Witaj w ", this.fields.welcome_pl);
        break;
      default:
        throw new Error("Language not supported");
    }
  }

  async validateSection(section) {
    I.waitForElement(this.fields.content, 10);
    I.say(`Validando la sección ${section}`, "white");
    const sects = await I.grabAttributeFromAll(
      this.fields.sections, "id");

    switch (section) {
      case "Referencias":
        if(sects.find((sect) => sect.includes("Referencias"))) {
          I.say("La sección Referencias está presente", "green");
        }else {
          throw new Error("La sección Referencias no está presente");
        }
        break;
      default:
        throw new Error("Section not supported");
    }
  }

  async getAllInternalLinks() {
    I.waitForElement(this.fields.content, 10);
    I.waitForElement(this.fields.internal_refs, 10);
    const links = await I.grabAttributeFromAll(this.fields.internal_refs, "href");
    I.say("Obteniendo todos los enlaces internos", "green");
    return links;
  }

  async validateInternalLinks(links) {
    const baseUrl = "https://es.wikipedia.org";
    I.say("Validando los enlaces internos", "white");

    for (const link of links) {
      const url = baseUrl + link;
      try {
        const res = await axios.head(url);
        if (res.status !== 200) {
          throw new Error(
            `El enlace ${url} no es válido. Status: ${res.status}`
          );
        }
        I.say(`El enlace ${url} es válido. Status: ${res.status}`, "green");
      } catch (error) {
        throw new Error(`Error accediendo: ${url}. Error: ${error.message}`);
      }
    }
  }
}

module.exports = new Wiki_main_page();