(function(){

	angular
		.module("animalFacts")
		.controller("listCtrl", ListController);

    ListController.$inject = ['quizMetrics', 'dataService'];

		function ListController(quizMetrics, dataService){
			var vm = this;

			vm.quizMetrics = quizMetrics;
      vm.dataService = dataService;
			vm.activeAnimal = {};
			vm.changeActiveAnimal = changeActiveAnimal;
      vm.activateQuiz = activateQuiz
			vm.search = "";

			function changeActiveAnimal(index) {
				vm.activeAnimal = index;
			}

      function activateQuiz() {
        quizMetrics.changeState("quiz", true);
      }

		}
})();