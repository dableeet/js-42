const obj1 = { here: { is: 'on', other: '3' }, object: 'Y' };

const obj2 = { here: { is: 'on', other: '2' }, object: 'Y' };

const deepEqual = (obj1, obj2) => {
  // Базовые случаи для примитивных значений и ссылок
  if (obj1 === obj2) return true;
  if (
    obj1 === null ||
    obj2 === null ||
    typeof obj1 !== 'object' ||
    typeof obj2 !== 'object'
  ) {
    return false;
  }

  // Проверка циклических ссылок
  const visitedObjects = new WeakMap();

  const compare = (a, b) => {
    if (a === b) return true;
    if (
      typeof a !== 'object' ||
      typeof b !== 'object' ||
      a === null ||
      b === null
    )
      return false;

    // Проверка на уже посещенные объекты для предотвращения циклов
    if (visitedObjects.has(a) && visitedObjects.get(a) === b) return true;
    visitedObjects.set(a, b);

    // Проверка объектов Date
    if (a instanceof Date && b instanceof Date) {
      return a.getTime() === b.getTime();
    }

    // Проверка объектов Map
    if (a instanceof Map && b instanceof Map) {
      if (a.size !== b.size) return false;
      for (const [key, valA] of a) {
        if (!b.has(key) || !compare(valA, b.get(key))) return false;
      }
      return true;
    }

    // Проверка объектов Set
    if (a instanceof Set && b instanceof Set) {
      if (a.size !== b.size) return false;
      for (const valA of a) {
        if (![...b].some((valB) => compare(valA, valB))) return false;
      }
      return true;
    }

    // Проверка массивов
    if (Array.isArray(a) && Array.isArray(b)) {
      if (a.length !== b.length) return false;
      return a.every((val, index) => compare(val, b[index]));
    }

    // Проверка обычных объектов
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);
    if (keysA.length !== keysB.length) return false;

    return keysA.every((key) => keysB.includes(key) && compare(a[key], b[key]));
  };

  return compare(obj1, obj2);
};
