const app = Vue.createApp({
    data(){
        return{
            title: "Test",
            itemList: [],
        };     
    },
    beforeCreate(){
        console.log(" beforeCreateçalıştı...")
    },
    created(){
        console.log(" created çalıştı...");
        setTimeout(() => {
            this.itemList = [1,2,3,4,5]
        },2000);
    },
    beforeMount(){
        console.log("beforeMount çalıştı...")
    },
    mounted(){
        console.log(" mountedçalıştı...")
    },
    beforeUpdate(){
        console.log("beforeUpdate çalıştı...")
    },
    updated(){
        console.log(" updated çalıştı...")
    },
    beforeUnmount(){
        console.log("beforeUnmount çalıştı...")
    },
    unmounted(){
        console.log(" unmounted çalıştı...")
    },
}).mount("#app");