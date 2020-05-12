export const side = 3

const indexes = Array.from(Array(side ** 2).keys()).map(a => {
    const row = Math.floor(a / side)
    const col = a % side
    })

// const emptyFields = indexes
//     .reduce((acc, cur) => ({...acc, [`field${Math.floor(cur / side)}${cur % side}`]: {}}), {})


