// --- 問題データ ---
const questionBank = [
    // (1) マクロファージ分類
    { question: "マクロファージに分類される細胞として、ミクログリアは正しいか？", answer: true, explanation: "ミクログリアは中枢神経系に定住するマクロファージです。" },
    { question: "マクロファージに分類される細胞として、クッパー細胞は正しいか？", answer: true, explanation: "クッパー細胞は肝臓の類洞に存在するマクロファージです。" },
    { question: "マクロファージに分類される細胞として、破骨細胞は正しいか？", answer: true, explanation: "破骨細胞は骨組織に存在し、骨吸収を行うマクロファージ由来の多核細胞です。" },
    { question: "マクロファージに分類される細胞として、ランゲルハンス細胞は正しいか？", answer: false, explanation: "ランゲルハンス細胞は表皮に存在する樹状細胞であり、マクロファージとは区別されます。" },
    { question: "マクロファージに分類される細胞として、類上皮細胞は正しいか？", answer: true, explanation: "類上皮細胞は肉芽腫などで見られる、マクロファージが形態変化したものです。" },
    // (2) PPRs/リガンド
    { question: "PPRsとリガンドの組み合わせとして「TLR2 – ペプチドグリカン」は正しいか？", answer: true, explanation: "TLR2は主にグラム陽性菌のペプチドグリカンやリポタンパク質を認識します。" },
    { question: "PPRsとリガンドの組み合わせとして「TLR4 – リポポリサッカライド」は正しいか？", answer: true, explanation: "TLR4はグラム陰性菌のLPSをMD-2、CD14と共に認識します。" },
    { question: "PPRsとリガンドの組み合わせとして「TLR5 – フラジェリン」は正しいか？", answer: true, explanation: "TLR5は細菌の鞭毛タンパク質であるフラジェリンを認識します。" },
    { question: "PPRsとリガンドの組み合わせとして「TLR9 – 非メチル化 CpG」は正しいか？", answer: true, explanation: "TLR9はエンドソーム内で細菌やウイルスのDNAに特徴的な非メチル化CpG配列を認識します。" },
    { question: "PPRsとリガンドの組み合わせとして「RIG-I – ウイルス RNA」は正しいか？", answer: true, explanation: "RIG-Iは細胞質に存在し、主に5'三リン酸を持つウイルス由来RNAを認識します。" },
    // (3) Treg抑制因子
    { question: "制御性T細胞(Treg)の免疫反応抑制因子として、CD25(IL-2Rα)は正しいか？", answer: true, explanation: "CD25はTregのマーカーであり、IL-2を消費することで他のT細胞の増殖を抑制します。" },
    { question: "制御性T細胞(Treg)の免疫反応抑制因子として、CD80は正しいか？", answer: false, explanation: "CD80は抗原提示細胞上の共刺激分子です。Tregが抑制に利用する分子はCTLA-4やTGF-βなどです。" },
    { question: "制御性T細胞(Treg)の免疫反応抑制因子として、CTLA-4は正しいか？", answer: true, explanation: "CTLA-4はTregに高発現し、CD80/CD86との結合をCD28と競合して共刺激を抑制します。" },
    { question: "制御性T細胞(Treg)の免疫反応抑制因子として、IL-8は正しいか？", answer: false, explanation: "IL-8 (CXCL8) は好中球を遊走させるケモカインであり、Tregの抑制機能とは直接関係ありません。" },
    { question: "制御性T細胞(Treg)の免疫反応抑制因子として、TGF-βは正しいか？", answer: true, explanation: "TGF-βはTregが産生・分泌する主要な抑制性サイトカインの一つです。" },
    // (4) T細胞分化
    { question: "胸腺におけるT細胞分化について、「正の選択とは自己抗原と適度に反応するT細胞を残すことである」は正しいか？", answer: true, explanation: "正の選択では、自己MHC分子と適度に結合できるTCRを持つT細胞が生存シグナルを受け取ります（自己MHC拘束性）。" },
    { question: "胸腺におけるT細胞分化について、「負の選択とは自己抗原と過剰に反応するT細胞を排除することである」は正しいか？", answer: true, explanation: "負の選択では、自己抗原ペプチド/MHC複合体に強く結合しすぎる自己反応性T細胞がアポトーシスにより除去されます。" },
    { question: "胸腺におけるT細胞分化について、「正の選択は胸腺皮質、負の選択は胸腺髄質でおこる」は正しいか？", answer: true, explanation: "正の選択は主に胸腺皮質上皮細胞(cTEC)が、負の選択は主に胸腺髄質上皮細胞(mTEC)や樹状細胞が担います。" },
    { question: "胸腺におけるT細胞分化について、「核内タンパク AIRE は種々の自己抗原を産生し、負の選択に寄与する」は正しいか？", answer: true, explanation: "AIREはmTECで末梢組織特異的抗原の発現を誘導し、それらに反応するT細胞の負の選択を促進します。" },
    { question: "胸腺におけるT細胞分化について、「CD8+T 細胞は CD4-CD8-T → CD4+CD8+T → CD8+T 細胞の経過をたどる」は正しいか？", answer: true, explanation: "T細胞はDN(ダブルネガティブ)→DP(ダブルポジティブ)→SP(シングルポジティブ、CD4+またはCD8+)へと分化します。" },
     // (5) 気管支喘息
    { question: "気管支喘息の特徴として、「近年の患者数増加の理由の仮説に抗原仮説がある」は正しいか？", answer: false, explanation: "患者数増加の理由としては「衛生仮説」が広く知られています。「抗原仮説」は一般的な用語ではありません。" },
    { question: "気管支喘息の特徴として、「患者肺組織では平滑筋の増生と粘液の枯渇が見られる」は正しいか？", answer: false, explanation: "喘息では、平滑筋の増生・肥厚と、杯細胞過形成による粘液産生亢進（枯渇ではない）が見られます。" },
    { question: "気管支喘息の特徴として、「IL-4によるB細胞のIgAへのクラススイッチが関与する」は正しいか？", answer: false, explanation: "IL-4はB細胞のIgEへのクラススイッチを誘導し、これが喘息の病態に重要です。IgAではありません。" },
    { question: "気管支喘息の特徴として、「IL-5による好中球の活性化が見られる」は正しいか？", answer: false, explanation: "IL-5は好酸球の分化、増殖、活性化、動員に重要です。好中球ではありません。" },
    { question: "気管支喘息の特徴として、「IL-13による気道過敏性の低下が見られる」は正しいか？", answer: false, explanation: "IL-13は気道過敏性の亢進、粘液産生亢進、IgE産生に関与します。低下ではありません。" }
];

