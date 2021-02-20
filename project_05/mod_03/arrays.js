// const arr= ['elijah', 'jeff', 'greg']

// const jeffExists = arr.find(function(element){
//     return element === 'jeff'
// })

// console.log(jeffExists)



// FIND
// const people = [
//     {
//         name: 'jane',
//         age: 30
//     },
//     {
//         name: 'john',
//         age: 29
//     },
//     {
//         name: 'joe',
//         age: 41
//     },
// ]

// const john = people.find(function(person){
//     return person.name === "john"
// })
// console.log(john)

// indexOf


// const people= ['elijah', 'jeff', 'greg', 'jeff']

// const jeffIndex = people.indexOf('jeff')
// console.log(jeffIndex)

// FILTER

const sports = [
    {
        name: 'basketball',
        icon: '🏀',
        team: true, 
    },
    {
        name: 'swiming',
        icon: '🏊🏻',
        team: false,
    },
    {
        name: 'tennis',
        icon: '🎾',
        team: false,
    },
    {
        name: 'football',
        icon: '🏈',
        team: true,
    },
    {
        name: 'soccer',
        icon: '⚽️',
        team: true,
    },
]

const teamSports = sports.filter(function (sport){
    return sport.team
})
console.log(teamSports)