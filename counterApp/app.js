const app = Vue.createApp({
    data(){
        return{
            counter: 0,
        }
    },
    methods: { },// kaç kere çağrılırsa o kadar çalışır.
    
    computed : { // cache mantığı ile çalışır.
        getCounter(){
            console.log("Counter çalıştı")
            return this.counter > 5 ? 'Büyük' : 'Küçük';
        },
    },
    watch : { // değer değiştiğinde çalışır
        counter(newValue,oldValue){
            console.log("Counter:",oldValue,"=>",newValue);
        },
        getCounter(newValue,oldValue){
            console.log("Result:",oldValue,"=>",newValue);
        },
    }
}).mount("#app");