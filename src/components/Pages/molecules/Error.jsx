
export default function Error(props) {
    return (
        <div data-testid="error" className="error-log">
            <button onClick={props.clearError}>
                {props.errorMessage}
                <i className='error'></i>
            </button>
        </div>
    )
}
