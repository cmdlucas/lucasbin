import { rowsFromDataNodes } from './helper';

describe("Helper Module", () => {
    const data = ["a", "b", "c", "d"];

    it("rowsFromDataNodes() should convert data into rows of data", () => {
        const rowLength = 3;
        expect(rowsFromDataNodes(data, rowLength)).toHaveLength(Math.round(data.length/rowLength));
    })

    it("rowsFromDataNodes() should convert data into rows of data", () => {
        const rowLength = 1;
        expect(rowsFromDataNodes(data, rowLength)).toHaveLength(Math.ceil(data.length/rowLength));
    })
})