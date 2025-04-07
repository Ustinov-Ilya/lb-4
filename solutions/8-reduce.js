// BEGIN
export const groupBy = (arr, property) => {
    const group = (acc, object) => {
        if (!Object.hasOwn(acc, object[property])) {
            acc[object[property]] = [];
        }
        acc[object[property]].push(object);
        return acc;
    }
    const groupedObjects = arr.reduce(group, {});
    return groupedObjects;
}

export default groupBy;
// END