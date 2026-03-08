const input = document.getElementById("myInput");
const btn = document.getElementById("myButton");

btn.addEventListener("click", () => {
  let cep = input.value;
  
  console.log("CEP informado: " + cep);
  
  if (cep.length === 8) {
    fetchData(`https://viacep.com.br/ws/${cep}/json`)
  }
})

const fetchData = async function(url) {
  fetch(url)
  .then(
    (response) => {
      data = response.json();
      return data;
    }
  )
  .then(
    (data) => {
      const endereco = document.getElementById("endereco");
      endereco.innerHTML = `${data.logradouro}`;
      const bairro = document.getElementById("bairro");
      bairro.innerHTML = `${data.bairro}`;
      const cidade = document.getElementById("cidade");
      cidade.innerHTML = `${data.localidade}`;
      const estado = document.getElementById("estado");
      estado.innerHTML = `${data.uf}`;
    }
  )
  .catch(
    (error) => {
      console.log(error);
    }
  )
}
