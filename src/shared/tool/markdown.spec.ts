import {getMarkdownData} from './markdown';
import { markdown01PostFile } from '../../../e2e/__fixtures__/samplepost';

describe("Markdown", () => {
    let markdownData = [];
    beforeAll(() => { markdownData =  getMarkdownData([markdown01PostFile]) })

    it("should contain metadata", () => {
        expect(Object.keys(markdownData[0].metadata).length).toBeGreaterThan(0);
    })

    it("should contain path_to_file", () => {
        expect(markdownData[0].path_to_file.length).toBeGreaterThan(0);
    })

    it("should contain content", () => {
        expect(markdownData[0].content.length).toBeGreaterThan(0);
    })
})