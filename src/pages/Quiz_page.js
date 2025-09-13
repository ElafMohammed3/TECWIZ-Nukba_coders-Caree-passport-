import React from 'react';
import { Link } from 'react-router-dom';
import '.\src\assets\Quiz.js'
import '.\src\assets\Quiz.css'

function Quiz_Page() {
  return (
    <main id="quiz" class="page">
    <h2 class="section-title">Interest Quiz</h2>
    
    <div class="quiz-container">
        <div class="quiz-progress">
            <div class="quiz-progress-bar" id="quiz-progress"></div>
        </div>
        
        <div id="quiz-intro">
            <h3>Discover Your Future Career</h3>
            <p>This quiz will help you identify your professional tendencies and suitable jobs for your personality. The test consists of 10 questions, choose the answer that best expresses you.</p>
            <button class="btn btn-primary" id="start-quiz">Start Quiz</button>
        </div>
        
        <div id="quiz-questions" style={{display: 'none'}}>
            <div class="quiz-question" id="current-question"></div>
            <div class="quiz-options" id="quiz-options-container"></div>
            <div class="quiz-nav">
                <button class="btn btn-outline" id="prev-question" disabled>Previous</button>
                <button class="btn btn-primary" id="next-question">Next</button>
            </div>
        </div>
        
        <div id="quiz-results" style="display: none;">
            <h3>Interest Quiz Results</h3>
            <p id="quiz-result-text"></p>
            <div id="career-suggestions"></div>
            <button class="btn btn-primary" id="restart-quiz">Restart Quiz</button>
        </div>
    </div>
    </main>
  );
}

export default Quiz_Page;
