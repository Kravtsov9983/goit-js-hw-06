const form = document.querySelector(".login-form");

function hendleSubmit(event) {
    const formElements = event.currentTarget.elements;
    const email = formElements.email;
    const password = formElements.password;
    
if (email.value === "" || password.value === ""  ) {
        alert('Будь-ласка заповніть поля!')
        form.reset();
        return
}
    
    event.preventDefault();
    const formData = {
        email: email.value,
        password: password.value

        
    }
    console.log(formData)
    form.reset()

    
}
form.addEventListener("submit", hendleSubmit)











// const form = document.querySelector(`.login-form`);
// form.addEventListener(`submit`, onFormSubmit);

// function onFormSubmit(event) {
//     event.preventDefault();

//     const formData = new FormData(event.currentTarget);


//     formData.forEach((value, name) => {
//         if (value === "" ) {
//         alert('Будь-ласка заповніть поля!')
//         form.reset();
//         return
//     }
//         console.log(`onFormSubmit -> name`, name)
//         console.log(`onFormSubmit -> value`, value)
//         form.reset();
//         return
//     })







    // const formElements = event.currentTarget.elements;
    // const email = formElements.email.value;
    // const password = formElements.password.value;
    // const dataForm = {
    //     email,
    //     password,
    // }

    // console.log(dataForm)
// }

 // if (email === "" || password === "") {
    //     alert('Будь-ласка заповніть поля!')
    //     form.reset();
    //     return
    // }