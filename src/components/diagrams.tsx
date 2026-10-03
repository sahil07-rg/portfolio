"use client";

// Diagrams drawn from each repo's code and notebook outputs. Every number here is taken
// from the source noted in profile.ts; nothing is illustrative. All share a 800x450 frame.

import { createContext, useContext, useId, type ReactNode } from "react";
import type { DiagramId } from "@/content/profile";

const BONE = "#dfe7e0";
const MUTED = "#8f9a93";
const LINE = "rgba(223,231,224,.32)";
const FILL = "rgba(223,231,224,.045)";
const RED = "#e0231c";
const EMBER = "#ff5a3c";

// Each diagram gets its own arrowhead id: several render at once (thumbnails and lightbox),
// and a marker defined inside a hidden copy would otherwise blank the arrows everywhere.
const MarkerId = createContext("arrow");
function useArrow() {
  return `url(#${useContext(MarkerId)})`;
}

function Line({ d }: { d: string }) {
  return <path d={d} fill="none" stroke={LINE} strokeWidth={1.4} markerEnd={useArrow()} />;
}

function Box({
  x,
  y,
  w,
  h,
  title,
  lines = [],
  accent = false,
  mono = false,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  title: string;
  lines?: string[];
  accent?: boolean;
  mono?: boolean;
}) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={6}
        fill={accent ? "rgba(224,35,28,.14)" : FILL}
        stroke={accent ? EMBER : LINE}
      />
      <text x={x + 14} y={y + 26} fill={BONE} fontSize={15} fontWeight={500}>
        {title}
      </text>
      {lines.map((l, i) => (
        <text
          key={l}
          x={x + 14}
          y={y + 48 + i * 19}
          fill={MUTED}
          fontSize={12.5}
          fontFamily={mono ? "ui-monospace, Menlo, monospace" : undefined}
        >
          {l}
        </text>
      ))}
    </g>
  );
}

function Arrow({ d, label, lx, ly }: { d: string; label?: string; lx?: number; ly?: number }) {
  return (
    <g>
      <Line d={d} />
      {label ? (
        <text x={lx} y={ly} fill={MUTED} fontSize={11.5} textAnchor="middle">
          {label}
        </text>
      ) : null}
    </g>
  );
}

function Lane({ y, children }: { y: number; children: ReactNode }) {
  return (
    <text x={20} y={y} fill={EMBER} fontSize={11} letterSpacing="0.16em">
      {children}
    </text>
  );
}

function Frame({ title, children }: { title: string; children: ReactNode }) {
  const id = `arrow${useId().replace(/:/g, "")}`;
  return (
    <svg viewBox="0 0 800 450" role="img" aria-label={title} className="diagram-svg">
      <title>{title}</title>
      <defs>
        <marker id={id} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0 0 10 5 0 10z" fill={MUTED} />
        </marker>
      </defs>
      <MarkerId.Provider value={id}>{children}</MarkerId.Provider>
    </svg>
  );
}

/* ---------------------------------------------------------- Housing Intelligence */

function HousingFlow() {
  return (
    <Frame title="Housing Intelligence request flow">
      <Lane y={30}>REQUEST</Lane>
      <Box x={20} y={42} w={170} h={100} title="Next.js form" lines={["9 inputs", "app/page.tsx"]} />
      <Box x={225} y={42} w={160} h={100} title="axios POST" lines={["/predict", "JSON body"]} />
      <Box x={420} y={42} w={170} h={100} title="FastAPI, Render" lines={["Pydantic HouseData", "validates the body"]} />
      <Box x={625} y={42} w={155} h={100} title="Model" lines={["housing_model.pkl", "random forest"]} accent />
      <Arrow d="M190 92H221" />
      <Arrow d="M385 92H416" />
      <Arrow d="M590 92H621" />
      <Lane y={186}>RESPONSE</Lane>
      <path d="M702 142V206H107" fill="none" stroke={LINE} strokeWidth={1.4} />
      <text x={455} y={198} fill={MUTED} fontSize={11.5} textAnchor="middle">
        {"{ predicted_price }, rounded to 2 dp"}
      </text>
      {[107, 302, 497, 692].map((cx) => (
        <Arrow key={cx} d={`M${cx} 206V236`} />
      ))}
      <Box x={20} y={240} w={175} h={90} title="CountUp" lines={["animated price"]} />
      <Box x={215} y={240} w={175} h={90} title="Insights" lines={["4 rule checks"]} />
      <Box x={410} y={240} w={175} h={90} title="Property tier" lines={["4 price bands"]} />
      <Box x={605} y={240} w={175} h={90} title="jsPDF report" lines={["downloadable PDF"]} />
      <Box x={20} y={360} w={760} h={64} title="/analytics" lines={["Chart.js valuation trends on a separate page"]} />
    </Frame>
  );
}

