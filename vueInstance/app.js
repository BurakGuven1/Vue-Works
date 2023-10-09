const app = Vue.createApp({
    data(){
        return {
            title: "Vue.js",
            content:"Lorem ipsum",
            google:{
                title:"Tıklayınız...",
                target:"_blank",
                url : "https://www.google.com/",
                alt: "googledeneme",
            },
            coords: {
                x:0,
                y:0,
            },
            
        };
    },
    methods:{
        changeTitle(pastTitle){
            this.title=pastTitle;
        },
        updateCoords(message,event){
            //console.log(message,event.x,event.y);
            this.changeTitle(`${event.x},${event.y}`);
            this.coords= {
                x : event.x,
                y : event.y,
            }
        },
    }
}).mount("#app");