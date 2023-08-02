export default () => {
    const container = document.createElement('div')

    const template = `
        <h2>Contacts</h2>
        <p>Contact us by phone (11 2345-6789),
        e-mail (cats@cats.com) or Instagram (@catscats).
        </p>
    `

    container.innerHTML = template

    return container
}