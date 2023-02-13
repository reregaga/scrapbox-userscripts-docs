/*
Source:
https://gist.github.com/tomowarkar/e6ef04f9393cb036e473755842f23be0
*/

(() => {
  class SearchEngine {
    constructor(text, engine) {
      this.text = text;
      this.engine = engine;
    }
    static search(text, engine) {
      window.open(new SearchEngine(text, engine).url);
    }
    get url() {
      switch (this.engine) {
        case "Wikipedia":
          return `https://ja.wikipedia.org/wiki/Special:Search/${this.text}`;
        case "Google":
          return `https://www.google.co.jp/search?q=${this.text}`;
        case "YouTube":
          return `https://www.youtube.com/results?search_query=${this.text}`;
        default:
          return `https://scrapbox.io/${scrapbox.Project.name}/search/page?q=${this.text}`;
      }
    }
    static getEngines() {
      return ["Wikipedia", "Google", "YouTube", "Scrapbox"];
    }
  }


  const addSearchPageMenu = (tag) => {
    scrapbox.PageMenu.addMenu({
      title: tag,
      image: "https://gyazo.com/d555df399d7924d8fdd2b4fdcf78f270.raw",
    });
    for (const e of SearchEngine.getEngines()) {
      scrapbox.PageMenu(tag).addItem({
        title: `Search ${e} for "${scrapbox.Page.title}"`,
        onClick: () => SearchEngine.search(scrapbox.Page.title, e),
      });
      scrapbox.PageMenu(tag).addSeparator();
    }
  };
  const addGoogleBtn = () => {
    scrapbox.PopupMenu.addButton({
      title: "Google it!",
      onClick: (text) => SearchEngine.search(text, "Google"),
    });
  };


  addSearchPageMenu("検索");
  addGoogleBtn();
})();
