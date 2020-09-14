import React, { Component } from 'react'

import QuizQuestionButton from './QuizQuestionButton.js'

class QuizQuestion extends Component {
    handleClick(buttonText) {
        buttonText === this.props.quiz_question.answer ? 
        this.props.showNextQuestionHandler() : alert("Wrong Answer")
    }
    
    render(){
        const options = this.props.quiz_question.answer_options.map((num, index) => 

         <QuizQuestionButton clickHandler = {this.handleClick.bind(this)} key={index} button_text={num}/>
        )
        
        return(
            <main>
            <section>
              <p>
              {this.props.quiz_question.instruction_text}
              </p>
            </section>
            <section className="buttons">
              <ul>
                {options}
              </ul>
            </section>
          </main>

        );
    }
}

export default QuizQuestion
