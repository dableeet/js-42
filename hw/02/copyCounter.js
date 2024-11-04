const counter = {
  age: 42,
  consoleAge: function () {
    console.log(this.age);
  },
};

const copy1 = { ...counter };

const copy2 = Object.assign({}, counter);

const copy3 = JSON.parse(JSON.stringify(counter));

function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') return obj;

  const copy = Array.isArray(obj) ? [] : {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = deepClone(obj[key]);
    }
  }

  return copy;
}

const copy4 = deepClone(counter);

// так же копирование возможно с помощью бибилиотек

/* 
 	//*  метод structuredClone (метод глобального обьекта window)
	Использование structuredClone — это простой и надёжный способ глубокого копирования данных,
	особенно когда объекты содержат сложные структуры или циклические ссылки,
	однако он подходит только для данных, которые можно сериализовать.
	Объекты, тесно связанные с контекстом выполнения, такие как функции и DOM-узлы, 
	не поддерживаются этим методом из-за особенностей их внутренней структуры и зависимости от среды выполнения.
*/

