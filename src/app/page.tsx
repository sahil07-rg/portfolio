/* eslint-disable @next/next/no-img-element */
// Layout and class names follow ThreeUI Community "Kage" (MIT); /kage/kage.js drives the scene
// and reads the data-* hooks below (data-cam, data-chip, data-les, data-fg, data-rv).
import { ForegroundDimmer } from "@/components/foreground-dimmer";
import { HoloCard } from "@/components/holo-card";
import { SakuraPetals } from "@/components/sakura-petals";
import { chips, credentials, featured, nav, profile, repos, timeline, work } from "@/content/profile";

function Arrow() {
  return (
    <svg viewBox="0 0 14 14" fill="none" width="13" height="13" aria-hidden="true">
      <path d="M3 11 11 3M5 3h6v6" stroke="#dfe7e0" strokeWidth="1.3" />
    </svg>
  );
}

function Mark({ size }: { size?: number }) {
  return (
    <svg viewBox="0 0 44 44" fill="none" width={size} height={size} aria-hidden="true">
      <circle cx="22" cy="25" r="8.6" fill="#e0231c" fillOpacity=".9" />
      <path d="M5 13h34M9 18.4h26M22 8.5v27" stroke="#dfe7e0" strokeWidth="1.5" />
      <path d="M14 35.5h16" stroke="#dfe7e0" strokeWidth="1.2" strokeOpacity=".6" />
    </svg>
  );
}

function Fg({ name, src, w, h, from, extra = "" }: { name: string; src: string; w: number; h: number; from: string; extra?: string }) {
  return (
    <span className={`fg-el fg-${name}${extra ? ` ${extra}` : ""}`} data-fg-in={from}>
      <img src={`/kage/foreground/png/${src}.webp`} alt="" width={w} height={h} loading="lazy" decoding="async" />
    </span>
  );
}

const external = (href: string) => (href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {});

