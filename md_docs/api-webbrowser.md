---
description: Scrapbox in-browser API
tags:
  - API
  - JavaScript
hide:
  navigation
---

# API

```js
window.scrapbox
```

## Layout

```js
scrapbox.Layout
// "page"
```

**Return value**

Type | Value | Description
---|---|---
`string` | `page` | If on page `https://scrapbox.io/PROJECTNAME`.
| `list` | If on page `https://scrapbox.io/PROJECTNAME/PAGENAME`.

## Page

```js
scrapbox.Page
/* {
 *   id: "01234567890123456789abcd",
 *   lines: [...],
 *   title: "Bar baz"
 * } 
 */
```

**Return value**

Type | Value | Description
---|---|---
`object` | `{ id: string, lines: array, title: string }` | Subj.


### `id`

```js
scrapbox.Page.id
// "01234567890123456789abcd"
```

**Return value**

Type | Value | Description
---|---|---
`string` | Text in range `#!js /[a-f0-9]{24}/` | Unique for page.

### `lines[]`

```js
scrapbox.Page.lines
/* [
 *   {
 *     created: 1612345678,
 *     id: "01234567890123456789abcd",
 *     ...
 *   },
 *   { ... },
 *   ...
 * ]
 */
```

**Return value**

Type | Value | Description
---|---|---
`array` | `[ { created: number, ... }, ... ]` | Array of lines on the page.

#### `created`

```js
scrapbox.Page.lines[0].created
// 1612345678
```

**Return value**

Type | Value | Description
---|---|---
`number` | e.g. `1612345678` | Unix timestamp.

#### `id`

**Return value**

Type | Value | Description
---|---|---
`string` | Text in range `#!js /[a-f0-9]{24}/` | Unique for line.

#### `? nodes[]|{}|""`

Optional.

**Return value**

One of these:

=== "`array`"

    Type | Value | Description
    ---|---|---
    `array` | e.g. `[ {children: string, type: string, unit: {content: string, whole: string, ? page: string, ? size: number, ? deco: string, ? italic: boolean, ? strike: boolean, ? strong: number, ? underline: boolean} } ]` |
    | e.g. `[ string ]` |

=== "`object`"
    
    Type | Value | Description
    ---|---|---
    `object` | e.g. `{? fileId: undefined, children: string, type: string, unit: {? tag: string, content: string, whole: string } }` |

=== "`string`"
    
    Type | Value | Description
    ---|---|---
    `string` | e.g. `Just text..` | Text from line

#### `section{}`

**Return value[^1]**

Type | Value | Description
---|---|---
`object` | e.g. `{ number: number, end: boolean, start: boolean}` |

#### `? codeBlock{}`

Optional.

**Return value**

Type | Value | Description
---|---|---
`object` | e.g. `{filename: string, indent: number, lang: string, start: bool, end: bool }` | If line is included in Code Block.

#### `? tableBlock{}`

Optional.

**Return value**

Type | Value | Description
---|---|---
`object` | e.g. `{title: string, indent: number, cells: array of strings, start: bool, end: bool }` | If line is included in Table Block.

#### `text`

**Return value**

Type | Value | Description
---|---|---
`string` | e.g. `"lorem [* ipsum] [https://example.com/favicon.ico]"` | Just text from a line, with tabulation if any.

#### `? title`

Optional.

**Return value**

Type | Value | Description
---|---|---
`string` | e.g. `Bar baz` | Title of current page.

#### `updated`

**Return value**

Type | Value | Description
---|---|---
`number` | e.g. `1612345678` | Unix timestamp.

#### `userId`

**Return value**

Type | Value | Description
---|---|---
`string` | Text in range `#!js /[a-f0-9]{24}/` | Unique for user.

## Project

```js
scrapbox.Project
/* {
 *   name: "foobar-project",
 *   pages: [ ... ]
 * }
 */
```

**Return value**

Type | Value | Description
---|---|---
`object` | `{ name: string, pages: array }` |

### `name`

```js
scrapbox.Project.name
// "foobar-project"
```

**Return value**

Type | Value | Description
---|---|---
`string` | `foobar-project` | Title of opened project, from browser's address bar. Unique for the entire Scrapbox, not just for user's namespace.

### `pages[]`

```js
scrapbox.Project.pages
/* [
 *   { 
 *     title: "Bar baz",
 *     ... 
 *   },
 *   ...,
 *   {
 *     exists: false,
 *     title: "new link",
 *     titleLc: "new_link",
 *     titleLengthForSort: 8,
 *     updated: 0
 *   }
 * ]
 */
```

**Return value**

Type | Value | Description
---|---|---
`array` | `[ { }, { }, ... ]` | Array of objects containing information about pages. Last object is "`new link`" object.

#### `exists`

```js
scrapbox.Project.pages[0].exists
// true
```

**Return value**

Type | Value | Description
---|---|---
`boolean` | `true` |
| `false` | For example for object with title `new link` (it is system object, visually hidden).

#### `? id`

