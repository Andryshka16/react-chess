const fen = '4kqQ1/8/8/8/8/PPPP4/Q7/R3K2R'

function FenToNormal(fen) {
    const gameField = []

    const FEN = fen.split('/')

    FEN.forEach((element) => {
        const row = ['0', '0', '0', '0', '0', '0', '0', '0']
        let index = 0

        for (let i of element) {
            if (!isNaN(i)) {
                index += (+i)
                continue
            } else if (i === i.toUpperCase()) {
                row[index] = 'w' + i
                index += 1
            } else if (i === i.toLowerCase()) {
                row[index] = 'b' + i.toUpperCase()
                index += 1
            }
        }
        gameField.push(row)
    })

    return gameField
}

console.log(FenToNormal(fen))
