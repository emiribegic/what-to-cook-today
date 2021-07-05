# What To Cook Today

<img src="https://github.com/emiribegic/what-to-cook-today/blob/main/demo/recipe_demo.gif" alt="What To Cook Today" width="700px">
For demo, please visit at https://what-to-cook-today.herokuapp.com/

## Description

What To Cook Today is a simple single-page web application that allows users to search through web recipes.
Each successful search creates up to 100 recipe cards and displays them with calories, cooking time (if available), publisher of recipes, and health labels on page 10 each.
<br>
Inspired by Jonas Schmedtmann's Udemy course, partly cloned to practice ES6 Classes.

## Technologies Used

-   JavaScript
-   Node.js / Express.js
-   [Humanize Duration](https://github.com/EvanHahn/HumanizeDuration.js)
-   Webpack
-   HTML / SCSS
-   Workbox
-   [EDAMAM Recipe Search API](https://developer.edamam.com/edamam-docs-recipe-api)

## Getting Started

### Prerequisites

Make sure Node and npm are installed from the terminal

```bash
$ node -v
$ npm -v
```

---

### Installation

1. Fork this repo into your own GitHub

2. Clone the repo to your local machine

```bash
# Change to the desired directory
$ cd <desired-directory>

# Clone the repo
$ git clone https://github.com/emiribegic/what-to-cook-today.git

# Change to the project directory
$ cd what-to-cook-today
```

3. Install dependencies

```bash
$ npm install
```

4. **_(Optional)_** Change the port number for DevServer and its proxy setting

```javascript
// In webpack.dev.js
module.exports = {
	devServer: {
		host: 'localhost',
		port: 9000, // Change if needed
		proxy: {
			context: () => true,
			target: 'http://localhost:8083', // Change if needed
			secure: false,
		},
	},
```

**_If you change proxy setting, make sure to change the port in src/server/index.js_**

```javascript
// In index.js
const port = process.env.PORT || 8083; // Change if needed
```

5. Sign up for API keys at:

-   [EDAMAM Recipe Search API](https://developer.edamam.com/edamam-docs-recipe-api)
    **_I use free version_**

6. Configure environment variables using dotenv package
    1. Install the dotenv package
    ```bash
    npm install dotenv
    ```
    2. Create a new `.env` file in the root of your project
    3. Fill the `.env` file with your API keys like this:
    ```bash
    API_ID=************
    API_KEY=**************************
    ```
7. Start the project

|    Command     |    Action     |
| :------------: | :-----------: |
| `npm run prod` | Build project |
|  `npm start`   |  Run project  |
| `npm run dev`  | Run DevServer |

8. Run the app in development mode at http://localhost:9000/, in production mode at http://localhost:8083/
   <br>
   **_Port will be varied if you change it at step 4_**

## Error handling

-   Set timeout error when a search takes more than 10 seconds to complete.
-   If no recipes are returned for the user-entered keyword by the EDAMAM API, the user will be informed by the error message to search again.
