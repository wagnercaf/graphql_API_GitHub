const NoPermissionError = require("../../Errors/NoPermissionError");
const TaskNotFoundError = require("../../Errors/TaskNotFoundError");
const UserNotFoundError = require("../../Errors/UserNotFoundError");

module.exports = (error)=>{
    if (error.originalError instanceof NoPermissionError){
      return new Error(error.message);
    }
    if (error.originalError instanceof TaskNotFoundError){
      return new Error(error.message);
    }    
    if (error.originalError instanceof UserNotFoundError){
      return new Error(error.message);
    }     
    return error;
  };

  