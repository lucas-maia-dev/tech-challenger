function submit() {
  var nome1 = document.getElementById("nome")
  var nome2 = document.getElementById("nome1")
  var nome3 = document.getElementById("nome2")
  var nome4 = document.getElementById("nome3")
  var nome5 = document.getElementById("nome4")
  var history = document.getElementById("history")
  let data = {
      names: [nome1.value, nome2.value, nome3.value, nome4.value, nome5.value],
      message: history.value
  }
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "https://fsdt-contact-acf4ab9867a7.herokuapp.com/contact",true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.status === 200) {
     alert("Sucesso!");
    } else {
      alert("Ocorreu um erro, tente novamente.");
    }
  };
  xhr.send(JSON.stringify(data));
}

form.addEventListener("submit", (e)=>{
   e.preventDefault()
   submit()
})
