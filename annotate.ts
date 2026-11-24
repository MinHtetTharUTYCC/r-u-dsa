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

function twoSum(nums: number[], target: number): number[] {
    const map = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement)!, i]; // non-null assertion operator
        }
        map.set(nums[i], i);
    }

    return [];
}
