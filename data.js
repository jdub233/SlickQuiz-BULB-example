// Setup your quiz text and questions here

var question1JSON = {
    "info": {
        "name":    "True False question",
        "main":    "",
        "results": "<h5>Learn More</h5><p>Etiam scelerisque, nunc ac egestas consequat, odio nibh euismod nulla, eget auctor orci nibh vel nisi. Aliquam erat volutpat. Mauris vel neque sit amet nunc gravida congue sed sit amet purus.</p>",
    },
    "questions": [
        {
            "q": "Is Earth bigger than a basketball?",
            "a": [
                {"option": "Yes",    "correct": true},
                {"option": "No",     "correct": false},
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>",
        },
    ]
};


var question2JSON = {
    "info": {
        "name":    "Multiple choice question",
        "main":    "",
        "results": "<h5>Learn More</h5><p>Etiam scelerisque, nunc ac egestas consequat, odio nibh euismod nulla, eget auctor orci nibh vel nisi. Aliquam erat volutpat. Mauris vel neque sit amet nunc gravida congue sed sit amet purus.</p>",
    },
    "questions": [
        {
            "q": "What number is the letter A in the English alphabet?",
            "a": [
                {"option": "8",      "correct": false},
                {"option": "14",     "correct": false},
                {"option": "1",      "correct": true},
                {"option": "23",     "correct": false},
            ],
            "correct": "<p><span>That's right!</span> The letter A is the first letter in the alphabet!</p>",
            "incorrect": "<p><span>Uhh no.</span> It's the first letter of the alphabet</p>",
        },
    ]
};
