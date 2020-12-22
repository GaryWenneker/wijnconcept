# tabbed-feed



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute    | Description | Type          | Default      |
| -------------- | ------------ | ----------- | ------------- | ------------ |
| `activeTag`    | `active-tag` |             | `string`      | `undefined`  |
| `clearTag`     | --           |             | `() => void`  | `undefined`  |
| `isProfile`    | `is-profile` |             | `boolean`     | `undefined`  |
| `possibleTabs` | --           |             | `TTabTypes[]` | `['global']` |
| `profile`      | --           |             | `IProfile`    | `undefined`  |
| `user`         | --           |             | `IUser`       | `undefined`  |


## Dependencies

### Used by

 - [home-page](../routes/home)
 - [profile-page](../routes/profile)

### Depends on

- [loading-spinner](.)
- [article-list](.)

### Graph
```mermaid
graph TD;
  tabbed-feed --> loading-spinner
  tabbed-feed --> article-list
  article-list --> error-display
  article-list --> stencil-route-link
  home-page --> tabbed-feed
  profile-page --> tabbed-feed
  style tabbed-feed fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
