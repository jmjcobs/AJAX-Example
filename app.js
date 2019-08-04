document.querySelector("#btn").addEventListener("click", makeRequest);

function makeRequest() {
    XHR.open("GET", "https://dog.ceo/api/breeds/image/random");
    XHR.send();
}

var XHR = new XMLHttpRequest();

XHR.onreadystatechange = function () {
    if (XHR.readyState == 4 && XHR.status == 200) {
        let response = JSON.parse(XHR.responseText);

        document.querySelector('img').setAttribute('src', response.message);
    } else if (XHR.status == 404) {
        console.log('There was a problem');
    }
}
