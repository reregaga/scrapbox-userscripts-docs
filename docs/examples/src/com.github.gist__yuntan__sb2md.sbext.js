/*
Source:
https://gist.github.com/yuntan/63ffb2f23a46d9ed32f19fcae340ed0c

Note:

    Scrapbox -&gt; Markdown (Scrapbox extension)
  
*/

scrapbox.PopupMenu.addButton({
  title: 'Copy markdown',
  onClick: sb2md,
});


scrapbox.PageMenu.addItem({
  title: 'Copy this page as markdown',
  onClick: () => {
    const text = scrapbox.Page.lines.map(l => l.text).join('\n');
    copyText(sb2md(text));
  },
});


function sb2md(text) {
  // code block
  const escapeCodeBlocks = s => s.replace(
    /^code:(.+)$((\n^[ \t].*$)+)/mg,
    (_, p1, p2) =>
      '```' + p1 + p2.replace(/^[ \t]/mg, '').replace(/\r|\n|\r\n/g, '+++') + '+++```'
  );


  const unescapeCodeBlocks = s => s.replace(/\+{3}/g, '\n');


  const replaceLine = line =>
    /^`{3}/.test(line) ? line :
      // level 2 heading
      line.replace(/^\[\[([^\[\]]+)\]\]$/, '## $1')
      .replace(/^\[\*\s+(\S[^\[\]]*)\]$/, '## $1')


      // anchor link
      .replace(/\[(https?:\/\/[^ \[\]]+) +([^\[\]]+)\]/g, '[$2]($1)')
      .replace(/\[ *(((?!http)[^ \[\]]+ +)*(?!http)[^ \[\]]+) +(https?:\/\/[^ \[\]]+)\]/g, '[$1]($3)')


      // image block
      .replace(/^\[(https?:\/\/\S+\.(png|gif|jpe?g))\]$/, '![]($1)')
      .replace(/^\[(https:\/\/gyazo.com\/\S+)\]$/, '![]($1.png)')


      // unordered list
      .replace(/^\s(\S.*)$/, '- $1')
      .replace(/^\s{2}(\S.*)$/, '  - $1')
      .replace(/^\s{3}(\S.*)$/, '    - $1')


      // bold text
      .replace(/\[\[([^\[\]]+)\]\]/g, '**$1**')
      .replace(/\[\*\s+([^\[\]]+)\]/g, '**$1**')


      // italic text
      .replace(/\[\/\s+([^\[\]]+)\]/g, '*$1*')
  
      // strike text
      .replace(/\[- +([^\[\]]+)\]/g, '~~$1~~');


  // return text
  //   .then(escapeCodeBlocks)
  //   .split(/\r|\n|\r\n/)
  //   // first line is level 1 heading
  //   .then(lines => [lines[0].replace(/^(.+)$/, '# $1')].concat(lines.slice(1)))
  //   .map(replaceLine)
  //   .join('\n')
  //   .then(unescapeCodeBlocks);


  text = escapeCodeBlocks(text)
    .split(/\r|\n|\r\n/);
  // first line is level 1 heading
  text = (lines => [lines[0].replace(/^(.+)$/, '# $1')].concat(lines.slice(1)))(text)
    .map(replaceLine)
    .join('\n');
  return unescapeCodeBlocks(text);
}


function copyText(text) {
  const pre = document.createElement('pre');
  pre.innerText = text;


  document.body.appendChild(pre);
  document.getSelection().selectAllChildren(pre);
  document.execCommand('copy');
  document.body.removeChild(pre);
}
