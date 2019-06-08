let router = require('express').Router();


router.get('/checkout', function(res, res){
    return res.json({
        'hello':'world'
    });
});

module.exports = router;