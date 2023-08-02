import home from './pages/home/index.js'
import about from './pages/about/index.js'
import contacts from './pages/contact/index.js'

const main = document.getElementById('root')

const init = () => {
    window.addEventListener('hashchange', () => {
        switch (window.location.hash) {
            case " ":
                main.appendChild(home())
                break
            case "#about":
                main.appendChild(about())
                break
            case "#contacts":
                main.appendChild(contacts())
                break
        }
    })
}

window.addEventListener('load', () => {
    main.appendChild(home())
    init()
})