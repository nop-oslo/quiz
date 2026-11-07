const app = document.querySelector('#app');
const interpretations = {
  'February 2026': 'https://drive.google.com/file/d/1nrlc9-I5uXoX-P6RaCfVRucYeRavE__3/view',
  'May 2026': 'https://drive.google.com/file/d/1A8fsxtPs_SeuG4pOKXAO8VfFz01A7hAq/view',
};
const roundSize = 12;
const historyVersion = 'v2';
const sessionHistory = new Map();
let attempt;

function node(tag, text, className) {
  const el = document.createElement(tag);
  if (text !== undefined) el.textContent = text;
  if (className) el.className = className;
  return el;
}

function button(label, action, className = 'btn') {
  const el = node('button', label, className);
  el.type = 'button';
  el.addEventListener('click', action);
  return el;
}

function link(label, url) {
  const el = node('a', label);
  el.href = url;
  el.target = '_blank';
  el.rel = 'noopener';
  return el;
}

function show(view, focus = true, headingSelector = 'h1') {
  app.replaceChildren(view);
  if (!focus) return;
  window.scrollTo(0, 0);
  const heading = view.querySelector(headingSelector);
  heading.tabIndex = -1;
  heading.focus({preventScroll: true});
}

function home(focus = true) {
  attempt = undefined;
  const view = node('section');
  const hero = node('div', undefined, 'home-hero');
  const copy = node('div');
  copy.append(node('p', 'RULES QUIZ FOR IPSC SHOOTERS', 'kicker'),
    node('h1', 'Test your knowledge of the IPSC rules'),
    node('p', 'Choose a shooting discipline and answer 12 questions based on its rulebook. Try again for a fresh set of questions, and see the rule behind each answer.', 'intro'));
  const logo = node('img', undefined, 'hero-logo');
  logo.src = 'nop-logo.webp';
  logo.alt = 'NOP club emblem';
  logo.width = 400;
  logo.height = 406;
  hero.append(copy, logo);
  view.append(hero);
  for (const group of ['Centerfire', 'Rimfire', 'Action Air']) {
    const grid = node('div', undefined, 'grid');
    for (const discipline of disciplines.filter(item => item.group === group)) {
      const tile = button(undefined, () => start(discipline), 'tile');
      const arrow = node('span', '→', 'arrow');
      arrow.setAttribute('aria-hidden', 'true');
      tile.append(node('strong', discipline.name), node('span', '12 questions', 'meta'), arrow);
      grid.append(tile);
    }
    view.append(node('h2', group, 'group-label'), grid);
  }
  show(view, focus);
}

