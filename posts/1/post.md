---
title:  Select and preview images in React
author: Caleb Lucas
datePublished: 11/02/2019
headerImage: react-image-select.png
lastModifiedOn: 11/02/2019
tags: 
    - javascript
    - react
    - images
    - react-image-select
---

{SUMMARY}

Recently, I've been doing a lot of stuff with images. However, one simple repetitive feature stood out in all of the projects: selecting images and being able to remove any or all of them from the screen after selection.

{START}

Recently, I've been doing a lot of stuff with images. However, one simple repetitive feature stood out in all of the projects: selecting images and being able to remove any or all of them from the screen after selection.

That's an easy functionality, right? Yeah, you're right. Or may be you're wrong. Well, I don't know. It's up to you and the framework or library you use. It also depends on how much time you're willing to put into making the code for this feature as clean and less smelly as possible. Even at that, it's still, well... easy, because we already have the powerful [FileReader](https://developer.mozilla.org/en/docs/Web/API/FileReader) API.

Let's take a look at this package [ImageSelectPreview](https://github.com/cmdlucas/react-image-select-pv) where the [FileReader](https://developer.mozilla.org/en/docs/Web/API/FileReader) API is used extensively. I made it because I was tired of copying and pasting codes every time I needed that "simple" feature in my project. Yes, it only works with React (because, React for the win in terms of simplicity, imo), but if you don't use React, you can take advantage of this idea and build one that works with whatever library or framework you use (unless my little speech is already making you a React convertee, then I'm winning. Haha).

#### Okay. Why should you? 

You mean, why shouldn't you? Like, why shouldn't you let your users preview their images when they select them? Yeah sure, it's not a profile picture crop-filter-adjust kill-it-all functionality but, your users will be happy when they can select images and just "unselect" them seamlessly. Who likes to be stressed? Only you, of course.

Anyway, the package is still limited to button prompt but I will definitely be adding a drag-and-drop functionality soon. You can comment below if you feel it's unnecessary. At the end of the day, we all want beautiful UIs that give amazing UXs; [ImageSelectPreview](https://github.com/cmdlucas/react-image-select-pv) is just a very tiny tool in our toolbox for achieving that goal.

__________________________________________________________________________

[ImageSelectPreview](https://github.com/cmdlucas/react-image-select-pv) has been updated to include drop-in (drag-and-drop) functionality. See the docs to learn more about the APIs as props and add it into your project.