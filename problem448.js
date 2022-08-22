function findDisappearedNumbers (nums) {
    let number = []
    for (let i = 1; i <= nums.length; i++) {
        if (!nums.includes(i)) {
            number.push(i)
        }
    }
    return number
}


console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]))