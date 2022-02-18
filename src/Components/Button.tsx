import React from 'react'

type CheckAnswersType = {
    Number: string,
    isAnswer: boolean // これ。
}

type PropsType = {
    buttontext: CheckAnswersType
    Nextquestion: (isAnswer: boolean) => void
    checkAnswers: (isAnswer: boolean) => void
}

const Button = (props: PropsType) => {
    // function Text(props: any) {
    //      const [buttontext, SetButtonText] = useState({
    //          quizText: 'aaa'
    //     });
    // }
    return (
        <>
            {/* クリックしたら「Nextquestion関数を実行」する */}
            {/* 引数にbooleanを入れる */}
            <p onClick={() => props.Nextquestion(props.buttontext.isAnswer)}>{props.buttontext.Number}</p>
        </>
    )
}
export default Button
