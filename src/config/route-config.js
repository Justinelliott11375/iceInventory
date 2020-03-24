
module.exports = {
    init(app){
      const staticRoutes = require("../routes/static");
      const reportRoutes = require("../routes/reports");
      const blockPullRoutes = require("../routes/blockPulls");
      const amIceInventoryRoutes = require("../routes/amIceInventories");

      app.use(staticRoutes);
      app.use(reportRoutes);
      app.use(blockPullRoutes);
      app.use(amIceInventoryRoutes);
    }
  }