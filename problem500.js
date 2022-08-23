function findWords (words) {
    const a = "qwertyuiop"
    const b = "asdfghjkl"
    const d = "zxcvbnm"
    let res = []
    

    for (let i = 0; i < words.length; i++) {
        let a_count = 0
        let b_count = 0
        let d_count = 0
        for (let j = 0; j < words[i].length; j++) {
            if (a.includes(words[i][j].toLowerCase())) {
                a_count++
            }
            if (b.includes(words[i][j].toLowerCase())) {
                b_count++
            }
            if (d.includes(words[i][j].toLowerCase())) {
                d_count++
            }
        }
        if (a_count == words[i].length || d_count == words[i].length || b_count == words[i].length) {
            res.push(words[i])
        }
    }
    return res
}

console.log(findWords( ["Hello","Alaska","Dad","Peace"]));