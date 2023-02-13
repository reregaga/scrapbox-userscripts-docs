---
description: Scrapbox API Endpoints
tags:
  - API
hide:
  navigation
---

# API Endpoints

## `/api/pages/PROJECTNAME`

```
https://scrapbox.io/api/pages/foobar-project
```

### `/TITLE`

```
https://scrapbox.io/api/pages/foobar-project/barbaz
```

## `/api/projects`

```
https://scrapbox.io/api/projects
```

**Return value**

List of projects.

### `/PROJECTNAME`

```
https://scrapbox.io/api/projects/foobar-project
```

**Parameters**

Value | Description |
---|---
`?limit=42` | Pages limit.

**Return value**

Project information and list of pages.

## `/api/users/me`

```
https://scrapbox.io/api/users/me
```

**Return value**

Information about your user page.