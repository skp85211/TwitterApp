const express = require("express")
const Router = express.Router()
const commentLikesFunc = require("../controller/commentLikes")
const jwtAuth = require("../jwtAuth")

//Create commentLikes entry, Likes a comment
Router.get("/create/userid/:userid/commentid/:commentid/likeType/:likeType", jwtAuth.authenticateToken,commentLikesFunc.createLike)

//Read commentlikes 
Router.get("/read/userid/:userid/commentid/:commentid", jwtAuth.authenticateToken,commentLikesFunc.readLike)

//delete like or dislike
Router.get("/delete/userid/:userid/commentid/:commentid", jwtAuth.authenticateToken,commentLikesFunc.deleteLike)

//All user list who liked the comment
Router.get("/all/users/commentid/:commentid", jwtAuth.authenticateToken,commentLikesFunc.whoAllLikedcomment)


module.exports = Router