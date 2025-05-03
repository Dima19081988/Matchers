import { sortHeroesByHealth } from "../app";

describe('sortHeroesByHealth', () => {
    test('корректно сортирует массив по убыванию', () => {
        const heroes = [
            {name: 'мечник', health: 10},
            {name: 'маг', health: 100},
            {name: 'лучник', health: 80},
        ];

        const expected = [
            {name: 'маг', health: 100},
            {name: 'лучник', health: 80},
            {name: 'мечник', health: 10},
        ];

        expect(sortHeroesByHealth(heroes)).toEqual(expected);
    });

    test('возвращает пустой массив, если входящий массив пустой', () => {
        expect(sortHeroesByHealth([])).toEqual([])
    });

    test('работает с массивом из одного героя', () => {
        const heroes = [{name: 'лучник', health: 80}];
        expect(sortHeroesByHealth(heroes)).toEqual(heroes);
    });

    test('корректно сортирует, если у нескольких героев одинаковые показатели здоровья', () => {
        const heroes = [
            { name: 'мечник', health: 40 },
            { name: 'маг', health: 100 },
            { name: 'лучник', health: 40 },
          ];
      
          const expected = [
            { name: 'маг', health: 100 },
            { name: 'мечник', health: 40 },
            { name: 'лучник', health: 40 },
          ];

        expect(sortHeroesByHealth(heroes)).toEqual(expected);
    });
})