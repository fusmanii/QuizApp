(function(){

  angular
    .module("animalFacts")
    .controller("resultsCtrl", ResultsController);

    ResultsController.$inject = ['quizMetrics', 'dataService'];

    function ResultsController(quizMetrics, dataService) {

      var vm = this;

      vm.quizMetrics = quizMetrics;
      vm.dataService = dataService;
      vm.setActiveQuestion = setActiveQuestion;
      vm.activeQuestion = 0;
      vm.reset = reset;
    
      function setActiveQuestion(index) {
        vm.activeQuestion = index;
      }

      function reset() {
        quizMetrics.changeState("results", false);
        quizMetrics.numCorrect = 0;

        for (var i = 0; i < vm.dataService.questions.length; i++) {
          var data = vm.dataService.questions[i];

          data.selected = null;
          data.correct = null;
        }
      }
    }

})();