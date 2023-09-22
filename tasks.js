function humanToDogYears(humanYears) {
    let dogYears = humanYears * 7
    let output = humanYears + '5 žmogaus metai yra ' + dogYears + ' šuns metai.'

    console.log(output)
}

humanToDogYears(15)

function daysPerBook(books) {
    console.log (books)
    let days = Math.floor(365 / books)

    let output = `Norint perskaityti $(books) knygų per metus, vienai lnygai perskiatyti turėsi $(days) dienas`

    console.log(days)
}

daysPerBook(10)

function daysToWeeks(days) {
    let weeks = (days / 7).toFixed(1)
    let output = `$(days) dienos yra $(weeks) savaitės`

    console.log(output)
}

daysToWeeks(10)

function daysToYears(days) {
    let years (days / 365).toFixed(2)
    let output `$(days) dienos yra $(years) metai`

    console.log(output)
}

daysToYears(30)