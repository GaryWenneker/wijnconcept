# profile-page



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description | Type           | Default     |
| -------- | --------- | ----------- | -------------- | ----------- |
| `match`  | --        |             | `MatchResults` | `undefined` |
| `user`   | --        |             | `IUser`        | `undefined` |


## Dependencies

### Depends on

- [loading-spinner](../../components)
- [error-display](../../components)
- [not-found](../../components)
- [tabbed-feed](../../components)

### Graph
```mermaid
graph TD;
  profile-page --> loading-spinner
  profile-page --> error-display
  profile-page --> not-found
  profile-page --> tabbed-feed
  tabbed-feed --> loading-spinner
  tabbed-feed --> article-list
  article-list --> error-display
  article-list --> stencil-route-link
  style profile-page fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
