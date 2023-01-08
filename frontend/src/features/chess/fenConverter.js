export default function FenToNormal(fen) {
    const gameField = []

    fen.split('/').forEach((element) => {
        const row = ['0', '0', '0', '0', '0', '0', '0', '0']
        let index = 0

        for (let i of element) {
            if (!isNaN(i)) {
                index += +i
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
