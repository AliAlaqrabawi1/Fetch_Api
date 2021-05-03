// main variable

let input = document.getElementById("input");
let button = document.querySelector(".get-btn");
let responseData = document.querySelector(".show-data");

//Get Repos function

function getRepos() {
  if (input.value === "") {
    alert("can't be empty ");
  } else {
    fetch(`https://api.github.com/users/${input.value}/repos`)
      .then((response) => {
        return response.json();
      })
      .then((repos) => {
        responseData.innerHTML = "";
        repos.forEach((repo) => {
          let url = `https://api.github.com/users/${input.value}/${repo.name}`;
          responseData.innerHTML += `
          <p class="data">
          <span>${repo.name}</span>
          <a href=${url} target="_blank">Visit</a> 
          <span>${repo.stargazers_count} Star</span>
          
          </p>
          

          `;
        });
      });
  }
}

button.onclick = function () {
  getRepos();
};
