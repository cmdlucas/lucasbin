---
title: Server-Side Rendering (React and Next.js) with responsiveness👋
author: Caleb Lucas
datePublished: 02/03/2019
headerImage: nextjs.png
lastModifiedOn: 02/03/2019
tags: 
    - javascript
    - nextjs
    - react
---

{SUMMARY}

Building responsive applications is a norm. It's not so much of a complicated thing to do when working on Single Page Applications (SPA) with React.

{START}

### BACKGROUND

#### TLDR;

Building responsive applications is a norm. It's not so much of a complicated thing to do when working on Single Page Applications (SPA) with React. The reason for this is simple: declarative style programming can enable us selectively display contents on the browser since there is the window object. We can determine the size of the browser's window and choose the components to show to our users - or even the style to use on a component. The situation changes drastically when we want to render on the server. What does this mean?

Server-side rendering is not a new concept. It's the way we've been building for the web until Javascript became king and JSX became a worthy servant. Basically, it's just, make a request to the server, the server processes request, does due diligence (works on data), then responds with fully composed html. That is, everything has been rendered on the server giving the browser the less complex task of painting. Yes, Javascript and CSS can be sent with the response but this is optional. Whereas with SPAs we give our browser the responsibility of producing the html that the browser paints to the screen through javascript.

The task becomes tedious when we want to server-render content and be selective with what we render based on screen size. There's just no DOM; no window object either. Thanks to Next.js our pains are washed away - at least to some extent. We can worry no more about how to render  and send html responses to our clients-side.  NextJS can help us do static generation and server-side rendering. Please see here to learn more. 

However, using NextJS doesn't mean we automatically have a window object on our server. For this reason, we need to figure out how to render contents responsively. There's the React's Semantic-UI package to help us with responsiveness on the server. It's easy to plug into Next.js, but it's not so obvious. I have put together a succinct boilerplate that handles this and added some other packages often needed for development in Next.js. [Find here on github](https://github.com/cmdlucas/react-ssr-boilerplate).

The rest of this article breaks down the structure of the boilerplate and attempts to clarify any possible confusion that might arise. Keep in mind that this is not a framework or library. **It's just a boilerplate - nothing more**.

### STRUCTURE _(inline with Next.Js)_

This is the folder representation:

```
- root 
|- components 
|- pages 
|- redux 
   |- middleware 
      |- saga 
   |- reducers 
|- static  
   |- css 
   |- fonts
|- utils 
   |- components 
      |- general 
      |- mediaquery
   |- constants 

```

The most important folders here are: pages and static . While the static folder is required by Next.js as stated [here](https://nextjs.org/docs#static-file-serving-eg-images), the behaviour for the pages folder can be configured to suit your needs. [See here](https://nextjs.org/docs#disabling-file-system-routing).

The `utils` folder comprises of components and constants folder. The `/utils/component` folder is intended to house components that will be useful to the whole application. For example, header, footer or even the layout as seen in the boilerplate. Once again, this is just semantics. It can be changed to suit your needs. 

Let's pay some attention to the `/utils/components/mediaquery` folder. Here you'll find semantics.js . The vitality of the `MediaQuery` component exported from this file cannot be overstated. Anytime you need to render a component uniquely to a type of screen, pass the type as props to MediaQuery. See `/components/home.js` for example implementation. All types are constants from `/utils/constants/mediaquery.constants.js`

The `/redux` folder is for all things redux. See here to learn how you can start using redux. The `/components` folder is where components related to individual pages are kept. For example, `/components/home.js` serves only the home page through `/pages/index.js`.

### EDITING FILES

If you will need to edit `_document.js`, please do so with caution.  Global props are generated here and passed to the App component in `_app.js` by Next.js. Understand that if you edit `_app.js` and remove the `<WindowsContext.Provider>` then the `<MediaQuery>` in semantics.js will not work.

You can edit the files in the redux folder as you deem fit. Only ensure, however, that you supply the store to the `<Provider>` declared in `/pages/_app.js`.

### CONCLUSION

All you need is an understanding of Next.js and React. With these, you're good to use the boilerplate as you deem fit. It's a good way to bootstrap and save time when you want to build a responsive SSR application.

_Please submit a PR, if you feel there are dependencies that should be added to make the boilerplate more robust._