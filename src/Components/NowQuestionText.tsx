type nowQuestion = {
    questionNumber: number
}

const NowQuestionText = (props: nowQuestion) => {
    return (
        <div className="nowQuestionText">
            <p>現在{props.questionNumber}問目</p>
        </div>
    )
}

export default NowQuestionText