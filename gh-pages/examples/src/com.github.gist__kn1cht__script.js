/*
Source:
https://gist.github.com/kn1cht/911ca1e4c3e92c636a603dce940eae99

Note:

    embed-tweet
  
*/

scrapbox.PopupMenu.addButton({
  title : 'Embed Tweet',
  onClick : text => {
    const convertContent = (content, indent) => {
      const replaced = content
        .replace(/<a href="(https?:.*?)">(.*?)<\/a>/g, '[$1 $2]')
        .replace(/<br>/g, `\n${indent}`);
      const elem = document.createElement('div');
      elem.innerHTML = replaced;
      return indent + elem.innerText;
    }
    const tweetRegex = /(?<spaces>[\t ]*)<blockquote[\w"\-= ]*><p[\w"\-= ]*>(?<content>.*)<\/p>&mdash;(?<author>.*)(?<link><a.*>)<\/blockquote>[\n\t ]*<script.*?><\/script>/;
    const match = text.match(tweetRegex);
    if(!match) return;
    const {spaces, content, author, link} = match.groups;
    const ind = `${spaces}>`;
    return text.replace(tweetRegex, convertContent(content, ind) + '\n' + convertContent(`\t—${author} ${link}`, ind));
  }
})
