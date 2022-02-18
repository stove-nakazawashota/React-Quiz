
type ResetButton = {
    resetButton: () => void
}

const ResetButton = (props: ResetButton) => {
    return (
        <>
            <div>
                <button onClick={props.resetButton} className='button'>最初に戻る</button>
            </div>
        </>
    )
};

export default ResetButton