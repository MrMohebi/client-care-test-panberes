export let sessionSetItem = (stringData) => {
    window.sessionStorage.setItem('UserChoices', '[]')
}
export let sessionGetItem = () => {
    return window.sessionStorage.getItem('UserChoices')
}