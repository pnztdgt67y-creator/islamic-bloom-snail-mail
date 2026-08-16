:root {
  --pink: #f6dddd;
  --pink-light: #fff2f3;
  --pink-deep: #c98991;
  --rose: #b96f79;
  --cream: #fffaf5;
  --beige: #eadfd3;
  --beige-deep: #d7c4b2;
  --white: #ffffff;
  --ink: #624f50;
  --muted: #8f7979;
  --shadow: 0 18px 50px rgba(113, 79, 79, .16);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-height: 100vh;
  overflow-x: hidden;
  color: var(--ink);
  font-family: "DM Sans", sans-serif;
  background:
    radial-gradient(circle at 15% 12%, rgba(255,255,255,.95) 0 7%, transparent 8%),
    radial-gradient(circle at 90% 25%, rgba(255,255,255,.65) 0 5%, transparent 6%),
    linear-gradient(145deg, #fffaf7, #f9e8e8 48%, #efe3d8);
}

body::before {
  content: "";
  position: fixed;
  inset: 0;
  pointer-events: none;
  opacity: .25;
  background-image:
    radial-gradient(#dcaeb1 1px, transparent 1px),
    radial-gradient(#fff 1px, transparent 1px);
  background-size: 32px 32px, 46px 46px;
  background-position: 0 0, 12px 15px;
}

button, textarea {
  font: inherit;
}

button {
  -webkit-tap-highlight-color: transparent;
}

.app {
  position: relative;
  z-index: 1;
  width: min(100%, 900px);
  margin: auto;
  padding: max(28px, env(safe-area-inset-top)) 18px 80px;
}

.brand {
  text-align: center;
  padding: 10px 0 24px;
}

.brand-flower {
  font-size: 31px;
  filter: drop-shadow(0 5px 6px rgba(137,89,89,.15));
  animation: float 3s ease-in-out infinite;
}

.eyebrow {
  margin: 7px 0 5px;
  color: var(--rose);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: .2em;
}

h1, h2 {
  font-family: "Cormorant Garamond", serif;
  color: #765b5e;
}

.brand h1 {
  margin: 0;
  font-size: clamp(37px, 10vw, 58px);
  line-height: .95;
}

.subtitle {
  color: var(--muted);
  margin: 11px 0 0;
  font-size: 14px;
}

.mail-stage {
  min-height: 440px;
  display: grid;
  place-items: center;
  align-content: center;
  perspective: 1200px;
  padding: 55px 0 30px;
}

.envelope {
  position: relative;
  width: min(92vw, 560px);
  aspect-ratio: 1.48 / 1;
  filter: drop-shadow(0 28px 28px rgba(91,61,61,.18));
  transform-style: preserve-3d;
}

.envelope-back {
  position: absolute;
  inset: 0;
  border-radius: 18px;
  background: linear-gradient(145deg, #f7dfe0, #edcccc);
  border: 1px solid rgba(150,105,105,.15);
}

.envelope-front {
  position: absolute;
  inset: 0;
  z-index: 5;
  overflow: hidden;
  border-radius: 18px;
  background:
    linear-gradient(32deg, transparent 49.5%, rgba(202,155,158,.26) 50%, transparent 50.7%),
    linear-gradient(-32deg, transparent 49.5%, rgba(202,155,158,.26) 50%, transparent 50.7%),
    linear-gradient(145deg, #f8e3e3, #efd0d2);
  clip-path: polygon(0 0, 50% 46%, 100% 0, 100% 100%, 0 100%);
}

.flap {
  position: absolute;
  z-index: 8;
  top: 0;
  left: 0;
  width: 100%;
  height: 59%;
  transform-origin: top center;
  transform-style: preserve-3d;
  transition: transform 1.05s cubic-bezier(.2,.8,.2,1);
  clip-path: polygon(0 0, 100% 0, 50% 100%);
  background: linear-gradient(165deg, #f9e6e7, #efcfd1);
  border-radius: 18px 18px 0 0;
}

.liner {
  position: absolute;
  inset: 7px;
  display: grid;
  grid-template-columns: repeat(4,1fr);
  place-items: center;
  font-size: 20px;
  opacity: .72;
  background: #fff8f2;
  clip-path: polygon(0 0,100% 0,50% 100%);
}

.envelope.open .flap {
  transform: rotateX(178deg);
  z-index: 1;
}

.letter-preview {
  position: absolute;
  z-index: 3;
  left: 9%;
  right: 9%;
  top: 12%;
  height: 74%;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 22px;
  gap: 5px;
  background:
    radial-gradient(circle at 10% 20%, rgba(239,202,205,.4) 0 3px, transparent 4px),
    #fffaf4;
  box-shadow: 0 3px 15px rgba(100,70,70,.1);
  transition: transform 1.1s .45s cubic-bezier(.2,.8,.2,1);
}

.letter-preview span {
  font-size: 24px;
}

.letter-preview strong {
  color: var(--rose);
  font-family: "Cormorant Garamond", serif;
  font-size: 21px;
}

.letter-preview small {
  color: var(--muted);
}

.envelope.open .letter-preview {
  transform: translateY(-48%);
}

.address-label {
  position: absolute;
  left: 50%;
  top: 57%;
  transform: translate(-50%,-50%) rotate(-1deg);
  width: 55%;
  padding: 17px 10px;
  text-align: center;
  background: rgba(255,250,245,.92);
  border: 1px solid #e5cfd0;
  border-radius: 10px;
  box-shadow: 0 6px 12px rgba(117,80,80,.08);
}

.address-label span,
.address-label small {
  display: block;
  font-size: 9px;
  letter-spacing: .18em;
}

.address-label strong {
  display: block;
  margin: 4px 0;
  color: #a86c74;
  font-family: "Cormorant Garamond", serif;
  font-size: clamp(18px,5vw,27px);
}

.stamp {
  position: absolute;
  top: 8%;
  right: 7%;
  width: 62px;
  height: 76px;
  display: grid;
  place-items: center;
  align-content: center;
  color: #a36d73;
  background: #fff8f0;
  border: 2px dashed #c99499;
  transform: rotate(4deg);
}

.stamp span { font-size: 24px; }
.stamp small { font-size: 7px; font-weight: 700; text-align: center; letter-spacing: .1em; }

.postmark {
  position: absolute;
  top: 17%;
  right: 22%;
  color: rgba(139,94,98,.5);
  border: 1px solid rgba(139,94,98,.4);
  border-radius: 50%;
  padding: 8px 5px;
  font-size: 8px;
  transform: rotate(-8deg);
}

.seal {
  position: absolute;
  z-index: 10;
  left: 50%;
  top: 43%;
  width: 92px;
  height: 92px;
  transform: translate(-50%,-50%);
  border-radius: 50%;
  display: grid;
  place-items: center;
  align-content: center;
  cursor: pointer;
  color: white;
  background:
    radial-gradient(circle at 35% 30%, #df9da5, #bd747e 58%, #a55f69);
  border: 5px double rgba(255,255,255,.45);
  box-shadow: 0 8px 18px rgba(113,63,69,.25);
  transition: transform .3s, opacity .4s;
  animation: sealPulse 2.2s infinite;
}

.seal span { font-size: 24px; }
.seal small { font-size: 7px; font-weight: 700; line-height: 1.15; text-align: center; }

.envelope.open .seal {
  transform: translate(-50%,-50%) scale(.2) rotate(25deg);
  opacity: 0;
  pointer-events: none;
}

.tap-hint {
  margin-top: 35px;
  color: var(--rose);
  text-align: center;
  font-size: 13px;
  animation: hint 2s ease-in-out infinite;
}

.mailbox {
  padding-top: 20px;
  animation: fadeUp .8s ease both;
}

.hidden {
  display: none !important;
}

.section-heading {
  text-align: center;
  margin: 15px 0 25px;
}

.section-heading h2 {
  margin: 4px 0;
  font-size: 36px;
}

.section-heading p:last-child {
  color: var(--muted);
  font-size: 13px;
}

.mail-grid {
  display: grid;
  grid-template-columns: repeat(2,1fr);
  gap: 13px;
}

.mail-piece {
  position: relative;
  min-height: 155px;
  padding: 20px 14px;
  border: 1px solid rgba(180,132,135,.2);
  border-radius: 22px;
  text-align: left;
  color: var(--ink);
  background:
    linear-gradient(145deg, rgba(255,255,255,.92), rgba(255,244,241,.9));
  box-shadow: 0 10px 25px rgba(112,76,76,.08);
  cursor: pointer;
  transition: transform .22s ease, box-shadow .22s ease;
}

.mail-piece:nth-child(3n+2) {
  background: linear-gradient(145deg,#f8e1e2,#fff5f1);
}

.mail-piece:nth-child(4n) {
  background: linear-gradient(145deg,#f0e5da,#fffaf5);
}

.mail-piece:active {
  transform: scale(.97) rotate(-1deg);
}

.mail-piece.large {
  grid-column: span 2;
  min-height: 135px;
}

.piece-icon {
  display: block;
  font-size: 31px;
  margin-bottom: 14px;
}

.piece-number {
  position: absolute;
  top: 14px;
  right: 15px;
  color: #c89ca0;
  font-family: "Cormorant Garamond", serif;
  font-size: 16px;
}

.mail-piece strong {
  display: block;
  font-family: "Cormorant Garamond", serif;
  color: #75585b;
  font-size: 21px;
}

.mail-piece small {
  color: var(--muted);
  font-size: 11px;
}

.mail-piece.locked {
  opacity: .6;
  filter: grayscale(.25);
}

.modal {
  position: fixed;
  z-index: 100;
  inset: 0;
  display: none;
  align-items: flex-end;
  justify-content: center;
  padding: 18px 12px max(12px, env(safe-area-inset-bottom));
  background: rgba(82,61,61,.35);
  backdrop-filter: blur(8px);
}

.modal.show {
  display: flex;
  animation: fadeIn .25s ease;
}

.modal-card {
  position: relative;
  width: min(100%, 650px);
  max-height: 88vh;
  overflow-y: auto;
  padding: 35px 25px 40px;
  border: 1px solid rgba(180,132,135,.22);
  border-radius: 30px 30px 20px 20px;
  color: var(--ink);
  background:
    radial-gradient(circle at 90% 8%, rgba(245,218,219,.6) 0 45px, transparent 46px),
    #fffaf5;
  box-shadow: var(--shadow);
  animation: sheetUp .4s cubic-bezier(.2,.8,.2,1);
}

.modal-card h2 {
  margin: 5px 0 14px;
  font-size: clamp(34px,9vw,48px);
  line-height: .95;
}

.modal-card p {
  line-height: 1.75;
}

.close {
  position: sticky;
  z-index: 5;
  top: 0;
  float: right;
  width: 38px;
  height: 38px;
  border: 0;
  border-radius: 50%;
  color: #956b70;
  background: #f7e3e3;
  font-size: 25px;
  cursor: pointer;
}

.letter-paper {
  background:
    linear-gradient(rgba(255,250,245,.95),rgba(255,250,245,.95)),
    repeating-linear-gradient(0deg, transparent 0 31px, #eadfda 32px);
}

.divider {
  margin: 20px 0;
  text-align: center;
  letter-spacing: .6em;
}

.big-message {
  color: #ae6f78;
  font-family: "Cormorant Garamond", serif;
  font-size: 42px;
  font-weight: 700;
  text-align: center;
}

.big-message.smaller {
  font-size: 31px;
}

blockquote {
  margin: 25px 0;
  padding: 24px 20px;
  border: 1px solid #ead4d4;
  border-radius: 20px;
  color: #8c6066;
  background: #fff2f2;
  font-family: "Cormorant Garamond", serif;
  font-size: 25px;
  font-weight: 600;
  text-align: center;
}

blockquote cite {
  display: block;
  margin-top: 10px;
  font-family: "DM Sans",sans-serif;
  font-size: 11px;
  font-style: normal;
  letter-spacing: .12em;
}

.script-line {
  color: #a76c74;
  font-family: "Cormorant Garamond",serif;
  font-size: 25px;
  font-style: italic;
}

.giant-flower {
  margin: 10px 0;
  font-size: 100px;
  text-align: center;
  animation: float 3s infinite;
}

.collectible {
  text-align: center;
}

.theme-word {
  color: var(--rose);
  font-weight: 700;
  letter-spacing: .3em;
}

.affirmation {
  margin-top: 25px;
  padding: 18px;
  border-radius: 18px;
  color: #9b6870;
  background: #f7e0e1;
  font-family: "Cormorant Garamond",serif;
  font-size: 25px;
  font-weight: 700;
  text-align: center;
}

.arabic {
  margin: 28px 0 12px;
  color: #8e6268;
  font-size: 31px;
  line-height: 1.9;
  text-align: center;
}

.transliteration {
  color: #a46d75;
  font-style: italic;
  text-align: center;
}

.soft-note {
  margin: 20px 0;
  padding: 15px;
  border-radius: 15px;
  color: var(--muted);
  background: #f5ebe3;
  font-size: 12px;
}

.three-words {
  display: grid;
  gap: 8px;
  margin-top: 25px;
  text-align: center;
  color: var(--rose);
  font-family: "Cormorant Garamond",serif;
  font-size: 24px;
  font-weight: 700;
}

.deeds {
  display: grid;
  gap: 10px;
  margin: 22px 0;
}

.deeds label {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 15px;
  border: 1px solid #eddada;
  border-radius: 16px;
  background: rgba(255,255,255,.7);
  cursor: pointer;
}

.deeds input {
  width: 21px;
  height: 21px;
  flex: 0 0 auto;
  accent-color: #c77f89;
}

.deeds label:has(input:checked) {
  background: #f8e3e4;
}

.progress-wrap {
  text-align: center;
}

.progress-bar {
  height: 12px;
  overflow: hidden;
  margin: 15px 0 9px;
  border-radius: 20px;
  background: #eaded8;
}

.progress-bar div {
  width: 0;
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg,#e0a2aa,#bc7580);
  transition: width .5s ease;
}

.secret-rules {
  display: grid;
  gap: 8px;
  margin: 20px 0;
}

.secret-rules span {
  padding: 11px;
  border-radius: 12px;
  background: #f7e7e5;
  text-align: center;
}

.bloom-button {
  width: 100%;
  margin-top: 15px;
  padding: 16px;
  border: 0;
  border-radius: 17px;
  color: white;
  background: linear-gradient(145deg,#d6929a,#b96f79);
  box-shadow: 0 8px 16px rgba(161,98,107,.2);
  font-weight: 700;
  cursor: pointer;
}

.hidden-message {
  display: none;
  text-align: center;
  color: var(--rose);
  font-weight: 700;
}

.hidden-message.show {
  display: block;
}

.journal-label {
  display: block;
  margin: 20px 0;
  color: #8e6469;
  font-family: "Cormorant Garamond",serif;
  font-size: 21px;
  font-weight: 700;
}

textarea {
  width: 100%;
  min-height: 100px;
  margin-top: 8px;
  resize: vertical;
  padding: 14px;
  border: 1px solid #ead7d5;
  border-radius: 14px;
  outline: none;
  color: var(--ink);
  background: rgba(255,255,255,.75);
  font-family: "DM Sans",sans-serif;
}

textarea:focus {
  border-color: #d69ca2;
  box-shadow: 0 0 0 3px rgba(214,156,162,.15);
}

.friend-note {
  margin: 25px 0;
  padding: 25px 20px;
  border: 1px dashed #d7aeb0;
  border-radius: 20px;
  text-align: center;
  background: #fff3f3;
}

.digital-bookmark {
  width: min(75%,280px);
  min-height: 510px;
  margin: auto;
  padding: 35px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: 1px solid #dfbfc0;
  border-radius: 100px 100px 20px 20px;
  text-align: center;
  background:
    radial-gradient(circle at 50% 8%,#fff 0 8%,transparent 8.5%),
    linear-gradient(#f4d9db,#fff8f2);
  box-shadow: 0 15px 25px rgba(104,72,72,.12);
}

.digital-bookmark > span {
  font-size: 55px;
}

.digital-bookmark h2 {
  font-size: 45px;
}

.garden-grid {
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: 10px;
  margin: 25px 0;
}

.garden-month {
  aspect-ratio: 1/1;
  display: grid;
  place-items: center;
  align-content: center;
  gap: 6px;
  border: 1px dashed #dcc7bd;
  border-radius: 18px;
  color: #b8a5a1;
  background: #f7eee8;
}

.garden-month span {
  font-size: 27px;
}

.garden-month strong {
  font-size: 9px;
  letter-spacing: .15em;
}

.garden-month.active {
  border-style: solid;
  color: #a36b72;
  background: #f5dcde;
}

.giant-gift {
  font-size: 90px;
  text-align: center;
}

.gift-card {
  text-align: center;
}

.bloom-animation {
  font-size: 120px;
  animation: bloom 1.5s ease both, float 3s 1.5s infinite;
}

.celebration {
  position: fixed;
  z-index: 999;
  inset: 0;
  pointer-events: none;
  display: none;
  overflow: hidden;
}

.celebration.show {
  display: block;
}

.celebration div {
  position: absolute;
  top: -10%;
  font-size: 28px;
  animation: fall 3s linear forwards;
}

.celebration div:nth-child(1){left:10%;animation-delay:.1s}
.celebration div:nth-child(2){left:25%;animation-delay:.6s}
.celebration div:nth-child(3){left:42%;animation-delay:.2s}
.celebration div:nth-child(4){left:58%;animation-delay:.8s}
.celebration div:nth-child(5){left:75%;animation-delay:.4s}
.celebration div:nth-child(6){left:90%;animation-delay:.7s}

@keyframes sealPulse {
  0%,100% { box-shadow: 0 8px 18px rgba(113,63,69,.25), 0 0 0 0 rgba(199,127,137,.22); }
  50% { box-shadow: 0 8px 18px rgba(113,63,69,.25), 0 0 0 12px rgba(199,127,137,0); }
}

@keyframes hint {
  50% { transform: translateY(4px); opacity:.65; }
}

@keyframes float {
  50% { transform: translateY(-7px) rotate(2deg); }
}

@keyframes fadeUp {
  from { opacity:0; transform:translateY(25px); }
  to { opacity:1; transform:none; }
}

@keyframes fadeIn {
  from { opacity:0; }
}

@keyframes sheetUp {
  from { opacity:0; transform:translateY(70px) scale(.97); }
  to { opacity:1; transform:none; }
}

@keyframes bloom {
  0% { transform:scale(.1) rotate(-20deg); opacity:0; }
  60% { transform:scale(1.2) rotate(5deg); }
  100% { transform:scale(1); opacity:1; }
}

@keyframes fall {
  to { transform:translateY(115vh) rotate(500deg); opacity:.1; }
}

@media (min-width: 700px) {
  .mail-grid {
    grid-template-columns: repeat(3,1fr);
  }

  .mail-piece.large {
    grid-column: span 2;
  }

  .modal {
    align-items: center;
  }

  .modal-card {
    border-radius: 30px;
  }
}
