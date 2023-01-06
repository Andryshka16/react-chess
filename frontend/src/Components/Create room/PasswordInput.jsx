export function PasswordInput({ globalState }) {
    const [state, setState] = globalState

    return (
        <div className='input-field'>
            <label htmlFor={'password'}>
                <h2>Room password:</h2>
            </label>
            <input
                type='text'
                id={'password'}
                value={state.password}
                placeholder={'Password'}
                onChange={(event) => {
                    setState((prev) => ({
                        ...prev,
                        password: event.target.value
                    }))
                }}
            />
        </div>
    )
}
