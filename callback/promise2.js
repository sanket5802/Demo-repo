
const GITHUB_API =  "https://github.com/sanket5802"

const user = fetch(GITHUB_API); // fetrch returns a promise ;

console.log(user);

user.then(function (data){     
    console.log(data)
})