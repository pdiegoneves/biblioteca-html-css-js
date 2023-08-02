export default () => {
    const container = document.createElement('div')

    const template = `
        <h2>We really love cats</h2>
        <p>It's 6 a.m., time to wake up! Look at my majestic butt.
        I'll sit in your face until you're awake. I'll lick your 
        hair or I'll try the stare. Wake up, wake up, it's a lovely 
        day! Wake up, wake up, it's time to play!<p>
        <h3> I'm not Sorry: Poems by Cats</h3>
        <p>by Rosa Silva</p>

    `

    container.innerHTML = template

    return container
}