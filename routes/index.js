var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {title: 'Express'});
});


router.get('/practice', function (req, res, next) {
  res.send({
    "data": {
      "totalList": 50,
      "name": "托福核心词汇",
      "status": {
        "progress": 3,
        "currentQuestionNum": 38
      },
      "wordNum": 100,
      "questionNum": 300,
      "currentList": 12,
      "setting": {
        "studyTarget": "“1,2,3\"",
        "pronunciation": 1
      }
    },
    "code": 0
  });
});


router.get('/practice', function (req, res, next) {
  res.send({
    "data": {
      "totalList": 50,
      "name": "托福核心词汇",
      "status": {
        "progress": 3,
        "currentQuestionNum": 38
      },
      "wordNum": 100,
      "questionNum": 300,
      "currentList": 12,
      "setting": {
        "studyTarget": "“1,2,3\"",
        "pronunciation": 1
      }
    },
    "code": 0
  });
});

router.get('/test/list', function (req, res, next) {
  res.send({
    "code": 0,
    "data": {
      "testId": 1,
      "questions": [
        {
          "choice": ["选项A", "选项B", "选项C", "选项D"],
          "answer": 1,
          "dimension": 1,
          "guide": "指导语1",
          "id": 1,
          "question": "这是题目",
          "type": 1
        },
        {
          "choice": ["pp", "le", "a"],
          "answer": "apple",
          "dimension": 2,
          "guide": "指导语2",
          "id": 2,
          "question": "题目",
          "type": 8
        }
      ]
    }
  });
});


module.exports = router;
