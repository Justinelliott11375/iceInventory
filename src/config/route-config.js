
module.exports = {
    init(app){
      const staticRoutes = require("../routes/static");
      const reportRoutes = require("../routes/reports");
      const blockPullRoutes = require("../routes/blockPulls");

      app.use(staticRoutes);
      app.use(reportRoutes);
      app.use(blockPullRoutes);
    }
  }