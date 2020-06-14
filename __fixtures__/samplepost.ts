import { Markdown } from "../utils/tool/markdown";
import { PostFile } from "../posts/_reader";
import path from 'path'

export const markdown01 = `
---
title: SpaceX Launch
author: Caleb Lucas
datePublished: 30/05/2020
headerImage: rocket.png
lastModifiedOn: 30/05/2020
tags: 
    - space
    - elon musk
---

## SpaceX Launch

{START}

Elon musk has achieved the unthinkable. He has succeeded in launching man's first commercial spacecraft and this will change the world in ways that **the earth has never seen before**.
`;

export const markdown01PostFile: PostFile = {
    directory: path.join(__dirname),
    name: "post.md",
    content: markdown01
}

export const markdown01Data: Markdown = {
    metadata: {
        title: "SpaceX Launch",
        author: "Caleb Lucas",
        datePublished: "30/05/2020",
        headerImage: "rocket.png"
    },
    content: `

    ## SpaceX Launch
    
    {START}
    
    Elon musk has achieved the unthinkable. He has succeeded in launching man's first commercial spacecraft and this will change the world in ways that **the earth has never seen before**.`,
    path_to_file: "/path/to/file"
}