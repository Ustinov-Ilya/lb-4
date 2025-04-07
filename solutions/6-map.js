// BEGIN
export const getChildren = (users) => {
    const childrens = users.map((user) => user.children);
    return childrens.flat(Infinity);
}

export default getChildren;
// END