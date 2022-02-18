
// 一言で型を付けられないから、typeを使う。
// オブジェクト型のときはtypeを使う。
type PropsType = {
    quizText: string
}

// App.tsxで定義した内容をPropsとして受け取って、問題文として表示する。
const QuizText = (props: PropsType) => {
    return (
        <div className="quiz-text">
            <p>{props.quizText}</p>
        </div>
    )
}
export default QuizText