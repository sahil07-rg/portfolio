// Single source of truth for portfolio copy. Sourced from Sahil's resume and GitHub.
// Labels in `hi` are Hindi (Devanagari), used where the Kage layout set decorative kanji.

export const profile = {
  name: "Sahil Kumar",
  role: "AI/ML Engineer",
  email: "sahilkumarjnv12@gmail.com",
  links: {
    github: "https://github.com/sahil07-rg",
    linkedin: "https://www.linkedin.com/in/sahil-kumar-21a7aa316/",
    huggingface: "https://huggingface.co/sahil077",
  },
};

export const nav = [
  { href: "#gate", label: "Research", hi: "शोध" },
  { href: "#pathways", label: "Work", hi: "काम" },
  { href: "#lessons", label: "Experience", hi: "अनुभव" },
  { href: "#eternity", label: "Contact", hi: "संपर्क" },
];

// Hero chips. Hovering one swings the 3D camera to a different corner of the scene.
export const chips = [
  { title: "Remote sensing", body: "Satellite AOD to ground-level PM2.5 at ISRO." },
  { title: "Research", body: "Two conference papers and a Best Paper Award." },
  { title: "Shipped ML", body: "Full-stack ML apps live on Vercel and Hugging Face." },
  { title: "LLM agents", body: "Tool-calling agents tuned to hallucinate less." },
];

export const featured = {
  title: "Estimating PM2.5 where no monitor exists.",
  lead:
    "At ISRO's Indian Institute of Remote Sensing I built a pipeline that predicts ground-level PM2.5 over brick kiln hotspots in West Bengal and Bihar, using MODIS/MAIAC aerosol optical depth and ERA5 meteorology.",
  body:
    "Validation is leave-one-station-out, so the model is always tested on a place it has never seen. Six models compared, with SHAP for interpretability and seasonal analysis. The journal manuscript is for Geocarto International, guided by Dr. Poonam Seth Tiwari and Dr. Asfa Siddique.",
  stats: [
    { value: "06", label: "Models compared" },
    { value: "02", label: "States mapped" },
    { value: "LOSO", label: "Validation" },
    { value: "IIRS", label: "ISRO host" },
  ],
};

// The three cloth cards. Their images are set in site.css (the cloth reads the CSS background).
export const work = [
  {
    title: "PM2.5 from orbit",
    hi: "वायु",
    meta: "ISRO IIRS, 2026",
    linkLabel: "Manuscript",
    href: "#gate",
  },
  {
    title: "Housing Intelligence",
    hi: "घर",
    meta: "FastAPI and Next.js",
    linkLabel: "Live site",
    href: "https://housingsocial.vercel.app/",
  },
  {
    title: "Bearing anomalies",
    hi: "कंपन",
    meta: "ACIFFS-2026",
    linkLabel: "Code",
    href: "https://github.com/sahil07-rg/Ensemble-Vibration-Anomaly-Detection-for-Predictive-Maintenance",
  },
];

export const timeline = [
  {
    title: "IIRS, ISRO",
    hi: "इसरो",
    body: "ML research intern. PM2.5 pipeline, leakage-free validation, journal manuscript.",
    tag: "Aug-Oct 2026",
    href: "#gate",
  },
  {
    title: "PineApplee Labs",
    hi: "एजेंट",
    body: "AI developer and tester. Tool-calling agents, search pipeline fixes, fewer hallucinations.",
    tag: "May-Sep 2026",
    href: null,
  },
  {
    title: "Leukemia classification",
    hi: "जीन",
    body: "Best Paper Award at ICMTEST-2026. ANOVA feature selection on gene expression, ALL vs AML.",
    tag: "Best Paper",
    href: "https://github.com/sahil07-rg/Gene-Expression-Based-Leukemia-Classification-Using-Feature-Selection-and-Machine-Learning",
  },
  {
    title: "Ensemble anomaly detection",
    hi: "संकेत",
    body: "Presented at ACIFFS-2026 with IIT Guwahati. Isolation Forest, One-Class SVM and an autoencoder over 8 sensors.",
    tag: "Paper",
    href: "https://github.com/sahil07-rg/Ensemble-Vibration-Anomaly-Detection-for-Predictive-Maintenance",
  },
  {
    title: "AI text detector",
    hi: "पाठ",
    body: "Fine-tuned DistilBERT that separates human from AI-written text, with a live demo.",
    tag: "Live demo",
    href: "https://huggingface.co/spaces/sahil077/newspace",
  },
];

