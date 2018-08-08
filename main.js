// On page JS

var BULB = {};
BULB.singleQuestionOptions = {
    skipStartButton: true,
    displayQuestionCount: false,
    displayQuestionNumber: false,
    perQuestionResponseAnswers: true,
    disableRanking: true,
    disableScore: true,
    checkAnswerText: 'Check Answer',
    nextQuestionText: 'Done',
    events: {
        onCompleteQuiz: function(options) {
            console.log(options);
        }
    },
}
