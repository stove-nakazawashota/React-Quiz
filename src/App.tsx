import './App.css';
import { useState } from 'react';
import QuizText from './Components/QuizText';
import ButtonWrap from './Components/ButtonWrap';
import NextButton from './Components/NextButton';
import ResetButton from './Components/ResetButton';
import Title from './Components/Title'
import NowQuestionText from './Components/NowQuestionText'

type CheckAnswersType = {
  Number: string
  isAnswer: boolean
}

// クイズの問題文をCheckAnswersTypeに定義。
type QuizAnswersType = {
  quizText1: CheckAnswersType
  quizText2: CheckAnswersType
  quizText3: CheckAnswersType
}

function App() {
  // useStateを使って、クイズの進行を管理
  const [questionNumber, setQuestionNumber] = useState<number>(0)
  const [NBtext, setNBtext] = useState<string>('')
  // useStateを使って、クイズの問題文をセット
  const [question, setQuestion] = useState<string[]>(
    [
      '1+1=?',
      '2+2=?',
      '6+6=?',
      '7+7=?'
    ]
  )
  // useStateを使って、クイズの答えをセット
  const [answers, setAnswers] = useState<QuizAnswersType[]>(
    [
      { // 1問目の答え
        quizText1: {
          Number: '2',
          isAnswer: true
        },
        quizText2: {
          Number: '4',
          isAnswer: false
        },
        quizText3: {
          Number: '8',
          isAnswer: false
        },
      },
      { // 2問目の答え
        quizText1: {
          Number: '1',
          isAnswer: false
        },
        quizText2: {
          Number: '4',
          isAnswer: true
        },
        quizText3: {
          Number: '5',
          isAnswer: false
        },
      },
      {// 3問目の答え
        quizText1: {
          Number: '4',
          isAnswer: false
        },
        quizText2: {
          Number: '10',
          isAnswer: false
        },
        quizText3: {
          Number: '12',
          isAnswer: true
        },
      },
      {// 4問目の答え
        quizText1: {
          Number: '4',
          isAnswer: false
        },
        quizText2: {
          Number: '14',
          isAnswer: true
        },
        quizText3: {
          Number: '9',
          isAnswer: false
        }
      }
    ]
  )
  // 現在の問題文を表すstate↓
  const [quizText, setQuizText] = useState<string>(question[questionNumber])
  // 現在の答えを表示するstate↓
  const [buttontext, SetButtonText] = useState<QuizAnswersType>(answers[questionNumber])

  // { // 1問目の答え
  //   // quizText1: '2',
  //   quizText1: {
  //     Number: '2',
  //     isAnswer: true
  //   },
  //   quizText2: {
  //     Number: '4',
  //     isAnswer: false
  //   },
  //   quizText3: {
  //     Number: '8',
  //     isAnswer: false
  //   }
  // },


  // ボタンをクリックしたら、クイズの問題を管理している「questionNumber」の数字を1増やして、クイズの問題を次に進める。
  const NextQuestion = (isAnswers: boolean) => {
    if (questionNumber >= question.length - 1 || questionNumber >= answers.length - 1) {
      checkAnswers(isAnswers)
      // ここに戻るボタン。
      const button: HTMLButtonElement = document.querySelector('.button')!
      button.classList.toggle('is-hidden')
      return;
    } else {
      const newQuestionNumber = questionNumber + 1;
      setQuestionNumber(newQuestionNumber)
      setQuizText(question[newQuestionNumber])
      SetButtonText(answers[newQuestionNumber])
      checkAnswers(isAnswers)
      return false
    }
  }

  const resetButton = () => {
    const button: HTMLButtonElement = document.querySelector('.button')!
    button.classList.remove('is-hidden')
    setQuestionNumber(0)
    setQuizText(question[0])
    SetButtonText(answers[0])
    setNBtext('')
  }

  // 正解、不正解の判定を作る。
  const changeNextButton = () => {
    setNBtext('')
  }

  // 引数にboolean型をとる
  // booleanに応じて、正解、不正解を変える。
  const checkAnswers = (isAnswer: boolean) => {
    if (isAnswer === true) {
      setNBtext('正解')
    } else {
      setNBtext('不正解')
    }
  }

  return (
    <>
      {/* クイズのパーツを表示する */}
      <Title></Title>
      <NowQuestionText questionNumber={questionNumber}></NowQuestionText>
      <QuizText quizText={quizText} ></QuizText>
      <ButtonWrap buttontext={buttontext} Nextquestion={NextQuestion} checkAnswers={checkAnswers}></ButtonWrap>
      <NextButton NBtext={NBtext} changeNextButton={changeNextButton}></NextButton>
      <ResetButton resetButton={resetButton}></ResetButton>
    </>
  )
}

export default App

// 正解、不正解の関数を作る。
// 関数内の処理を作る。(とりあえずクリックしたら全部正解と出る)
// 答えのクリックイベントでそれを実行させる。