import React, { Component } from 'react'

import QuizQuestionButton from './QuizQuestionButton.js'

class QuizQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            incorrectAnswer: false
        }
    }
    
    handleClick(buttonText) {
        if(buttonText === this.props.quiz_question.answer) {
            this.props.showNextQuestionHandler()
            this.setState({incorrectAnswer: false})
        }
        else {
            this.setState({incorrectAnswer: true})
        }
         
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
            {this.state.incorrectAnswer === true &&
                <p className='error'>Sorry, that's not right</p> 
            }
          </main>

        );
    }
}

export default QuizQuestion
