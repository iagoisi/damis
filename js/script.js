const fields =  document.querySelectorAll('[required]');

const form = document.getElementById('form');
const url = "https://clientapi.benchmarkemail.com/Contact/18424098/ContactDetails";
const myHeaders = new Headers();
myHeaders.append("AuthToken", "830B98D7-CD9E-43B4-BA38-F181169495B1");
myHeaders.append("Content-Type", "application/json");

function customValidation(event) {

    event.preventDefault();

    const field = event.target

        function verifyErrors() {
            let foundError = false;

            for ( let error in field.validity ) {
                
                if(field.validity[error] && !field.validity.valid) {
                    foundError = error;
                }
            }
            return foundError;
        }

        const error = verifyErrors();

        const spanError = field.parentNode.querySelector('span.error')


        if(error === 'patternMismatch') {
            spanError.classList.add('active');
        } else {
            spanError.classList.remove('active');
        }
}

for ( const field of fields ) {
    field.addEventListener('invalid', customValidation)
    field.addEventListener('blur', customValidation)
}

form.addEventListener('submit', event => {

    event.preventDefault();
    console.log("Cheguei aqui!")

    // let email = document.getElementById('emailInput').value;
    // let data = {
    //     "Data": {"Email": `${email}`,
    //     "FirstName": null, 
    //     "LastName": null, 
    //     "EmailPerm": "1"
    //     }
    // }    

    // fetch ("https://restapi.benchmarkemail.com/Emails/", { 
    //     headers: myHeaders,
    // })
    // // .then(response => response.json())
    // // .then(result => console.log(result))
    // // .catch(error => console.log('error', error));


    // fetch (url, {
    //     method: "POST",
    //     headers: myHeaders,
    //     // redirect: 'follow',
    //     body: JSON.stringify(data),
    // })
    // // .then(response => response.json())
    // // .then(result => console.log(result))
    // .then(result => window.location.href = "./obrigado.html")
    // .catch(error => console.log('error', error));
})
;

