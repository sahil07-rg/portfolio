// Single source of truth for portfolio copy. Sourced from Sahil's resume and GitHub.

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

export const facts = [
  { value: "Best Paper", label: "ICMTEST-2026, Biomedical ML" },
  { value: "2 papers", label: "Presented at conferences in 2026" },
  { value: "ISRO", label: "ML research intern at IIRS" },
  { value: "8.40 CGPA", label: "B.E. Robotics and AI, SMVIT" },
];

export const featuredResearch = {
  title: "Estimating PM2.5 where no monitor exists",
  org: "Indian Institute of Remote Sensing, ISRO",
  body:
    "Ground-level PM2.5 over brick kiln hotspots in West Bengal and Bihar, predicted from MODIS/MAIAC aerosol optical depth and ERA5 meteorology.",
  detail:
    "Validated leave-one-station-out so the model generalises to places without ground sensors. Six models compared, with SHAP for interpretability and seasonal analysis.",
  models: ["XGBoost", "Random Forest", "Gaussian Process", "ANN", "MLR", "Quantile Regression"],
  status: "Journal manuscript for Geocarto International (Taylor & Francis)",
  mentors: "Guided by Dr. Poonam Seth Tiwari and Dr. Asfa Siddique",
  image: "/work/igp-haze.jpg",
  imageAlt:
    "Satellite view of winter haze over the Indo-Gangetic Plain, with the Himalayas along the top edge",
  caption: "Winter haze over the Indo-Gangetic Plain. MODIS imagery, NASA (public domain).",
};

export const papers = [
  {
    title: "Adaptive ensemble anomaly detection for predictive maintenance",
    status: "Presented at ACIFFS-2026, Manipal University Jaipur with IIT Guwahati. Extended paper under journal review.",
    body:
      "Weighted ensemble of Isolation Forest, One-Class SVM and an autoencoder over 8 fused vibration sensors, with time and FFT features on the NASA bearing dataset.",
    image: "/work/vib-stft.png",
    imageAlt: "Spectrogram of 8-channel bearing vibration data showing a steady band near 1000 Hz",
    caption: "STFT spectrogram across all 8 vibration channels.",
    href: "https://github.com/sahil07-rg/Ensemble-Vibration-Anomaly-Detection-for-Predictive-Maintenance",
  },
  {
    title: "Leukemia classification from gene expression",
    status: "Best Paper Award at ICMTEST-2026. Accepted for journal publication.",
    body:
      "ANOVA F-score feature selection on high-dimensional gene expression data to separate ALL from AML, comparing four classifiers under 5-fold cross-validation.",
    image: "/work/leuk-genes.png",
    imageAlt: "Bar chart of the top 20 gene importance scores",
    caption: "Top 20 genes ranked by importance.",
    href: "https://github.com/sahil07-rg/Gene-Expression-Based-Leukemia-Classification-Using-Feature-Selection-and-Machine-Learning",
  },
];

export const housing = {
  title: "Housing Intelligence",
  body:
    "A full-stack property valuation platform. A FastAPI model service handles real-time predictions, and a Next.js front end adds valuation trends and downloadable PDF reports.",
  stack: ["Python", "FastAPI", "Next.js", "Vercel", "Render"],
  live: "https://housingsocial.vercel.app/",
  api: "https://housing-price-tlx4.onrender.com/docs",
  code: "https://github.com/sahil07-rg/housing_price_front",
  images: [
    { src: "/work/housing-dashboard.png", alt: "Housing Intelligence valuation screen showing inputs and a predicted price" },
    { src: "/work/housing-landing.png", alt: "Housing Intelligence landing page" },
  ],
};

export const moreProjects = [
  {
    title: "AI text detector",
    body: "Fine-tuned DistilBERT that classifies human versus AI-written text, with a live demo.",
    stack: "Transformers, Hugging Face Spaces",
    href: "https://huggingface.co/spaces/sahil077/newspace",
    linkLabel: "Live demo",
  },
  {
    title: "Lightweight AI text detector",
    body: "TF-IDF features with a linear SVM, as a fast baseline next to the transformer model.",
    stack: "Scikit-learn",
    href: "https://github.com/sahil07-rg/ai-text-detection-tfidf-svm",
    linkLabel: "Code",
  },
  {
    title: "DOOT",
    body: "GIS-enabled platform connecting MSMEs to government bodies. Final round, MSME Hackathon 5.0.",
    stack: "GIS, Web",
    href: null,
    linkLabel: null,
  },
  {
    title: "Deep Learning Simplified",
    body: "Open source contributions through GirlScript Summer of Code 2025 and 2026, now in the AI Agents track.",
    stack: "Open source",
    href: "https://github.com/sahil07-rg/DL-Simplified",
    linkLabel: "Code",
  },
];

export const experience = [
  {
    org: "Indian Institute of Remote Sensing, ISRO",
    role: "Machine Learning Research Intern",
    when: "Aug 2026 - Oct 2026",
    where: "Remote, Dehradun",
    points: [
      "Built the PM2.5 estimation pipeline from satellite AOD and ERA5 meteorology.",
      "Designed leakage-free, leave-one-station-out validation.",
      "Processed data with Google Earth Engine and Copernicus CDS, and wrote the journal manuscript.",
    ],
  },
  {
    org: "PineApplee Labs",
    role: "AI Developer and Tester",
    when: "May 2026 - Sep 2026",
    where: "Remote",
    points: [
      "Built autonomous agent capabilities with web search, terminal and file tools, plus multi-step reasoning.",
      "Fixed bottlenecks in the search-extraction pipeline between the LLM and its tools.",
      "Tuned system prompts and few-shot examples to cut hallucinations.",
    ],
  },
];

export const toolkit = [
  "Python", "C++", "XGBoost", "Scikit-learn", "TensorFlow", "SHAP", "Gaussian Processes",
  "Google Earth Engine", "MODIS / MAIAC", "ERA5", "Hugging Face", "Ollama", "Tool calling",
  "FastAPI", "Next.js", "Docker", "AWS", "STM32 HAL",
];

export const recognition = [
  "Best Paper Award, ICMTEST-2026 (Biomedical ML Applications)",
  "Letters of recommendation from IIRS, ISRO scientists",
  "Recognised by SMVIT for student research in machine learning",
  "Final round, MSME Hackathon 5.0 (2025)",
  "McKinsey Forward Learning Program (2026)",
];
