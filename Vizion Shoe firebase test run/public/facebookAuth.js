document.addEventListener("DOMContentLoaded", event => {

    const app = firebase.app();
    console.log(app)

});

function facebookLogin() {
    // Sign in using a popup.
var provider = new firebase.auth.FacebookAuthProvider();
provider.addScope('user_birthday');
firebase.auth().signInWithPopup(provider).then(result => {
    const user = result.user;
    document.write(`Hello ${user.displayName}, this page is in development, Come visit later, Thanks`);
    console.log(user)
})
.catch(console.log)

};