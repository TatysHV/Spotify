module.exports = (app) => {

    let controller = app.controllers.api;
    let c = app.helpers.controllerHandler;

    app.get('/', c(controller.index));

    app.get('/value/:value', c(controller.indexValue, (req, res, next) => [req.params.value]));

};
