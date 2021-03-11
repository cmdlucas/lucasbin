/**
 * Break up an array of data nodes into rows of data of specified length
 * @param nodes - an array of nodes to be converted
 * @param rowLength - the length per row of the resulting array * 
 * @return T
 */
export const rowsFromDataNodes = <T> (nodes: T[], rowLength: number): T[][] => {
    const data = [[]];
    nodes.forEach(node => {
        const tail = data[data.length - 1];
        if(tail.length < rowLength) {
            tail.push(node);
        } else {
            data.push([ node ]);
        }
    })
    return data;
}