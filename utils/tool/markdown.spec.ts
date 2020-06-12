import {getMetadata} from './markdown';
import { getPostsContent } from '../../posts/_reader';

describe("Markdown", () => {
    const markdown = `---
title: SpaceX Launch
author: Caleb Lucas
published: 30/05/2020
header_image: ./rocket.png
---

    ## SpaceX Launch

    Elon musk has achieved the unthinkable. He has succeeded in launching man's first commercial spacecraft and this will change the world in ways that **the earth has never seen before**.
    `;
    it("should contain metadata content", () => {
        const metadata = getMetadata([markdown])
        expect(Object.keys(metadata[0].metadata).length).toBe(4);
    })
})