import _, { sortBy } from 'lodash';

// BEGIN
export const takeOldest = (users, count = 1) => {
    return sortBy(users, ({birthday}) => Date.parse(birthday)).slice(0, count);
}

export default takeOldest;
// END