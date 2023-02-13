/*
Source:
https://zenn.dev/be_the_light/articles/d4d5c34bc7db80
*/

scrapbox.PopupMenu.addButton({
  title: '📕',
  onClick: text => text.split('\n').map(line => `[! ${line}]`).join('\n')
})

scrapbox.PopupMenu.addButton({
  title: '📙',
  onClick: text => text.split('\n').map(line => `[" ${line}]`).join('\n')
})

scrapbox.PopupMenu.addButton({
  title: '📘',
  onClick: text => text.split('\n').map(line => `[# ${line}]`).join('\n')
})

scrapbox.PopupMenu.addButton({
  title: '🌈',
  onClick: text => text.split('\n').map(line => `[% ${line}]`).join('\n')
})

scrapbox.PopupMenu.addButton({
  title: '4️⃣',
  onClick: text => text.split('\n').map(line => `[**** ${line}]`).join('\n')
})

scrapbox.PopupMenu.addButton({
  title: '3️⃣',
  onClick: text => text.split('\n').map(line => `[*** ${line}]`).join('\n')
})

scrapbox.PopupMenu.addButton({
  title: '2️⃣',
  onClick: text => text.split('\n').map(line => `[** ${line}]`).join('\n')
})

scrapbox.PopupMenu.addButton({
  title: '1️⃣',
  onClick: text => text.split('\n').map(line => `[* ${line}]`).join('\n')
})
