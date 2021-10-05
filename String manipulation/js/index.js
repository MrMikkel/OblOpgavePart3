Vue.createApp({
    data() {
        return {
            word: null,
            message1: "",
            message2: "",
            message3: "",
        }
    },
    methods: {
        save(word) {
                this.message1 = word;
                this.message2 = word.toLowerCase();
                this.message3 = word.toUpperCase();
        },
        clear() {
            this.words = []
            this.message = null
        },
        show() {
            
        }
    }
}).mount("#app")