function HousingTiers() {
  // Scale 0 to 650k across 720px.
  const sx = (v: number) => 40 + (v / 650000) * 720;
  const bands = [
    { from: 0, to: 150000, name: "Standard", sub: "Residential", a: 0.14 },
    { from: 150000, to: 300000, name: "Premium", sub: "Urban Housing", a: 0.3 },
    { from: 300000, to: 500000, name: "Luxury", sub: "Residence", a: 0.5 },
    { from: 500000, to: 650000, name: "Imperial", sub: "Estate", a: 0.8 },
  ];
  const rules = [
    ["median_income > 6", "affluent income raises valuation"],
    ["total_rooms > 3000", "more volume lifts the price"],
    ["housing_median_age < 15", "newer stock, premium position"],
    ['ocean_proximity = "NEAR BAY"', "location lifts the price"],
  ];
  return (
    <Frame title="Housing Intelligence price tiers and insight rules">
      <Lane y={36}>PREDICTED PRICE TO TIER</Lane>
      {bands.map((b) => (
        <g key={b.name}>
          <rect x={sx(b.from)} y={52} width={sx(b.to) - sx(b.from) - 3} height={64} fill={`rgba(224,35,28,${b.a})`} stroke={LINE} />
          <text x={sx(b.from) + 12} y={80} fill={BONE} fontSize={15} fontWeight={500}>
            {b.name}
          </text>
          <text x={sx(b.from) + 12} y={100} fill={BONE} opacity={0.75} fontSize={12}>
            {b.sub}
          </text>
        </g>
      ))}
      {[0, 150000, 300000, 500000].map((v) => (
        <text key={v} x={sx(v)} y={136} fill={MUTED} fontSize={12}>
          {v === 0 ? "$0" : `> $${v / 1000}k`}
        </text>
      ))}
      <Lane y={186}>INSIGHT RULES, CHECKED ON THE INPUTS</Lane>
      {rules.map(([cond, out], i) => {
        const x = 20 + (i % 2) * 390;
        const y = 200 + Math.floor(i / 2) * 92;
        return (
          <g key={cond}>
            <rect x={x} y={y} width={370} height={78} rx={6} fill={FILL} stroke={LINE} />
            <text x={x + 14} y={y + 30} fill={BONE} fontSize={14} fontFamily="ui-monospace, Menlo, monospace">
              {cond}
            </text>
            <text x={x + 14} y={y + 55} fill={MUTED} fontSize={12.5}>
              {out}
            </text>
          </g>
        );
      })}
      <text x={20} y={410} fill={MUTED} fontSize={12.5}>
        If no rule matches, the report says the metrics are balanced.
      </text>
    </Frame>
  );
}

/* ---------------------------------------------------------- Housing price API */

