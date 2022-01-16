const express = require('express')
const path = require("path");
const multer = require('multer')
const sharp = require('sharp')

const port = process.env.PORT

// express
const app = express()
app.use(express.json())


// multer's filter: image size + allowed extensions 
const avatar = multer({
  limits: {
    fileSize: 5242880
  },
  fileFilter(req, image, cd) {
    if (!image.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
      return cd(new Error())
    }
    return cd(undefined, true)
  }
})

// multer
app.post("/upload", avatar.single('image'), async (req, res) => {
  const buffer = await sharp(req.file.buffer).resize({ width: 786, height: 677 }).png().toBuffer()

  res.send(Buffer.from(buffer).toString('base64'))
},
  (error, req, res, next) => {
    res.send({ error: error })
  })


// necessary when using reactjs & nodejs together
app.use(express.static(path.resolve(__dirname, "../client/build")));
app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../client/build', 'index.html')))


app.listen(port, () => {
  console.log(`Server is running on ${port} `)
})
