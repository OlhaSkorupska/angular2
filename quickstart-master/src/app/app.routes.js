"use strict";
var index_1 = require("./features/index");
exports.ROUTES = index_1.MainRoutes.concat(index_1.MovieRoutes, [
    { path: '', redirectTo: 'main', pathMatch: 'full' }
]);
//# sourceMappingURL=app.routes.js.map