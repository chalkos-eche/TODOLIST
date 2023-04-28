const express = require("express");
// const multer = require("multer");
// const path = require("path");
const app = express();
const PORT = 8080;

// app.set("view engine", "ejs");
// app.use("/views", express.static(__dirname + "/views"));
app.use("/static", express.static(__dirname + "/static"));
// app.use("/uploads", express.static(`${__dirname}/uploads`));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// const uploadDetail = multer({
//   storage: multer.diskStorage({
//     destination(req, file, done) {
//       //destination:경로설정
//       // done :callback 함수
//       done(null, "uploads/");
//     },
//     filename(req, file, done) {
//       const ext = path.extname(file.originalname);
//       done(null, path.basename(req.body.id, ext) + ext);
//       //  [파일명 +현재시간.확장자] 형식으로 업로드
//     },
//   }),
// });
// const indexRouter = require("./routes");
// app.use("/", indexRouter);

app.get("/", (req, res) => {
  res.send("hello");
});
app.get("*", (req, res) => {
  // res.send('404 Error! 잘못된 주소 형식입니다.');
  res.render("404");
});
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