function ApiPipeline() {
  const inputs = [
    "longitude",
    "latitude",
    "housing_median_age",
    "total_rooms",
    "total_bedrooms",
    "population",
    "households",
    "median_income",
    "ocean_proximity",
  ];
  const branches = [
    ["bedrooms", "total_bedrooms / total_rooms"],
    ["rooms_per_house", "total_rooms / households"],
    ["people_per_house", "population / households"],
    ["log", "log of 5 skewed columns"],
    ["geo", "RBF to 45 k-means clusters"],
    ["cat", "one-hot ocean_proximity"],
    ["remainder", "housing_median_age"],
  ];
  return (
    <Frame title="Housing price model pipeline">
      <Lane y={26}>9 INPUTS</Lane>
      {inputs.map((n, i) => (
        <text key={n} x={20} y={56 + i * 40} fill={BONE} fontSize={12.5} fontFamily="ui-monospace, Menlo, monospace">
          {n}
        </text>
      ))}
      <path d="M182 44V384" stroke={LINE} />
      <Arrow d="M182 214H214" />
      <Lane y={26}>
        <tspan x={226}>COLUMNTRANSFORMER, 7 BRANCHES</tspan>
      </Lane>
      {branches.map(([n, d], i) => (
        <g key={n}>
          <rect x={220} y={38 + i * 50} width={330} height={42} rx={5} fill={n === "geo" ? "rgba(224,35,28,.12)" : FILL} stroke={n === "geo" ? EMBER : LINE} />
          <text x={232} y={64 + i * 50} fill={BONE} fontSize={13} fontWeight={500}>
            {n}
          </text>
          <text x={360} y={64 + i * 50} fill={MUTED} fontSize={11.5}>
            {d}
          </text>
        </g>
      ))}
      <text x={220} y={410} fill={MUTED} fontSize={11.5}>
        Every numeric branch imputes medians and standard-scales.
      </text>
      <Arrow d="M550 214H580" />
      <Box x={584} y={176} w={86} h={76} title="59" lines={["features"]} />
      <Arrow d="M670 214H690" />
      <rect x={694} y={150} width={92} height={128} rx={6} fill="rgba(224,35,28,.14)" stroke={EMBER} />
      <text x={706} y={176} fill={BONE} fontSize={14} fontWeight={500}>
        Random
      </text>
      <text x={706} y={194} fill={BONE} fontSize={14} fontWeight={500}>
        forest
      </text>
      <text x={706} y={222} fill={MUTED} fontSize={12}>
        100 trees
      </text>
      <text x={706} y={242} fill={MUTED} fontSize={12}>
        max_features
      </text>
      <text x={706} y={260} fill={MUTED} fontSize={12}>
        9
      </text>
      <Arrow d="M740 278V318" />
      <text x={740} y={340} fill={EMBER} fontSize={13} textAnchor="middle">
        price
      </text>
    </Frame>
  );
}

function ApiContract() {
  const fields = [
    ["longitude", "float"],
    ["latitude", "float"],
    ["housing_median_age", "float"],
    ["total_rooms", "float"],
    ["total_bedrooms", "float"],
    ["population", "float"],
    ["households", "float"],
    ["median_income", "float"],
    ["ocean_proximity", "str"],
  ];
  return (
    <Frame title="Housing price API contract and deployment">
      <rect x={20} y={20} width={360} height={300} rx={6} fill={FILL} stroke={LINE} />
      <text x={36} y={48} fill={EMBER} fontSize={15} fontWeight={500} fontFamily="ui-monospace, Menlo, monospace">
        POST /predict
      </text>
      <text x={36} y={70} fill={MUTED} fontSize={12}>
        body: HouseData (Pydantic)
      </text>
      {fields.map(([n, t], i) => (
        <g key={n} fontFamily="ui-monospace, Menlo, monospace" fontSize={12.5}>
          <text x={46} y={98 + i * 24} fill={BONE}>
            {n}
          </text>
          <text x={350} y={98 + i * 24} fill={MUTED} textAnchor="end">
            {t}
          </text>
        </g>
      ))}
      <Arrow d="M380 100H446" label="200 OK" lx={413} ly={90} />
      <Box x={450} y={40} w={330} h={92} title="Response" lines={['{ "predicted_price": float }', "rounded to 2 decimal places"]} mono />
      <Box x={450} y={150} w={330} h={76} title="GET /" lines={['{ "message": "API is running" }']} mono />
      <Box x={450} y={244} w={330} h={76} title="CORS" lines={["all origins, methods and headers"]} />
      <Lane y={354}>DEPLOYMENT</Lane>
      <Box x={20} y={366} w={175} h={64} title="Docker" lines={["python:3.9"]} />
      <Box x={215} y={366} w={175} h={64} title="pip install" lines={["requirements.txt"]} />
      <Box x={410} y={366} w={175} h={64} title="uvicorn" lines={["app.main:app :8080"]} />
      <Box x={605} y={366} w={175} h={64} title="Render" lines={["live /docs"]} accent />
      <Arrow d="M195 398H211" />
      <Arrow d="M390 398H406" />
      <Arrow d="M585 398H601" />
    </Frame>
  );
}

