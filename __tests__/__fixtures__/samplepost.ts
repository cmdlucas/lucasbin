import { Markdown } from "../../utils/tool/markdown";

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