(function(){

	angular
		.module("animalFacts")
		.controller("quizCtrl", QuizController);

    QuizController.$inject = ['quizMetrics', 'dataService'];

		function QuizController(quizMetrics, dataService) {

			var vm = this;
      var numQuestionsAnswered = 0;

      vm.quizMetrics = quizMetrics;
      vm.dataService = dataService;
      vm.setActiveQuestion = setActiveQuestion;
      vm.questionAnswered = questionAnswered;
      vm.selectAnswer = selectAnswer;
      vm.finaliseAnswers = finaliseAnswers;
      vm.activeQuestion = 0;
      vm.error = false;
      vm.finalise = false;

      function setActiveQuestion(index) {

        if (index === undefined) {

          var breakOut = false;
          var quizLength = vm.dataService.questions.length - 1;

          while (!breakOut) {
            vm.activeQuestion = vm.activeQuestion < quizLength ? ++vm.activeQuestion : 0;

            if (vm.activeQuestion === 0) {
              vm.error = true;
            }

            if (vm.dataService.questions[vm.activeQuestion].selected === null) {
              breakOut = true;
            }
          }
        } else {
          vm.activeQuestion = index;
        }

      }

      function questionAnswered() {

        var quizLength = vm.dataService.questions.length;
        if (vm.dataService.questions[vm.activeQuestion].selected !== null) {
          numQuestionsAnswered++;
          if (numQuestionsAnswered >= quizLength) {
            //
            for (var i = 0; i < quizLength; i++) {
              if (vm.dataService.questions[i].selected === null) {
                vm.setActiveQuestion(i);
                return;
              }
            }
            vm.error = false;
            vm.finalise = true;
            return;
          }
        }

        vm.setActiveQuestion();
      }

      function selectAnswer(index) {

        console.log();
        vm.dataService.questions[vm.activeQuestion].selected = index;
      }

      function finaliseAnswers() {
        vm.finalise = false;
        numQuestionsAnswered = 0;
        vm.activeQuestion = 0;
        quizMetrics.markQuiz();
        quizMetrics.changeState("quiz", false);
        quizMetrics.changeState("results", true);
      }
		}

})();