/* ---------------------------------------------------------- DistilBERT detector */

function DistilbertPipeline() {
  return (
    <Frame title="AI text detector training and inference">
      <Lane y={30}>TRAINING, KAGGLE NOTEBOOK</Lane>
      <Box x={20} y={42} w={175} h={110} title="Essays" lines={["29,145 texts", "17,508 human", "11,637 AI"]} />
      <Box x={215} y={42} w={175} h={110} title="Stratified split" lines={["26,230 train", "2,915 test"]} />
      <Box x={410} y={42} w={175} h={110} title="Tokenize" lines={["distilbert-base-", "uncased, 128 max"]} />
      <Box x={605} y={42} w={175} h={110} title="Fine-tune" lines={["1 epoch, lr 2e-5", "fp16 on a Tesla T4", "loss 0.106"]} accent />
      <Arrow d="M195 97H211" />
      <Arrow d="M390 97H406" />
      <Arrow d="M585 97H601" />
      <Arrow d="M692 152V190" />
      <Box x={430} y={194} w={350} h={64} title="Hugging Face Hub" lines={["sahil077/ai-text-detector"]} />
      <Arrow d="M497 258V316" />
      <Lane y={306}>INFERENCE, APP.PY</Lane>
      <Box x={20} y={320} w={175} h={104} title="Input text" lines={["from the Space UI"]} />
      <Box x={215} y={320} w={175} h={104} title="Tokenize" lines={["truncate to 128"]} />
      <Box x={410} y={320} w={175} h={104} title="DistilBERT" lines={["+ classification head", "66,955,010 params"]} accent />
      <Box x={605} y={320} w={175} h={104} title="Softmax" lines={["argmax: Human or AI", "plus confidence"]} />
      <Arrow d="M195 372H211" />
      <Arrow d="M390 372H406" />
      <Arrow d="M585 372H601" />
    </Frame>
  );
}

function DistilbertMetrics() {
  const y = (v: number) => 380 - ((v - 0.9) / 0.1) * 300;
  const groups = [
    { name: "Precision", human: 1.0, ai: 0.95 },
    { name: "Recall", human: 0.96, ai: 1.0 },
    { name: "F1", human: 0.98, ai: 0.97 },
  ];
  return (
    <Frame title="AI text detector test set results">
      <text x={20} y={110} fill={BONE} fontSize={84} fontWeight={300}>
        0.98
      </text>
      <text x={24} y={140} fill={MUTED} fontSize={13}>
        accuracy on 2,915 held-out essays
      </text>
      <g fontSize={13}>
        <rect x={24} y={186} width={14} height={14} fill={BONE} opacity={0.8} />
        <text x={46} y={198} fill={BONE}>
          Human, 1,751 essays
        </text>
        <rect x={24} y={214} width={14} height={14} fill={RED} />
        <text x={46} y={226} fill={BONE}>
          AI, 1,164 essays
        </text>
      </g>
      <text x={24} y={404} fill={MUTED} fontSize={11.5}>
        Axis starts at 0.90 to show the gaps.
      </text>
      {[0.9, 0.925, 0.95, 0.975, 1].map((v) => (
        <g key={v}>
          <line x1={320} x2={780} y1={y(v)} y2={y(v)} stroke="rgba(223,231,224,.1)" />
          <text x={312} y={y(v) + 4} fill={MUTED} fontSize={11} textAnchor="end">
            {v.toFixed(v === 0.925 || v === 0.975 ? 3 : 2)}
          </text>
        </g>
      ))}
      {groups.map((g, i) => {
        const x0 = 345 + i * 148;
        return (
          <g key={g.name}>
            <rect x={x0} y={y(g.human)} width={50} height={380 - y(g.human)} fill={BONE} opacity={0.8} />
            <rect x={x0 + 58} y={y(g.ai)} width={50} height={380 - y(g.ai)} fill={RED} />
            <text x={x0 + 25} y={y(g.human) - 8} fill={BONE} fontSize={12} textAnchor="middle">
              {g.human.toFixed(2)}
            </text>
            <text x={x0 + 83} y={y(g.ai) - 8} fill={BONE} fontSize={12} textAnchor="middle">
              {g.ai.toFixed(2)}
            </text>
            <text x={x0 + 54} y={404} fill={MUTED} fontSize={13} textAnchor="middle">
              {g.name}
            </text>
          </g>
        );
      })}
    </Frame>
  );
}

