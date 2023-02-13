/*
Source:
https://gist.github.com/kdmsnr/94d2c1c4efa877de915cbb42f7b8cfea
*/

 scrapbox.PopupMenu.addButton({
   title: 'code',
   onClick: text => {
     return 'code:script\n' + text.split(/\n/).map(line => '\t' + line).join('\n');
   }
 });
 scrapbox.PopupMenu.addButton({
    title: 'table',
    onClick: text => {
      return 'table:table\n' + 
      	text.split(/\n/).map(line => '\t' + line.split(/,/).join("\t") ).join('\n');
    }
 });
