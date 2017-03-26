(function(){

  angular
    .module("animalFacts")
    .controller("speciesCtrl", SpeciesController);

    SpeciesController.$inject = ['quizMetrics', 'dataService'];

    function SpeciesController(quizMetrics, dataService) {

      var vm = this;

      vm.quizMetrics = quizMetrics;

      dataService.getSpecie()
        .success(function(data) {
          vm.data = data;
      }).error(function(data, status) {
          vm.data = [];
      });

      vm.activateList = activateList;

      function activateList(specie) {

        dataService.setSpecie(specie);
        quizMetrics.changeState("list", true);
      }
    }

})();