/* ---------------------------------------------------------- TF-IDF + SVM */

function TfidfPipeline() {
  return (
    <Frame title="TF-IDF and linear SVM pipeline">
      <Box x={20} y={30} w={230} h={130} title="Dataset" lines={["686 texts, 3 classes", "ai 335", "human 181", "post_edited_ai 170"]} />
      <Box x={285} y={30} w={230} h={130} title="clean_text" lines={["lowercase", "drop URLs and digits", "letters only"]} />
      <Box x={550} y={30} w={230} h={130} title="Split" lines={["80/20, stratified", "548 train", "138 test"]} />
      <Arrow d="M250 95H281" />
      <Arrow d="M515 95H546" />
      <Line d="M665 160V198H135V226" />
      <Box x={20} y={230} w={230} h={150} title="TF-IDF" lines={["1 to 4-grams", "up to 20,000 features", "min_df 2, stop words", "sublinear tf"]} />
      <Box x={285} y={230} w={230} h={150} title="LinearSVC" lines={["class weights:", "ai 1", "human 3", "post_edited_ai 2"]} accent />
      <Box x={550} y={230} w={230} h={150} title="Results" lines={["test accuracy 0.73", "5-fold CV 0.66", "saved with pickle"]} />
      <Arrow d="M250 305H281" />
      <Arrow d="M515 305H546" />
      <text x={20} y={420} fill={MUTED} fontSize={12}>
        Weights push the model to respect the smaller human and post-edited classes.
      </text>
    </Frame>
  );
}

function TfidfConfusion() {
  const m = [
    [59, 0, 8],
    [6, 29, 2],
    [21, 0, 13],
  ];
  const labels = ["ai", "human", "post-edited"];
  const C = 106;
  const X = 150;
  const Y = 70;
  return (
    <Frame title="TF-IDF and SVM confusion matrix">
      <text x={X + (C * 3) / 2} y={40} fill={MUTED} fontSize={12} textAnchor="middle" letterSpacing="0.14em">
        PREDICTED
      </text>
      <text x={34} y={Y + (C * 3) / 2} fill={MUTED} fontSize={12} textAnchor="middle" letterSpacing="0.14em" transform={`rotate(-90 34 ${Y + (C * 3) / 2})`}>
        ACTUAL
      </text>
      {labels.map((l, i) => (
        <g key={l} fill={BONE} fontSize={12.5}>
          <text x={X + i * C + C / 2} y={Y - 10} textAnchor="middle">
            {l}
          </text>
          <text x={X - 10} y={Y + i * C + C / 2 + 4} textAnchor="end">
            {l}
          </text>
        </g>
      ))}
      {m.map((row, r) =>
        row.map((v, c) => (
          <g key={`${r}${c}`}>
            <rect x={X + c * C} y={Y + r * C} width={C - 4} height={C - 4} fill={`rgba(224,35,28,${0.06 + (v / 59) * 0.84})`} stroke={LINE} />
            <text x={X + c * C + C / 2 - 2} y={Y + r * C + C / 2 + 8} fill={BONE} fontSize={24} fontWeight={300} textAnchor="middle">
              {v}
            </text>
          </g>
        )),
      )}
      <g>
        <text x={510} y={96} fill={EMBER} fontSize={11} letterSpacing="0.16em">
          RECALL BY CLASS
        </text>
        {[
          ["ai", "0.88", "59 of 67"],
          ["human", "0.78", "29 of 37"],
          ["post-edited", "0.38", "13 of 34"],
        ].map(([n, v, f], i) => (
          <g key={n}>
            <text x={510} y={134 + i * 44} fill={BONE} fontSize={14}>
              {n}
            </text>
            <text x={650} y={134 + i * 44} fill={BONE} fontSize={20} fontWeight={300}>
              {v}
            </text>
            <text x={705} y={134 + i * 44} fill={MUTED} fontSize={12}>
              {f}
            </text>
          </g>
        ))}
        <text x={510} y={300} fill={BONE} fontSize={13}>
          Hardest case: 21 of 34
        </text>
        <text x={510} y={320} fill={BONE} fontSize={13}>
          post-edited texts read as AI.
        </text>
        <text x={510} y={352} fill={MUTED} fontSize={12}>
          Human text is never mistaken
        </text>
        <text x={510} y={370} fill={MUTED} fontSize={12}>
          for AI: precision 1.00.
        </text>
      </g>
    </Frame>
  );
}

