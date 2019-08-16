// Problem: Computer generates a random key,
// solution: select a random key and save it on memory to guess

var ComputerKey =

    function random_character() {
        var chars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "u", "r", "s","t","u","v","w","x","y","z"];
    return chars.substr(Math.floor(Math.random() * 54), 1);
        console.log(chars);
    }

    