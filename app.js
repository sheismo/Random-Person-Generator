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
            const res = await fetch('https://randomuser.me/api') 
            const { results } = await res.json()

            // console.log(results)

            this.firstName = results[0].name.first
            this.lastName = results[0].name.last
            this.gender = results[0].gender
            this.email = results[0].email
            this.phone = results[0].phone
            this.picture = results[0].picture.large
        },
    },
})

app.mount('#app')