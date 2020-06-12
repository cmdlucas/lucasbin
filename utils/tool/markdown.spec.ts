import {getMarkdownData} from './markdown';
import { markdown01 } from '../../__tests__/__fixtures__/samplepost';

describe("Markdown", () => {
    it("should contain metadata content", () => {
        const markdownData = getMarkdownData([markdown01])
        expect(Object.keys(markdownData[0].metadata).length).toBe(4);
    })
})