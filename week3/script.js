// Submit form data to server on submit
const form = document.querySelector('#contact-form');
form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const payload = {
    applicantName: '',
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    company: formData.get('company'),
    workEmail: formData.get('workEmail'),
    companySize: formData.get('companySize'),
    fundingStage: formData.get('fundingStage')
    };
    console.log(payload);
    // send payload to server here
});