export default function Home() {
  return (
    <>
      <canvas id="gl" aria-hidden="true" />
      <SakuraPetals />
      <ForegroundDimmer selector=".repos" />
      <div id="vignette" />
      <div id="grain" />
      <div className="cur-dot" id="cursor" />

      <div id="pre">
        <div className="pre-in">
          <div className="pre-mark">
            <svg viewBox="0 0 44 44" fill="none" aria-hidden="true">
              <circle cx="22" cy="24" r="9.5" stroke="#e0231c" strokeWidth="1.2" />
              <path d="M6 12h32M9.5 17h25M22 8v28" stroke="#dfe7e0" strokeWidth="1.2" />
            </svg>
          </div>
          <div className="pre-jp jp">साहिल</div>
          <div className="pre-bar">
            <i id="pre-fill" />
          </div>
          <div className="pre-meta">
            <span>Building the scene</span>
            <b>
              <span id="pre-pct">0</span>%
            </b>
          </div>
        </div>
      </div>

      <header className="nav" id="nav">
        <a className="brand" href="#top" data-cursor>
          <Mark />
          <span className="brand-tx">
            <b>SAHIL KUMAR</b>
            <i>AI/ML ENGINEER</i>
          </span>
        </a>
        <nav className="nav-links" id="navlinks">
          {nav.map((n) => (
            <a key={n.href} className="nav-link" href={n.href} data-cursor>
              <span>{n.label}</span>
              <span className="alt">{n.hi}</span>
            </a>
          ))}
        </nav>
        <button className="nav-burger" aria-label="Menu" data-cursor>
          <i />
          <i />
        </button>
      </header>

      <div className="page" id="top">
        {/* ------------------------------------------------ hero */}
        <section className="hero" id="hero" data-cam="0">
          <div className="hero-top">
            <div className="eyebrow" data-rv="fade">
              <span className="dot" /> ML research intern, ISRO IIRS
            </div>
            <h1 className="display h-hero">
              <span className="mask-line">
                <span>Machine learning</span>
              </span>
              <span className="mask-line">
                <span>that works where</span>
              </span>
              <span className="mask-line">
                <span>the sensors don&apos;t.</span>
              </span>
            </h1>
            <p className="hero-sub body" data-rv="up">
              Robotics and AI undergraduate in Bengaluru, building models from satellite, sensor and genomic data.
            </p>
          </div>

          <div className="hero-spacer" />

          <div className="hero-foot">
            <div className="hero-cue" data-rv="fade">
              <span>Open to ML roles</span>
              <span className="track">
                <i />
              </span>
            </div>
            <div className="chapters" id="chips">
              {chips.map((c, i) => (
                <div key={c.title} className="chip" data-chip={i} data-rv="up" data-cursor>
                  <span className="num">0{i + 1}</span>
                  <span className="tx">
                    <b>{c.title}</b>
                    <p>{c.body}</p>
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Sylva-style floating cards: the holo ID card and a white note pinned beside it */}
          <div className="float-stack" data-rv="fade">
            <HoloCard />
            <a className="note-card" href="#gate" data-cursor>
              <span className="note-k">Latest research</span>
              <b>PM2.5 from orbit</b>
              <img src="/work/igp-haze.jpg" alt="Satellite view of haze over the Indo-Gangetic Plain" width={1800} height={1350} />
              <span className="note-ar">
                <Arrow />
              </span>
            </a>
          </div>

          <div className="word-fb" aria-hidden="true">
            SAHIL
          </div>

          <div className="hero-side" data-rv="up">
            <span className="v jp">साहिल कुमार</span>
          </div>
        </section>

        {/* ------------------------------------------------ 01 research */}
        <section className="sec" id="gate" data-cam="1">
          <div className="fg" data-fg="gate" aria-hidden="true">
            <Fg name="wall" src="temple-wall" w={1536} h={884} from="left" />
            <Fg name="pine" src="pine-tree" w={1024} h={1438} from="right" />
            <Fg name="grass" src="tall-grass" w={1717} h={916} from="up" />
          </div>
          <div className="sec-head" data-rv="fade">
            <span className="k">
              <b>01</b> Featured research
            </span>
            <span className="rule" />
            <span className="k jp">शोध</span>
          </div>
          <div className="gate-grid">
            <h2 className="display h-sec" data-rv="up">
              {featured.title}
            </h2>
            <div className="gate-copy">
              <p className="lead" data-rv="up">
                {featured.lead}
              </p>
              <p className="body" data-rv="up">
                {featured.body}
              </p>
              <a className="arrowlink" href="#pathways" data-rv="fade" data-cursor>
                <span>See selected work</span>
                <span className="ar">
                  <Arrow />
                </span>
              </a>
            </div>
          </div>
          <div className="gate-stats" data-rv="up">
            {featured.stats.map((s) => (
              <div key={s.label}>
                <b>{s.value}</b>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ------------------------------------------------ 02 work (cloth cards) */}
        <section className="sec" id="pathways" data-cam="2">
          <div className="fg" data-fg="pathways" aria-hidden="true">
            <Fg name="sakura" src="sakura-branch" w={1536} h={1024} from="left" extra="fg-el--sway" />
            <Fg name="leaves" src="maple-leaves" w={1536} h={1024} from="right" extra="fg-el--sway" />
            <Fg name="lantern" src="stone-lantern" w={1024} h={1499} from="up" />
            <Fg name="bush" src="garden-bush" w={1717} h={876} from="up" />
          </div>
          <div className="sec-head" data-rv="fade">
            <span className="k">
              <b>02</b> Selected work
            </span>
            <span className="rule" />
            <span className="k jp">काम</span>
          </div>
          <div className="cards" id="cards">
            {work.map((w) => (
              <a key={w.title} className="card" href={w.href} data-rv="up" data-cursor {...external(w.href)}>
                <div className="card-fr" data-frame>
                  <span className="card-ar">
                    <Arrow />
                  </span>
                  <div className="card-lab">
                    <b>{w.title}</b>
                    <span className="jp">{w.hi}</span>
                  </div>
                </div>
                <div className="card-meta">
                  <span>{w.meta}</span>
                  <span>{w.linkLabel}</span>
                </div>
              </a>
            ))}
          </div>

          {/* Every public repo, own work first, then merged contributions to other projects. */}
          <div className="repos">
            <h3 className="repos-title" data-rv="up">
              All projects on{" "}
              <a href={profile.links.github} target="_blank" rel="noreferrer" data-cursor>
                GitHub
              </a>
            </h3>
            {(
              [
                ["Built", repos.built],
                ["Contributed to", repos.contributed],
              ] as const
            ).map(([group, list]) => (
              <div key={group} className="repo-group">
                <h4 data-rv="fade">
                  {group} <span>{list.length}</span>
                </h4>
                <ul>
                  {list.map((r) => (
                    <li key={r.name} className="repo" data-rv="up">
                      <div className="repo-main">
                        <b>{r.name}</b>
                        <p>{r.body}</p>
                      </div>
                      <span className="repo-stack">{r.stack}</span>
                      <span className="repo-links">
                        {r.links.map((l) => (
                          <a key={l.href} href={l.href} target="_blank" rel="noreferrer" data-cursor>
                            {l.label}
                            <Arrow />
                          </a>
                        ))}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ------------------------------------------------ 03 experience */}
        <section className="sec" id="lessons" data-cam="3">
          <div className="fg" data-fg="lessons" aria-hidden="true">
            <Fg name="wall" src="temple-wall" w={1536} h={884} from="right" extra="fg-el--flip" />
            <Fg name="stones" src="basalt-stones" w={1536} h={996} from="up" />
            <Fg name="grass" src="tall-grass" w={1717} h={916} from="up" />
          </div>
          <div className="sec-head" data-rv="fade">
            <span className="k">
              <b>03</b> Experience and papers
            </span>
            <span className="rule" />
            <span className="k jp">अनुभव</span>
          </div>
          <div className="cur-head">
            <h2 className="display h-sec" data-rv="up">
              Two internships. Two papers. One award.
            </h2>
            <p className="body-lg" data-rv="up">
              Research at ISRO, agent work at a startup, and the papers that came out of the projects in between.
            </p>
          </div>
          <div className="cur" id="cur">
            {timeline.map((t, i) => {
              const inner = (
                <>
                  <span className="k">0{i + 1}</span>
                  <h3>
                    {t.title}
                    <em className="jp">{t.hi}</em>
                  </h3>
                  <p>{t.body}</p>
                  <span className="t">{t.tag}</span>
                  <i className="bar" />
                </>
              );
              return t.href ? (
                <a key={t.title} className="les" data-les={i} href={t.href} data-cursor {...external(t.href)}>
                  {inner}
                </a>
              ) : (
                <div key={t.title} className="les" data-les={i} data-cursor>
                  {inner}
                </div>
              );
            })}
          </div>
        </section>

        {/* ------------------------------------------------ 04 contact */}
        <section className="sec fin" id="eternity" data-cam="4">
          <div className="fg" data-fg="eternity" aria-hidden="true">
            <Fg name="hill" src="hill" w={1774} h={887} from="up" />
            <Fg name="ruins" src="shrine-ruins" w={1536} h={1001} from="left" />
            <Fg name="grass" src="tall-grass" w={1717} h={916} from="up" />
            <Fg name="sakura" src="sakura-branch" w={1536} h={1024} from="left" />
          </div>
          <div className="eyebrow" data-rv="fade">
            04 Contact
          </div>
          <h2 className="display" data-rv="up">
            Let&apos;s build
          </h2>
          <p className="body-lg" data-rv="up">
            Open to ML internships, research collaborations and applied ML roles. Satellite, sensor and agent
            problems especially welcome.
          </p>
          <a className="cta" href={`mailto:${profile.email}`} data-rv="fade" data-cursor>
            <i />
            <span>Email me</span>
            <Arrow />
          </a>
        </section>

        <footer className="foot" data-cam="5">
          <div className="fg" data-fg="foot" aria-hidden="true">
            <Fg name="bush" src="garden-bush" w={1717} h={876} from="up" />
            <Fg name="grass" src="tall-grass" w={1717} h={916} from="up" />
            <Fg name="stones" src="basalt-stones" w={1536} h={996} from="up" />
          </div>
          <div className="foot-grid">
            <div className="foot-brand">
              <Mark size={34} />
              <p>
                Sahil Kumar. AI/ML engineer and Robotics and AI undergraduate at Sir M. Visvesvaraya Institute of
                Technology, Bengaluru.
              </p>
            </div>
            <div>
              <h4>Sections</h4>
              <ul>
                {nav.map((n) => (
                  <li key={n.href}>
                    <a href={n.href} data-cursor>
                      {n.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4>Elsewhere</h4>
              <ul>
                <li>
                  <a href={profile.links.github} target="_blank" rel="noreferrer" data-cursor>
                    GitHub
                  </a>
                </li>
                <li>
                  <a href={profile.links.linkedin} target="_blank" rel="noreferrer" data-cursor>
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href={profile.links.huggingface} target="_blank" rel="noreferrer" data-cursor>
                    Hugging Face
                  </a>
                </li>
                <li>
                  <a href={`mailto:${profile.email}`} data-cursor>
                    Email
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4>Recognition</h4>
              <ul>
                {credentials.map((c) => (
                  <li key={c}>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="foot-base">
            <span>© 2026 Sahil Kumar</span>
            <span className="jp">सीखना कभी नहीं रुकता</span>
            <span>
              Scene adapted from{" "}
              <a href="https://threeui.com" target="_blank" rel="noreferrer">
                ThreeUI Kage
              </a>{" "}
              (MIT)
            </span>
          </div>
        </footer>
      </div>

      <div id="fg-sky" aria-hidden="true" />
      <div className="rail" id="rail" />
    </>
  );
}
