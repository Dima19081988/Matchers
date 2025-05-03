// TODO: write your code here
import sum from './basic';

console.log('worked');

console.log(sum([1, 2]));

export function sortHeroesByHealth(heroes) {
    return [...heroes].sort((a, b) => b.health - a.health);
}