/* ---------------------------------------------------------- Matchstick (React) */

function ReactTree() {
  return (
    <Frame title="Matchstick component tree">
      <Box x={290} y={24} w={220} h={100} title="App" lines={["state: mode, alert, btntxt", "togglemode(), showalert()"]} accent />
      <path d="M400 124V160M130 160H670M130 160V196M400 160V196M670 160V196" fill="none" stroke={LINE} strokeWidth={1.4} />
      <Box x={20} y={200} w={220} h={96} title="Navbar" lines={['title "Matchstick"', "dark mode switch"]} />
      <Box x={290} y={200} w={220} h={96} title="Alert" lines={["shows showalert() text", "clears after 1.5 s"]} />
      <Box x={560} y={200} w={220} h={96} title="RouterProvider" lines={["createBrowserRouter"]} />
      <path d="M670 296V328M585 328H755M585 328V352M755 328V352" fill="none" stroke={LINE} strokeWidth={1.4} />
      <Box x={505} y={356} w={160} h={72} title="/ Textform" lines={["headings, mode"]} />
      <Box x={680} y={356} w={110} h={72} title="/About" lines={["About"]} />
      <text x={20} y={360} fill={MUTED} fontSize={12.5}>
        Props flow down from App:
      </text>
      <text x={20} y={382} fill={MUTED} fontSize={12.5}>
        mode, togglemode and btntxt to Navbar,
      </text>
      <text x={20} y={404} fill={MUTED} fontSize={12.5}>
        alert to Alert, mode to Textform.
      </text>
    </Frame>
  );
}

function ReactFlow() {
  return (
    <Frame title="Matchstick state and events">
      <Lane y={30}>THEME</Lane>
      <Box x={20} y={42} w={175} h={110} title="Switch" lines={["in Navbar"]} />
      <Box x={215} y={42} w={175} h={110} title="togglemode()" lines={["flips light / dark", "swaps button text"]} />
      <Box x={410} y={42} w={175} h={110} title="mode" lines={["body: white / grey", "Textform recolours"]} accent />
      <Box x={605} y={42} w={175} h={110} title="showalert()" lines={['"Dark mode has', 'been enabled"', "gone after 1.5 s"]} />
      <Arrow d="M195 97H211" />
      <Arrow d="M390 97H406" />
      <Arrow d="M585 97H601" />
      <Lane y={226}>TEXT</Lane>
      <Box x={20} y={238} w={175} h={110} title="textarea" lines={["onChange"]} />
      <Box x={215} y={238} w={175} h={110} title="text" lines={["useState"]} accent />
      <Box x={410} y={238} w={175} h={110} title="Buttons" lines={["Uppercase", "Lowercase", "Reverse words"]} />
      <Box x={605} y={238} w={175} h={110} title="Live summary" lines={["word count", "character count"]} />
      <Arrow d="M195 293H211" />
      <Line d="M410 300H392" />
      <Line d="M390 286H406" />
      <Line d="M302 348V380H692V352" />
      <text x={497} y={400} fill={MUTED} fontSize={11.5} textAnchor="middle">
        every change re-renders the summary
      </text>
    </Frame>
  );
}

const DIAGRAMS: Record<DiagramId, () => ReactNode> = {
  "housing-flow": HousingFlow,
  "housing-tiers": HousingTiers,
  "api-pipeline": ApiPipeline,
  "api-contract": ApiContract,
  "distilbert-pipeline": DistilbertPipeline,
  "distilbert-metrics": DistilbertMetrics,
  "tfidf-pipeline": TfidfPipeline,
  "tfidf-confusion": TfidfConfusion,
  "react-tree": ReactTree,
  "react-flow": ReactFlow,
};

export function DiagramSvg({ id }: { id: DiagramId }) {
  const D = DIAGRAMS[id];
  return <D />;
}
