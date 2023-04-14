//Functions I want on the page.

//1. A warning function for when you click the submit button without filling the required inputs. The border style of the page would turn red and a warning saying "kindly fill the required input" on the top of the page. 

//2. When you click the submit button, all inputs will be on the console of chrome developer tool. 

var form = document.getElementById('contactForm')
var firstName = document.getElementById('firstName')
var lastName = document.getElementById('lastName')

function getApplicantName() {
  return firstName.value + ' ' + lastName.value;
}
form.addEventListener('submit', function(event){
   event.preventDefault() //prevents the form from auto Submitting

  var company = document.getElementById('company').value;

  var workEmail = document.getElementById('workEmail').value;

  //selecting the dropdown option
  let companySize = document.querySelector('#companySize').value;

  let fundingStage = document.querySelector('#fundingStage').value;

  let textArea = document.getElementById('textArea').value;

  formEntry = {
    applicantName: getApplicantName(),
    firstName: firstName.value,
    lastName: lastName.value,
    company: company,
    workEmail: workEmail,
    companySize: companySize,
    fundingStage: fundingStage,
    textArea: textArea,
  };
  console.log(formEntry)


  fetch('https://eodh6njvzgfl22j.m.pipedream.net',{
    method: 'POST',
    headers: {
      "Content-Type":"application/json",
      "applicantEmail": "test-@checklearn.com"
      
    },

    body: JSON.stringify(formEntry)

  })
  
  });

  // Reset the form
  form.reset();

        


