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
        "progress": 1,
        "currentQuestionNum": 1
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

        // 近义词题
        {
          "choice": ["选项A", "选项B", "选项C", "选项D"],
          "answer": 1,
          "dimension": 1,
          "guide": "",
          "id": 1,
          "word": 'wounded',
          "question": "Peeta is out there in the woods, wounded badly.",
          "type": 4
        },

        // 反义词题
        {
          "choice": ["选项A是打飞机", "选项B深刻的减肥", "选项C是东方红", "选项DSKDJFJJKJ"],
          "answer": 1,
          "dimension": 1,
          "guide": "指导语1",
          "id": 2,
          "question": "",
          "type": 5
        },

        // 中文释义题
        {
          "choice": ["想象,幻想", "热烈鼓掌", "单词量", "信任,信赖"],
          "answer": 2,
          "dimension": 1,
          "guide": "",
          "id": 3,
          "question": "must",
          "type": 1
        },

        {
          "choice": ["选项A跨世纪的反馈", "选项B打飞机", "选项C是对方答复", "选项D阿斯蒂芬"],
          "answer": 1,
          "dimension": 1,
          "guide": "指导语1",
          "id": 4,
          "question": "这是题目",
          "type": 1
        },
        {
          "choice": ["选项A啊啊", "选项B方法", "选项C盛世嫡妃", "选项D水电费"],
          "answer": 1,
          "dimension": 1,
          "guide": "指导语1",
          "id": 5,
          "question": "这是题目",
          "type": 1
        },
        {
          "choice": ["选项A请问", "选项Bv", "选项C请问", "选项D是大法官"],
          "answer": 1,
          "dimension": 1,
          "guide": "指导语1",
          "id": 6,
          "question": "这是题目",
          "type": 1
        }
      ]
    }
  });
});

router.put('/question', function (req, res, next) {
  res.send({
    code: 0,
    data: true
  });

});

router.post('/question', function (req, res, next) {
  res.send({
    code: 0,
    data: true
  })
});

router.get('/report', function (req, res, next) {
  res.send({
    code: 0,
    data: {
      name: "托福口语",
      listNum: 38,
      wordList: {
        1: "apple",
        2: "must",
        3: "appluse"
      },
      report: [
        {
          accuracy: {
            average: "90%",
            explain: "80%",
            translate: "60%",
            listen: "60%",
            write: "60%"
          },
          wrongWord: [1]
        },
        {
          accuracy: {
            average: "90%",
            explain: "80%",
            translate: "60%",
            listen: "60%",
            write: "60%"
          },
          wrongWord: [2, 3]
        }
      ]
    }
  });
});

module.exports = router;
