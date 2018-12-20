// Requires
const connect = require('./assets/connect.js');
const axios = require('axios');

// Switches the port into "flowing mode"
connect.parser.on('data', function (data) {
    let res = parseInt(data);
    //console.log(res);
    //console.log(typeof res);

    if (res == "0") {
        console.log("Recieved Meat");
    } else if (res == "1") {
        console.log("Recieved Fish");
    } else if (res == "2") {
        console.log("Recieved Vegetarian");
    } else if (res == "3") {
        console.log("Recieved Diet");
    }
});

// Axios
function axiosGet() {
    axios.get('https://projeto-sd-zebiano.c9users.io/ingredients')
        .then(function (response) {
            // handle success
            console.log(response.data);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });
}