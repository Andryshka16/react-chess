import { useSelector } from 'react-redux'

export default function Notation() {
    const { initialized } = useSelector((store) => store.thisRoom)

    const digits = initialized ? [8, 7, 6, 5, 4, 3, 2, 1] : [1, 2, 3, 4, 5, 6, 7, 8]
    const letters = initialized ? 'a b c d e f g h' : 'h g f e d c b a'

    const digitStyles = {
        rotate: (initialized ? 0 : 180) + 'deg',
        [initialized ? 'bottom' : 'top']: '-2px',
        [initialized ? 'right' : 'left']: '4px'
    }
    const letterStyles = {
        rotate: (initialized ? 0 : 180) + 'deg',
        [initialized ? 'bottom' : 'top']: '-1px',
        [initialized ? 'left' : 'right']: '5px'
    }

    return (
        <>
            <div className='digits' style={digitStyles}>
                {digits.map((i) => (
                    <p className='notation' key={i}>
                        {i}
                    </p>
                ))}
            </div>

            <div className='letters' style={letterStyles}>
                <p className='notation'>{letters}</p>
            </div>
        </>
    )
}
