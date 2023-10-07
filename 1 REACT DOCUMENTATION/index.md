1. What is React?
   Ans: React is a JavaScript library created by Facebook. It specializes in helping developers build user interfaces, or UIs. The main concept of React.js is virtual DOM.


2. Who made React?
   Ans: React was created by Jordan Walke, a software engineer at Meta, who released an early prototype of React called "FaxJS". He was influenced by XHP, an HTML component library for PHP. It was first deployed on Facebook's News Feed in 2011 and later on Instagram in 2012. It was open-sourced at JSConf US in May 2013.


3. What is Babel?
   Ans: Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments.


4. How does Babel convert html code in React into valid code?
   Ans: Babel converts HTML code into valid code by using the JSX code and converter. A user can essentially use future JavaScript in the browsers of today thanks to Babel, a very well-known transpiler.


5. What is ReactDOM used for? Write an example?
Ans: ReactDOM is a package that provides DOM-specific methods that can be used at the top level of a web app to enable an efficient way of managing DOM elements of the web page. ReactDOM provides the developers with an API containing the various methods to manipulate DOM.
example:
            function setTimer() {
            const element1 = `
            <div>
                <h1>JavaScript DOM manipulation</h1>
                <input type="text" />
                <p>${new Date().toLocaleTimeString()}</p>
            </div>
            `;
            document.getElementById('container1').innerHTML = element1;
            );
            }
            setInterval(setTimer, 1000);


6. What are the packages that you need to import for react to work with?
Ans: To work with React, you typically need to import several packages and dependencies. React itself is a JavaScript library for building user interfaces, so you'll also need tools for bundling, transpiling JSX, managing state, and handling routing, among others, depending on your project's requirements. Here are some of the essential packages you might need to import:
    [i] React: You need the core React library to create and manage components.
        import React from 'react';
    [ii] React DOM: This package is used to render React components in the browser.
        import ReactDOM from 'react-dom';
    [iii] React Router (for routing): If your application requires client-side routing, you can use React Router.
        import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
    [iv] State Management (e.g., Redux, Mobx): Depending on the complexity of your application, you might need a state management library.
        import { createStore } from 'redux';
    [v] Styling (e.g., CSS Modules, styled-components): For styling your components, you might use different libraries or tools.
        import styles from './App.module.css';
    [vi] Axios or Fetch (for making API requests): To fetch data from APIs, you can use Axios or the browser's native Fetch API.
        import axios from 'axios';
    [vii] PropTypes or TypeScript (for type checking): To ensure your components receive the correct props and have proper type checking.
        import PropTypes from 'prop-types';
    [viii] Testing Libraries (e.g., Jest, React Testing Library): For testing your React components and applications.
        import { render, fireEvent } from '@testing-library/react';


7. How do you add react to a web application?
Ans: Step 1: Adding DOM Container To The HTML. First, open the HTML page that you want to change. ...
Step 2: Add The Script Tags Or React Tags. Next, you have to add three <script> tags to the HTML page right before the closing </body> tag. ...
Step 3: Create A React Component.


8. What is React.createElement?
Ans: React. createElement can be considered as the original syntax of React because it allows us to write codes in React with just plain JS which the browser can understand and we don't need additional bundlers like webpack, Flux, ES6, React-Router, etc.


9. What are the three properties that createElement accept?
Ans: 
    [i] Type: The first argument to createElement is the type of the React element you want to create. This can be a string representing an HTML element (e.g., 'div', 'span', 'h1') or a reference to a custom React component.
    Example for an HTML element:
        React.createElement('div', ...);
    Example for a custom React component:
        React.createElement(MyComponent, ...);
    [ii] Props (optional): The second argument is an optional object that represents the properties (or "props") you want to pass to the element or component. These props are accessible within the component and can be used to customize its behavior or content.
    Example with props:
        React.createElement('div', { className: 'my-class', id: 'my-id' }, ...);
    [iii] Children (optional): The third argument and any subsequent arguments are also optional and represent the children of the element or component. These are the elements or content that will be nested inside the parent element.
    Example with children:
        React.createElement('div', null, 'Hello, world!');
    You can also provide an array of children to nest multiple elements inside the parent:
        React.createElement('ul', null,
    React.createElement('li', null, 'Item 1'),
    React.createElement('li', null, 'Item 2')
    );


10. What is the meaning of render and root?
Ans: Render: In React, Render is the technique that can redirect a page with the help of function render(). Most importantly, render a function we can use to define the HTML code within the HTML element. It helps to display certain views in the UI using certain logic defined in the render function and returns the output.
Root: <div id="root"></div> We call this a “root” DOM node because everything inside it will be managed by React DOM. Applications built with just React usually have a single root DOM node. If you are integrating React into an existing app, you may have as many isolated root DOM nodes as you like.

