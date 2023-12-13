const { createApp } = Vue

createApp({
    data() {
        return{
            arrayMail: []
        }

    },
    
    mounted() {
        for (let i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((mail) => {
                let email = mail.data.response;
                console.log(mail.data.response);
                this.arrayMail.push(email);
            })
        }
        console.log(this.arrayMail);
    }


}).mount('#app')