class App {     // É toda a nossa aplicação.
    constructor() {
        this.repositories = []

        this.formEl = document.getElementById('repo-form')
        this.listEl = document.getElementById('repo-list')

        this.registerHandlers()
    }

    registerHandlers() {    // Ela vai registrar os eventos...
        this.formEl.onsubmit = event => this.addRepository(event)    // O evento de adcionar...
    }

    addRepository(event) {     
        event.preventDefault()   // Para tirar o recarregamento da pagina

        this.repositories.push({
            name: 'rocketseat.com.br',
            description: 'Tire a sua ideia do papel e dê vida á sua startup.',
            avatar_url: 'https://avatars0.githubusercontent.com/u/28929274?=4',
            html_url: 'http://github.com/rocketseat/rocketseat.com.br',
        })

        this.render()
    }

    render() {     // Ele vai pecorrer todos esses codigos acima, e rendelizar tudo do zero.
        this.listEl.innerHTML = ''  // Isso vai fazer ele apagar.

        this.repositories.forEach(repo => {     // repo => RECEBE CADA REPOSITORIO...
            let imgEl = document.createElement('img')
            imgEl.setAttribute('src', repo.avatar_url)

            let titleEl = document.createElement('strong')
            titleEl.appendChild(document.createTextNode(repo.name))

            let descriptionEl = document.createElement('p')
            descriptionEl.appendChild(document.createTextNode(repo.description))

            let linkEl = document.createElement('a')
            linkEl.setAttribute('target', '_blank')
            linkEl.appendChild(document.createTextNode('Acessar'))

            let listItemEl = document.createElement('li')   // Adcionando tudo na tag LI...
            listItemEl.appendChild(imgEl)
            listItemEl.appendChild(titleEl)
            listItemEl.appendChild(descriptionEl)
            listItemEl.appendChild(linkEl)

            this.listEl.appendChild(listItemEl) // Vai pegar o listItemEl e jogar pra dentro do listEl...
            
        }) // E igual o map. MAP: Ele pecorre arry e modifica de alguma forma. forEach: Ele só pecorre.
    }
}

new App()   // Vai rodar a nossa class
// Como nós não vamos reutilizar essa class depois, podemos colocar ela assim...