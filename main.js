const App = {
  OpenModal() {
    //Abrir Modal

    const start = document.getElementById('start')

    start.addEventListener('click', () => {
      const modal = document.getElementById('window')

      modal.classList.remove("dark")
    })
  },

  CloseModal() {
    //Fechar Modal e mandar o texto do textarea para a pagina principal

    const close = document.getElementById('send')
    close.addEventListener('click', () => {
   
   const modal = document.getElementById('window')
   modal.classList.add("dark")

   let txt = document.querySelector('textarea')
   let res = document.getElementById('res')
   res.innerHTML = `${txt.value}`
})
  },

  ClearText() {
    //Limpar texto da pagina principal

    const clear = document.getElementById('clear')

    clear.addEventListener('click', () => {
    let res = document.getElementById('res')
    res.innerHTML = ``
})},

  EnterKey() {
    //Quando apertar Enter no teclado fecha o modal e manda o texto para a pagina inicial

  document.addEventListener('keydown', (event) => {

    const isEnterkey = event.key === "Enter"

    if(isEnterkey) {

      // App.CloseModal()
      const modal = document.getElementById('window')
      modal.classList.add("dark")

      let txt = document.querySelector('textarea')
      let res = document.getElementById('res')
      res.innerHTML = `${txt.value}`
    }
  })
}
}

App.OpenModal()
App.CloseModal()
App.ClearText()
App.EnterKey()  