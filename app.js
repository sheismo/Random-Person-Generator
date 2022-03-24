if (window.matchMedia('(prefers-color-scheme: dark)').matches){
    document.documentElement.setAttribute('dark', true)
}

const app = Vue.createApp({
    data(){
        return {
            firstName:'John',
            lastName:'Doe',
            gender:'male',
            email:'johndoe@gmail.com',
            phone: "367-890-367",
            picture:'https://randomuser.me/api/portraits/men/10.jpg',
        }
    },
    methods: {
        async getUser(){
            const res = await fetch('https://randomuser.me/api/') 
            const data = await res.json()

            console.log(data.results)

            this.firstName = data.results[0].name.first
            this.lastName = data.results[0].name.last
            this.gender = data.results[0].gender
            this.email = data.results[0].email
            this.phone = data.results[0].phone
            this.picture = data.results[0].picture.large
        },
    },
})

app.mount('#app')