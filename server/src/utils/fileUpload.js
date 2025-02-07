const fs = require('fs');
const multer = require('multer');
const env = process.env.NODE_ENV || 'development';
const { PROD_STATIC_PATH, DEV_STATIC_PATH } = require('../constants');

const filePath = env === 'production' ? PROD_STATIC_PATH : DEV_STATIC_PATH;

if (!fs.existsSync(filePath)) {
  fs.mkdirSync(filePath, {
    recursive: true,
  });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, filePath);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

module.exports = upload;
