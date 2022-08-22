function isAnagram(s, t) {
    let sArr = s.split("").sort()
    let tArr = t.split("").sort()
    
    if (s.length !== t.length){
        return false;
    }
    for (let i = 0; i < t.length; i++) {
        if (sArr[i] !== tArr[i]) return false
    }
    return true
}

console.log(isAnagram("anagram", "nagaram"));