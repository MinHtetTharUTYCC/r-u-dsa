import { BinarySearchTree } from '../binary_search_tree';

describe('Binary Search Tree', () => {
    describe('with filled binary search tree (insert)', () => {
        let binarySearchTree: BinarySearchTree<number>;

        beforeEach(() => {
            binarySearchTree = new BinarySearchTree<number>();
            binarySearchTree.insert(25)
            binarySearchTree.insert(80)
            binarySearchTree.insert(12)
            binarySearchTree.insert(5)
            binarySearchTree.insert(64)
        });

        it('should return false for isEmpty when the tree is filled(not empty)', () => {
            expect(binarySearchTree.isEmpty()).toBeFalsy();
        })

        it('should return correct root node value', () => {
            expect(binarySearchTree.rootNote?.data).toBe(25);
        })

        it('should return whether the tree has a specific value', () => {
            expect(binarySearchTree.has(25)).toBe(true);
            expect(binarySearchTree.has(64)).toBe(true);
            expect(binarySearchTree.has(100)).toBe(false);
        })

        it('should return the minimum value in the tree', () => {
            expect(binarySearchTree.findMin()).toBe(5);
        })
      
        it('should return the maximum value in the tree', () => {
            expect(binarySearchTree.findMax()).toBe(80);
        })

        it('should return the pre-order traversal of the tree', () => {
            expect(binarySearchTree.preOrderTraversal()).toEqual([25, 12, 5, 80, 64]);
        });
    });
});
