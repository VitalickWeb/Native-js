import {sum} from './01'
import {multiple} from './01'

let a: number;
let b: number;
let c: number;

beforeEach( () => {
    a = 1;
    b = 2;
    c = 3;
})

test('sum should be correct', () => {
    //action
    const result1 = sum(a, b);
    const result2 = sum(b, c);

    //expect result
    expect(result1).toBe(3);
    expect(result2).toBe(5);
})

test.skip('multiple should be correct', () => {
    //action
    const result1 = multiple(a, b);
    const result2 = multiple(b, c);

    //expect result
    expect(result1).toBe(2);
    expect(result2).toBe(6);
})