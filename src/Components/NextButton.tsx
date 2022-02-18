import React from 'react'

type NextQuizText = {
    NBtext: string,
    changeNextButton: () => void
    // nextButton: string // changeNextButtonを渡す。
    // 関数　型付け
}
const NextButton = (props: NextQuizText) => {
    return (
        <>
            <p onClick={props.changeNextButton}>{props.NBtext}</p>
        </>
    )
}

export default NextButton