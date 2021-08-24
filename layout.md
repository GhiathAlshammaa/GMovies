├── src
│ ├── app
│ │ ├── admin
│ │ │ ├── guard
│ │ │ │ ├── auth-login.guard.ts
│ │ │ │ ├── auth-verified-email.guard.ts
│ │ │ │ ├── index.ts
│ │ │ ├── pages
│ │ │ │ ├── auth
│ │ │ │ │ ├── forget-password
│ │ │ │ │ ├── sign-in
│ │ │ │ │ ├── sign-up
│ │ │ │ │ ├── verify-email
│ │ │ │ │ ├── auth-routing.module.ts
│ │ │ │ │ ├── auth-style.scss
│ │ │ │ │ ├── auth.module.ts
│ │ │ │ │ ├── index.ts
│ │ │ │ ├── components
│ │ │ │ │ ├── list-page
│ │ │ │ │ │ ├── add
│ │ │ │ │ │ │ ├── add-list component
│ │ │ │ │ │ ├── edit
│ │ │ │ │ │ │ ├── edit-list component
│ │ │ │ │ │ ├── list
│ │ │ │ │ │ │ ├── list component
│ │ │ │ │ │ ├── list
│ │ │ │ │ │ ├── shared
│ │ │ │ │ ├── admin-components.module.ts
│ │ │ │ │ ├── index.ts
│ │ │ │ ├── dashboard
│ │ │ │ │ │ ├── pages
│ │ │ │ │ │ │ ├── dashboard-page component
│ │ │ │ │ │ │ ├── list-page component
│ │ │ │ │ │ │ ├── user-profile-page component
│ │ │ │ │ │ ├── dashboard-routing.module.ts
│ │ │ │ │ │ ├── dashboard.module.ts
│ │ │ ├── admin-routing.module.ts
│ │ │ ├── admin.module
│ │ │ ├── index.ts

│ │ ├── core
│ │ │ ├── models
│ │ │ │ ├── actor.ts
│ │ │ │ ├── category.ts
│ │ │ │ ├── country.ts
│ │ │ │ ├── genres.ts
│ │ │ │ ├── language.ts
│ │ │ │ ├── list.ts
│ │ │ │ ├── movie.ts
│ │ │ │ ├── staff.ts
│ │ │ │ ├── stream.ts
│ │ │ │ ├── user.ts
│ │ │ │ ├── video.ts
│ │ │ │ ├── index.ts
│ │ │ ├── Utils
│ │ │ │ ├── country.ts
│ │ │ │ ├── data.ts
│ │ │ │ ├── date.ts
│ │ │ │ ├── error.ts
│ │ │ │ ├── url.ts
│ │ │ │ ├── replace-underscore.pipe.ts
│ │ │ │ ├── safe.pipe.ts
│ │ │ │ ├── index.ts
│ │ │ ├── services
│ │ │ │ ├── dashboard.service.ts
│ │ │ │ ├── movie.service.ts
│ │ │ │ ├── movies.service.ts
│ │ │ │ ├── staff.service.ts
│ │ │ │ ├── streaming.service.ts
│ │ │ │ ├── navigation.service.ts
│ │ │ │ ├── index.ts
│ │ │ ├── core.module.ts
│ │ │ ├── index.ts

│ │ ├── material
│ │ │ ├── material.mdoule.ts

│ │ ├── movies
│ │ │ ├── pages
│ │ │ │ ├── movieslist
│ │ │ │ │ ├── movieslist.component.ts
│ │ │ │ │ ├── movieslist.component.html
│ │ │ ├── movies.routing.module.ts
│ │ │ ├── movies.module.ts
│ │ │ ├── index.ts

│ │ ├── main-pages
│ │ │ ├── Home
│ │ │ │ ├── home.component.ts
│ │ │ │ ├── home.component.html
│ │ │ ├── PageNotFound
│ │ │ │ ├── PageNotFound.component.ts
│ │ │ │ ├── PageNotFound.component.html
│ │ │ ├── pages.module.ts
│ │ │ ├── index.ts

│ │ ├── shared
│ │ │ ├── components
│ │ │ │ ├── movie component
│ │ │ │ ├── movies-slider component
│ │ │ │ ├── index
│ │ │ ├── directive
│ │ │ │ ├── back-button-directive.ts
│ │ │ │ ├── index.ts
│ │ │ ├── layout
│ │ │ │ ├── layout.module.ts
│ │ │ │ ├── footer
│ │ │ │ │ ├── footer.component.ts
│ │ │ │ │ ├── footer.component.html
│ │ │ │ ├── header
│ │ │ │ │ ├── header.component.ts
│ │ │ │ │ ├── header.component.html
│ │ │ │ ├── service
│ │ │ │ │ ├── auth-service.ts
│ │ │ ├── index.ts
│ │ │ ├── shared.module.ts

│ │ ├── state
│ │ │ ├── app.state.ts

│ ├── app-routing.module.ts  
│ ├── app.component.html
│ ├── app.component.scss
│ ├── app.component.ts
│ ├── app.module.ts
│ ├── selective-strategy.service.ts

│ │ ├── environments
│ │ │ ├── environment.dev.ts
│ │ │ ├── environment.prod.ts
│ │ │ ├── environment.ts
