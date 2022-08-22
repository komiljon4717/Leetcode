function findTheDifference(s, t) {
    let tArr = [...t]
    let sArr = [...s]
    sArr.forEach((letter) => {
        if (tArr.includes(letter)) tArr.splice(tArr.indexOf(letter), 1)
    })
    return tArr[0]
}

console.log(findTheDifference("a", "aa"));