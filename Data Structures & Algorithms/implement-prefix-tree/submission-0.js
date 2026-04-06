class PrefixTree {
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let node = this.root;
        for (let i = 0; i < word.length; i++) {
            let index = word.charCodeAt(i) - 97;
            if (!node.children[index]) {
                node.children[index] = new TrieNode(word[i]);
            }
            node = node.children[index]
        }
        node.endOfWord = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let node = this.root;
        for (let i = 0; i < word.length; i++) {
            let index = word.charCodeAt(i) - 97;
            if (!node.children[index]) {
                return false;
            }
            node = node.children[index]
        }

        return node.endOfWord;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let node = this.root;
        for (let i = 0; i < prefix.length; i++) {
            let index = prefix.charCodeAt(i) - 97;
            if (!node.children[index]) {
                return false;
            }
            node = node.children[index]
        }

        return true;
    }
}

class TrieNode {
    constructor(char) {
        this.char = char;
        this.endOfWord = false;
        this.children = new Array(26).fill(null);
    }
}
