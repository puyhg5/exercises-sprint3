var btnSubmit = document.querySelector('.btn-submit');
var inputProfile = document.querySelector('.input-profile');
var nameProfile = document.querySelector('.name-profile');
var numberRepo = document.querySelector('.number-repo');
var urlImgProfile = document.querySelector('.img-profile-container');
var request = new XMLHttpRequest();

function seacherGitHub(){
  request.open('GET', 'https://api.github.com/users/'+ inputProfile.value, true);

  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      var data = JSON.parse(request.responseText);
      nameProfile.innerHTML = data.name;
      numberRepo.innerHTML = data.public_repos;
      urlImgProfile.innerHTML = '<img class="img-repo" src="'+ data.avatar_url +'" alt="Imagen de GitHub">';
    } else {
      console.log('Error del servidor, puede que el archivo no exista o que se haya producido un error interno en el servidor');
    }
  };

  request.onerror = function() {
    console.log('Error al tratar de conectarse con el servidor');
  };

  request.send();
}

btnSubmit.addEventListener("click",seacherGitHub);
