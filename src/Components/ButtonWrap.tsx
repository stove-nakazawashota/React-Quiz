import React from 'react'
import Button from './Button'

type CheckAnswersType = {
    Number: string,
    isAnswer: boolean
}


// クイズの答えをstring型に定義する
type QuizTextType = {
    quizText1: CheckAnswersType
    quizText2: CheckAnswersType
    quizText3: CheckAnswersType
}

type PropsType = {
    buttontext: QuizTextType
    Nextquestion: (isAnswers: boolean) => void
    checkAnswers: (isAnswers: boolean) => void
}

// Buttonコンポーネントを表示して、クリックされたらNextQuestion関数を実行。
const ButtonWrap = (props: PropsType) => {
    return (
        <div className="answers">
            <Button buttontext={props.buttontext.quizText1} Nextquestion={props.Nextquestion} checkAnswers={props.checkAnswers}></Button>
            <Button buttontext={props.buttontext.quizText2} Nextquestion={props.Nextquestion} checkAnswers={props.checkAnswers}></Button>
            <Button buttontext={props.buttontext.quizText3} Nextquestion={props.Nextquestion} checkAnswers={props.checkAnswers}></Button>
            {/* <p className="button">2</p>
            <p className="button">3</p> */}
        </div>
    )
}
export default ButtonWrap
