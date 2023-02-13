/*
Source:
https://gist.github.com/Wintus/dd8f8568cd8c763eefb65f922604bdf4

Note:

    Scrapbox User Script
  
*/

const behavior = "smooth";


scrapbox.PageMenu.addItem({
  title: "Scroll to Top",
  onClick: () => window.scrollTo({top: 0, behavior})
});


scrapbox.PageMenu.addItem({
  title: "Scroll to Bottom",
  onClick: () => {
    const editor = $("#editor");
    const top = editor.offset().top + editor.outerHeight(true);
    window.scrollTo({top, behavior});
  }
});
