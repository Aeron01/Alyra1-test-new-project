const chalk = require('chalk')
const readlineSync = require('readline-sync');
const userName = readlineSync.question('Username : ');
const passWord = readlineSync.question('Password : ');/*, {
hideEchoBack: true
}); // Masque avec des "*" ce que vous tapez et cela par defaut (enlever {hideEchoBack:true} le désactive).*/

const check = (passWord, userName) => {
  if (passWord === 'Vador' && userName === 'Anakin') {
    return console.log(chalk.greenBright(`Welcome back ${userName}`))
  } else {
    return console.log(chalk.redBright(`Connection Failed : username or password is incorrect !`))
  }
}
check
