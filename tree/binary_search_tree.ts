class TreeNode<T> {
    constructor(
        public data: T,
        public leftChild?: TreeNode<T>,
        public rightChild?: TreeNode<T>,
    ) {}
}

export class BinarySearchTree<T> {
    rootNote?: TreeNode<T>;

    constructor() {
        this.rootNote = undefined;
    }

    isEmpty(): boolean {
        return this.rootNote === undefined;
    }

    has(data: T): boolean {
        let currentNode = this.rootNote;

        while (currentNode !== undefined) {
            if (data === currentNode.data) {
                return true;
            }

            if (data > currentNode.data) {
                currentNode = currentNode.rightChild;
            } else {
                currentNode = currentNode.leftChild;
            }
        }

        //loop finished and no match found
        return false;
    }

    insert(data: T): void {
        if (!this.rootNote) {
            this.rootNote = new TreeNode<T>(data);
            return;
        }

        let currentNode: TreeNode<T> = this.rootNote;

        while (true) {
            if (data > currentNode.data) {
                if (currentNode.rightChild) {
                    currentNode = currentNode.rightChild;
                } else {
                    currentNode.rightChild = new TreeNode<T>(data);
                    return;
                }
            } else {
                if (currentNode.leftChild) {
                    currentNode = currentNode.leftChild;
                } else {
                    currentNode.leftChild = new TreeNode<T>(data);
                    return;
                }
            }
        }
    }

    findMin(): T {
        if (!this.rootNote) throw new Error('Empty Tree.');

        let currentNode = this.rootNote;

        // keep moving left until we reach the leftmost node
        while (currentNode.leftChild !== undefined) {
            currentNode = currentNode.leftChild;
        }

        // the leftmost node is the minimum value in the tree
        return currentNode.data;
    }

    findMax(): T {
        if (!this.rootNote) throw new Error('Empty Tree');

        let currentNode = this.rootNote;

        // keep moving right until we reach the rightmost node
        while (currentNode.rightChild !== undefined) {
            currentNode = currentNode.rightChild;
        }

        // the rightmost node is the maximum value in the tree
        return currentNode.data;
    }

    // LEFT, ROOT, RIGHT
    inOrderTraversal(array: T[] = []): T[] {

        const traverse = (node?: TreeNode<T>) => {
            if (!node) return array

            traverse(node.leftChild);
            array.push(node.data);
            traverse(node.rightChild);
        };
        
        traverse(this.rootNote);
        return array;
    }

    // ROOT,LEFT,RIGHT
    preOrderTraversal(array: T[] = []): T[] {
        if (!this.rootNote) return array;

        const stack: TreeNode<T>[] = [this.rootNote];

        while (stack.length > 0) {
            const node = stack.pop()!;
            array.push(node.data);

            if (node.rightChild) stack.push(node.rightChild);
            if (node.leftChild) stack.push(node.leftChild);
        }

        return array;
    }

    // LEFT, RIGHT, ROOT
    postOrderTraversal(array: T[] = []): T[] {
        if (!this.rootNote) {
            return array;
        }

        const traverse = (node?: TreeNode<T>, array: T[] = []) => {
            if (!node) {
                return array;
            }

            traverse(node.leftChild, array);
            traverse(node.rightChild, array);
            array.push(node.data);

            return array;
        };

        return traverse(this.rootNote);
    }
}
