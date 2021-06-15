const fields =  document.querySelectorAll('[required]');

const form = document.getElementById('form');
const url = "https://clientapi.benchmarkemail.com/Contact/18442542/ContactDetails";
const myHeaders = new Headers();
myHeaders.append("AuthToken", "993C674A-9EAB-4EEF-8B36-46A42E26C3AA");
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
    // console.log("Cheguei aqui!")

    // fetch("https://clientapi.benchmarkemail.com/Contact/", {
    //   headers: myHeaders,
    //   method: 'GET',
    //   redirect: 'follow'
    // })
    // .then(response => response.text())
    // .then(result => console.log(result))
    // .catch(error => console.log('error', error));

    let email = document.getElementById('emailInput').value;
    let data = {
        "Data": {"Email": `${email}`,
        "FirstName": null, 
        "LastName": null, 
        "EmailPerm": "1"
        }
    }    

    fetch ("https://restapi.benchmarkemail.com/Emails/", { 
        headers: myHeaders,
    })
    // .then(response => response.json())
    // .then(result => console.log(result))
    // .catch(error => console.log('error', error));

    fetch (url, {
        method: "POST",
        headers: myHeaders,
        // redirect: 'follow',
        body: JSON.stringify(data),
    })
    // .then(response => response.json())
    // .then(result => console.log(result))
    .then(result => window.location.href = "./obrigado.html")
    .catch(error => console.log('error', error));
})
;



let lgpdHtml = `
    <div class="lgpd_banner">
        
    <div class="lgpd_banner_left">
    Nós ultilizamos cookies para melhorar sua experiência em nosso site. Para conferir detalhes sobre os cookies utilizados, leia nossas <a target="blanck" href="https://damisconsultoria.com.br/politicas-de-privacidade">políticas de privacidade.</a>
    </div>

    <div class="lgpd_banner_right">
    <button>OK</button>
    </div>

    </div>
`;

let lsContent = localStorage.getItem('lgpd');
if (!lsContent) {
    document.body.innerHTML += lgpdHtml;

    let lgpdArea = document.querySelector('.lgpd_banner');
    let lgpdButton = lgpdArea.querySelector('button');

    lgpdButton.addEventListener('click', () => {
        lgpdArea.remove();
        localStorage.setItem('lgpd', 'aceito os cookies');
    })
}











