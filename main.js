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

$(function () {
    var question1 = Object.assign({}, BULB.singleQuestionOptions, {json: question1JSON});
    $('#question1').slickQuiz(question1);
});

$(function () {
    var question2 = Object.assign({}, BULB.singleQuestionOptions, {json: question2JSON});
    $('#question2').slickQuiz(question2);
});
