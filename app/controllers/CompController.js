'use strict';

app.controller("CompController", function($scope, $window, UserFactory, CompFactory) {

  let currentUser = null;

  UserFactory.isAuthenticated()
    .then((user) => {
      console.log("user status", user);
      currentUser = UserFactory.getUser();
      fetchComp();
    });

  // $scope.searchText = FilterFactory;

  // for viewing all computers, deleting a computer, and updating a computer

  // function fetchComp() {
  //   CompFactory.getComp();
  //   .then((compData) => {
  //     $scope.compData = compData;
  //     console.log("compData from getComps", $scope.compData);
  //   })
  //   .catch((err) => {
  //     console.log("error from getComps", err);
  //   });
  //   console.log("comp Obj in CompController", $scope.comp);
  // }

  function fetchComp() {
    let compArr = [];
    CompFactory.getCompList(currentUser)
      .then((compList) => {
        let compData = compList.data;
        console.log("compData", compData);
        Object.keys(compData).forEach((key) => {
          compData[key].id = key;
          compArr.push(compData[key]);
        });
        $scope.comps = compArr;
      })
      .catch((err) => {
        console.log("error", err);
      });
    console.log("comp Obj in CompController", $scope.comps);
  }

  $scope.deleteComp = (compId) => {
    console.log("delete called", compId);
    CompFactory.deleteComp(compId)
      .then((data) => {
        console.log("removed part", data);
        fetchComp(currentUser);
      });
  };

  $scope.editComp = (comp) => {
    console.log("comp obj", comp);
    comp.edited = true;
    CompFactory.setComp(comp);
    $window.location.href = "#!/comp/new";
  };


});