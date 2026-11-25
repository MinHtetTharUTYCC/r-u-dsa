//work greet for simple assignments
const count = 10; // inferred as number
const names = ['Alice', 'Bob']; // inferred as string[]

let results: number[] = []; // empty array need annotation
// let node: ListNode | null = null; // union type with null
let freq: Map<string, number> = new Map(); // generic type with string keys and number values

/*
The ! after map.get(complement) is the non-null assertion operator. We already checked map.has(complement),
so we know the value exists, but TypeScript does not know that. 
The ! tells the compiler "trust me, this is not undefined." We will cover this in detail in the Null Handling section.
*/

function twoSum(numbers: number[], target: number): number[] {
    const map = new Map<number, number>();

    for (let i = 0; i < numbers.length; i++) {
        const complement = target - numbers[i];
        if (map.has(complement)) {
            return [map.get(complement)!, i]; // non-null assertion operator
        }

        map.set(numbers[i], i);
        console.log(`Map after iteration ${i}:`, map);
    }
    return [];
}

const nums = [2, 3, 4, 7, 11, 15];
const target = 18;
const r = twoSum(nums, target);
console.log(`Indices of the two numbers that add up to ${target}:`, r);

function twoSumString(words: string[], target: string): number[] {
    const map = new Map<string, number>();

    for (let i = 0; i < words.length; i++) {
        const current = words[i];

        if (target.startsWith(current)) {
            const neededSuffix = target.slice(current.length);
            if (map.has(neededSuffix)) {
                return [i, map.get(neededSuffix)!];
            }
        }

        if (target.endsWith(current)) {
            const neededPrefix = target.slice(0, target.length - current.length);
            if (map.has(neededPrefix)) {
                return [map.get(neededPrefix)!, i];
            }
        }

        map.set(current, i);
        console.log(`Map after iteration ${i}:`, map);
    }
    return [];
}

const words = ['foot', 'ice', 'go', 'bar', 'ball'];
const targetWord = 'football';
console.log(
    `Indices of the two words that concatenate to form "${targetWord}":`,
    twoSumString(words, targetWord),
);