Optional.

**Return value**

Type | Value | Description
---|---|---
`string` | Text in range `#!js /[a-f0-9]{24}/` | Unique for page. "`new link`" page doesn't have this.

#### `? image`

Optional.

**Return value**

Type | Value | Description
---|---|---
`string` | e.g. `https://gyazo.com/...` | URL to image, if image is on the page.
| `undefined` |

#### `title`

**Return value**

Type | Value | Description
---|---|---
`string` | e.g. `Bar baz` | Page title in page

#### `titleLc`

**Return value**

Type | Value | Description
---|---|---
`string` | e.g. `bar_baz` | Page title in address bar, lowercased.

#### `titleLengthForSort`

**Return value**

Type | Value | Description
---|---|---
`number` | e.g. `7` | Page title length.

#### `updated`

**Return value**

Type | Value | Description
---|---|---
`number` | e.g. `1612345678` | Unix timestamp.

## PageMenu

```js
scrapbox.PageMenu
```

### `length`

```js
scrapbox.PageMenu.length
// 1
```

**Return value[^1]**

Type | Value | Description
---|---|---
`string` | `1` |

### `name`

```js
scrapbox.PageMenu.name
// ""
```

**Return value[^1]**

Type | Value | Description
---|---|---
`string` | Empty |

### `addItem()`

=== "`PageMenu.addItem({ ... })`"

    ```js
    scrapbox.PageMenu.addItem({ ... })
    ```

    **Parameter**

    Type | Value | Description
    ---|---|---
    `object` | `{title: string, onClick: function}` | 

    **Return value**

    Method does not return anything.

=== "`PageMenu( ... ).addItem({ ... })`"

    ```js
    scrapbox.PageMenu(titleVar).addItem({ ... })
    ```
    
    **Parameter**

    Type | Value | Description
    ---|---|---
    `object` | `{title: string, onClick: function}` | 

    **Return value**

    Method does not return anything.

### `addMenu()`

```js
scrapbox.PageMenu.addMenu({
    title: "lorem-ipsum",
    image: ""
})
scrapbox.PageMenu("lorem-ipsum").addItem({
    title: "dolor sit",
    onClick: () => { ... }
})
```

**Parameter**

Type | Value | Description
---|---|---
`object` | `{title: '', ?image: 'URL', ?onClick: ()=>{} }` |

**Return value**

Method does not return anything.

### `addSeparator()`

```js
scrapbox.PageMenu("lorem-ipsum").addSeparator();
```

**Return value**

Method does not return anything.

### `removeAllItems()`

```js
scrapbox.PageMenu("lorem-ipsum").removeAllItems();
```

**Return value**

Method does not return anything.

## PopupMenu

### `addButton()`

```js
scrapbox.PopupMenu.addButton({
  title: "lorem ipsum",
  onClick: (text) => {
    console.log(text);
    return "lorem ipsum dolor sit amet";
  }
})
```

**Parameters**

Type | Value | Description
---|---|---
`object` | `{title: string, onClick: function}` | 

**Return value**

Method does not return anything.

## `on()`

```js
scrapbox.on(event, your_function)
```

**Parameters**

Type | Value | Description
---|---|---
Event | `"layout:changed"` | 
|`"lines:changed"` | 
`function` | e.g. `() => {}` | Callback.

## `off()`

```js
scrapbox.off()
```

**Parameters**[^1]

Type | Value | Description
---|---|---

## `once()`

```js
scrapbox.once()
```

**Parameters**[^1]

Type | Value | Description
---|---|---

## localStorage

### `? drawPenColors`

Optional.

```js
localStorage.drawPenColors
```

**Return value**

Type | Value | Description
---|---|---
`array` | `[]` | If **Drawing** tool was used.

### `emacsCutBuffer`

**Return value**

Type | Value | Description
---|---|---
`string` | `""` | 

### `hideCompanyNameChangeAlert`

**Return value[^1]**

Type | Value | Description
---|---|---
`boolean` | e.g. `true` |

### `lastProject`

**Return value[^1]**

Type | Value | Description
---|---|---
`string` | e.g. `"01234567890123456789abcd"` | Id of project.

### `? pageSorts`

Optional.

**Return value[^1]**

Type | Value | Description
---|---|---
`object` | e.g. `{"test":"linked", "foobar-project":"views"}` | If **Sort by** on the  project page is changed.

### `? pageTransitionContext`

Optional.

**Return value**

Type | Value | Description
---|---|---
`object` | `{}` | If the page on the project has been opened.

### `projectsLastAccessed`

**Return value**

Type | Value | Description
---|---|---
`object` | e.g. `{ "01234567890123456789abcd": 1612345678, ... }` | The list of projects. Updated every second.

### `? userScriptSHA1`

Optional.

**Return value**

Type | Value | Description
---|---|---
`object` | e.g. `{ "01234567890123456789abcd": "`SHA1`" }` | UserId and SHA1. If it was enabled User Script.

[^1]: Need clarification.