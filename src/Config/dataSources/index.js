const GitHubService = require("../../service/GitHub.Service");
const UserRegisterService = require("../../service/UserRegisterService");
const taskRegisterService = require("../../service/taskRegisterService");

module.exports = ()=>({
    gitHubService : GitHubService,
    userRegisterService : UserRegisterService,
    tasksService : taskRegisterService,
  });