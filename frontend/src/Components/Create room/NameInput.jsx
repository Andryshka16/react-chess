export function NameInput({ globalState }) {
    const [state, setState] = globalState

    return (
        <div className="input-field">
            <label htmlFor={'name'}>
                <h2>Room name:</h2>
            </label>
            <input
                type="text"
                id={'name'}
                value={state.name}
                placeholder={'Name'}
                onChange={(event) => {
                    setState((prev) => ({
                        ...prev,
                        name: event.target.value
                    }))
                }}
            />
        </div>
    )
}
