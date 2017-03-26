(function() {

	angular
		.module("animalFacts")
		.factory("quizMetrics", QuizMetrics);

    QuizMetrics.$inject = ['dataService'];

		function QuizMetrics(dataService) {

			var quizObj = {
        listActive: false,
				quizActive: false,
        resultsActive: false,
        changeState: changeState,
        correctAnswers: [],
        markQuiz: markQuiz,
        numCorrect: 0
			}

			return quizObj;

      function changeState(metric, state) {
        if (metric === "quiz") {
          quizObj.quizActive = state;
          quizObj.listActive = false;
          quizObj.resultsActive = false;
        } else if (metric === "results") {
          quizObj.resultsActive = state;
          quizObj.listActive = false;
          quizObj.quizActive = false;
        } else if (metric === "list") {
          quizObj.listActive = state;
          quizObj.quizActive = false;
          quizObj.resultsActive = false;
        } else {
          return false;
        }
      }

      function markQuiz() {

        quizObj.correctAnswers = dataService.answers;

        for (var i = 0; i < dataService.questions.length; i++) {
          if (dataService.questions[i].selected === dataService.answers[i]) {
            dataService.questions[i].correct = true;
            quizObj.numCorrect++;
          } else {
            dataService.questions[i].correct = false;
          }
        }
      }
		}

})();