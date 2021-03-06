//https://github.com/thm/uinames/
/** 
https://uinames.com/api/?amount=25

Limit results to the male or female gender:
https://uinames.com/api/?gender=female

Region-specific results:
https://uinames.com/api/?region=germany
Require a minimum number of characters in a name:

https://uinames.com/api/?minlen=25
Require a maximum number of characters in a name:

https://uinames.com/api/?maxlen=75
For JSONP, specify a callback function to wrap results in:

https://uinames.com/api/?callback=example
*/

// get necesarry vars
const amountSelected = document.getElementById("amount").value;
const region = document.getElementById("region");
const gender = document.getElementById("gender");
const form = document.getElementById("generate-names");

//listeners
form.addEventListener("submit", e => {
  e.preventDefault();
  //get form parameters from option selected
  const regionSelected = region.options[region.selectedIndex].value;
  const genderSelected = gender.options[gender.selectedIndex].value;
  console.log(amountSelected);
  console.log(genderSelected);
  console.log(regionSelected);
  //create url api with parameters
  let url = "https://uinames.com/api/?amount=";
  url += amountSelected;
  if (genderSelected !== "") {
    url += "&gender=" + genderSelected;
  }
  if (regionSelected !== "") {
    url += "&region=" + regionSelected;
  }
  //load data with fetch!

  fetch(url)
    .then(result => result.json())
    .then(names => showData(names))
    .catch(err => console.error(err));
});

function showData(names) {
  let html = "<h3>Names</h3><ul>";
  names.forEach(name => {
    console.log(name);
    html += `<li class="result">${name.name} ${name.surname}</li>`;
  });
  const result = document.getElementById("result");
  console.log(result);
  result.innerHTML = "</ul>" + html;
}
