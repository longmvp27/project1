function logOut() {
    window.location.replace('../log_in/login.html')
}
function continueOrder() {
    window.location.replace('../menu/menu.html')
}
var customerID = localStorage.getItem('cusid');
var button = document.getElementsByClassName('backButton');
console.log(button)
button[0].addEventListener('click', async function(event) {
    fetch('http://localhost:3000/menu', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify({
            customerID: customerID
        })
    })
    .then(respone => respone.json())
    .catch(error => {
        console.log('Error')
    })
})