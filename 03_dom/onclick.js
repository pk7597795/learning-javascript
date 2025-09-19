document.querySelectorAll('.button').forEach((item)=>{
    item.onclick = function() {
      console.log(this);
      document.body.style.backgroundColor = item.getAttribute('id');
      document.querySelector("nav").style.backgroundColor = item.getAttribute('id');
    };
})
  
document.querySelectorAll('.button').forEach((item) => {
    item.addEventListener('click', function(e){
      console.log(e)
      console.log(e.target)
      document.body.style.backgroundColor = e.target.id
    })
})


---------------------------------------------------------------------------

button = document.querySelector('form')
results = document.querySelector('#results')
button.addEventListener('submit',function(e){
  e.preventDefault();
  height = parseInt(document.querySelector('#height')?.value)/100
  weight = parseInt(document.querySelector('#weight')?.value)
  console.log(height)
  console.log(weight)
  if(height <= 0 || height === '' || isNaN(height)){
    console.log(`Please enter correct value of height ${height}`)
  }else if(weight < 0 || weight === '' || isNaN(weight)){
    console.log(`Please enter correct value of weight ${weight}`)
  }else{
    calResults = weight / (height * height)
    results.innerHTML = `<span>${calResults.toFixed(2)}</span>`
  }
})