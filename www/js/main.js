'use strict';

// 要素の取得
const question = document.getElementById('question');
const answerForm = document.getElementById('answerForm');
const answer = document.getElementById('answer');
const okButton = document.getElementById('okButton');
const resultMessage = document.getElementById('resultMessage');
const resultImage = document.getElementById('resultImage');

// 問題番号
let no = 0;

// 正解数
let score = 0;

// 単語リスト
const wordList = [
    {japanese: '電話', english: 'phone'},
    {japanese: '歴史', english: 'history'},
    {japanese: '社会', english: 'society'},
    {japanese: '世代', english: 'generation'},
    {japanese: '知識', english: 'knowledge'}
];

// 問題を表示する
function showQuestion() {
    if(no < wordList.length) {
        // 次の問題がある場合は，表示する
        question.textContent = wordList[no].japanese;               
    } else {
        //全問終了したら，成績を発表する
        question.textContent = `${score}/${wordList.length}`;
        answerForm.style.display = 'none';
        if(score === wordList.length) {
            // 全問正解の場合
            resultMessage.textContent = '全問正解！よくできました！';
            resultImage.src = 'images/gold.png';
        } else if(score >= wordList.length * 0.6) {
            // 6割以上正解の場合
            resultMessage.textContent = '惜しい！あともう一歩でした！';
            resultImage.src = 'images/silver.png';
        } else {
            // 6割未満の場合
            resultMessage.textContent = 'もう少しがんばりましょう。';
            resultImage.src = 'images/bronze.png';
        }
    }
}

okButton.addEventListener('click', e => {
    if(answer.value === wordList[no].english) {
        alert('正解です！');
        score++;
    } else {
        alert('残念！不正解です。');
    }
    
    // 次の問題を表示
    no++;
    answer.value = '';
    showQuestion();
});

showQuestion();