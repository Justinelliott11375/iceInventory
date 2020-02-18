
module.exports = {
    init(app){
      const staticRoutes = require("../routes/static");
      const reportRoutes = require("../routes/reports");

      app.use(staticRoutes);
      app.use(reportRoutes);
    }
  }