function shuffle(values) {
  const result = [...values];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function ruleChapter(question) {
  return question.rule.match(/^\d+(?=\.)/)?.[0] ?? 'Appendices';
}

function buildRounds(questions, previousIds) {
  const roundCount = questions.length / roundSize;
  const chapters = new Map();
  for (const question of questions) {
    const chapter = ruleChapter(question);
    if (!chapters.has(chapter)) chapters.set(chapter, new Map());
    const families = chapters.get(chapter);
    if (!families.has(question.family)) families.set(question.family, []);
    families.get(question.family).push(question);
  }

  // Consecutive slots rotate through the rounds. This spreads each chapter
  // evenly and puts each variant in a different round from its siblings.
  let bestRounds;
  let bestMinimum = -1;
  let bestVariation = Infinity;
  const chapterGroups = [...chapters.values()];
  for (let trial = 0; trial < 96; trial++) {
    const candidate = Array.from({length: roundCount}, () => []);
    const coverage = Array.from({length: roundCount}, () => new Set());
    let slot = 0;
    for (const families of shuffle(chapterGroups)) {
      for (const family of shuffle([...families.values()])) {
        for (const question of shuffle(family)) {
          const round = slot++ % roundCount;
          candidate[round].push(question.id);
          coverage[round].add(ruleChapter(question));
        }
      }
    }
    const sizes = coverage.map(chaptersInRound => chaptersInRound.size);
    const minimum = Math.min(...sizes);
    // Total coverage is fixed by the chapter counts. Prefer fewer low-coverage rounds.
    const variation = sizes.reduce((sum, size) => sum + size * size, 0);
    if (minimum > bestMinimum || (minimum === bestMinimum && variation < bestVariation)) {
      bestRounds = candidate;
      bestMinimum = minimum;
      bestVariation = variation;
    }
  }

  const randomized = shuffle(bestRounds);
  const previous = new Set(previousIds);
  const first = randomized.findIndex(round => round.every(id => !previous.has(id)));
  // Each previous ID can block at most one round, and the deck has 18 rounds.
  if (first > 0) [randomized[0], randomized[first]] = [randomized[first], randomized[0]];
  return randomized;
}

function readHistory(key) {
  if (sessionHistory.has(key)) return sessionHistory.get(key);
  try {
    const saved = localStorage.getItem(key);
    if (saved !== null) return JSON.parse(saved);
  } catch {
    // The current page can still avoid repeats when storage is unavailable.
  }
  return undefined;
}

function drawRound(discipline) {
  const key = `ipsc-quiz:${historyVersion}:${discipline.id}`;
  const questions = new Map(discipline.questions.map(question => [question.id, question]));
  const saved = readHistory(key);
  const validRound = round => Array.isArray(round) && round.length === roundSize
    && new Set(round).size === roundSize && round.every(id => questions.has(id));
  const previous = saved?.last ?? readHistory(`ipsc-quiz:v1:${discipline.id}`)?.last;
  const last = validRound(previous) ? previous : [];
  const remaining = saved?.remaining;
  const validDeck = Array.isArray(remaining) && remaining.every(validRound)
    && new Set([...last, ...remaining.flat()]).size === last.length + remaining.length * roundSize;
  const rounds = validDeck && remaining.length ? remaining : buildRounds(discipline.questions, last);
  const [current, ...rest] = rounds;
  const history = {last: current, remaining: rest};
  try {
    localStorage.setItem(key, JSON.stringify(history));
    sessionHistory.delete(key);
  } catch {
    sessionHistory.set(key, history);
  }
  return shuffle(current).map(id => {
    const question = questions.get(id);
    return {...question, options: shuffle(question.options)};
  });
}

function start(discipline) {
  attempt = {discipline, index: 0, answers: [], questions: drawRound(discipline)};
  questionView();
}

function questionView() {
  const {discipline, index, questions, answers} = attempt;
  const question = questions[index];
  const view = node('section', undefined, 'narrow');
  const progress = node('div', undefined, 'progress');
  const fill = node('span');
  fill.style.width = `${(index + 1) / questions.length * 100}%`;
  progress.setAttribute('aria-hidden', 'true');
  progress.append(fill);
  view.append(node('p', discipline.name, 'kicker'),
    node('p', `Question ${index + 1} of ${questions.length}`, 'meta'), progress,
    node('h1', question.prompt));
  const options = node('div', undefined, 'options');
  options.setAttribute('role', 'group');
  options.setAttribute('aria-label', 'Answer options');
  const submitted = answers[index];
  const locked = submitted !== undefined;
  const lastQuestion = index + 1 === questions.length;
  let selection;
  const action = locked
    ? button(lastQuestion ? 'See results' : 'Next question', () => {
        if (lastQuestion) results();
        else {
          attempt.index++;
          questionView();
        }
      })
    : button('Check answer', () => {
        if (selection === undefined || answers[index] !== undefined) return;
        answers[index] = selection;
        questionView();
      });
  action.disabled = !locked;

  if (!locked) {
    for (const [position, option] of question.options.entries()) {
      const answer = button(undefined, () => {
        selection = option;
        for (const sibling of options.children) sibling.setAttribute('aria-pressed', String(sibling === answer));
        action.disabled = false;
      }, 'option');
      answer.setAttribute('aria-pressed', 'false');
      const letter = node('span', 'ABCD'[position], 'letter');
      letter.setAttribute('aria-hidden', 'true');
      answer.append(letter, node('span', option));
      options.append(answer);
    }
  }

  const actions = node('div', undefined, 'actions');
  if (!locked && index === 0) {
    actions.append(button('All disciplines', () => home(), 'btn secondary'));
  }
  actions.append(action);
  if (locked) {
    const correct = submitted === question.correct;
    const feedback = node('section', undefined, correct ? 'feedback correct' : 'feedback incorrect');
    feedback.append(node('h2', correct ? 'Correct' : 'Incorrect'),
      node('p', `Your answer: ${submitted}`),
      node('p', `Correct answer: ${question.correct}`));
    if (question.note) feedback.append(node('p', question.note, 'muted'));
    feedback.append(ruleExplanation(question, discipline));
    view.append(feedback);
  } else view.append(options);
  view.append(actions);
  show(view, true, locked ? '.feedback h2' : 'h1');
}

function ruleExplanation(question, discipline) {
  const interpretation = Object.keys(interpretations).find(month => question.rule.includes(month));
  const summary = disciplineRuleNotes[discipline.id]?.[question.rule] ?? commonRuleNotes[question.rule];
  const section = node('div', undefined, 'rule-explanation');
  section.append(node('p', `Rule in brief · ${question.rule}`, 'meta'),
    node('p', summary),
    link(interpretation ? 'Open official interpretation ↗' : 'Open official rule book ↗',
      interpretations[interpretation] ?? discipline.book));
  return section;
}

const quizAwards = {
  10: {label: 'Bronze', color: '#f1b98e'},
  11: {label: 'Silver', color: '#dbe4f0'},
  12: {label: 'Gold + President’s Medal', color: '#ffe18a'},
};

function rulesFeedback(score, disciplineName) {
  if (score === 12) return `Excellent knowledge of the ${disciplineName} rules. You got every question right!`;
  if (score === 11) return `Very strong knowledge of the ${disciplineName} rules. Review the one answer you missed and go for a perfect round.`;
  if (score === 10) return `Strong knowledge of the ${disciplineName} rules. Review the two answers you missed to build on this result.`;
  if (score >= 8) return `Good knowledge of the ${disciplineName} rules. Review the answers you missed, then try a fresh round.`;
  if (score >= 5) return `You’re building your knowledge of the ${disciplineName} rules. Use the answer explanations to see what to practice next.`;
  return `There’s room to build your knowledge of the ${disciplineName} rules. Start with the answer explanations and try again when you’re ready.`;
}

function resultImage(discipline, score, total, percent, award, feedback) {
  const canvas = document.createElement('canvas');
  canvas.width = 1080;
  canvas.height = 720;
  const ctx = canvas.getContext('2d');
  const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradient.addColorStop(0, '#38332d');
  gradient.addColorStop(1, '#171717');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 1080, 630);
  ctx.fillStyle = '#f0d5a5';
  ctx.fillRect(0, 0, 1080, 12);
  function label(text, y, size, color, weight = 750) {
    ctx.fillStyle = color;
    ctx.font = `${weight} ${size}px system-ui, sans-serif`;
    ctx.fillText(text, 68, y, 944);
  }
  label('IPSC / RULES QUIZ', 105, 26, '#f0d5a5');
  label(discipline.name, 210, 60, '#f7f4ee');
  label(`${score} / ${total}`, 388, 145, '#f0d5a5', 850);
  label(`${score} correct  ·  ${total - score} incorrect  ·  ${percent}% correct`, 455, 36, '#f7f4ee');
  if (award) label(`QUIZ AWARD  ·  ${award.label}`, 519, 30, award.color);
  let line = '';
  let feedbackY = award ? 568 : 521;
  ctx.font = '550 26px system-ui, sans-serif';
  for (const word of feedback.split(' ')) {
    const next = line ? `${line} ${word}` : word;
    if (line && ctx.measureText(next).width > 944) {
      label(line, feedbackY, 26, '#f7f4ee', 550);
      feedbackY += 34;
      line = word;
    } else {
      line = next;
    }
  }
  label(line, feedbackY, 26, '#f7f4ee', 550);
  label('JANUARY 2026 EDITION  ·  INDEPENDENT RULES PRACTICE', 683, 21, '#c6beb2');
  return new Promise(resolve => canvas.toBlob(resolve, 'image/png'));
}

