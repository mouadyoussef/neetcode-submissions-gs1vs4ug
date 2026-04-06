class WordDictionary {
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let node = this.root;
        for (let i = 0; i < word.length; i++) {
            let index = word.charCodeAt(i) - 97;
            if (!node.children[index]) {
                node.children[index] = new TrieNode();
            }
            node = node.children[index];
        }
        node.isEnd = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word, startNode) {
        console.log(word)
        let node = startNode ?? this.root;
        for (let i = 0; i < word.length; i++) {
            let index = word.charCodeAt(i) - 97;

            if (!node.children[index] && word[i] !== ".") {
                return false;
            }

            if (word[i] === ".") {
                for (let j = 0; j < node.children.length; j++) {
                    if (node.children[j] && this.search(word.substring(i + 1), node.children[j])) {
                        return true;
                    }
                }
                return false;
            }

            if (!node.children[index]) {
                return false;
            }
            node = node.children[index];
        }

        return node.isEnd;
    }
}

class TrieNode {
    constructor() {
        this.children = new Array(26);
        this.isEnd = false;
    }
}