// --- DOM要素 ---
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const orderBtn = document.getElementById('order-btn');
const randomBtn = document.getElementById('random-btn');
const questionText = document.getElementById('question-text');
const answerButtons = document.getElementById('answer-buttons');
const feedbackContainer = document.getElementById('feedback-container');
const feedbackResult = document.getElementById('feedback-result');
const feedbackIcon = document.getElementById('feedback-icon');
const feedbackMessage = document.getElementById('feedback-message');
const correctAnswerEl = document.getElementById('correct-answer');
const explanationText = document.getElementById('explanation-text');
const nextBtn = document.getElementById('next-btn');
const scoreText = document.getElementById('score-text');
const retryBtn = document.getElementById('retry-btn');
const progressBar = document.getElementById('progress-bar');
const progressText = document.getElementById('progress-text');

// --- 状態変数 ---
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let questionsAnswered = false; // 解答済みかどうかのフラグ

// --- 関数 ---

// 問題をシャッフルする（Fisher-Yatesアルゴリズム）
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// クイズを開始する
function startQuiz(ordered) {
    currentQuestionIndex = 0;
    score = 0;
    if (ordered) {
        currentQuestions = [...questionBank]; // 配列をコピー
    } else {
        currentQuestions = shuffleArray([...questionBank]);
    }
    startScreen.style.display = 'none';
    resultScreen.style.display = 'none';
    quizScreen.style.display = 'block';
    displayQuestion();
}

