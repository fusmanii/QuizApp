(function() {

  angular
    .module("animalFacts")
    .factory("dataService", ['$http', DataFactory]);

    function DataFactory($http) {

      var dataObj = {
        getSpecie: function () {
          return $http.get('/species');
        },
        getData: function (specie) {
          return $http.get('/animals/' + specie);
        },
        getQuestions: function (specie) {
          return $http.get('/questions/' + specie);
        },
        getAnswers: function (specie) {
          return $http.get('/answers/' + specie);
        },
        answers: [],
        specie: [],
        data: [],
        questions: [],
        selectedSpecie: "",
        setSpecie: setSpecie
      }

      return dataObj;

      function setSpecie(specie) {

        if (specie) {
          dataObj.getData(specie)
            .success(function(data) {
              dataObj.data = data;
            });

          dataObj.getQuestions(specie)
            .success(function(data) {
              dataObj.questions = data;
            });

          dataObj.getAnswers(specie)
            .success(function(data) {
              console.log(data);
              dataObj.answers = data[0].answers;
            });
        }
      }
    }
})();