/**
 * function to return Error Object
 * @param {*} req
 */
var errorOject = (req) => {
    var errorResponse = {
        'error': req.err,
        'errorMessage': req.errorMessage
    };
    return errorResponse;
};

module.exports.errorOject = errorOject;