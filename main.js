    this.modal = document.querySelector('.container')

    /* Open Modal*/
    this.button = document.getElementById('button')
    this.button.addEventListener('click',() => {
      modal.classList.toggle('show')

      let user = document.getElementById('user')
    const url = `https://api.github.com/users/${user.value}`
       fetch(url)
      .then(response => response.json())
      .then(data => {
        let name = document.getElementById('name')
        let imgPerfil = document.getElementById('img-perfil')
        let bio = document.getElementById('bio')
        name.innerText = data.login
        imgPerfil.src = data.avatar_url
      })
    })

    /* Close Modal*/
    this.exitModal = document.getElementById('back')
    this.exitModal.addEventListener('click', () => {
      modal.classList.toggle('show')
    })
