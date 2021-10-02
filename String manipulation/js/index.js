Vue.createApp({
    data() {
        return {
            word: null,
            words: [],
            message1: null,
            message2: null,
            message3: null,
        }
    },
    methods: {
        save(word) {
            this.message2.clear
            this.message2.push(word)
            // if (this.words == null || this.words.length == 0) {
            //     this.message = "empty"
            // }
            // else {
                // this.message1 = word;
                // this.message2 = word;
                // this.message3 = word;
            // }
        },
        clear() {
            this.words = []
            this.message = null
        },
        show() {
            
        }
    }
}).mount("#app")