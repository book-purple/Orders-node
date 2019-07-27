/**
 * function to return Error Object
 * @param {*} req
 * @param {*} callback
 */
var errorOject = (req) => {
    var errorResponse = {
        'error': req.err,
        'errorMessage': req.errorMessage
    }
    return errorResponse;
}

module.exports.errorOject = errorOject;