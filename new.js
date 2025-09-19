const user = {
    username: 'Pankaj',
    email: 'pankaj-zb.kumar@ubs.com',
    welcomeMessage: function() {
        console.log(`${this.username}, how are you`);
    } 
}

user.welcomeMessage()