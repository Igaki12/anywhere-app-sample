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

// --- DOM要素 (変更なし + resume関連追加) ---
const body = document.body;
const startScreen = document.getElementById('start-screen');
// ... (他の要素は省略) ...
const totalQuestionsEl = document.getElementById('total-questions'); // 問題数表示用
const resumeSection = document.getElementById('resume-section');
const resumeInfo = document.getElementById('resume-info');
const resumeTime = document.getElementById('resume-time');
const resumeRemaining = document.getElementById('resume-remaining');
const resumeBtn = document.getElementById('resume-btn');

// --- localStorage Key ---
const STORAGE_KEY = 'quizImmunologyProgress2024'; // アプリ固有のキー名

// --- 状態変数 (変更なし) ---
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

// --- localStorage 操作 ---
// 途中経過を保存
function saveProgress() {
    if (currentQuestions.length === 0) return; // クイズが開始されていない場合は保存しない

    const progress = {
        currentQuestions: currentQuestions,
        currentQuestionIndex: currentQuestionIndex,
        score: score,
        startTime: localStorage.getItem(STORAGE_KEY) ? JSON.parse(localStorage.getItem(STORAGE_KEY)).startTime : new Date().toISOString(), // 開始時刻は初回のみ設定
        lastSavedTime: new Date().toISOString()
    };
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
        console.log("進捗を保存しました:", progress);
    } catch (e) {
        console.error("localStorageへの保存に失敗しました:", e);
        // オプション: ユーザーに通知する (例: プライベートモードなど)
        // alert("進捗の保存に失敗しました。ブラウザのプライベートモードなどが原因の可能性があります。");
    }
}

// 途中経過を読み込み、UIに反映
function loadProgress() {
    try {
        const savedData = localStorage.getItem(STORAGE_KEY);
        if (savedData) {
            const progress = JSON.parse(savedData);
            console.log("保存された進捗を読み込みました:", progress);

            // UI更新
            const remaining = progress.currentQuestions.length - progress.currentQuestionIndex;
            const lastSavedDate = new Date(progress.lastSavedTime);
            resumeTime.textContent = lastSavedDate.toLocaleString('ja-JP');
            resumeRemaining.textContent = remaining;
            resumeSection.style.display = 'block'; // 「前回の続き」セクション表示
            return progress; // 読み込んだデータを返す
        } else {
            resumeSection.style.display = 'none'; // データがなければ非表示
            return null;
        }
    } catch (e) {
        console.error("localStorageからの読み込みに失敗しました:", e);
        resumeSection.style.display = 'none';
        localStorage.removeItem(STORAGE_KEY); // 破損データの可能性があるので削除
        return null;
    }
}

// 途中経過を削除
function clearProgress() {
    try {
        localStorage.removeItem(STORAGE_KEY);
        console.log("進捗を削除しました。");
        resumeSection.style.display = 'none'; // UIも非表示に
    } catch (e) {
        console.error("localStorageからの削除に失敗しました:", e);
    }
}

// 保存されたデータからクイズを再開
function resumeQuiz() {
    const progress = loadProgress(); // 最新のデータを読み込む
    if (progress) {
        currentQuestions = progress.currentQuestions;
        currentQuestionIndex = progress.currentQuestionIndex;
        score = progress.score;
        updateModalStats(); // モーダル情報も復元
        setScreen('quiz');
        displayQuestion(); // 保存された時点の問題から表示
    } else {
        alert("再開できるデータが見つかりませんでした。");
        showStartScreen(); // 念のためスタート画面に戻す
    }
}


// --- クイズ進行関数 (saveProgress, clearProgress呼び出し追加) ---

// スタート画面表示
function showStartScreen() {
    setScreen('start');
    totalQuestionsEl.textContent = questionBank.length; // 総問題数を表示
    loadProgress(); // 保存データがあればUIに反映
    closeModal();
}

// クイズを開始 (新規)
function startQuiz(ordered) {
    clearProgress(); // 新規開始なので古いデータは消す
    currentQuestionIndex = 0;
    score = 0;
    updateModalStats();
    if (ordered) {
        currentQuestions = [...questionBank];
    } else {
        currentQuestions = shuffleArray([...questionBank]);
    }
    setScreen('quiz');
    saveProgress(); // 開始状態を保存
    displayQuestion();
}

// 問題を表示
function displayQuestion() {
    // ... (変更なし) ...
    if (currentQuestionIndex < currentQuestions.length) {
        // ... (変更なし) ...
        updateProgressBar();
        // saveProgress(); // ここで保存すると表示直後に保存される。解答後の方が良いかも
    } else {
        showResults();
    }
}

// 回答をチェック
function checkAnswer(selectedAnswer) {
    if (questionsAnswered) return;
    questionsAnswered = true;
    disableAnswerButtons();

    // ... (正誤判定とUI更新 - 変更なし) ...
    if (isCorrect) { score++; } // スコア更新はここ

    updateModalStats();
    saveProgress(); // 解答後に進捗を保存

    nextBtn.style.display = 'block';
    // ... (ボタンテキスト変更 - 変更なし) ...
}

// 次の問題へ
function nextQuestion() {
    currentQuestionIndex++;
    // saveProgress(); // 次の問題に進む = 現在の問題が完了したとみなし、checkAnswerで保存済み
    displayQuestion();
}

// 結果を表示
function showResults() {
    setScreen('result');
    const percentage = currentQuestions.length > 0 ? Math.round((score / currentQuestions.length) * 100) : 0;
    scoreText.textContent = `あなたのスコア: ${score} / ${currentQuestions.length} (${percentage}%)`;
    updateModalStats();
    clearProgress(); // クイズ完了なのでデータを削除
}

// --- モーダル関連関数 (変更なし) ---
function openModal() { /* ... 省略 ... */ }
function closeModal() { /* ... 省略 ... */ }
function updateModalStats() { /* ... 省略 ... */ }


// --- イベントリスナー (resumeBtn追加) ---
orderBtn.addEventListener('click', () => startQuiz(true));
randomBtn.addEventListener('click', () => startQuiz(false));
resumeBtn.addEventListener('click', resumeQuiz); // 再開ボタンリスナー追加

answerButtons.addEventListener('click', (event) => { /* ... 省略 ... */ });
nextBtn.addEventListener('click', nextQuestion);
retryBtn.addEventListener('click', showStartScreen);

hamburgerBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);
backToTitleBtn.addEventListener('click', () => {
    // タイトルに戻る際に途中経過をクリアするかどうかは要件次第
    // clearProgress(); // クリアする場合
    showStartScreen();
});


// --- 初期化 ---
showStartScreen(); // 最初にスタート画面を表示し、保存データをチェック