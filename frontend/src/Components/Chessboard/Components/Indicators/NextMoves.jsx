import { useSelector } from 'react-redux'

export default function NextMoves() {
    const { gameField, nextMoves } = useSelector((store) => store.chess)
    const [color1, color2] = useSelector((store) => store.chess.colors)

    return nextMoves.map(([x, y]) => {
        const styles = {
            top: `${y * 80}px`,
            left: `${x * 80}px`
        }

        return gameField[y][x] === '0' ? (
            <div className={'dot'} style={styles} key={`${x}${y}d`}></div>
        ) : (
            <div key={`${x}${y}t`}>
                <div className={'rectangle'} style={styles}></div>
                <div
                    className={'circle'}
                    style={{
                        ...styles,
                        background: (x + y) % 2 ? color2 : color1
                    }}
                ></div>
            </div>
        )
    })
}
