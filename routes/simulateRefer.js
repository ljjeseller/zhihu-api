const express = require('express');
const router = express.Router();
const request  = require('request');
const url = require('url');

/* catch refer pic */
router.get('/', (req, res) => {
    const imageUrl = url.parse(req.url, true).query.image;
    console.log(imageUrl);

    if (imageUrl === null || imageUrl === '' || imageUrl === undefined) {
        res.end();
    }

    const parsedUrl = url.parse(imageUrl); // 这里暂时使用图片服务器主机名做Referer
    const referrer = parsedUrl.protocol + '//' + parsedUrl.host;

    const options = {
        url: imageUrl,
        headers: {
            'Referer': referrer,
        }
    };

    request(options).on('error', (err) => {
        console.log(err);
        res.end();
    }).pipe(res);

});

module.exports = router;
