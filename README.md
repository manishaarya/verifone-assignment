# VerifoneAssignment

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.1.

##  Installing Dependencies

Run `npm install` to install the required dependencies
## Development server

Run `ng run start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Features Implementes
Dashboard Page
- Search Functionality with Debounce. The results will be fetched live from unsplash API call. Till the time API fetched results a loader will be shown.
- Responsive Catalog View on Search
- Message state if the Data is not Found
- On Hover of catalog
  - Author image and name will be visible. On click of Image,  User will redirected to Author profile page in a separate tab.
  - A heart icon will be visible with functionalities > Create collection button and List of existing collection
    - On Click of Heart icon > A modal will open with a button to create a new collection and list of existing wishlist.
      - On Click of Create collection
            - A template driven form will open up : 
              - The form will have two fields title and description which are mandatory fields without which the a new collection cant be created. The form has validations for required fields.
              - On click of create button > A new and unique collection will be created and will be stored in ngrx/store
      - On Click of wishlist item > The image will be added to that collection and the icon will be changed from add icon to wishlisted icon.

WishList Page
- Message display if there  are no wishlists
- Display of all the wishlist in the form of cards dipslaying > Title, Description and the images added to that collection 
- Title and Description are editable. Editing with empty strings not allowed.
- On Click of image the image will be downloaded.





      
