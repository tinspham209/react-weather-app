# Mini Project: Weather Application

## Date: 22 - Jan - 2020

### Functions

- A simple React weather app that displays weather information & Forecast 5 days
- Drag'n'Drop Forecast

### Screenshot

<img src="https://i.imgur.com/taskkve.png" />

### Tech-Stack
- React Hook
- axios
- react-dnd
- redux
- react-redux
- redux-thunk

### API Used

https://openweathermap.org/

### Deploy

https://quay189.github.io/react-weather-app/

### Plan Of Action
- Add useHttpErrorHandler
- Add Backdrop component
- Add Modal component
- Add Navigation component
- Add Weather component
- Add About component
- Add Search component
- Add Toolbar component
- update AppLayout with withErrorHandler
- remove padding-top of Search Component
- Update About component with Modal
- Update Search component
- Add function updatedObject
- Redux setup
- Refactor code with React Hooks
- Refactor code with Redux Hooks
- React DnD setup
- Add react-dnd to Forecast

### After this project
I have understand about
- Fetch API
- Study React & Hooks
- Study Redux & Hooks
- Study react-dnd

### Directory Structure
```
.
├── .gitignore
├── package.json
├── README.md
├── config
├── public
├── scripts
└── src
    ├── assets
    ├── components
        ├── About
            ├── Modal
        ├── Layout
            ├── Forecast
                ├── ForecastPerDay
            ├── Search
            ├── Weather
        ├── Logo
        ├── Navigation
            ├── NavigationItems
                ├── NavigationItemLink
                ├── NavigationParagraph
            ├── Toolbar
        ├── UI
            ├── Backdrop
            ├── Input
            ├── Modal
            ├── Spinner
    ├── container
        ├── AppLayout
    ├── database
        ├── icons.json
        ├── recommendations.json
    ├── hoc
        ├── Layout
        ├── withErrorHandler
    ├── hooks
    ├── shared
    ├── store
        ├── actions
        ├── reducers
    ├── axios-order.js
    ├── App.js
    ├── index.css
    └── index.js
``` 
### Set up
Use the cmd line to clone repo to your computer
```
git clone [github_repo_url]
```
Use the cmd line to install dependencies.
```
npm install
```
Run in cmd for start the dependencies server
```
npm start
```
