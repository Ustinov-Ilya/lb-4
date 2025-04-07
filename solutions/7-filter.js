// BEGIN
export const getGirlFriends = (users) => {
    const friends = users.map((user) => user.friends).flat(Infinity);
    const girlFriends = friends.filter((friend) => friend.gender === 'female');
    return girlFriends;
}

export default getGirlFriends;
// END