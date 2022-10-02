let userName = 'Muhammad Umar';
let userLowerName = 'muhammad umar';

function titleCase(str) {
    return str.toLowerCase().split(' ').map(function(word) {
      return word.replace(word[0], word[0].toUpperCase());
    }).join(' ');
}

console.log('LowerCase: Hi', userName.toLowerCase());
console.log('UpperCase: Hi', userName.toUpperCase());
console.log('TitleCase: Hi', titleCase(userLowerName));
