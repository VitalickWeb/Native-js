//часто у нас будут объекты из которых нам нужно что то доставать, например объект человек

import {ManType} from "./Destructed";

let man: ManType;

beforeEach( () => {
    man = {
        name: 'Vit',
        age: 40,
        lessons: [{title: '1'}, {title: '2'}, {title: '3', hour: 8}],
        address: {
            street: {
                title: 'searched'
            }
        }
    }
})

test('should be to show age and length lessons', () => {
    let man = {
        name: 'Vit',
        age: 40,
        lessons: [{title: '1'}, {title: '2'}],
        address: {
            street: {
                title: 'searched'
            }
        }
    }
        //например нам нужен возраст человека или lessons
    // const age = man.age
    // const lessons = man.lessons
        //ПРИСВАИВАЕММ ИХ ПЕРЕМЕННЫМ ДЛЯ ТОГО ЧТО БЫ ПОТОМ ПРОЩЕ БЫЛО МАНИПУЛИРОВАТЬ ПЕРЕМЕННЫМИ
    //тоже самое только с диструктуировающим присваиванием!
    //то что переменные мы заключили в фигкрные скобки означает, что мы хотим значение для этих переменных
    //поискать такие же название свойств, в объекте который с права в man
    const {age, lessons, address: {street: {title}}} = man//две переменные и более в скобках ищутся как свойства в объекте который с права

    //лучше доставать глубокие данные таким образом!
    const address = man.address.street.title
    //const {title} = man.address.street

    expect(age).toBe(40)
    expect(lessons.length).toBe(2)
    expect(title).toBe('searched')
    expect(address).toBe('searched')

})

test('should be show number lesson', () => {
    const l1 = man.lessons[0];
    const l2 = man.lessons[1];

    const [ls1, ls2] = man.lessons//диструктуризация такого плана не актуальна для неизвестного количества данных
        //используем такой подход для заведомо известного получения важных данных
        //можно хранить например useState состояние и функцию которая изменяет состояние
    const [,,ls3] = man.lessons//запятые означают что это пропуск данных , которые туда не добавили

    const [lesson1, , ...restLessons] = man.lessons//используем рест оператор, записываем в него уроки которые не вошли
    console.log(restLessons)
    expect(l1.title).toBe('1')
    expect(l2.title).toBe('2')

    expect(ls1.title).toBe('1')
    expect(ls2.title).toBe('2')
    expect(restLessons.length).toBe(1)
    expect(restLessons[0].title).toBe('3')
    expect(restLessons[0]).toStrictEqual( {title: '3', hour: 8})

})