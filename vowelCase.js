function vowelCase(str) {    
    return str.replace(/[a-z]/gi, char=>/[aeiou]/i.test(char) ? char.toUpperCase() : char.toLowerCase());
}

vowelCase("vowelcase")
vowelCase("coding is fun")
vowelCase("HELLO, world!")
vowelCase("git cherry-pick")
vowelCase("HEAD~1")