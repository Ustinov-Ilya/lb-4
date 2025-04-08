import get from 'lodash/get.js';

const freeEmailDomains = [
  'gmail.com',
  'yandex.ru',
  'hotmail.com',
  'yahoo.com',
];

// BEGIN
const domenCount = (acc, domen) =>{
  if(!acc[domen]){
    acc[domen] = 0;
  }
  acc[domen] = acc[domen] + 1;
  return acc;
}

const getFreeDomainsCount = (emails) => emails
.map((domen) => domen.split('@')[1])
.filter((email) => freeEmailDomains.includes(email))
.reduce(domenCount, {});

export default getFreeDomainsCount;
// END