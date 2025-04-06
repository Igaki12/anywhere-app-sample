// --- 問題データ (変更なし) ---
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
const body = document.body;
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

// モーダル関連DOM
const hamburgerBtn = document.getElementById('hamburger-btn');
const modalOverlay = document.getElementById('modal-overlay');
const menuModal = document.getElementById('menu-modal');
const closeModalBtn = document.getElementById('close-modal-btn');
const backToTitleBtn = document.getElementById('back-to-title-btn');
const modalDate = document.getElementById('modal-date');
const modalScore = document.getElementById('modal-score');
const modalAccuracy = document.getElementById('modal-accuracy');


// --- 状態変数 ---
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let questionsAnswered = false;

// --- 関数 ---

// 画面状態を更新
function setScreen(screenName) {
    body.dataset.screen = screenName;
}

// 問題をシャッフル
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// スタート画面表示 (関数化)
function showStartScreen() {
    setScreen('start');
    // スコアやインデックスのリセットはstartQuiz内で行う
    closeModal(); // モーダルが開いていれば閉じる
}

// クイズを開始
function startQuiz(ordered) {
    currentQuestionIndex = 0;
    score = 0;
    updateModalStats(); // モーダル内のスコア表示をリセット
    if (ordered) {
        currentQuestions = [...questionBank];
    } else {
        currentQuestions = shuffleArray([...questionBank]);
    }
    setScreen('quiz');
    displayQuestion();
}

// 問題を表示
function displayQuestion() {
    questionsAnswered = false;
    feedbackContainer.style.display = 'none';
    nextBtn.style.display = 'none';
    enableAnswerButtons();

    if (currentQuestionIndex < currentQuestions.length) {
        const questionData = currentQuestions[currentQuestionIndex];
        questionText.textContent = `Q${currentQuestionIndex + 1}: ${questionData.question}`;
        updateProgressBar();
    } else {
        showResults();
    }
}

// プログレスバー更新
function updateProgressBar() {
    const progress = ((currentQuestionIndex + 1) / currentQuestions.length) * 100;
    progressBar.style.width = `${progress}%`;
    progressText.textContent = `${currentQuestionIndex + 1} / ${currentQuestions.length}`;
}


// 回答ボタン有効化
function enableAnswerButtons() {
    const buttons = answerButtons.querySelectorAll('.answer-btn');
    buttons.forEach(button => button.disabled = false);
}

// 回答ボタン無効化
function disableAnswerButtons() {
     const buttons = answerButtons.querySelectorAll('.answer-btn');
    buttons.forEach(button => button.disabled = true);
}


// 回答をチェック
function checkAnswer(selectedAnswer) {
    if (questionsAnswered) return;
    questionsAnswered = true;
    disableAnswerButtons();

    const questionData = currentQuestions[currentQuestionIndex];
    const isCorrect = selectedAnswer === questionData.answer;

    feedbackContainer.style.display = 'block';
    feedbackResult.classList.remove('correct-feedback', 'incorrect-feedback');

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

    updateModalStats(); // モーダル内の統計情報を更新

    nextBtn.style.display = 'block';
    if (currentQuestionIndex === currentQuestions.length - 1) {
        nextBtn.textContent = '結果を見る';
    } else {
        nextBtn.textContent = '次の問題へ';
    }
}

// 次の問題へ
function nextQuestion() {
    currentQuestionIndex++;
    displayQuestion();
}

// 結果を表示
function showResults() {
    setScreen('result');
    const percentage = currentQuestions.length > 0 ? Math.round((score / currentQuestions.length) * 100) : 0;
    scoreText.textContent = `あなたのスコア: ${score} / ${currentQuestions.length} (${percentage}%)`;
    updateModalStats(); // 結果画面でもモーダル情報を更新
}


// --- モーダル関連関数 ---

// モーダルを開く
function openModal() {
    updateModalStats(); // 開く前に最新情報に更新
    modalOverlay.classList.remove('modal-hidden');
    menuModal.classList.remove('modal-hidden');
    modalOverlay.classList.add('modal-visible');
    menuModal.classList.add('modal-visible');
    body.classList.add('modal-open'); // 背景スクロール禁止
}

// モーダルを閉じる
function closeModal() {
    modalOverlay.classList.remove('modal-visible');
    menuModal.classList.remove('modal-visible');
    modalOverlay.classList.add('modal-hidden');
    menuModal.classList.add('modal-hidden');
    body.classList.remove('modal-open'); // 背景スクロール禁止解除
}

// モーダル内の統計情報を更新
function updateModalStats() {
    // 日付
    const today = new Date();
    modalDate.textContent = today.toLocaleDateString('ja-JP', { year: 'numeric', month: 'long', day: 'numeric' });

    // スコア
    modalScore.textContent = score;

    // 正解率 (問題を1問以上解いている場合のみ計算)
    const questionsAttempted = currentQuestionIndex + (questionsAnswered || body.dataset.screen === 'result' ? 1 : 0); // 解答済みか結果画面なら現在の問題も含む
    if (questionsAttempted > 0) {
        const accuracy = Math.round((score / questionsAttempted) * 100);
        modalAccuracy.textContent = accuracy;
    } else {
        modalAccuracy.textContent = "--"; // まだ問題に解答していない場合
    }
     // 結果画面では最終的な正解率を表示
     if (body.dataset.screen === 'result' && currentQuestions.length > 0) {
        const finalAccuracy = Math.round((score / currentQuestions.length) * 100);
        modalAccuracy.textContent = finalAccuracy;
     }
}


// --- イベントリスナー ---
orderBtn.addEventListener('click', () => startQuiz(true));
randomBtn.addEventListener('click', () => startQuiz(false));

answerButtons.addEventListener('click', (event) => {
    if (event.target.classList.contains('answer-btn')) {
        // data-answer属性が文字列なので、比較のためにBooleanに変換
        const selectedAnswer = event.target.dataset.answer === 'true';
        checkAnswer(selectedAnswer);
    }
});

nextBtn.addEventListener('click', nextQuestion);
retryBtn.addEventListener('click', showStartScreen); // タイトル画面表示関数を呼ぶ

// モーダル関連イベントリスナー
hamburgerBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal); // オーバーレイクリックで閉じる
backToTitleBtn.addEventListener('click', showStartScreen);

// --- 初期化 ---
showStartScreen(); // 最初にスタート画面を表示