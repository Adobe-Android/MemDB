'use strict';

app.factory("CompFactory", function($q, $http, FirebaseUrl, UserFactory) {


  let comp = {
    name: "",
    description: "",
    socket: null,
    mobo: null,
    cpu: null,
    mem: null,
    edited: false,
    id: null,
    uid: UserFactory.getUser()
  };

  let getComp = () => {
    return comp;
  };

  let setComp = (compObj) => {
    setCompBasics(compObj);
    setCompSocket(compObj);
    setCompMobo(compObj);
    setCompCPU(compObj);
    setCompMem(compObj);
    comp.id = compObj.id;
    comp.edited = compObj.edited;
    console.log("compID", comp.id);
  };

  let setCompBasics = (compObj) => {
    comp.name = compObj.name;
    comp.description = compObj.description;
    console.log("compObj", compObj);
  };

  let setCompSocket = (compObj) => {
    comp.socket = compObj.socket;
    console.log("compObj", compObj);
  };

  let setCompMobo = (compObj) => {
    comp.mobo = compObj.mobo;
    console.log("compObj", compObj);
  };

  let setCompCPU = (compObj) => {
    comp.cpu = compObj.cpu;
    console.log("compObj", compObj);
  };

  let setCompMem = (compObj) => {
    comp.mem = compObj.mem;
    console.log("compObj", compObj);
  };


  let getCompList = (userId) => {
    console.log("userId", userId);
    return $q((resolve, reject) => {
      $http.get(`${FirebaseUrl}comps.json?orderBy="uid"&equalTo="${userId}"`)
        .then((compData) => {
          resolve(compData);
        })
        .catch((err) => {
          console.log("oops", err);
          reject(err);
        });
    });
  };

  // Located in MemController
  let postNewComp = () => {
    return $q((resolve, reject) => {
      $http.post(`${FirebaseUrl}comps.json`,
          angular.toJson(comp))
        .then((compData) => {
          console.log("compData", compData);
          resolve(compData);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
  

  let updateComp = () => {
    return $q((resolve, reject) => {
      let compId = comp.id;
      console.log("compID", compId);
      // PUT the entire obj to FB
      if (compId) {
        $http.put(`${FirebaseUrl}comps/${compId}.json`,
            angular.toJson(comp))
          .then((data) => {
            resolve(data);
          })
          .catch((err) => {
            reject(err);
          });
      } else {
        console.log("No updates for you!");
      }
    });
  };

  let deleteComp = (compId) => {
    return $q((resolve, reject) => {
      if (compId) {
        $http.delete(`${FirebaseUrl}comps/${compId}.json`)
          .then((data) => {
            resolve(data);
          })
          .catch((err) => {
            reject(err);
          });
      } else {
        console.log("No id passed in");
      }
    });
  };

  let getSingleComp = (comp) => {
    return $q((resolve, reject) => {
      $http.get(`${FirebaseUrl}comps/${comp}.json`)
        .then((comp) => {
          resolve(comp.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  // deleteTodoItem, updateTodoStatus, getSingleTodoItem
  return {
    setComp,
    getCompList,
    postNewComp,
    updateComp,
    deleteComp,
    getSingleComp,
    setCompBasics,
    setCompMobo,
    setCompCPU,
    setCompSocket,
    setCompMem,
    getComp
  };
});