// 問題を表示する
function displayQuestion() {
    questionsAnswered = false; // 新しい問題が表示されたら未解答状態に
    feedbackContainer.style.display = 'none'; // フィードバックを隠す
    nextBtn.style.display = 'none'; // 次へボタンを隠す
    enableAnswerButtons(); // 回答ボタンを有効化

    if (currentQuestionIndex < currentQuestions.length) {
        const questionData = currentQuestions[currentQuestionIndex];
        questionText.textContent = `Q${currentQuestionIndex + 1}: ${questionData.question}`;

        // プログレスバー更新
        const progress = ((currentQuestionIndex + 1) / currentQuestions.length) * 100;
        progressBar.style.width = `${progress}%`;
        progressText.textContent = `${currentQuestionIndex + 1} / ${currentQuestions.length}`;

    } else {
        showResults();
    }
}

// 回答ボタンを有効化する
function enableAnswerButtons() {
    const buttons = answerButtons.querySelectorAll('.answer-btn');
    buttons.forEach(button => {
        button.disabled = false;
        button.style.opacity = '1';
        button.style.cursor = 'pointer';
    });
}

// 回答ボタンを無効化する
function disableAnswerButtons() {
     const buttons = answerButtons.querySelectorAll('.answer-btn');
    buttons.forEach(button => {
        button.disabled = true;
         button.style.opacity = '0.6';
         button.style.cursor = 'not-allowed';
    });
}


// 回答をチェックする
function checkAnswer(selectedAnswer) {
    if (questionsAnswered) return; // すでに解答済みの場合は何もしない
    questionsAnswered = true; // 解答済みフラグを立てる
    disableAnswerButtons(); // ボタンを無効化

    const questionData = currentQuestions[currentQuestionIndex];
    const isCorrect = selectedAnswer === questionData.answer;

    feedbackContainer.style.display = 'block';
    feedbackResult.classList.remove('correct-feedback', 'incorrect-feedback'); // 前のクラスを削除

    if (isCorrect) {
        score++;
        feedbackResult.classList.add('correct-feedback');
        feedbackMessage.textContent = "正解！";
    } else {
        feedbackResult.classList.add('incorrect-feedback');
        feedbackMessage.textContent = "不正解...";
    }

    correctAnswerEl.textContent = questionData.answer ? "正しい" : "誤り";
    explanationText.textContent = questionData.explanation;

    nextBtn.style.display = 'block'; // 次へボタン表示
     // 最後の場合はボタンテキスト変更
    if (currentQuestionIndex === currentQuestions.length - 1) {
        nextBtn.textContent = '結果を見る';
    } else {
        nextBtn.textContent = '次の問題へ';
    }
}

// 次の問題へ進む
function nextQuestion() {
    currentQuestionIndex++;
    displayQuestion();
}

// 結果を表示する
function showResults() {
    quizScreen.style.display = 'none';
    resultScreen.style.display = 'block';
    const percentage = Math.round((score / currentQuestions.length) * 100);
    scoreText.textContent = `あなたのスコア: ${score} / ${currentQuestions.length} (${percentage}%)`;
}

// --- イベントリスナー ---
orderBtn.addEventListener('click', () => startQuiz(true));
randomBtn.addEventListener('click', () => startQuiz(false));

answerButtons.addEventListener('click', (event) => {
    if (event.target.classList.contains('answer-btn')) {
        const selectedAnswer = event.target.dataset.answer === 'true';
        checkAnswer(selectedAnswer);
    }
});

nextBtn.addEventListener('click', nextQuestion);
retryBtn.addEventListener('click', () => {
    resultScreen.style.display = 'none';
    startScreen.style.display = 'block'; // スタート画面に戻る
});

// 初期状態ではスタート画面を表示
startScreen.style.display = 'block';
quizScreen.style.display = 'none';
resultScreen.style.display = 'none';