function results() {
  const {discipline, questions, answers} = attempt;
  const score = questions.filter((question, index) => question.correct === answers[index]).length;
  const total = questions.length;
  const percent = Math.round(score / total * 100);
  const award = quizAwards[score];
  const feedback = rulesFeedback(score, discipline.name);
  const view = node('section', undefined, 'narrow');
  const card = node('div', undefined, 'result-card');
  const breakdown = node('p', `${score} correct · ${total - score} incorrect · ${percent}% correct`, 'score-breakdown');
  card.append(node('p', 'QUIZ COMPLETE · JANUARY 2026', 'kicker'),
    node('h1', `${discipline.name} results`),
    node('p', `${score} / ${total}`, 'score'), breakdown);

  if (award) {
    const badge = node('div', undefined, 'quiz-award');
    badge.style.setProperty('--award-color', award.color);
    badge.append(node('span', 'Quiz award', 'meta'), node('strong', award.label));
    card.append(badge);
  }

  card.append(node('p', feedback, 'result-feedback'));

  const status = node('p', '', 'status');
  status.setAttribute('role', 'status');
  const fileName = `ipsc-${discipline.id}-result.png`;
  const image = resultImage(discipline, score, total, percent, award, feedback).then(blob => {
    if (!blob) return null;
    return new File([blob], fileName, {type: 'image/png'});
  });
  let preparedFile;
  image.then(file => { preparedFile = file; });
  const actions = node('div', undefined, 'actions');
  const save = button('Save result image', async () => {
    const file = await image;
    if (!file) {
      status.textContent = 'Take a screenshot to save your result.';
      return;
    }
    const url = URL.createObjectURL(file);
    const download = node('a');
    download.href = url;
    download.download = fileName;
    view.append(download);
    download.click();
    download.remove();
    setTimeout(() => URL.revokeObjectURL(url), 10000);
    status.textContent = 'You can upload the saved image to a Facebook post.';
  });
  const share = button('Share image', async () => {
    try {
      await navigator.share({files: [preparedFile]});
    } catch (error) {
      if (error.name !== 'AbortError') status.textContent = 'Save the image and upload it to Facebook.';
    }
  }, 'btn secondary');
  share.hidden = true;
  image.then(file => {
    if (file && navigator.canShare?.({files: [file]})) share.hidden = false;
  });
  actions.append(save, share, button('Try again', () => start(discipline), 'btn secondary'),
    button('All disciplines', () => home(), 'btn secondary'));
  const help = node('p', 'Save the result image or take a screenshot, then add it to your Facebook post.', 'muted');
  help.classList.add('result-info');

  const review = node('section', undefined, 'review');
  review.append(node('h2', 'Answer review'));
  questions.forEach((question, index) => {
    const correct = question.correct === answers[index];
    const detail = node('details');
    const body = node('div', undefined, 'review-body');
    body.append(node('p', `Your answer: ${answers[index]}`), node('p', `Correct answer: ${question.correct}`));
    if (question.note) body.append(node('p', question.note, 'muted'));
    body.append(ruleExplanation(question, discipline));
    detail.append(node('summary', `${index + 1}. ${correct ? 'Correct' : 'Incorrect'} · ${question.prompt}`), body);
    review.append(detail);
  });
  view.append(card, actions, status, help, review);
  show(view);
}

home(false);