// Every public repo on github.com/sahil07-rg. Forks are listed by what Sahil actually merged upstream.
type Repo = { name: string; body: string; stack: string; links: { label: string; href: string }[] };

const gh = (repo: string) => `https://github.com/sahil07-rg/${repo}`;
const prs = (upstream: string) => `https://github.com/${upstream}/pulls?q=is%3Apr+author%3Asahil07-rg`;

export const repos: { built: Repo[]; contributed: Repo[] } = {
  built: [
    {
      name: "Housing Intelligence",
      body: "Full-stack property valuation with real-time predictions, valuation trends and PDF reports.",
      stack: "TypeScript, Next.js",
      links: [
        { label: "Live", href: "https://housingsocial.vercel.app/" },
        { label: "Code", href: gh("housing_price_front") },
      ],
    },
    {
      name: "Housing price API",
      body: "FastAPI backend serving model inference and analytics for Housing Intelligence.",
      stack: "Python, FastAPI",
      links: [
        { label: "Docs", href: "https://housing-price-tlx4.onrender.com/docs" },
        { label: "Code", href: gh("housing-price") },
      ],
    },
    {
      name: "Ensemble anomaly detection",
      body: "Unsupervised ensemble for bearing degradation on the NASA dataset. Presented at ACIFFS-2026.",
      stack: "Python, scikit-learn",
      links: [{ label: "Code", href: gh("Ensemble-Vibration-Anomaly-Detection-for-Predictive-Maintenance") }],
    },
    {
      name: "Leukemia classification",
      body: "Gene expression feature selection to separate ALL from AML. Best Paper, ICMTEST-2026.",
      stack: "Python, scikit-learn",
      links: [{ label: "Code", href: gh("Gene-Expression-Based-Leukemia-Classification-Using-Feature-Selection-and-Machine-Learning") }],
    },
    {
      name: "AI text detector",
      body: "DistilBERT fine-tuned to tell human from AI-written text, with a live demo.",
      stack: "Transformers",
      links: [
        { label: "Demo", href: "https://huggingface.co/spaces/sahil077/newspace" },
        { label: "Code", href: gh("AI-text-recognizer") },
      ],
    },
    {
      name: "AI text detection, TF-IDF and SVM",
      body: "A lightweight baseline for the same task, fast enough to run anywhere.",
      stack: "Python, scikit-learn",
      links: [{ label: "Code", href: gh("ai-text-detection-tfidf-svm") }],
    },
    {
      name: "First React project",
      body: "Where the front-end work started: a small React app, deployed on Vercel.",
      stack: "JavaScript, React",
      links: [
        { label: "Live", href: "https://lreact-v-3zgj.vercel.app/" },
        { label: "Code", href: gh("lreact-v") },
      ],
    },
  ],
  contributed: [
    {
      name: "StorySparkAI",
      body: "Two merged PRs: interactive flip cards for the landing page and a light-mode heading fix.",
      stack: "Open source",
      links: [
        { label: "Live", href: "https://storysparkai.vercel.app" },
        { label: "PRs", href: prs("ronisarkarexe/story-spark-ai") },
      ],
    },
    {
      name: "Deep Learning Simplified",
      body: "GirlScript Summer of Code contributor. Merged README overhaul, five commits upstream.",
      stack: "GSSoC",
      links: [{ label: "PRs", href: prs("abhisheks008/DL-Simplified") }],
    },
    {
      name: "Vaccination Portal",
      body: "Merged refactor: cleaned up config, removed an unused scroll library and updated dependencies.",
      stack: "Open source",
      links: [{ label: "PRs", href: prs("ShishuCard/Vaccination_Portal") }],
    },
    {
      name: "Makao",
      body: "A college connect platform, forked to follow along.",
      stack: "Fork",
      links: [{ label: "Repo", href: gh("Makao") }],
    },
  ],
};

export const credentials = [
  "Best Paper, ICMTEST-2026",
  "McKinsey Forward 2026",
  "GSSoC 2025 and 2026",
  "MSME Hackathon 5.0 finalist",
];
