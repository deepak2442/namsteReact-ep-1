Assignment-1 Inception

Q.1 What is emmet?
ans. Emmet is a free add-on for your text editor that allows you to type shortcuts that are then expanded into full pieces of code.
      Emmet uses different abbreviations and short expressions depending on what's passed, and then dynamically converts the abbreviations into the full code. Emmet is mostly used for     
HTML, XML, and CSS, but it can also be used with programming languages.
      Emmet (formerly Zen Coding) is a set of plug-ins for text editors that allow for high-speed coding and editing in HTML, XML, XSLT, and other structured code

Q.2 Difference between a library and framework?
ans. A framework is a set of pre-written code that provides a structure for developing software applications. 
     A library, on the other hand, is a collection of pre-written code that can be used to perform specific tasks.

     A framework as a collection of libraries, but completely different. Use libraries to control program flow. Access your library anytime, anywhere. On the other hand, with a framework, the flow is controlled by the framework. 

      When a user uses the library programmatically, the user has full control, but when talking about the user using the framework, the framework itself has full control, not the user. Or you could say that program control is reversed when the user uses the framework instead of the library.

example :-nLibrary is like building your home from the ground up. The house can be made in any style you prefer and the rooms can be arranged and decorated however you like. Framework, on the other hand, is like buying a new home. The house is already built, so you don’t have to worry about building problems, but you can’t choose how the rooms are arranged.


Q.3 what is CDN and why we use it?

A CDN, or content delivery network, is a network or collection of servers in locations all over the world. Also known as a content distribution network, a CDN can refer to many types of content delivery services, such as load balancing and video streaming.
A CDN’s network of servers allows companies to deliver content from their websites and mobile applications to people more quickly and efficiently, based on their geographic location. In short, a CDN moves data and applications closer to the end user — increasing speed, enhancing security, and improving the user experience.


Q.4 why React is known as React?

React is called "React" because of its core feature, which is its ability to "react" or respond dynamically to changes in data. React was originally created by Facebook in 2011 for use in their own web application.

React's primary goal is to simplify the creation of complex, interactive user interfaces by breaking them down into smaller, reusable components. These components are built using a declarative syntax that allows developers to describe what the interface should look like at any given moment, and React takes care of efficiently updating the DOM (Document Object Model) as needed when the data changes.


Q.5 What is crossorigin in script tag?
ans. The crossorigin attribute sets the mode of the request to an HTTP CORS Request. Web pages often make requests to load resources on other servers. Here is where CORS comes in. A cross-origin request is a request for a resource (e.g. style sheets, iframes, images, fonts, or scripts) from another domain.


Q.6 what is difference between react and reactdom?
ans. As the name implies, ReactDOM is the glue between React and the DOM. Often, you will only use it for one single thing: mounting with ReactDOM.render(). Another useful feature of ReactDOM is ReactDOM.findDOMNode() which you can use to gain direct access to a DOM element. (Something you should use sparingly in React apps, but it can be necessary.) If your app is "isomorphic", you would also use ReactDOM.renderToString() in your back-end code.

For everything else, there's React. You use React to define and create your elements, for lifecycle hooks, etc. i.e. the guts of a React application.

The reason React and ReactDOM were split into two libraries was due to the arrival of React Native. React contains functionality utilised in web and mobile apps. ReactDOM functionality is utilised only in web apps. 
React contains functionality utilised in web and mobile apps. ReactDOM functionality is utilised only in web apps.



Q.7 what is difference between react.development.js and react.production.js files via cdn?
ans.  The development build is used - as the name suggests - for development reasons. You have Source Maps, debugging and often times hot reloading ability in those builds.

The production build, on the other hand, runs in production mode which means this is the code running on your client's machine.

react.development.js provides us extra features like debugging, hmr(Hot module reloading) and lots of other stuffs that you might use while developing app with the help of bundlers like webpack, parcel, vite. This bundler bundles and minifies our code to be deployed on production

These minified files will be deployed on production which removes lots of unnecessary files which will not be used by our app for this we have react.production.js to make our much faster(as bundlers and lots of other files have done there work and are not required now)

Q.8 what are async and defer?
ans. If async is present: The script is downloaded in parallel to parsing the page, and executed as soon as it is available (before parsing completes) If defer is present (and not async ): The script is downloaded in parallel to parsing the page, and executed after the page has finished parsing.
Async downloads and executes JavaScript as soon as it’s available, while defer attribute waits until the HTML document has been parsed before downloading and executing any external scripts.

In most cases, it doesn’t matter which attribute you use – both will improve performance by allowing the browser to continue parsing while waiting for JavaScript to download. However, there are some situations where one attribute may be preferable to the other.