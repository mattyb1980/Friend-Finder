// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// ===============================================================================

var friendArray = require("../data/friendData");


module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friendArray);
  });

  // ---------------------------------------------------------------------------



  app.post("/api/friends", function(req, res) {

  var bestScore = {
  name: "",
  photo: "",
  bio: "",
  matchScore: 40
  };

var scoreDifference = 0;
    
    var newFriend={
     name: req.body.name,
     photo: req.body.photo,
     bio: req.body.bio,
     scores: req.body["scores[]"]

    }
    console.log(newFriend);

    friendArray.push(newFriend);

      for (var i = 0; i < friendArray.length - 1; i++) {

        scoreDifference = 0;
        
        for (var j = 0; j < friendArray[i].scores.length; j++) {

          var scoreDifference = Math.abs(friendArray[i].scores[j] - newFriend.scores[j]);
        }
        if (scoreDifference<=bestScore.matchScore){
        bestScore.name = friendArray[i].name;
        bestScore.photo = friendArray[i].photo;
        bestScore.bio = friendArray[i].bio;
        bestScore.matchScore = scoreDifference;
        }

        
     }
     res.json(bestScore);
  });

  

  // ---------------------------------------------------------------------------

  app.post("/api/clear", function() {
    // Empty out the arrays of data
    friendData = [];

    console.log(friendData);
  });
};
