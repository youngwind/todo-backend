var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {title: 'Express'});
});

/****************************************
 * 少峰的接口
 ***********************************************/

router.get('/practice', function (req, res, next) {
  res.send({
    "data": {
      "totalList": 50,
      "name": "托福核心词汇",
      "testId": 1,
      "status": {
        "progress": 1,
        "currentQuestionNum": 1
      },
      "wordNum": 100,
      "questionNum": 300,
      "currentList": 12,
      "setting": {
        "studyTarget": "1,2,3",
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
          "guide": "Wounded  is similar in meaning to ?",
          "id": 1,
          "wordId": 12,
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
          "wordId": 14,
          "word": 'fortunate',
          "question": "She was so fortunate to have avoided the shower that night",
          "type": 5
        },

        // 中文释义题
        {
          "choice": ["想象,幻想", "热烈鼓掌", "单词量", "信任,信赖"],
          "answer": 2,
          "dimension": 1,
          "wordId": 16,
          "word": 'fancy',
          "guide": "In this sentence,fancy means",
          "id": 3,
          "question": "He owne a fancy house out on Lake Agawam.",
          "type": 3
        },

        {
          "choice": ["选项A跨世纪的反馈", "选项B打飞机", "选项C是对方答复", "选项D阿斯蒂芬"],
          "answer": 1,
          "dimension": 1,
          "wordId": 18,
          "guide": "指导语1",
          "id": 4,
          "question": "这是题目",
          "type": 1
        },
        {
          "choice": ["选项A啊啊", "选项B方法", "选项C盛世嫡妃", "选项D水电费"],
          "answer": 1,
          "dimension": 1,
          "wordId": 20,
          "guide": "指导语1",
          "id": 5,
          "question": "My wife was so embarrased when she____some of our guests say they didn't like the meal she'd cooked for them.",
          "type": 6
        },
        {
          "choice": ["选项A请问", "选项Bv", "选项C请问", "选项D是大法官"],
          "answer": 1,
          "dimension": 1,
          "wordId": 22,
          "guide": "指导语1",
          "id": 6,
          "question": "这是题目",
          "type": 1
        },
        {
          "choice": ["http://media8.smartstudy.com/media/pic/product/3320237cbb5611e5a85d00163e0053c21452841460695632.jpg",
            "http://media8.smartstudy.com/media/pic/product/3320237cbb5611e5a85d00163e0053c21452841460695632.jpg",
            "http://media8.smartstudy.com/media/pic/product/3320237cbb5611e5a85d00163e0053c21452841460695632.jpg",
            "http://media8.smartstudy.com/media/pic/product/3320237cbb5611e5a85d00163e0053c21452841460695632.jpg"],
          "answer": 1,
          "dimension": 1,
          "wordId": 33,
          "guide": "指导语1",
          "id": 7,
          "question": "这是题目",
          "type": 2
        }
      ]
    }
  });
});

router.get('/report', function (req, res, next) {
  res.send({
    code: 0,
    data: {
      name: "托福口语",
      listNum: 38,
      reportDetail: {
        test1: {
          pronunciation: 1,
          wordList: [
            {
              word: "apple",
              id: 1,
              correct: false
            },
            {
              word: "enter",
              id: 2,
              correct: false
            },
            {
              word: "applause",
              id: 3,
              correct: false
            },
            {
              word: "abandon",
              id: 4,
              correct: true
            },
            {
              word: "vocalbulary",
              id: 5,
              correct: true
            },
            {
              word: "leave",
              id: 6,
              correct: true
            }
          ],
          accuracy: {
            average: "90",
            explain: "80",
            listen: "60",
            write: "60"
          }
        },
        test2: {
          pronunciation: 1,
          wordList: [
            {
              word: "love",
              id: 12,
              correct: true
            },
            {
              word: "hate",
              id: 12,
              correct: true
            }
          ],
          accuracy: {
            average: "90",
            explain: "80",
            write: "60"
          }
        }
      }
    }
  })
});


/***************************************
 * 闪闪的接口
 **************************************/
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


router.get('/word', function (req, res, next) {
  var wordId = req.query.id;

  if (wordId == 12) {
    res.send({
      "code": 0,
      "data": {
        "name": "wounded",
        "symbol": "[ˈfænsi]",
        "explanation": [1, 2, 3],
        "description": "Fancy can be an adjective, noun, or a verb. As an adjective, it’s the opposite of plain. The noun names something that isn’t real. When someone likes or wants something, the verb can be used: “I fancy a cup of tea.” Doesn’t that sound fancy?",
        "id": 12
      }
    });
  } else if (wordId == 14) {
    res.send({
      "code": 0,
      "data": {
        "name": "fancy",
        "symbol": "[ˈfænsi]",
        "explanation": [1, 2, 3],
        "description": "Fancy can be an adjective, noun, or a verb. As an adjective, it’s the opposite of plain. The noun names something that isn’t real. When someone likes or wants something, the verb can be used: “I fancy a cup of tea.” Doesn’t that sound fancy?",
        "id": 14
      }
    });
  } else {
    res.send({
      "code": 0,
      "data": {
        "name": "fortunate",
        "symbol": "[ˈfænsi]",
        "explanation": [
          {
            "pro": "det",
            "content": "许多的"
          },
          {
            "pro": "pron",
            "content": "许多人"
          },
          {
            "pro": "convention",
            "content": "许多;大量;众多"
          }
        ],
        "description": "Fancy can be an adjective, noun, or a verb. As an adjective, it’s the opposite of plain. The noun names something that isn’t real. When someone likes or wants something, the verb can be used: “I fancy a cup of tea.” Doesn’t that sound fancy?",
        "id": 16
      }
    });
  }
});

module.exports = router;
