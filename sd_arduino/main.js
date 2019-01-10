// Requires
const connect = require('./assets/connect.js');
const axios = require('axios');

// Variables
const baseUrl = "https://projeto-sd-zebiano.c9users.io/";
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoidXNlcm5hbWUiLCJlbWFpbCI6ImVtYWlsIn0sImlhdCI6MTU0NzAzMDAwOH0.JBk4NnmQEh1qc6QfWBIRtjRi4eIikj9y2C01S7QVSWo"

// Sets default headers for axios requests
axios.defaults.headers.common['Authorization'] = 'Bearer ' + token // for all requests

// Switches the port into "flowing mode"
connect.parser.on('data', function (data) {
    //console.log(data);
    //console.log(typeof data);

    if (res == "0") {
        console.log("Recieved Meat");
        axiosPost("Carne");
    } else if (res == "1") {
        console.log("Recieved Fish");
        axiosPost("Peixe");
    } else if (res == "2") {
        console.log("Recieved Vegetarian");
        axiosPost("Vegetariano");
    } else if (res == "3") {
        console.log("Recieved Diet");
        axiosPost("Dieta");
    }
});


// --- Axios Requests --- \\
// Axios Get Token
function axiosGetToken() {
    axios.get(baseUrl + "token")
        .then(function (res) {
            console.log(res.data);
        })
        .catch(function (err) {
            console.log(err);
        });
}

// Axios Post
function axiosPost(type) {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth();
    let yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }

    var currentDate = yyyy + '-' + mm + '-' + dd;
    //console.log(currentDate);

    // Post
    axios.post(baseUrl + "arduinos", {
        date: currentDate,
        type: type
    })
        .then(function (res) {
            console.log(res.data);
        })
        .catch(function (err) {
            console.log(err);
        });
} 