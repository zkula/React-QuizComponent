import React, { Component } from 'react'
import QuizQuestion from './QuizQuestion.js'
import QuizEnd from './QuizEnd.js'

let quizData = require('./quiz_data.json')


class Quiz extends Component {
    constructor(props){
        super(props);
        this.state = {
            quiz_position: 1,
        };
    }
    
    render() {
      const isQuizEnd = (quiz_position-1) === quizData.quiz_questions.length;
      if (isQuizEnd) {
          display = <QuizEnd />;
      }
      else {
        display = <QuizQuestion quiz_question = {quizData.quiz_questions[this.state.quiz_position-1]}/> ;
      }
      
        return (
        <div className="QuizQuestion">
            {display}
            
        </div>
        
      )
    }
  }


export default Quiz