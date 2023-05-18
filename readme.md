[![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)](https://stenciljs.com)

# Stencil Spike/Demo

This is a sample project to demonstrate Stencil's utility.

## Using this component

The following examples are consuming the (temporarily) deployed app at https://agartee-stenciljs.azurewebsites.net. To host the application locally (as a production build), you can run the following commands after cloning the repository:

```bash
npm install
npm build
cd dist
npx serve --cors
```



### Plain HTML example

Here we are adding the web component to a plain HTML file.

**index.html**

```html
<html>
    <head>
        <title>Yet Another Website</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0" />
        <script type='module' src='https://agartee-stenciljs.azurewebsites.net/esm/spike.js'></script>
        <style>
            h1 {
                text-decoration: underline;
            }
        </style>
    </head>

    <body>
        <h1>This is the hosting app</h1>
        <p>notice that my heading is not the same color as the web component's...</p>

        <my-component id="myComponent" first="Adam" last="Gartee"></my-component>

        <script>
            function createMetaObject() {
                const meta = {
                favoriteColor: 'blue'
                };
        
                return meta;
            }
        
            window.onload = function() {
                const component = document.getElementById('myComponent');
                component.meta = createMetaObject();
            }
        </script>
        
    </body>

</html>
```

### React example

Here is an example of the web component's script being added to `index.html` and the component itself being used in a React component called `Home`.

**public/index.html**

```html
<html>
    <head>
        ...
        <script type='module' src='https://agartee-stenciljs.azurewebsites.net/esm/spike.js'></script>
        ...
    </head>

    <body>
        ...
    </body>

</html>
```

**src/components/home.js**

```jsx
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import styles from './home.module.css';

function Home() {
  const myComponentRef = useRef();
  const firstName = "Adam";
  const lastName = "Gartee";
  const meta = {
    favoriteColor: 'blue'
  };

  useEffect(() => {
    if (myComponentRef.current) {
      myComponentRef.current.meta = meta;
    }
  });

  return (
    <div className={styles.container}>
      <h1>Home</h1>
        <my-component ref={myComponentRef} first={firstName} last={lastName}></my-component>
    </div>
  );
}

export default Home;

```
