document.querySelector("#add-time")
.addEventListener('click', cloneField)

function cloneField(){
   const newFieldContainer =  document.querySelector('.schedule-item').cloneNode(true);
   const fields = newFieldContainer.querySelector('input');

   fields[0] = "";
   fields[1] = "";
   
   
   document.querySelector('#schedule-items').appendChild(newFieldContainer);
}