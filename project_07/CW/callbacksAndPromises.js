// let doneWithHomework = true;
// let doneWithChores = false;

// function canIWatchTV(successCallback, errorCallback){
//     if (doneWithChores && doneWithHomework){
//         successCallback();
//     } else{
//         errorCallback();
//     }
// }

// canIWatchTV(
//     () => {
//         console.log("yes you can watch TV")
//     },
//     () => console.log('No, sorry')

// )

// function canIWatchTV(){
//     return new Promise((resolve, reject) => {
//         if(doneWithHomework && doneWithChores) {
//             resolve("yes you can watch TV");
//         } else {
//             reject("No, sorry")
//         }
//     })
// };

// canIWatchTV().then((message) => {
//     console.log(message)
// })

const URL = "https://jsonplace-univclone.herokuapp.com/todos"

fetch(URL)
    .then((response) => {
        return (response.json())

    })