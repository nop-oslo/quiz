const disciplines = [
  {
    "id": "handgun",
    "name": "Handgun",
    "group": "Centerfire",
    "book": "https://drive.google.com/file/d/1puySH1bSKuQdzdxUfB_uUbB5krOKzScZ/view",
    "questions": [
      {
        "rule": "1.2.1.1",
        "prompt": "What is the maximum number of scoring hits a Short Course may require from one location or view?",
        "correct": "9",
        "options": [
          "9",
          "8",
          "10",
          "12"
        ],
        "note": "",
        "family": "1.2.1.1",
        "id": "6cb4a46cb2a99b7a"
      },
      {
        "rule": "Appendix D3, item 20",
        "prompt": "In Classic Division with Minor scoring, what is the maximum number of rounds in each accessible magazine at the Start Signal?",
        "correct": "10",
        "options": [
          "10",
          "8",
          "9",
          "11"
        ],
        "note": "",
        "family": "Appendix D3, item 20",
        "id": "ff0397c5265f9518"
      },
      {
        "rule": "Appendix D4, item 18.2",
        "prompt": "What is the Production Division limit per accessible magazine at the Start Signal?",
        "correct": "15 rounds",
        "options": [
          "15 rounds",
          "14 rounds",
          "16 rounds",
          "17 rounds"
        ],
        "note": "",
        "family": "Appendix D4, item 18.2",
        "id": "4db19d34d365e897"
      },
      {
        "rule": "Appendix D1, item 1",
        "prompt": "What is the minimum Major power factor in Open Division?",
        "correct": "160",
        "options": [
          "160",
          "155",
          "165",
          "170"
        ],
        "note": "",
        "family": "Appendix D1, item 1",
        "id": "4544cdeae9727ad0"
      },
      {
        "rule": "2.1.3",
        "prompt": "While metal targets are being shot, what minimum distance must be maintained?",
        "correct": "7 m",
        "options": [
          "7 m",
          "6 m",
          "8 m",
          "9 m"
        ],
        "note": "If a Fault Line is used to limit the approach, it must be placed at least 8 m away.",
        "family": "2.1.3",
        "id": "36549773fe6c1e04"
      },
      {
        "rule": "9.4.2",
        "prompt": "Three hits are visible in the scoring area of a single paper no-shoot. What penalty is assessed on that no-shoot?",
        "correct": "−20 points",
        "options": [
          "−20 points",
          "−10 points",
          "−25 points",
          "−30 points"
        ],
        "note": "Two hits at most are penalized on a single paper no-shoot, at 10 points each.",
        "family": "9.4.2",
        "id": "3e71e77f78236b79"
      },
      {
        "rule": "3.2.3",
        "prompt": "Between squads, the written stage briefing needs a clarification for consistency. Who has the authority to amend it?",
        "correct": "Range Master",
        "options": [
          "Range Master",
          "Chief Range Officer",
          "Range Officer",
          "Match Director"
        ],
        "note": "",
        "family": "3.2.3",
        "id": "24be4f173f88362d"
      },
      {
        "rule": "9.1.3",
        "prompt": "A paper target is patched before scoring and the original score cannot be determined. What must the Range Officer order?",
        "correct": "A reshoot of the entire course of fire",
        "options": [
          "A reshoot of the entire course of fire",
          "A reshoot of the affected target only",
          "A rescore using the minimum possible target score",
          "A rescore using the maximum possible target score"
        ],
        "note": "",
        "family": "9.1.3",
        "id": "84e73bae40fef1d1"
      },
      {
        "rule": "10.2.4",
        "prompt": "A competitor fires two shots after the point where a mandatory reload was required, then reloads and fires one more. How many procedural penalties apply for the missed reload?",
        "correct": "2",
        "options": [
          "2",
          "1",
          "3",
          "0"
        ],
        "note": "Count each shot after the required reload point until the reload is performed.",
        "family": "10.2.4",
        "id": "1799ef99d814ab1b"
      },
      {
        "rule": "11.3.1",
        "prompt": "A disputed call is recorded by Match Officials at 13:20. By what time must the written arbitration appeal and applicable fee be submitted to the Range Master?",
        "correct": "14:20",
        "options": [
          "14:20",
          "13:50",
          "14:05",
          "14:50"
        ],
        "note": "The submission window is one hour from the recorded time of the disputed call.",
        "family": "11.3.1",
        "id": "78d8cac4ae7947d1"
      },
      {
        "rule": "9.5.2",
        "prompt": "A hit on a scoring paper target touches the line between two scoring zones. Which value counts?",
        "correct": "The higher of the two zone values",
        "options": [
          "The higher of the two zone values",
          "The lower of the two zone values",
          "The zone containing most of the hit",
          "The zone containing the centre of the hit"
        ],
        "note": "",
        "family": "9.5.2",
        "id": "14d00d4c36342c41"
      },
      {
        "rule": "9.2.2",
        "prompt": "To how many decimal places are individual stage points calculated for stage ranking?",
        "correct": "4",
        "options": [
          "4",
          "2",
          "3",
          "5"
        ],
        "note": "",
        "family": "9.2.2",
        "id": "9e45b306a23c2492"
      },
      {
        "rule": "3.2.4",
        "prompt": "Who sets the duration of the squad’s stage walkthrough?",
        "correct": "Range Officer",
        "options": [
          "Range Officer",
          "Chief Range Officer",
          "Range Master",
          "Match Director"
        ],
        "note": "",
        "family": "3.2.4",
        "id": "2f38cfa6c5d892fc"
      },
      {
        "rule": "3.2.4",
        "prompt": "Moving targets are demonstrated during walkthroughs. What must be consistent across competitors?",
        "correct": "Both duration and frequency",
        "options": [
          "Both duration and frequency",
          "Duration only",
          "Frequency only",
          "Neither duration nor frequency"
        ],
        "note": "",
        "family": "3.2.4",
        "id": "02fb5729cb9e04e5"
      },
      {
        "rule": "4.6.1",
        "prompt": "A competitor adjusts a target stand without authorization during inspection. What penalty may the Range Officer impose for each occurrence?",
        "correct": "One procedural penalty",
        "options": [
          "One procedural penalty",
          "Two procedural penalties",
          "One miss penalty",
          "Two miss penalties"
        ],
        "note": "",
        "family": "4.6.1",
        "id": "5ad2ec3127f1aa75"
      },
      {
        "rule": "6.2.6",
        "prompt": "A competitor is disqualified in a later Division after completing a separate Division at the same match. What happens to the complete earlier score?",
        "correct": "It stays in the results for the earlier Division",
        "options": [
          "It stays in the results for the earlier Division",
          "It stays in the results for the later Division",
          "It is removed from the earlier Division results",
          "It is kept only if the disqualification is overturned"
        ],
        "note": "",
        "family": "6.2.6",
        "id": "2bb09b780d6cd1cf"
      },
      {
        "rule": "6.6.1",
        "prompt": "A competitor misses the scheduled time for a stage. Whose prior approval is required to attempt the stage later?",
        "correct": "Match Director",
        "options": [
          "Match Director",
          "Range Master",
          "Chief Range Officer",
          "Range Officer"
        ],
        "note": "",
        "family": "6.6.1",
        "id": "1313eda1e157a923"
      },
      {
        "rule": "7.1.1",
        "prompt": "Who declares a competitor’s time, scores and penalties on the stage and verifies they are recorded correctly?",
        "correct": "Range Officer",
        "options": [
          "Range Officer",
          "Chief Range Officer",
          "Stats Officer",
          "Range Master"
        ],
        "note": "",
        "family": "7.1.1",
        "id": "0b424efb218f7879"
      },
      {
        "rule": "7.1.2",
        "prompt": "Which official has primary authority over the courses of fire specifically assigned to them, under the Range Master?",
        "correct": "Chief Range Officer",
        "options": [
          "Chief Range Officer",
          "Range Officer",
          "Stats Officer",
          "Match Director"
        ],
        "note": "",
        "family": "7.1.2",
        "id": "c118375a6b2b5323"
      },
      {
        "rule": "7.1.3",
        "prompt": "Who supervises the team that processes score sheets and produces provisional and final results?",
        "correct": "Stats Officer",
        "options": [
          "Stats Officer",
          "Chief Range Officer",
          "Range Master",
          "Quartermaster"
        ],
        "note": "",
        "family": "7.1.3",
        "id": "704c770dd49cbacc"
      },
      {
        "rule": "7.1.4",
        "prompt": "Who is responsible for distributing and maintaining targets, timers and other range equipment?",
        "correct": "Quartermaster",
        "options": [
          "Quartermaster",
          "Chief Range Officer",
          "Range Master",
          "Stats Officer"
        ],
        "note": "",
        "family": "7.1.4",
        "id": "b01b090191e21d17"
      },
      {
        "rule": "7.1.5",
        "prompt": "Which official has overall authority for range safety and rule application across the entire match range?",
        "correct": "Range Master",
        "options": [
          "Range Master",
          "Chief Range Officer",
          "Range Officer",
          "Match Director"
        ],
        "note": "",
        "family": "7.1.5",
        "id": "bfc335ecb25270a0"
      },
      {
        "rule": "8.3.5",
        "prompt": "The Range Officer calls “Stop” during an attempt. Which response is required?",
        "correct": "Stop firing and moving immediately and await instructions",
        "options": [
          "Stop firing and moving immediately and await instructions",
          "Stop firing immediately but finish moving to the next position",
          "Stop moving immediately but finish engaging the current target",
          "Stop firing and moving once the current target has been engaged"
        ],
        "note": "",
        "family": "8.3.5",
        "id": "26049216f3858162"
      },
      {
        "rule": "8.3.8",
        "prompt": "Which declaration authorizes personnel to move forward from the final shooting location for scoring and reset?",
        "correct": "Range Is Clear",
        "options": [
          "Range Is Clear",
          "Are You Ready?",
          "If You Are Finished, Unload And Show Clear",
          "Stop"
        ],
        "note": "",
        "family": "8.3.8",
        "id": "f33938909cd6cc60"
      },
      {
        "rule": "9.1.1",
        "prompt": "During scoring, what minimum distance must a competitor keep from a target unless the Range Officer gives permission to approach?",
        "correct": "1 m",
        "options": [
          "1 m",
          "0.5 m",
          "1.5 m",
          "2 m"
        ],
        "note": "",
        "family": "9.1.1",
        "id": "2d30e249199e32da"
      },
      {
        "rule": "9.1.1",
        "prompt": "A competitor approaches a target closer than 1 m without authorization during scoring. What is the sanction for a first offense?",
        "correct": "A warning",
        "options": [
          "A warning",
          "One automatic procedural penalty",
          "One automatic miss penalty",
          "A warning plus one procedural penalty"
        ],
        "note": "",
        "family": "9.1.1",
        "id": "a0c109e9369b02a9"
      },
      {
        "rule": "9.1.4",
        "prompt": "An unrestored target has extra scoring hits. The Range Officer cannot tell which hits belong to the competitor being scored. What is required?",
        "correct": "A reshoot of the course of fire",
        "options": [
          "A reshoot of the course of fire",
          "A reshoot of the target only",
          "A score using only the lowest possible hits",
          "A score using only the highest possible hits"
        ],
        "note": "",
        "family": "9.1.4",
        "id": "d865d4a181049ade"
      },
      {
        "rule": "9.1.5.1",
        "prompt": "A shot passes wholly through the scoring area of a paper target and then strikes the scoring area of a second paper scoring target. How is the second hit treated?",
        "correct": "It does not count for score",
        "options": [
          "It does not count for score",
          "It scores at its full zone value",
          "It scores at the lowest zone value",
          "It counts as a miss penalty on the second target"
        ],
        "note": "",
        "family": "9.1.5.1",
        "id": "709366270d24cc45"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Under Comstock, which calculation produces a hit factor?",
        "correct": "Target points minus penalties, then divide by time",
        "options": [
          "Target points minus penalties, then divide by time",
          "Target points divided by time, then subtract penalties",
          "Target points minus penalties, then multiply by time",
          "Time divided by target points minus penalties"
        ],
        "note": "",
        "family": "9.2.1.1",
        "id": "2fb26c1e715568ff"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Which competitor receives the maximum stage points available under Comstock?",
        "correct": "The competitor with the highest hit factor",
        "options": [
          "The competitor with the highest hit factor",
          "The competitor with the highest raw target points",
          "The competitor with the fastest recorded time",
          "The competitor with the lowest penalty total"
        ],
        "note": "",
        "family": "9.2.1.1",
        "id": "b034328d19a8c134"
      },
      {
        "rule": "9.2.3",
        "prompt": "Which quantity determines the final ranking within a Division?",
        "correct": "The sum of individual stage points",
        "options": [
          "The sum of individual stage points",
          "The sum of individual stage hit factors",
          "The sum of raw target points before factoring",
          "The average of individual stage placing positions"
        ],
        "note": "",
        "family": "9.2.3",
        "id": "de2a1ae18dce11e2"
      },
      {
        "rule": "9.3.1",
        "prompt": "The Match Director decides a tie must be broken. What does the tiebreaker change?",
        "correct": "Only the final placing of the tied competitors",
        "options": [
          "Only the final placing of the tied competitors",
          "The placing and original match points of the tied competitors",
          "The placing of every competitor in the Division",
          "The original match points without changing the placing"
        ],
        "note": "",
        "family": "9.3.1",
        "id": "0fdc055c5d39575a"
      },
      {
        "rule": "9.6.1",
        "prompt": "After “Range Is Clear” on a stage with ordinary paper targets, who may accompany the scoring official to verify the score?",
        "correct": "The competitor or their delegate",
        "options": [
          "The competitor or their delegate",
          "Only the competitor personally",
          "Only the competitor’s delegate",
          "Only the squad leader"
        ],
        "note": "",
        "family": "9.6.1",
        "id": "aa45c8d054c1ff8b"
      },
      {
        "rule": "9.6.2",
        "prompt": "The Range Officer intends to start scoring paper targets before the competitor finishes the stage. When must competitors be advised?",
        "correct": "During the squad briefing",
        "options": [
          "During the squad briefing",
          "After the Start Signal",
          "After the competitor’s last shot",
          "When provisional results are posted"
        ],
        "note": "",
        "family": "9.6.2",
        "id": "f7c24a4496425719"
      },
      {
        "rule": "9.6.3",
        "prompt": "Neither the competitor nor their delegate verifies a target during scoring. What happens to the right to appeal the scoring of that target?",
        "correct": "It is lost",
        "options": [
          "It is lost",
          "It stays open until the target is reset",
          "It stays open until the score sheet is signed",
          "It stays open until provisional results are posted"
        ],
        "note": "",
        "family": "9.6.3",
        "id": "5ff0c66acb294d60"
      },
      {
        "rule": "9.6.4",
        "prompt": "Who must first receive a challenge to the score on a target before it is patched?",
        "correct": "Range Officer",
        "options": [
          "Range Officer",
          "Chief Range Officer",
          "Range Master",
          "Stats Officer"
        ],
        "note": "",
        "family": "9.6.4",
        "id": "ec57f181f231d00b"
      },
      {
        "rule": "9.7.4",
        "prompt": "A score sheet is signed by both the competitor and Range Officer. With no mutual consent and no arbitration decision, which change is explicitly permitted?",
        "correct": "Correcting an arithmetic error",
        "options": [
          "Correcting an arithmetic error",
          "Re-evaluating a disputed scoring-zone hit",
          "Changing the recorded time based on a squad member’s estimate",
          "Adding a miss based on a later recollection"
        ],
        "note": "",
        "family": "9.7.4",
        "id": "e73cef78ffc6e010"
      },
      {
        "rule": "9.7.5",
        "prompt": "A score sheet has excess entries. To whom must it promptly be referred?",
        "correct": "Range Master",
        "options": [
          "Range Master",
          "Chief Range Officer",
          "Stats Officer",
          "Match Director"
        ],
        "note": "",
        "family": "9.7.5",
        "id": "e89fc7b2c365ea93"
      },
      {
        "rule": "9.7.6.1",
        "prompt": "A stage time is missing from the score sheet and a reshoot is impossible. What is the stage score?",
        "correct": "Zero",
        "options": [
          "Zero",
          "The raw target points minus penalties",
          "The division’s average stage score",
          "The competitor’s average score from the other stages"
        ],
        "note": "",
        "family": "9.7.6.1",
        "id": "164d6cc592c33b90"
      },
      {
        "rule": "9.7.7",
        "prompt": "The original score sheet is lost. The competitor has a legible duplicate acceptable to the Range Master. What is used?",
        "correct": "The competitor’s duplicate",
        "options": [
          "The competitor’s duplicate",
          "A reshoot regardless of the duplicate",
          "A zero score regardless of the duplicate",
          "The squad’s median score"
        ],
        "note": "",
        "family": "9.7.7",
        "id": "9f7a3ce2c9f20e67"
      },
      {
        "rule": "9.8.2",
        "prompt": "At Level IV, where must provisional stage results be posted after all competitors finish?",
        "correct": "At the range and the official match hotel",
        "options": [
          "At the range and the official match hotel",
          "At the range only",
          "At the official match hotel only",
          "At the range and the nearest hotel"
        ],
        "note": "",
        "family": "9.8.2",
        "id": "647b5a758a1113f2"
      },
      {
        "rule": "9.8.3",
        "prompt": "A competitor detects an error in the published provisional stage results. With whom must the appeal be filed?",
        "correct": "Stats Officer",
        "options": [
          "Stats Officer",
          "Chief Range Officer",
          "Range Master",
          "Match Director"
        ],
        "note": "",
        "family": "9.8.3",
        "id": "57791f0ed3b424b0"
      },
      {
        "rule": "9.9.1",
        "prompt": "A moving paper target presents part of its A zone at rest after activation. How is it classified?",
        "correct": "Non-disappearing",
        "options": [
          "Non-disappearing",
          "Disappearing unless the full A zone remains visible",
          "Disappearing unless part of the A zone was visible before activation too",
          "Disappearing because the target moves"
        ],
        "note": "",
        "family": "9.9.1",
        "id": "62043a204521db1d"
      },
      {
        "rule": "9.9.2",
        "prompt": "A genuinely disappearing target is activated before the last shot, but never engaged. Which of the following applies to that target?",
        "correct": "Neither a miss nor a failure-to-engage penalty",
        "options": [
          "Neither a miss nor a failure-to-engage penalty",
          "A miss penalty only",
          "A failure-to-engage penalty only",
          "Both a miss and a failure-to-engage penalty"
        ],
        "note": "",
        "family": "9.9.2",
        "id": "a24aa249ff5c8fb5"
      },
      {
        "rule": "9.9.3",
        "prompt": "A stationary target is partly concealed by a moving vision barrier. Part of its A zone remains exposed after activation. How is the target classified?",
        "correct": "Non-disappearing",
        "options": [
          "Non-disappearing",
          "Disappearing unless its full A zone is exposed",
          "Disappearing because the barrier moves",
          "Disappearing unless the barrier itself is a scoring target"
        ],
        "note": "",
        "family": "9.9.3",
        "id": "32b991228b675bae"
      },
      {
        "rule": "10.1.1",
        "prompt": "What must be recorded for procedural penalties on the score sheet?",
        "correct": "Both the number and the reason",
        "options": [
          "Both the number and the reason",
          "The number only",
          "The reason only",
          "The number and the competitor’s agreement"
        ],
        "note": "",
        "family": "10.1.1",
        "id": "98d216ec3d12862b"
      },
      {
        "rule": "10.1.4",
        "prompt": "A competitor fires while faulting a line, then fires at the same target from inside the line. What happens to the original applicable fault penalty?",
        "correct": "It still applies",
        "options": [
          "It still applies",
          "It is removed if the later shot hits",
          "It is removed if both shots hit",
          "It is changed to a miss if the later shot hits"
        ],
        "note": "",
        "family": "10.1.4",
        "id": "11b671e372d1b1db"
      },
      {
        "rule": "10.2.1",
        "prompt": "A competitor touches the ground beyond a Fault Line while shooting without gaining a significant advantage. How is the penalty normally counted?",
        "correct": "One per occurrence",
        "options": [
          "One per occurrence",
          "One per shot regardless of advantage",
          "One per target engaged",
          "One per scoring hit"
        ],
        "note": "",
        "family": "10.2.1",
        "id": "2687007cbe9cade2"
      },
      {
        "rule": "10.2.2",
        "prompt": "A competitor ignores a written stage procedure and gains a significant advantage. What penalty basis may apply in place of a single penalty for the occurrence?",
        "correct": "One per shot fired during the breach, subject to the applicable cap",
        "options": [
          "One per shot fired during the breach, subject to the applicable cap",
          "One per scoring hit during the breach, subject to the applicable cap",
          "One per target engaged during the breach, subject to the applicable cap",
          "One per shot fired after the breach ended, subject to the applicable cap"
        ],
        "note": "",
        "family": "10.2.2",
        "id": "acf60b7a43e61d24"
      },
      {
        "rule": "10.2.6",
        "prompt": "The Range Officer stops a competitor in time for a first instance of creeping after “Standby” and before the signal. What follows?",
        "correct": "A warning and a restart",
        "options": [
          "A warning and a restart",
          "A procedural penalty and a restart",
          "A warning without a restart",
          "A procedural penalty without a restart"
        ],
        "note": "",
        "family": "10.2.6",
        "id": "d0aa312c30a9e68f"
      },
      {
        "rule": "10.2.7",
        "prompt": "A competitor fails to engage a non-disappearing scoring target. What normally applies?",
        "correct": "One procedural per target plus applicable misses",
        "options": [
          "One procedural per target plus applicable misses",
          "One procedural per target instead of applicable misses",
          "One procedural per missed hit plus applicable misses",
          "Applicable misses only"
        ],
        "note": "",
        "family": "10.2.7",
        "id": "3b6f1c3d22f37ba8"
      },
      {
        "rule": "10.3.2",
        "prompt": "After issuing a disqualification, who must be notified as soon as possible?",
        "correct": "Range Master",
        "options": [
          "Range Master",
          "Chief Range Officer",
          "Stats Officer",
          "Match Director"
        ],
        "note": "",
        "family": "10.3.2",
        "id": "1e60f82bfdebcdb7"
      },
      {
        "rule": "11.1.3",
        "prompt": "A competitor disputes an initial Range Officer ruling. Which is the normal next level before the Range Master?",
        "correct": "Chief Range Officer",
        "options": [
          "Chief Range Officer",
          "Stats Officer",
          "Match Director",
          "Quartermaster"
        ],
        "note": "",
        "family": "11.1.3",
        "id": "e269dacafee493b9"
      },
      {
        "rule": "11.3.2",
        "prompt": "When must the Arbitration Committee reach its decision?",
        "correct": "Within 24 hours of the request or before final results are declared, whichever comes first",
        "options": [
          "Within 24 hours of the request or before final results are declared, whichever comes first",
          "Within 24 hours of the request or before final results are declared, whichever comes last",
          "Within 12 hours of the request or before final results are declared, whichever comes first",
          "Within 24 hours of the disputed call or before final results are declared, whichever comes first"
        ],
        "note": "",
        "family": "11.3.2",
        "id": "ab7a04fd99f427cc"
      },
      {
        "rule": "11.4.1",
        "prompt": "At a Level III match, which amount determines the arbitration fee in local currency?",
        "correct": "The lower of US$100 and the maximum individual entry fee",
        "options": [
          "The lower of US$100 and the maximum individual entry fee",
          "The higher of US$100 and the maximum individual entry fee",
          "The lower of US$100 and the minimum individual entry fee",
          "The maximum individual entry fee regardless of US$100"
        ],
        "note": "",
        "family": "11.4.1",
        "id": "d660fd589e3be129"
      },
      {
        "rule": "11.6.2",
        "prompt": "Who implements and posts the Arbitration Committee’s decision?",
        "correct": "Range Master",
        "options": [
          "Range Master",
          "Chief Range Officer",
          "Stats Officer",
          "Match Director"
        ],
        "note": "",
        "family": "11.6.2",
        "id": "b42ae1c861a560b7"
      },
      {
        "rule": "11.6.4",
        "prompt": "For what can a recorded Arbitration Committee decision serve as precedent?",
        "correct": "A similar subsequent incident at the same match",
        "options": [
          "A similar subsequent incident at the same match",
          "A similar earlier incident at the same match",
          "Any subsequent incident at the same match",
          "A similar incident only at the next match"
        ],
        "note": "",
        "family": "11.6.4",
        "id": "3487c77fa189a244"
      },
      {
        "rule": "11.7.1",
        "prompt": "May someone other than the competitor involved submit an appeal on a third-party basis?",
        "correct": "Yes, under the same Chapter 11 provisions",
        "options": [
          "Yes, under the same Chapter 11 provisions",
          "Yes, with a separate deadline set by the squad",
          "Yes, but only at Level IV and above",
          "No, only the competitor involved may appeal"
        ],
        "note": "",
        "family": "11.7.1",
        "id": "efd6cd40b8400be5"
      },
      {
        "rule": "1.2.1.1",
        "prompt": "A proposed Short Course requires 13 rounds to complete. To what maximum must the required count be reduced?",
        "correct": "12",
        "options": [
          "12",
          "10",
          "11",
          "13"
        ],
        "note": "",
        "family": "1.2.1.1",
        "id": "c65d36bafee45bc1"
      },
      {
        "rule": "1.2.1.2",
        "prompt": "A proposed Medium Course requires 26 rounds to complete. What maximum required count applies?",
        "correct": "24",
        "options": [
          "24",
          "22",
          "23",
          "25"
        ],
        "note": "",
        "family": "1.2.1.2",
        "id": "790ef3fb772e32dd"
      },
      {
        "rule": "1.2.1.3",
        "prompt": "A proposed Long Course requires 34 rounds to complete. What is the maximum required count?",
        "correct": "32",
        "options": [
          "32",
          "30",
          "31",
          "33"
        ],
        "note": "",
        "family": "1.2.1.3",
        "id": "425e78f468724949"
      },
      {
        "rule": "5.1.11 · February 2026 interpretation",
        "prompt": "How does the February 2026 interpretation treat a firearm fitted with a forced reset trigger?",
        "correct": "It is prohibited",
        "options": [
          "It is prohibited",
          "It is permitted in Open only",
          "It is permitted in any division with a trigger weight check",
          "It is permitted only in Level I and II matches"
        ],
        "note": "",
        "family": "5.1.11 · February 2026 interpretation",
        "id": "3b3a8ef5e6f9580b"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Under Comstock, a competitor earns 35 target points, receives 10 penalty points and finishes in 5.00 seconds. What is the hit factor, rounded to four decimals?",
        "correct": "5.0000",
        "options": [
          "5.0000",
          "7.0000",
          "6.0000",
          "9.0000"
        ],
        "note": "Subtract penalties from target points before dividing by time.",
        "family": "comstock-hit-factor",
        "id": "21196cb03e879fbf"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "A 40-point stage is won with a hit factor of 8. A competitor records a hit factor of 4.0. How many stage points does the competitor earn?",
        "correct": "20.00",
        "options": [
          "20.00",
          "18.00",
          "19.00",
          "21.00"
        ],
        "note": "Multiply the available stage points by the competitor’s hit factor divided by the winner’s hit factor.",
        "family": "comstock-stage-points",
        "id": "3b223b933ed2c978"
      },
      {
        "rule": "9.2.3",
        "prompt": "A competitor earns 31.2750, 24.6425 and 19.3850 stage points in the three stages of a match. What is the match total?",
        "correct": "75.3025",
        "options": [
          "75.3025",
          "75.4025",
          "75.2025",
          "76.3025"
        ],
        "note": "",
        "family": "match-total",
        "id": "84eed92ac69be18f"
      },
      {
        "rule": "10.2.4",
        "prompt": "A competitor fires 1 shots before a mandatory reload point, 1 shots after it without reloading, and 2 shots after finally reloading. How many procedural penalties apply to the reload violation?",
        "correct": "1",
        "options": [
          "1",
          "0",
          "2",
          "3"
        ],
        "note": "Count only shots after the required reload point and before the reload.",
        "family": "10.2.4",
        "id": "b13c6a5f1fe012ab"
      },
      {
        "rule": "10.2.5",
        "prompt": "In a Cooper Tunnel, direct contact with the overhead material drops 1 pieces. Bumping an upright drops another 1. How many procedural penalties apply?",
        "correct": "1",
        "options": [
          "1",
          "0",
          "2",
          "3"
        ],
        "note": "Pieces that fall from striking an upright are exempt.",
        "family": "10.2.5",
        "id": "2bc7b9ec0789807c"
      },
      {
        "rule": "10.1.2",
        "prompt": "The Range Officer assesses 3 procedural penalties. What is the total point deduction for these penalties?",
        "correct": "30 points",
        "options": [
          "30 points",
          "10 points",
          "20 points",
          "40 points"
        ],
        "note": "",
        "family": "10.1.2",
        "id": "b3c678f4a8413c91"
      },
      {
        "rule": "10.2.1",
        "prompt": "A competitor fires 2 shots on each of 2 separate Fault Line breaches, re-entering fully between breaches and gaining no significant advantage. How many procedural penalties apply?",
        "correct": "2",
        "options": [
          "2",
          "1",
          "3",
          "4"
        ],
        "note": "With no significant advantage, count the separate occurrences.",
        "family": "10.2.1",
        "id": "65d0e1630759337f"
      },
      {
        "rule": "11.3.1",
        "prompt": "Match Officials record a disputed call at 08:00. The competitor talks to the Chief Range Officer 15 minutes later. What is the deadline to submit a written arbitration appeal and fee to the Range Master?",
        "correct": "09:00",
        "options": [
          "09:00",
          "08:45",
          "09:15",
          "09:30"
        ],
        "note": "",
        "family": "11.3.1",
        "id": "e73f27d96024f83f"
      },
      {
        "rule": "9.8.3",
        "prompt": "The provisional results show a timestamp of 12:00, but were actually posted at 12:11. What is the deadline for a competitor to file a results appeal with the Stats Officer?",
        "correct": "13:11",
        "options": [
          "13:11",
          "12:56",
          "13:26",
          "13:41"
        ],
        "note": "",
        "family": "9.8.3",
        "id": "dc0d2ecaa091ddbb"
      },
      {
        "rule": "11.4.1",
        "prompt": "At a Level III match the maximum individual entry fee is equivalent to US$58. What is the arbitration fee equivalent in local currency?",
        "correct": "US$58",
        "options": [
          "US$58",
          "US$100",
          "US$53",
          "US$63"
        ],
        "note": "Use the lower of US$100 and the maximum individual entry fee.",
        "family": "11.4.1",
        "id": "34d89f1347aee01f"
      },
      {
        "rule": "9.4.2",
        "prompt": "Three paper no-shoots show 1, 1 and 0 hits in their scoring areas, respectively. What is the combined point deduction?",
        "correct": "20 points",
        "options": [
          "20 points",
          "10 points",
          "25 points",
          "30 points"
        ],
        "note": "Count 10 points per hit, capped at two hits on each paper no-shoot.",
        "family": "9.4.2",
        "id": "2ed02131abe1ee01"
      },
      {
        "rule": "10.2.7",
        "prompt": "A competitor leaves 3 non-disappearing scoring targets completely unengaged. They engage the other 2 targets. Before adding any misses, how many failure-to-engage procedurals apply?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "",
        "family": "10.2.7",
        "id": "74b0110053b22816"
      },
      {
        "rule": "10.2.3",
        "prompt": "While faulting a line, a competitor fires 7 shots and gains a significant advantage. From that position a maximum of 2 scoring hits can be attained. What is the maximum number of procedurals for that fault?",
        "correct": "2",
        "options": [
          "2",
          "1",
          "3",
          "4"
        ],
        "note": "Multiple penalties for the fault are capped by the scoring hits attainable.",
        "family": "10.2.3",
        "id": "a67f0a3b80d3499d"
      },
      {
        "rule": "11.3.2",
        "prompt": "The Arbitration Committee receives a request at 10:00 on Saturday. Final results are scheduled to be declared at 09:40 on Sunday. What is the latest time the committee may rule under that schedule?",
        "correct": "Before 09:40 on Sunday",
        "options": [
          "Before 09:40 on Sunday",
          "By 10:00 on Sunday",
          "By 10:20 on Sunday",
          "Before 09:40 on Monday"
        ],
        "note": "The earlier limit is the declaration of final results.",
        "family": "11.3.2",
        "id": "bc60703e734bf1ae"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Under Comstock, a competitor earns 40 target points, receives 20 penalty points and finishes in 6.00 seconds. What is the hit factor, rounded to four decimals?",
        "correct": "3.3333",
        "options": [
          "3.3333",
          "6.6667",
          "5.0000",
          "10.0000"
        ],
        "note": "Subtract penalties from target points before dividing by time.",
        "family": "comstock-hit-factor",
        "id": "221b267a71db93cf"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "A 50-point stage is won with a hit factor of 9. A competitor records a hit factor of 5.4. How many stage points does the competitor earn?",
        "correct": "30.00",
        "options": [
          "30.00",
          "28.00",
          "29.00",
          "31.00"
        ],
        "note": "Multiply the available stage points by the competitor’s hit factor divided by the winner’s hit factor.",
        "family": "comstock-stage-points",
        "id": "9ba6132933144df4"
      },
      {
        "rule": "9.2.3",
        "prompt": "A competitor earns 33.2750, 25.6425 and 22.3850 stage points in the three stages of a match. What is the match total?",
        "correct": "81.3025",
        "options": [
          "81.3025",
          "81.4025",
          "81.2025",
          "82.3025"
        ],
        "note": "",
        "family": "match-total",
        "id": "2a2ddc7a971836c3"
      },
      {
        "rule": "10.2.4",
        "prompt": "A competitor fires 2 shots before a mandatory reload point, 1 shots after it without reloading, and 3 shots after finally reloading. How many procedural penalties apply to the reload violation?",
        "correct": "1",
        "options": [
          "1",
          "0",
          "2",
          "3"
        ],
        "note": "Count only shots after the required reload point and before the reload.",
        "family": "10.2.4",
        "id": "762cf162802b119a"
      },
      {
        "rule": "10.2.5",
        "prompt": "In a Cooper Tunnel, direct contact with the overhead material drops 2 pieces. Bumping an upright drops another 1. How many procedural penalties apply?",
        "correct": "2",
        "options": [
          "2",
          "1",
          "3",
          "4"
        ],
        "note": "Pieces that fall from striking an upright are exempt.",
        "family": "10.2.5",
        "id": "530bd84ef8b47216"
      },
      {
        "rule": "10.1.2",
        "prompt": "The Range Officer assesses 4 procedural penalties. What is the total point deduction for these penalties?",
        "correct": "40 points",
        "options": [
          "40 points",
          "20 points",
          "30 points",
          "50 points"
        ],
        "note": "",
        "family": "10.1.2",
        "id": "a7aaa4caf4f065cd"
      },
      {
        "rule": "10.2.1",
        "prompt": "A competitor fires 2 shots on each of 3 separate Fault Line breaches, re-entering fully between breaches and gaining no significant advantage. How many procedural penalties apply?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "With no significant advantage, count the separate occurrences.",
        "family": "10.2.1",
        "id": "b6d742daab217181"
      },
      {
        "rule": "11.3.1",
        "prompt": "Match Officials record a disputed call at 08:23. The competitor talks to the Chief Range Officer 15 minutes later. What is the deadline to submit a written arbitration appeal and fee to the Range Master?",
        "correct": "09:23",
        "options": [
          "09:23",
          "09:08",
          "09:38",
          "09:53"
        ],
        "note": "",
        "family": "11.3.1",
        "id": "fd2b9c3ae8f0e93c"
      },
      {
        "rule": "9.8.3",
        "prompt": "The provisional results show a timestamp of 12:17, but were actually posted at 12:29. What is the deadline for a competitor to file a results appeal with the Stats Officer?",
        "correct": "13:29",
        "options": [
          "13:29",
          "13:14",
          "13:44",
          "13:59"
        ],
        "note": "",
        "family": "9.8.3",
        "id": "75719e2f068672a0"
      },
      {
        "rule": "11.4.1",
        "prompt": "At a Level III match the maximum individual entry fee is equivalent to US$115. What is the arbitration fee equivalent in local currency?",
        "correct": "US$100",
        "options": [
          "US$100",
          "US$115",
          "US$95",
          "US$105"
        ],
        "note": "Use the lower of US$100 and the maximum individual entry fee.",
        "family": "11.4.1",
        "id": "7047ed8525176aec"
      },
      {
        "rule": "9.4.2",
        "prompt": "Three paper no-shoots show 2, 1 and 0 hits in their scoring areas, respectively. What is the combined point deduction?",
        "correct": "30 points",
        "options": [
          "30 points",
          "20 points",
          "35 points",
          "40 points"
        ],
        "note": "Count 10 points per hit, capped at two hits on each paper no-shoot.",
        "family": "9.4.2",
        "id": "c4db7b7a451a5a7d"
      },
      {
        "rule": "10.2.7",
        "prompt": "A competitor leaves 4 non-disappearing scoring targets completely unengaged. They engage the other 3 targets. Before adding any misses, how many failure-to-engage procedurals apply?",
        "correct": "4",
        "options": [
          "4",
          "3",
          "5",
          "6"
        ],
        "note": "",
        "family": "10.2.7",
        "id": "5f3e9af5d086e70f"
      },
      {
        "rule": "10.2.3",
        "prompt": "While faulting a line, a competitor fires 8 shots and gains a significant advantage. From that position a maximum of 3 scoring hits can be attained. What is the maximum number of procedurals for that fault?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "Multiple penalties for the fault are capped by the scoring hits attainable.",
        "family": "10.2.3",
        "id": "ebc3eaec4c4e60c1"
      },
      {
        "rule": "11.3.2",
        "prompt": "The Arbitration Committee receives a request at 10:19 on Saturday. The Match Director will declare the results final at 10:39 on Sunday. What deadline applies to the committee’s decision?",
        "correct": "By 10:19 on Sunday",
        "options": [
          "By 10:19 on Sunday",
          "Before 10:39 on Sunday",
          "By 09:59 on Sunday",
          "By 10:19 on Monday"
        ],
        "note": "The 24-hour deadline arrives before the declaration of final results.",
        "family": "11.3.2",
        "id": "e4ad89d611716d41"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Under Comstock, a competitor earns 45 target points, receives 30 penalty points and finishes in 7.00 seconds. What is the hit factor, rounded to four decimals?",
        "correct": "2.1429",
        "options": [
          "2.1429",
          "6.4286",
          "4.2857",
          "10.7143"
        ],
        "note": "Subtract penalties from target points before dividing by time.",
        "family": "comstock-hit-factor",
        "id": "811fb111204f1db3"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "A 60-point stage is won with a hit factor of 10. A competitor records a hit factor of 7.0. How many stage points does the competitor earn?",
        "correct": "42.00",
        "options": [
          "42.00",
          "40.00",
          "41.00",
          "43.00"
        ],
        "note": "Multiply the available stage points by the competitor’s hit factor divided by the winner’s hit factor.",
        "family": "comstock-stage-points",
        "id": "52ec8e4e492a485c"
      },
      {
        "rule": "9.2.3",
        "prompt": "A competitor earns 35.2750, 26.6425 and 25.3850 stage points in the three stages of a match. What is the match total?",
        "correct": "87.3025",
        "options": [
          "87.3025",
          "87.4025",
          "87.2025",
          "88.3025"
        ],
        "note": "",
        "family": "match-total",
        "id": "9de1b28afcc923d6"
      },
      {
        "rule": "10.2.4",
        "prompt": "A competitor fires 3 shots before a mandatory reload point, 1 shots after it without reloading, and 4 shots after finally reloading. How many procedural penalties apply to the reload violation?",
        "correct": "1",
        "options": [
          "1",
          "0",
          "2",
          "3"
        ],
        "note": "Count only shots after the required reload point and before the reload.",
        "family": "10.2.4",
        "id": "881a8b7504b60cad"
      },
      {
        "rule": "10.2.5",
        "prompt": "In a Cooper Tunnel, direct contact with the overhead material drops 3 pieces. Bumping an upright drops another 1. How many procedural penalties apply?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "Pieces that fall from striking an upright are exempt.",
        "family": "10.2.5",
        "id": "5137b4943cba8ec9"
      },
      {
        "rule": "10.1.2",
        "prompt": "The Range Officer assesses 5 procedural penalties. What is the total point deduction for these penalties?",
        "correct": "50 points",
        "options": [
          "50 points",
          "30 points",
          "40 points",
          "60 points"
        ],
        "note": "",
        "family": "10.1.2",
        "id": "8d6f73489143fdbe"
      },
      {
        "rule": "10.2.1",
        "prompt": "A competitor fires 2 shots on each of 4 separate Fault Line breaches, re-entering fully between breaches and gaining no significant advantage. How many procedural penalties apply?",
        "correct": "4",
        "options": [
          "4",
          "3",
          "5",
          "6"
        ],
        "note": "With no significant advantage, count the separate occurrences.",
        "family": "10.2.1",
        "id": "bfd45046f19468df"
      },
      {
        "rule": "11.3.1",
        "prompt": "Match Officials record a disputed call at 08:46. The competitor talks to the Chief Range Officer 15 minutes later. What is the deadline to submit a written arbitration appeal and fee to the Range Master?",
        "correct": "09:46",
        "options": [
          "09:46",
          "09:31",
          "10:01",
          "10:16"
        ],
        "note": "",
        "family": "11.3.1",
        "id": "1646ce84911500d6"
      },
      {
        "rule": "9.8.3",
        "prompt": "The provisional results show a timestamp of 12:34, but were actually posted at 12:47. What is the deadline for a competitor to file a results appeal with the Stats Officer?",
        "correct": "13:47",
        "options": [
          "13:47",
          "13:32",
          "14:02",
          "14:17"
        ],
        "note": "",
        "family": "9.8.3",
        "id": "f183f4405bae9693"
      },
      {
        "rule": "11.4.1",
        "prompt": "At a Level III match the maximum individual entry fee is equivalent to US$62. What is the arbitration fee equivalent in local currency?",
        "correct": "US$62",
        "options": [
          "US$62",
          "US$100",
          "US$57",
          "US$67"
        ],
        "note": "Use the lower of US$100 and the maximum individual entry fee.",
        "family": "11.4.1",
        "id": "2e62692cf1be487d"
      },
      {
        "rule": "9.4.2",
        "prompt": "Three paper no-shoots show 3, 1 and 0 hits in their scoring areas, respectively. What is the combined point deduction?",
        "correct": "30 points",
        "options": [
          "30 points",
          "20 points",
          "35 points",
          "40 points"
        ],
        "note": "Count 10 points per hit, capped at two hits on each paper no-shoot.",
        "family": "9.4.2",
        "id": "9d9d5b6426560ab7"
      },
      {
        "rule": "10.2.7",
        "prompt": "A competitor leaves 5 non-disappearing scoring targets completely unengaged. They engage the other 4 targets. Before adding any misses, how many failure-to-engage procedurals apply?",
        "correct": "5",
        "options": [
          "5",
          "4",
          "6",
          "7"
        ],
        "note": "",
        "family": "10.2.7",
        "id": "0d8a48f3191f4847"
      },
      {
        "rule": "10.2.3",
        "prompt": "While faulting a line, a competitor fires 9 shots and gains a significant advantage. From that position a maximum of 4 scoring hits can be attained. What is the maximum number of procedurals for that fault?",
        "correct": "4",
        "options": [
          "4",
          "3",
          "5",
          "6"
        ],
        "note": "Multiple penalties for the fault are capped by the scoring hits attainable.",
        "family": "10.2.3",
        "id": "0ef941d62c1d78e5"
      },
      {
        "rule": "11.3.2",
        "prompt": "The Arbitration Committee receives a request at 10:38 on Saturday. Final results are scheduled to be declared at 10:18 on Sunday. What is the latest time the committee may rule under that schedule?",
        "correct": "Before 10:18 on Sunday",
        "options": [
          "Before 10:18 on Sunday",
          "By 10:38 on Sunday",
          "By 10:58 on Sunday",
          "Before 10:18 on Monday"
        ],
        "note": "The earlier limit is the declaration of final results.",
        "family": "11.3.2",
        "id": "de38b1edabf021d6"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Under Comstock, a competitor earns 50 target points, receives 10 penalty points and finishes in 8.00 seconds. What is the hit factor, rounded to four decimals?",
        "correct": "5.0000",
        "options": [
          "5.0000",
          "6.2500",
          "5.6250",
          "7.5000"
        ],
        "note": "Subtract penalties from target points before dividing by time.",
        "family": "comstock-hit-factor",
        "id": "a9248c139a4373b7"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "A 70-point stage is won with a hit factor of 8. A competitor records a hit factor of 6.00. How many stage points does the competitor earn?",
        "correct": "52.50",
        "options": [
          "52.50",
          "50.50",
          "51.50",
          "53.50"
        ],
        "note": "Multiply the available stage points by the competitor’s hit factor divided by the winner’s hit factor.",
        "family": "comstock-stage-points",
        "id": "47f4cad0ab27e8ba"
      },
      {
        "rule": "9.2.3",
        "prompt": "A competitor earns 37.2750, 27.6425 and 28.3850 stage points in the three stages of a match. What is the match total?",
        "correct": "93.3025",
        "options": [
          "93.3025",
          "93.4025",
          "93.2025",
          "94.3025"
        ],
        "note": "",
        "family": "match-total",
        "id": "c9e15cec5e09ea03"
      },
      {
        "rule": "10.2.4",
        "prompt": "A competitor fires 4 shots before a mandatory reload point, 2 shots after it without reloading, and 2 shots after finally reloading. How many procedural penalties apply to the reload violation?",
        "correct": "2",
        "options": [
          "2",
          "1",
          "3",
          "4"
        ],
        "note": "Count only shots after the required reload point and before the reload.",
        "family": "10.2.4",
        "id": "006d194da76716db"
      },
      {
        "rule": "10.2.5",
        "prompt": "In a Cooper Tunnel, direct contact with the overhead material drops 4 pieces. Bumping an upright drops another 1. How many procedural penalties apply?",
        "correct": "4",
        "options": [
          "4",
          "3",
          "5",
          "6"
        ],
        "note": "Pieces that fall from striking an upright are exempt.",
        "family": "10.2.5",
        "id": "8e37dab2e4ff09d1"
      },
      {
        "rule": "10.1.2",
        "prompt": "The Range Officer assesses 6 procedural penalties. What is the total point deduction for these penalties?",
        "correct": "60 points",
        "options": [
          "60 points",
          "40 points",
          "50 points",
          "70 points"
        ],
        "note": "",
        "family": "10.1.2",
        "id": "1b476140e351fce9"
      },
      {
        "rule": "10.2.1",
        "prompt": "A competitor fires 2 shots on each of 5 separate Fault Line breaches, re-entering fully between breaches and gaining no significant advantage. How many procedural penalties apply?",
        "correct": "5",
        "options": [
          "5",
          "4",
          "6",
          "7"
        ],
        "note": "With no significant advantage, count the separate occurrences.",
        "family": "10.2.1",
        "id": "e6660f0d591b4f7d"
      },
      {
        "rule": "11.3.1",
        "prompt": "Match Officials record a disputed call at 09:09. The competitor talks to the Chief Range Officer 15 minutes later. What is the deadline to submit a written arbitration appeal and fee to the Range Master?",
        "correct": "10:09",
        "options": [
          "10:09",
          "09:54",
          "10:24",
          "10:39"
        ],
        "note": "",
        "family": "11.3.1",
        "id": "3a39e0f7f339bf48"
      },
      {
        "rule": "9.8.3",
        "prompt": "The provisional results show a timestamp of 12:51, but were actually posted at 13:05. What is the deadline for a competitor to file a results appeal with the Stats Officer?",
        "correct": "14:05",
        "options": [
          "14:05",
          "13:50",
          "14:20",
          "14:35"
        ],
        "note": "",
        "family": "9.8.3",
        "id": "f52890a6657389c5"
      },
      {
        "rule": "11.4.1",
        "prompt": "At a Level III match the maximum individual entry fee is equivalent to US$121. What is the arbitration fee equivalent in local currency?",
        "correct": "US$100",
        "options": [
          "US$100",
          "US$121",
          "US$95",
          "US$105"
        ],
        "note": "Use the lower of US$100 and the maximum individual entry fee.",
        "family": "11.4.1",
        "id": "f8dd8ce82b7d6cb7"
      },
      {
        "rule": "9.4.2",
        "prompt": "Three paper no-shoots show 1, 2 and 0 hits in their scoring areas, respectively. What is the combined point deduction?",
        "correct": "30 points",
        "options": [
          "30 points",
          "20 points",
          "35 points",
          "40 points"
        ],
        "note": "Count 10 points per hit, capped at two hits on each paper no-shoot.",
        "family": "9.4.2",
        "id": "f4db1f910c9647bc"
      },
      {
        "rule": "10.2.7",
        "prompt": "A competitor leaves 6 non-disappearing scoring targets completely unengaged. They engage the other 5 targets. Before adding any misses, how many failure-to-engage procedurals apply?",
        "correct": "6",
        "options": [
          "6",
          "5",
          "7",
          "8"
        ],
        "note": "",
        "family": "10.2.7",
        "id": "d6027ed7afcbf0dc"
      },
      {
        "rule": "10.2.3",
        "prompt": "While faulting a line, a competitor fires 10 shots and gains a significant advantage. From that position a maximum of 5 scoring hits can be attained. What is the maximum number of procedurals for that fault?",
        "correct": "5",
        "options": [
          "5",
          "4",
          "6",
          "7"
        ],
        "note": "Multiple penalties for the fault are capped by the scoring hits attainable.",
        "family": "10.2.3",
        "id": "78f0f08139c28834"
      },
      {
        "rule": "11.3.2",
        "prompt": "The Arbitration Committee receives a request at 10:57 on Saturday. The Match Director will declare the results final at 11:17 on Sunday. What deadline applies to the committee’s decision?",
        "correct": "By 10:57 on Sunday",
        "options": [
          "By 10:57 on Sunday",
          "Before 11:17 on Sunday",
          "By 10:37 on Sunday",
          "By 10:57 on Monday"
        ],
        "note": "The 24-hour deadline arrives before the declaration of final results.",
        "family": "11.3.2",
        "id": "682a783c53b03f55"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Under Comstock, a competitor earns 55 target points, receives 20 penalty points and finishes in 5.00 seconds. What is the hit factor, rounded to four decimals?",
        "correct": "7.0000",
        "options": [
          "7.0000",
          "11.0000",
          "9.0000",
          "15.0000"
        ],
        "note": "Subtract penalties from target points before dividing by time.",
        "family": "comstock-hit-factor",
        "id": "6b4917642dba515c"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "A 80-point stage is won with a hit factor of 9. A competitor records a hit factor of 7.2. How many stage points does the competitor earn?",
        "correct": "64.00",
        "options": [
          "64.00",
          "62.00",
          "63.00",
          "65.00"
        ],
        "note": "Multiply the available stage points by the competitor’s hit factor divided by the winner’s hit factor.",
        "family": "comstock-stage-points",
        "id": "28ebb69b1638fbdf"
      },
      {
        "rule": "9.2.3",
        "prompt": "A competitor earns 39.2750, 28.6425 and 31.3850 stage points in the three stages of a match. What is the match total?",
        "correct": "99.3025",
        "options": [
          "99.3025",
          "99.4025",
          "99.2025",
          "100.3025"
        ],
        "note": "",
        "family": "match-total",
        "id": "5f4e872e5af06f31"
      },
      {
        "rule": "10.2.4",
        "prompt": "A competitor fires 1 shots before a mandatory reload point, 2 shots after it without reloading, and 3 shots after finally reloading. How many procedural penalties apply to the reload violation?",
        "correct": "2",
        "options": [
          "2",
          "1",
          "3",
          "4"
        ],
        "note": "Count only shots after the required reload point and before the reload.",
        "family": "10.2.4",
        "id": "6e024231dd5c61ec"
      },
      {
        "rule": "10.2.5",
        "prompt": "In a Cooper Tunnel, direct contact with the overhead material drops 1 pieces. Bumping an upright drops another 2. How many procedural penalties apply?",
        "correct": "1",
        "options": [
          "1",
          "0",
          "2",
          "3"
        ],
        "note": "Pieces that fall from striking an upright are exempt.",
        "family": "10.2.5",
        "id": "a494bfc8fae26d63"
      },
      {
        "rule": "10.1.2",
        "prompt": "The Range Officer assesses 7 procedural penalties. What is the total point deduction for these penalties?",
        "correct": "70 points",
        "options": [
          "70 points",
          "50 points",
          "60 points",
          "80 points"
        ],
        "note": "",
        "family": "10.1.2",
        "id": "47ba4f62b92a41c2"
      },
      {
        "rule": "10.2.1",
        "prompt": "A competitor fires 3 shots on each of 2 separate Fault Line breaches, re-entering fully between breaches and gaining no significant advantage. How many procedural penalties apply?",
        "correct": "2",
        "options": [
          "2",
          "1",
          "3",
          "4"
        ],
        "note": "With no significant advantage, count the separate occurrences.",
        "family": "10.2.1",
        "id": "ae87a1170740806b"
      },
      {
        "rule": "11.3.1",
        "prompt": "Match Officials record a disputed call at 09:32. The competitor talks to the Chief Range Officer 15 minutes later. What is the deadline to submit a written arbitration appeal and fee to the Range Master?",
        "correct": "10:32",
        "options": [
          "10:32",
          "10:17",
          "10:47",
          "11:02"
        ],
        "note": "",
        "family": "11.3.1",
        "id": "6588158dd42d9117"
      },
      {
        "rule": "9.8.3",
        "prompt": "The provisional results show a timestamp of 13:08, but were actually posted at 13:19. What is the deadline for a competitor to file a results appeal with the Stats Officer?",
        "correct": "14:19",
        "options": [
          "14:19",
          "14:04",
          "14:34",
          "14:49"
        ],
        "note": "",
        "family": "9.8.3",
        "id": "29a955b04f06e0ec"
      },
      {
        "rule": "11.4.1",
        "prompt": "At a Level III match the maximum individual entry fee is equivalent to US$66. What is the arbitration fee equivalent in local currency?",
        "correct": "US$66",
        "options": [
          "US$66",
          "US$100",
          "US$61",
          "US$71"
        ],
        "note": "Use the lower of US$100 and the maximum individual entry fee.",
        "family": "11.4.1",
        "id": "ee9ce1e4aa409d25"
      },
      {
        "rule": "9.4.2",
        "prompt": "Three paper no-shoots show 2, 2 and 0 hits in their scoring areas, respectively. What is the combined point deduction?",
        "correct": "40 points",
        "options": [
          "40 points",
          "30 points",
          "45 points",
          "50 points"
        ],
        "note": "Count 10 points per hit, capped at two hits on each paper no-shoot.",
        "family": "9.4.2",
        "id": "402cb42239c9c1f8"
      },
      {
        "rule": "10.2.7",
        "prompt": "A competitor leaves 3 non-disappearing scoring targets completely unengaged. They engage the other 6 targets. Before adding any misses, how many failure-to-engage procedurals apply?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "",
        "family": "10.2.7",
        "id": "40285104c3498727"
      },
      {
        "rule": "10.2.3",
        "prompt": "While faulting a line, a competitor fires 11 shots and gains a significant advantage. From that position a maximum of 6 scoring hits can be attained. What is the maximum number of procedurals for that fault?",
        "correct": "6",
        "options": [
          "6",
          "5",
          "7",
          "8"
        ],
        "note": "Multiple penalties for the fault are capped by the scoring hits attainable.",
        "family": "10.2.3",
        "id": "33eda48998525a75"
      },
      {
        "rule": "11.3.2",
        "prompt": "The Arbitration Committee receives a request at 11:16 on Saturday. Final results are scheduled to be declared at 10:56 on Sunday. What is the latest time the committee may rule under that schedule?",
        "correct": "Before 10:56 on Sunday",
        "options": [
          "Before 10:56 on Sunday",
          "By 11:16 on Sunday",
          "By 11:36 on Sunday",
          "Before 10:56 on Monday"
        ],
        "note": "The earlier limit is the declaration of final results.",
        "family": "11.3.2",
        "id": "0ca050eb61851f0f"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Under Comstock, a competitor earns 60 target points, receives 30 penalty points and finishes in 6.00 seconds. What is the hit factor, rounded to four decimals?",
        "correct": "5.0000",
        "options": [
          "5.0000",
          "10.0000",
          "7.5000",
          "15.0000"
        ],
        "note": "Subtract penalties from target points before dividing by time.",
        "family": "comstock-hit-factor",
        "id": "e0956e1c97004596"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "A 90-point stage is won with a hit factor of 10. A competitor records a hit factor of 9.0. How many stage points does the competitor earn?",
        "correct": "81.00",
        "options": [
          "81.00",
          "79.00",
          "80.00",
          "82.00"
        ],
        "note": "Multiply the available stage points by the competitor’s hit factor divided by the winner’s hit factor.",
        "family": "comstock-stage-points",
        "id": "14715e3e5cf69e4f"
      },
      {
        "rule": "9.2.3",
        "prompt": "A competitor earns 41.2750, 29.6425 and 34.3850 stage points in the three stages of a match. What is the match total?",
        "correct": "105.3025",
        "options": [
          "105.3025",
          "105.4025",
          "105.2025",
          "106.3025"
        ],
        "note": "",
        "family": "match-total",
        "id": "074fa194069e06db"
      },
      {
        "rule": "10.2.4",
        "prompt": "A competitor fires 2 shots before a mandatory reload point, 2 shots after it without reloading, and 4 shots after finally reloading. How many procedural penalties apply to the reload violation?",
        "correct": "2",
        "options": [
          "2",
          "1",
          "3",
          "4"
        ],
        "note": "Count only shots after the required reload point and before the reload.",
        "family": "10.2.4",
        "id": "68323701f25334fb"
      },
      {
        "rule": "10.2.5",
        "prompt": "In a Cooper Tunnel, direct contact with the overhead material drops 2 pieces. Bumping an upright drops another 2. How many procedural penalties apply?",
        "correct": "2",
        "options": [
          "2",
          "1",
          "3",
          "4"
        ],
        "note": "Pieces that fall from striking an upright are exempt.",
        "family": "10.2.5",
        "id": "d78787214b190a6e"
      },
      {
        "rule": "10.1.2",
        "prompt": "The Range Officer assesses 8 procedural penalties. What is the total point deduction for these penalties?",
        "correct": "80 points",
        "options": [
          "80 points",
          "60 points",
          "70 points",
          "90 points"
        ],
        "note": "",
        "family": "10.1.2",
        "id": "5d5ad2570ac219a8"
      },
      {
        "rule": "10.2.1",
        "prompt": "A competitor fires 3 shots on each of 3 separate Fault Line breaches, re-entering fully between breaches and gaining no significant advantage. How many procedural penalties apply?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "With no significant advantage, count the separate occurrences.",
        "family": "10.2.1",
        "id": "58f01062c3509bdd"
      },
      {
        "rule": "11.3.1",
        "prompt": "Match Officials record a disputed call at 09:55. The competitor talks to the Chief Range Officer 15 minutes later. What is the deadline to submit a written arbitration appeal and fee to the Range Master?",
        "correct": "10:55",
        "options": [
          "10:55",
          "10:40",
          "11:10",
          "11:25"
        ],
        "note": "",
        "family": "11.3.1",
        "id": "007010000caf70b8"
      },
      {
        "rule": "9.8.3",
        "prompt": "The provisional results show a timestamp of 13:25, but were actually posted at 13:37. What is the deadline for a competitor to file a results appeal with the Stats Officer?",
        "correct": "14:37",
        "options": [
          "14:37",
          "14:22",
          "14:52",
          "15:07"
        ],
        "note": "",
        "family": "9.8.3",
        "id": "251642cc8f8c7f1f"
      },
      {
        "rule": "11.4.1",
        "prompt": "At a Level III match the maximum individual entry fee is equivalent to US$127. What is the arbitration fee equivalent in local currency?",
        "correct": "US$100",
        "options": [
          "US$100",
          "US$127",
          "US$95",
          "US$105"
        ],
        "note": "Use the lower of US$100 and the maximum individual entry fee.",
        "family": "11.4.1",
        "id": "5f76c896f353c461"
      },
      {
        "rule": "9.4.2",
        "prompt": "Three paper no-shoots show 3, 2 and 0 hits in their scoring areas, respectively. What is the combined point deduction?",
        "correct": "40 points",
        "options": [
          "40 points",
          "30 points",
          "45 points",
          "50 points"
        ],
        "note": "Count 10 points per hit, capped at two hits on each paper no-shoot.",
        "family": "9.4.2",
        "id": "f10264af0c61ed3a"
      },
      {
        "rule": "10.2.7",
        "prompt": "A competitor leaves 4 non-disappearing scoring targets completely unengaged. They engage the other 7 targets. Before adding any misses, how many failure-to-engage procedurals apply?",
        "correct": "4",
        "options": [
          "4",
          "3",
          "5",
          "6"
        ],
        "note": "",
        "family": "10.2.7",
        "id": "9bd75fb0011635df"
      },
      {
        "rule": "10.2.3",
        "prompt": "While faulting a line, a competitor fires 12 shots and gains a significant advantage. From that position a maximum of 7 scoring hits can be attained. What is the maximum number of procedurals for that fault?",
        "correct": "7",
        "options": [
          "7",
          "6",
          "8",
          "9"
        ],
        "note": "Multiple penalties for the fault are capped by the scoring hits attainable.",
        "family": "10.2.3",
        "id": "fe4d0980cee323db"
      },
      {
        "rule": "11.3.2",
        "prompt": "The Arbitration Committee receives a request at 11:35 on Saturday. The Match Director will declare the results final at 11:55 on Sunday. What deadline applies to the committee’s decision?",
        "correct": "By 11:35 on Sunday",
        "options": [
          "By 11:35 on Sunday",
          "Before 11:55 on Sunday",
          "By 11:15 on Sunday",
          "By 11:35 on Monday"
        ],
        "note": "The 24-hour deadline arrives before the declaration of final results.",
        "family": "11.3.2",
        "id": "64eca1200b3dfb67"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Under Comstock, a competitor earns 65 target points, receives 10 penalty points and finishes in 7.00 seconds. What is the hit factor, rounded to four decimals?",
        "correct": "7.8571",
        "options": [
          "7.8571",
          "9.2857",
          "8.5714",
          "10.7143"
        ],
        "note": "Subtract penalties from target points before dividing by time.",
        "family": "comstock-hit-factor",
        "id": "dc1a8095996ad676"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "A 100-point stage is won with a hit factor of 8. A competitor records a hit factor of 4.0. How many stage points does the competitor earn?",
        "correct": "50.00",
        "options": [
          "50.00",
          "48.00",
          "49.00",
          "51.00"
        ],
        "note": "Multiply the available stage points by the competitor’s hit factor divided by the winner’s hit factor.",
        "family": "comstock-stage-points",
        "id": "a40790b1b62def3d"
      },
      {
        "rule": "9.2.3",
        "prompt": "A competitor earns 43.2750, 30.6425 and 37.3850 stage points in the three stages of a match. What is the match total?",
        "correct": "111.3025",
        "options": [
          "111.3025",
          "111.4025",
          "111.2025",
          "112.3025"
        ],
        "note": "",
        "family": "match-total",
        "id": "94c3a1b2ed2be128"
      },
      {
        "rule": "10.2.4",
        "prompt": "A competitor fires 3 shots before a mandatory reload point, 3 shots after it without reloading, and 2 shots after finally reloading. How many procedural penalties apply to the reload violation?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "Count only shots after the required reload point and before the reload.",
        "family": "10.2.4",
        "id": "74af5d5f21fe1dfb"
      },
      {
        "rule": "10.2.5",
        "prompt": "In a Cooper Tunnel, direct contact with the overhead material drops 3 pieces. Bumping an upright drops another 2. How many procedural penalties apply?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "Pieces that fall from striking an upright are exempt.",
        "family": "10.2.5",
        "id": "1f535390a3951d7e"
      },
      {
        "rule": "10.1.2",
        "prompt": "The Range Officer assesses 9 procedural penalties. What is the total point deduction for these penalties?",
        "correct": "90 points",
        "options": [
          "90 points",
          "70 points",
          "80 points",
          "100 points"
        ],
        "note": "",
        "family": "10.1.2",
        "id": "8408d43671db7a0e"
      },
      {
        "rule": "10.2.1",
        "prompt": "A competitor fires 3 shots on each of 4 separate Fault Line breaches, re-entering fully between breaches and gaining no significant advantage. How many procedural penalties apply?",
        "correct": "4",
        "options": [
          "4",
          "3",
          "5",
          "6"
        ],
        "note": "With no significant advantage, count the separate occurrences.",
        "family": "10.2.1",
        "id": "2ff8e267c91dde1a"
      },
      {
        "rule": "11.3.1",
        "prompt": "Match Officials record a disputed call at 10:18. The competitor talks to the Chief Range Officer 15 minutes later. What is the deadline to submit a written arbitration appeal and fee to the Range Master?",
        "correct": "11:18",
        "options": [
          "11:18",
          "11:03",
          "11:33",
          "11:48"
        ],
        "note": "",
        "family": "11.3.1",
        "id": "c965916fb531369c"
      },
      {
        "rule": "9.8.3",
        "prompt": "The provisional results show a timestamp of 13:42, but were actually posted at 13:55. What is the deadline for a competitor to file a results appeal with the Stats Officer?",
        "correct": "14:55",
        "options": [
          "14:55",
          "14:40",
          "15:10",
          "15:25"
        ],
        "note": "",
        "family": "9.8.3",
        "id": "2cf52a01b6b110fd"
      },
      {
        "rule": "11.4.1",
        "prompt": "At a Level III match the maximum individual entry fee is equivalent to US$70. What is the arbitration fee equivalent in local currency?",
        "correct": "US$70",
        "options": [
          "US$70",
          "US$100",
          "US$65",
          "US$75"
        ],
        "note": "Use the lower of US$100 and the maximum individual entry fee.",
        "family": "11.4.1",
        "id": "d811849a35cbcaa0"
      },
      {
        "rule": "9.4.2",
        "prompt": "Three paper no-shoots show 1, 3 and 1 hits in their scoring areas, respectively. What is the combined point deduction?",
        "correct": "40 points",
        "options": [
          "40 points",
          "30 points",
          "45 points",
          "50 points"
        ],
        "note": "Count 10 points per hit, capped at two hits on each paper no-shoot.",
        "family": "9.4.2",
        "id": "e7a35042e7ccfa8a"
      },
      {
        "rule": "10.2.7",
        "prompt": "A competitor leaves 5 non-disappearing scoring targets completely unengaged. They engage the other 8 targets. Before adding any misses, how many failure-to-engage procedurals apply?",
        "correct": "5",
        "options": [
          "5",
          "4",
          "6",
          "7"
        ],
        "note": "",
        "family": "10.2.7",
        "id": "fd6b874ef06e73b5"
      },
      {
        "rule": "10.2.3",
        "prompt": "While faulting a line, a competitor fires 13 shots and gains a significant advantage. From that position a maximum of 8 scoring hits can be attained. What is the maximum number of procedurals for that fault?",
        "correct": "8",
        "options": [
          "8",
          "7",
          "9",
          "10"
        ],
        "note": "Multiple penalties for the fault are capped by the scoring hits attainable.",
        "family": "10.2.3",
        "id": "e26303c2b6fb8eef"
      },
      {
        "rule": "11.3.2",
        "prompt": "The Arbitration Committee receives a request at 11:54 on Saturday. Final results are scheduled to be declared at 11:34 on Sunday. What is the latest time the committee may rule under that schedule?",
        "correct": "Before 11:34 on Sunday",
        "options": [
          "Before 11:34 on Sunday",
          "By 11:54 on Sunday",
          "By 12:14 on Sunday",
          "Before 11:34 on Monday"
        ],
        "note": "The earlier limit is the declaration of final results.",
        "family": "11.3.2",
        "id": "2f113c3dcf31d25b"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Under Comstock, a competitor earns 70 target points, receives 20 penalty points and finishes in 8.00 seconds. What is the hit factor, rounded to four decimals?",
        "correct": "6.2500",
        "options": [
          "6.2500",
          "8.7500",
          "7.5000",
          "11.2500"
        ],
        "note": "Subtract penalties from target points before dividing by time.",
        "family": "comstock-hit-factor",
        "id": "194827b22eba79b3"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "A 110-point stage is won with a hit factor of 9. A competitor records a hit factor of 5.4. How many stage points does the competitor earn?",
        "correct": "66.00",
        "options": [
          "66.00",
          "64.00",
          "65.00",
          "67.00"
        ],
        "note": "Multiply the available stage points by the competitor’s hit factor divided by the winner’s hit factor.",
        "family": "comstock-stage-points",
        "id": "ae96f35457d3f054"
      },
      {
        "rule": "9.2.3",
        "prompt": "A competitor earns 45.2750, 31.6425 and 40.3850 stage points in the three stages of a match. What is the match total?",
        "correct": "117.3025",
        "options": [
          "117.3025",
          "117.4025",
          "117.2025",
          "118.3025"
        ],
        "note": "",
        "family": "match-total",
        "id": "14aae3449b1f03c8"
      },
      {
        "rule": "10.2.4",
        "prompt": "A competitor fires 4 shots before a mandatory reload point, 3 shots after it without reloading, and 3 shots after finally reloading. How many procedural penalties apply to the reload violation?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "Count only shots after the required reload point and before the reload.",
        "family": "10.2.4",
        "id": "ed76f5a3f5fb66c2"
      },
      {
        "rule": "10.2.5",
        "prompt": "In a Cooper Tunnel, direct contact with the overhead material drops 4 pieces. Bumping an upright drops another 2. How many procedural penalties apply?",
        "correct": "4",
        "options": [
          "4",
          "3",
          "5",
          "6"
        ],
        "note": "Pieces that fall from striking an upright are exempt.",
        "family": "10.2.5",
        "id": "491749653d1d7d26"
      },
      {
        "rule": "10.1.2",
        "prompt": "The Range Officer assesses 10 procedural penalties. What is the total point deduction for these penalties?",
        "correct": "100 points",
        "options": [
          "100 points",
          "80 points",
          "90 points",
          "110 points"
        ],
        "note": "",
        "family": "10.1.2",
        "id": "100e589875ff53f7"
      },
      {
        "rule": "10.2.1",
        "prompt": "A competitor fires 3 shots on each of 5 separate Fault Line breaches, re-entering fully between breaches and gaining no significant advantage. How many procedural penalties apply?",
        "correct": "5",
        "options": [
          "5",
          "4",
          "6",
          "7"
        ],
        "note": "With no significant advantage, count the separate occurrences.",
        "family": "10.2.1",
        "id": "5e49c94b26b2461c"
      },
      {
        "rule": "11.3.1",
        "prompt": "Match Officials record a disputed call at 10:41. The competitor talks to the Chief Range Officer 15 minutes later. What is the deadline to submit a written arbitration appeal and fee to the Range Master?",
        "correct": "11:41",
        "options": [
          "11:41",
          "11:26",
          "11:56",
          "12:11"
        ],
        "note": "",
        "family": "11.3.1",
        "id": "0d638cd42e10ffb0"
      },
      {
        "rule": "9.8.3",
        "prompt": "The provisional results show a timestamp of 13:59, but were actually posted at 14:13. What is the deadline for a competitor to file a results appeal with the Stats Officer?",
        "correct": "15:13",
        "options": [
          "15:13",
          "14:58",
          "15:28",
          "15:43"
        ],
        "note": "",
        "family": "9.8.3",
        "id": "09e5ceb49c90626e"
      },
      {
        "rule": "11.4.1",
        "prompt": "At a Level III match the maximum individual entry fee is equivalent to US$133. What is the arbitration fee equivalent in local currency?",
        "correct": "US$100",
        "options": [
          "US$100",
          "US$133",
          "US$95",
          "US$105"
        ],
        "note": "Use the lower of US$100 and the maximum individual entry fee.",
        "family": "11.4.1",
        "id": "274ea25396d70949"
      },
      {
        "rule": "9.4.2",
        "prompt": "Three paper no-shoots show 2, 3 and 1 hits in their scoring areas, respectively. What is the combined point deduction?",
        "correct": "50 points",
        "options": [
          "50 points",
          "40 points",
          "55 points",
          "60 points"
        ],
        "note": "Count 10 points per hit, capped at two hits on each paper no-shoot.",
        "family": "9.4.2",
        "id": "3fe10b1743af5a74"
      },
      {
        "rule": "10.2.7",
        "prompt": "A competitor leaves 6 non-disappearing scoring targets completely unengaged. They engage the other 9 targets. Before adding any misses, how many failure-to-engage procedurals apply?",
        "correct": "6",
        "options": [
          "6",
          "5",
          "7",
          "8"
        ],
        "note": "",
        "family": "10.2.7",
        "id": "5bd4bda93c64ae23"
      },
      {
        "rule": "10.2.3",
        "prompt": "While faulting a line, a competitor fires 14 shots and gains a significant advantage. From that position a maximum of 9 scoring hits can be attained. What is the maximum number of procedurals for that fault?",
        "correct": "9",
        "options": [
          "9",
          "8",
          "10",
          "11"
        ],
        "note": "Multiple penalties for the fault are capped by the scoring hits attainable.",
        "family": "10.2.3",
        "id": "8ba798773a134e49"
      },
      {
        "rule": "11.3.2",
        "prompt": "The Arbitration Committee receives a request at 12:13 on Saturday. The Match Director will declare the results final at 12:33 on Sunday. What deadline applies to the committee’s decision?",
        "correct": "By 12:13 on Sunday",
        "options": [
          "By 12:13 on Sunday",
          "Before 12:33 on Sunday",
          "By 11:53 on Sunday",
          "By 12:13 on Monday"
        ],
        "note": "The 24-hour deadline arrives before the declaration of final results.",
        "family": "11.3.2",
        "id": "87e95945c487e4d8"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Under Comstock, a competitor earns 75 target points, receives 30 penalty points and finishes in 5.00 seconds. What is the hit factor, rounded to four decimals?",
        "correct": "9.0000",
        "options": [
          "9.0000",
          "15.0000",
          "12.0000",
          "21.0000"
        ],
        "note": "Subtract penalties from target points before dividing by time.",
        "family": "comstock-hit-factor",
        "id": "6593ce04b3d67d7d"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "A 120-point stage is won with a hit factor of 10. A competitor records a hit factor of 7.0. How many stage points does the competitor earn?",
        "correct": "84.00",
        "options": [
          "84.00",
          "82.00",
          "83.00",
          "85.00"
        ],
        "note": "Multiply the available stage points by the competitor’s hit factor divided by the winner’s hit factor.",
        "family": "comstock-stage-points",
        "id": "125f67b0e89b3b29"
      },
      {
        "rule": "9.2.3",
        "prompt": "A competitor earns 47.2750, 32.6425 and 43.3850 stage points in the three stages of a match. What is the match total?",
        "correct": "123.3025",
        "options": [
          "123.3025",
          "123.4025",
          "123.2025",
          "124.3025"
        ],
        "note": "",
        "family": "match-total",
        "id": "ac71cbd4257fe44c"
      },
      {
        "rule": "10.2.4",
        "prompt": "A competitor fires 1 shots before a mandatory reload point, 3 shots after it without reloading, and 4 shots after finally reloading. How many procedural penalties apply to the reload violation?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "Count only shots after the required reload point and before the reload.",
        "family": "10.2.4",
        "id": "ad42741d9b5b0b33"
      },
      {
        "rule": "10.2.5",
        "prompt": "In a Cooper Tunnel, direct contact with the overhead material drops 1 pieces. Bumping an upright drops another 3. How many procedural penalties apply?",
        "correct": "1",
        "options": [
          "1",
          "0",
          "2",
          "3"
        ],
        "note": "Pieces that fall from striking an upright are exempt.",
        "family": "10.2.5",
        "id": "073fa27a14c6fdba"
      },
      {
        "rule": "10.1.2",
        "prompt": "The Range Officer assesses 11 procedural penalties. What is the total point deduction for these penalties?",
        "correct": "110 points",
        "options": [
          "110 points",
          "90 points",
          "100 points",
          "120 points"
        ],
        "note": "",
        "family": "10.1.2",
        "id": "6ced0a30c97d29fb"
      },
      {
        "rule": "10.2.1",
        "prompt": "A competitor fires 4 shots on each of 2 separate Fault Line breaches, re-entering fully between breaches and gaining no significant advantage. How many procedural penalties apply?",
        "correct": "2",
        "options": [
          "2",
          "1",
          "3",
          "4"
        ],
        "note": "With no significant advantage, count the separate occurrences.",
        "family": "10.2.1",
        "id": "0fdc8b40955167f4"
      },
      {
        "rule": "11.3.1",
        "prompt": "Match Officials record a disputed call at 11:04. The competitor talks to the Chief Range Officer 15 minutes later. What is the deadline to submit a written arbitration appeal and fee to the Range Master?",
        "correct": "12:04",
        "options": [
          "12:04",
          "11:49",
          "12:19",
          "12:34"
        ],
        "note": "",
        "family": "11.3.1",
        "id": "74c72e17cf94ace9"
      },
      {
        "rule": "9.8.3",
        "prompt": "The provisional results show a timestamp of 14:16, but were actually posted at 14:27. What is the deadline for a competitor to file a results appeal with the Stats Officer?",
        "correct": "15:27",
        "options": [
          "15:27",
          "15:12",
          "15:42",
          "15:57"
        ],
        "note": "",
        "family": "9.8.3",
        "id": "7218042e14ad7648"
      },
      {
        "rule": "11.4.1",
        "prompt": "At a Level III match the maximum individual entry fee is equivalent to US$74. What is the arbitration fee equivalent in local currency?",
        "correct": "US$74",
        "options": [
          "US$74",
          "US$100",
          "US$69",
          "US$79"
        ],
        "note": "Use the lower of US$100 and the maximum individual entry fee.",
        "family": "11.4.1",
        "id": "84a17151ec6235aa"
      },
      {
        "rule": "9.4.2",
        "prompt": "Three paper no-shoots show 3, 3 and 1 hits in their scoring areas, respectively. What is the combined point deduction?",
        "correct": "50 points",
        "options": [
          "50 points",
          "40 points",
          "55 points",
          "60 points"
        ],
        "note": "Count 10 points per hit, capped at two hits on each paper no-shoot.",
        "family": "9.4.2",
        "id": "9362ece878e6df51"
      },
      {
        "rule": "10.2.7",
        "prompt": "A competitor leaves 3 non-disappearing scoring targets completely unengaged. They engage the other 10 targets. Before adding any misses, how many failure-to-engage procedurals apply?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "",
        "family": "10.2.7",
        "id": "f187f41432c19f9e"
      },
      {
        "rule": "10.2.3",
        "prompt": "While faulting a line, a competitor fires 15 shots and gains a significant advantage. From that position a maximum of 10 scoring hits can be attained. What is the maximum number of procedurals for that fault?",
        "correct": "10",
        "options": [
          "10",
          "9",
          "11",
          "12"
        ],
        "note": "Multiple penalties for the fault are capped by the scoring hits attainable.",
        "family": "10.2.3",
        "id": "1d0b8f7c31502eb7"
      },
      {
        "rule": "11.3.2",
        "prompt": "The Arbitration Committee receives a request at 12:32 on Saturday. Final results are scheduled to be declared at 12:12 on Sunday. What is the latest time the committee may rule under that schedule?",
        "correct": "Before 12:12 on Sunday",
        "options": [
          "Before 12:12 on Sunday",
          "By 12:32 on Sunday",
          "By 12:52 on Sunday",
          "Before 12:12 on Monday"
        ],
        "note": "The earlier limit is the declaration of final results.",
        "family": "11.3.2",
        "id": "0a04767b90011120"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Under Comstock, a competitor earns 80 target points, receives 10 penalty points and finishes in 6.00 seconds. What is the hit factor, rounded to four decimals?",
        "correct": "11.6667",
        "options": [
          "11.6667",
          "13.3333",
          "12.5000",
          "15.0000"
        ],
        "note": "Subtract penalties from target points before dividing by time.",
        "family": "comstock-hit-factor",
        "id": "0a8487a56defd7d4"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "A 130-point stage is won with a hit factor of 8. A competitor records a hit factor of 6.00. How many stage points does the competitor earn?",
        "correct": "97.50",
        "options": [
          "97.50",
          "95.50",
          "96.50",
          "98.50"
        ],
        "note": "Multiply the available stage points by the competitor’s hit factor divided by the winner’s hit factor.",
        "family": "comstock-stage-points",
        "id": "581a8fb3529e434e"
      },
      {
        "rule": "9.2.3",
        "prompt": "A competitor earns 49.2750, 33.6425 and 46.3850 stage points in the three stages of a match. What is the match total?",
        "correct": "129.3025",
        "options": [
          "129.3025",
          "129.4025",
          "129.2025",
          "130.3025"
        ],
        "note": "",
        "family": "match-total",
        "id": "24a2902d339963fb"
      },
      {
        "rule": "10.2.4",
        "prompt": "A competitor fires 2 shots before a mandatory reload point, 4 shots after it without reloading, and 2 shots after finally reloading. How many procedural penalties apply to the reload violation?",
        "correct": "4",
        "options": [
          "4",
          "3",
          "5",
          "6"
        ],
        "note": "Count only shots after the required reload point and before the reload.",
        "family": "10.2.4",
        "id": "a63d7cb694c1e4e7"
      },
      {
        "rule": "10.2.5",
        "prompt": "In a Cooper Tunnel, direct contact with the overhead material drops 2 pieces. Bumping an upright drops another 3. How many procedural penalties apply?",
        "correct": "2",
        "options": [
          "2",
          "1",
          "3",
          "4"
        ],
        "note": "Pieces that fall from striking an upright are exempt.",
        "family": "10.2.5",
        "id": "d4412d59638309cc"
      },
      {
        "rule": "10.1.2",
        "prompt": "The Range Officer assesses 12 procedural penalties. What is the total point deduction for these penalties?",
        "correct": "120 points",
        "options": [
          "120 points",
          "100 points",
          "110 points",
          "130 points"
        ],
        "note": "",
        "family": "10.1.2",
        "id": "2da427e627a18668"
      },
      {
        "rule": "10.2.1",
        "prompt": "A competitor fires 4 shots on each of 3 separate Fault Line breaches, re-entering fully between breaches and gaining no significant advantage. How many procedural penalties apply?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "With no significant advantage, count the separate occurrences.",
        "family": "10.2.1",
        "id": "21bc41077313a1fb"
      },
      {
        "rule": "11.3.1",
        "prompt": "Match Officials record a disputed call at 11:27. The competitor talks to the Chief Range Officer 15 minutes later. What is the deadline to submit a written arbitration appeal and fee to the Range Master?",
        "correct": "12:27",
        "options": [
          "12:27",
          "12:12",
          "12:42",
          "12:57"
        ],
        "note": "",
        "family": "11.3.1",
        "id": "8b94d01c354e3638"
      },
      {
        "rule": "9.8.3",
        "prompt": "The provisional results show a timestamp of 14:33, but were actually posted at 14:45. What is the deadline for a competitor to file a results appeal with the Stats Officer?",
        "correct": "15:45",
        "options": [
          "15:45",
          "15:30",
          "16:00",
          "16:15"
        ],
        "note": "",
        "family": "9.8.3",
        "id": "7aba270f1596c966"
      },
      {
        "rule": "11.4.1",
        "prompt": "At a Level III match the maximum individual entry fee is equivalent to US$139. What is the arbitration fee equivalent in local currency?",
        "correct": "US$100",
        "options": [
          "US$100",
          "US$139",
          "US$95",
          "US$105"
        ],
        "note": "Use the lower of US$100 and the maximum individual entry fee.",
        "family": "11.4.1",
        "id": "5bb2c4fc1e28915c"
      },
      {
        "rule": "9.4.2",
        "prompt": "Three paper no-shoots show 1, 4 and 1 hits in their scoring areas, respectively. What is the combined point deduction?",
        "correct": "40 points",
        "options": [
          "40 points",
          "30 points",
          "45 points",
          "50 points"
        ],
        "note": "Count 10 points per hit, capped at two hits on each paper no-shoot.",
        "family": "9.4.2",
        "id": "2ce804cf7d3c65a5"
      },
      {
        "rule": "10.2.7",
        "prompt": "A competitor leaves 4 non-disappearing scoring targets completely unengaged. They engage the other 11 targets. Before adding any misses, how many failure-to-engage procedurals apply?",
        "correct": "4",
        "options": [
          "4",
          "3",
          "5",
          "6"
        ],
        "note": "",
        "family": "10.2.7",
        "id": "6a197c545df016c0"
      },
      {
        "rule": "10.2.3",
        "prompt": "While faulting a line, a competitor fires 16 shots and gains a significant advantage. From that position a maximum of 11 scoring hits can be attained. What is the maximum number of procedurals for that fault?",
        "correct": "11",
        "options": [
          "11",
          "10",
          "12",
          "13"
        ],
        "note": "Multiple penalties for the fault are capped by the scoring hits attainable.",
        "family": "10.2.3",
        "id": "ee190b22289ebab1"
      },
      {
        "rule": "11.3.2",
        "prompt": "The Arbitration Committee receives a request at 12:51 on Saturday. The Match Director will declare the results final at 13:11 on Sunday. What deadline applies to the committee’s decision?",
        "correct": "By 12:51 on Sunday",
        "options": [
          "By 12:51 on Sunday",
          "Before 13:11 on Sunday",
          "By 12:31 on Sunday",
          "By 12:51 on Monday"
        ],
        "note": "The 24-hour deadline arrives before the declaration of final results.",
        "family": "11.3.2",
        "id": "87475e17dc3ff41f"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Under Comstock, a competitor earns 85 target points, receives 20 penalty points and finishes in 7.00 seconds. What is the hit factor, rounded to four decimals?",
        "correct": "9.2857",
        "options": [
          "9.2857",
          "12.1429",
          "10.7143",
          "15.0000"
        ],
        "note": "Subtract penalties from target points before dividing by time.",
        "family": "comstock-hit-factor",
        "id": "b85cb293f700cca4"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "A 140-point stage is won with a hit factor of 9. A competitor records a hit factor of 7.2. How many stage points does the competitor earn?",
        "correct": "112.00",
        "options": [
          "112.00",
          "110.00",
          "111.00",
          "113.00"
        ],
        "note": "Multiply the available stage points by the competitor’s hit factor divided by the winner’s hit factor.",
        "family": "comstock-stage-points",
        "id": "80da1262251a8622"
      },
      {
        "rule": "9.2.3",
        "prompt": "A competitor earns 51.2750, 34.6425 and 49.3850 stage points in the three stages of a match. What is the match total?",
        "correct": "135.3025",
        "options": [
          "135.3025",
          "135.4025",
          "135.2025",
          "136.3025"
        ],
        "note": "",
        "family": "match-total",
        "id": "dc93ed95ac38a11e"
      },
      {
        "rule": "10.2.4",
        "prompt": "A competitor fires 3 shots before a mandatory reload point, 4 shots after it without reloading, and 3 shots after finally reloading. How many procedural penalties apply to the reload violation?",
        "correct": "4",
        "options": [
          "4",
          "3",
          "5",
          "6"
        ],
        "note": "Count only shots after the required reload point and before the reload.",
        "family": "10.2.4",
        "id": "ff81f0ebb90fa7fe"
      },
      {
        "rule": "10.2.5",
        "prompt": "In a Cooper Tunnel, direct contact with the overhead material drops 3 pieces. Bumping an upright drops another 3. How many procedural penalties apply?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "Pieces that fall from striking an upright are exempt.",
        "family": "10.2.5",
        "id": "a69a26a0962324c0"
      },
      {
        "rule": "10.1.2",
        "prompt": "The Range Officer assesses 13 procedural penalties. What is the total point deduction for these penalties?",
        "correct": "130 points",
        "options": [
          "130 points",
          "110 points",
          "120 points",
          "140 points"
        ],
        "note": "",
        "family": "10.1.2",
        "id": "f2b4498c35093061"
      },
      {
        "rule": "10.2.1",
        "prompt": "A competitor fires 4 shots on each of 4 separate Fault Line breaches, re-entering fully between breaches and gaining no significant advantage. How many procedural penalties apply?",
        "correct": "4",
        "options": [
          "4",
          "3",
          "5",
          "6"
        ],
        "note": "With no significant advantage, count the separate occurrences.",
        "family": "10.2.1",
        "id": "bcbc115517493d04"
      },
      {
        "rule": "11.3.1",
        "prompt": "Match Officials record a disputed call at 11:50. The competitor talks to the Chief Range Officer 15 minutes later. What is the deadline to submit a written arbitration appeal and fee to the Range Master?",
        "correct": "12:50",
        "options": [
          "12:50",
          "12:35",
          "13:05",
          "13:20"
        ],
        "note": "",
        "family": "11.3.1",
        "id": "5fa6865654c74be5"
      },
      {
        "rule": "9.8.3",
        "prompt": "The provisional results show a timestamp of 14:50, but were actually posted at 15:03. What is the deadline for a competitor to file a results appeal with the Stats Officer?",
        "correct": "16:03",
        "options": [
          "16:03",
          "15:48",
          "16:18",
          "16:33"
        ],
        "note": "",
        "family": "9.8.3",
        "id": "2bb26fd96d3d99e0"
      },
      {
        "rule": "11.4.1",
        "prompt": "At a Level III match the maximum individual entry fee is equivalent to US$78. What is the arbitration fee equivalent in local currency?",
        "correct": "US$78",
        "options": [
          "US$78",
          "US$100",
          "US$73",
          "US$83"
        ],
        "note": "Use the lower of US$100 and the maximum individual entry fee.",
        "family": "11.4.1",
        "id": "b0c07a4dded3ae57"
      },
      {
        "rule": "9.4.2",
        "prompt": "Three paper no-shoots show 2, 4 and 1 hits in their scoring areas, respectively. What is the combined point deduction?",
        "correct": "50 points",
        "options": [
          "50 points",
          "40 points",
          "55 points",
          "60 points"
        ],
        "note": "Count 10 points per hit, capped at two hits on each paper no-shoot.",
        "family": "9.4.2",
        "id": "b8d2a9da680ff132"
      },
      {
        "rule": "10.2.7",
        "prompt": "A competitor leaves 5 non-disappearing scoring targets completely unengaged. They engage the other 12 targets. Before adding any misses, how many failure-to-engage procedurals apply?",
        "correct": "5",
        "options": [
          "5",
          "4",
          "6",
          "7"
        ],
        "note": "",
        "family": "10.2.7",
        "id": "6027dec45b5000f3"
      },
      {
        "rule": "10.2.3",
        "prompt": "While faulting a line, a competitor fires 17 shots and gains a significant advantage. From that position a maximum of 12 scoring hits can be attained. What is the maximum number of procedurals for that fault?",
        "correct": "12",
        "options": [
          "12",
          "11",
          "13",
          "14"
        ],
        "note": "Multiple penalties for the fault are capped by the scoring hits attainable.",
        "family": "10.2.3",
        "id": "8ba2c28d0727460d"
      },
      {
        "rule": "11.3.2",
        "prompt": "The Arbitration Committee receives a request at 13:10 on Saturday. Final results are scheduled to be declared at 12:50 on Sunday. What is the latest time the committee may rule under that schedule?",
        "correct": "Before 12:50 on Sunday",
        "options": [
          "Before 12:50 on Sunday",
          "By 13:10 on Sunday",
          "By 13:30 on Sunday",
          "Before 12:50 on Monday"
        ],
        "note": "The earlier limit is the declaration of final results.",
        "family": "11.3.2",
        "id": "75069bcdc82cd29e"
      }
    ]
  },
  {
    "id": "22lr-handgun",
    "name": ".22LR Handgun",
    "group": "Rimfire",
    "book": "https://drive.google.com/file/d/1yNy2qRrA0NmTHd9z039T2r3kgTxIyzH5/view",
    "questions": [
      {
        "rule": "1.2.1.3",
        "prompt": "What is the maximum required round count for a Long Course?",
        "correct": "32",
        "options": [
          "32",
          "28",
          "30",
          "34"
        ],
        "note": "",
        "family": "1.2.1.3",
        "id": "75d70cfbd8cd3e31"
      },
      {
        "rule": "Appendix D2, item 13",
        "prompt": "What is the Standard Division limit per accessible magazine at the Start Signal?",
        "correct": "10 rounds",
        "options": [
          "10 rounds",
          "8 rounds",
          "9 rounds",
          "11 rounds"
        ],
        "note": "",
        "family": "Appendix D2, item 13",
        "id": "e8f94177127d7dd6"
      },
      {
        "rule": "Appendix D3, item 12.1",
        "prompt": "What is the maximum outside width of a Classic Division magazine well?",
        "correct": "35 mm",
        "options": [
          "35 mm",
          "32 mm",
          "34 mm",
          "36 mm"
        ],
        "note": "",
        "family": "Appendix D3, item 12.1",
        "id": "791af619579014e7"
      },
      {
        "rule": "Appendix D2, item 12",
        "prompt": "Which porting is allowed in .22LR Handgun Standard Division?",
        "correct": "Slide porting only",
        "options": [
          "Slide porting only",
          "Barrel porting only",
          "Both slide and barrel porting",
          "Neither slide nor barrel porting"
        ],
        "note": "",
        "family": "Appendix D2, item 12",
        "id": "741eb3cad30662b9"
      },
      {
        "rule": "2.1.3",
        "prompt": "While metal targets are being shot, what minimum distance must be maintained?",
        "correct": "7 m",
        "options": [
          "7 m",
          "6 m",
          "8 m",
          "9 m"
        ],
        "note": "If a Fault Line is used to limit the approach, it must be placed at least 8 m away.",
        "family": "2.1.3",
        "id": "36549773fe6c1e04"
      },
      {
        "rule": "9.4.2",
        "prompt": "Three hits are visible in the scoring area of a single paper no-shoot. What penalty is assessed on that no-shoot?",
        "correct": "−20 points",
        "options": [
          "−20 points",
          "−10 points",
          "−25 points",
          "−30 points"
        ],
        "note": "Two hits at most are penalized on a single paper no-shoot, at 10 points each.",
        "family": "9.4.2",
        "id": "3e71e77f78236b79"
      },
      {
        "rule": "3.2.3",
        "prompt": "Between squads, the written stage briefing needs a clarification for consistency. Who has the authority to amend it?",
        "correct": "Range Master",
        "options": [
          "Range Master",
          "Chief Range Officer",
          "Range Officer",
          "Match Director"
        ],
        "note": "",
        "family": "3.2.3",
        "id": "24be4f173f88362d"
      },
      {
        "rule": "9.1.3",
        "prompt": "A paper target is patched before scoring and the original score cannot be determined. What must the Range Officer order?",
        "correct": "A reshoot of the entire course of fire",
        "options": [
          "A reshoot of the entire course of fire",
          "A reshoot of the affected target only",
          "A rescore using the minimum possible target score",
          "A rescore using the maximum possible target score"
        ],
        "note": "",
        "family": "9.1.3",
        "id": "84e73bae40fef1d1"
      },
      {
        "rule": "10.2.4",
        "prompt": "A competitor fires two shots after the point where a mandatory reload was required, then reloads and fires one more. How many procedural penalties apply for the missed reload?",
        "correct": "2",
        "options": [
          "2",
          "1",
          "3",
          "0"
        ],
        "note": "Count each shot after the required reload point until the reload is performed.",
        "family": "10.2.4",
        "id": "1799ef99d814ab1b"
      },
      {
        "rule": "11.3.1",
        "prompt": "A disputed call is recorded by Match Officials at 13:20. By what time must the written arbitration appeal and applicable fee be submitted to the Range Master?",
        "correct": "14:20",
        "options": [
          "14:20",
          "13:50",
          "14:05",
          "14:50"
        ],
        "note": "The submission window is one hour from the recorded time of the disputed call.",
        "family": "11.3.1",
        "id": "78d8cac4ae7947d1"
      },
      {
        "rule": "9.5.2",
        "prompt": "A hit on a scoring paper target touches the line between two scoring zones. Which value counts?",
        "correct": "The higher of the two zone values",
        "options": [
          "The higher of the two zone values",
          "The lower of the two zone values",
          "The zone containing most of the hit",
          "The zone containing the centre of the hit"
        ],
        "note": "",
        "family": "9.5.2",
        "id": "14d00d4c36342c41"
      },
      {
        "rule": "9.2.2",
        "prompt": "To how many decimal places are individual stage points calculated for stage ranking?",
        "correct": "4",
        "options": [
          "4",
          "2",
          "3",
          "5"
        ],
        "note": "",
        "family": "9.2.2",
        "id": "9e45b306a23c2492"
      },
      {
        "rule": "3.2.4",
        "prompt": "Who sets the duration of the squad’s stage walkthrough?",
        "correct": "Range Officer",
        "options": [
          "Range Officer",
          "Chief Range Officer",
          "Range Master",
          "Match Director"
        ],
        "note": "",
        "family": "3.2.4",
        "id": "2f38cfa6c5d892fc"
      },
      {
        "rule": "3.2.4",
        "prompt": "Moving targets are demonstrated during walkthroughs. What must be consistent across competitors?",
        "correct": "Both duration and frequency",
        "options": [
          "Both duration and frequency",
          "Duration only",
          "Frequency only",
          "Neither duration nor frequency"
        ],
        "note": "",
        "family": "3.2.4",
        "id": "02fb5729cb9e04e5"
      },
      {
        "rule": "4.6.1",
        "prompt": "A competitor adjusts a target stand without authorization during inspection. What penalty may the Range Officer impose for each occurrence?",
        "correct": "One procedural penalty",
        "options": [
          "One procedural penalty",
          "Two procedural penalties",
          "One miss penalty",
          "Two miss penalties"
        ],
        "note": "",
        "family": "4.6.1",
        "id": "5ad2ec3127f1aa75"
      },
      {
        "rule": "6.2.6",
        "prompt": "A competitor is disqualified in a later Division after completing a separate Division at the same match. What happens to the complete earlier score?",
        "correct": "It stays in the results for the earlier Division",
        "options": [
          "It stays in the results for the earlier Division",
          "It stays in the results for the later Division",
          "It is removed from the earlier Division results",
          "It is kept only if the disqualification is overturned"
        ],
        "note": "",
        "family": "6.2.6",
        "id": "2bb09b780d6cd1cf"
      },
      {
        "rule": "6.6.1",
        "prompt": "A competitor misses the scheduled time for a stage. Whose prior approval is required to attempt the stage later?",
        "correct": "Match Director",
        "options": [
          "Match Director",
          "Range Master",
          "Chief Range Officer",
          "Range Officer"
        ],
        "note": "",
        "family": "6.6.1",
        "id": "1313eda1e157a923"
      },
      {
        "rule": "7.1.1",
        "prompt": "Who declares a competitor’s time, scores and penalties on the stage and verifies they are recorded correctly?",
        "correct": "Range Officer",
        "options": [
          "Range Officer",
          "Chief Range Officer",
          "Stats Officer",
          "Range Master"
        ],
        "note": "",
        "family": "7.1.1",
        "id": "0b424efb218f7879"
      },
      {
        "rule": "7.1.2",
        "prompt": "Which official has primary authority over the courses of fire specifically assigned to them, under the Range Master?",
        "correct": "Chief Range Officer",
        "options": [
          "Chief Range Officer",
          "Range Officer",
          "Stats Officer",
          "Match Director"
        ],
        "note": "",
        "family": "7.1.2",
        "id": "c118375a6b2b5323"
      },
      {
        "rule": "7.1.3",
        "prompt": "Who supervises the team that processes score sheets and produces provisional and final results?",
        "correct": "Stats Officer",
        "options": [
          "Stats Officer",
          "Chief Range Officer",
          "Range Master",
          "Quartermaster"
        ],
        "note": "",
        "family": "7.1.3",
        "id": "704c770dd49cbacc"
      },
      {
        "rule": "7.1.4",
        "prompt": "Who is responsible for distributing and maintaining targets, timers and other range equipment?",
        "correct": "Quartermaster",
        "options": [
          "Quartermaster",
          "Chief Range Officer",
          "Range Master",
          "Stats Officer"
        ],
        "note": "",
        "family": "7.1.4",
        "id": "b01b090191e21d17"
      },
      {
        "rule": "7.1.5",
        "prompt": "Which official has overall authority for range safety and rule application across the entire match range?",
        "correct": "Range Master",
        "options": [
          "Range Master",
          "Chief Range Officer",
          "Range Officer",
          "Match Director"
        ],
        "note": "",
        "family": "7.1.5",
        "id": "bfc335ecb25270a0"
      },
      {
        "rule": "8.3.5",
        "prompt": "The Range Officer calls “Stop” during an attempt. Which response is required?",
        "correct": "Stop firing and moving immediately and await instructions",
        "options": [
          "Stop firing and moving immediately and await instructions",
          "Stop firing immediately but finish moving to the next position",
          "Stop moving immediately but finish engaging the current target",
          "Stop firing and moving once the current target has been engaged"
        ],
        "note": "",
        "family": "8.3.5",
        "id": "26049216f3858162"
      },
      {
        "rule": "8.3.8",
        "prompt": "Which declaration authorizes personnel to move forward from the final shooting location for scoring and reset?",
        "correct": "Range Is Clear",
        "options": [
          "Range Is Clear",
          "Are You Ready?",
          "If You Are Finished, Unload And Show Clear",
          "Stop"
        ],
        "note": "",
        "family": "8.3.8",
        "id": "f33938909cd6cc60"
      },
      {
        "rule": "9.1.1",
        "prompt": "During scoring, what minimum distance must a competitor keep from a target unless the Range Officer gives permission to approach?",
        "correct": "1 m",
        "options": [
          "1 m",
          "0.5 m",
          "1.5 m",
          "2 m"
        ],
        "note": "",
        "family": "9.1.1",
        "id": "2d30e249199e32da"
      },
      {
        "rule": "9.1.1",
        "prompt": "A competitor approaches a target closer than 1 m without authorization during scoring. What is the sanction for a first offense?",
        "correct": "A warning",
        "options": [
          "A warning",
          "One automatic procedural penalty",
          "One automatic miss penalty",
          "A warning plus one procedural penalty"
        ],
        "note": "",
        "family": "9.1.1",
        "id": "a0c109e9369b02a9"
      },
      {
        "rule": "9.1.4",
        "prompt": "An unrestored target has extra scoring hits. The Range Officer cannot tell which hits belong to the competitor being scored. What is required?",
        "correct": "A reshoot of the course of fire",
        "options": [
          "A reshoot of the course of fire",
          "A reshoot of the target only",
          "A score using only the lowest possible hits",
          "A score using only the highest possible hits"
        ],
        "note": "",
        "family": "9.1.4",
        "id": "d865d4a181049ade"
      },
      {
        "rule": "9.1.5.1",
        "prompt": "A shot passes wholly through the scoring area of a paper target and then strikes the scoring area of a second paper scoring target. How is the second hit treated?",
        "correct": "It does not count for score",
        "options": [
          "It does not count for score",
          "It scores at its full zone value",
          "It scores at the lowest zone value",
          "It counts as a miss penalty on the second target"
        ],
        "note": "",
        "family": "9.1.5.1",
        "id": "709366270d24cc45"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Under Comstock, which calculation produces a hit factor?",
        "correct": "Target points minus penalties, then divide by time",
        "options": [
          "Target points minus penalties, then divide by time",
          "Target points divided by time, then subtract penalties",
          "Target points minus penalties, then multiply by time",
          "Time divided by target points minus penalties"
        ],
        "note": "",
        "family": "9.2.1.1",
        "id": "2fb26c1e715568ff"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Which competitor receives the maximum stage points available under Comstock?",
        "correct": "The competitor with the highest hit factor",
        "options": [
          "The competitor with the highest hit factor",
          "The competitor with the highest raw target points",
          "The competitor with the fastest recorded time",
          "The competitor with the lowest penalty total"
        ],
        "note": "",
        "family": "9.2.1.1",
        "id": "b034328d19a8c134"
      },
      {
        "rule": "9.2.3",
        "prompt": "Which quantity determines the final ranking within a Division?",
        "correct": "The sum of individual stage points",
        "options": [
          "The sum of individual stage points",
          "The sum of individual stage hit factors",
          "The sum of raw target points before factoring",
          "The average of individual stage placing positions"
        ],
        "note": "",
        "family": "9.2.3",
        "id": "de2a1ae18dce11e2"
      },
      {
        "rule": "9.3.1",
        "prompt": "The Match Director decides a tie must be broken. What does the tiebreaker change?",
        "correct": "Only the final placing of the tied competitors",
        "options": [
          "Only the final placing of the tied competitors",
          "The placing and original match points of the tied competitors",
          "The placing of every competitor in the Division",
          "The original match points without changing the placing"
        ],
        "note": "",
        "family": "9.3.1",
        "id": "0fdc055c5d39575a"
      },
      {
        "rule": "9.6.1",
        "prompt": "After “Range Is Clear” on a stage with ordinary paper targets, who may accompany the scoring official to verify the score?",
        "correct": "The competitor or their delegate",
        "options": [
          "The competitor or their delegate",
          "Only the competitor personally",
          "Only the competitor’s delegate",
          "Only the squad leader"
        ],
        "note": "",
        "family": "9.6.1",
        "id": "aa45c8d054c1ff8b"
      },
      {
        "rule": "9.6.2",
        "prompt": "The Range Officer intends to start scoring paper targets before the competitor finishes the stage. When must competitors be advised?",
        "correct": "During the squad briefing",
        "options": [
          "During the squad briefing",
          "After the Start Signal",
          "After the competitor’s last shot",
          "When provisional results are posted"
        ],
        "note": "",
        "family": "9.6.2",
        "id": "f7c24a4496425719"
      },
      {
        "rule": "9.6.3",
        "prompt": "Neither the competitor nor their delegate verifies a target during scoring. What happens to the right to appeal the scoring of that target?",
        "correct": "It is lost",
        "options": [
          "It is lost",
          "It stays open until the target is reset",
          "It stays open until the score sheet is signed",
          "It stays open until provisional results are posted"
        ],
        "note": "",
        "family": "9.6.3",
        "id": "5ff0c66acb294d60"
      },
      {
        "rule": "9.6.4",
        "prompt": "Who must first receive a challenge to the score on a target before it is patched?",
        "correct": "Range Officer",
        "options": [
          "Range Officer",
          "Chief Range Officer",
          "Range Master",
          "Stats Officer"
        ],
        "note": "",
        "family": "9.6.4",
        "id": "ec57f181f231d00b"
      },
      {
        "rule": "9.7.4",
        "prompt": "A score sheet is signed by both the competitor and Range Officer. With no mutual consent and no arbitration decision, which change is explicitly permitted?",
        "correct": "Correcting an arithmetic error",
        "options": [
          "Correcting an arithmetic error",
          "Re-evaluating a disputed scoring-zone hit",
          "Changing the recorded time based on a squad member’s estimate",
          "Adding a miss based on a later recollection"
        ],
        "note": "",
        "family": "9.7.4",
        "id": "e73cef78ffc6e010"
      },
      {
        "rule": "9.7.5",
        "prompt": "A score sheet has excess entries. To whom must it promptly be referred?",
        "correct": "Range Master",
        "options": [
          "Range Master",
          "Chief Range Officer",
          "Stats Officer",
          "Match Director"
        ],
        "note": "",
        "family": "9.7.5",
        "id": "e89fc7b2c365ea93"
      },
      {
        "rule": "9.7.6.1",
        "prompt": "A stage time is missing from the score sheet and a reshoot is impossible. What is the stage score?",
        "correct": "Zero",
        "options": [
          "Zero",
          "The raw target points minus penalties",
          "The division’s average stage score",
          "The competitor’s average score from the other stages"
        ],
        "note": "",
        "family": "9.7.6.1",
        "id": "164d6cc592c33b90"
      },
      {
        "rule": "9.7.7",
        "prompt": "The original score sheet is lost. The competitor has a legible duplicate acceptable to the Range Master. What is used?",
        "correct": "The competitor’s duplicate",
        "options": [
          "The competitor’s duplicate",
          "A reshoot regardless of the duplicate",
          "A zero score regardless of the duplicate",
          "The squad’s median score"
        ],
        "note": "",
        "family": "9.7.7",
        "id": "9f7a3ce2c9f20e67"
      },
      {
        "rule": "9.8.2",
        "prompt": "At Level IV, where must provisional stage results be posted after all competitors finish?",
        "correct": "At the range and the official match hotel",
        "options": [
          "At the range and the official match hotel",
          "At the range only",
          "At the official match hotel only",
          "At the range and the nearest hotel"
        ],
        "note": "",
        "family": "9.8.2",
        "id": "647b5a758a1113f2"
      },
      {
        "rule": "9.8.3",
        "prompt": "A competitor detects an error in the published provisional stage results. With whom must the appeal be filed?",
        "correct": "Stats Officer",
        "options": [
          "Stats Officer",
          "Chief Range Officer",
          "Range Master",
          "Match Director"
        ],
        "note": "",
        "family": "9.8.3",
        "id": "57791f0ed3b424b0"
      },
      {
        "rule": "9.9.1",
        "prompt": "A moving paper target presents part of its A zone at rest after activation. How is it classified?",
        "correct": "Non-disappearing",
        "options": [
          "Non-disappearing",
          "Disappearing unless the full A zone remains visible",
          "Disappearing unless part of the A zone was visible before activation too",
          "Disappearing because the target moves"
        ],
        "note": "",
        "family": "9.9.1",
        "id": "62043a204521db1d"
      },
      {
        "rule": "9.9.2",
        "prompt": "A genuinely disappearing target is activated before the last shot, but never engaged. Which of the following applies to that target?",
        "correct": "Neither a miss nor a failure-to-engage penalty",
        "options": [
          "Neither a miss nor a failure-to-engage penalty",
          "A miss penalty only",
          "A failure-to-engage penalty only",
          "Both a miss and a failure-to-engage penalty"
        ],
        "note": "",
        "family": "9.9.2",
        "id": "a24aa249ff5c8fb5"
      },
      {
        "rule": "9.9.3",
        "prompt": "A stationary target is partly concealed by a moving vision barrier. Part of its A zone remains exposed after activation. How is the target classified?",
        "correct": "Non-disappearing",
        "options": [
          "Non-disappearing",
          "Disappearing unless its full A zone is exposed",
          "Disappearing because the barrier moves",
          "Disappearing unless the barrier itself is a scoring target"
        ],
        "note": "",
        "family": "9.9.3",
        "id": "32b991228b675bae"
      },
      {
        "rule": "10.1.1",
        "prompt": "What must be recorded for procedural penalties on the score sheet?",
        "correct": "Both the number and the reason",
        "options": [
          "Both the number and the reason",
          "The number only",
          "The reason only",
          "The number and the competitor’s agreement"
        ],
        "note": "",
        "family": "10.1.1",
        "id": "98d216ec3d12862b"
      },
      {
        "rule": "10.1.4",
        "prompt": "A competitor fires while faulting a line, then fires at the same target from inside the line. What happens to the original applicable fault penalty?",
        "correct": "It still applies",
        "options": [
          "It still applies",
          "It is removed if the later shot hits",
          "It is removed if both shots hit",
          "It is changed to a miss if the later shot hits"
        ],
        "note": "",
        "family": "10.1.4",
        "id": "11b671e372d1b1db"
      },
      {
        "rule": "10.2.1",
        "prompt": "A competitor touches the ground beyond a Fault Line while shooting without gaining a significant advantage. How is the penalty normally counted?",
        "correct": "One per occurrence",
        "options": [
          "One per occurrence",
          "One per shot regardless of advantage",
          "One per target engaged",
          "One per scoring hit"
        ],
        "note": "",
        "family": "10.2.1",
        "id": "2687007cbe9cade2"
      },
      {
        "rule": "10.2.2",
        "prompt": "A competitor ignores a written stage procedure and gains a significant advantage. What penalty basis may apply in place of a single penalty for the occurrence?",
        "correct": "One per shot fired during the breach, subject to the applicable cap",
        "options": [
          "One per shot fired during the breach, subject to the applicable cap",
          "One per scoring hit during the breach, subject to the applicable cap",
          "One per target engaged during the breach, subject to the applicable cap",
          "One per shot fired after the breach ended, subject to the applicable cap"
        ],
        "note": "",
        "family": "10.2.2",
        "id": "acf60b7a43e61d24"
      },
      {
        "rule": "10.2.6",
        "prompt": "The Range Officer stops a competitor in time for a first instance of creeping after “Standby” and before the signal. What follows?",
        "correct": "A warning and a restart",
        "options": [
          "A warning and a restart",
          "A procedural penalty and a restart",
          "A warning without a restart",
          "A procedural penalty without a restart"
        ],
        "note": "",
        "family": "10.2.6",
        "id": "d0aa312c30a9e68f"
      },
      {
        "rule": "10.2.7",
        "prompt": "A competitor fails to engage a non-disappearing scoring target. What normally applies?",
        "correct": "One procedural per target plus applicable misses",
        "options": [
          "One procedural per target plus applicable misses",
          "One procedural per target instead of applicable misses",
          "One procedural per missed hit plus applicable misses",
          "Applicable misses only"
        ],
        "note": "",
        "family": "10.2.7",
        "id": "3b6f1c3d22f37ba8"
      },
      {
        "rule": "10.3.2",
        "prompt": "After issuing a disqualification, who must be notified as soon as possible?",
        "correct": "Range Master",
        "options": [
          "Range Master",
          "Chief Range Officer",
          "Stats Officer",
          "Match Director"
        ],
        "note": "",
        "family": "10.3.2",
        "id": "1e60f82bfdebcdb7"
      },
      {
        "rule": "11.1.3",
        "prompt": "A competitor disputes an initial Range Officer ruling. Which is the normal next level before the Range Master?",
        "correct": "Chief Range Officer",
        "options": [
          "Chief Range Officer",
          "Stats Officer",
          "Match Director",
          "Quartermaster"
        ],
        "note": "",
        "family": "11.1.3",
        "id": "e269dacafee493b9"
      },
      {
        "rule": "11.3.2",
        "prompt": "When must the Arbitration Committee reach its decision?",
        "correct": "Within 24 hours of the request or before final results are declared, whichever comes first",
        "options": [
          "Within 24 hours of the request or before final results are declared, whichever comes first",
          "Within 24 hours of the request or before final results are declared, whichever comes last",
          "Within 12 hours of the request or before final results are declared, whichever comes first",
          "Within 24 hours of the disputed call or before final results are declared, whichever comes first"
        ],
        "note": "",
        "family": "11.3.2",
        "id": "ab7a04fd99f427cc"
      },
      {
        "rule": "11.4.1",
        "prompt": "At a Level III match, which amount determines the arbitration fee in local currency?",
        "correct": "The lower of US$100 and the maximum individual entry fee",
        "options": [
          "The lower of US$100 and the maximum individual entry fee",
          "The higher of US$100 and the maximum individual entry fee",
          "The lower of US$100 and the minimum individual entry fee",
          "The maximum individual entry fee regardless of US$100"
        ],
        "note": "",
        "family": "11.4.1",
        "id": "d660fd589e3be129"
      },
      {
        "rule": "11.6.2",
        "prompt": "Who implements and posts the Arbitration Committee’s decision?",
        "correct": "Range Master",
        "options": [
          "Range Master",
          "Chief Range Officer",
          "Stats Officer",
          "Match Director"
        ],
        "note": "",
        "family": "11.6.2",
        "id": "b42ae1c861a560b7"
      },
      {
        "rule": "11.6.4",
        "prompt": "For what can a recorded Arbitration Committee decision serve as precedent?",
        "correct": "A similar subsequent incident at the same match",
        "options": [
          "A similar subsequent incident at the same match",
          "A similar earlier incident at the same match",
          "Any subsequent incident at the same match",
          "A similar incident only at the next match"
        ],
        "note": "",
        "family": "11.6.4",
        "id": "3487c77fa189a244"
      },
      {
        "rule": "11.7.1",
        "prompt": "May someone other than the competitor involved submit an appeal on a third-party basis?",
        "correct": "Yes, under the same Chapter 11 provisions",
        "options": [
          "Yes, under the same Chapter 11 provisions",
          "Yes, with a separate deadline set by the squad",
          "Yes, but only at Level IV and above",
          "No, only the competitor involved may appeal"
        ],
        "note": "",
        "family": "11.7.1",
        "id": "efd6cd40b8400be5"
      },
      {
        "rule": "1.2.1.1",
        "prompt": "A proposed Short Course requires 13 rounds to complete. To what maximum must the required count be reduced?",
        "correct": "12",
        "options": [
          "12",
          "10",
          "11",
          "13"
        ],
        "note": "",
        "family": "1.2.1.1",
        "id": "c65d36bafee45bc1"
      },
      {
        "rule": "1.2.1.2",
        "prompt": "A proposed Medium Course requires 26 rounds to complete. What maximum required count applies?",
        "correct": "24",
        "options": [
          "24",
          "22",
          "23",
          "25"
        ],
        "note": "",
        "family": "1.2.1.2",
        "id": "790ef3fb772e32dd"
      },
      {
        "rule": "1.2.1.3",
        "prompt": "What is the maximum number of scoring hits a Long Course may require from a single location or view?",
        "correct": "9",
        "options": [
          "9",
          "8",
          "10",
          "11"
        ],
        "note": "",
        "family": "1.2.1.3",
        "id": "425e78f468724949"
      },
      {
        "rule": "5.1.11 · February 2026 interpretation",
        "prompt": "How does the February 2026 interpretation treat a firearm fitted with a forced reset trigger?",
        "correct": "It is prohibited",
        "options": [
          "It is prohibited",
          "It is permitted in Open only",
          "It is permitted in any division with a trigger weight check",
          "It is permitted only in Level I and II matches"
        ],
        "note": "",
        "family": "5.1.11 · February 2026 interpretation",
        "id": "3b3a8ef5e6f9580b"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Under Comstock, a competitor earns 35 target points, receives 10 penalty points and finishes in 5.00 seconds. What is the hit factor, rounded to four decimals?",
        "correct": "5.0000",
        "options": [
          "5.0000",
          "7.0000",
          "6.0000",
          "9.0000"
        ],
        "note": "Subtract penalties from target points before dividing by time.",
        "family": "comstock-hit-factor",
        "id": "21196cb03e879fbf"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "A 40-point stage is won with a hit factor of 8. A competitor records a hit factor of 4.0. How many stage points does the competitor earn?",
        "correct": "20.00",
        "options": [
          "20.00",
          "18.00",
          "19.00",
          "21.00"
        ],
        "note": "Multiply the available stage points by the competitor’s hit factor divided by the winner’s hit factor.",
        "family": "comstock-stage-points",
        "id": "3b223b933ed2c978"
      },
      {
        "rule": "9.2.3",
        "prompt": "A competitor earns 31.2750, 24.6425 and 19.3850 stage points in the three stages of a match. What is the match total?",
        "correct": "75.3025",
        "options": [
          "75.3025",
          "75.4025",
          "75.2025",
          "76.3025"
        ],
        "note": "",
        "family": "match-total",
        "id": "84eed92ac69be18f"
      },
      {
        "rule": "10.2.4",
        "prompt": "A competitor fires 1 shots before a mandatory reload point, 1 shots after it without reloading, and 2 shots after finally reloading. How many procedural penalties apply to the reload violation?",
        "correct": "1",
        "options": [
          "1",
          "0",
          "2",
          "3"
        ],
        "note": "Count only shots after the required reload point and before the reload.",
        "family": "10.2.4",
        "id": "b13c6a5f1fe012ab"
      },
      {
        "rule": "10.2.5",
        "prompt": "In a Cooper Tunnel, direct contact with the overhead material drops 1 pieces. Bumping an upright drops another 1. How many procedural penalties apply?",
        "correct": "1",
        "options": [
          "1",
          "0",
          "2",
          "3"
        ],
        "note": "Pieces that fall from striking an upright are exempt.",
        "family": "10.2.5",
        "id": "2bc7b9ec0789807c"
      },
      {
        "rule": "10.1.2",
        "prompt": "The Range Officer assesses 3 procedural penalties. What is the total point deduction for these penalties?",
        "correct": "30 points",
        "options": [
          "30 points",
          "10 points",
          "20 points",
          "40 points"
        ],
        "note": "",
        "family": "10.1.2",
        "id": "b3c678f4a8413c91"
      },
      {
        "rule": "10.2.1",
        "prompt": "A competitor fires 2 shots on each of 2 separate Fault Line breaches, re-entering fully between breaches and gaining no significant advantage. How many procedural penalties apply?",
        "correct": "2",
        "options": [
          "2",
          "1",
          "3",
          "4"
        ],
        "note": "With no significant advantage, count the separate occurrences.",
        "family": "10.2.1",
        "id": "65d0e1630759337f"
      },
      {
        "rule": "11.3.1",
        "prompt": "Match Officials record a disputed call at 08:00. The competitor talks to the Chief Range Officer 15 minutes later. What is the deadline to submit a written arbitration appeal and fee to the Range Master?",
        "correct": "09:00",
        "options": [
          "09:00",
          "08:45",
          "09:15",
          "09:30"
        ],
        "note": "",
        "family": "11.3.1",
        "id": "e73f27d96024f83f"
      },
      {
        "rule": "9.8.3",
        "prompt": "The provisional results show a timestamp of 12:00, but were actually posted at 12:11. What is the deadline for a competitor to file a results appeal with the Stats Officer?",
        "correct": "13:11",
        "options": [
          "13:11",
          "12:56",
          "13:26",
          "13:41"
        ],
        "note": "",
        "family": "9.8.3",
        "id": "dc0d2ecaa091ddbb"
      },
      {
        "rule": "11.4.1",
        "prompt": "At a Level III match the maximum individual entry fee is equivalent to US$58. What is the arbitration fee equivalent in local currency?",
        "correct": "US$58",
        "options": [
          "US$58",
          "US$100",
          "US$53",
          "US$63"
        ],
        "note": "Use the lower of US$100 and the maximum individual entry fee.",
        "family": "11.4.1",
        "id": "34d89f1347aee01f"
      },
      {
        "rule": "9.4.2",
        "prompt": "Three paper no-shoots show 1, 1 and 0 hits in their scoring areas, respectively. What is the combined point deduction?",
        "correct": "20 points",
        "options": [
          "20 points",
          "10 points",
          "25 points",
          "30 points"
        ],
        "note": "Count 10 points per hit, capped at two hits on each paper no-shoot.",
        "family": "9.4.2",
        "id": "2ed02131abe1ee01"
      },
      {
        "rule": "10.2.7",
        "prompt": "A competitor leaves 3 non-disappearing scoring targets completely unengaged. They engage the other 2 targets. Before adding any misses, how many failure-to-engage procedurals apply?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "",
        "family": "10.2.7",
        "id": "74b0110053b22816"
      },
      {
        "rule": "10.2.3",
        "prompt": "While faulting a line, a competitor fires 7 shots and gains a significant advantage. From that position a maximum of 2 scoring hits can be attained. What is the maximum number of procedurals for that fault?",
        "correct": "2",
        "options": [
          "2",
          "1",
          "3",
          "4"
        ],
        "note": "Multiple penalties for the fault are capped by the scoring hits attainable.",
        "family": "10.2.3",
        "id": "a67f0a3b80d3499d"
      },
      {
        "rule": "11.3.2",
        "prompt": "The Arbitration Committee receives a request at 10:00 on Saturday. Final results are scheduled to be declared at 09:40 on Sunday. What is the latest time the committee may rule under that schedule?",
        "correct": "Before 09:40 on Sunday",
        "options": [
          "Before 09:40 on Sunday",
          "By 10:00 on Sunday",
          "By 10:20 on Sunday",
          "Before 09:40 on Monday"
        ],
        "note": "The earlier limit is the declaration of final results.",
        "family": "11.3.2",
        "id": "bc60703e734bf1ae"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Under Comstock, a competitor earns 40 target points, receives 20 penalty points and finishes in 6.00 seconds. What is the hit factor, rounded to four decimals?",
        "correct": "3.3333",
        "options": [
          "3.3333",
          "6.6667",
          "5.0000",
          "10.0000"
        ],
        "note": "Subtract penalties from target points before dividing by time.",
        "family": "comstock-hit-factor",
        "id": "221b267a71db93cf"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "A 50-point stage is won with a hit factor of 9. A competitor records a hit factor of 5.4. How many stage points does the competitor earn?",
        "correct": "30.00",
        "options": [
          "30.00",
          "28.00",
          "29.00",
          "31.00"
        ],
        "note": "Multiply the available stage points by the competitor’s hit factor divided by the winner’s hit factor.",
        "family": "comstock-stage-points",
        "id": "9ba6132933144df4"
      },
      {
        "rule": "9.2.3",
        "prompt": "A competitor earns 33.2750, 25.6425 and 22.3850 stage points in the three stages of a match. What is the match total?",
        "correct": "81.3025",
        "options": [
          "81.3025",
          "81.4025",
          "81.2025",
          "82.3025"
        ],
        "note": "",
        "family": "match-total",
        "id": "2a2ddc7a971836c3"
      },
      {
        "rule": "10.2.4",
        "prompt": "A competitor fires 2 shots before a mandatory reload point, 1 shots after it without reloading, and 3 shots after finally reloading. How many procedural penalties apply to the reload violation?",
        "correct": "1",
        "options": [
          "1",
          "0",
          "2",
          "3"
        ],
        "note": "Count only shots after the required reload point and before the reload.",
        "family": "10.2.4",
        "id": "762cf162802b119a"
      },
      {
        "rule": "10.2.5",
        "prompt": "In a Cooper Tunnel, direct contact with the overhead material drops 2 pieces. Bumping an upright drops another 1. How many procedural penalties apply?",
        "correct": "2",
        "options": [
          "2",
          "1",
          "3",
          "4"
        ],
        "note": "Pieces that fall from striking an upright are exempt.",
        "family": "10.2.5",
        "id": "530bd84ef8b47216"
      },
      {
        "rule": "10.1.2",
        "prompt": "The Range Officer assesses 4 procedural penalties. What is the total point deduction for these penalties?",
        "correct": "40 points",
        "options": [
          "40 points",
          "20 points",
          "30 points",
          "50 points"
        ],
        "note": "",
        "family": "10.1.2",
        "id": "a7aaa4caf4f065cd"
      },
      {
        "rule": "10.2.1",
        "prompt": "A competitor fires 2 shots on each of 3 separate Fault Line breaches, re-entering fully between breaches and gaining no significant advantage. How many procedural penalties apply?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "With no significant advantage, count the separate occurrences.",
        "family": "10.2.1",
        "id": "b6d742daab217181"
      },
      {
        "rule": "11.3.1",
        "prompt": "Match Officials record a disputed call at 08:23. The competitor talks to the Chief Range Officer 15 minutes later. What is the deadline to submit a written arbitration appeal and fee to the Range Master?",
        "correct": "09:23",
        "options": [
          "09:23",
          "09:08",
          "09:38",
          "09:53"
        ],
        "note": "",
        "family": "11.3.1",
        "id": "fd2b9c3ae8f0e93c"
      },
      {
        "rule": "9.8.3",
        "prompt": "The provisional results show a timestamp of 12:17, but were actually posted at 12:29. What is the deadline for a competitor to file a results appeal with the Stats Officer?",
        "correct": "13:29",
        "options": [
          "13:29",
          "13:14",
          "13:44",
          "13:59"
        ],
        "note": "",
        "family": "9.8.3",
        "id": "75719e2f068672a0"
      },
      {
        "rule": "11.4.1",
        "prompt": "At a Level III match the maximum individual entry fee is equivalent to US$115. What is the arbitration fee equivalent in local currency?",
        "correct": "US$100",
        "options": [
          "US$100",
          "US$115",
          "US$95",
          "US$105"
        ],
        "note": "Use the lower of US$100 and the maximum individual entry fee.",
        "family": "11.4.1",
        "id": "7047ed8525176aec"
      },
      {
        "rule": "9.4.2",
        "prompt": "Three paper no-shoots show 2, 1 and 0 hits in their scoring areas, respectively. What is the combined point deduction?",
        "correct": "30 points",
        "options": [
          "30 points",
          "20 points",
          "35 points",
          "40 points"
        ],
        "note": "Count 10 points per hit, capped at two hits on each paper no-shoot.",
        "family": "9.4.2",
        "id": "c4db7b7a451a5a7d"
      },
      {
        "rule": "10.2.7",
        "prompt": "A competitor leaves 4 non-disappearing scoring targets completely unengaged. They engage the other 3 targets. Before adding any misses, how many failure-to-engage procedurals apply?",
        "correct": "4",
        "options": [
          "4",
          "3",
          "5",
          "6"
        ],
        "note": "",
        "family": "10.2.7",
        "id": "5f3e9af5d086e70f"
      },
      {
        "rule": "10.2.3",
        "prompt": "While faulting a line, a competitor fires 8 shots and gains a significant advantage. From that position a maximum of 3 scoring hits can be attained. What is the maximum number of procedurals for that fault?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "Multiple penalties for the fault are capped by the scoring hits attainable.",
        "family": "10.2.3",
        "id": "ebc3eaec4c4e60c1"
      },
      {
        "rule": "11.3.2",
        "prompt": "The Arbitration Committee receives a request at 10:19 on Saturday. The Match Director will declare the results final at 10:39 on Sunday. What deadline applies to the committee’s decision?",
        "correct": "By 10:19 on Sunday",
        "options": [
          "By 10:19 on Sunday",
          "Before 10:39 on Sunday",
          "By 09:59 on Sunday",
          "By 10:19 on Monday"
        ],
        "note": "The 24-hour deadline arrives before the declaration of final results.",
        "family": "11.3.2",
        "id": "e4ad89d611716d41"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Under Comstock, a competitor earns 45 target points, receives 30 penalty points and finishes in 7.00 seconds. What is the hit factor, rounded to four decimals?",
        "correct": "2.1429",
        "options": [
          "2.1429",
          "6.4286",
          "4.2857",
          "10.7143"
        ],
        "note": "Subtract penalties from target points before dividing by time.",
        "family": "comstock-hit-factor",
        "id": "811fb111204f1db3"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "A 60-point stage is won with a hit factor of 10. A competitor records a hit factor of 7.0. How many stage points does the competitor earn?",
        "correct": "42.00",
        "options": [
          "42.00",
          "40.00",
          "41.00",
          "43.00"
        ],
        "note": "Multiply the available stage points by the competitor’s hit factor divided by the winner’s hit factor.",
        "family": "comstock-stage-points",
        "id": "52ec8e4e492a485c"
      },
      {
        "rule": "9.2.3",
        "prompt": "A competitor earns 35.2750, 26.6425 and 25.3850 stage points in the three stages of a match. What is the match total?",
        "correct": "87.3025",
        "options": [
          "87.3025",
          "87.4025",
          "87.2025",
          "88.3025"
        ],
        "note": "",
        "family": "match-total",
        "id": "9de1b28afcc923d6"
      },
      {
        "rule": "10.2.4",
        "prompt": "A competitor fires 3 shots before a mandatory reload point, 1 shots after it without reloading, and 4 shots after finally reloading. How many procedural penalties apply to the reload violation?",
        "correct": "1",
        "options": [
          "1",
          "0",
          "2",
          "3"
        ],
        "note": "Count only shots after the required reload point and before the reload.",
        "family": "10.2.4",
        "id": "881a8b7504b60cad"
      },
      {
        "rule": "10.2.5",
        "prompt": "In a Cooper Tunnel, direct contact with the overhead material drops 3 pieces. Bumping an upright drops another 1. How many procedural penalties apply?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "Pieces that fall from striking an upright are exempt.",
        "family": "10.2.5",
        "id": "5137b4943cba8ec9"
      },
      {
        "rule": "10.1.2",
        "prompt": "The Range Officer assesses 5 procedural penalties. What is the total point deduction for these penalties?",
        "correct": "50 points",
        "options": [
          "50 points",
          "30 points",
          "40 points",
          "60 points"
        ],
        "note": "",
        "family": "10.1.2",
        "id": "8d6f73489143fdbe"
      },
      {
        "rule": "10.2.1",
        "prompt": "A competitor fires 2 shots on each of 4 separate Fault Line breaches, re-entering fully between breaches and gaining no significant advantage. How many procedural penalties apply?",
        "correct": "4",
        "options": [
          "4",
          "3",
          "5",
          "6"
        ],
        "note": "With no significant advantage, count the separate occurrences.",
        "family": "10.2.1",
        "id": "bfd45046f19468df"
      },
      {
        "rule": "11.3.1",
        "prompt": "Match Officials record a disputed call at 08:46. The competitor talks to the Chief Range Officer 15 minutes later. What is the deadline to submit a written arbitration appeal and fee to the Range Master?",
        "correct": "09:46",
        "options": [
          "09:46",
          "09:31",
          "10:01",
          "10:16"
        ],
        "note": "",
        "family": "11.3.1",
        "id": "1646ce84911500d6"
      },
      {
        "rule": "9.8.3",
        "prompt": "The provisional results show a timestamp of 12:34, but were actually posted at 12:47. What is the deadline for a competitor to file a results appeal with the Stats Officer?",
        "correct": "13:47",
        "options": [
          "13:47",
          "13:32",
          "14:02",
          "14:17"
        ],
        "note": "",
        "family": "9.8.3",
        "id": "f183f4405bae9693"
      },
      {
        "rule": "11.4.1",
        "prompt": "At a Level III match the maximum individual entry fee is equivalent to US$62. What is the arbitration fee equivalent in local currency?",
        "correct": "US$62",
        "options": [
          "US$62",
          "US$100",
          "US$57",
          "US$67"
        ],
        "note": "Use the lower of US$100 and the maximum individual entry fee.",
        "family": "11.4.1",
        "id": "2e62692cf1be487d"
      },
      {
        "rule": "9.4.2",
        "prompt": "Three paper no-shoots show 3, 1 and 0 hits in their scoring areas, respectively. What is the combined point deduction?",
        "correct": "30 points",
        "options": [
          "30 points",
          "20 points",
          "35 points",
          "40 points"
        ],
        "note": "Count 10 points per hit, capped at two hits on each paper no-shoot.",
        "family": "9.4.2",
        "id": "9d9d5b6426560ab7"
      },
      {
        "rule": "10.2.7",
        "prompt": "A competitor leaves 5 non-disappearing scoring targets completely unengaged. They engage the other 4 targets. Before adding any misses, how many failure-to-engage procedurals apply?",
        "correct": "5",
        "options": [
          "5",
          "4",
          "6",
          "7"
        ],
        "note": "",
        "family": "10.2.7",
        "id": "0d8a48f3191f4847"
      },
      {
        "rule": "10.2.3",
        "prompt": "While faulting a line, a competitor fires 9 shots and gains a significant advantage. From that position a maximum of 4 scoring hits can be attained. What is the maximum number of procedurals for that fault?",
        "correct": "4",
        "options": [
          "4",
          "3",
          "5",
          "6"
        ],
        "note": "Multiple penalties for the fault are capped by the scoring hits attainable.",
        "family": "10.2.3",
        "id": "0ef941d62c1d78e5"
      },
      {
        "rule": "11.3.2",
        "prompt": "The Arbitration Committee receives a request at 10:38 on Saturday. Final results are scheduled to be declared at 10:18 on Sunday. What is the latest time the committee may rule under that schedule?",
        "correct": "Before 10:18 on Sunday",
        "options": [
          "Before 10:18 on Sunday",
          "By 10:38 on Sunday",
          "By 10:58 on Sunday",
          "Before 10:18 on Monday"
        ],
        "note": "The earlier limit is the declaration of final results.",
        "family": "11.3.2",
        "id": "de38b1edabf021d6"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Under Comstock, a competitor earns 50 target points, receives 10 penalty points and finishes in 8.00 seconds. What is the hit factor, rounded to four decimals?",
        "correct": "5.0000",
        "options": [
          "5.0000",
          "6.2500",
          "5.6250",
          "7.5000"
        ],
        "note": "Subtract penalties from target points before dividing by time.",
        "family": "comstock-hit-factor",
        "id": "a9248c139a4373b7"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "A 70-point stage is won with a hit factor of 8. A competitor records a hit factor of 6.00. How many stage points does the competitor earn?",
        "correct": "52.50",
        "options": [
          "52.50",
          "50.50",
          "51.50",
          "53.50"
        ],
        "note": "Multiply the available stage points by the competitor’s hit factor divided by the winner’s hit factor.",
        "family": "comstock-stage-points",
        "id": "47f4cad0ab27e8ba"
      },
      {
        "rule": "9.2.3",
        "prompt": "A competitor earns 37.2750, 27.6425 and 28.3850 stage points in the three stages of a match. What is the match total?",
        "correct": "93.3025",
        "options": [
          "93.3025",
          "93.4025",
          "93.2025",
          "94.3025"
        ],
        "note": "",
        "family": "match-total",
        "id": "c9e15cec5e09ea03"
      },
      {
        "rule": "10.2.4",
        "prompt": "A competitor fires 4 shots before a mandatory reload point, 2 shots after it without reloading, and 2 shots after finally reloading. How many procedural penalties apply to the reload violation?",
        "correct": "2",
        "options": [
          "2",
          "1",
          "3",
          "4"
        ],
        "note": "Count only shots after the required reload point and before the reload.",
        "family": "10.2.4",
        "id": "006d194da76716db"
      },
      {
        "rule": "10.2.5",
        "prompt": "In a Cooper Tunnel, direct contact with the overhead material drops 4 pieces. Bumping an upright drops another 1. How many procedural penalties apply?",
        "correct": "4",
        "options": [
          "4",
          "3",
          "5",
          "6"
        ],
        "note": "Pieces that fall from striking an upright are exempt.",
        "family": "10.2.5",
        "id": "8e37dab2e4ff09d1"
      },
      {
        "rule": "10.1.2",
        "prompt": "The Range Officer assesses 6 procedural penalties. What is the total point deduction for these penalties?",
        "correct": "60 points",
        "options": [
          "60 points",
          "40 points",
          "50 points",
          "70 points"
        ],
        "note": "",
        "family": "10.1.2",
        "id": "1b476140e351fce9"
      },
      {
        "rule": "10.2.1",
        "prompt": "A competitor fires 2 shots on each of 5 separate Fault Line breaches, re-entering fully between breaches and gaining no significant advantage. How many procedural penalties apply?",
        "correct": "5",
        "options": [
          "5",
          "4",
          "6",
          "7"
        ],
        "note": "With no significant advantage, count the separate occurrences.",
        "family": "10.2.1",
        "id": "e6660f0d591b4f7d"
      },
      {
        "rule": "11.3.1",
        "prompt": "Match Officials record a disputed call at 09:09. The competitor talks to the Chief Range Officer 15 minutes later. What is the deadline to submit a written arbitration appeal and fee to the Range Master?",
        "correct": "10:09",
        "options": [
          "10:09",
          "09:54",
          "10:24",
          "10:39"
        ],
        "note": "",
        "family": "11.3.1",
        "id": "3a39e0f7f339bf48"
      },
      {
        "rule": "9.8.3",
        "prompt": "The provisional results show a timestamp of 12:51, but were actually posted at 13:05. What is the deadline for a competitor to file a results appeal with the Stats Officer?",
        "correct": "14:05",
        "options": [
          "14:05",
          "13:50",
          "14:20",
          "14:35"
        ],
        "note": "",
        "family": "9.8.3",
        "id": "f52890a6657389c5"
      },
      {
        "rule": "11.4.1",
        "prompt": "At a Level III match the maximum individual entry fee is equivalent to US$121. What is the arbitration fee equivalent in local currency?",
        "correct": "US$100",
        "options": [
          "US$100",
          "US$121",
          "US$95",
          "US$105"
        ],
        "note": "Use the lower of US$100 and the maximum individual entry fee.",
        "family": "11.4.1",
        "id": "f8dd8ce82b7d6cb7"
      },
      {
        "rule": "9.4.2",
        "prompt": "Three paper no-shoots show 1, 2 and 0 hits in their scoring areas, respectively. What is the combined point deduction?",
        "correct": "30 points",
        "options": [
          "30 points",
          "20 points",
          "35 points",
          "40 points"
        ],
        "note": "Count 10 points per hit, capped at two hits on each paper no-shoot.",
        "family": "9.4.2",
        "id": "f4db1f910c9647bc"
      },
      {
        "rule": "10.2.7",
        "prompt": "A competitor leaves 6 non-disappearing scoring targets completely unengaged. They engage the other 5 targets. Before adding any misses, how many failure-to-engage procedurals apply?",
        "correct": "6",
        "options": [
          "6",
          "5",
          "7",
          "8"
        ],
        "note": "",
        "family": "10.2.7",
        "id": "d6027ed7afcbf0dc"
      },
      {
        "rule": "10.2.3",
        "prompt": "While faulting a line, a competitor fires 10 shots and gains a significant advantage. From that position a maximum of 5 scoring hits can be attained. What is the maximum number of procedurals for that fault?",
        "correct": "5",
        "options": [
          "5",
          "4",
          "6",
          "7"
        ],
        "note": "Multiple penalties for the fault are capped by the scoring hits attainable.",
        "family": "10.2.3",
        "id": "78f0f08139c28834"
      },
      {
        "rule": "11.3.2",
        "prompt": "The Arbitration Committee receives a request at 10:57 on Saturday. The Match Director will declare the results final at 11:17 on Sunday. What deadline applies to the committee’s decision?",
        "correct": "By 10:57 on Sunday",
        "options": [
          "By 10:57 on Sunday",
          "Before 11:17 on Sunday",
          "By 10:37 on Sunday",
          "By 10:57 on Monday"
        ],
        "note": "The 24-hour deadline arrives before the declaration of final results.",
        "family": "11.3.2",
        "id": "682a783c53b03f55"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Under Comstock, a competitor earns 55 target points, receives 20 penalty points and finishes in 5.00 seconds. What is the hit factor, rounded to four decimals?",
        "correct": "7.0000",
        "options": [
          "7.0000",
          "11.0000",
          "9.0000",
          "15.0000"
        ],
        "note": "Subtract penalties from target points before dividing by time.",
        "family": "comstock-hit-factor",
        "id": "6b4917642dba515c"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "A 80-point stage is won with a hit factor of 9. A competitor records a hit factor of 7.2. How many stage points does the competitor earn?",
        "correct": "64.00",
        "options": [
          "64.00",
          "62.00",
          "63.00",
          "65.00"
        ],
        "note": "Multiply the available stage points by the competitor’s hit factor divided by the winner’s hit factor.",
        "family": "comstock-stage-points",
        "id": "28ebb69b1638fbdf"
      },
      {
        "rule": "9.2.3",
        "prompt": "A competitor earns 39.2750, 28.6425 and 31.3850 stage points in the three stages of a match. What is the match total?",
        "correct": "99.3025",
        "options": [
          "99.3025",
          "99.4025",
          "99.2025",
          "100.3025"
        ],
        "note": "",
        "family": "match-total",
        "id": "5f4e872e5af06f31"
      },
      {
        "rule": "10.2.4",
        "prompt": "A competitor fires 1 shots before a mandatory reload point, 2 shots after it without reloading, and 3 shots after finally reloading. How many procedural penalties apply to the reload violation?",
        "correct": "2",
        "options": [
          "2",
          "1",
          "3",
          "4"
        ],
        "note": "Count only shots after the required reload point and before the reload.",
        "family": "10.2.4",
        "id": "6e024231dd5c61ec"
      },
      {
        "rule": "10.2.5",
        "prompt": "In a Cooper Tunnel, direct contact with the overhead material drops 1 pieces. Bumping an upright drops another 2. How many procedural penalties apply?",
        "correct": "1",
        "options": [
          "1",
          "0",
          "2",
          "3"
        ],
        "note": "Pieces that fall from striking an upright are exempt.",
        "family": "10.2.5",
        "id": "a494bfc8fae26d63"
      },
      {
        "rule": "10.1.2",
        "prompt": "The Range Officer assesses 7 procedural penalties. What is the total point deduction for these penalties?",
        "correct": "70 points",
        "options": [
          "70 points",
          "50 points",
          "60 points",
          "80 points"
        ],
        "note": "",
        "family": "10.1.2",
        "id": "47ba4f62b92a41c2"
      },
      {
        "rule": "10.2.1",
        "prompt": "A competitor fires 3 shots on each of 2 separate Fault Line breaches, re-entering fully between breaches and gaining no significant advantage. How many procedural penalties apply?",
        "correct": "2",
        "options": [
          "2",
          "1",
          "3",
          "4"
        ],
        "note": "With no significant advantage, count the separate occurrences.",
        "family": "10.2.1",
        "id": "ae87a1170740806b"
      },
      {
        "rule": "11.3.1",
        "prompt": "Match Officials record a disputed call at 09:32. The competitor talks to the Chief Range Officer 15 minutes later. What is the deadline to submit a written arbitration appeal and fee to the Range Master?",
        "correct": "10:32",
        "options": [
          "10:32",
          "10:17",
          "10:47",
          "11:02"
        ],
        "note": "",
        "family": "11.3.1",
        "id": "6588158dd42d9117"
      },
      {
        "rule": "9.8.3",
        "prompt": "The provisional results show a timestamp of 13:08, but were actually posted at 13:19. What is the deadline for a competitor to file a results appeal with the Stats Officer?",
        "correct": "14:19",
        "options": [
          "14:19",
          "14:04",
          "14:34",
          "14:49"
        ],
        "note": "",
        "family": "9.8.3",
        "id": "29a955b04f06e0ec"
      },
      {
        "rule": "11.4.1",
        "prompt": "At a Level III match the maximum individual entry fee is equivalent to US$66. What is the arbitration fee equivalent in local currency?",
        "correct": "US$66",
        "options": [
          "US$66",
          "US$100",
          "US$61",
          "US$71"
        ],
        "note": "Use the lower of US$100 and the maximum individual entry fee.",
        "family": "11.4.1",
        "id": "ee9ce1e4aa409d25"
      },
      {
        "rule": "9.4.2",
        "prompt": "Three paper no-shoots show 2, 2 and 0 hits in their scoring areas, respectively. What is the combined point deduction?",
        "correct": "40 points",
        "options": [
          "40 points",
          "30 points",
          "45 points",
          "50 points"
        ],
        "note": "Count 10 points per hit, capped at two hits on each paper no-shoot.",
        "family": "9.4.2",
        "id": "402cb42239c9c1f8"
      },
      {
        "rule": "10.2.7",
        "prompt": "A competitor leaves 3 non-disappearing scoring targets completely unengaged. They engage the other 6 targets. Before adding any misses, how many failure-to-engage procedurals apply?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "",
        "family": "10.2.7",
        "id": "40285104c3498727"
      },
      {
        "rule": "10.2.3",
        "prompt": "While faulting a line, a competitor fires 11 shots and gains a significant advantage. From that position a maximum of 6 scoring hits can be attained. What is the maximum number of procedurals for that fault?",
        "correct": "6",
        "options": [
          "6",
          "5",
          "7",
          "8"
        ],
        "note": "Multiple penalties for the fault are capped by the scoring hits attainable.",
        "family": "10.2.3",
        "id": "33eda48998525a75"
      },
      {
        "rule": "11.3.2",
        "prompt": "The Arbitration Committee receives a request at 11:16 on Saturday. Final results are scheduled to be declared at 10:56 on Sunday. What is the latest time the committee may rule under that schedule?",
        "correct": "Before 10:56 on Sunday",
        "options": [
          "Before 10:56 on Sunday",
          "By 11:16 on Sunday",
          "By 11:36 on Sunday",
          "Before 10:56 on Monday"
        ],
        "note": "The earlier limit is the declaration of final results.",
        "family": "11.3.2",
        "id": "0ca050eb61851f0f"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Under Comstock, a competitor earns 60 target points, receives 30 penalty points and finishes in 6.00 seconds. What is the hit factor, rounded to four decimals?",
        "correct": "5.0000",
        "options": [
          "5.0000",
          "10.0000",
          "7.5000",
          "15.0000"
        ],
        "note": "Subtract penalties from target points before dividing by time.",
        "family": "comstock-hit-factor",
        "id": "e0956e1c97004596"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "A 90-point stage is won with a hit factor of 10. A competitor records a hit factor of 9.0. How many stage points does the competitor earn?",
        "correct": "81.00",
        "options": [
          "81.00",
          "79.00",
          "80.00",
          "82.00"
        ],
        "note": "Multiply the available stage points by the competitor’s hit factor divided by the winner’s hit factor.",
        "family": "comstock-stage-points",
        "id": "14715e3e5cf69e4f"
      },
      {
        "rule": "9.2.3",
        "prompt": "A competitor earns 41.2750, 29.6425 and 34.3850 stage points in the three stages of a match. What is the match total?",
        "correct": "105.3025",
        "options": [
          "105.3025",
          "105.4025",
          "105.2025",
          "106.3025"
        ],
        "note": "",
        "family": "match-total",
        "id": "074fa194069e06db"
      },
      {
        "rule": "10.2.4",
        "prompt": "A competitor fires 2 shots before a mandatory reload point, 2 shots after it without reloading, and 4 shots after finally reloading. How many procedural penalties apply to the reload violation?",
        "correct": "2",
        "options": [
          "2",
          "1",
          "3",
          "4"
        ],
        "note": "Count only shots after the required reload point and before the reload.",
        "family": "10.2.4",
        "id": "68323701f25334fb"
      },
      {
        "rule": "10.2.5",
        "prompt": "In a Cooper Tunnel, direct contact with the overhead material drops 2 pieces. Bumping an upright drops another 2. How many procedural penalties apply?",
        "correct": "2",
        "options": [
          "2",
          "1",
          "3",
          "4"
        ],
        "note": "Pieces that fall from striking an upright are exempt.",
        "family": "10.2.5",
        "id": "d78787214b190a6e"
      },
      {
        "rule": "10.1.2",
        "prompt": "The Range Officer assesses 8 procedural penalties. What is the total point deduction for these penalties?",
        "correct": "80 points",
        "options": [
          "80 points",
          "60 points",
          "70 points",
          "90 points"
        ],
        "note": "",
        "family": "10.1.2",
        "id": "5d5ad2570ac219a8"
      },
      {
        "rule": "10.2.1",
        "prompt": "A competitor fires 3 shots on each of 3 separate Fault Line breaches, re-entering fully between breaches and gaining no significant advantage. How many procedural penalties apply?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "With no significant advantage, count the separate occurrences.",
        "family": "10.2.1",
        "id": "58f01062c3509bdd"
      },
      {
        "rule": "11.3.1",
        "prompt": "Match Officials record a disputed call at 09:55. The competitor talks to the Chief Range Officer 15 minutes later. What is the deadline to submit a written arbitration appeal and fee to the Range Master?",
        "correct": "10:55",
        "options": [
          "10:55",
          "10:40",
          "11:10",
          "11:25"
        ],
        "note": "",
        "family": "11.3.1",
        "id": "007010000caf70b8"
      },
      {
        "rule": "9.8.3",
        "prompt": "The provisional results show a timestamp of 13:25, but were actually posted at 13:37. What is the deadline for a competitor to file a results appeal with the Stats Officer?",
        "correct": "14:37",
        "options": [
          "14:37",
          "14:22",
          "14:52",
          "15:07"
        ],
        "note": "",
        "family": "9.8.3",
        "id": "251642cc8f8c7f1f"
      },
      {
        "rule": "11.4.1",
        "prompt": "At a Level III match the maximum individual entry fee is equivalent to US$127. What is the arbitration fee equivalent in local currency?",
        "correct": "US$100",
        "options": [
          "US$100",
          "US$127",
          "US$95",
          "US$105"
        ],
        "note": "Use the lower of US$100 and the maximum individual entry fee.",
        "family": "11.4.1",
        "id": "5f76c896f353c461"
      },
      {
        "rule": "9.4.2",
        "prompt": "Three paper no-shoots show 3, 2 and 0 hits in their scoring areas, respectively. What is the combined point deduction?",
        "correct": "40 points",
        "options": [
          "40 points",
          "30 points",
          "45 points",
          "50 points"
        ],
        "note": "Count 10 points per hit, capped at two hits on each paper no-shoot.",
        "family": "9.4.2",
        "id": "f10264af0c61ed3a"
      },
      {
        "rule": "10.2.7",
        "prompt": "A competitor leaves 4 non-disappearing scoring targets completely unengaged. They engage the other 7 targets. Before adding any misses, how many failure-to-engage procedurals apply?",
        "correct": "4",
        "options": [
          "4",
          "3",
          "5",
          "6"
        ],
        "note": "",
        "family": "10.2.7",
        "id": "9bd75fb0011635df"
      },
      {
        "rule": "10.2.3",
        "prompt": "While faulting a line, a competitor fires 12 shots and gains a significant advantage. From that position a maximum of 7 scoring hits can be attained. What is the maximum number of procedurals for that fault?",
        "correct": "7",
        "options": [
          "7",
          "6",
          "8",
          "9"
        ],
        "note": "Multiple penalties for the fault are capped by the scoring hits attainable.",
        "family": "10.2.3",
        "id": "fe4d0980cee323db"
      },
      {
        "rule": "11.3.2",
        "prompt": "The Arbitration Committee receives a request at 11:35 on Saturday. The Match Director will declare the results final at 11:55 on Sunday. What deadline applies to the committee’s decision?",
        "correct": "By 11:35 on Sunday",
        "options": [
          "By 11:35 on Sunday",
          "Before 11:55 on Sunday",
          "By 11:15 on Sunday",
          "By 11:35 on Monday"
        ],
        "note": "The 24-hour deadline arrives before the declaration of final results.",
        "family": "11.3.2",
        "id": "64eca1200b3dfb67"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Under Comstock, a competitor earns 65 target points, receives 10 penalty points and finishes in 7.00 seconds. What is the hit factor, rounded to four decimals?",
        "correct": "7.8571",
        "options": [
          "7.8571",
          "9.2857",
          "8.5714",
          "10.7143"
        ],
        "note": "Subtract penalties from target points before dividing by time.",
        "family": "comstock-hit-factor",
        "id": "dc1a8095996ad676"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "A 100-point stage is won with a hit factor of 8. A competitor records a hit factor of 4.0. How many stage points does the competitor earn?",
        "correct": "50.00",
        "options": [
          "50.00",
          "48.00",
          "49.00",
          "51.00"
        ],
        "note": "Multiply the available stage points by the competitor’s hit factor divided by the winner’s hit factor.",
        "family": "comstock-stage-points",
        "id": "a40790b1b62def3d"
      },
      {
        "rule": "9.2.3",
        "prompt": "A competitor earns 43.2750, 30.6425 and 37.3850 stage points in the three stages of a match. What is the match total?",
        "correct": "111.3025",
        "options": [
          "111.3025",
          "111.4025",
          "111.2025",
          "112.3025"
        ],
        "note": "",
        "family": "match-total",
        "id": "94c3a1b2ed2be128"
      },
      {
        "rule": "10.2.4",
        "prompt": "A competitor fires 3 shots before a mandatory reload point, 3 shots after it without reloading, and 2 shots after finally reloading. How many procedural penalties apply to the reload violation?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "Count only shots after the required reload point and before the reload.",
        "family": "10.2.4",
        "id": "74af5d5f21fe1dfb"
      },
      {
        "rule": "10.2.5",
        "prompt": "In a Cooper Tunnel, direct contact with the overhead material drops 3 pieces. Bumping an upright drops another 2. How many procedural penalties apply?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "Pieces that fall from striking an upright are exempt.",
        "family": "10.2.5",
        "id": "1f535390a3951d7e"
      },
      {
        "rule": "10.1.2",
        "prompt": "The Range Officer assesses 9 procedural penalties. What is the total point deduction for these penalties?",
        "correct": "90 points",
        "options": [
          "90 points",
          "70 points",
          "80 points",
          "100 points"
        ],
        "note": "",
        "family": "10.1.2",
        "id": "8408d43671db7a0e"
      },
      {
        "rule": "10.2.1",
        "prompt": "A competitor fires 3 shots on each of 4 separate Fault Line breaches, re-entering fully between breaches and gaining no significant advantage. How many procedural penalties apply?",
        "correct": "4",
        "options": [
          "4",
          "3",
          "5",
          "6"
        ],
        "note": "With no significant advantage, count the separate occurrences.",
        "family": "10.2.1",
        "id": "2ff8e267c91dde1a"
      },
      {
        "rule": "11.3.1",
        "prompt": "Match Officials record a disputed call at 10:18. The competitor talks to the Chief Range Officer 15 minutes later. What is the deadline to submit a written arbitration appeal and fee to the Range Master?",
        "correct": "11:18",
        "options": [
          "11:18",
          "11:03",
          "11:33",
          "11:48"
        ],
        "note": "",
        "family": "11.3.1",
        "id": "c965916fb531369c"
      },
      {
        "rule": "9.8.3",
        "prompt": "The provisional results show a timestamp of 13:42, but were actually posted at 13:55. What is the deadline for a competitor to file a results appeal with the Stats Officer?",
        "correct": "14:55",
        "options": [
          "14:55",
          "14:40",
          "15:10",
          "15:25"
        ],
        "note": "",
        "family": "9.8.3",
        "id": "2cf52a01b6b110fd"
      },
      {
        "rule": "11.4.1",
        "prompt": "At a Level III match the maximum individual entry fee is equivalent to US$70. What is the arbitration fee equivalent in local currency?",
        "correct": "US$70",
        "options": [
          "US$70",
          "US$100",
          "US$65",
          "US$75"
        ],
        "note": "Use the lower of US$100 and the maximum individual entry fee.",
        "family": "11.4.1",
        "id": "d811849a35cbcaa0"
      },
      {
        "rule": "9.4.2",
        "prompt": "Three paper no-shoots show 1, 3 and 1 hits in their scoring areas, respectively. What is the combined point deduction?",
        "correct": "40 points",
        "options": [
          "40 points",
          "30 points",
          "45 points",
          "50 points"
        ],
        "note": "Count 10 points per hit, capped at two hits on each paper no-shoot.",
        "family": "9.4.2",
        "id": "e7a35042e7ccfa8a"
      },
      {
        "rule": "10.2.7",
        "prompt": "A competitor leaves 5 non-disappearing scoring targets completely unengaged. They engage the other 8 targets. Before adding any misses, how many failure-to-engage procedurals apply?",
        "correct": "5",
        "options": [
          "5",
          "4",
          "6",
          "7"
        ],
        "note": "",
        "family": "10.2.7",
        "id": "fd6b874ef06e73b5"
      },
      {
        "rule": "10.2.3",
        "prompt": "While faulting a line, a competitor fires 13 shots and gains a significant advantage. From that position a maximum of 8 scoring hits can be attained. What is the maximum number of procedurals for that fault?",
        "correct": "8",
        "options": [
          "8",
          "7",
          "9",
          "10"
        ],
        "note": "Multiple penalties for the fault are capped by the scoring hits attainable.",
        "family": "10.2.3",
        "id": "e26303c2b6fb8eef"
      },
      {
        "rule": "11.3.2",
        "prompt": "The Arbitration Committee receives a request at 11:54 on Saturday. Final results are scheduled to be declared at 11:34 on Sunday. What is the latest time the committee may rule under that schedule?",
        "correct": "Before 11:34 on Sunday",
        "options": [
          "Before 11:34 on Sunday",
          "By 11:54 on Sunday",
          "By 12:14 on Sunday",
          "Before 11:34 on Monday"
        ],
        "note": "The earlier limit is the declaration of final results.",
        "family": "11.3.2",
        "id": "2f113c3dcf31d25b"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Under Comstock, a competitor earns 70 target points, receives 20 penalty points and finishes in 8.00 seconds. What is the hit factor, rounded to four decimals?",
        "correct": "6.2500",
        "options": [
          "6.2500",
          "8.7500",
          "7.5000",
          "11.2500"
        ],
        "note": "Subtract penalties from target points before dividing by time.",
        "family": "comstock-hit-factor",
        "id": "194827b22eba79b3"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "A 110-point stage is won with a hit factor of 9. A competitor records a hit factor of 5.4. How many stage points does the competitor earn?",
        "correct": "66.00",
        "options": [
          "66.00",
          "64.00",
          "65.00",
          "67.00"
        ],
        "note": "Multiply the available stage points by the competitor’s hit factor divided by the winner’s hit factor.",
        "family": "comstock-stage-points",
        "id": "ae96f35457d3f054"
      },
      {
        "rule": "9.2.3",
        "prompt": "A competitor earns 45.2750, 31.6425 and 40.3850 stage points in the three stages of a match. What is the match total?",
        "correct": "117.3025",
        "options": [
          "117.3025",
          "117.4025",
          "117.2025",
          "118.3025"
        ],
        "note": "",
        "family": "match-total",
        "id": "14aae3449b1f03c8"
      },
      {
        "rule": "10.2.4",
        "prompt": "A competitor fires 4 shots before a mandatory reload point, 3 shots after it without reloading, and 3 shots after finally reloading. How many procedural penalties apply to the reload violation?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "Count only shots after the required reload point and before the reload.",
        "family": "10.2.4",
        "id": "ed76f5a3f5fb66c2"
      },
      {
        "rule": "10.2.5",
        "prompt": "In a Cooper Tunnel, direct contact with the overhead material drops 4 pieces. Bumping an upright drops another 2. How many procedural penalties apply?",
        "correct": "4",
        "options": [
          "4",
          "3",
          "5",
          "6"
        ],
        "note": "Pieces that fall from striking an upright are exempt.",
        "family": "10.2.5",
        "id": "491749653d1d7d26"
      },
      {
        "rule": "10.1.2",
        "prompt": "The Range Officer assesses 10 procedural penalties. What is the total point deduction for these penalties?",
        "correct": "100 points",
        "options": [
          "100 points",
          "80 points",
          "90 points",
          "110 points"
        ],
        "note": "",
        "family": "10.1.2",
        "id": "100e589875ff53f7"
      },
      {
        "rule": "10.2.1",
        "prompt": "A competitor fires 3 shots on each of 5 separate Fault Line breaches, re-entering fully between breaches and gaining no significant advantage. How many procedural penalties apply?",
        "correct": "5",
        "options": [
          "5",
          "4",
          "6",
          "7"
        ],
        "note": "With no significant advantage, count the separate occurrences.",
        "family": "10.2.1",
        "id": "5e49c94b26b2461c"
      },
      {
        "rule": "11.3.1",
        "prompt": "Match Officials record a disputed call at 10:41. The competitor talks to the Chief Range Officer 15 minutes later. What is the deadline to submit a written arbitration appeal and fee to the Range Master?",
        "correct": "11:41",
        "options": [
          "11:41",
          "11:26",
          "11:56",
          "12:11"
        ],
        "note": "",
        "family": "11.3.1",
        "id": "0d638cd42e10ffb0"
      },
      {
        "rule": "9.8.3",
        "prompt": "The provisional results show a timestamp of 13:59, but were actually posted at 14:13. What is the deadline for a competitor to file a results appeal with the Stats Officer?",
        "correct": "15:13",
        "options": [
          "15:13",
          "14:58",
          "15:28",
          "15:43"
        ],
        "note": "",
        "family": "9.8.3",
        "id": "09e5ceb49c90626e"
      },
      {
        "rule": "11.4.1",
        "prompt": "At a Level III match the maximum individual entry fee is equivalent to US$133. What is the arbitration fee equivalent in local currency?",
        "correct": "US$100",
        "options": [
          "US$100",
          "US$133",
          "US$95",
          "US$105"
        ],
        "note": "Use the lower of US$100 and the maximum individual entry fee.",
        "family": "11.4.1",
        "id": "274ea25396d70949"
      },
      {
        "rule": "9.4.2",
        "prompt": "Three paper no-shoots show 2, 3 and 1 hits in their scoring areas, respectively. What is the combined point deduction?",
        "correct": "50 points",
        "options": [
          "50 points",
          "40 points",
          "55 points",
          "60 points"
        ],
        "note": "Count 10 points per hit, capped at two hits on each paper no-shoot.",
        "family": "9.4.2",
        "id": "3fe10b1743af5a74"
      },
      {
        "rule": "10.2.7",
        "prompt": "A competitor leaves 6 non-disappearing scoring targets completely unengaged. They engage the other 9 targets. Before adding any misses, how many failure-to-engage procedurals apply?",
        "correct": "6",
        "options": [
          "6",
          "5",
          "7",
          "8"
        ],
        "note": "",
        "family": "10.2.7",
        "id": "5bd4bda93c64ae23"
      },
      {
        "rule": "10.2.3",
        "prompt": "While faulting a line, a competitor fires 14 shots and gains a significant advantage. From that position a maximum of 9 scoring hits can be attained. What is the maximum number of procedurals for that fault?",
        "correct": "9",
        "options": [
          "9",
          "8",
          "10",
          "11"
        ],
        "note": "Multiple penalties for the fault are capped by the scoring hits attainable.",
        "family": "10.2.3",
        "id": "8ba798773a134e49"
      },
      {
        "rule": "11.3.2",
        "prompt": "The Arbitration Committee receives a request at 12:13 on Saturday. The Match Director will declare the results final at 12:33 on Sunday. What deadline applies to the committee’s decision?",
        "correct": "By 12:13 on Sunday",
        "options": [
          "By 12:13 on Sunday",
          "Before 12:33 on Sunday",
          "By 11:53 on Sunday",
          "By 12:13 on Monday"
        ],
        "note": "The 24-hour deadline arrives before the declaration of final results.",
        "family": "11.3.2",
        "id": "87e95945c487e4d8"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Under Comstock, a competitor earns 75 target points, receives 30 penalty points and finishes in 5.00 seconds. What is the hit factor, rounded to four decimals?",
        "correct": "9.0000",
        "options": [
          "9.0000",
          "15.0000",
          "12.0000",
          "21.0000"
        ],
        "note": "Subtract penalties from target points before dividing by time.",
        "family": "comstock-hit-factor",
        "id": "6593ce04b3d67d7d"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "A 120-point stage is won with a hit factor of 10. A competitor records a hit factor of 7.0. How many stage points does the competitor earn?",
        "correct": "84.00",
        "options": [
          "84.00",
          "82.00",
          "83.00",
          "85.00"
        ],
        "note": "Multiply the available stage points by the competitor’s hit factor divided by the winner’s hit factor.",
        "family": "comstock-stage-points",
        "id": "125f67b0e89b3b29"
      },
      {
        "rule": "9.2.3",
        "prompt": "A competitor earns 47.2750, 32.6425 and 43.3850 stage points in the three stages of a match. What is the match total?",
        "correct": "123.3025",
        "options": [
          "123.3025",
          "123.4025",
          "123.2025",
          "124.3025"
        ],
        "note": "",
        "family": "match-total",
        "id": "ac71cbd4257fe44c"
      },
      {
        "rule": "10.2.4",
        "prompt": "A competitor fires 1 shots before a mandatory reload point, 3 shots after it without reloading, and 4 shots after finally reloading. How many procedural penalties apply to the reload violation?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "Count only shots after the required reload point and before the reload.",
        "family": "10.2.4",
        "id": "ad42741d9b5b0b33"
      },
      {
        "rule": "10.2.5",
        "prompt": "In a Cooper Tunnel, direct contact with the overhead material drops 1 pieces. Bumping an upright drops another 3. How many procedural penalties apply?",
        "correct": "1",
        "options": [
          "1",
          "0",
          "2",
          "3"
        ],
        "note": "Pieces that fall from striking an upright are exempt.",
        "family": "10.2.5",
        "id": "073fa27a14c6fdba"
      },
      {
        "rule": "10.1.2",
        "prompt": "The Range Officer assesses 11 procedural penalties. What is the total point deduction for these penalties?",
        "correct": "110 points",
        "options": [
          "110 points",
          "90 points",
          "100 points",
          "120 points"
        ],
        "note": "",
        "family": "10.1.2",
        "id": "6ced0a30c97d29fb"
      },
      {
        "rule": "10.2.1",
        "prompt": "A competitor fires 4 shots on each of 2 separate Fault Line breaches, re-entering fully between breaches and gaining no significant advantage. How many procedural penalties apply?",
        "correct": "2",
        "options": [
          "2",
          "1",
          "3",
          "4"
        ],
        "note": "With no significant advantage, count the separate occurrences.",
        "family": "10.2.1",
        "id": "0fdc8b40955167f4"
      },
      {
        "rule": "11.3.1",
        "prompt": "Match Officials record a disputed call at 11:04. The competitor talks to the Chief Range Officer 15 minutes later. What is the deadline to submit a written arbitration appeal and fee to the Range Master?",
        "correct": "12:04",
        "options": [
          "12:04",
          "11:49",
          "12:19",
          "12:34"
        ],
        "note": "",
        "family": "11.3.1",
        "id": "74c72e17cf94ace9"
      },
      {
        "rule": "9.8.3",
        "prompt": "The provisional results show a timestamp of 14:16, but were actually posted at 14:27. What is the deadline for a competitor to file a results appeal with the Stats Officer?",
        "correct": "15:27",
        "options": [
          "15:27",
          "15:12",
          "15:42",
          "15:57"
        ],
        "note": "",
        "family": "9.8.3",
        "id": "7218042e14ad7648"
      },
      {
        "rule": "11.4.1",
        "prompt": "At a Level III match the maximum individual entry fee is equivalent to US$74. What is the arbitration fee equivalent in local currency?",
        "correct": "US$74",
        "options": [
          "US$74",
          "US$100",
          "US$69",
          "US$79"
        ],
        "note": "Use the lower of US$100 and the maximum individual entry fee.",
        "family": "11.4.1",
        "id": "84a17151ec6235aa"
      },
      {
        "rule": "9.4.2",
        "prompt": "Three paper no-shoots show 3, 3 and 1 hits in their scoring areas, respectively. What is the combined point deduction?",
        "correct": "50 points",
        "options": [
          "50 points",
          "40 points",
          "55 points",
          "60 points"
        ],
        "note": "Count 10 points per hit, capped at two hits on each paper no-shoot.",
        "family": "9.4.2",
        "id": "9362ece878e6df51"
      },
      {
        "rule": "10.2.7",
        "prompt": "A competitor leaves 3 non-disappearing scoring targets completely unengaged. They engage the other 10 targets. Before adding any misses, how many failure-to-engage procedurals apply?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "",
        "family": "10.2.7",
        "id": "f187f41432c19f9e"
      },
      {
        "rule": "10.2.3",
        "prompt": "While faulting a line, a competitor fires 15 shots and gains a significant advantage. From that position a maximum of 10 scoring hits can be attained. What is the maximum number of procedurals for that fault?",
        "correct": "10",
        "options": [
          "10",
          "9",
          "11",
          "12"
        ],
        "note": "Multiple penalties for the fault are capped by the scoring hits attainable.",
        "family": "10.2.3",
        "id": "1d0b8f7c31502eb7"
      },
      {
        "rule": "11.3.2",
        "prompt": "The Arbitration Committee receives a request at 12:32 on Saturday. Final results are scheduled to be declared at 12:12 on Sunday. What is the latest time the committee may rule under that schedule?",
        "correct": "Before 12:12 on Sunday",
        "options": [
          "Before 12:12 on Sunday",
          "By 12:32 on Sunday",
          "By 12:52 on Sunday",
          "Before 12:12 on Monday"
        ],
        "note": "The earlier limit is the declaration of final results.",
        "family": "11.3.2",
        "id": "0a04767b90011120"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Under Comstock, a competitor earns 80 target points, receives 10 penalty points and finishes in 6.00 seconds. What is the hit factor, rounded to four decimals?",
        "correct": "11.6667",
        "options": [
          "11.6667",
          "13.3333",
          "12.5000",
          "15.0000"
        ],
        "note": "Subtract penalties from target points before dividing by time.",
        "family": "comstock-hit-factor",
        "id": "0a8487a56defd7d4"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "A 130-point stage is won with a hit factor of 8. A competitor records a hit factor of 6.00. How many stage points does the competitor earn?",
        "correct": "97.50",
        "options": [
          "97.50",
          "95.50",
          "96.50",
          "98.50"
        ],
        "note": "Multiply the available stage points by the competitor’s hit factor divided by the winner’s hit factor.",
        "family": "comstock-stage-points",
        "id": "581a8fb3529e434e"
      },
      {
        "rule": "9.2.3",
        "prompt": "A competitor earns 49.2750, 33.6425 and 46.3850 stage points in the three stages of a match. What is the match total?",
        "correct": "129.3025",
        "options": [
          "129.3025",
          "129.4025",
          "129.2025",
          "130.3025"
        ],
        "note": "",
        "family": "match-total",
        "id": "24a2902d339963fb"
      },
      {
        "rule": "10.2.4",
        "prompt": "A competitor fires 2 shots before a mandatory reload point, 4 shots after it without reloading, and 2 shots after finally reloading. How many procedural penalties apply to the reload violation?",
        "correct": "4",
        "options": [
          "4",
          "3",
          "5",
          "6"
        ],
        "note": "Count only shots after the required reload point and before the reload.",
        "family": "10.2.4",
        "id": "a63d7cb694c1e4e7"
      },
      {
        "rule": "10.2.5",
        "prompt": "In a Cooper Tunnel, direct contact with the overhead material drops 2 pieces. Bumping an upright drops another 3. How many procedural penalties apply?",
        "correct": "2",
        "options": [
          "2",
          "1",
          "3",
          "4"
        ],
        "note": "Pieces that fall from striking an upright are exempt.",
        "family": "10.2.5",
        "id": "d4412d59638309cc"
      },
      {
        "rule": "10.1.2",
        "prompt": "The Range Officer assesses 12 procedural penalties. What is the total point deduction for these penalties?",
        "correct": "120 points",
        "options": [
          "120 points",
          "100 points",
          "110 points",
          "130 points"
        ],
        "note": "",
        "family": "10.1.2",
        "id": "2da427e627a18668"
      },
      {
        "rule": "10.2.1",
        "prompt": "A competitor fires 4 shots on each of 3 separate Fault Line breaches, re-entering fully between breaches and gaining no significant advantage. How many procedural penalties apply?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "With no significant advantage, count the separate occurrences.",
        "family": "10.2.1",
        "id": "21bc41077313a1fb"
      },
      {
        "rule": "11.3.1",
        "prompt": "Match Officials record a disputed call at 11:27. The competitor talks to the Chief Range Officer 15 minutes later. What is the deadline to submit a written arbitration appeal and fee to the Range Master?",
        "correct": "12:27",
        "options": [
          "12:27",
          "12:12",
          "12:42",
          "12:57"
        ],
        "note": "",
        "family": "11.3.1",
        "id": "8b94d01c354e3638"
      },
      {
        "rule": "9.8.3",
        "prompt": "The provisional results show a timestamp of 14:33, but were actually posted at 14:45. What is the deadline for a competitor to file a results appeal with the Stats Officer?",
        "correct": "15:45",
        "options": [
          "15:45",
          "15:30",
          "16:00",
          "16:15"
        ],
        "note": "",
        "family": "9.8.3",
        "id": "7aba270f1596c966"
      },
      {
        "rule": "11.4.1",
        "prompt": "At a Level III match the maximum individual entry fee is equivalent to US$139. What is the arbitration fee equivalent in local currency?",
        "correct": "US$100",
        "options": [
          "US$100",
          "US$139",
          "US$95",
          "US$105"
        ],
        "note": "Use the lower of US$100 and the maximum individual entry fee.",
        "family": "11.4.1",
        "id": "5bb2c4fc1e28915c"
      },
      {
        "rule": "9.4.2",
        "prompt": "Three paper no-shoots show 1, 4 and 1 hits in their scoring areas, respectively. What is the combined point deduction?",
        "correct": "40 points",
        "options": [
          "40 points",
          "30 points",
          "45 points",
          "50 points"
        ],
        "note": "Count 10 points per hit, capped at two hits on each paper no-shoot.",
        "family": "9.4.2",
        "id": "2ce804cf7d3c65a5"
      },
      {
        "rule": "10.2.7",
        "prompt": "A competitor leaves 4 non-disappearing scoring targets completely unengaged. They engage the other 11 targets. Before adding any misses, how many failure-to-engage procedurals apply?",
        "correct": "4",
        "options": [
          "4",
          "3",
          "5",
          "6"
        ],
        "note": "",
        "family": "10.2.7",
        "id": "6a197c545df016c0"
      },
      {
        "rule": "10.2.3",
        "prompt": "While faulting a line, a competitor fires 16 shots and gains a significant advantage. From that position a maximum of 11 scoring hits can be attained. What is the maximum number of procedurals for that fault?",
        "correct": "11",
        "options": [
          "11",
          "10",
          "12",
          "13"
        ],
        "note": "Multiple penalties for the fault are capped by the scoring hits attainable.",
        "family": "10.2.3",
        "id": "ee190b22289ebab1"
      },
      {
        "rule": "11.3.2",
        "prompt": "The Arbitration Committee receives a request at 12:51 on Saturday. The Match Director will declare the results final at 13:11 on Sunday. What deadline applies to the committee’s decision?",
        "correct": "By 12:51 on Sunday",
        "options": [
          "By 12:51 on Sunday",
          "Before 13:11 on Sunday",
          "By 12:31 on Sunday",
          "By 12:51 on Monday"
        ],
        "note": "The 24-hour deadline arrives before the declaration of final results.",
        "family": "11.3.2",
        "id": "87475e17dc3ff41f"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Under Comstock, a competitor earns 85 target points, receives 20 penalty points and finishes in 7.00 seconds. What is the hit factor, rounded to four decimals?",
        "correct": "9.2857",
        "options": [
          "9.2857",
          "12.1429",
          "10.7143",
          "15.0000"
        ],
        "note": "Subtract penalties from target points before dividing by time.",
        "family": "comstock-hit-factor",
        "id": "b85cb293f700cca4"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "A 140-point stage is won with a hit factor of 9. A competitor records a hit factor of 7.2. How many stage points does the competitor earn?",
        "correct": "112.00",
        "options": [
          "112.00",
          "110.00",
          "111.00",
          "113.00"
        ],
        "note": "Multiply the available stage points by the competitor’s hit factor divided by the winner’s hit factor.",
        "family": "comstock-stage-points",
        "id": "80da1262251a8622"
      },
      {
        "rule": "9.2.3",
        "prompt": "A competitor earns 51.2750, 34.6425 and 49.3850 stage points in the three stages of a match. What is the match total?",
        "correct": "135.3025",
        "options": [
          "135.3025",
          "135.4025",
          "135.2025",
          "136.3025"
        ],
        "note": "",
        "family": "match-total",
        "id": "dc93ed95ac38a11e"
      },
      {
        "rule": "10.2.4",
        "prompt": "A competitor fires 3 shots before a mandatory reload point, 4 shots after it without reloading, and 3 shots after finally reloading. How many procedural penalties apply to the reload violation?",
        "correct": "4",
        "options": [
          "4",
          "3",
          "5",
          "6"
        ],
        "note": "Count only shots after the required reload point and before the reload.",
        "family": "10.2.4",
        "id": "ff81f0ebb90fa7fe"
      },
      {
        "rule": "10.2.5",
        "prompt": "In a Cooper Tunnel, direct contact with the overhead material drops 3 pieces. Bumping an upright drops another 3. How many procedural penalties apply?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "Pieces that fall from striking an upright are exempt.",
        "family": "10.2.5",
        "id": "a69a26a0962324c0"
      },
      {
        "rule": "10.1.2",
        "prompt": "The Range Officer assesses 13 procedural penalties. What is the total point deduction for these penalties?",
        "correct": "130 points",
        "options": [
          "130 points",
          "110 points",
          "120 points",
          "140 points"
        ],
        "note": "",
        "family": "10.1.2",
        "id": "f2b4498c35093061"
      },
      {
        "rule": "10.2.1",
        "prompt": "A competitor fires 4 shots on each of 4 separate Fault Line breaches, re-entering fully between breaches and gaining no significant advantage. How many procedural penalties apply?",
        "correct": "4",
        "options": [
          "4",
          "3",
          "5",
          "6"
        ],
        "note": "With no significant advantage, count the separate occurrences.",
        "family": "10.2.1",
        "id": "bcbc115517493d04"
      },
      {
        "rule": "11.3.1",
        "prompt": "Match Officials record a disputed call at 11:50. The competitor talks to the Chief Range Officer 15 minutes later. What is the deadline to submit a written arbitration appeal and fee to the Range Master?",
        "correct": "12:50",
        "options": [
          "12:50",
          "12:35",
          "13:05",
          "13:20"
        ],
        "note": "",
        "family": "11.3.1",
        "id": "5fa6865654c74be5"
      },
      {
        "rule": "9.8.3",
        "prompt": "The provisional results show a timestamp of 14:50, but were actually posted at 15:03. What is the deadline for a competitor to file a results appeal with the Stats Officer?",
        "correct": "16:03",
        "options": [
          "16:03",
          "15:48",
          "16:18",
          "16:33"
        ],
        "note": "",
        "family": "9.8.3",
        "id": "2bb26fd96d3d99e0"
      },
      {
        "rule": "11.4.1",
        "prompt": "At a Level III match the maximum individual entry fee is equivalent to US$78. What is the arbitration fee equivalent in local currency?",
        "correct": "US$78",
        "options": [
          "US$78",
          "US$100",
          "US$73",
          "US$83"
        ],
        "note": "Use the lower of US$100 and the maximum individual entry fee.",
        "family": "11.4.1",
        "id": "b0c07a4dded3ae57"
      },
      {
        "rule": "9.4.2",
        "prompt": "Three paper no-shoots show 2, 4 and 1 hits in their scoring areas, respectively. What is the combined point deduction?",
        "correct": "50 points",
        "options": [
          "50 points",
          "40 points",
          "55 points",
          "60 points"
        ],
        "note": "Count 10 points per hit, capped at two hits on each paper no-shoot.",
        "family": "9.4.2",
        "id": "b8d2a9da680ff132"
      },
      {
        "rule": "10.2.7",
        "prompt": "A competitor leaves 5 non-disappearing scoring targets completely unengaged. They engage the other 12 targets. Before adding any misses, how many failure-to-engage procedurals apply?",
        "correct": "5",
        "options": [
          "5",
          "4",
          "6",
          "7"
        ],
        "note": "",
        "family": "10.2.7",
        "id": "6027dec45b5000f3"
      },
      {
        "rule": "10.2.3",
        "prompt": "While faulting a line, a competitor fires 17 shots and gains a significant advantage. From that position a maximum of 12 scoring hits can be attained. What is the maximum number of procedurals for that fault?",
        "correct": "12",
        "options": [
          "12",
          "11",
          "13",
          "14"
        ],
        "note": "Multiple penalties for the fault are capped by the scoring hits attainable.",
        "family": "10.2.3",
        "id": "8ba2c28d0727460d"
      },
      {
        "rule": "11.3.2",
        "prompt": "The Arbitration Committee receives a request at 13:10 on Saturday. Final results are scheduled to be declared at 12:50 on Sunday. What is the latest time the committee may rule under that schedule?",
        "correct": "Before 12:50 on Sunday",
        "options": [
          "Before 12:50 on Sunday",
          "By 13:10 on Sunday",
          "By 13:30 on Sunday",
          "Before 12:50 on Monday"
        ],
        "note": "The earlier limit is the declaration of final results.",
        "family": "11.3.2",
        "id": "75069bcdc82cd29e"
      }
    ]
  },
  {
    "id": "shotgun",
    "name": "Shotgun",
    "group": "Centerfire",
    "book": "https://drive.google.com/file/d/11hY6XdSlXyugiN4FNuLVpWd3Jivk8K2Y/view",
    "questions": [
      {
        "rule": "1.2.1.1",
        "prompt": "A Short Course may require at most 8 rounds. What is its maximum number of scoring hits?",
        "correct": "12",
        "options": [
          "12",
          "8",
          "10",
          "14"
        ],
        "note": "",
        "family": "1.2.1.1",
        "id": "c84177653fc4273c"
      },
      {
        "rule": "9.5.1",
        "prompt": "With slug ammunition, how many hits count per paper target by default?",
        "correct": "1",
        "options": [
          "1",
          "0",
          "2",
          "3"
        ],
        "note": "",
        "family": "9.5.1",
        "id": "08a05482c8ff58d8"
      },
      {
        "rule": "Appendix D · May 2026 interpretation",
        "prompt": "Which Shotgun divisions may use a bipod under the May 2026 interpretation?",
        "correct": "No division",
        "options": [
          "No division",
          "Open only",
          "Open and Modified only",
          "Open, Modified and Standard only"
        ],
        "note": "",
        "family": "Appendix D · May 2026 interpretation",
        "id": "7e7dc8841041563c"
      },
      {
        "rule": "Appendix D, item 1",
        "prompt": "What is the minimum Shotgun power factor?",
        "correct": "480",
        "options": [
          "480",
          "460",
          "470",
          "490"
        ],
        "note": "",
        "family": "Appendix D, item 1",
        "id": "9d2ce254322b0f52"
      },
      {
        "rule": "2.1.3.2",
        "prompt": "While metal targets are being shot with slugs, what minimum distance must be maintained?",
        "correct": "40 m",
        "options": [
          "40 m",
          "39 m",
          "41 m",
          "42 m"
        ],
        "note": "If a Fault Line is used to limit the approach, it must be placed at least 41 m away.",
        "family": "2.1.3.2",
        "id": "76669848ec8e4b84"
      },
      {
        "rule": "2.1.3.1",
        "prompt": "What minimum distance applies when shooting metal targets with birdshot or buckshot?",
        "correct": "5 m",
        "options": [
          "5 m",
          "4 m",
          "6 m",
          "7 m"
        ],
        "note": "If used to limit the approach, the Fault Line must be at least 6 m away.",
        "family": "2.1.3.1",
        "id": "473cd201f5b95396"
      },
      {
        "rule": "3.2.3",
        "prompt": "Between squads, the written stage briefing needs a clarification for consistency. Who has the authority to amend it?",
        "correct": "Range Master",
        "options": [
          "Range Master",
          "Chief Range Officer",
          "Range Officer",
          "Match Director"
        ],
        "note": "",
        "family": "3.2.3",
        "id": "24be4f173f88362d"
      },
      {
        "rule": "9.1.3",
        "prompt": "A paper target is patched before scoring and the original score cannot be determined. What must the Range Officer order?",
        "correct": "A reshoot of the entire course of fire",
        "options": [
          "A reshoot of the entire course of fire",
          "A reshoot of the affected target only",
          "A rescore using the minimum possible target score",
          "A rescore using the maximum possible target score"
        ],
        "note": "",
        "family": "9.1.3",
        "id": "84e73bae40fef1d1"
      },
      {
        "rule": "10.2.4",
        "prompt": "A competitor fires two shots after the point where a mandatory reload was required, then reloads and fires one more. How many procedural penalties apply for the missed reload?",
        "correct": "2",
        "options": [
          "2",
          "1",
          "3",
          "0"
        ],
        "note": "Count each shot after the required reload point until the reload is performed.",
        "family": "10.2.4",
        "id": "1799ef99d814ab1b"
      },
      {
        "rule": "11.3.1",
        "prompt": "A disputed call is recorded by Match Officials at 13:20. By what time must the written arbitration appeal and applicable fee be submitted to the Range Master?",
        "correct": "14:20",
        "options": [
          "14:20",
          "13:50",
          "14:05",
          "14:50"
        ],
        "note": "The submission window is one hour from the recorded time of the disputed call.",
        "family": "11.3.1",
        "id": "78d8cac4ae7947d1"
      },
      {
        "rule": "9.5.2",
        "prompt": "A slug hit on a scoring paper target touches the line between two scoring zones. Which value counts?",
        "correct": "The higher of the two zone values",
        "options": [
          "The higher of the two zone values",
          "The lower of the two zone values",
          "The zone containing most of the hit",
          "The zone containing the centre of the hit"
        ],
        "note": "",
        "family": "9.5.2",
        "id": "14d00d4c36342c41"
      },
      {
        "rule": "9.2.2",
        "prompt": "To how many decimal places are individual stage points calculated for stage ranking?",
        "correct": "4",
        "options": [
          "4",
          "2",
          "3",
          "5"
        ],
        "note": "",
        "family": "9.2.2",
        "id": "9e45b306a23c2492"
      },
      {
        "rule": "3.2.4",
        "prompt": "Who sets the duration of the squad’s stage walkthrough?",
        "correct": "Range Officer",
        "options": [
          "Range Officer",
          "Chief Range Officer",
          "Range Master",
          "Match Director"
        ],
        "note": "",
        "family": "3.2.4",
        "id": "2f38cfa6c5d892fc"
      },
      {
        "rule": "3.2.4",
        "prompt": "Moving targets are demonstrated during walkthroughs. What must be consistent across competitors?",
        "correct": "Both duration and frequency",
        "options": [
          "Both duration and frequency",
          "Duration only",
          "Frequency only",
          "Neither duration nor frequency"
        ],
        "note": "",
        "family": "3.2.4",
        "id": "02fb5729cb9e04e5"
      },
      {
        "rule": "4.6.1",
        "prompt": "A competitor adjusts a target stand without authorization during inspection. What penalty may the Range Officer impose for each occurrence?",
        "correct": "One procedural penalty",
        "options": [
          "One procedural penalty",
          "Two procedural penalties",
          "One miss penalty",
          "Two miss penalties"
        ],
        "note": "",
        "family": "4.6.1",
        "id": "5ad2ec3127f1aa75"
      },
      {
        "rule": "6.2.6",
        "prompt": "A competitor is disqualified in a later Division after completing a separate Division at the same match. What happens to the complete earlier score?",
        "correct": "It stays in the results for the earlier Division",
        "options": [
          "It stays in the results for the earlier Division",
          "It stays in the results for the later Division",
          "It is removed from the earlier Division results",
          "It is kept only if the disqualification is overturned"
        ],
        "note": "",
        "family": "6.2.6",
        "id": "2bb09b780d6cd1cf"
      },
      {
        "rule": "6.6.1",
        "prompt": "A competitor misses the scheduled time for a stage. Whose prior approval is required to attempt the stage later?",
        "correct": "Match Director",
        "options": [
          "Match Director",
          "Range Master",
          "Chief Range Officer",
          "Range Officer"
        ],
        "note": "",
        "family": "6.6.1",
        "id": "1313eda1e157a923"
      },
      {
        "rule": "7.1.1",
        "prompt": "Who declares a competitor’s time, scores and penalties on the stage and verifies they are recorded correctly?",
        "correct": "Range Officer",
        "options": [
          "Range Officer",
          "Chief Range Officer",
          "Stats Officer",
          "Range Master"
        ],
        "note": "",
        "family": "7.1.1",
        "id": "0b424efb218f7879"
      },
      {
        "rule": "7.1.2",
        "prompt": "Which official has primary authority over the courses of fire specifically assigned to them, under the Range Master?",
        "correct": "Chief Range Officer",
        "options": [
          "Chief Range Officer",
          "Range Officer",
          "Stats Officer",
          "Match Director"
        ],
        "note": "",
        "family": "7.1.2",
        "id": "c118375a6b2b5323"
      },
      {
        "rule": "7.1.3",
        "prompt": "Who supervises the team that processes score sheets and produces provisional and final results?",
        "correct": "Stats Officer",
        "options": [
          "Stats Officer",
          "Chief Range Officer",
          "Range Master",
          "Quartermaster"
        ],
        "note": "",
        "family": "7.1.3",
        "id": "704c770dd49cbacc"
      },
      {
        "rule": "7.1.4",
        "prompt": "Who is responsible for distributing and maintaining targets, timers and other range equipment?",
        "correct": "Quartermaster",
        "options": [
          "Quartermaster",
          "Chief Range Officer",
          "Range Master",
          "Stats Officer"
        ],
        "note": "",
        "family": "7.1.4",
        "id": "b01b090191e21d17"
      },
      {
        "rule": "7.1.5",
        "prompt": "Which official has overall authority for range safety and rule application across the entire match range?",
        "correct": "Range Master",
        "options": [
          "Range Master",
          "Chief Range Officer",
          "Range Officer",
          "Match Director"
        ],
        "note": "",
        "family": "7.1.5",
        "id": "bfc335ecb25270a0"
      },
      {
        "rule": "8.3.5",
        "prompt": "The Range Officer calls “Stop” during an attempt. Which response is required?",
        "correct": "Stop firing and moving immediately and await instructions",
        "options": [
          "Stop firing and moving immediately and await instructions",
          "Stop firing immediately but finish moving to the next position",
          "Stop moving immediately but finish engaging the current target",
          "Stop firing and moving once the current target has been engaged"
        ],
        "note": "",
        "family": "8.3.5",
        "id": "26049216f3858162"
      },
      {
        "rule": "8.3.8",
        "prompt": "Which declaration authorizes personnel to move forward from the final shooting location for scoring and reset?",
        "correct": "Range Is Clear",
        "options": [
          "Range Is Clear",
          "Are You Ready?",
          "If You Are Finished, Unload And Show Clear",
          "Stop"
        ],
        "note": "",
        "family": "8.3.8",
        "id": "f33938909cd6cc60"
      },
      {
        "rule": "9.1.1",
        "prompt": "During scoring, what minimum distance must a competitor keep from a target unless the Range Officer gives permission to approach?",
        "correct": "1 m",
        "options": [
          "1 m",
          "0.5 m",
          "1.5 m",
          "2 m"
        ],
        "note": "",
        "family": "9.1.1",
        "id": "2d30e249199e32da"
      },
      {
        "rule": "9.1.1",
        "prompt": "A competitor approaches a target closer than 1 m without authorization during scoring. What is the sanction for a first offense?",
        "correct": "A warning",
        "options": [
          "A warning",
          "One automatic procedural penalty",
          "One automatic miss penalty",
          "A warning plus one procedural penalty"
        ],
        "note": "",
        "family": "9.1.1",
        "id": "a0c109e9369b02a9"
      },
      {
        "rule": "9.1.4",
        "prompt": "An unrestored target has extra scoring hits. The Range Officer cannot tell which hits belong to the competitor being scored. What is required?",
        "correct": "A reshoot of the course of fire",
        "options": [
          "A reshoot of the course of fire",
          "A reshoot of the target only",
          "A score using only the lowest possible hits",
          "A score using only the highest possible hits"
        ],
        "note": "",
        "family": "9.1.4",
        "id": "d865d4a181049ade"
      },
      {
        "rule": "9.1.5.1",
        "prompt": "A slug passes wholly through the scoring area of a paper target and then strikes the scoring area of a second paper scoring target. How is the second hit treated?",
        "correct": "It does not count for score",
        "options": [
          "It does not count for score",
          "It scores at its full zone value",
          "It scores at the lowest zone value",
          "It counts as a miss penalty on the second target"
        ],
        "note": "",
        "family": "9.1.5.1",
        "id": "709366270d24cc45"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Under Comstock, which calculation produces a hit factor?",
        "correct": "Target points minus penalties, then divide by time",
        "options": [
          "Target points minus penalties, then divide by time",
          "Target points divided by time, then subtract penalties",
          "Target points minus penalties, then multiply by time",
          "Time divided by target points minus penalties"
        ],
        "note": "",
        "family": "9.2.1.1",
        "id": "2fb26c1e715568ff"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Which competitor receives the maximum stage points available under Comstock?",
        "correct": "The competitor with the highest hit factor",
        "options": [
          "The competitor with the highest hit factor",
          "The competitor with the highest raw target points",
          "The competitor with the fastest recorded time",
          "The competitor with the lowest penalty total"
        ],
        "note": "",
        "family": "9.2.1.1",
        "id": "b034328d19a8c134"
      },
      {
        "rule": "9.2.3",
        "prompt": "Which quantity determines the final ranking within a Division?",
        "correct": "The sum of individual stage points",
        "options": [
          "The sum of individual stage points",
          "The sum of individual stage hit factors",
          "The sum of raw target points before factoring",
          "The average of individual stage placing positions"
        ],
        "note": "",
        "family": "9.2.3",
        "id": "de2a1ae18dce11e2"
      },
      {
        "rule": "9.3.1",
        "prompt": "The Match Director decides a tie must be broken. What does the tiebreaker change?",
        "correct": "Only the final placing of the tied competitors",
        "options": [
          "Only the final placing of the tied competitors",
          "The placing and original match points of the tied competitors",
          "The placing of every competitor in the Division",
          "The original match points without changing the placing"
        ],
        "note": "",
        "family": "9.3.1",
        "id": "0fdc055c5d39575a"
      },
      {
        "rule": "9.6.1",
        "prompt": "After “Range Is Clear” on a stage with ordinary paper targets, who may accompany the scoring official to verify the score?",
        "correct": "The competitor or their delegate",
        "options": [
          "The competitor or their delegate",
          "Only the competitor personally",
          "Only the competitor’s delegate",
          "Only the squad leader"
        ],
        "note": "",
        "family": "9.6.1",
        "id": "aa45c8d054c1ff8b"
      },
      {
        "rule": "9.6.2",
        "prompt": "The Range Officer intends to start scoring paper targets before the competitor finishes the stage. When must competitors be advised?",
        "correct": "During the squad briefing",
        "options": [
          "During the squad briefing",
          "After the Start Signal",
          "After the competitor’s last shot",
          "When provisional results are posted"
        ],
        "note": "",
        "family": "9.6.2",
        "id": "f7c24a4496425719"
      },
      {
        "rule": "9.6.3",
        "prompt": "Neither the competitor nor their delegate verifies a target during scoring. What happens to the right to appeal the scoring of that target?",
        "correct": "It is lost",
        "options": [
          "It is lost",
          "It stays open until the target is reset",
          "It stays open until the score sheet is signed",
          "It stays open until provisional results are posted"
        ],
        "note": "",
        "family": "9.6.3",
        "id": "5ff0c66acb294d60"
      },
      {
        "rule": "9.6.4",
        "prompt": "Who must first receive a challenge to the score on a target before it is patched?",
        "correct": "Range Officer",
        "options": [
          "Range Officer",
          "Chief Range Officer",
          "Range Master",
          "Stats Officer"
        ],
        "note": "",
        "family": "9.6.4",
        "id": "ec57f181f231d00b"
      },
      {
        "rule": "9.7.4",
        "prompt": "A score sheet is signed by both the competitor and Range Officer. With no mutual consent and no arbitration decision, which change is explicitly permitted?",
        "correct": "Correcting an arithmetic error",
        "options": [
          "Correcting an arithmetic error",
          "Re-evaluating a disputed scoring-zone hit",
          "Changing the recorded time based on a squad member’s estimate",
          "Adding a miss based on a later recollection"
        ],
        "note": "",
        "family": "9.7.4",
        "id": "e73cef78ffc6e010"
      },
      {
        "rule": "9.7.5",
        "prompt": "A score sheet has excess entries. To whom must it promptly be referred?",
        "correct": "Range Master",
        "options": [
          "Range Master",
          "Chief Range Officer",
          "Stats Officer",
          "Match Director"
        ],
        "note": "",
        "family": "9.7.5",
        "id": "e89fc7b2c365ea93"
      },
      {
        "rule": "9.7.6.1",
        "prompt": "A stage time is missing from the score sheet and a reshoot is impossible. What is the stage score?",
        "correct": "Zero",
        "options": [
          "Zero",
          "The raw target points minus penalties",
          "The division’s average stage score",
          "The competitor’s average score from the other stages"
        ],
        "note": "",
        "family": "9.7.6.1",
        "id": "164d6cc592c33b90"
      },
      {
        "rule": "9.7.7",
        "prompt": "The original score sheet is lost. The competitor has a legible duplicate acceptable to the Range Master. What is used?",
        "correct": "The competitor’s duplicate",
        "options": [
          "The competitor’s duplicate",
          "A reshoot regardless of the duplicate",
          "A zero score regardless of the duplicate",
          "The squad’s median score"
        ],
        "note": "",
        "family": "9.7.7",
        "id": "9f7a3ce2c9f20e67"
      },
      {
        "rule": "9.8.2",
        "prompt": "At Level IV, where must provisional stage results be posted after all competitors finish?",
        "correct": "At the range and the official match hotel",
        "options": [
          "At the range and the official match hotel",
          "At the range only",
          "At the official match hotel only",
          "At the range and the nearest hotel"
        ],
        "note": "",
        "family": "9.8.2",
        "id": "647b5a758a1113f2"
      },
      {
        "rule": "9.8.3",
        "prompt": "A competitor detects an error in the published provisional stage results. With whom must the appeal be filed?",
        "correct": "Stats Officer",
        "options": [
          "Stats Officer",
          "Chief Range Officer",
          "Range Master",
          "Match Director"
        ],
        "note": "",
        "family": "9.8.3",
        "id": "57791f0ed3b424b0"
      },
      {
        "rule": "9.9.1",
        "prompt": "A moving paper target presents part of its A zone at rest after activation. How is it classified?",
        "correct": "Non-disappearing",
        "options": [
          "Non-disappearing",
          "Disappearing unless the full A zone remains visible",
          "Disappearing unless part of the A zone was visible before activation too",
          "Disappearing because the target moves"
        ],
        "note": "",
        "family": "9.9.1",
        "id": "62043a204521db1d"
      },
      {
        "rule": "9.9.2",
        "prompt": "A genuinely disappearing target is activated before the last shot, but never engaged. Which of the following applies to that target?",
        "correct": "Neither a miss nor a failure-to-engage penalty",
        "options": [
          "Neither a miss nor a failure-to-engage penalty",
          "A miss penalty only",
          "A failure-to-engage penalty only",
          "Both a miss and a failure-to-engage penalty"
        ],
        "note": "",
        "family": "9.9.2",
        "id": "a24aa249ff5c8fb5"
      },
      {
        "rule": "9.9.3",
        "prompt": "A stationary target is partly concealed by a moving vision barrier. Part of its A zone remains exposed after activation. How is the target classified?",
        "correct": "Non-disappearing",
        "options": [
          "Non-disappearing",
          "Disappearing unless its full A zone is exposed",
          "Disappearing because the barrier moves",
          "Disappearing unless the barrier itself is a scoring target"
        ],
        "note": "",
        "family": "9.9.3",
        "id": "32b991228b675bae"
      },
      {
        "rule": "10.1.1",
        "prompt": "What must be recorded for procedural penalties on the score sheet?",
        "correct": "Both the number and the reason",
        "options": [
          "Both the number and the reason",
          "The number only",
          "The reason only",
          "The number and the competitor’s agreement"
        ],
        "note": "",
        "family": "10.1.1",
        "id": "98d216ec3d12862b"
      },
      {
        "rule": "10.1.4",
        "prompt": "A competitor fires while faulting a line, then fires at the same target from inside the line. What happens to the original applicable fault penalty?",
        "correct": "It still applies",
        "options": [
          "It still applies",
          "It is removed if the later shot hits",
          "It is removed if both shots hit",
          "It is changed to a miss if the later shot hits"
        ],
        "note": "",
        "family": "10.1.4",
        "id": "11b671e372d1b1db"
      },
      {
        "rule": "10.2.1",
        "prompt": "A competitor touches the ground beyond a Fault Line while shooting without gaining a significant advantage. How is the penalty normally counted?",
        "correct": "One per occurrence",
        "options": [
          "One per occurrence",
          "One per shot regardless of advantage",
          "One per target engaged",
          "One per scoring hit"
        ],
        "note": "",
        "family": "10.2.1",
        "id": "2687007cbe9cade2"
      },
      {
        "rule": "10.2.2",
        "prompt": "A competitor ignores a written stage procedure and gains a significant advantage. What penalty basis may apply in place of a single penalty for the occurrence?",
        "correct": "One per shot fired during the breach, subject to the applicable cap",
        "options": [
          "One per shot fired during the breach, subject to the applicable cap",
          "One per scoring hit during the breach, subject to the applicable cap",
          "One per target engaged during the breach, subject to the applicable cap",
          "One per shot fired after the breach ended, subject to the applicable cap"
        ],
        "note": "",
        "family": "10.2.2",
        "id": "acf60b7a43e61d24"
      },
      {
        "rule": "10.2.6",
        "prompt": "The Range Officer stops a competitor in time for a first instance of creeping after “Standby” and before the signal. What follows?",
        "correct": "A warning and a restart",
        "options": [
          "A warning and a restart",
          "A procedural penalty and a restart",
          "A warning without a restart",
          "A procedural penalty without a restart"
        ],
        "note": "",
        "family": "10.2.6",
        "id": "d0aa312c30a9e68f"
      },
      {
        "rule": "10.2.7",
        "prompt": "A competitor fails to engage a non-disappearing scoring target. What normally applies?",
        "correct": "One procedural per target plus applicable misses",
        "options": [
          "One procedural per target plus applicable misses",
          "One procedural per target instead of applicable misses",
          "One procedural per missed hit plus applicable misses",
          "Applicable misses only"
        ],
        "note": "",
        "family": "10.2.7",
        "id": "3b6f1c3d22f37ba8"
      },
      {
        "rule": "10.3.2",
        "prompt": "After issuing a disqualification, who must be notified as soon as possible?",
        "correct": "Range Master",
        "options": [
          "Range Master",
          "Chief Range Officer",
          "Stats Officer",
          "Match Director"
        ],
        "note": "",
        "family": "10.3.2",
        "id": "1e60f82bfdebcdb7"
      },
      {
        "rule": "11.1.3",
        "prompt": "A competitor disputes an initial Range Officer ruling. Which is the normal next level before the Range Master?",
        "correct": "Chief Range Officer",
        "options": [
          "Chief Range Officer",
          "Stats Officer",
          "Match Director",
          "Quartermaster"
        ],
        "note": "",
        "family": "11.1.3",
        "id": "e269dacafee493b9"
      },
      {
        "rule": "11.3.2",
        "prompt": "When must the Arbitration Committee reach its decision?",
        "correct": "Within 24 hours of the request or before final results are declared, whichever comes first",
        "options": [
          "Within 24 hours of the request or before final results are declared, whichever comes first",
          "Within 24 hours of the request or before final results are declared, whichever comes last",
          "Within 12 hours of the request or before final results are declared, whichever comes first",
          "Within 24 hours of the disputed call or before final results are declared, whichever comes first"
        ],
        "note": "",
        "family": "11.3.2",
        "id": "ab7a04fd99f427cc"
      },
      {
        "rule": "11.4.1",
        "prompt": "At a Level III match, which amount determines the arbitration fee in local currency?",
        "correct": "The lower of US$100 and the maximum individual entry fee",
        "options": [
          "The lower of US$100 and the maximum individual entry fee",
          "The higher of US$100 and the maximum individual entry fee",
          "The lower of US$100 and the minimum individual entry fee",
          "The maximum individual entry fee regardless of US$100"
        ],
        "note": "",
        "family": "11.4.1",
        "id": "d660fd589e3be129"
      },
      {
        "rule": "11.6.2",
        "prompt": "Who implements and posts the Arbitration Committee’s decision?",
        "correct": "Range Master",
        "options": [
          "Range Master",
          "Chief Range Officer",
          "Stats Officer",
          "Match Director"
        ],
        "note": "",
        "family": "11.6.2",
        "id": "b42ae1c861a560b7"
      },
      {
        "rule": "11.6.4",
        "prompt": "For what can a recorded Arbitration Committee decision serve as precedent?",
        "correct": "A similar subsequent incident at the same match",
        "options": [
          "A similar subsequent incident at the same match",
          "A similar earlier incident at the same match",
          "Any subsequent incident at the same match",
          "A similar incident only at the next match"
        ],
        "note": "",
        "family": "11.6.4",
        "id": "3487c77fa189a244"
      },
      {
        "rule": "11.7.1",
        "prompt": "May someone other than the competitor involved submit an appeal on a third-party basis?",
        "correct": "Yes, under the same Chapter 11 provisions",
        "options": [
          "Yes, under the same Chapter 11 provisions",
          "Yes, with a separate deadline set by the squad",
          "Yes, but only at Level IV and above",
          "No, only the competitor involved may appeal"
        ],
        "note": "",
        "family": "11.7.1",
        "id": "efd6cd40b8400be5"
      },
      {
        "rule": "1.2.1.1",
        "prompt": "A proposed Short Course requires 9 rounds to complete. To what maximum must the required count be reduced?",
        "correct": "8",
        "options": [
          "8",
          "6",
          "7",
          "9"
        ],
        "note": "",
        "family": "1.2.1.1",
        "id": "45f52245425a5fcb"
      },
      {
        "rule": "1.2.1.2",
        "prompt": "A proposed Medium Course requires 18 rounds to complete. What maximum required count applies?",
        "correct": "16",
        "options": [
          "16",
          "14",
          "15",
          "17"
        ],
        "note": "",
        "family": "1.2.1.2",
        "id": "55cdacdf535de9e7"
      },
      {
        "rule": "1.2.1.3",
        "prompt": "A proposed Long Course requires 30 rounds to complete. What is the maximum required count?",
        "correct": "28",
        "options": [
          "28",
          "26",
          "27",
          "29"
        ],
        "note": "",
        "family": "1.2.1.3",
        "id": "0ca8840841e66c9b"
      },
      {
        "rule": "5.1.11 · February 2026 interpretation",
        "prompt": "How does the February 2026 interpretation treat a firearm fitted with a forced reset trigger?",
        "correct": "It is prohibited",
        "options": [
          "It is prohibited",
          "It is permitted in Open only",
          "It is permitted in any division with a trigger weight check",
          "It is permitted only in Level I and II matches"
        ],
        "note": "",
        "family": "5.1.11 · February 2026 interpretation",
        "id": "3b3a8ef5e6f9580b"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Under Comstock, a competitor earns 35 target points, receives 10 penalty points and finishes in 5.00 seconds. What is the hit factor, rounded to four decimals?",
        "correct": "5.0000",
        "options": [
          "5.0000",
          "7.0000",
          "6.0000",
          "9.0000"
        ],
        "note": "Subtract penalties from target points before dividing by time.",
        "family": "comstock-hit-factor",
        "id": "21196cb03e879fbf"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "A 40-point stage is won with a hit factor of 8. A competitor records a hit factor of 4.0. How many stage points does the competitor earn?",
        "correct": "20.00",
        "options": [
          "20.00",
          "18.00",
          "19.00",
          "21.00"
        ],
        "note": "Multiply the available stage points by the competitor’s hit factor divided by the winner’s hit factor.",
        "family": "comstock-stage-points",
        "id": "3b223b933ed2c978"
      },
      {
        "rule": "9.2.3",
        "prompt": "A competitor earns 31.2750, 24.6425 and 19.3850 stage points in the three stages of a match. What is the match total?",
        "correct": "75.3025",
        "options": [
          "75.3025",
          "75.4025",
          "75.2025",
          "76.3025"
        ],
        "note": "",
        "family": "match-total",
        "id": "84eed92ac69be18f"
      },
      {
        "rule": "10.2.4",
        "prompt": "A competitor fires 1 shots before a mandatory reload point, 1 shots after it without reloading, and 2 shots after finally reloading. How many procedural penalties apply to the reload violation?",
        "correct": "1",
        "options": [
          "1",
          "0",
          "2",
          "3"
        ],
        "note": "Count only shots after the required reload point and before the reload.",
        "family": "10.2.4",
        "id": "b13c6a5f1fe012ab"
      },
      {
        "rule": "10.2.5",
        "prompt": "In a Cooper Tunnel, direct contact with the overhead material drops 1 pieces. Bumping an upright drops another 1. How many procedural penalties apply?",
        "correct": "1",
        "options": [
          "1",
          "0",
          "2",
          "3"
        ],
        "note": "Pieces that fall from striking an upright are exempt.",
        "family": "10.2.5",
        "id": "2bc7b9ec0789807c"
      },
      {
        "rule": "10.1.2",
        "prompt": "The Range Officer assesses 3 procedural penalties. What is the total point deduction for these penalties?",
        "correct": "30 points",
        "options": [
          "30 points",
          "10 points",
          "20 points",
          "40 points"
        ],
        "note": "",
        "family": "10.1.2",
        "id": "b3c678f4a8413c91"
      },
      {
        "rule": "10.2.1",
        "prompt": "A competitor fires 2 shots on each of 2 separate Fault Line breaches, re-entering fully between breaches and gaining no significant advantage. How many procedural penalties apply?",
        "correct": "2",
        "options": [
          "2",
          "1",
          "3",
          "4"
        ],
        "note": "With no significant advantage, count the separate occurrences.",
        "family": "10.2.1",
        "id": "65d0e1630759337f"
      },
      {
        "rule": "11.3.1",
        "prompt": "Match Officials record a disputed call at 08:00. The competitor talks to the Chief Range Officer 15 minutes later. What is the deadline to submit a written arbitration appeal and fee to the Range Master?",
        "correct": "09:00",
        "options": [
          "09:00",
          "08:45",
          "09:15",
          "09:30"
        ],
        "note": "",
        "family": "11.3.1",
        "id": "e73f27d96024f83f"
      },
      {
        "rule": "9.8.3",
        "prompt": "The provisional results show a timestamp of 12:00, but were actually posted at 12:11. What is the deadline for a competitor to file a results appeal with the Stats Officer?",
        "correct": "13:11",
        "options": [
          "13:11",
          "12:56",
          "13:26",
          "13:41"
        ],
        "note": "",
        "family": "9.8.3",
        "id": "dc0d2ecaa091ddbb"
      },
      {
        "rule": "11.4.1",
        "prompt": "At a Level III match the maximum individual entry fee is equivalent to US$58. What is the arbitration fee equivalent in local currency?",
        "correct": "US$58",
        "options": [
          "US$58",
          "US$100",
          "US$53",
          "US$63"
        ],
        "note": "Use the lower of US$100 and the maximum individual entry fee.",
        "family": "11.4.1",
        "id": "34d89f1347aee01f"
      },
      {
        "rule": "10.2.7",
        "prompt": "A competitor leaves 3 non-disappearing scoring targets completely unengaged. They engage the other 2 targets. Before adding any misses, how many failure-to-engage procedurals apply?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "",
        "family": "10.2.7",
        "id": "74b0110053b22816"
      },
      {
        "rule": "10.2.3",
        "prompt": "While faulting a line, a competitor fires 7 shots and gains a significant advantage. From that position a maximum of 2 scoring hits can be attained. What is the maximum number of procedurals for that fault?",
        "correct": "2",
        "options": [
          "2",
          "1",
          "3",
          "4"
        ],
        "note": "Multiple penalties for the fault are capped by the scoring hits attainable.",
        "family": "10.2.3",
        "id": "a67f0a3b80d3499d"
      },
      {
        "rule": "11.3.2",
        "prompt": "The Arbitration Committee receives a request at 10:00 on Saturday. Final results are scheduled to be declared at 09:40 on Sunday. What is the latest time the committee may rule under that schedule?",
        "correct": "Before 09:40 on Sunday",
        "options": [
          "Before 09:40 on Sunday",
          "By 10:00 on Sunday",
          "By 10:20 on Sunday",
          "Before 09:40 on Monday"
        ],
        "note": "The earlier limit is the declaration of final results.",
        "family": "11.3.2",
        "id": "bc60703e734bf1ae"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Under Comstock, a competitor earns 40 target points, receives 20 penalty points and finishes in 6.00 seconds. What is the hit factor, rounded to four decimals?",
        "correct": "3.3333",
        "options": [
          "3.3333",
          "6.6667",
          "5.0000",
          "10.0000"
        ],
        "note": "Subtract penalties from target points before dividing by time.",
        "family": "comstock-hit-factor",
        "id": "221b267a71db93cf"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "A 50-point stage is won with a hit factor of 9. A competitor records a hit factor of 5.4. How many stage points does the competitor earn?",
        "correct": "30.00",
        "options": [
          "30.00",
          "28.00",
          "29.00",
          "31.00"
        ],
        "note": "Multiply the available stage points by the competitor’s hit factor divided by the winner’s hit factor.",
        "family": "comstock-stage-points",
        "id": "9ba6132933144df4"
      },
      {
        "rule": "9.2.3",
        "prompt": "A competitor earns 33.2750, 25.6425 and 22.3850 stage points in the three stages of a match. What is the match total?",
        "correct": "81.3025",
        "options": [
          "81.3025",
          "81.4025",
          "81.2025",
          "82.3025"
        ],
        "note": "",
        "family": "match-total",
        "id": "2a2ddc7a971836c3"
      },
      {
        "rule": "10.2.4",
        "prompt": "A competitor fires 2 shots before a mandatory reload point, 1 shots after it without reloading, and 3 shots after finally reloading. How many procedural penalties apply to the reload violation?",
        "correct": "1",
        "options": [
          "1",
          "0",
          "2",
          "3"
        ],
        "note": "Count only shots after the required reload point and before the reload.",
        "family": "10.2.4",
        "id": "762cf162802b119a"
      },
      {
        "rule": "10.2.5",
        "prompt": "In a Cooper Tunnel, direct contact with the overhead material drops 2 pieces. Bumping an upright drops another 1. How many procedural penalties apply?",
        "correct": "2",
        "options": [
          "2",
          "1",
          "3",
          "4"
        ],
        "note": "Pieces that fall from striking an upright are exempt.",
        "family": "10.2.5",
        "id": "530bd84ef8b47216"
      },
      {
        "rule": "10.1.2",
        "prompt": "The Range Officer assesses 4 procedural penalties. What is the total point deduction for these penalties?",
        "correct": "40 points",
        "options": [
          "40 points",
          "20 points",
          "30 points",
          "50 points"
        ],
        "note": "",
        "family": "10.1.2",
        "id": "a7aaa4caf4f065cd"
      },
      {
        "rule": "10.2.1",
        "prompt": "A competitor fires 2 shots on each of 3 separate Fault Line breaches, re-entering fully between breaches and gaining no significant advantage. How many procedural penalties apply?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "With no significant advantage, count the separate occurrences.",
        "family": "10.2.1",
        "id": "b6d742daab217181"
      },
      {
        "rule": "11.3.1",
        "prompt": "Match Officials record a disputed call at 08:23. The competitor talks to the Chief Range Officer 15 minutes later. What is the deadline to submit a written arbitration appeal and fee to the Range Master?",
        "correct": "09:23",
        "options": [
          "09:23",
          "09:08",
          "09:38",
          "09:53"
        ],
        "note": "",
        "family": "11.3.1",
        "id": "fd2b9c3ae8f0e93c"
      },
      {
        "rule": "9.8.3",
        "prompt": "The provisional results show a timestamp of 12:17, but were actually posted at 12:29. What is the deadline for a competitor to file a results appeal with the Stats Officer?",
        "correct": "13:29",
        "options": [
          "13:29",
          "13:14",
          "13:44",
          "13:59"
        ],
        "note": "",
        "family": "9.8.3",
        "id": "75719e2f068672a0"
      },
      {
        "rule": "11.4.1",
        "prompt": "At a Level III match the maximum individual entry fee is equivalent to US$115. What is the arbitration fee equivalent in local currency?",
        "correct": "US$100",
        "options": [
          "US$100",
          "US$115",
          "US$95",
          "US$105"
        ],
        "note": "Use the lower of US$100 and the maximum individual entry fee.",
        "family": "11.4.1",
        "id": "7047ed8525176aec"
      },
      {
        "rule": "10.2.7",
        "prompt": "A competitor leaves 4 non-disappearing scoring targets completely unengaged. They engage the other 3 targets. Before adding any misses, how many failure-to-engage procedurals apply?",
        "correct": "4",
        "options": [
          "4",
          "3",
          "5",
          "6"
        ],
        "note": "",
        "family": "10.2.7",
        "id": "5f3e9af5d086e70f"
      },
      {
        "rule": "10.2.3",
        "prompt": "While faulting a line, a competitor fires 8 shots and gains a significant advantage. From that position a maximum of 3 scoring hits can be attained. What is the maximum number of procedurals for that fault?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "Multiple penalties for the fault are capped by the scoring hits attainable.",
        "family": "10.2.3",
        "id": "ebc3eaec4c4e60c1"
      },
      {
        "rule": "11.3.2",
        "prompt": "The Arbitration Committee receives a request at 10:19 on Saturday. The Match Director will declare the results final at 10:39 on Sunday. What deadline applies to the committee’s decision?",
        "correct": "By 10:19 on Sunday",
        "options": [
          "By 10:19 on Sunday",
          "Before 10:39 on Sunday",
          "By 09:59 on Sunday",
          "By 10:19 on Monday"
        ],
        "note": "The 24-hour deadline arrives before the declaration of final results.",
        "family": "11.3.2",
        "id": "e4ad89d611716d41"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Under Comstock, a competitor earns 45 target points, receives 30 penalty points and finishes in 7.00 seconds. What is the hit factor, rounded to four decimals?",
        "correct": "2.1429",
        "options": [
          "2.1429",
          "6.4286",
          "4.2857",
          "10.7143"
        ],
        "note": "Subtract penalties from target points before dividing by time.",
        "family": "comstock-hit-factor",
        "id": "811fb111204f1db3"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "A 60-point stage is won with a hit factor of 10. A competitor records a hit factor of 7.0. How many stage points does the competitor earn?",
        "correct": "42.00",
        "options": [
          "42.00",
          "40.00",
          "41.00",
          "43.00"
        ],
        "note": "Multiply the available stage points by the competitor’s hit factor divided by the winner’s hit factor.",
        "family": "comstock-stage-points",
        "id": "52ec8e4e492a485c"
      },
      {
        "rule": "9.2.3",
        "prompt": "A competitor earns 35.2750, 26.6425 and 25.3850 stage points in the three stages of a match. What is the match total?",
        "correct": "87.3025",
        "options": [
          "87.3025",
          "87.4025",
          "87.2025",
          "88.3025"
        ],
        "note": "",
        "family": "match-total",
        "id": "9de1b28afcc923d6"
      },
      {
        "rule": "10.2.4",
        "prompt": "A competitor fires 3 shots before a mandatory reload point, 1 shots after it without reloading, and 4 shots after finally reloading. How many procedural penalties apply to the reload violation?",
        "correct": "1",
        "options": [
          "1",
          "0",
          "2",
          "3"
        ],
        "note": "Count only shots after the required reload point and before the reload.",
        "family": "10.2.4",
        "id": "881a8b7504b60cad"
      },
      {
        "rule": "10.2.5",
        "prompt": "In a Cooper Tunnel, direct contact with the overhead material drops 3 pieces. Bumping an upright drops another 1. How many procedural penalties apply?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "Pieces that fall from striking an upright are exempt.",
        "family": "10.2.5",
        "id": "5137b4943cba8ec9"
      },
      {
        "rule": "10.1.2",
        "prompt": "The Range Officer assesses 5 procedural penalties. What is the total point deduction for these penalties?",
        "correct": "50 points",
        "options": [
          "50 points",
          "30 points",
          "40 points",
          "60 points"
        ],
        "note": "",
        "family": "10.1.2",
        "id": "8d6f73489143fdbe"
      },
      {
        "rule": "10.2.1",
        "prompt": "A competitor fires 2 shots on each of 4 separate Fault Line breaches, re-entering fully between breaches and gaining no significant advantage. How many procedural penalties apply?",
        "correct": "4",
        "options": [
          "4",
          "3",
          "5",
          "6"
        ],
        "note": "With no significant advantage, count the separate occurrences.",
        "family": "10.2.1",
        "id": "bfd45046f19468df"
      },
      {
        "rule": "11.3.1",
        "prompt": "Match Officials record a disputed call at 08:46. The competitor talks to the Chief Range Officer 15 minutes later. What is the deadline to submit a written arbitration appeal and fee to the Range Master?",
        "correct": "09:46",
        "options": [
          "09:46",
          "09:31",
          "10:01",
          "10:16"
        ],
        "note": "",
        "family": "11.3.1",
        "id": "1646ce84911500d6"
      },
      {
        "rule": "9.8.3",
        "prompt": "The provisional results show a timestamp of 12:34, but were actually posted at 12:47. What is the deadline for a competitor to file a results appeal with the Stats Officer?",
        "correct": "13:47",
        "options": [
          "13:47",
          "13:32",
          "14:02",
          "14:17"
        ],
        "note": "",
        "family": "9.8.3",
        "id": "f183f4405bae9693"
      },
      {
        "rule": "11.4.1",
        "prompt": "At a Level III match the maximum individual entry fee is equivalent to US$62. What is the arbitration fee equivalent in local currency?",
        "correct": "US$62",
        "options": [
          "US$62",
          "US$100",
          "US$57",
          "US$67"
        ],
        "note": "Use the lower of US$100 and the maximum individual entry fee.",
        "family": "11.4.1",
        "id": "2e62692cf1be487d"
      },
      {
        "rule": "10.2.7",
        "prompt": "A competitor leaves 5 non-disappearing scoring targets completely unengaged. They engage the other 4 targets. Before adding any misses, how many failure-to-engage procedurals apply?",
        "correct": "5",
        "options": [
          "5",
          "4",
          "6",
          "7"
        ],
        "note": "",
        "family": "10.2.7",
        "id": "0d8a48f3191f4847"
      },
      {
        "rule": "10.2.3",
        "prompt": "While faulting a line, a competitor fires 9 shots and gains a significant advantage. From that position a maximum of 4 scoring hits can be attained. What is the maximum number of procedurals for that fault?",
        "correct": "4",
        "options": [
          "4",
          "3",
          "5",
          "6"
        ],
        "note": "Multiple penalties for the fault are capped by the scoring hits attainable.",
        "family": "10.2.3",
        "id": "0ef941d62c1d78e5"
      },
      {
        "rule": "11.3.2",
        "prompt": "The Arbitration Committee receives a request at 10:38 on Saturday. Final results are scheduled to be declared at 10:18 on Sunday. What is the latest time the committee may rule under that schedule?",
        "correct": "Before 10:18 on Sunday",
        "options": [
          "Before 10:18 on Sunday",
          "By 10:38 on Sunday",
          "By 10:58 on Sunday",
          "Before 10:18 on Monday"
        ],
        "note": "The earlier limit is the declaration of final results.",
        "family": "11.3.2",
        "id": "de38b1edabf021d6"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Under Comstock, a competitor earns 50 target points, receives 10 penalty points and finishes in 8.00 seconds. What is the hit factor, rounded to four decimals?",
        "correct": "5.0000",
        "options": [
          "5.0000",
          "6.2500",
          "5.6250",
          "7.5000"
        ],
        "note": "Subtract penalties from target points before dividing by time.",
        "family": "comstock-hit-factor",
        "id": "a9248c139a4373b7"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "A 70-point stage is won with a hit factor of 8. A competitor records a hit factor of 6.00. How many stage points does the competitor earn?",
        "correct": "52.50",
        "options": [
          "52.50",
          "50.50",
          "51.50",
          "53.50"
        ],
        "note": "Multiply the available stage points by the competitor’s hit factor divided by the winner’s hit factor.",
        "family": "comstock-stage-points",
        "id": "47f4cad0ab27e8ba"
      },
      {
        "rule": "9.2.3",
        "prompt": "A competitor earns 37.2750, 27.6425 and 28.3850 stage points in the three stages of a match. What is the match total?",
        "correct": "93.3025",
        "options": [
          "93.3025",
          "93.4025",
          "93.2025",
          "94.3025"
        ],
        "note": "",
        "family": "match-total",
        "id": "c9e15cec5e09ea03"
      },
      {
        "rule": "10.2.4",
        "prompt": "A competitor fires 4 shots before a mandatory reload point, 2 shots after it without reloading, and 2 shots after finally reloading. How many procedural penalties apply to the reload violation?",
        "correct": "2",
        "options": [
          "2",
          "1",
          "3",
          "4"
        ],
        "note": "Count only shots after the required reload point and before the reload.",
        "family": "10.2.4",
        "id": "006d194da76716db"
      },
      {
        "rule": "10.2.5",
        "prompt": "In a Cooper Tunnel, direct contact with the overhead material drops 4 pieces. Bumping an upright drops another 1. How many procedural penalties apply?",
        "correct": "4",
        "options": [
          "4",
          "3",
          "5",
          "6"
        ],
        "note": "Pieces that fall from striking an upright are exempt.",
        "family": "10.2.5",
        "id": "8e37dab2e4ff09d1"
      },
      {
        "rule": "10.1.2",
        "prompt": "The Range Officer assesses 6 procedural penalties. What is the total point deduction for these penalties?",
        "correct": "60 points",
        "options": [
          "60 points",
          "40 points",
          "50 points",
          "70 points"
        ],
        "note": "",
        "family": "10.1.2",
        "id": "1b476140e351fce9"
      },
      {
        "rule": "10.2.1",
        "prompt": "A competitor fires 2 shots on each of 5 separate Fault Line breaches, re-entering fully between breaches and gaining no significant advantage. How many procedural penalties apply?",
        "correct": "5",
        "options": [
          "5",
          "4",
          "6",
          "7"
        ],
        "note": "With no significant advantage, count the separate occurrences.",
        "family": "10.2.1",
        "id": "e6660f0d591b4f7d"
      },
      {
        "rule": "11.3.1",
        "prompt": "Match Officials record a disputed call at 09:09. The competitor talks to the Chief Range Officer 15 minutes later. What is the deadline to submit a written arbitration appeal and fee to the Range Master?",
        "correct": "10:09",
        "options": [
          "10:09",
          "09:54",
          "10:24",
          "10:39"
        ],
        "note": "",
        "family": "11.3.1",
        "id": "3a39e0f7f339bf48"
      },
      {
        "rule": "9.8.3",
        "prompt": "The provisional results show a timestamp of 12:51, but were actually posted at 13:05. What is the deadline for a competitor to file a results appeal with the Stats Officer?",
        "correct": "14:05",
        "options": [
          "14:05",
          "13:50",
          "14:20",
          "14:35"
        ],
        "note": "",
        "family": "9.8.3",
        "id": "f52890a6657389c5"
      },
      {
        "rule": "11.4.1",
        "prompt": "At a Level III match the maximum individual entry fee is equivalent to US$121. What is the arbitration fee equivalent in local currency?",
        "correct": "US$100",
        "options": [
          "US$100",
          "US$121",
          "US$95",
          "US$105"
        ],
        "note": "Use the lower of US$100 and the maximum individual entry fee.",
        "family": "11.4.1",
        "id": "f8dd8ce82b7d6cb7"
      },
      {
        "rule": "10.2.7",
        "prompt": "A competitor leaves 6 non-disappearing scoring targets completely unengaged. They engage the other 5 targets. Before adding any misses, how many failure-to-engage procedurals apply?",
        "correct": "6",
        "options": [
          "6",
          "5",
          "7",
          "8"
        ],
        "note": "",
        "family": "10.2.7",
        "id": "d6027ed7afcbf0dc"
      },
      {
        "rule": "10.2.3",
        "prompt": "While faulting a line, a competitor fires 10 shots and gains a significant advantage. From that position a maximum of 5 scoring hits can be attained. What is the maximum number of procedurals for that fault?",
        "correct": "5",
        "options": [
          "5",
          "4",
          "6",
          "7"
        ],
        "note": "Multiple penalties for the fault are capped by the scoring hits attainable.",
        "family": "10.2.3",
        "id": "78f0f08139c28834"
      },
      {
        "rule": "11.3.2",
        "prompt": "The Arbitration Committee receives a request at 10:57 on Saturday. The Match Director will declare the results final at 11:17 on Sunday. What deadline applies to the committee’s decision?",
        "correct": "By 10:57 on Sunday",
        "options": [
          "By 10:57 on Sunday",
          "Before 11:17 on Sunday",
          "By 10:37 on Sunday",
          "By 10:57 on Monday"
        ],
        "note": "The 24-hour deadline arrives before the declaration of final results.",
        "family": "11.3.2",
        "id": "682a783c53b03f55"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Under Comstock, a competitor earns 55 target points, receives 20 penalty points and finishes in 5.00 seconds. What is the hit factor, rounded to four decimals?",
        "correct": "7.0000",
        "options": [
          "7.0000",
          "11.0000",
          "9.0000",
          "15.0000"
        ],
        "note": "Subtract penalties from target points before dividing by time.",
        "family": "comstock-hit-factor",
        "id": "6b4917642dba515c"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "A 80-point stage is won with a hit factor of 9. A competitor records a hit factor of 7.2. How many stage points does the competitor earn?",
        "correct": "64.00",
        "options": [
          "64.00",
          "62.00",
          "63.00",
          "65.00"
        ],
        "note": "Multiply the available stage points by the competitor’s hit factor divided by the winner’s hit factor.",
        "family": "comstock-stage-points",
        "id": "28ebb69b1638fbdf"
      },
      {
        "rule": "9.2.3",
        "prompt": "A competitor earns 39.2750, 28.6425 and 31.3850 stage points in the three stages of a match. What is the match total?",
        "correct": "99.3025",
        "options": [
          "99.3025",
          "99.4025",
          "99.2025",
          "100.3025"
        ],
        "note": "",
        "family": "match-total",
        "id": "5f4e872e5af06f31"
      },
      {
        "rule": "10.2.4",
        "prompt": "A competitor fires 1 shots before a mandatory reload point, 2 shots after it without reloading, and 3 shots after finally reloading. How many procedural penalties apply to the reload violation?",
        "correct": "2",
        "options": [
          "2",
          "1",
          "3",
          "4"
        ],
        "note": "Count only shots after the required reload point and before the reload.",
        "family": "10.2.4",
        "id": "6e024231dd5c61ec"
      },
      {
        "rule": "10.2.5",
        "prompt": "In a Cooper Tunnel, direct contact with the overhead material drops 1 pieces. Bumping an upright drops another 2. How many procedural penalties apply?",
        "correct": "1",
        "options": [
          "1",
          "0",
          "2",
          "3"
        ],
        "note": "Pieces that fall from striking an upright are exempt.",
        "family": "10.2.5",
        "id": "a494bfc8fae26d63"
      },
      {
        "rule": "10.1.2",
        "prompt": "The Range Officer assesses 7 procedural penalties. What is the total point deduction for these penalties?",
        "correct": "70 points",
        "options": [
          "70 points",
          "50 points",
          "60 points",
          "80 points"
        ],
        "note": "",
        "family": "10.1.2",
        "id": "47ba4f62b92a41c2"
      },
      {
        "rule": "10.2.1",
        "prompt": "A competitor fires 3 shots on each of 2 separate Fault Line breaches, re-entering fully between breaches and gaining no significant advantage. How many procedural penalties apply?",
        "correct": "2",
        "options": [
          "2",
          "1",
          "3",
          "4"
        ],
        "note": "With no significant advantage, count the separate occurrences.",
        "family": "10.2.1",
        "id": "ae87a1170740806b"
      },
      {
        "rule": "11.3.1",
        "prompt": "Match Officials record a disputed call at 09:32. The competitor talks to the Chief Range Officer 15 minutes later. What is the deadline to submit a written arbitration appeal and fee to the Range Master?",
        "correct": "10:32",
        "options": [
          "10:32",
          "10:17",
          "10:47",
          "11:02"
        ],
        "note": "",
        "family": "11.3.1",
        "id": "6588158dd42d9117"
      },
      {
        "rule": "9.8.3",
        "prompt": "The provisional results show a timestamp of 13:08, but were actually posted at 13:19. What is the deadline for a competitor to file a results appeal with the Stats Officer?",
        "correct": "14:19",
        "options": [
          "14:19",
          "14:04",
          "14:34",
          "14:49"
        ],
        "note": "",
        "family": "9.8.3",
        "id": "29a955b04f06e0ec"
      },
      {
        "rule": "11.4.1",
        "prompt": "At a Level III match the maximum individual entry fee is equivalent to US$66. What is the arbitration fee equivalent in local currency?",
        "correct": "US$66",
        "options": [
          "US$66",
          "US$100",
          "US$61",
          "US$71"
        ],
        "note": "Use the lower of US$100 and the maximum individual entry fee.",
        "family": "11.4.1",
        "id": "ee9ce1e4aa409d25"
      },
      {
        "rule": "10.2.7",
        "prompt": "A competitor leaves 3 non-disappearing scoring targets completely unengaged. They engage the other 6 targets. Before adding any misses, how many failure-to-engage procedurals apply?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "",
        "family": "10.2.7",
        "id": "40285104c3498727"
      },
      {
        "rule": "10.2.3",
        "prompt": "While faulting a line, a competitor fires 11 shots and gains a significant advantage. From that position a maximum of 6 scoring hits can be attained. What is the maximum number of procedurals for that fault?",
        "correct": "6",
        "options": [
          "6",
          "5",
          "7",
          "8"
        ],
        "note": "Multiple penalties for the fault are capped by the scoring hits attainable.",
        "family": "10.2.3",
        "id": "33eda48998525a75"
      },
      {
        "rule": "11.3.2",
        "prompt": "The Arbitration Committee receives a request at 11:16 on Saturday. Final results are scheduled to be declared at 10:56 on Sunday. What is the latest time the committee may rule under that schedule?",
        "correct": "Before 10:56 on Sunday",
        "options": [
          "Before 10:56 on Sunday",
          "By 11:16 on Sunday",
          "By 11:36 on Sunday",
          "Before 10:56 on Monday"
        ],
        "note": "The earlier limit is the declaration of final results.",
        "family": "11.3.2",
        "id": "0ca050eb61851f0f"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Under Comstock, a competitor earns 60 target points, receives 30 penalty points and finishes in 6.00 seconds. What is the hit factor, rounded to four decimals?",
        "correct": "5.0000",
        "options": [
          "5.0000",
          "10.0000",
          "7.5000",
          "15.0000"
        ],
        "note": "Subtract penalties from target points before dividing by time.",
        "family": "comstock-hit-factor",
        "id": "e0956e1c97004596"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "A 90-point stage is won with a hit factor of 10. A competitor records a hit factor of 9.0. How many stage points does the competitor earn?",
        "correct": "81.00",
        "options": [
          "81.00",
          "79.00",
          "80.00",
          "82.00"
        ],
        "note": "Multiply the available stage points by the competitor’s hit factor divided by the winner’s hit factor.",
        "family": "comstock-stage-points",
        "id": "14715e3e5cf69e4f"
      },
      {
        "rule": "9.2.3",
        "prompt": "A competitor earns 41.2750, 29.6425 and 34.3850 stage points in the three stages of a match. What is the match total?",
        "correct": "105.3025",
        "options": [
          "105.3025",
          "105.4025",
          "105.2025",
          "106.3025"
        ],
        "note": "",
        "family": "match-total",
        "id": "074fa194069e06db"
      },
      {
        "rule": "10.2.4",
        "prompt": "A competitor fires 2 shots before a mandatory reload point, 2 shots after it without reloading, and 4 shots after finally reloading. How many procedural penalties apply to the reload violation?",
        "correct": "2",
        "options": [
          "2",
          "1",
          "3",
          "4"
        ],
        "note": "Count only shots after the required reload point and before the reload.",
        "family": "10.2.4",
        "id": "68323701f25334fb"
      },
      {
        "rule": "10.2.5",
        "prompt": "In a Cooper Tunnel, direct contact with the overhead material drops 2 pieces. Bumping an upright drops another 2. How many procedural penalties apply?",
        "correct": "2",
        "options": [
          "2",
          "1",
          "3",
          "4"
        ],
        "note": "Pieces that fall from striking an upright are exempt.",
        "family": "10.2.5",
        "id": "d78787214b190a6e"
      },
      {
        "rule": "10.1.2",
        "prompt": "The Range Officer assesses 8 procedural penalties. What is the total point deduction for these penalties?",
        "correct": "80 points",
        "options": [
          "80 points",
          "60 points",
          "70 points",
          "90 points"
        ],
        "note": "",
        "family": "10.1.2",
        "id": "5d5ad2570ac219a8"
      },
      {
        "rule": "10.2.1",
        "prompt": "A competitor fires 3 shots on each of 3 separate Fault Line breaches, re-entering fully between breaches and gaining no significant advantage. How many procedural penalties apply?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "With no significant advantage, count the separate occurrences.",
        "family": "10.2.1",
        "id": "58f01062c3509bdd"
      },
      {
        "rule": "11.3.1",
        "prompt": "Match Officials record a disputed call at 09:55. The competitor talks to the Chief Range Officer 15 minutes later. What is the deadline to submit a written arbitration appeal and fee to the Range Master?",
        "correct": "10:55",
        "options": [
          "10:55",
          "10:40",
          "11:10",
          "11:25"
        ],
        "note": "",
        "family": "11.3.1",
        "id": "007010000caf70b8"
      },
      {
        "rule": "9.8.3",
        "prompt": "The provisional results show a timestamp of 13:25, but were actually posted at 13:37. What is the deadline for a competitor to file a results appeal with the Stats Officer?",
        "correct": "14:37",
        "options": [
          "14:37",
          "14:22",
          "14:52",
          "15:07"
        ],
        "note": "",
        "family": "9.8.3",
        "id": "251642cc8f8c7f1f"
      },
      {
        "rule": "11.4.1",
        "prompt": "At a Level III match the maximum individual entry fee is equivalent to US$127. What is the arbitration fee equivalent in local currency?",
        "correct": "US$100",
        "options": [
          "US$100",
          "US$127",
          "US$95",
          "US$105"
        ],
        "note": "Use the lower of US$100 and the maximum individual entry fee.",
        "family": "11.4.1",
        "id": "5f76c896f353c461"
      },
      {
        "rule": "10.2.7",
        "prompt": "A competitor leaves 4 non-disappearing scoring targets completely unengaged. They engage the other 7 targets. Before adding any misses, how many failure-to-engage procedurals apply?",
        "correct": "4",
        "options": [
          "4",
          "3",
          "5",
          "6"
        ],
        "note": "",
        "family": "10.2.7",
        "id": "9bd75fb0011635df"
      },
      {
        "rule": "10.2.3",
        "prompt": "While faulting a line, a competitor fires 12 shots and gains a significant advantage. From that position a maximum of 7 scoring hits can be attained. What is the maximum number of procedurals for that fault?",
        "correct": "7",
        "options": [
          "7",
          "6",
          "8",
          "9"
        ],
        "note": "Multiple penalties for the fault are capped by the scoring hits attainable.",
        "family": "10.2.3",
        "id": "fe4d0980cee323db"
      },
      {
        "rule": "11.3.2",
        "prompt": "The Arbitration Committee receives a request at 11:35 on Saturday. The Match Director will declare the results final at 11:55 on Sunday. What deadline applies to the committee’s decision?",
        "correct": "By 11:35 on Sunday",
        "options": [
          "By 11:35 on Sunday",
          "Before 11:55 on Sunday",
          "By 11:15 on Sunday",
          "By 11:35 on Monday"
        ],
        "note": "The 24-hour deadline arrives before the declaration of final results.",
        "family": "11.3.2",
        "id": "64eca1200b3dfb67"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Under Comstock, a competitor earns 65 target points, receives 10 penalty points and finishes in 7.00 seconds. What is the hit factor, rounded to four decimals?",
        "correct": "7.8571",
        "options": [
          "7.8571",
          "9.2857",
          "8.5714",
          "10.7143"
        ],
        "note": "Subtract penalties from target points before dividing by time.",
        "family": "comstock-hit-factor",
        "id": "dc1a8095996ad676"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "A 100-point stage is won with a hit factor of 8. A competitor records a hit factor of 4.0. How many stage points does the competitor earn?",
        "correct": "50.00",
        "options": [
          "50.00",
          "48.00",
          "49.00",
          "51.00"
        ],
        "note": "Multiply the available stage points by the competitor’s hit factor divided by the winner’s hit factor.",
        "family": "comstock-stage-points",
        "id": "a40790b1b62def3d"
      },
      {
        "rule": "9.2.3",
        "prompt": "A competitor earns 43.2750, 30.6425 and 37.3850 stage points in the three stages of a match. What is the match total?",
        "correct": "111.3025",
        "options": [
          "111.3025",
          "111.4025",
          "111.2025",
          "112.3025"
        ],
        "note": "",
        "family": "match-total",
        "id": "94c3a1b2ed2be128"
      },
      {
        "rule": "10.2.4",
        "prompt": "A competitor fires 3 shots before a mandatory reload point, 3 shots after it without reloading, and 2 shots after finally reloading. How many procedural penalties apply to the reload violation?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "Count only shots after the required reload point and before the reload.",
        "family": "10.2.4",
        "id": "74af5d5f21fe1dfb"
      },
      {
        "rule": "10.2.5",
        "prompt": "In a Cooper Tunnel, direct contact with the overhead material drops 3 pieces. Bumping an upright drops another 2. How many procedural penalties apply?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "Pieces that fall from striking an upright are exempt.",
        "family": "10.2.5",
        "id": "1f535390a3951d7e"
      },
      {
        "rule": "10.1.2",
        "prompt": "The Range Officer assesses 9 procedural penalties. What is the total point deduction for these penalties?",
        "correct": "90 points",
        "options": [
          "90 points",
          "70 points",
          "80 points",
          "100 points"
        ],
        "note": "",
        "family": "10.1.2",
        "id": "8408d43671db7a0e"
      },
      {
        "rule": "10.2.1",
        "prompt": "A competitor fires 3 shots on each of 4 separate Fault Line breaches, re-entering fully between breaches and gaining no significant advantage. How many procedural penalties apply?",
        "correct": "4",
        "options": [
          "4",
          "3",
          "5",
          "6"
        ],
        "note": "With no significant advantage, count the separate occurrences.",
        "family": "10.2.1",
        "id": "2ff8e267c91dde1a"
      },
      {
        "rule": "11.3.1",
        "prompt": "Match Officials record a disputed call at 10:18. The competitor talks to the Chief Range Officer 15 minutes later. What is the deadline to submit a written arbitration appeal and fee to the Range Master?",
        "correct": "11:18",
        "options": [
          "11:18",
          "11:03",
          "11:33",
          "11:48"
        ],
        "note": "",
        "family": "11.3.1",
        "id": "c965916fb531369c"
      },
      {
        "rule": "9.8.3",
        "prompt": "The provisional results show a timestamp of 13:42, but were actually posted at 13:55. What is the deadline for a competitor to file a results appeal with the Stats Officer?",
        "correct": "14:55",
        "options": [
          "14:55",
          "14:40",
          "15:10",
          "15:25"
        ],
        "note": "",
        "family": "9.8.3",
        "id": "2cf52a01b6b110fd"
      },
      {
        "rule": "11.4.1",
        "prompt": "At a Level III match the maximum individual entry fee is equivalent to US$70. What is the arbitration fee equivalent in local currency?",
        "correct": "US$70",
        "options": [
          "US$70",
          "US$100",
          "US$65",
          "US$75"
        ],
        "note": "Use the lower of US$100 and the maximum individual entry fee.",
        "family": "11.4.1",
        "id": "d811849a35cbcaa0"
      },
      {
        "rule": "10.2.7",
        "prompt": "A competitor leaves 5 non-disappearing scoring targets completely unengaged. They engage the other 8 targets. Before adding any misses, how many failure-to-engage procedurals apply?",
        "correct": "5",
        "options": [
          "5",
          "4",
          "6",
          "7"
        ],
        "note": "",
        "family": "10.2.7",
        "id": "fd6b874ef06e73b5"
      },
      {
        "rule": "10.2.3",
        "prompt": "While faulting a line, a competitor fires 13 shots and gains a significant advantage. From that position a maximum of 8 scoring hits can be attained. What is the maximum number of procedurals for that fault?",
        "correct": "8",
        "options": [
          "8",
          "7",
          "9",
          "10"
        ],
        "note": "Multiple penalties for the fault are capped by the scoring hits attainable.",
        "family": "10.2.3",
        "id": "e26303c2b6fb8eef"
      },
      {
        "rule": "11.3.2",
        "prompt": "The Arbitration Committee receives a request at 11:54 on Saturday. Final results are scheduled to be declared at 11:34 on Sunday. What is the latest time the committee may rule under that schedule?",
        "correct": "Before 11:34 on Sunday",
        "options": [
          "Before 11:34 on Sunday",
          "By 11:54 on Sunday",
          "By 12:14 on Sunday",
          "Before 11:34 on Monday"
        ],
        "note": "The earlier limit is the declaration of final results.",
        "family": "11.3.2",
        "id": "2f113c3dcf31d25b"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Under Comstock, a competitor earns 70 target points, receives 20 penalty points and finishes in 8.00 seconds. What is the hit factor, rounded to four decimals?",
        "correct": "6.2500",
        "options": [
          "6.2500",
          "8.7500",
          "7.5000",
          "11.2500"
        ],
        "note": "Subtract penalties from target points before dividing by time.",
        "family": "comstock-hit-factor",
        "id": "194827b22eba79b3"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "A 110-point stage is won with a hit factor of 9. A competitor records a hit factor of 5.4. How many stage points does the competitor earn?",
        "correct": "66.00",
        "options": [
          "66.00",
          "64.00",
          "65.00",
          "67.00"
        ],
        "note": "Multiply the available stage points by the competitor’s hit factor divided by the winner’s hit factor.",
        "family": "comstock-stage-points",
        "id": "ae96f35457d3f054"
      },
      {
        "rule": "9.2.3",
        "prompt": "A competitor earns 45.2750, 31.6425 and 40.3850 stage points in the three stages of a match. What is the match total?",
        "correct": "117.3025",
        "options": [
          "117.3025",
          "117.4025",
          "117.2025",
          "118.3025"
        ],
        "note": "",
        "family": "match-total",
        "id": "14aae3449b1f03c8"
      },
      {
        "rule": "10.2.4",
        "prompt": "A competitor fires 4 shots before a mandatory reload point, 3 shots after it without reloading, and 3 shots after finally reloading. How many procedural penalties apply to the reload violation?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "Count only shots after the required reload point and before the reload.",
        "family": "10.2.4",
        "id": "ed76f5a3f5fb66c2"
      },
      {
        "rule": "10.2.5",
        "prompt": "In a Cooper Tunnel, direct contact with the overhead material drops 4 pieces. Bumping an upright drops another 2. How many procedural penalties apply?",
        "correct": "4",
        "options": [
          "4",
          "3",
          "5",
          "6"
        ],
        "note": "Pieces that fall from striking an upright are exempt.",
        "family": "10.2.5",
        "id": "491749653d1d7d26"
      },
      {
        "rule": "10.1.2",
        "prompt": "The Range Officer assesses 10 procedural penalties. What is the total point deduction for these penalties?",
        "correct": "100 points",
        "options": [
          "100 points",
          "80 points",
          "90 points",
          "110 points"
        ],
        "note": "",
        "family": "10.1.2",
        "id": "100e589875ff53f7"
      },
      {
        "rule": "10.2.1",
        "prompt": "A competitor fires 3 shots on each of 5 separate Fault Line breaches, re-entering fully between breaches and gaining no significant advantage. How many procedural penalties apply?",
        "correct": "5",
        "options": [
          "5",
          "4",
          "6",
          "7"
        ],
        "note": "With no significant advantage, count the separate occurrences.",
        "family": "10.2.1",
        "id": "5e49c94b26b2461c"
      },
      {
        "rule": "11.3.1",
        "prompt": "Match Officials record a disputed call at 10:41. The competitor talks to the Chief Range Officer 15 minutes later. What is the deadline to submit a written arbitration appeal and fee to the Range Master?",
        "correct": "11:41",
        "options": [
          "11:41",
          "11:26",
          "11:56",
          "12:11"
        ],
        "note": "",
        "family": "11.3.1",
        "id": "0d638cd42e10ffb0"
      },
      {
        "rule": "9.8.3",
        "prompt": "The provisional results show a timestamp of 13:59, but were actually posted at 14:13. What is the deadline for a competitor to file a results appeal with the Stats Officer?",
        "correct": "15:13",
        "options": [
          "15:13",
          "14:58",
          "15:28",
          "15:43"
        ],
        "note": "",
        "family": "9.8.3",
        "id": "09e5ceb49c90626e"
      },
      {
        "rule": "11.4.1",
        "prompt": "At a Level III match the maximum individual entry fee is equivalent to US$133. What is the arbitration fee equivalent in local currency?",
        "correct": "US$100",
        "options": [
          "US$100",
          "US$133",
          "US$95",
          "US$105"
        ],
        "note": "Use the lower of US$100 and the maximum individual entry fee.",
        "family": "11.4.1",
        "id": "274ea25396d70949"
      },
      {
        "rule": "10.2.7",
        "prompt": "A competitor leaves 6 non-disappearing scoring targets completely unengaged. They engage the other 9 targets. Before adding any misses, how many failure-to-engage procedurals apply?",
        "correct": "6",
        "options": [
          "6",
          "5",
          "7",
          "8"
        ],
        "note": "",
        "family": "10.2.7",
        "id": "5bd4bda93c64ae23"
      },
      {
        "rule": "10.2.3",
        "prompt": "While faulting a line, a competitor fires 14 shots and gains a significant advantage. From that position a maximum of 9 scoring hits can be attained. What is the maximum number of procedurals for that fault?",
        "correct": "9",
        "options": [
          "9",
          "8",
          "10",
          "11"
        ],
        "note": "Multiple penalties for the fault are capped by the scoring hits attainable.",
        "family": "10.2.3",
        "id": "8ba798773a134e49"
      },
      {
        "rule": "11.3.2",
        "prompt": "The Arbitration Committee receives a request at 12:13 on Saturday. The Match Director will declare the results final at 12:33 on Sunday. What deadline applies to the committee’s decision?",
        "correct": "By 12:13 on Sunday",
        "options": [
          "By 12:13 on Sunday",
          "Before 12:33 on Sunday",
          "By 11:53 on Sunday",
          "By 12:13 on Monday"
        ],
        "note": "The 24-hour deadline arrives before the declaration of final results.",
        "family": "11.3.2",
        "id": "87e95945c487e4d8"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Under Comstock, a competitor earns 75 target points, receives 30 penalty points and finishes in 5.00 seconds. What is the hit factor, rounded to four decimals?",
        "correct": "9.0000",
        "options": [
          "9.0000",
          "15.0000",
          "12.0000",
          "21.0000"
        ],
        "note": "Subtract penalties from target points before dividing by time.",
        "family": "comstock-hit-factor",
        "id": "6593ce04b3d67d7d"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "A 120-point stage is won with a hit factor of 10. A competitor records a hit factor of 7.0. How many stage points does the competitor earn?",
        "correct": "84.00",
        "options": [
          "84.00",
          "82.00",
          "83.00",
          "85.00"
        ],
        "note": "Multiply the available stage points by the competitor’s hit factor divided by the winner’s hit factor.",
        "family": "comstock-stage-points",
        "id": "125f67b0e89b3b29"
      },
      {
        "rule": "9.2.3",
        "prompt": "A competitor earns 47.2750, 32.6425 and 43.3850 stage points in the three stages of a match. What is the match total?",
        "correct": "123.3025",
        "options": [
          "123.3025",
          "123.4025",
          "123.2025",
          "124.3025"
        ],
        "note": "",
        "family": "match-total",
        "id": "ac71cbd4257fe44c"
      },
      {
        "rule": "10.2.4",
        "prompt": "A competitor fires 1 shots before a mandatory reload point, 3 shots after it without reloading, and 4 shots after finally reloading. How many procedural penalties apply to the reload violation?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "Count only shots after the required reload point and before the reload.",
        "family": "10.2.4",
        "id": "ad42741d9b5b0b33"
      },
      {
        "rule": "10.2.5",
        "prompt": "In a Cooper Tunnel, direct contact with the overhead material drops 1 pieces. Bumping an upright drops another 3. How many procedural penalties apply?",
        "correct": "1",
        "options": [
          "1",
          "0",
          "2",
          "3"
        ],
        "note": "Pieces that fall from striking an upright are exempt.",
        "family": "10.2.5",
        "id": "073fa27a14c6fdba"
      },
      {
        "rule": "10.1.2",
        "prompt": "The Range Officer assesses 11 procedural penalties. What is the total point deduction for these penalties?",
        "correct": "110 points",
        "options": [
          "110 points",
          "90 points",
          "100 points",
          "120 points"
        ],
        "note": "",
        "family": "10.1.2",
        "id": "6ced0a30c97d29fb"
      },
      {
        "rule": "10.2.1",
        "prompt": "A competitor fires 4 shots on each of 2 separate Fault Line breaches, re-entering fully between breaches and gaining no significant advantage. How many procedural penalties apply?",
        "correct": "2",
        "options": [
          "2",
          "1",
          "3",
          "4"
        ],
        "note": "With no significant advantage, count the separate occurrences.",
        "family": "10.2.1",
        "id": "0fdc8b40955167f4"
      },
      {
        "rule": "11.3.1",
        "prompt": "Match Officials record a disputed call at 11:04. The competitor talks to the Chief Range Officer 15 minutes later. What is the deadline to submit a written arbitration appeal and fee to the Range Master?",
        "correct": "12:04",
        "options": [
          "12:04",
          "11:49",
          "12:19",
          "12:34"
        ],
        "note": "",
        "family": "11.3.1",
        "id": "74c72e17cf94ace9"
      },
      {
        "rule": "9.8.3",
        "prompt": "The provisional results show a timestamp of 14:16, but were actually posted at 14:27. What is the deadline for a competitor to file a results appeal with the Stats Officer?",
        "correct": "15:27",
        "options": [
          "15:27",
          "15:12",
          "15:42",
          "15:57"
        ],
        "note": "",
        "family": "9.8.3",
        "id": "7218042e14ad7648"
      },
      {
        "rule": "11.4.1",
        "prompt": "At a Level III match the maximum individual entry fee is equivalent to US$74. What is the arbitration fee equivalent in local currency?",
        "correct": "US$74",
        "options": [
          "US$74",
          "US$100",
          "US$69",
          "US$79"
        ],
        "note": "Use the lower of US$100 and the maximum individual entry fee.",
        "family": "11.4.1",
        "id": "84a17151ec6235aa"
      },
      {
        "rule": "10.2.7",
        "prompt": "A competitor leaves 3 non-disappearing scoring targets completely unengaged. They engage the other 10 targets. Before adding any misses, how many failure-to-engage procedurals apply?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "",
        "family": "10.2.7",
        "id": "f187f41432c19f9e"
      },
      {
        "rule": "10.2.3",
        "prompt": "While faulting a line, a competitor fires 15 shots and gains a significant advantage. From that position a maximum of 10 scoring hits can be attained. What is the maximum number of procedurals for that fault?",
        "correct": "10",
        "options": [
          "10",
          "9",
          "11",
          "12"
        ],
        "note": "Multiple penalties for the fault are capped by the scoring hits attainable.",
        "family": "10.2.3",
        "id": "1d0b8f7c31502eb7"
      },
      {
        "rule": "11.3.2",
        "prompt": "The Arbitration Committee receives a request at 12:32 on Saturday. Final results are scheduled to be declared at 12:12 on Sunday. What is the latest time the committee may rule under that schedule?",
        "correct": "Before 12:12 on Sunday",
        "options": [
          "Before 12:12 on Sunday",
          "By 12:32 on Sunday",
          "By 12:52 on Sunday",
          "Before 12:12 on Monday"
        ],
        "note": "The earlier limit is the declaration of final results.",
        "family": "11.3.2",
        "id": "0a04767b90011120"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Under Comstock, a competitor earns 80 target points, receives 10 penalty points and finishes in 6.00 seconds. What is the hit factor, rounded to four decimals?",
        "correct": "11.6667",
        "options": [
          "11.6667",
          "13.3333",
          "12.5000",
          "15.0000"
        ],
        "note": "Subtract penalties from target points before dividing by time.",
        "family": "comstock-hit-factor",
        "id": "0a8487a56defd7d4"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "A 130-point stage is won with a hit factor of 8. A competitor records a hit factor of 6.00. How many stage points does the competitor earn?",
        "correct": "97.50",
        "options": [
          "97.50",
          "95.50",
          "96.50",
          "98.50"
        ],
        "note": "Multiply the available stage points by the competitor’s hit factor divided by the winner’s hit factor.",
        "family": "comstock-stage-points",
        "id": "581a8fb3529e434e"
      },
      {
        "rule": "9.2.3",
        "prompt": "A competitor earns 49.2750, 33.6425 and 46.3850 stage points in the three stages of a match. What is the match total?",
        "correct": "129.3025",
        "options": [
          "129.3025",
          "129.4025",
          "129.2025",
          "130.3025"
        ],
        "note": "",
        "family": "match-total",
        "id": "24a2902d339963fb"
      },
      {
        "rule": "10.2.4",
        "prompt": "A competitor fires 2 shots before a mandatory reload point, 4 shots after it without reloading, and 2 shots after finally reloading. How many procedural penalties apply to the reload violation?",
        "correct": "4",
        "options": [
          "4",
          "3",
          "5",
          "6"
        ],
        "note": "Count only shots after the required reload point and before the reload.",
        "family": "10.2.4",
        "id": "a63d7cb694c1e4e7"
      },
      {
        "rule": "10.2.5",
        "prompt": "In a Cooper Tunnel, direct contact with the overhead material drops 2 pieces. Bumping an upright drops another 3. How many procedural penalties apply?",
        "correct": "2",
        "options": [
          "2",
          "1",
          "3",
          "4"
        ],
        "note": "Pieces that fall from striking an upright are exempt.",
        "family": "10.2.5",
        "id": "d4412d59638309cc"
      },
      {
        "rule": "10.1.2",
        "prompt": "The Range Officer assesses 12 procedural penalties. What is the total point deduction for these penalties?",
        "correct": "120 points",
        "options": [
          "120 points",
          "100 points",
          "110 points",
          "130 points"
        ],
        "note": "",
        "family": "10.1.2",
        "id": "2da427e627a18668"
      },
      {
        "rule": "10.2.1",
        "prompt": "A competitor fires 4 shots on each of 3 separate Fault Line breaches, re-entering fully between breaches and gaining no significant advantage. How many procedural penalties apply?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "With no significant advantage, count the separate occurrences.",
        "family": "10.2.1",
        "id": "21bc41077313a1fb"
      },
      {
        "rule": "11.3.1",
        "prompt": "Match Officials record a disputed call at 11:27. The competitor talks to the Chief Range Officer 15 minutes later. What is the deadline to submit a written arbitration appeal and fee to the Range Master?",
        "correct": "12:27",
        "options": [
          "12:27",
          "12:12",
          "12:42",
          "12:57"
        ],
        "note": "",
        "family": "11.3.1",
        "id": "8b94d01c354e3638"
      },
      {
        "rule": "9.8.3",
        "prompt": "The provisional results show a timestamp of 14:33, but were actually posted at 14:45. What is the deadline for a competitor to file a results appeal with the Stats Officer?",
        "correct": "15:45",
        "options": [
          "15:45",
          "15:30",
          "16:00",
          "16:15"
        ],
        "note": "",
        "family": "9.8.3",
        "id": "7aba270f1596c966"
      },
      {
        "rule": "11.4.1",
        "prompt": "At a Level III match the maximum individual entry fee is equivalent to US$139. What is the arbitration fee equivalent in local currency?",
        "correct": "US$100",
        "options": [
          "US$100",
          "US$139",
          "US$95",
          "US$105"
        ],
        "note": "Use the lower of US$100 and the maximum individual entry fee.",
        "family": "11.4.1",
        "id": "5bb2c4fc1e28915c"
      },
      {
        "rule": "10.2.7",
        "prompt": "A competitor leaves 4 non-disappearing scoring targets completely unengaged. They engage the other 11 targets. Before adding any misses, how many failure-to-engage procedurals apply?",
        "correct": "4",
        "options": [
          "4",
          "3",
          "5",
          "6"
        ],
        "note": "",
        "family": "10.2.7",
        "id": "6a197c545df016c0"
      },
      {
        "rule": "10.2.3",
        "prompt": "While faulting a line, a competitor fires 16 shots and gains a significant advantage. From that position a maximum of 11 scoring hits can be attained. What is the maximum number of procedurals for that fault?",
        "correct": "11",
        "options": [
          "11",
          "10",
          "12",
          "13"
        ],
        "note": "Multiple penalties for the fault are capped by the scoring hits attainable.",
        "family": "10.2.3",
        "id": "ee190b22289ebab1"
      },
      {
        "rule": "11.3.2",
        "prompt": "The Arbitration Committee receives a request at 12:51 on Saturday. The Match Director will declare the results final at 13:11 on Sunday. What deadline applies to the committee’s decision?",
        "correct": "By 12:51 on Sunday",
        "options": [
          "By 12:51 on Sunday",
          "Before 13:11 on Sunday",
          "By 12:31 on Sunday",
          "By 12:51 on Monday"
        ],
        "note": "The 24-hour deadline arrives before the declaration of final results.",
        "family": "11.3.2",
        "id": "87475e17dc3ff41f"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Under Comstock, a competitor earns 85 target points, receives 20 penalty points and finishes in 7.00 seconds. What is the hit factor, rounded to four decimals?",
        "correct": "9.2857",
        "options": [
          "9.2857",
          "12.1429",
          "10.7143",
          "15.0000"
        ],
        "note": "Subtract penalties from target points before dividing by time.",
        "family": "comstock-hit-factor",
        "id": "b85cb293f700cca4"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "A 140-point stage is won with a hit factor of 9. A competitor records a hit factor of 7.2. How many stage points does the competitor earn?",
        "correct": "112.00",
        "options": [
          "112.00",
          "110.00",
          "111.00",
          "113.00"
        ],
        "note": "Multiply the available stage points by the competitor’s hit factor divided by the winner’s hit factor.",
        "family": "comstock-stage-points",
        "id": "80da1262251a8622"
      },
      {
        "rule": "9.2.3",
        "prompt": "A competitor earns 51.2750, 34.6425 and 49.3850 stage points in the three stages of a match. What is the match total?",
        "correct": "135.3025",
        "options": [
          "135.3025",
          "135.4025",
          "135.2025",
          "136.3025"
        ],
        "note": "",
        "family": "match-total",
        "id": "dc93ed95ac38a11e"
      },
      {
        "rule": "10.2.4",
        "prompt": "A competitor fires 3 shots before a mandatory reload point, 4 shots after it without reloading, and 3 shots after finally reloading. How many procedural penalties apply to the reload violation?",
        "correct": "4",
        "options": [
          "4",
          "3",
          "5",
          "6"
        ],
        "note": "Count only shots after the required reload point and before the reload.",
        "family": "10.2.4",
        "id": "ff81f0ebb90fa7fe"
      },
      {
        "rule": "10.2.5",
        "prompt": "In a Cooper Tunnel, direct contact with the overhead material drops 3 pieces. Bumping an upright drops another 3. How many procedural penalties apply?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "Pieces that fall from striking an upright are exempt.",
        "family": "10.2.5",
        "id": "a69a26a0962324c0"
      },
      {
        "rule": "10.1.2",
        "prompt": "The Range Officer assesses 13 procedural penalties. What is the total point deduction for these penalties?",
        "correct": "130 points",
        "options": [
          "130 points",
          "110 points",
          "120 points",
          "140 points"
        ],
        "note": "",
        "family": "10.1.2",
        "id": "f2b4498c35093061"
      },
      {
        "rule": "10.2.1",
        "prompt": "A competitor fires 4 shots on each of 4 separate Fault Line breaches, re-entering fully between breaches and gaining no significant advantage. How many procedural penalties apply?",
        "correct": "4",
        "options": [
          "4",
          "3",
          "5",
          "6"
        ],
        "note": "With no significant advantage, count the separate occurrences.",
        "family": "10.2.1",
        "id": "bcbc115517493d04"
      },
      {
        "rule": "11.3.1",
        "prompt": "Match Officials record a disputed call at 11:50. The competitor talks to the Chief Range Officer 15 minutes later. What is the deadline to submit a written arbitration appeal and fee to the Range Master?",
        "correct": "12:50",
        "options": [
          "12:50",
          "12:35",
          "13:05",
          "13:20"
        ],
        "note": "",
        "family": "11.3.1",
        "id": "5fa6865654c74be5"
      },
      {
        "rule": "9.8.3",
        "prompt": "The provisional results show a timestamp of 14:50, but were actually posted at 15:03. What is the deadline for a competitor to file a results appeal with the Stats Officer?",
        "correct": "16:03",
        "options": [
          "16:03",
          "15:48",
          "16:18",
          "16:33"
        ],
        "note": "",
        "family": "9.8.3",
        "id": "2bb26fd96d3d99e0"
      },
      {
        "rule": "11.4.1",
        "prompt": "At a Level III match the maximum individual entry fee is equivalent to US$78. What is the arbitration fee equivalent in local currency?",
        "correct": "US$78",
        "options": [
          "US$78",
          "US$100",
          "US$73",
          "US$83"
        ],
        "note": "Use the lower of US$100 and the maximum individual entry fee.",
        "family": "11.4.1",
        "id": "b0c07a4dded3ae57"
      },
      {
        "rule": "10.2.7",
        "prompt": "A competitor leaves 5 non-disappearing scoring targets completely unengaged. They engage the other 12 targets. Before adding any misses, how many failure-to-engage procedurals apply?",
        "correct": "5",
        "options": [
          "5",
          "4",
          "6",
          "7"
        ],
        "note": "",
        "family": "10.2.7",
        "id": "6027dec45b5000f3"
      },
      {
        "rule": "10.2.3",
        "prompt": "While faulting a line, a competitor fires 17 shots and gains a significant advantage. From that position a maximum of 12 scoring hits can be attained. What is the maximum number of procedurals for that fault?",
        "correct": "12",
        "options": [
          "12",
          "11",
          "13",
          "14"
        ],
        "note": "Multiple penalties for the fault are capped by the scoring hits attainable.",
        "family": "10.2.3",
        "id": "8ba2c28d0727460d"
      },
      {
        "rule": "11.3.2",
        "prompt": "The Arbitration Committee receives a request at 13:10 on Saturday. Final results are scheduled to be declared at 12:50 on Sunday. What is the latest time the committee may rule under that schedule?",
        "correct": "Before 12:50 on Sunday",
        "options": [
          "Before 12:50 on Sunday",
          "By 13:10 on Sunday",
          "By 13:30 on Sunday",
          "Before 12:50 on Monday"
        ],
        "note": "The earlier limit is the declaration of final results.",
        "family": "11.3.2",
        "id": "75069bcdc82cd29e"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Under Comstock, a competitor earns 90 target points, receives 30 penalty points and finishes in 8.00 seconds. What is the hit factor, rounded to four decimals?",
        "correct": "7.5000",
        "options": [
          "7.5000",
          "11.2500",
          "9.3750",
          "15.0000"
        ],
        "note": "Subtract penalties from target points before dividing by time.",
        "family": "comstock-hit-factor",
        "id": "9c0c5a9b620a2bff"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "A 150-point stage is won with a hit factor of 10. A competitor records a hit factor of 9.0. How many stage points does the competitor earn?",
        "correct": "135.00",
        "options": [
          "135.00",
          "133.00",
          "134.00",
          "136.00"
        ],
        "note": "Multiply the available stage points by the competitor’s hit factor divided by the winner’s hit factor.",
        "family": "comstock-stage-points",
        "id": "07c8eea4ccece434"
      },
      {
        "rule": "9.2.3",
        "prompt": "A competitor earns 53.2750, 35.6425 and 52.3850 stage points in the three stages of a match. What is the match total?",
        "correct": "141.3025",
        "options": [
          "141.3025",
          "141.4025",
          "141.2025",
          "142.3025"
        ],
        "note": "",
        "family": "match-total",
        "id": "a79eabfec2b5f1e0"
      },
      {
        "rule": "10.2.4",
        "prompt": "A competitor fires 4 shots before a mandatory reload point, 4 shots after it without reloading, and 4 shots after finally reloading. How many procedural penalties apply to the reload violation?",
        "correct": "4",
        "options": [
          "4",
          "3",
          "5",
          "6"
        ],
        "note": "Count only shots after the required reload point and before the reload.",
        "family": "10.2.4",
        "id": "5d1ad181acc70027"
      },
      {
        "rule": "10.2.5",
        "prompt": "In a Cooper Tunnel, direct contact with the overhead material drops 4 pieces. Bumping an upright drops another 3. How many procedural penalties apply?",
        "correct": "4",
        "options": [
          "4",
          "3",
          "5",
          "6"
        ],
        "note": "Pieces that fall from striking an upright are exempt.",
        "family": "10.2.5",
        "id": "8d98bcdd1b0bd47d"
      },
      {
        "rule": "10.1.2",
        "prompt": "The Range Officer assesses 14 procedural penalties. What is the total point deduction for these penalties?",
        "correct": "140 points",
        "options": [
          "140 points",
          "120 points",
          "130 points",
          "150 points"
        ],
        "note": "",
        "family": "10.1.2",
        "id": "516c324b898f2744"
      },
      {
        "rule": "10.2.1",
        "prompt": "A competitor fires 4 shots on each of 5 separate Fault Line breaches, re-entering fully between breaches and gaining no significant advantage. How many procedural penalties apply?",
        "correct": "5",
        "options": [
          "5",
          "4",
          "6",
          "7"
        ],
        "note": "With no significant advantage, count the separate occurrences.",
        "family": "10.2.1",
        "id": "62f76ab3de1acdb4"
      },
      {
        "rule": "11.3.1",
        "prompt": "Match Officials record a disputed call at 12:13. The competitor talks to the Chief Range Officer 15 minutes later. What is the deadline to submit a written arbitration appeal and fee to the Range Master?",
        "correct": "13:13",
        "options": [
          "13:13",
          "12:58",
          "13:28",
          "13:43"
        ],
        "note": "",
        "family": "11.3.1",
        "id": "082a70edb7dcaca9"
      },
      {
        "rule": "9.8.3",
        "prompt": "The provisional results show a timestamp of 15:07, but were actually posted at 15:21. What is the deadline for a competitor to file a results appeal with the Stats Officer?",
        "correct": "16:21",
        "options": [
          "16:21",
          "16:06",
          "16:36",
          "16:51"
        ],
        "note": "",
        "family": "9.8.3",
        "id": "12ca6e288b959f58"
      },
      {
        "rule": "11.4.1",
        "prompt": "At a Level III match the maximum individual entry fee is equivalent to US$145. What is the arbitration fee equivalent in local currency?",
        "correct": "US$100",
        "options": [
          "US$100",
          "US$145",
          "US$95",
          "US$105"
        ],
        "note": "Use the lower of US$100 and the maximum individual entry fee.",
        "family": "11.4.1",
        "id": "5712f6b6b7c15848"
      },
      {
        "rule": "10.2.7",
        "prompt": "A competitor leaves 6 non-disappearing scoring targets completely unengaged. They engage the other 13 targets. Before adding any misses, how many failure-to-engage procedurals apply?",
        "correct": "6",
        "options": [
          "6",
          "5",
          "7",
          "8"
        ],
        "note": "",
        "family": "10.2.7",
        "id": "7cb27609ac4a297b"
      }
    ]
  },
  {
    "id": "rifle",
    "name": "Rifle",
    "group": "Centerfire",
    "book": "https://drive.google.com/file/d/1XAKNbnjzTTywV-Ux0Uj2cnRzETpDz2ai/view",
    "questions": [
      {
        "rule": "1.2.1.1",
        "prompt": "What is the Short Course round limit in Manual Action Bolt when only one hit per paper target is required?",
        "correct": "5",
        "options": [
          "5",
          "4",
          "6",
          "10"
        ],
        "note": "",
        "family": "1.2.1.1",
        "id": "766d8f5b03fd0493"
      },
      {
        "rule": "9.5.1",
        "prompt": "Unless the briefing specifies otherwise, how many hits count per paper target in Manual Action Bolt Division?",
        "correct": "1",
        "options": [
          "1",
          "0",
          "2",
          "3"
        ],
        "note": "",
        "family": "9.5.1",
        "id": "441b6d283fed0441"
      },
      {
        "rule": "Appendix D, item 2",
        "prompt": "What is the minimum Rifle power factor for Minor?",
        "correct": "150",
        "options": [
          "150",
          "140",
          "145",
          "155"
        ],
        "note": "",
        "family": "Appendix D, item 2",
        "id": "e1b1bbacab443935"
      },
      {
        "rule": "Appendix D, item 1",
        "prompt": "What is the minimum Rifle power factor for Major?",
        "correct": "320",
        "options": [
          "320",
          "300",
          "310",
          "330"
        ],
        "note": "",
        "family": "Appendix D, item 1",
        "id": "352f41e35c696e28"
      },
      {
        "rule": "2.1.3",
        "prompt": "While metal targets are being shot, what minimum distance must be maintained?",
        "correct": "50 m",
        "options": [
          "50 m",
          "49 m",
          "51 m",
          "52 m"
        ],
        "note": "If a Fault Line is used to limit the approach, it must be placed at least 51 m away.",
        "family": "2.1.3",
        "id": "36549773fe6c1e04"
      },
      {
        "rule": "9.4.2",
        "prompt": "Three hits are visible in the scoring area of a single paper no-shoot. What penalty is assessed on that no-shoot?",
        "correct": "−20 points",
        "options": [
          "−20 points",
          "−10 points",
          "−25 points",
          "−30 points"
        ],
        "note": "Two hits at most are penalized on a single paper no-shoot, at 10 points each.",
        "family": "9.4.2",
        "id": "3e71e77f78236b79"
      },
      {
        "rule": "3.2.3",
        "prompt": "Between squads, the written stage briefing needs a clarification for consistency. Who has the authority to amend it?",
        "correct": "Range Master",
        "options": [
          "Range Master",
          "Chief Range Officer",
          "Range Officer",
          "Match Director"
        ],
        "note": "",
        "family": "3.2.3",
        "id": "24be4f173f88362d"
      },
      {
        "rule": "9.1.3",
        "prompt": "A paper target is patched before scoring and the original score cannot be determined. What must the Range Officer order?",
        "correct": "A reshoot of the entire course of fire",
        "options": [
          "A reshoot of the entire course of fire",
          "A reshoot of the affected target only",
          "A rescore using the minimum possible target score",
          "A rescore using the maximum possible target score"
        ],
        "note": "",
        "family": "9.1.3",
        "id": "84e73bae40fef1d1"
      },
      {
        "rule": "10.2.4",
        "prompt": "A competitor fires two shots after the point where a mandatory reload was required, then reloads and fires one more. How many procedural penalties apply for the missed reload?",
        "correct": "2",
        "options": [
          "2",
          "1",
          "3",
          "0"
        ],
        "note": "Count each shot after the required reload point until the reload is performed.",
        "family": "10.2.4",
        "id": "1799ef99d814ab1b"
      },
      {
        "rule": "11.3.1",
        "prompt": "A disputed call is recorded by Match Officials at 13:20. By what time must the written arbitration appeal and applicable fee be submitted to the Range Master?",
        "correct": "14:20",
        "options": [
          "14:20",
          "13:50",
          "14:05",
          "14:50"
        ],
        "note": "The submission window is one hour from the recorded time of the disputed call.",
        "family": "11.3.1",
        "id": "78d8cac4ae7947d1"
      },
      {
        "rule": "9.5.2",
        "prompt": "A hit on a scoring paper target touches the line between two scoring zones. Which value counts?",
        "correct": "The higher of the two zone values",
        "options": [
          "The higher of the two zone values",
          "The lower of the two zone values",
          "The zone containing most of the hit",
          "The zone containing the centre of the hit"
        ],
        "note": "",
        "family": "9.5.2",
        "id": "14d00d4c36342c41"
      },
      {
        "rule": "9.2.2",
        "prompt": "To how many decimal places are individual stage points calculated for stage ranking?",
        "correct": "4",
        "options": [
          "4",
          "2",
          "3",
          "5"
        ],
        "note": "",
        "family": "9.2.2",
        "id": "9e45b306a23c2492"
      },
      {
        "rule": "3.2.4",
        "prompt": "Who sets the duration of the squad’s stage walkthrough?",
        "correct": "Range Officer",
        "options": [
          "Range Officer",
          "Chief Range Officer",
          "Range Master",
          "Match Director"
        ],
        "note": "",
        "family": "3.2.4",
        "id": "2f38cfa6c5d892fc"
      },
      {
        "rule": "3.2.4",
        "prompt": "Moving targets are demonstrated during walkthroughs. What must be consistent across competitors?",
        "correct": "Both duration and frequency",
        "options": [
          "Both duration and frequency",
          "Duration only",
          "Frequency only",
          "Neither duration nor frequency"
        ],
        "note": "",
        "family": "3.2.4",
        "id": "02fb5729cb9e04e5"
      },
      {
        "rule": "4.6.1",
        "prompt": "A competitor adjusts a target stand without authorization during inspection. What penalty may the Range Officer impose for each occurrence?",
        "correct": "One procedural penalty",
        "options": [
          "One procedural penalty",
          "Two procedural penalties",
          "One miss penalty",
          "Two miss penalties"
        ],
        "note": "",
        "family": "4.6.1",
        "id": "5ad2ec3127f1aa75"
      },
      {
        "rule": "6.2.6",
        "prompt": "A competitor is disqualified in a later Division after completing a separate Division at the same match. What happens to the complete earlier score?",
        "correct": "It stays in the results for the earlier Division",
        "options": [
          "It stays in the results for the earlier Division",
          "It stays in the results for the later Division",
          "It is removed from the earlier Division results",
          "It is kept only if the disqualification is overturned"
        ],
        "note": "",
        "family": "6.2.6",
        "id": "2bb09b780d6cd1cf"
      },
      {
        "rule": "6.6.1",
        "prompt": "A competitor misses the scheduled time for a stage. Whose prior approval is required to attempt the stage later?",
        "correct": "Match Director",
        "options": [
          "Match Director",
          "Range Master",
          "Chief Range Officer",
          "Range Officer"
        ],
        "note": "",
        "family": "6.6.1",
        "id": "1313eda1e157a923"
      },
      {
        "rule": "7.1.1",
        "prompt": "Who declares a competitor’s time, scores and penalties on the stage and verifies they are recorded correctly?",
        "correct": "Range Officer",
        "options": [
          "Range Officer",
          "Chief Range Officer",
          "Stats Officer",
          "Range Master"
        ],
        "note": "",
        "family": "7.1.1",
        "id": "0b424efb218f7879"
      },
      {
        "rule": "7.1.2",
        "prompt": "Which official has primary authority over the courses of fire specifically assigned to them, under the Range Master?",
        "correct": "Chief Range Officer",
        "options": [
          "Chief Range Officer",
          "Range Officer",
          "Stats Officer",
          "Match Director"
        ],
        "note": "",
        "family": "7.1.2",
        "id": "c118375a6b2b5323"
      },
      {
        "rule": "7.1.3",
        "prompt": "Who supervises the team that processes score sheets and produces provisional and final results?",
        "correct": "Stats Officer",
        "options": [
          "Stats Officer",
          "Chief Range Officer",
          "Range Master",
          "Quartermaster"
        ],
        "note": "",
        "family": "7.1.3",
        "id": "704c770dd49cbacc"
      },
      {
        "rule": "7.1.4",
        "prompt": "Who is responsible for distributing and maintaining targets, timers and other range equipment?",
        "correct": "Quartermaster",
        "options": [
          "Quartermaster",
          "Chief Range Officer",
          "Range Master",
          "Stats Officer"
        ],
        "note": "",
        "family": "7.1.4",
        "id": "b01b090191e21d17"
      },
      {
        "rule": "7.1.5",
        "prompt": "Which official has overall authority for range safety and rule application across the entire match range?",
        "correct": "Range Master",
        "options": [
          "Range Master",
          "Chief Range Officer",
          "Range Officer",
          "Match Director"
        ],
        "note": "",
        "family": "7.1.5",
        "id": "bfc335ecb25270a0"
      },
      {
        "rule": "8.3.5",
        "prompt": "The Range Officer calls “Stop” during an attempt. Which response is required?",
        "correct": "Stop firing and moving immediately and await instructions",
        "options": [
          "Stop firing and moving immediately and await instructions",
          "Stop firing immediately but finish moving to the next position",
          "Stop moving immediately but finish engaging the current target",
          "Stop firing and moving once the current target has been engaged"
        ],
        "note": "",
        "family": "8.3.5",
        "id": "26049216f3858162"
      },
      {
        "rule": "8.3.8",
        "prompt": "Which declaration authorizes personnel to move forward from the final shooting location for scoring and reset?",
        "correct": "Range Is Clear",
        "options": [
          "Range Is Clear",
          "Are You Ready?",
          "If You Are Finished, Unload And Show Clear",
          "Stop"
        ],
        "note": "",
        "family": "8.3.8",
        "id": "f33938909cd6cc60"
      },
      {
        "rule": "9.1.1",
        "prompt": "During scoring, what minimum distance must a competitor keep from a target unless the Range Officer gives permission to approach?",
        "correct": "1 m",
        "options": [
          "1 m",
          "0.5 m",
          "1.5 m",
          "2 m"
        ],
        "note": "",
        "family": "9.1.1",
        "id": "2d30e249199e32da"
      },
      {
        "rule": "9.1.1",
        "prompt": "A competitor approaches a target closer than 1 m without authorization during scoring. What is the sanction for a first offense?",
        "correct": "A warning",
        "options": [
          "A warning",
          "One automatic procedural penalty",
          "One automatic miss penalty",
          "A warning plus one procedural penalty"
        ],
        "note": "",
        "family": "9.1.1",
        "id": "a0c109e9369b02a9"
      },
      {
        "rule": "9.1.4",
        "prompt": "An unrestored target has extra scoring hits. The Range Officer cannot tell which hits belong to the competitor being scored. What is required?",
        "correct": "A reshoot of the course of fire",
        "options": [
          "A reshoot of the course of fire",
          "A reshoot of the target only",
          "A score using only the lowest possible hits",
          "A score using only the highest possible hits"
        ],
        "note": "",
        "family": "9.1.4",
        "id": "d865d4a181049ade"
      },
      {
        "rule": "9.1.5.1",
        "prompt": "A shot passes wholly through the scoring area of a paper target and then strikes the scoring area of a second paper scoring target. How is the second hit treated?",
        "correct": "It does not count for score",
        "options": [
          "It does not count for score",
          "It scores at its full zone value",
          "It scores at the lowest zone value",
          "It counts as a miss penalty on the second target"
        ],
        "note": "",
        "family": "9.1.5.1",
        "id": "709366270d24cc45"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Under Comstock, which calculation produces a hit factor?",
        "correct": "Target points minus penalties, then divide by time",
        "options": [
          "Target points minus penalties, then divide by time",
          "Target points divided by time, then subtract penalties",
          "Target points minus penalties, then multiply by time",
          "Time divided by target points minus penalties"
        ],
        "note": "",
        "family": "9.2.1.1",
        "id": "2fb26c1e715568ff"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Which competitor receives the maximum stage points available under Comstock?",
        "correct": "The competitor with the highest hit factor",
        "options": [
          "The competitor with the highest hit factor",
          "The competitor with the highest raw target points",
          "The competitor with the fastest recorded time",
          "The competitor with the lowest penalty total"
        ],
        "note": "",
        "family": "9.2.1.1",
        "id": "b034328d19a8c134"
      },
      {
        "rule": "9.2.3",
        "prompt": "Which quantity determines the final ranking within a Division?",
        "correct": "The sum of individual stage points",
        "options": [
          "The sum of individual stage points",
          "The sum of individual stage hit factors",
          "The sum of raw target points before factoring",
          "The average of individual stage placing positions"
        ],
        "note": "",
        "family": "9.2.3",
        "id": "de2a1ae18dce11e2"
      },
      {
        "rule": "9.3.1",
        "prompt": "The Match Director decides a tie must be broken. What does the tiebreaker change?",
        "correct": "Only the final placing of the tied competitors",
        "options": [
          "Only the final placing of the tied competitors",
          "The placing and original match points of the tied competitors",
          "The placing of every competitor in the Division",
          "The original match points without changing the placing"
        ],
        "note": "",
        "family": "9.3.1",
        "id": "0fdc055c5d39575a"
      },
      {
        "rule": "9.6.1",
        "prompt": "After “Range Is Clear” on a stage with ordinary paper targets, who may accompany the scoring official to verify the score?",
        "correct": "The competitor or their delegate",
        "options": [
          "The competitor or their delegate",
          "Only the competitor personally",
          "Only the competitor’s delegate",
          "Only the squad leader"
        ],
        "note": "",
        "family": "9.6.1",
        "id": "aa45c8d054c1ff8b"
      },
      {
        "rule": "9.6.2",
        "prompt": "The Range Officer intends to start scoring paper targets before the competitor finishes the stage. When must competitors be advised?",
        "correct": "During the squad briefing",
        "options": [
          "During the squad briefing",
          "After the Start Signal",
          "After the competitor’s last shot",
          "When provisional results are posted"
        ],
        "note": "",
        "family": "9.6.2",
        "id": "f7c24a4496425719"
      },
      {
        "rule": "9.6.3",
        "prompt": "Neither the competitor nor their delegate verifies a target during scoring. What happens to the right to appeal the scoring of that target?",
        "correct": "It is lost",
        "options": [
          "It is lost",
          "It stays open until the target is reset",
          "It stays open until the score sheet is signed",
          "It stays open until provisional results are posted"
        ],
        "note": "",
        "family": "9.6.3",
        "id": "5ff0c66acb294d60"
      },
      {
        "rule": "9.6.4",
        "prompt": "Who must first receive a challenge to the score on a target before it is patched?",
        "correct": "Range Officer",
        "options": [
          "Range Officer",
          "Chief Range Officer",
          "Range Master",
          "Stats Officer"
        ],
        "note": "",
        "family": "9.6.4",
        "id": "ec57f181f231d00b"
      },
      {
        "rule": "9.7.4",
        "prompt": "A score sheet is signed by both the competitor and Range Officer. With no mutual consent and no arbitration decision, which change is explicitly permitted?",
        "correct": "Correcting an arithmetic error",
        "options": [
          "Correcting an arithmetic error",
          "Re-evaluating a disputed scoring-zone hit",
          "Changing the recorded time based on a squad member’s estimate",
          "Adding a miss based on a later recollection"
        ],
        "note": "",
        "family": "9.7.4",
        "id": "e73cef78ffc6e010"
      },
      {
        "rule": "9.7.5",
        "prompt": "A score sheet has excess entries. To whom must it promptly be referred?",
        "correct": "Range Master",
        "options": [
          "Range Master",
          "Chief Range Officer",
          "Stats Officer",
          "Match Director"
        ],
        "note": "",
        "family": "9.7.5",
        "id": "e89fc7b2c365ea93"
      },
      {
        "rule": "9.7.6.1",
        "prompt": "A stage time is missing from the score sheet and a reshoot is impossible. What is the stage score?",
        "correct": "Zero",
        "options": [
          "Zero",
          "The raw target points minus penalties",
          "The division’s average stage score",
          "The competitor’s average score from the other stages"
        ],
        "note": "",
        "family": "9.7.6.1",
        "id": "164d6cc592c33b90"
      },
      {
        "rule": "9.7.7",
        "prompt": "The original score sheet is lost. The competitor has a legible duplicate acceptable to the Range Master. What is used?",
        "correct": "The competitor’s duplicate",
        "options": [
          "The competitor’s duplicate",
          "A reshoot regardless of the duplicate",
          "A zero score regardless of the duplicate",
          "The squad’s median score"
        ],
        "note": "",
        "family": "9.7.7",
        "id": "9f7a3ce2c9f20e67"
      },
      {
        "rule": "9.8.2",
        "prompt": "At Level IV, where must provisional stage results be posted after all competitors finish?",
        "correct": "At the range and the official match hotel",
        "options": [
          "At the range and the official match hotel",
          "At the range only",
          "At the official match hotel only",
          "At the range and the nearest hotel"
        ],
        "note": "",
        "family": "9.8.2",
        "id": "647b5a758a1113f2"
      },
      {
        "rule": "9.8.3",
        "prompt": "A competitor detects an error in the published provisional stage results. With whom must the appeal be filed?",
        "correct": "Stats Officer",
        "options": [
          "Stats Officer",
          "Chief Range Officer",
          "Range Master",
          "Match Director"
        ],
        "note": "",
        "family": "9.8.3",
        "id": "57791f0ed3b424b0"
      },
      {
        "rule": "9.9.1",
        "prompt": "A moving paper target presents part of its A zone at rest after activation. How is it classified?",
        "correct": "Non-disappearing",
        "options": [
          "Non-disappearing",
          "Disappearing unless the full A zone remains visible",
          "Disappearing unless part of the A zone was visible before activation too",
          "Disappearing because the target moves"
        ],
        "note": "",
        "family": "9.9.1",
        "id": "62043a204521db1d"
      },
      {
        "rule": "9.9.2",
        "prompt": "A genuinely disappearing target is activated before the last shot, but never engaged. Which of the following applies to that target?",
        "correct": "Neither a miss nor a failure-to-engage penalty",
        "options": [
          "Neither a miss nor a failure-to-engage penalty",
          "A miss penalty only",
          "A failure-to-engage penalty only",
          "Both a miss and a failure-to-engage penalty"
        ],
        "note": "",
        "family": "9.9.2",
        "id": "a24aa249ff5c8fb5"
      },
      {
        "rule": "9.9.3",
        "prompt": "A stationary target is partly concealed by a moving vision barrier. Part of its A zone remains exposed after activation. How is the target classified?",
        "correct": "Non-disappearing",
        "options": [
          "Non-disappearing",
          "Disappearing unless its full A zone is exposed",
          "Disappearing because the barrier moves",
          "Disappearing unless the barrier itself is a scoring target"
        ],
        "note": "",
        "family": "9.9.3",
        "id": "32b991228b675bae"
      },
      {
        "rule": "10.1.1",
        "prompt": "What must be recorded for procedural penalties on the score sheet?",
        "correct": "Both the number and the reason",
        "options": [
          "Both the number and the reason",
          "The number only",
          "The reason only",
          "The number and the competitor’s agreement"
        ],
        "note": "",
        "family": "10.1.1",
        "id": "98d216ec3d12862b"
      },
      {
        "rule": "10.1.4",
        "prompt": "A competitor fires while faulting a line, then fires at the same target from inside the line. What happens to the original applicable fault penalty?",
        "correct": "It still applies",
        "options": [
          "It still applies",
          "It is removed if the later shot hits",
          "It is removed if both shots hit",
          "It is changed to a miss if the later shot hits"
        ],
        "note": "",
        "family": "10.1.4",
        "id": "11b671e372d1b1db"
      },
      {
        "rule": "10.2.1",
        "prompt": "A competitor touches the ground beyond a Fault Line while shooting without gaining a significant advantage. How is the penalty normally counted?",
        "correct": "One per occurrence",
        "options": [
          "One per occurrence",
          "One per shot regardless of advantage",
          "One per target engaged",
          "One per scoring hit"
        ],
        "note": "",
        "family": "10.2.1",
        "id": "2687007cbe9cade2"
      },
      {
        "rule": "10.2.2",
        "prompt": "A competitor ignores a written stage procedure and gains a significant advantage. What penalty basis may apply in place of a single penalty for the occurrence?",
        "correct": "One per shot fired during the breach, subject to the applicable cap",
        "options": [
          "One per shot fired during the breach, subject to the applicable cap",
          "One per scoring hit during the breach, subject to the applicable cap",
          "One per target engaged during the breach, subject to the applicable cap",
          "One per shot fired after the breach ended, subject to the applicable cap"
        ],
        "note": "",
        "family": "10.2.2",
        "id": "acf60b7a43e61d24"
      },
      {
        "rule": "10.2.6",
        "prompt": "The Range Officer stops a competitor in time for a first instance of creeping after “Standby” and before the signal. What follows?",
        "correct": "A warning and a restart",
        "options": [
          "A warning and a restart",
          "A procedural penalty and a restart",
          "A warning without a restart",
          "A procedural penalty without a restart"
        ],
        "note": "",
        "family": "10.2.6",
        "id": "d0aa312c30a9e68f"
      },
      {
        "rule": "10.2.7",
        "prompt": "A competitor fails to engage a non-disappearing scoring target. What normally applies?",
        "correct": "One procedural per target plus applicable misses",
        "options": [
          "One procedural per target plus applicable misses",
          "One procedural per target instead of applicable misses",
          "One procedural per missed hit plus applicable misses",
          "Applicable misses only"
        ],
        "note": "",
        "family": "10.2.7",
        "id": "3b6f1c3d22f37ba8"
      },
      {
        "rule": "10.3.2",
        "prompt": "After issuing a disqualification, who must be notified as soon as possible?",
        "correct": "Range Master",
        "options": [
          "Range Master",
          "Chief Range Officer",
          "Stats Officer",
          "Match Director"
        ],
        "note": "",
        "family": "10.3.2",
        "id": "1e60f82bfdebcdb7"
      },
      {
        "rule": "11.1.3",
        "prompt": "A competitor disputes an initial Range Officer ruling. Which is the normal next level before the Range Master?",
        "correct": "Chief Range Officer",
        "options": [
          "Chief Range Officer",
          "Stats Officer",
          "Match Director",
          "Quartermaster"
        ],
        "note": "",
        "family": "11.1.3",
        "id": "e269dacafee493b9"
      },
      {
        "rule": "11.3.2",
        "prompt": "When must the Arbitration Committee reach its decision?",
        "correct": "Within 24 hours of the request or before final results are declared, whichever comes first",
        "options": [
          "Within 24 hours of the request or before final results are declared, whichever comes first",
          "Within 24 hours of the request or before final results are declared, whichever comes last",
          "Within 12 hours of the request or before final results are declared, whichever comes first",
          "Within 24 hours of the disputed call or before final results are declared, whichever comes first"
        ],
        "note": "",
        "family": "11.3.2",
        "id": "ab7a04fd99f427cc"
      },
      {
        "rule": "11.4.1",
        "prompt": "At a Level III match, which amount determines the arbitration fee in local currency?",
        "correct": "The lower of US$100 and the maximum individual entry fee",
        "options": [
          "The lower of US$100 and the maximum individual entry fee",
          "The higher of US$100 and the maximum individual entry fee",
          "The lower of US$100 and the minimum individual entry fee",
          "The maximum individual entry fee regardless of US$100"
        ],
        "note": "",
        "family": "11.4.1",
        "id": "d660fd589e3be129"
      },
      {
        "rule": "11.6.2",
        "prompt": "Who implements and posts the Arbitration Committee’s decision?",
        "correct": "Range Master",
        "options": [
          "Range Master",
          "Chief Range Officer",
          "Stats Officer",
          "Match Director"
        ],
        "note": "",
        "family": "11.6.2",
        "id": "b42ae1c861a560b7"
      },
      {
        "rule": "11.6.4",
        "prompt": "For what can a recorded Arbitration Committee decision serve as precedent?",
        "correct": "A similar subsequent incident at the same match",
        "options": [
          "A similar subsequent incident at the same match",
          "A similar earlier incident at the same match",
          "Any subsequent incident at the same match",
          "A similar incident only at the next match"
        ],
        "note": "",
        "family": "11.6.4",
        "id": "3487c77fa189a244"
      },
      {
        "rule": "11.7.1",
        "prompt": "May someone other than the competitor involved submit an appeal on a third-party basis?",
        "correct": "Yes, under the same Chapter 11 provisions",
        "options": [
          "Yes, under the same Chapter 11 provisions",
          "Yes, with a separate deadline set by the squad",
          "Yes, but only at Level IV and above",
          "No, only the competitor involved may appeal"
        ],
        "note": "",
        "family": "11.7.1",
        "id": "efd6cd40b8400be5"
      },
      {
        "rule": "1.2.1.1",
        "prompt": "What is the maximum number of rounds a Rifle Short Course may require in Semi Auto when one hit per paper target is required?",
        "correct": "10",
        "options": [
          "10",
          "8",
          "9",
          "11"
        ],
        "note": "",
        "family": "1.2.1.1",
        "id": "3100ff35018f20c7"
      },
      {
        "rule": "1.2.1.2",
        "prompt": "A Rifle Medium Course requires 12 rounds, with one hit required per paper target. What maximum required count applies?",
        "correct": "10",
        "options": [
          "10",
          "8",
          "9",
          "11"
        ],
        "note": "",
        "family": "1.2.1.2",
        "id": "f8a92d8cc144ed7a"
      },
      {
        "rule": "1.2.1.3",
        "prompt": "A Rifle Long Course requires 22 rounds, with one hit required per paper target. What is the maximum required count?",
        "correct": "20",
        "options": [
          "20",
          "18",
          "19",
          "21"
        ],
        "note": "",
        "family": "1.2.1.3",
        "id": "58e9a0777c733361"
      },
      {
        "rule": "5.1.11 · February 2026 interpretation",
        "prompt": "How does the February 2026 interpretation treat a firearm fitted with a forced reset trigger?",
        "correct": "It is prohibited",
        "options": [
          "It is prohibited",
          "It is permitted in Open only",
          "It is permitted in any division with a trigger weight check",
          "It is permitted only in Level I and II matches"
        ],
        "note": "",
        "family": "5.1.11 · February 2026 interpretation",
        "id": "3b3a8ef5e6f9580b"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Under Comstock, a competitor earns 35 target points, receives 10 penalty points and finishes in 5.00 seconds. What is the hit factor, rounded to four decimals?",
        "correct": "5.0000",
        "options": [
          "5.0000",
          "7.0000",
          "6.0000",
          "9.0000"
        ],
        "note": "Subtract penalties from target points before dividing by time.",
        "family": "comstock-hit-factor",
        "id": "21196cb03e879fbf"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "A 40-point stage is won with a hit factor of 8. A competitor records a hit factor of 4.0. How many stage points does the competitor earn?",
        "correct": "20.00",
        "options": [
          "20.00",
          "18.00",
          "19.00",
          "21.00"
        ],
        "note": "Multiply the available stage points by the competitor’s hit factor divided by the winner’s hit factor.",
        "family": "comstock-stage-points",
        "id": "3b223b933ed2c978"
      },
      {
        "rule": "9.2.3",
        "prompt": "A competitor earns 31.2750, 24.6425 and 19.3850 stage points in the three stages of a match. What is the match total?",
        "correct": "75.3025",
        "options": [
          "75.3025",
          "75.4025",
          "75.2025",
          "76.3025"
        ],
        "note": "",
        "family": "match-total",
        "id": "84eed92ac69be18f"
      },
      {
        "rule": "10.2.4",
        "prompt": "A competitor fires 1 shots before a mandatory reload point, 1 shots after it without reloading, and 2 shots after finally reloading. How many procedural penalties apply to the reload violation?",
        "correct": "1",
        "options": [
          "1",
          "0",
          "2",
          "3"
        ],
        "note": "Count only shots after the required reload point and before the reload.",
        "family": "10.2.4",
        "id": "b13c6a5f1fe012ab"
      },
      {
        "rule": "10.2.5",
        "prompt": "In a Cooper Tunnel, direct contact with the overhead material drops 1 pieces. Bumping an upright drops another 1. How many procedural penalties apply?",
        "correct": "1",
        "options": [
          "1",
          "0",
          "2",
          "3"
        ],
        "note": "Pieces that fall from striking an upright are exempt.",
        "family": "10.2.5",
        "id": "2bc7b9ec0789807c"
      },
      {
        "rule": "10.1.2",
        "prompt": "The Range Officer assesses 3 procedural penalties. What is the total point deduction for these penalties?",
        "correct": "30 points",
        "options": [
          "30 points",
          "10 points",
          "20 points",
          "40 points"
        ],
        "note": "",
        "family": "10.1.2",
        "id": "b3c678f4a8413c91"
      },
      {
        "rule": "10.2.1",
        "prompt": "A competitor fires 2 shots on each of 2 separate Fault Line breaches, re-entering fully between breaches and gaining no significant advantage. How many procedural penalties apply?",
        "correct": "2",
        "options": [
          "2",
          "1",
          "3",
          "4"
        ],
        "note": "With no significant advantage, count the separate occurrences.",
        "family": "10.2.1",
        "id": "65d0e1630759337f"
      },
      {
        "rule": "11.3.1",
        "prompt": "Match Officials record a disputed call at 08:00. The competitor talks to the Chief Range Officer 15 minutes later. What is the deadline to submit a written arbitration appeal and fee to the Range Master?",
        "correct": "09:00",
        "options": [
          "09:00",
          "08:45",
          "09:15",
          "09:30"
        ],
        "note": "",
        "family": "11.3.1",
        "id": "e73f27d96024f83f"
      },
      {
        "rule": "9.8.3",
        "prompt": "The provisional results show a timestamp of 12:00, but were actually posted at 12:11. What is the deadline for a competitor to file a results appeal with the Stats Officer?",
        "correct": "13:11",
        "options": [
          "13:11",
          "12:56",
          "13:26",
          "13:41"
        ],
        "note": "",
        "family": "9.8.3",
        "id": "dc0d2ecaa091ddbb"
      },
      {
        "rule": "11.4.1",
        "prompt": "At a Level III match the maximum individual entry fee is equivalent to US$58. What is the arbitration fee equivalent in local currency?",
        "correct": "US$58",
        "options": [
          "US$58",
          "US$100",
          "US$53",
          "US$63"
        ],
        "note": "Use the lower of US$100 and the maximum individual entry fee.",
        "family": "11.4.1",
        "id": "34d89f1347aee01f"
      },
      {
        "rule": "9.4.2",
        "prompt": "Three paper no-shoots show 1, 1 and 0 hits in their scoring areas, respectively. What is the combined point deduction?",
        "correct": "20 points",
        "options": [
          "20 points",
          "10 points",
          "25 points",
          "30 points"
        ],
        "note": "Count 10 points per hit, capped at two hits on each paper no-shoot.",
        "family": "9.4.2",
        "id": "2ed02131abe1ee01"
      },
      {
        "rule": "10.2.7",
        "prompt": "A competitor leaves 3 non-disappearing scoring targets completely unengaged. They engage the other 2 targets. Before adding any misses, how many failure-to-engage procedurals apply?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "",
        "family": "10.2.7",
        "id": "74b0110053b22816"
      },
      {
        "rule": "10.2.3",
        "prompt": "While faulting a line, a competitor fires 7 shots and gains a significant advantage. From that position a maximum of 2 scoring hits can be attained. What is the maximum number of procedurals for that fault?",
        "correct": "2",
        "options": [
          "2",
          "1",
          "3",
          "4"
        ],
        "note": "Multiple penalties for the fault are capped by the scoring hits attainable.",
        "family": "10.2.3",
        "id": "a67f0a3b80d3499d"
      },
      {
        "rule": "11.3.2",
        "prompt": "The Arbitration Committee receives a request at 10:00 on Saturday. Final results are scheduled to be declared at 09:40 on Sunday. What is the latest time the committee may rule under that schedule?",
        "correct": "Before 09:40 on Sunday",
        "options": [
          "Before 09:40 on Sunday",
          "By 10:00 on Sunday",
          "By 10:20 on Sunday",
          "Before 09:40 on Monday"
        ],
        "note": "The earlier limit is the declaration of final results.",
        "family": "11.3.2",
        "id": "bc60703e734bf1ae"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Under Comstock, a competitor earns 40 target points, receives 20 penalty points and finishes in 6.00 seconds. What is the hit factor, rounded to four decimals?",
        "correct": "3.3333",
        "options": [
          "3.3333",
          "6.6667",
          "5.0000",
          "10.0000"
        ],
        "note": "Subtract penalties from target points before dividing by time.",
        "family": "comstock-hit-factor",
        "id": "221b267a71db93cf"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "A 50-point stage is won with a hit factor of 9. A competitor records a hit factor of 5.4. How many stage points does the competitor earn?",
        "correct": "30.00",
        "options": [
          "30.00",
          "28.00",
          "29.00",
          "31.00"
        ],
        "note": "Multiply the available stage points by the competitor’s hit factor divided by the winner’s hit factor.",
        "family": "comstock-stage-points",
        "id": "9ba6132933144df4"
      },
      {
        "rule": "9.2.3",
        "prompt": "A competitor earns 33.2750, 25.6425 and 22.3850 stage points in the three stages of a match. What is the match total?",
        "correct": "81.3025",
        "options": [
          "81.3025",
          "81.4025",
          "81.2025",
          "82.3025"
        ],
        "note": "",
        "family": "match-total",
        "id": "2a2ddc7a971836c3"
      },
      {
        "rule": "10.2.4",
        "prompt": "A competitor fires 2 shots before a mandatory reload point, 1 shots after it without reloading, and 3 shots after finally reloading. How many procedural penalties apply to the reload violation?",
        "correct": "1",
        "options": [
          "1",
          "0",
          "2",
          "3"
        ],
        "note": "Count only shots after the required reload point and before the reload.",
        "family": "10.2.4",
        "id": "762cf162802b119a"
      },
      {
        "rule": "10.2.5",
        "prompt": "In a Cooper Tunnel, direct contact with the overhead material drops 2 pieces. Bumping an upright drops another 1. How many procedural penalties apply?",
        "correct": "2",
        "options": [
          "2",
          "1",
          "3",
          "4"
        ],
        "note": "Pieces that fall from striking an upright are exempt.",
        "family": "10.2.5",
        "id": "530bd84ef8b47216"
      },
      {
        "rule": "10.1.2",
        "prompt": "The Range Officer assesses 4 procedural penalties. What is the total point deduction for these penalties?",
        "correct": "40 points",
        "options": [
          "40 points",
          "20 points",
          "30 points",
          "50 points"
        ],
        "note": "",
        "family": "10.1.2",
        "id": "a7aaa4caf4f065cd"
      },
      {
        "rule": "10.2.1",
        "prompt": "A competitor fires 2 shots on each of 3 separate Fault Line breaches, re-entering fully between breaches and gaining no significant advantage. How many procedural penalties apply?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "With no significant advantage, count the separate occurrences.",
        "family": "10.2.1",
        "id": "b6d742daab217181"
      },
      {
        "rule": "11.3.1",
        "prompt": "Match Officials record a disputed call at 08:23. The competitor talks to the Chief Range Officer 15 minutes later. What is the deadline to submit a written arbitration appeal and fee to the Range Master?",
        "correct": "09:23",
        "options": [
          "09:23",
          "09:08",
          "09:38",
          "09:53"
        ],
        "note": "",
        "family": "11.3.1",
        "id": "fd2b9c3ae8f0e93c"
      },
      {
        "rule": "9.8.3",
        "prompt": "The provisional results show a timestamp of 12:17, but were actually posted at 12:29. What is the deadline for a competitor to file a results appeal with the Stats Officer?",
        "correct": "13:29",
        "options": [
          "13:29",
          "13:14",
          "13:44",
          "13:59"
        ],
        "note": "",
        "family": "9.8.3",
        "id": "75719e2f068672a0"
      },
      {
        "rule": "11.4.1",
        "prompt": "At a Level III match the maximum individual entry fee is equivalent to US$115. What is the arbitration fee equivalent in local currency?",
        "correct": "US$100",
        "options": [
          "US$100",
          "US$115",
          "US$95",
          "US$105"
        ],
        "note": "Use the lower of US$100 and the maximum individual entry fee.",
        "family": "11.4.1",
        "id": "7047ed8525176aec"
      },
      {
        "rule": "9.4.2",
        "prompt": "Three paper no-shoots show 2, 1 and 0 hits in their scoring areas, respectively. What is the combined point deduction?",
        "correct": "30 points",
        "options": [
          "30 points",
          "20 points",
          "35 points",
          "40 points"
        ],
        "note": "Count 10 points per hit, capped at two hits on each paper no-shoot.",
        "family": "9.4.2",
        "id": "c4db7b7a451a5a7d"
      },
      {
        "rule": "10.2.7",
        "prompt": "A competitor leaves 4 non-disappearing scoring targets completely unengaged. They engage the other 3 targets. Before adding any misses, how many failure-to-engage procedurals apply?",
        "correct": "4",
        "options": [
          "4",
          "3",
          "5",
          "6"
        ],
        "note": "",
        "family": "10.2.7",
        "id": "5f3e9af5d086e70f"
      },
      {
        "rule": "10.2.3",
        "prompt": "While faulting a line, a competitor fires 8 shots and gains a significant advantage. From that position a maximum of 3 scoring hits can be attained. What is the maximum number of procedurals for that fault?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "Multiple penalties for the fault are capped by the scoring hits attainable.",
        "family": "10.2.3",
        "id": "ebc3eaec4c4e60c1"
      },
      {
        "rule": "11.3.2",
        "prompt": "The Arbitration Committee receives a request at 10:19 on Saturday. The Match Director will declare the results final at 10:39 on Sunday. What deadline applies to the committee’s decision?",
        "correct": "By 10:19 on Sunday",
        "options": [
          "By 10:19 on Sunday",
          "Before 10:39 on Sunday",
          "By 09:59 on Sunday",
          "By 10:19 on Monday"
        ],
        "note": "The 24-hour deadline arrives before the declaration of final results.",
        "family": "11.3.2",
        "id": "e4ad89d611716d41"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Under Comstock, a competitor earns 45 target points, receives 30 penalty points and finishes in 7.00 seconds. What is the hit factor, rounded to four decimals?",
        "correct": "2.1429",
        "options": [
          "2.1429",
          "6.4286",
          "4.2857",
          "10.7143"
        ],
        "note": "Subtract penalties from target points before dividing by time.",
        "family": "comstock-hit-factor",
        "id": "811fb111204f1db3"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "A 60-point stage is won with a hit factor of 10. A competitor records a hit factor of 7.0. How many stage points does the competitor earn?",
        "correct": "42.00",
        "options": [
          "42.00",
          "40.00",
          "41.00",
          "43.00"
        ],
        "note": "Multiply the available stage points by the competitor’s hit factor divided by the winner’s hit factor.",
        "family": "comstock-stage-points",
        "id": "52ec8e4e492a485c"
      },
      {
        "rule": "9.2.3",
        "prompt": "A competitor earns 35.2750, 26.6425 and 25.3850 stage points in the three stages of a match. What is the match total?",
        "correct": "87.3025",
        "options": [
          "87.3025",
          "87.4025",
          "87.2025",
          "88.3025"
        ],
        "note": "",
        "family": "match-total",
        "id": "9de1b28afcc923d6"
      },
      {
        "rule": "10.2.4",
        "prompt": "A competitor fires 3 shots before a mandatory reload point, 1 shots after it without reloading, and 4 shots after finally reloading. How many procedural penalties apply to the reload violation?",
        "correct": "1",
        "options": [
          "1",
          "0",
          "2",
          "3"
        ],
        "note": "Count only shots after the required reload point and before the reload.",
        "family": "10.2.4",
        "id": "881a8b7504b60cad"
      },
      {
        "rule": "10.2.5",
        "prompt": "In a Cooper Tunnel, direct contact with the overhead material drops 3 pieces. Bumping an upright drops another 1. How many procedural penalties apply?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "Pieces that fall from striking an upright are exempt.",
        "family": "10.2.5",
        "id": "5137b4943cba8ec9"
      },
      {
        "rule": "10.1.2",
        "prompt": "The Range Officer assesses 5 procedural penalties. What is the total point deduction for these penalties?",
        "correct": "50 points",
        "options": [
          "50 points",
          "30 points",
          "40 points",
          "60 points"
        ],
        "note": "",
        "family": "10.1.2",
        "id": "8d6f73489143fdbe"
      },
      {
        "rule": "10.2.1",
        "prompt": "A competitor fires 2 shots on each of 4 separate Fault Line breaches, re-entering fully between breaches and gaining no significant advantage. How many procedural penalties apply?",
        "correct": "4",
        "options": [
          "4",
          "3",
          "5",
          "6"
        ],
        "note": "With no significant advantage, count the separate occurrences.",
        "family": "10.2.1",
        "id": "bfd45046f19468df"
      },
      {
        "rule": "11.3.1",
        "prompt": "Match Officials record a disputed call at 08:46. The competitor talks to the Chief Range Officer 15 minutes later. What is the deadline to submit a written arbitration appeal and fee to the Range Master?",
        "correct": "09:46",
        "options": [
          "09:46",
          "09:31",
          "10:01",
          "10:16"
        ],
        "note": "",
        "family": "11.3.1",
        "id": "1646ce84911500d6"
      },
      {
        "rule": "9.8.3",
        "prompt": "The provisional results show a timestamp of 12:34, but were actually posted at 12:47. What is the deadline for a competitor to file a results appeal with the Stats Officer?",
        "correct": "13:47",
        "options": [
          "13:47",
          "13:32",
          "14:02",
          "14:17"
        ],
        "note": "",
        "family": "9.8.3",
        "id": "f183f4405bae9693"
      },
      {
        "rule": "11.4.1",
        "prompt": "At a Level III match the maximum individual entry fee is equivalent to US$62. What is the arbitration fee equivalent in local currency?",
        "correct": "US$62",
        "options": [
          "US$62",
          "US$100",
          "US$57",
          "US$67"
        ],
        "note": "Use the lower of US$100 and the maximum individual entry fee.",
        "family": "11.4.1",
        "id": "2e62692cf1be487d"
      },
      {
        "rule": "9.4.2",
        "prompt": "Three paper no-shoots show 3, 1 and 0 hits in their scoring areas, respectively. What is the combined point deduction?",
        "correct": "30 points",
        "options": [
          "30 points",
          "20 points",
          "35 points",
          "40 points"
        ],
        "note": "Count 10 points per hit, capped at two hits on each paper no-shoot.",
        "family": "9.4.2",
        "id": "9d9d5b6426560ab7"
      },
      {
        "rule": "10.2.7",
        "prompt": "A competitor leaves 5 non-disappearing scoring targets completely unengaged. They engage the other 4 targets. Before adding any misses, how many failure-to-engage procedurals apply?",
        "correct": "5",
        "options": [
          "5",
          "4",
          "6",
          "7"
        ],
        "note": "",
        "family": "10.2.7",
        "id": "0d8a48f3191f4847"
      },
      {
        "rule": "10.2.3",
        "prompt": "While faulting a line, a competitor fires 9 shots and gains a significant advantage. From that position a maximum of 4 scoring hits can be attained. What is the maximum number of procedurals for that fault?",
        "correct": "4",
        "options": [
          "4",
          "3",
          "5",
          "6"
        ],
        "note": "Multiple penalties for the fault are capped by the scoring hits attainable.",
        "family": "10.2.3",
        "id": "0ef941d62c1d78e5"
      },
      {
        "rule": "11.3.2",
        "prompt": "The Arbitration Committee receives a request at 10:38 on Saturday. Final results are scheduled to be declared at 10:18 on Sunday. What is the latest time the committee may rule under that schedule?",
        "correct": "Before 10:18 on Sunday",
        "options": [
          "Before 10:18 on Sunday",
          "By 10:38 on Sunday",
          "By 10:58 on Sunday",
          "Before 10:18 on Monday"
        ],
        "note": "The earlier limit is the declaration of final results.",
        "family": "11.3.2",
        "id": "de38b1edabf021d6"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Under Comstock, a competitor earns 50 target points, receives 10 penalty points and finishes in 8.00 seconds. What is the hit factor, rounded to four decimals?",
        "correct": "5.0000",
        "options": [
          "5.0000",
          "6.2500",
          "5.6250",
          "7.5000"
        ],
        "note": "Subtract penalties from target points before dividing by time.",
        "family": "comstock-hit-factor",
        "id": "a9248c139a4373b7"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "A 70-point stage is won with a hit factor of 8. A competitor records a hit factor of 6.00. How many stage points does the competitor earn?",
        "correct": "52.50",
        "options": [
          "52.50",
          "50.50",
          "51.50",
          "53.50"
        ],
        "note": "Multiply the available stage points by the competitor’s hit factor divided by the winner’s hit factor.",
        "family": "comstock-stage-points",
        "id": "47f4cad0ab27e8ba"
      },
      {
        "rule": "9.2.3",
        "prompt": "A competitor earns 37.2750, 27.6425 and 28.3850 stage points in the three stages of a match. What is the match total?",
        "correct": "93.3025",
        "options": [
          "93.3025",
          "93.4025",
          "93.2025",
          "94.3025"
        ],
        "note": "",
        "family": "match-total",
        "id": "c9e15cec5e09ea03"
      },
      {
        "rule": "10.2.4",
        "prompt": "A competitor fires 4 shots before a mandatory reload point, 2 shots after it without reloading, and 2 shots after finally reloading. How many procedural penalties apply to the reload violation?",
        "correct": "2",
        "options": [
          "2",
          "1",
          "3",
          "4"
        ],
        "note": "Count only shots after the required reload point and before the reload.",
        "family": "10.2.4",
        "id": "006d194da76716db"
      },
      {
        "rule": "10.2.5",
        "prompt": "In a Cooper Tunnel, direct contact with the overhead material drops 4 pieces. Bumping an upright drops another 1. How many procedural penalties apply?",
        "correct": "4",
        "options": [
          "4",
          "3",
          "5",
          "6"
        ],
        "note": "Pieces that fall from striking an upright are exempt.",
        "family": "10.2.5",
        "id": "8e37dab2e4ff09d1"
      },
      {
        "rule": "10.1.2",
        "prompt": "The Range Officer assesses 6 procedural penalties. What is the total point deduction for these penalties?",
        "correct": "60 points",
        "options": [
          "60 points",
          "40 points",
          "50 points",
          "70 points"
        ],
        "note": "",
        "family": "10.1.2",
        "id": "1b476140e351fce9"
      },
      {
        "rule": "10.2.1",
        "prompt": "A competitor fires 2 shots on each of 5 separate Fault Line breaches, re-entering fully between breaches and gaining no significant advantage. How many procedural penalties apply?",
        "correct": "5",
        "options": [
          "5",
          "4",
          "6",
          "7"
        ],
        "note": "With no significant advantage, count the separate occurrences.",
        "family": "10.2.1",
        "id": "e6660f0d591b4f7d"
      },
      {
        "rule": "11.3.1",
        "prompt": "Match Officials record a disputed call at 09:09. The competitor talks to the Chief Range Officer 15 minutes later. What is the deadline to submit a written arbitration appeal and fee to the Range Master?",
        "correct": "10:09",
        "options": [
          "10:09",
          "09:54",
          "10:24",
          "10:39"
        ],
        "note": "",
        "family": "11.3.1",
        "id": "3a39e0f7f339bf48"
      },
      {
        "rule": "9.8.3",
        "prompt": "The provisional results show a timestamp of 12:51, but were actually posted at 13:05. What is the deadline for a competitor to file a results appeal with the Stats Officer?",
        "correct": "14:05",
        "options": [
          "14:05",
          "13:50",
          "14:20",
          "14:35"
        ],
        "note": "",
        "family": "9.8.3",
        "id": "f52890a6657389c5"
      },
      {
        "rule": "11.4.1",
        "prompt": "At a Level III match the maximum individual entry fee is equivalent to US$121. What is the arbitration fee equivalent in local currency?",
        "correct": "US$100",
        "options": [
          "US$100",
          "US$121",
          "US$95",
          "US$105"
        ],
        "note": "Use the lower of US$100 and the maximum individual entry fee.",
        "family": "11.4.1",
        "id": "f8dd8ce82b7d6cb7"
      },
      {
        "rule": "9.4.2",
        "prompt": "Three paper no-shoots show 1, 2 and 0 hits in their scoring areas, respectively. What is the combined point deduction?",
        "correct": "30 points",
        "options": [
          "30 points",
          "20 points",
          "35 points",
          "40 points"
        ],
        "note": "Count 10 points per hit, capped at two hits on each paper no-shoot.",
        "family": "9.4.2",
        "id": "f4db1f910c9647bc"
      },
      {
        "rule": "10.2.7",
        "prompt": "A competitor leaves 6 non-disappearing scoring targets completely unengaged. They engage the other 5 targets. Before adding any misses, how many failure-to-engage procedurals apply?",
        "correct": "6",
        "options": [
          "6",
          "5",
          "7",
          "8"
        ],
        "note": "",
        "family": "10.2.7",
        "id": "d6027ed7afcbf0dc"
      },
      {
        "rule": "10.2.3",
        "prompt": "While faulting a line, a competitor fires 10 shots and gains a significant advantage. From that position a maximum of 5 scoring hits can be attained. What is the maximum number of procedurals for that fault?",
        "correct": "5",
        "options": [
          "5",
          "4",
          "6",
          "7"
        ],
        "note": "Multiple penalties for the fault are capped by the scoring hits attainable.",
        "family": "10.2.3",
        "id": "78f0f08139c28834"
      },
      {
        "rule": "11.3.2",
        "prompt": "The Arbitration Committee receives a request at 10:57 on Saturday. The Match Director will declare the results final at 11:17 on Sunday. What deadline applies to the committee’s decision?",
        "correct": "By 10:57 on Sunday",
        "options": [
          "By 10:57 on Sunday",
          "Before 11:17 on Sunday",
          "By 10:37 on Sunday",
          "By 10:57 on Monday"
        ],
        "note": "The 24-hour deadline arrives before the declaration of final results.",
        "family": "11.3.2",
        "id": "682a783c53b03f55"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Under Comstock, a competitor earns 55 target points, receives 20 penalty points and finishes in 5.00 seconds. What is the hit factor, rounded to four decimals?",
        "correct": "7.0000",
        "options": [
          "7.0000",
          "11.0000",
          "9.0000",
          "15.0000"
        ],
        "note": "Subtract penalties from target points before dividing by time.",
        "family": "comstock-hit-factor",
        "id": "6b4917642dba515c"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "A 80-point stage is won with a hit factor of 9. A competitor records a hit factor of 7.2. How many stage points does the competitor earn?",
        "correct": "64.00",
        "options": [
          "64.00",
          "62.00",
          "63.00",
          "65.00"
        ],
        "note": "Multiply the available stage points by the competitor’s hit factor divided by the winner’s hit factor.",
        "family": "comstock-stage-points",
        "id": "28ebb69b1638fbdf"
      },
      {
        "rule": "9.2.3",
        "prompt": "A competitor earns 39.2750, 28.6425 and 31.3850 stage points in the three stages of a match. What is the match total?",
        "correct": "99.3025",
        "options": [
          "99.3025",
          "99.4025",
          "99.2025",
          "100.3025"
        ],
        "note": "",
        "family": "match-total",
        "id": "5f4e872e5af06f31"
      },
      {
        "rule": "10.2.4",
        "prompt": "A competitor fires 1 shots before a mandatory reload point, 2 shots after it without reloading, and 3 shots after finally reloading. How many procedural penalties apply to the reload violation?",
        "correct": "2",
        "options": [
          "2",
          "1",
          "3",
          "4"
        ],
        "note": "Count only shots after the required reload point and before the reload.",
        "family": "10.2.4",
        "id": "6e024231dd5c61ec"
      },
      {
        "rule": "10.2.5",
        "prompt": "In a Cooper Tunnel, direct contact with the overhead material drops 1 pieces. Bumping an upright drops another 2. How many procedural penalties apply?",
        "correct": "1",
        "options": [
          "1",
          "0",
          "2",
          "3"
        ],
        "note": "Pieces that fall from striking an upright are exempt.",
        "family": "10.2.5",
        "id": "a494bfc8fae26d63"
      },
      {
        "rule": "10.1.2",
        "prompt": "The Range Officer assesses 7 procedural penalties. What is the total point deduction for these penalties?",
        "correct": "70 points",
        "options": [
          "70 points",
          "50 points",
          "60 points",
          "80 points"
        ],
        "note": "",
        "family": "10.1.2",
        "id": "47ba4f62b92a41c2"
      },
      {
        "rule": "10.2.1",
        "prompt": "A competitor fires 3 shots on each of 2 separate Fault Line breaches, re-entering fully between breaches and gaining no significant advantage. How many procedural penalties apply?",
        "correct": "2",
        "options": [
          "2",
          "1",
          "3",
          "4"
        ],
        "note": "With no significant advantage, count the separate occurrences.",
        "family": "10.2.1",
        "id": "ae87a1170740806b"
      },
      {
        "rule": "11.3.1",
        "prompt": "Match Officials record a disputed call at 09:32. The competitor talks to the Chief Range Officer 15 minutes later. What is the deadline to submit a written arbitration appeal and fee to the Range Master?",
        "correct": "10:32",
        "options": [
          "10:32",
          "10:17",
          "10:47",
          "11:02"
        ],
        "note": "",
        "family": "11.3.1",
        "id": "6588158dd42d9117"
      },
      {
        "rule": "9.8.3",
        "prompt": "The provisional results show a timestamp of 13:08, but were actually posted at 13:19. What is the deadline for a competitor to file a results appeal with the Stats Officer?",
        "correct": "14:19",
        "options": [
          "14:19",
          "14:04",
          "14:34",
          "14:49"
        ],
        "note": "",
        "family": "9.8.3",
        "id": "29a955b04f06e0ec"
      },
      {
        "rule": "11.4.1",
        "prompt": "At a Level III match the maximum individual entry fee is equivalent to US$66. What is the arbitration fee equivalent in local currency?",
        "correct": "US$66",
        "options": [
          "US$66",
          "US$100",
          "US$61",
          "US$71"
        ],
        "note": "Use the lower of US$100 and the maximum individual entry fee.",
        "family": "11.4.1",
        "id": "ee9ce1e4aa409d25"
      },
      {
        "rule": "9.4.2",
        "prompt": "Three paper no-shoots show 2, 2 and 0 hits in their scoring areas, respectively. What is the combined point deduction?",
        "correct": "40 points",
        "options": [
          "40 points",
          "30 points",
          "45 points",
          "50 points"
        ],
        "note": "Count 10 points per hit, capped at two hits on each paper no-shoot.",
        "family": "9.4.2",
        "id": "402cb42239c9c1f8"
      },
      {
        "rule": "10.2.7",
        "prompt": "A competitor leaves 3 non-disappearing scoring targets completely unengaged. They engage the other 6 targets. Before adding any misses, how many failure-to-engage procedurals apply?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "",
        "family": "10.2.7",
        "id": "40285104c3498727"
      },
      {
        "rule": "10.2.3",
        "prompt": "While faulting a line, a competitor fires 11 shots and gains a significant advantage. From that position a maximum of 6 scoring hits can be attained. What is the maximum number of procedurals for that fault?",
        "correct": "6",
        "options": [
          "6",
          "5",
          "7",
          "8"
        ],
        "note": "Multiple penalties for the fault are capped by the scoring hits attainable.",
        "family": "10.2.3",
        "id": "33eda48998525a75"
      },
      {
        "rule": "11.3.2",
        "prompt": "The Arbitration Committee receives a request at 11:16 on Saturday. Final results are scheduled to be declared at 10:56 on Sunday. What is the latest time the committee may rule under that schedule?",
        "correct": "Before 10:56 on Sunday",
        "options": [
          "Before 10:56 on Sunday",
          "By 11:16 on Sunday",
          "By 11:36 on Sunday",
          "Before 10:56 on Monday"
        ],
        "note": "The earlier limit is the declaration of final results.",
        "family": "11.3.2",
        "id": "0ca050eb61851f0f"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Under Comstock, a competitor earns 60 target points, receives 30 penalty points and finishes in 6.00 seconds. What is the hit factor, rounded to four decimals?",
        "correct": "5.0000",
        "options": [
          "5.0000",
          "10.0000",
          "7.5000",
          "15.0000"
        ],
        "note": "Subtract penalties from target points before dividing by time.",
        "family": "comstock-hit-factor",
        "id": "e0956e1c97004596"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "A 90-point stage is won with a hit factor of 10. A competitor records a hit factor of 9.0. How many stage points does the competitor earn?",
        "correct": "81.00",
        "options": [
          "81.00",
          "79.00",
          "80.00",
          "82.00"
        ],
        "note": "Multiply the available stage points by the competitor’s hit factor divided by the winner’s hit factor.",
        "family": "comstock-stage-points",
        "id": "14715e3e5cf69e4f"
      },
      {
        "rule": "9.2.3",
        "prompt": "A competitor earns 41.2750, 29.6425 and 34.3850 stage points in the three stages of a match. What is the match total?",
        "correct": "105.3025",
        "options": [
          "105.3025",
          "105.4025",
          "105.2025",
          "106.3025"
        ],
        "note": "",
        "family": "match-total",
        "id": "074fa194069e06db"
      },
      {
        "rule": "10.2.4",
        "prompt": "A competitor fires 2 shots before a mandatory reload point, 2 shots after it without reloading, and 4 shots after finally reloading. How many procedural penalties apply to the reload violation?",
        "correct": "2",
        "options": [
          "2",
          "1",
          "3",
          "4"
        ],
        "note": "Count only shots after the required reload point and before the reload.",
        "family": "10.2.4",
        "id": "68323701f25334fb"
      },
      {
        "rule": "10.2.5",
        "prompt": "In a Cooper Tunnel, direct contact with the overhead material drops 2 pieces. Bumping an upright drops another 2. How many procedural penalties apply?",
        "correct": "2",
        "options": [
          "2",
          "1",
          "3",
          "4"
        ],
        "note": "Pieces that fall from striking an upright are exempt.",
        "family": "10.2.5",
        "id": "d78787214b190a6e"
      },
      {
        "rule": "10.1.2",
        "prompt": "The Range Officer assesses 8 procedural penalties. What is the total point deduction for these penalties?",
        "correct": "80 points",
        "options": [
          "80 points",
          "60 points",
          "70 points",
          "90 points"
        ],
        "note": "",
        "family": "10.1.2",
        "id": "5d5ad2570ac219a8"
      },
      {
        "rule": "10.2.1",
        "prompt": "A competitor fires 3 shots on each of 3 separate Fault Line breaches, re-entering fully between breaches and gaining no significant advantage. How many procedural penalties apply?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "With no significant advantage, count the separate occurrences.",
        "family": "10.2.1",
        "id": "58f01062c3509bdd"
      },
      {
        "rule": "11.3.1",
        "prompt": "Match Officials record a disputed call at 09:55. The competitor talks to the Chief Range Officer 15 minutes later. What is the deadline to submit a written arbitration appeal and fee to the Range Master?",
        "correct": "10:55",
        "options": [
          "10:55",
          "10:40",
          "11:10",
          "11:25"
        ],
        "note": "",
        "family": "11.3.1",
        "id": "007010000caf70b8"
      },
      {
        "rule": "9.8.3",
        "prompt": "The provisional results show a timestamp of 13:25, but were actually posted at 13:37. What is the deadline for a competitor to file a results appeal with the Stats Officer?",
        "correct": "14:37",
        "options": [
          "14:37",
          "14:22",
          "14:52",
          "15:07"
        ],
        "note": "",
        "family": "9.8.3",
        "id": "251642cc8f8c7f1f"
      },
      {
        "rule": "11.4.1",
        "prompt": "At a Level III match the maximum individual entry fee is equivalent to US$127. What is the arbitration fee equivalent in local currency?",
        "correct": "US$100",
        "options": [
          "US$100",
          "US$127",
          "US$95",
          "US$105"
        ],
        "note": "Use the lower of US$100 and the maximum individual entry fee.",
        "family": "11.4.1",
        "id": "5f76c896f353c461"
      },
      {
        "rule": "9.4.2",
        "prompt": "Three paper no-shoots show 3, 2 and 0 hits in their scoring areas, respectively. What is the combined point deduction?",
        "correct": "40 points",
        "options": [
          "40 points",
          "30 points",
          "45 points",
          "50 points"
        ],
        "note": "Count 10 points per hit, capped at two hits on each paper no-shoot.",
        "family": "9.4.2",
        "id": "f10264af0c61ed3a"
      },
      {
        "rule": "10.2.7",
        "prompt": "A competitor leaves 4 non-disappearing scoring targets completely unengaged. They engage the other 7 targets. Before adding any misses, how many failure-to-engage procedurals apply?",
        "correct": "4",
        "options": [
          "4",
          "3",
          "5",
          "6"
        ],
        "note": "",
        "family": "10.2.7",
        "id": "9bd75fb0011635df"
      },
      {
        "rule": "10.2.3",
        "prompt": "While faulting a line, a competitor fires 12 shots and gains a significant advantage. From that position a maximum of 7 scoring hits can be attained. What is the maximum number of procedurals for that fault?",
        "correct": "7",
        "options": [
          "7",
          "6",
          "8",
          "9"
        ],
        "note": "Multiple penalties for the fault are capped by the scoring hits attainable.",
        "family": "10.2.3",
        "id": "fe4d0980cee323db"
      },
      {
        "rule": "11.3.2",
        "prompt": "The Arbitration Committee receives a request at 11:35 on Saturday. The Match Director will declare the results final at 11:55 on Sunday. What deadline applies to the committee’s decision?",
        "correct": "By 11:35 on Sunday",
        "options": [
          "By 11:35 on Sunday",
          "Before 11:55 on Sunday",
          "By 11:15 on Sunday",
          "By 11:35 on Monday"
        ],
        "note": "The 24-hour deadline arrives before the declaration of final results.",
        "family": "11.3.2",
        "id": "64eca1200b3dfb67"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Under Comstock, a competitor earns 65 target points, receives 10 penalty points and finishes in 7.00 seconds. What is the hit factor, rounded to four decimals?",
        "correct": "7.8571",
        "options": [
          "7.8571",
          "9.2857",
          "8.5714",
          "10.7143"
        ],
        "note": "Subtract penalties from target points before dividing by time.",
        "family": "comstock-hit-factor",
        "id": "dc1a8095996ad676"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "A 100-point stage is won with a hit factor of 8. A competitor records a hit factor of 4.0. How many stage points does the competitor earn?",
        "correct": "50.00",
        "options": [
          "50.00",
          "48.00",
          "49.00",
          "51.00"
        ],
        "note": "Multiply the available stage points by the competitor’s hit factor divided by the winner’s hit factor.",
        "family": "comstock-stage-points",
        "id": "a40790b1b62def3d"
      },
      {
        "rule": "9.2.3",
        "prompt": "A competitor earns 43.2750, 30.6425 and 37.3850 stage points in the three stages of a match. What is the match total?",
        "correct": "111.3025",
        "options": [
          "111.3025",
          "111.4025",
          "111.2025",
          "112.3025"
        ],
        "note": "",
        "family": "match-total",
        "id": "94c3a1b2ed2be128"
      },
      {
        "rule": "10.2.4",
        "prompt": "A competitor fires 3 shots before a mandatory reload point, 3 shots after it without reloading, and 2 shots after finally reloading. How many procedural penalties apply to the reload violation?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "Count only shots after the required reload point and before the reload.",
        "family": "10.2.4",
        "id": "74af5d5f21fe1dfb"
      },
      {
        "rule": "10.2.5",
        "prompt": "In a Cooper Tunnel, direct contact with the overhead material drops 3 pieces. Bumping an upright drops another 2. How many procedural penalties apply?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "Pieces that fall from striking an upright are exempt.",
        "family": "10.2.5",
        "id": "1f535390a3951d7e"
      },
      {
        "rule": "10.1.2",
        "prompt": "The Range Officer assesses 9 procedural penalties. What is the total point deduction for these penalties?",
        "correct": "90 points",
        "options": [
          "90 points",
          "70 points",
          "80 points",
          "100 points"
        ],
        "note": "",
        "family": "10.1.2",
        "id": "8408d43671db7a0e"
      },
      {
        "rule": "10.2.1",
        "prompt": "A competitor fires 3 shots on each of 4 separate Fault Line breaches, re-entering fully between breaches and gaining no significant advantage. How many procedural penalties apply?",
        "correct": "4",
        "options": [
          "4",
          "3",
          "5",
          "6"
        ],
        "note": "With no significant advantage, count the separate occurrences.",
        "family": "10.2.1",
        "id": "2ff8e267c91dde1a"
      },
      {
        "rule": "11.3.1",
        "prompt": "Match Officials record a disputed call at 10:18. The competitor talks to the Chief Range Officer 15 minutes later. What is the deadline to submit a written arbitration appeal and fee to the Range Master?",
        "correct": "11:18",
        "options": [
          "11:18",
          "11:03",
          "11:33",
          "11:48"
        ],
        "note": "",
        "family": "11.3.1",
        "id": "c965916fb531369c"
      },
      {
        "rule": "9.8.3",
        "prompt": "The provisional results show a timestamp of 13:42, but were actually posted at 13:55. What is the deadline for a competitor to file a results appeal with the Stats Officer?",
        "correct": "14:55",
        "options": [
          "14:55",
          "14:40",
          "15:10",
          "15:25"
        ],
        "note": "",
        "family": "9.8.3",
        "id": "2cf52a01b6b110fd"
      },
      {
        "rule": "11.4.1",
        "prompt": "At a Level III match the maximum individual entry fee is equivalent to US$70. What is the arbitration fee equivalent in local currency?",
        "correct": "US$70",
        "options": [
          "US$70",
          "US$100",
          "US$65",
          "US$75"
        ],
        "note": "Use the lower of US$100 and the maximum individual entry fee.",
        "family": "11.4.1",
        "id": "d811849a35cbcaa0"
      },
      {
        "rule": "9.4.2",
        "prompt": "Three paper no-shoots show 1, 3 and 1 hits in their scoring areas, respectively. What is the combined point deduction?",
        "correct": "40 points",
        "options": [
          "40 points",
          "30 points",
          "45 points",
          "50 points"
        ],
        "note": "Count 10 points per hit, capped at two hits on each paper no-shoot.",
        "family": "9.4.2",
        "id": "e7a35042e7ccfa8a"
      },
      {
        "rule": "10.2.7",
        "prompt": "A competitor leaves 5 non-disappearing scoring targets completely unengaged. They engage the other 8 targets. Before adding any misses, how many failure-to-engage procedurals apply?",
        "correct": "5",
        "options": [
          "5",
          "4",
          "6",
          "7"
        ],
        "note": "",
        "family": "10.2.7",
        "id": "fd6b874ef06e73b5"
      },
      {
        "rule": "10.2.3",
        "prompt": "While faulting a line, a competitor fires 13 shots and gains a significant advantage. From that position a maximum of 8 scoring hits can be attained. What is the maximum number of procedurals for that fault?",
        "correct": "8",
        "options": [
          "8",
          "7",
          "9",
          "10"
        ],
        "note": "Multiple penalties for the fault are capped by the scoring hits attainable.",
        "family": "10.2.3",
        "id": "e26303c2b6fb8eef"
      },
      {
        "rule": "11.3.2",
        "prompt": "The Arbitration Committee receives a request at 11:54 on Saturday. Final results are scheduled to be declared at 11:34 on Sunday. What is the latest time the committee may rule under that schedule?",
        "correct": "Before 11:34 on Sunday",
        "options": [
          "Before 11:34 on Sunday",
          "By 11:54 on Sunday",
          "By 12:14 on Sunday",
          "Before 11:34 on Monday"
        ],
        "note": "The earlier limit is the declaration of final results.",
        "family": "11.3.2",
        "id": "2f113c3dcf31d25b"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Under Comstock, a competitor earns 70 target points, receives 20 penalty points and finishes in 8.00 seconds. What is the hit factor, rounded to four decimals?",
        "correct": "6.2500",
        "options": [
          "6.2500",
          "8.7500",
          "7.5000",
          "11.2500"
        ],
        "note": "Subtract penalties from target points before dividing by time.",
        "family": "comstock-hit-factor",
        "id": "194827b22eba79b3"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "A 110-point stage is won with a hit factor of 9. A competitor records a hit factor of 5.4. How many stage points does the competitor earn?",
        "correct": "66.00",
        "options": [
          "66.00",
          "64.00",
          "65.00",
          "67.00"
        ],
        "note": "Multiply the available stage points by the competitor’s hit factor divided by the winner’s hit factor.",
        "family": "comstock-stage-points",
        "id": "ae96f35457d3f054"
      },
      {
        "rule": "9.2.3",
        "prompt": "A competitor earns 45.2750, 31.6425 and 40.3850 stage points in the three stages of a match. What is the match total?",
        "correct": "117.3025",
        "options": [
          "117.3025",
          "117.4025",
          "117.2025",
          "118.3025"
        ],
        "note": "",
        "family": "match-total",
        "id": "14aae3449b1f03c8"
      },
      {
        "rule": "10.2.4",
        "prompt": "A competitor fires 4 shots before a mandatory reload point, 3 shots after it without reloading, and 3 shots after finally reloading. How many procedural penalties apply to the reload violation?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "Count only shots after the required reload point and before the reload.",
        "family": "10.2.4",
        "id": "ed76f5a3f5fb66c2"
      },
      {
        "rule": "10.2.5",
        "prompt": "In a Cooper Tunnel, direct contact with the overhead material drops 4 pieces. Bumping an upright drops another 2. How many procedural penalties apply?",
        "correct": "4",
        "options": [
          "4",
          "3",
          "5",
          "6"
        ],
        "note": "Pieces that fall from striking an upright are exempt.",
        "family": "10.2.5",
        "id": "491749653d1d7d26"
      },
      {
        "rule": "10.1.2",
        "prompt": "The Range Officer assesses 10 procedural penalties. What is the total point deduction for these penalties?",
        "correct": "100 points",
        "options": [
          "100 points",
          "80 points",
          "90 points",
          "110 points"
        ],
        "note": "",
        "family": "10.1.2",
        "id": "100e589875ff53f7"
      },
      {
        "rule": "10.2.1",
        "prompt": "A competitor fires 3 shots on each of 5 separate Fault Line breaches, re-entering fully between breaches and gaining no significant advantage. How many procedural penalties apply?",
        "correct": "5",
        "options": [
          "5",
          "4",
          "6",
          "7"
        ],
        "note": "With no significant advantage, count the separate occurrences.",
        "family": "10.2.1",
        "id": "5e49c94b26b2461c"
      },
      {
        "rule": "11.3.1",
        "prompt": "Match Officials record a disputed call at 10:41. The competitor talks to the Chief Range Officer 15 minutes later. What is the deadline to submit a written arbitration appeal and fee to the Range Master?",
        "correct": "11:41",
        "options": [
          "11:41",
          "11:26",
          "11:56",
          "12:11"
        ],
        "note": "",
        "family": "11.3.1",
        "id": "0d638cd42e10ffb0"
      },
      {
        "rule": "9.8.3",
        "prompt": "The provisional results show a timestamp of 13:59, but were actually posted at 14:13. What is the deadline for a competitor to file a results appeal with the Stats Officer?",
        "correct": "15:13",
        "options": [
          "15:13",
          "14:58",
          "15:28",
          "15:43"
        ],
        "note": "",
        "family": "9.8.3",
        "id": "09e5ceb49c90626e"
      },
      {
        "rule": "11.4.1",
        "prompt": "At a Level III match the maximum individual entry fee is equivalent to US$133. What is the arbitration fee equivalent in local currency?",
        "correct": "US$100",
        "options": [
          "US$100",
          "US$133",
          "US$95",
          "US$105"
        ],
        "note": "Use the lower of US$100 and the maximum individual entry fee.",
        "family": "11.4.1",
        "id": "274ea25396d70949"
      },
      {
        "rule": "9.4.2",
        "prompt": "Three paper no-shoots show 2, 3 and 1 hits in their scoring areas, respectively. What is the combined point deduction?",
        "correct": "50 points",
        "options": [
          "50 points",
          "40 points",
          "55 points",
          "60 points"
        ],
        "note": "Count 10 points per hit, capped at two hits on each paper no-shoot.",
        "family": "9.4.2",
        "id": "3fe10b1743af5a74"
      },
      {
        "rule": "10.2.7",
        "prompt": "A competitor leaves 6 non-disappearing scoring targets completely unengaged. They engage the other 9 targets. Before adding any misses, how many failure-to-engage procedurals apply?",
        "correct": "6",
        "options": [
          "6",
          "5",
          "7",
          "8"
        ],
        "note": "",
        "family": "10.2.7",
        "id": "5bd4bda93c64ae23"
      },
      {
        "rule": "10.2.3",
        "prompt": "While faulting a line, a competitor fires 14 shots and gains a significant advantage. From that position a maximum of 9 scoring hits can be attained. What is the maximum number of procedurals for that fault?",
        "correct": "9",
        "options": [
          "9",
          "8",
          "10",
          "11"
        ],
        "note": "Multiple penalties for the fault are capped by the scoring hits attainable.",
        "family": "10.2.3",
        "id": "8ba798773a134e49"
      },
      {
        "rule": "11.3.2",
        "prompt": "The Arbitration Committee receives a request at 12:13 on Saturday. The Match Director will declare the results final at 12:33 on Sunday. What deadline applies to the committee’s decision?",
        "correct": "By 12:13 on Sunday",
        "options": [
          "By 12:13 on Sunday",
          "Before 12:33 on Sunday",
          "By 11:53 on Sunday",
          "By 12:13 on Monday"
        ],
        "note": "The 24-hour deadline arrives before the declaration of final results.",
        "family": "11.3.2",
        "id": "87e95945c487e4d8"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Under Comstock, a competitor earns 75 target points, receives 30 penalty points and finishes in 5.00 seconds. What is the hit factor, rounded to four decimals?",
        "correct": "9.0000",
        "options": [
          "9.0000",
          "15.0000",
          "12.0000",
          "21.0000"
        ],
        "note": "Subtract penalties from target points before dividing by time.",
        "family": "comstock-hit-factor",
        "id": "6593ce04b3d67d7d"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "A 120-point stage is won with a hit factor of 10. A competitor records a hit factor of 7.0. How many stage points does the competitor earn?",
        "correct": "84.00",
        "options": [
          "84.00",
          "82.00",
          "83.00",
          "85.00"
        ],
        "note": "Multiply the available stage points by the competitor’s hit factor divided by the winner’s hit factor.",
        "family": "comstock-stage-points",
        "id": "125f67b0e89b3b29"
      },
      {
        "rule": "9.2.3",
        "prompt": "A competitor earns 47.2750, 32.6425 and 43.3850 stage points in the three stages of a match. What is the match total?",
        "correct": "123.3025",
        "options": [
          "123.3025",
          "123.4025",
          "123.2025",
          "124.3025"
        ],
        "note": "",
        "family": "match-total",
        "id": "ac71cbd4257fe44c"
      },
      {
        "rule": "10.2.4",
        "prompt": "A competitor fires 1 shots before a mandatory reload point, 3 shots after it without reloading, and 4 shots after finally reloading. How many procedural penalties apply to the reload violation?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "Count only shots after the required reload point and before the reload.",
        "family": "10.2.4",
        "id": "ad42741d9b5b0b33"
      },
      {
        "rule": "10.2.5",
        "prompt": "In a Cooper Tunnel, direct contact with the overhead material drops 1 pieces. Bumping an upright drops another 3. How many procedural penalties apply?",
        "correct": "1",
        "options": [
          "1",
          "0",
          "2",
          "3"
        ],
        "note": "Pieces that fall from striking an upright are exempt.",
        "family": "10.2.5",
        "id": "073fa27a14c6fdba"
      },
      {
        "rule": "10.1.2",
        "prompt": "The Range Officer assesses 11 procedural penalties. What is the total point deduction for these penalties?",
        "correct": "110 points",
        "options": [
          "110 points",
          "90 points",
          "100 points",
          "120 points"
        ],
        "note": "",
        "family": "10.1.2",
        "id": "6ced0a30c97d29fb"
      },
      {
        "rule": "10.2.1",
        "prompt": "A competitor fires 4 shots on each of 2 separate Fault Line breaches, re-entering fully between breaches and gaining no significant advantage. How many procedural penalties apply?",
        "correct": "2",
        "options": [
          "2",
          "1",
          "3",
          "4"
        ],
        "note": "With no significant advantage, count the separate occurrences.",
        "family": "10.2.1",
        "id": "0fdc8b40955167f4"
      },
      {
        "rule": "11.3.1",
        "prompt": "Match Officials record a disputed call at 11:04. The competitor talks to the Chief Range Officer 15 minutes later. What is the deadline to submit a written arbitration appeal and fee to the Range Master?",
        "correct": "12:04",
        "options": [
          "12:04",
          "11:49",
          "12:19",
          "12:34"
        ],
        "note": "",
        "family": "11.3.1",
        "id": "74c72e17cf94ace9"
      },
      {
        "rule": "9.8.3",
        "prompt": "The provisional results show a timestamp of 14:16, but were actually posted at 14:27. What is the deadline for a competitor to file a results appeal with the Stats Officer?",
        "correct": "15:27",
        "options": [
          "15:27",
          "15:12",
          "15:42",
          "15:57"
        ],
        "note": "",
        "family": "9.8.3",
        "id": "7218042e14ad7648"
      },
      {
        "rule": "11.4.1",
        "prompt": "At a Level III match the maximum individual entry fee is equivalent to US$74. What is the arbitration fee equivalent in local currency?",
        "correct": "US$74",
        "options": [
          "US$74",
          "US$100",
          "US$69",
          "US$79"
        ],
        "note": "Use the lower of US$100 and the maximum individual entry fee.",
        "family": "11.4.1",
        "id": "84a17151ec6235aa"
      },
      {
        "rule": "9.4.2",
        "prompt": "Three paper no-shoots show 3, 3 and 1 hits in their scoring areas, respectively. What is the combined point deduction?",
        "correct": "50 points",
        "options": [
          "50 points",
          "40 points",
          "55 points",
          "60 points"
        ],
        "note": "Count 10 points per hit, capped at two hits on each paper no-shoot.",
        "family": "9.4.2",
        "id": "9362ece878e6df51"
      },
      {
        "rule": "10.2.7",
        "prompt": "A competitor leaves 3 non-disappearing scoring targets completely unengaged. They engage the other 10 targets. Before adding any misses, how many failure-to-engage procedurals apply?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "",
        "family": "10.2.7",
        "id": "f187f41432c19f9e"
      },
      {
        "rule": "10.2.3",
        "prompt": "While faulting a line, a competitor fires 15 shots and gains a significant advantage. From that position a maximum of 10 scoring hits can be attained. What is the maximum number of procedurals for that fault?",
        "correct": "10",
        "options": [
          "10",
          "9",
          "11",
          "12"
        ],
        "note": "Multiple penalties for the fault are capped by the scoring hits attainable.",
        "family": "10.2.3",
        "id": "1d0b8f7c31502eb7"
      },
      {
        "rule": "11.3.2",
        "prompt": "The Arbitration Committee receives a request at 12:32 on Saturday. Final results are scheduled to be declared at 12:12 on Sunday. What is the latest time the committee may rule under that schedule?",
        "correct": "Before 12:12 on Sunday",
        "options": [
          "Before 12:12 on Sunday",
          "By 12:32 on Sunday",
          "By 12:52 on Sunday",
          "Before 12:12 on Monday"
        ],
        "note": "The earlier limit is the declaration of final results.",
        "family": "11.3.2",
        "id": "0a04767b90011120"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Under Comstock, a competitor earns 80 target points, receives 10 penalty points and finishes in 6.00 seconds. What is the hit factor, rounded to four decimals?",
        "correct": "11.6667",
        "options": [
          "11.6667",
          "13.3333",
          "12.5000",
          "15.0000"
        ],
        "note": "Subtract penalties from target points before dividing by time.",
        "family": "comstock-hit-factor",
        "id": "0a8487a56defd7d4"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "A 130-point stage is won with a hit factor of 8. A competitor records a hit factor of 6.00. How many stage points does the competitor earn?",
        "correct": "97.50",
        "options": [
          "97.50",
          "95.50",
          "96.50",
          "98.50"
        ],
        "note": "Multiply the available stage points by the competitor’s hit factor divided by the winner’s hit factor.",
        "family": "comstock-stage-points",
        "id": "581a8fb3529e434e"
      },
      {
        "rule": "9.2.3",
        "prompt": "A competitor earns 49.2750, 33.6425 and 46.3850 stage points in the three stages of a match. What is the match total?",
        "correct": "129.3025",
        "options": [
          "129.3025",
          "129.4025",
          "129.2025",
          "130.3025"
        ],
        "note": "",
        "family": "match-total",
        "id": "24a2902d339963fb"
      },
      {
        "rule": "10.2.4",
        "prompt": "A competitor fires 2 shots before a mandatory reload point, 4 shots after it without reloading, and 2 shots after finally reloading. How many procedural penalties apply to the reload violation?",
        "correct": "4",
        "options": [
          "4",
          "3",
          "5",
          "6"
        ],
        "note": "Count only shots after the required reload point and before the reload.",
        "family": "10.2.4",
        "id": "a63d7cb694c1e4e7"
      },
      {
        "rule": "10.2.5",
        "prompt": "In a Cooper Tunnel, direct contact with the overhead material drops 2 pieces. Bumping an upright drops another 3. How many procedural penalties apply?",
        "correct": "2",
        "options": [
          "2",
          "1",
          "3",
          "4"
        ],
        "note": "Pieces that fall from striking an upright are exempt.",
        "family": "10.2.5",
        "id": "d4412d59638309cc"
      },
      {
        "rule": "10.1.2",
        "prompt": "The Range Officer assesses 12 procedural penalties. What is the total point deduction for these penalties?",
        "correct": "120 points",
        "options": [
          "120 points",
          "100 points",
          "110 points",
          "130 points"
        ],
        "note": "",
        "family": "10.1.2",
        "id": "2da427e627a18668"
      },
      {
        "rule": "10.2.1",
        "prompt": "A competitor fires 4 shots on each of 3 separate Fault Line breaches, re-entering fully between breaches and gaining no significant advantage. How many procedural penalties apply?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "With no significant advantage, count the separate occurrences.",
        "family": "10.2.1",
        "id": "21bc41077313a1fb"
      },
      {
        "rule": "11.3.1",
        "prompt": "Match Officials record a disputed call at 11:27. The competitor talks to the Chief Range Officer 15 minutes later. What is the deadline to submit a written arbitration appeal and fee to the Range Master?",
        "correct": "12:27",
        "options": [
          "12:27",
          "12:12",
          "12:42",
          "12:57"
        ],
        "note": "",
        "family": "11.3.1",
        "id": "8b94d01c354e3638"
      },
      {
        "rule": "9.8.3",
        "prompt": "The provisional results show a timestamp of 14:33, but were actually posted at 14:45. What is the deadline for a competitor to file a results appeal with the Stats Officer?",
        "correct": "15:45",
        "options": [
          "15:45",
          "15:30",
          "16:00",
          "16:15"
        ],
        "note": "",
        "family": "9.8.3",
        "id": "7aba270f1596c966"
      },
      {
        "rule": "11.4.1",
        "prompt": "At a Level III match the maximum individual entry fee is equivalent to US$139. What is the arbitration fee equivalent in local currency?",
        "correct": "US$100",
        "options": [
          "US$100",
          "US$139",
          "US$95",
          "US$105"
        ],
        "note": "Use the lower of US$100 and the maximum individual entry fee.",
        "family": "11.4.1",
        "id": "5bb2c4fc1e28915c"
      },
      {
        "rule": "9.4.2",
        "prompt": "Three paper no-shoots show 1, 4 and 1 hits in their scoring areas, respectively. What is the combined point deduction?",
        "correct": "40 points",
        "options": [
          "40 points",
          "30 points",
          "45 points",
          "50 points"
        ],
        "note": "Count 10 points per hit, capped at two hits on each paper no-shoot.",
        "family": "9.4.2",
        "id": "2ce804cf7d3c65a5"
      },
      {
        "rule": "10.2.7",
        "prompt": "A competitor leaves 4 non-disappearing scoring targets completely unengaged. They engage the other 11 targets. Before adding any misses, how many failure-to-engage procedurals apply?",
        "correct": "4",
        "options": [
          "4",
          "3",
          "5",
          "6"
        ],
        "note": "",
        "family": "10.2.7",
        "id": "6a197c545df016c0"
      },
      {
        "rule": "10.2.3",
        "prompt": "While faulting a line, a competitor fires 16 shots and gains a significant advantage. From that position a maximum of 11 scoring hits can be attained. What is the maximum number of procedurals for that fault?",
        "correct": "11",
        "options": [
          "11",
          "10",
          "12",
          "13"
        ],
        "note": "Multiple penalties for the fault are capped by the scoring hits attainable.",
        "family": "10.2.3",
        "id": "ee190b22289ebab1"
      },
      {
        "rule": "11.3.2",
        "prompt": "The Arbitration Committee receives a request at 12:51 on Saturday. The Match Director will declare the results final at 13:11 on Sunday. What deadline applies to the committee’s decision?",
        "correct": "By 12:51 on Sunday",
        "options": [
          "By 12:51 on Sunday",
          "Before 13:11 on Sunday",
          "By 12:31 on Sunday",
          "By 12:51 on Monday"
        ],
        "note": "The 24-hour deadline arrives before the declaration of final results.",
        "family": "11.3.2",
        "id": "87475e17dc3ff41f"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Under Comstock, a competitor earns 85 target points, receives 20 penalty points and finishes in 7.00 seconds. What is the hit factor, rounded to four decimals?",
        "correct": "9.2857",
        "options": [
          "9.2857",
          "12.1429",
          "10.7143",
          "15.0000"
        ],
        "note": "Subtract penalties from target points before dividing by time.",
        "family": "comstock-hit-factor",
        "id": "b85cb293f700cca4"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "A 140-point stage is won with a hit factor of 9. A competitor records a hit factor of 7.2. How many stage points does the competitor earn?",
        "correct": "112.00",
        "options": [
          "112.00",
          "110.00",
          "111.00",
          "113.00"
        ],
        "note": "Multiply the available stage points by the competitor’s hit factor divided by the winner’s hit factor.",
        "family": "comstock-stage-points",
        "id": "80da1262251a8622"
      },
      {
        "rule": "9.2.3",
        "prompt": "A competitor earns 51.2750, 34.6425 and 49.3850 stage points in the three stages of a match. What is the match total?",
        "correct": "135.3025",
        "options": [
          "135.3025",
          "135.4025",
          "135.2025",
          "136.3025"
        ],
        "note": "",
        "family": "match-total",
        "id": "dc93ed95ac38a11e"
      },
      {
        "rule": "10.2.4",
        "prompt": "A competitor fires 3 shots before a mandatory reload point, 4 shots after it without reloading, and 3 shots after finally reloading. How many procedural penalties apply to the reload violation?",
        "correct": "4",
        "options": [
          "4",
          "3",
          "5",
          "6"
        ],
        "note": "Count only shots after the required reload point and before the reload.",
        "family": "10.2.4",
        "id": "ff81f0ebb90fa7fe"
      },
      {
        "rule": "10.2.5",
        "prompt": "In a Cooper Tunnel, direct contact with the overhead material drops 3 pieces. Bumping an upright drops another 3. How many procedural penalties apply?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "Pieces that fall from striking an upright are exempt.",
        "family": "10.2.5",
        "id": "a69a26a0962324c0"
      },
      {
        "rule": "10.1.2",
        "prompt": "The Range Officer assesses 13 procedural penalties. What is the total point deduction for these penalties?",
        "correct": "130 points",
        "options": [
          "130 points",
          "110 points",
          "120 points",
          "140 points"
        ],
        "note": "",
        "family": "10.1.2",
        "id": "f2b4498c35093061"
      },
      {
        "rule": "10.2.1",
        "prompt": "A competitor fires 4 shots on each of 4 separate Fault Line breaches, re-entering fully between breaches and gaining no significant advantage. How many procedural penalties apply?",
        "correct": "4",
        "options": [
          "4",
          "3",
          "5",
          "6"
        ],
        "note": "With no significant advantage, count the separate occurrences.",
        "family": "10.2.1",
        "id": "bcbc115517493d04"
      },
      {
        "rule": "11.3.1",
        "prompt": "Match Officials record a disputed call at 11:50. The competitor talks to the Chief Range Officer 15 minutes later. What is the deadline to submit a written arbitration appeal and fee to the Range Master?",
        "correct": "12:50",
        "options": [
          "12:50",
          "12:35",
          "13:05",
          "13:20"
        ],
        "note": "",
        "family": "11.3.1",
        "id": "5fa6865654c74be5"
      },
      {
        "rule": "9.8.3",
        "prompt": "The provisional results show a timestamp of 14:50, but were actually posted at 15:03. What is the deadline for a competitor to file a results appeal with the Stats Officer?",
        "correct": "16:03",
        "options": [
          "16:03",
          "15:48",
          "16:18",
          "16:33"
        ],
        "note": "",
        "family": "9.8.3",
        "id": "2bb26fd96d3d99e0"
      },
      {
        "rule": "11.4.1",
        "prompt": "At a Level III match the maximum individual entry fee is equivalent to US$78. What is the arbitration fee equivalent in local currency?",
        "correct": "US$78",
        "options": [
          "US$78",
          "US$100",
          "US$73",
          "US$83"
        ],
        "note": "Use the lower of US$100 and the maximum individual entry fee.",
        "family": "11.4.1",
        "id": "b0c07a4dded3ae57"
      },
      {
        "rule": "9.4.2",
        "prompt": "Three paper no-shoots show 2, 4 and 1 hits in their scoring areas, respectively. What is the combined point deduction?",
        "correct": "50 points",
        "options": [
          "50 points",
          "40 points",
          "55 points",
          "60 points"
        ],
        "note": "Count 10 points per hit, capped at two hits on each paper no-shoot.",
        "family": "9.4.2",
        "id": "b8d2a9da680ff132"
      },
      {
        "rule": "10.2.7",
        "prompt": "A competitor leaves 5 non-disappearing scoring targets completely unengaged. They engage the other 12 targets. Before adding any misses, how many failure-to-engage procedurals apply?",
        "correct": "5",
        "options": [
          "5",
          "4",
          "6",
          "7"
        ],
        "note": "",
        "family": "10.2.7",
        "id": "6027dec45b5000f3"
      },
      {
        "rule": "10.2.3",
        "prompt": "While faulting a line, a competitor fires 17 shots and gains a significant advantage. From that position a maximum of 12 scoring hits can be attained. What is the maximum number of procedurals for that fault?",
        "correct": "12",
        "options": [
          "12",
          "11",
          "13",
          "14"
        ],
        "note": "Multiple penalties for the fault are capped by the scoring hits attainable.",
        "family": "10.2.3",
        "id": "8ba2c28d0727460d"
      },
      {
        "rule": "11.3.2",
        "prompt": "The Arbitration Committee receives a request at 13:10 on Saturday. Final results are scheduled to be declared at 12:50 on Sunday. What is the latest time the committee may rule under that schedule?",
        "correct": "Before 12:50 on Sunday",
        "options": [
          "Before 12:50 on Sunday",
          "By 13:10 on Sunday",
          "By 13:30 on Sunday",
          "Before 12:50 on Monday"
        ],
        "note": "The earlier limit is the declaration of final results.",
        "family": "11.3.2",
        "id": "75069bcdc82cd29e"
      }
    ]
  },
  {
    "id": "mini-rifle",
    "name": "Mini Rifle",
    "group": "Rimfire",
    "book": "https://drive.google.com/file/d/16mvKniYTl0ZOUv-LwEALgHJZDff9UZ7A/view",
    "questions": [
      {
        "rule": "1.2.1.2",
        "prompt": "What is the maximum required round count for a Mini Rifle Medium Course?",
        "correct": "20",
        "options": [
          "20",
          "18",
          "22",
          "24"
        ],
        "note": "",
        "family": "1.2.1.2",
        "id": "3332e8c556d48238"
      },
      {
        "rule": "Appendix D, item 3",
        "prompt": "At the Start Signal, how many rounds may be in a Mini Rifle magazine at most?",
        "correct": "30",
        "options": [
          "30",
          "28",
          "29",
          "31"
        ],
        "note": "",
        "family": "Appendix D, item 3",
        "id": "faf0fbcdb93acbab"
      },
      {
        "rule": "Appendix D, item 8",
        "prompt": "Which Mini Rifle division permits optical or electronic sights?",
        "correct": "Open only",
        "options": [
          "Open only",
          "Standard only",
          "Both Open and Standard",
          "Neither Open nor Standard"
        ],
        "note": "",
        "family": "Appendix D, item 8",
        "id": "e7b98138da8583b2"
      },
      {
        "rule": "1.2.1.2",
        "prompt": "What is the maximum number of scoring targets a Medium Course may require from one location or view?",
        "correct": "5",
        "options": [
          "5",
          "4",
          "6",
          "7"
        ],
        "note": "",
        "family": "1.2.1.2",
        "id": "2208f58e83b14b74"
      },
      {
        "rule": "2.1.3",
        "prompt": "While metal targets are being shot, what minimum distance must be maintained?",
        "correct": "5 m",
        "options": [
          "5 m",
          "4 m",
          "6 m",
          "7 m"
        ],
        "note": "If a Fault Line is used to limit the approach, it must be placed at least 6 m away.",
        "family": "2.1.3",
        "id": "36549773fe6c1e04"
      },
      {
        "rule": "9.4.2",
        "prompt": "Three hits are visible in the scoring area of a single paper no-shoot. What penalty is assessed on that no-shoot?",
        "correct": "−20 points",
        "options": [
          "−20 points",
          "−10 points",
          "−25 points",
          "−30 points"
        ],
        "note": "Two hits at most are penalized on a single paper no-shoot, at 10 points each.",
        "family": "9.4.2",
        "id": "3e71e77f78236b79"
      },
      {
        "rule": "3.2.3",
        "prompt": "Between squads, the written stage briefing needs a clarification for consistency. Who has the authority to amend it?",
        "correct": "Range Master",
        "options": [
          "Range Master",
          "Chief Range Officer",
          "Range Officer",
          "Match Director"
        ],
        "note": "",
        "family": "3.2.3",
        "id": "24be4f173f88362d"
      },
      {
        "rule": "9.1.3",
        "prompt": "A paper target is patched before scoring and the original score cannot be determined. What must the Range Officer order?",
        "correct": "A reshoot of the entire course of fire",
        "options": [
          "A reshoot of the entire course of fire",
          "A reshoot of the affected target only",
          "A rescore using the minimum possible target score",
          "A rescore using the maximum possible target score"
        ],
        "note": "",
        "family": "9.1.3",
        "id": "84e73bae40fef1d1"
      },
      {
        "rule": "10.2.4",
        "prompt": "A competitor fires two shots after the point where a mandatory reload was required, then reloads and fires one more. How many procedural penalties apply for the missed reload?",
        "correct": "2",
        "options": [
          "2",
          "1",
          "3",
          "0"
        ],
        "note": "Count each shot after the required reload point until the reload is performed.",
        "family": "10.2.4",
        "id": "1799ef99d814ab1b"
      },
      {
        "rule": "11.3.1",
        "prompt": "A disputed call is recorded by Match Officials at 13:20. By what time must the written arbitration appeal and applicable fee be submitted to the Range Master?",
        "correct": "14:20",
        "options": [
          "14:20",
          "13:50",
          "14:05",
          "14:50"
        ],
        "note": "The submission window is one hour from the recorded time of the disputed call.",
        "family": "11.3.1",
        "id": "78d8cac4ae7947d1"
      },
      {
        "rule": "9.5.2",
        "prompt": "A hit on a scoring paper target touches the line between two scoring zones. Which value counts?",
        "correct": "The higher of the two zone values",
        "options": [
          "The higher of the two zone values",
          "The lower of the two zone values",
          "The zone containing most of the hit",
          "The zone containing the centre of the hit"
        ],
        "note": "",
        "family": "9.5.2",
        "id": "14d00d4c36342c41"
      },
      {
        "rule": "9.2.2",
        "prompt": "To how many decimal places are individual stage points calculated for stage ranking?",
        "correct": "4",
        "options": [
          "4",
          "2",
          "3",
          "5"
        ],
        "note": "",
        "family": "9.2.2",
        "id": "9e45b306a23c2492"
      },
      {
        "rule": "3.2.4",
        "prompt": "Who sets the duration of the squad’s stage walkthrough?",
        "correct": "Range Officer",
        "options": [
          "Range Officer",
          "Chief Range Officer",
          "Range Master",
          "Match Director"
        ],
        "note": "",
        "family": "3.2.4",
        "id": "2f38cfa6c5d892fc"
      },
      {
        "rule": "3.2.4",
        "prompt": "Moving targets are demonstrated during walkthroughs. What must be consistent across competitors?",
        "correct": "Both duration and frequency",
        "options": [
          "Both duration and frequency",
          "Duration only",
          "Frequency only",
          "Neither duration nor frequency"
        ],
        "note": "",
        "family": "3.2.4",
        "id": "02fb5729cb9e04e5"
      },
      {
        "rule": "4.6.1",
        "prompt": "A competitor adjusts a target stand without authorization during inspection. What penalty may the Range Officer impose for each occurrence?",
        "correct": "One procedural penalty",
        "options": [
          "One procedural penalty",
          "Two procedural penalties",
          "One miss penalty",
          "Two miss penalties"
        ],
        "note": "",
        "family": "4.6.1",
        "id": "5ad2ec3127f1aa75"
      },
      {
        "rule": "6.2.6",
        "prompt": "A competitor is disqualified in a later Division after completing a separate Division at the same match. What happens to the complete earlier score?",
        "correct": "It stays in the results for the earlier Division",
        "options": [
          "It stays in the results for the earlier Division",
          "It stays in the results for the later Division",
          "It is removed from the earlier Division results",
          "It is kept only if the disqualification is overturned"
        ],
        "note": "",
        "family": "6.2.6",
        "id": "2bb09b780d6cd1cf"
      },
      {
        "rule": "6.6.1",
        "prompt": "A competitor misses the scheduled time for a stage. Whose prior approval is required to attempt the stage later?",
        "correct": "Match Director",
        "options": [
          "Match Director",
          "Range Master",
          "Chief Range Officer",
          "Range Officer"
        ],
        "note": "",
        "family": "6.6.1",
        "id": "1313eda1e157a923"
      },
      {
        "rule": "7.1.1",
        "prompt": "Who declares a competitor’s time, scores and penalties on the stage and verifies they are recorded correctly?",
        "correct": "Range Officer",
        "options": [
          "Range Officer",
          "Chief Range Officer",
          "Stats Officer",
          "Range Master"
        ],
        "note": "",
        "family": "7.1.1",
        "id": "0b424efb218f7879"
      },
      {
        "rule": "7.1.2",
        "prompt": "Which official has primary authority over the courses of fire specifically assigned to them, under the Range Master?",
        "correct": "Chief Range Officer",
        "options": [
          "Chief Range Officer",
          "Range Officer",
          "Stats Officer",
          "Match Director"
        ],
        "note": "",
        "family": "7.1.2",
        "id": "c118375a6b2b5323"
      },
      {
        "rule": "7.1.3",
        "prompt": "Who supervises the team that processes score sheets and produces provisional and final results?",
        "correct": "Stats Officer",
        "options": [
          "Stats Officer",
          "Chief Range Officer",
          "Range Master",
          "Quartermaster"
        ],
        "note": "",
        "family": "7.1.3",
        "id": "704c770dd49cbacc"
      },
      {
        "rule": "7.1.4",
        "prompt": "Who is responsible for distributing and maintaining targets, timers and other range equipment?",
        "correct": "Quartermaster",
        "options": [
          "Quartermaster",
          "Chief Range Officer",
          "Range Master",
          "Stats Officer"
        ],
        "note": "",
        "family": "7.1.4",
        "id": "b01b090191e21d17"
      },
      {
        "rule": "7.1.5",
        "prompt": "Which official has overall authority for range safety and rule application across the entire match range?",
        "correct": "Range Master",
        "options": [
          "Range Master",
          "Chief Range Officer",
          "Range Officer",
          "Match Director"
        ],
        "note": "",
        "family": "7.1.5",
        "id": "bfc335ecb25270a0"
      },
      {
        "rule": "8.3.5",
        "prompt": "The Range Officer calls “Stop” during an attempt. Which response is required?",
        "correct": "Stop firing and moving immediately and await instructions",
        "options": [
          "Stop firing and moving immediately and await instructions",
          "Stop firing immediately but finish moving to the next position",
          "Stop moving immediately but finish engaging the current target",
          "Stop firing and moving once the current target has been engaged"
        ],
        "note": "",
        "family": "8.3.5",
        "id": "26049216f3858162"
      },
      {
        "rule": "8.3.8",
        "prompt": "Which declaration authorizes personnel to move forward from the final shooting location for scoring and reset?",
        "correct": "Range Is Clear",
        "options": [
          "Range Is Clear",
          "Are You Ready?",
          "If You Are Finished, Unload And Show Clear",
          "Stop"
        ],
        "note": "",
        "family": "8.3.8",
        "id": "f33938909cd6cc60"
      },
      {
        "rule": "9.1.1",
        "prompt": "During scoring, what minimum distance must a competitor keep from a target unless the Range Officer gives permission to approach?",
        "correct": "1 m",
        "options": [
          "1 m",
          "0.5 m",
          "1.5 m",
          "2 m"
        ],
        "note": "",
        "family": "9.1.1",
        "id": "2d30e249199e32da"
      },
      {
        "rule": "9.1.1",
        "prompt": "A competitor approaches a target closer than 1 m without authorization during scoring. What is the sanction for a first offense?",
        "correct": "A warning",
        "options": [
          "A warning",
          "One automatic procedural penalty",
          "One automatic miss penalty",
          "A warning plus one procedural penalty"
        ],
        "note": "",
        "family": "9.1.1",
        "id": "a0c109e9369b02a9"
      },
      {
        "rule": "9.1.4",
        "prompt": "An unrestored target has extra scoring hits. The Range Officer cannot tell which hits belong to the competitor being scored. What is required?",
        "correct": "A reshoot of the course of fire",
        "options": [
          "A reshoot of the course of fire",
          "A reshoot of the target only",
          "A score using only the lowest possible hits",
          "A score using only the highest possible hits"
        ],
        "note": "",
        "family": "9.1.4",
        "id": "d865d4a181049ade"
      },
      {
        "rule": "9.1.5.1",
        "prompt": "A shot passes wholly through the scoring area of a paper target and then strikes the scoring area of a second paper scoring target. How is the second hit treated?",
        "correct": "It does not count for score",
        "options": [
          "It does not count for score",
          "It scores at its full zone value",
          "It scores at the lowest zone value",
          "It counts as a miss penalty on the second target"
        ],
        "note": "",
        "family": "9.1.5.1",
        "id": "709366270d24cc45"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Under Comstock, which calculation produces a hit factor?",
        "correct": "Target points minus penalties, then divide by time",
        "options": [
          "Target points minus penalties, then divide by time",
          "Target points divided by time, then subtract penalties",
          "Target points minus penalties, then multiply by time",
          "Time divided by target points minus penalties"
        ],
        "note": "",
        "family": "9.2.1.1",
        "id": "2fb26c1e715568ff"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Which competitor receives the maximum stage points available under Comstock?",
        "correct": "The competitor with the highest hit factor",
        "options": [
          "The competitor with the highest hit factor",
          "The competitor with the highest raw target points",
          "The competitor with the fastest recorded time",
          "The competitor with the lowest penalty total"
        ],
        "note": "",
        "family": "9.2.1.1",
        "id": "b034328d19a8c134"
      },
      {
        "rule": "9.2.3",
        "prompt": "Which quantity determines the final ranking within a Division?",
        "correct": "The sum of individual stage points",
        "options": [
          "The sum of individual stage points",
          "The sum of individual stage hit factors",
          "The sum of raw target points before factoring",
          "The average of individual stage placing positions"
        ],
        "note": "",
        "family": "9.2.3",
        "id": "de2a1ae18dce11e2"
      },
      {
        "rule": "9.3.1",
        "prompt": "The Match Director decides a tie must be broken. What does the tiebreaker change?",
        "correct": "Only the final placing of the tied competitors",
        "options": [
          "Only the final placing of the tied competitors",
          "The placing and original match points of the tied competitors",
          "The placing of every competitor in the Division",
          "The original match points without changing the placing"
        ],
        "note": "",
        "family": "9.3.1",
        "id": "0fdc055c5d39575a"
      },
      {
        "rule": "9.6.1",
        "prompt": "After “Range Is Clear” on a stage with ordinary paper targets, who may accompany the scoring official to verify the score?",
        "correct": "The competitor or their delegate",
        "options": [
          "The competitor or their delegate",
          "Only the competitor personally",
          "Only the competitor’s delegate",
          "Only the squad leader"
        ],
        "note": "",
        "family": "9.6.1",
        "id": "aa45c8d054c1ff8b"
      },
      {
        "rule": "9.6.2",
        "prompt": "The Range Officer intends to start scoring paper targets before the competitor finishes the stage. When must competitors be advised?",
        "correct": "During the squad briefing",
        "options": [
          "During the squad briefing",
          "After the Start Signal",
          "After the competitor’s last shot",
          "When provisional results are posted"
        ],
        "note": "",
        "family": "9.6.2",
        "id": "f7c24a4496425719"
      },
      {
        "rule": "9.6.3",
        "prompt": "Neither the competitor nor their delegate verifies a target during scoring. What happens to the right to appeal the scoring of that target?",
        "correct": "It is lost",
        "options": [
          "It is lost",
          "It stays open until the target is reset",
          "It stays open until the score sheet is signed",
          "It stays open until provisional results are posted"
        ],
        "note": "",
        "family": "9.6.3",
        "id": "5ff0c66acb294d60"
      },
      {
        "rule": "9.6.4",
        "prompt": "Who must first receive a challenge to the score on a target before it is patched?",
        "correct": "Range Officer",
        "options": [
          "Range Officer",
          "Chief Range Officer",
          "Range Master",
          "Stats Officer"
        ],
        "note": "",
        "family": "9.6.4",
        "id": "ec57f181f231d00b"
      },
      {
        "rule": "9.7.4",
        "prompt": "A score sheet is signed by both the competitor and Range Officer. With no mutual consent and no arbitration decision, which change is explicitly permitted?",
        "correct": "Correcting an arithmetic error",
        "options": [
          "Correcting an arithmetic error",
          "Re-evaluating a disputed scoring-zone hit",
          "Changing the recorded time based on a squad member’s estimate",
          "Adding a miss based on a later recollection"
        ],
        "note": "",
        "family": "9.7.4",
        "id": "e73cef78ffc6e010"
      },
      {
        "rule": "9.7.5",
        "prompt": "A score sheet has excess entries. To whom must it promptly be referred?",
        "correct": "Range Master",
        "options": [
          "Range Master",
          "Chief Range Officer",
          "Stats Officer",
          "Match Director"
        ],
        "note": "",
        "family": "9.7.5",
        "id": "e89fc7b2c365ea93"
      },
      {
        "rule": "9.7.6.1",
        "prompt": "A stage time is missing from the score sheet and a reshoot is impossible. What is the stage score?",
        "correct": "Zero",
        "options": [
          "Zero",
          "The raw target points minus penalties",
          "The division’s average stage score",
          "The competitor’s average score from the other stages"
        ],
        "note": "",
        "family": "9.7.6.1",
        "id": "164d6cc592c33b90"
      },
      {
        "rule": "9.7.7",
        "prompt": "The original score sheet is lost. The competitor has a legible duplicate acceptable to the Range Master. What is used?",
        "correct": "The competitor’s duplicate",
        "options": [
          "The competitor’s duplicate",
          "A reshoot regardless of the duplicate",
          "A zero score regardless of the duplicate",
          "The squad’s median score"
        ],
        "note": "",
        "family": "9.7.7",
        "id": "9f7a3ce2c9f20e67"
      },
      {
        "rule": "9.8.2",
        "prompt": "At Level IV, where must provisional stage results be posted after all competitors finish?",
        "correct": "At the range and the official match hotel",
        "options": [
          "At the range and the official match hotel",
          "At the range only",
          "At the official match hotel only",
          "At the range and the nearest hotel"
        ],
        "note": "",
        "family": "9.8.2",
        "id": "647b5a758a1113f2"
      },
      {
        "rule": "9.8.3",
        "prompt": "A competitor detects an error in the published provisional stage results. With whom must the appeal be filed?",
        "correct": "Stats Officer",
        "options": [
          "Stats Officer",
          "Chief Range Officer",
          "Range Master",
          "Match Director"
        ],
        "note": "",
        "family": "9.8.3",
        "id": "57791f0ed3b424b0"
      },
      {
        "rule": "9.9.1",
        "prompt": "A moving paper target presents part of its A zone at rest after activation. How is it classified?",
        "correct": "Non-disappearing",
        "options": [
          "Non-disappearing",
          "Disappearing unless the full A zone remains visible",
          "Disappearing unless part of the A zone was visible before activation too",
          "Disappearing because the target moves"
        ],
        "note": "",
        "family": "9.9.1",
        "id": "62043a204521db1d"
      },
      {
        "rule": "9.9.2",
        "prompt": "A genuinely disappearing target is activated before the last shot, but never engaged. Which of the following applies to that target?",
        "correct": "Neither a miss nor a failure-to-engage penalty",
        "options": [
          "Neither a miss nor a failure-to-engage penalty",
          "A miss penalty only",
          "A failure-to-engage penalty only",
          "Both a miss and a failure-to-engage penalty"
        ],
        "note": "",
        "family": "9.9.2",
        "id": "a24aa249ff5c8fb5"
      },
      {
        "rule": "9.9.3",
        "prompt": "A stationary target is partly concealed by a moving vision barrier. Part of its A zone remains exposed after activation. How is the target classified?",
        "correct": "Non-disappearing",
        "options": [
          "Non-disappearing",
          "Disappearing unless its full A zone is exposed",
          "Disappearing because the barrier moves",
          "Disappearing unless the barrier itself is a scoring target"
        ],
        "note": "",
        "family": "9.9.3",
        "id": "32b991228b675bae"
      },
      {
        "rule": "10.1.1",
        "prompt": "What must be recorded for procedural penalties on the score sheet?",
        "correct": "Both the number and the reason",
        "options": [
          "Both the number and the reason",
          "The number only",
          "The reason only",
          "The number and the competitor’s agreement"
        ],
        "note": "",
        "family": "10.1.1",
        "id": "98d216ec3d12862b"
      },
      {
        "rule": "10.1.4",
        "prompt": "A competitor fires while faulting a line, then fires at the same target from inside the line. What happens to the original applicable fault penalty?",
        "correct": "It still applies",
        "options": [
          "It still applies",
          "It is removed if the later shot hits",
          "It is removed if both shots hit",
          "It is changed to a miss if the later shot hits"
        ],
        "note": "",
        "family": "10.1.4",
        "id": "11b671e372d1b1db"
      },
      {
        "rule": "10.2.1",
        "prompt": "A competitor touches the ground beyond a Fault Line while shooting without gaining a significant advantage. How is the penalty normally counted?",
        "correct": "One per occurrence",
        "options": [
          "One per occurrence",
          "One per shot regardless of advantage",
          "One per target engaged",
          "One per scoring hit"
        ],
        "note": "",
        "family": "10.2.1",
        "id": "2687007cbe9cade2"
      },
      {
        "rule": "10.2.2",
        "prompt": "A competitor ignores a written stage procedure and gains a significant advantage. What penalty basis may apply in place of a single penalty for the occurrence?",
        "correct": "One per shot fired during the breach, subject to the applicable cap",
        "options": [
          "One per shot fired during the breach, subject to the applicable cap",
          "One per scoring hit during the breach, subject to the applicable cap",
          "One per target engaged during the breach, subject to the applicable cap",
          "One per shot fired after the breach ended, subject to the applicable cap"
        ],
        "note": "",
        "family": "10.2.2",
        "id": "acf60b7a43e61d24"
      },
      {
        "rule": "10.2.6",
        "prompt": "The Range Officer stops a competitor in time for a first instance of creeping after “Standby” and before the signal. What follows?",
        "correct": "A warning and a restart",
        "options": [
          "A warning and a restart",
          "A procedural penalty and a restart",
          "A warning without a restart",
          "A procedural penalty without a restart"
        ],
        "note": "",
        "family": "10.2.6",
        "id": "d0aa312c30a9e68f"
      },
      {
        "rule": "10.2.7",
        "prompt": "A competitor fails to engage a non-disappearing scoring target. What normally applies?",
        "correct": "One procedural per target plus applicable misses",
        "options": [
          "One procedural per target plus applicable misses",
          "One procedural per target instead of applicable misses",
          "One procedural per missed hit plus applicable misses",
          "Applicable misses only"
        ],
        "note": "",
        "family": "10.2.7",
        "id": "3b6f1c3d22f37ba8"
      },
      {
        "rule": "10.3.2",
        "prompt": "After issuing a disqualification, who must be notified as soon as possible?",
        "correct": "Range Master",
        "options": [
          "Range Master",
          "Chief Range Officer",
          "Stats Officer",
          "Match Director"
        ],
        "note": "",
        "family": "10.3.2",
        "id": "1e60f82bfdebcdb7"
      },
      {
        "rule": "11.1.3",
        "prompt": "A competitor disputes an initial Range Officer ruling. Which is the normal next level before the Range Master?",
        "correct": "Chief Range Officer",
        "options": [
          "Chief Range Officer",
          "Stats Officer",
          "Match Director",
          "Quartermaster"
        ],
        "note": "",
        "family": "11.1.3",
        "id": "e269dacafee493b9"
      },
      {
        "rule": "11.3.2",
        "prompt": "When must the Arbitration Committee reach its decision?",
        "correct": "Within 24 hours of the request or before final results are declared, whichever comes first",
        "options": [
          "Within 24 hours of the request or before final results are declared, whichever comes first",
          "Within 24 hours of the request or before final results are declared, whichever comes last",
          "Within 12 hours of the request or before final results are declared, whichever comes first",
          "Within 24 hours of the disputed call or before final results are declared, whichever comes first"
        ],
        "note": "",
        "family": "11.3.2",
        "id": "ab7a04fd99f427cc"
      },
      {
        "rule": "11.4.1",
        "prompt": "At a Level III match, which amount determines the arbitration fee in local currency?",
        "correct": "The lower of US$100 and the maximum individual entry fee",
        "options": [
          "The lower of US$100 and the maximum individual entry fee",
          "The higher of US$100 and the maximum individual entry fee",
          "The lower of US$100 and the minimum individual entry fee",
          "The maximum individual entry fee regardless of US$100"
        ],
        "note": "",
        "family": "11.4.1",
        "id": "d660fd589e3be129"
      },
      {
        "rule": "11.6.2",
        "prompt": "Who implements and posts the Arbitration Committee’s decision?",
        "correct": "Range Master",
        "options": [
          "Range Master",
          "Chief Range Officer",
          "Stats Officer",
          "Match Director"
        ],
        "note": "",
        "family": "11.6.2",
        "id": "b42ae1c861a560b7"
      },
      {
        "rule": "11.6.4",
        "prompt": "For what can a recorded Arbitration Committee decision serve as precedent?",
        "correct": "A similar subsequent incident at the same match",
        "options": [
          "A similar subsequent incident at the same match",
          "A similar earlier incident at the same match",
          "Any subsequent incident at the same match",
          "A similar incident only at the next match"
        ],
        "note": "",
        "family": "11.6.4",
        "id": "3487c77fa189a244"
      },
      {
        "rule": "11.7.1",
        "prompt": "May someone other than the competitor involved submit an appeal on a third-party basis?",
        "correct": "Yes, under the same Chapter 11 provisions",
        "options": [
          "Yes, under the same Chapter 11 provisions",
          "Yes, with a separate deadline set by the squad",
          "Yes, but only at Level IV and above",
          "No, only the competitor involved may appeal"
        ],
        "note": "",
        "family": "11.7.1",
        "id": "efd6cd40b8400be5"
      },
      {
        "rule": "1.2.1.1",
        "prompt": "A proposed Short Course requires 11 rounds to complete. To what maximum must the required count be reduced?",
        "correct": "10",
        "options": [
          "10",
          "8",
          "9",
          "11"
        ],
        "note": "",
        "family": "1.2.1.1",
        "id": "2021b08635f36391"
      },
      {
        "rule": "1.2.1.2",
        "prompt": "A Mini Rifle Medium Course can be completed entirely from one location and view. Is that stage design permitted?",
        "correct": "No, the stage cannot allow every target to be shot from one location or view",
        "options": [
          "No, the stage cannot allow every target to be shot from one location or view",
          "Yes, if there are no more than five scoring targets",
          "Yes, if the stage requires no more than 20 rounds",
          "Yes, if the written stage briefing permits it"
        ],
        "note": "",
        "family": "1.2.1.2",
        "id": "876ce18b87a8de9b"
      },
      {
        "rule": "1.2.1.3",
        "prompt": "A proposed Long Course requires 42 rounds to complete. What is the maximum required count?",
        "correct": "40",
        "options": [
          "40",
          "38",
          "39",
          "41"
        ],
        "note": "",
        "family": "1.2.1.3",
        "id": "fa5b57248c91091d"
      },
      {
        "rule": "5.1.11 · February 2026 interpretation",
        "prompt": "How does the February 2026 interpretation treat a firearm fitted with a forced reset trigger?",
        "correct": "It is prohibited",
        "options": [
          "It is prohibited",
          "It is permitted in Open only",
          "It is permitted in any division with a trigger weight check",
          "It is permitted only in Level I and II matches"
        ],
        "note": "",
        "family": "5.1.11 · February 2026 interpretation",
        "id": "3b3a8ef5e6f9580b"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Under Comstock, a competitor earns 35 target points, receives 10 penalty points and finishes in 5.00 seconds. What is the hit factor, rounded to four decimals?",
        "correct": "5.0000",
        "options": [
          "5.0000",
          "7.0000",
          "6.0000",
          "9.0000"
        ],
        "note": "Subtract penalties from target points before dividing by time.",
        "family": "comstock-hit-factor",
        "id": "21196cb03e879fbf"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "A 40-point stage is won with a hit factor of 8. A competitor records a hit factor of 4.0. How many stage points does the competitor earn?",
        "correct": "20.00",
        "options": [
          "20.00",
          "18.00",
          "19.00",
          "21.00"
        ],
        "note": "Multiply the available stage points by the competitor’s hit factor divided by the winner’s hit factor.",
        "family": "comstock-stage-points",
        "id": "3b223b933ed2c978"
      },
      {
        "rule": "9.2.3",
        "prompt": "A competitor earns 31.2750, 24.6425 and 19.3850 stage points in the three stages of a match. What is the match total?",
        "correct": "75.3025",
        "options": [
          "75.3025",
          "75.4025",
          "75.2025",
          "76.3025"
        ],
        "note": "",
        "family": "match-total",
        "id": "84eed92ac69be18f"
      },
      {
        "rule": "10.2.4",
        "prompt": "A competitor fires 1 shots before a mandatory reload point, 1 shots after it without reloading, and 2 shots after finally reloading. How many procedural penalties apply to the reload violation?",
        "correct": "1",
        "options": [
          "1",
          "0",
          "2",
          "3"
        ],
        "note": "Count only shots after the required reload point and before the reload.",
        "family": "10.2.4",
        "id": "b13c6a5f1fe012ab"
      },
      {
        "rule": "10.2.5",
        "prompt": "In a Cooper Tunnel, direct contact with the overhead material drops 1 pieces. Bumping an upright drops another 1. How many procedural penalties apply?",
        "correct": "1",
        "options": [
          "1",
          "0",
          "2",
          "3"
        ],
        "note": "Pieces that fall from striking an upright are exempt.",
        "family": "10.2.5",
        "id": "2bc7b9ec0789807c"
      },
      {
        "rule": "10.1.2",
        "prompt": "The Range Officer assesses 3 procedural penalties. What is the total point deduction for these penalties?",
        "correct": "30 points",
        "options": [
          "30 points",
          "10 points",
          "20 points",
          "40 points"
        ],
        "note": "",
        "family": "10.1.2",
        "id": "b3c678f4a8413c91"
      },
      {
        "rule": "10.2.1",
        "prompt": "A competitor fires 2 shots on each of 2 separate Fault Line breaches, re-entering fully between breaches and gaining no significant advantage. How many procedural penalties apply?",
        "correct": "2",
        "options": [
          "2",
          "1",
          "3",
          "4"
        ],
        "note": "With no significant advantage, count the separate occurrences.",
        "family": "10.2.1",
        "id": "65d0e1630759337f"
      },
      {
        "rule": "11.3.1",
        "prompt": "Match Officials record a disputed call at 08:00. The competitor talks to the Chief Range Officer 15 minutes later. What is the deadline to submit a written arbitration appeal and fee to the Range Master?",
        "correct": "09:00",
        "options": [
          "09:00",
          "08:45",
          "09:15",
          "09:30"
        ],
        "note": "",
        "family": "11.3.1",
        "id": "e73f27d96024f83f"
      },
      {
        "rule": "9.8.3",
        "prompt": "The provisional results show a timestamp of 12:00, but were actually posted at 12:11. What is the deadline for a competitor to file a results appeal with the Stats Officer?",
        "correct": "13:11",
        "options": [
          "13:11",
          "12:56",
          "13:26",
          "13:41"
        ],
        "note": "",
        "family": "9.8.3",
        "id": "dc0d2ecaa091ddbb"
      },
      {
        "rule": "11.4.1",
        "prompt": "At a Level III match the maximum individual entry fee is equivalent to US$58. What is the arbitration fee equivalent in local currency?",
        "correct": "US$58",
        "options": [
          "US$58",
          "US$100",
          "US$53",
          "US$63"
        ],
        "note": "Use the lower of US$100 and the maximum individual entry fee.",
        "family": "11.4.1",
        "id": "34d89f1347aee01f"
      },
      {
        "rule": "9.4.2",
        "prompt": "Three paper no-shoots show 1, 1 and 0 hits in their scoring areas, respectively. What is the combined point deduction?",
        "correct": "20 points",
        "options": [
          "20 points",
          "10 points",
          "25 points",
          "30 points"
        ],
        "note": "Count 10 points per hit, capped at two hits on each paper no-shoot.",
        "family": "9.4.2",
        "id": "2ed02131abe1ee01"
      },
      {
        "rule": "10.2.7",
        "prompt": "A competitor leaves 3 non-disappearing scoring targets completely unengaged. They engage the other 2 targets. Before adding any misses, how many failure-to-engage procedurals apply?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "",
        "family": "10.2.7",
        "id": "74b0110053b22816"
      },
      {
        "rule": "10.2.3",
        "prompt": "While faulting a line, a competitor fires 7 shots and gains a significant advantage. From that position a maximum of 2 scoring hits can be attained. What is the maximum number of procedurals for that fault?",
        "correct": "2",
        "options": [
          "2",
          "1",
          "3",
          "4"
        ],
        "note": "Multiple penalties for the fault are capped by the scoring hits attainable.",
        "family": "10.2.3",
        "id": "a67f0a3b80d3499d"
      },
      {
        "rule": "11.3.2",
        "prompt": "The Arbitration Committee receives a request at 10:00 on Saturday. Final results are scheduled to be declared at 09:40 on Sunday. What is the latest time the committee may rule under that schedule?",
        "correct": "Before 09:40 on Sunday",
        "options": [
          "Before 09:40 on Sunday",
          "By 10:00 on Sunday",
          "By 10:20 on Sunday",
          "Before 09:40 on Monday"
        ],
        "note": "The earlier limit is the declaration of final results.",
        "family": "11.3.2",
        "id": "bc60703e734bf1ae"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Under Comstock, a competitor earns 40 target points, receives 20 penalty points and finishes in 6.00 seconds. What is the hit factor, rounded to four decimals?",
        "correct": "3.3333",
        "options": [
          "3.3333",
          "6.6667",
          "5.0000",
          "10.0000"
        ],
        "note": "Subtract penalties from target points before dividing by time.",
        "family": "comstock-hit-factor",
        "id": "221b267a71db93cf"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "A 50-point stage is won with a hit factor of 9. A competitor records a hit factor of 5.4. How many stage points does the competitor earn?",
        "correct": "30.00",
        "options": [
          "30.00",
          "28.00",
          "29.00",
          "31.00"
        ],
        "note": "Multiply the available stage points by the competitor’s hit factor divided by the winner’s hit factor.",
        "family": "comstock-stage-points",
        "id": "9ba6132933144df4"
      },
      {
        "rule": "9.2.3",
        "prompt": "A competitor earns 33.2750, 25.6425 and 22.3850 stage points in the three stages of a match. What is the match total?",
        "correct": "81.3025",
        "options": [
          "81.3025",
          "81.4025",
          "81.2025",
          "82.3025"
        ],
        "note": "",
        "family": "match-total",
        "id": "2a2ddc7a971836c3"
      },
      {
        "rule": "10.2.4",
        "prompt": "A competitor fires 2 shots before a mandatory reload point, 1 shots after it without reloading, and 3 shots after finally reloading. How many procedural penalties apply to the reload violation?",
        "correct": "1",
        "options": [
          "1",
          "0",
          "2",
          "3"
        ],
        "note": "Count only shots after the required reload point and before the reload.",
        "family": "10.2.4",
        "id": "762cf162802b119a"
      },
      {
        "rule": "10.2.5",
        "prompt": "In a Cooper Tunnel, direct contact with the overhead material drops 2 pieces. Bumping an upright drops another 1. How many procedural penalties apply?",
        "correct": "2",
        "options": [
          "2",
          "1",
          "3",
          "4"
        ],
        "note": "Pieces that fall from striking an upright are exempt.",
        "family": "10.2.5",
        "id": "530bd84ef8b47216"
      },
      {
        "rule": "10.1.2",
        "prompt": "The Range Officer assesses 4 procedural penalties. What is the total point deduction for these penalties?",
        "correct": "40 points",
        "options": [
          "40 points",
          "20 points",
          "30 points",
          "50 points"
        ],
        "note": "",
        "family": "10.1.2",
        "id": "a7aaa4caf4f065cd"
      },
      {
        "rule": "10.2.1",
        "prompt": "A competitor fires 2 shots on each of 3 separate Fault Line breaches, re-entering fully between breaches and gaining no significant advantage. How many procedural penalties apply?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "With no significant advantage, count the separate occurrences.",
        "family": "10.2.1",
        "id": "b6d742daab217181"
      },
      {
        "rule": "11.3.1",
        "prompt": "Match Officials record a disputed call at 08:23. The competitor talks to the Chief Range Officer 15 minutes later. What is the deadline to submit a written arbitration appeal and fee to the Range Master?",
        "correct": "09:23",
        "options": [
          "09:23",
          "09:08",
          "09:38",
          "09:53"
        ],
        "note": "",
        "family": "11.3.1",
        "id": "fd2b9c3ae8f0e93c"
      },
      {
        "rule": "9.8.3",
        "prompt": "The provisional results show a timestamp of 12:17, but were actually posted at 12:29. What is the deadline for a competitor to file a results appeal with the Stats Officer?",
        "correct": "13:29",
        "options": [
          "13:29",
          "13:14",
          "13:44",
          "13:59"
        ],
        "note": "",
        "family": "9.8.3",
        "id": "75719e2f068672a0"
      },
      {
        "rule": "11.4.1",
        "prompt": "At a Level III match the maximum individual entry fee is equivalent to US$115. What is the arbitration fee equivalent in local currency?",
        "correct": "US$100",
        "options": [
          "US$100",
          "US$115",
          "US$95",
          "US$105"
        ],
        "note": "Use the lower of US$100 and the maximum individual entry fee.",
        "family": "11.4.1",
        "id": "7047ed8525176aec"
      },
      {
        "rule": "9.4.2",
        "prompt": "Three paper no-shoots show 2, 1 and 0 hits in their scoring areas, respectively. What is the combined point deduction?",
        "correct": "30 points",
        "options": [
          "30 points",
          "20 points",
          "35 points",
          "40 points"
        ],
        "note": "Count 10 points per hit, capped at two hits on each paper no-shoot.",
        "family": "9.4.2",
        "id": "c4db7b7a451a5a7d"
      },
      {
        "rule": "10.2.7",
        "prompt": "A competitor leaves 4 non-disappearing scoring targets completely unengaged. They engage the other 3 targets. Before adding any misses, how many failure-to-engage procedurals apply?",
        "correct": "4",
        "options": [
          "4",
          "3",
          "5",
          "6"
        ],
        "note": "",
        "family": "10.2.7",
        "id": "5f3e9af5d086e70f"
      },
      {
        "rule": "10.2.3",
        "prompt": "While faulting a line, a competitor fires 8 shots and gains a significant advantage. From that position a maximum of 3 scoring hits can be attained. What is the maximum number of procedurals for that fault?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "Multiple penalties for the fault are capped by the scoring hits attainable.",
        "family": "10.2.3",
        "id": "ebc3eaec4c4e60c1"
      },
      {
        "rule": "11.3.2",
        "prompt": "The Arbitration Committee receives a request at 10:19 on Saturday. The Match Director will declare the results final at 10:39 on Sunday. What deadline applies to the committee’s decision?",
        "correct": "By 10:19 on Sunday",
        "options": [
          "By 10:19 on Sunday",
          "Before 10:39 on Sunday",
          "By 09:59 on Sunday",
          "By 10:19 on Monday"
        ],
        "note": "The 24-hour deadline arrives before the declaration of final results.",
        "family": "11.3.2",
        "id": "e4ad89d611716d41"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Under Comstock, a competitor earns 45 target points, receives 30 penalty points and finishes in 7.00 seconds. What is the hit factor, rounded to four decimals?",
        "correct": "2.1429",
        "options": [
          "2.1429",
          "6.4286",
          "4.2857",
          "10.7143"
        ],
        "note": "Subtract penalties from target points before dividing by time.",
        "family": "comstock-hit-factor",
        "id": "811fb111204f1db3"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "A 60-point stage is won with a hit factor of 10. A competitor records a hit factor of 7.0. How many stage points does the competitor earn?",
        "correct": "42.00",
        "options": [
          "42.00",
          "40.00",
          "41.00",
          "43.00"
        ],
        "note": "Multiply the available stage points by the competitor’s hit factor divided by the winner’s hit factor.",
        "family": "comstock-stage-points",
        "id": "52ec8e4e492a485c"
      },
      {
        "rule": "9.2.3",
        "prompt": "A competitor earns 35.2750, 26.6425 and 25.3850 stage points in the three stages of a match. What is the match total?",
        "correct": "87.3025",
        "options": [
          "87.3025",
          "87.4025",
          "87.2025",
          "88.3025"
        ],
        "note": "",
        "family": "match-total",
        "id": "9de1b28afcc923d6"
      },
      {
        "rule": "10.2.4",
        "prompt": "A competitor fires 3 shots before a mandatory reload point, 1 shots after it without reloading, and 4 shots after finally reloading. How many procedural penalties apply to the reload violation?",
        "correct": "1",
        "options": [
          "1",
          "0",
          "2",
          "3"
        ],
        "note": "Count only shots after the required reload point and before the reload.",
        "family": "10.2.4",
        "id": "881a8b7504b60cad"
      },
      {
        "rule": "10.2.5",
        "prompt": "In a Cooper Tunnel, direct contact with the overhead material drops 3 pieces. Bumping an upright drops another 1. How many procedural penalties apply?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "Pieces that fall from striking an upright are exempt.",
        "family": "10.2.5",
        "id": "5137b4943cba8ec9"
      },
      {
        "rule": "10.1.2",
        "prompt": "The Range Officer assesses 5 procedural penalties. What is the total point deduction for these penalties?",
        "correct": "50 points",
        "options": [
          "50 points",
          "30 points",
          "40 points",
          "60 points"
        ],
        "note": "",
        "family": "10.1.2",
        "id": "8d6f73489143fdbe"
      },
      {
        "rule": "10.2.1",
        "prompt": "A competitor fires 2 shots on each of 4 separate Fault Line breaches, re-entering fully between breaches and gaining no significant advantage. How many procedural penalties apply?",
        "correct": "4",
        "options": [
          "4",
          "3",
          "5",
          "6"
        ],
        "note": "With no significant advantage, count the separate occurrences.",
        "family": "10.2.1",
        "id": "bfd45046f19468df"
      },
      {
        "rule": "11.3.1",
        "prompt": "Match Officials record a disputed call at 08:46. The competitor talks to the Chief Range Officer 15 minutes later. What is the deadline to submit a written arbitration appeal and fee to the Range Master?",
        "correct": "09:46",
        "options": [
          "09:46",
          "09:31",
          "10:01",
          "10:16"
        ],
        "note": "",
        "family": "11.3.1",
        "id": "1646ce84911500d6"
      },
      {
        "rule": "9.8.3",
        "prompt": "The provisional results show a timestamp of 12:34, but were actually posted at 12:47. What is the deadline for a competitor to file a results appeal with the Stats Officer?",
        "correct": "13:47",
        "options": [
          "13:47",
          "13:32",
          "14:02",
          "14:17"
        ],
        "note": "",
        "family": "9.8.3",
        "id": "f183f4405bae9693"
      },
      {
        "rule": "11.4.1",
        "prompt": "At a Level III match the maximum individual entry fee is equivalent to US$62. What is the arbitration fee equivalent in local currency?",
        "correct": "US$62",
        "options": [
          "US$62",
          "US$100",
          "US$57",
          "US$67"
        ],
        "note": "Use the lower of US$100 and the maximum individual entry fee.",
        "family": "11.4.1",
        "id": "2e62692cf1be487d"
      },
      {
        "rule": "9.4.2",
        "prompt": "Three paper no-shoots show 3, 1 and 0 hits in their scoring areas, respectively. What is the combined point deduction?",
        "correct": "30 points",
        "options": [
          "30 points",
          "20 points",
          "35 points",
          "40 points"
        ],
        "note": "Count 10 points per hit, capped at two hits on each paper no-shoot.",
        "family": "9.4.2",
        "id": "9d9d5b6426560ab7"
      },
      {
        "rule": "10.2.7",
        "prompt": "A competitor leaves 5 non-disappearing scoring targets completely unengaged. They engage the other 4 targets. Before adding any misses, how many failure-to-engage procedurals apply?",
        "correct": "5",
        "options": [
          "5",
          "4",
          "6",
          "7"
        ],
        "note": "",
        "family": "10.2.7",
        "id": "0d8a48f3191f4847"
      },
      {
        "rule": "10.2.3",
        "prompt": "While faulting a line, a competitor fires 9 shots and gains a significant advantage. From that position a maximum of 4 scoring hits can be attained. What is the maximum number of procedurals for that fault?",
        "correct": "4",
        "options": [
          "4",
          "3",
          "5",
          "6"
        ],
        "note": "Multiple penalties for the fault are capped by the scoring hits attainable.",
        "family": "10.2.3",
        "id": "0ef941d62c1d78e5"
      },
      {
        "rule": "11.3.2",
        "prompt": "The Arbitration Committee receives a request at 10:38 on Saturday. Final results are scheduled to be declared at 10:18 on Sunday. What is the latest time the committee may rule under that schedule?",
        "correct": "Before 10:18 on Sunday",
        "options": [
          "Before 10:18 on Sunday",
          "By 10:38 on Sunday",
          "By 10:58 on Sunday",
          "Before 10:18 on Monday"
        ],
        "note": "The earlier limit is the declaration of final results.",
        "family": "11.3.2",
        "id": "de38b1edabf021d6"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Under Comstock, a competitor earns 50 target points, receives 10 penalty points and finishes in 8.00 seconds. What is the hit factor, rounded to four decimals?",
        "correct": "5.0000",
        "options": [
          "5.0000",
          "6.2500",
          "5.6250",
          "7.5000"
        ],
        "note": "Subtract penalties from target points before dividing by time.",
        "family": "comstock-hit-factor",
        "id": "a9248c139a4373b7"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "A 70-point stage is won with a hit factor of 8. A competitor records a hit factor of 6.00. How many stage points does the competitor earn?",
        "correct": "52.50",
        "options": [
          "52.50",
          "50.50",
          "51.50",
          "53.50"
        ],
        "note": "Multiply the available stage points by the competitor’s hit factor divided by the winner’s hit factor.",
        "family": "comstock-stage-points",
        "id": "47f4cad0ab27e8ba"
      },
      {
        "rule": "9.2.3",
        "prompt": "A competitor earns 37.2750, 27.6425 and 28.3850 stage points in the three stages of a match. What is the match total?",
        "correct": "93.3025",
        "options": [
          "93.3025",
          "93.4025",
          "93.2025",
          "94.3025"
        ],
        "note": "",
        "family": "match-total",
        "id": "c9e15cec5e09ea03"
      },
      {
        "rule": "10.2.4",
        "prompt": "A competitor fires 4 shots before a mandatory reload point, 2 shots after it without reloading, and 2 shots after finally reloading. How many procedural penalties apply to the reload violation?",
        "correct": "2",
        "options": [
          "2",
          "1",
          "3",
          "4"
        ],
        "note": "Count only shots after the required reload point and before the reload.",
        "family": "10.2.4",
        "id": "006d194da76716db"
      },
      {
        "rule": "10.2.5",
        "prompt": "In a Cooper Tunnel, direct contact with the overhead material drops 4 pieces. Bumping an upright drops another 1. How many procedural penalties apply?",
        "correct": "4",
        "options": [
          "4",
          "3",
          "5",
          "6"
        ],
        "note": "Pieces that fall from striking an upright are exempt.",
        "family": "10.2.5",
        "id": "8e37dab2e4ff09d1"
      },
      {
        "rule": "10.1.2",
        "prompt": "The Range Officer assesses 6 procedural penalties. What is the total point deduction for these penalties?",
        "correct": "60 points",
        "options": [
          "60 points",
          "40 points",
          "50 points",
          "70 points"
        ],
        "note": "",
        "family": "10.1.2",
        "id": "1b476140e351fce9"
      },
      {
        "rule": "10.2.1",
        "prompt": "A competitor fires 2 shots on each of 5 separate Fault Line breaches, re-entering fully between breaches and gaining no significant advantage. How many procedural penalties apply?",
        "correct": "5",
        "options": [
          "5",
          "4",
          "6",
          "7"
        ],
        "note": "With no significant advantage, count the separate occurrences.",
        "family": "10.2.1",
        "id": "e6660f0d591b4f7d"
      },
      {
        "rule": "11.3.1",
        "prompt": "Match Officials record a disputed call at 09:09. The competitor talks to the Chief Range Officer 15 minutes later. What is the deadline to submit a written arbitration appeal and fee to the Range Master?",
        "correct": "10:09",
        "options": [
          "10:09",
          "09:54",
          "10:24",
          "10:39"
        ],
        "note": "",
        "family": "11.3.1",
        "id": "3a39e0f7f339bf48"
      },
      {
        "rule": "9.8.3",
        "prompt": "The provisional results show a timestamp of 12:51, but were actually posted at 13:05. What is the deadline for a competitor to file a results appeal with the Stats Officer?",
        "correct": "14:05",
        "options": [
          "14:05",
          "13:50",
          "14:20",
          "14:35"
        ],
        "note": "",
        "family": "9.8.3",
        "id": "f52890a6657389c5"
      },
      {
        "rule": "11.4.1",
        "prompt": "At a Level III match the maximum individual entry fee is equivalent to US$121. What is the arbitration fee equivalent in local currency?",
        "correct": "US$100",
        "options": [
          "US$100",
          "US$121",
          "US$95",
          "US$105"
        ],
        "note": "Use the lower of US$100 and the maximum individual entry fee.",
        "family": "11.4.1",
        "id": "f8dd8ce82b7d6cb7"
      },
      {
        "rule": "9.4.2",
        "prompt": "Three paper no-shoots show 1, 2 and 0 hits in their scoring areas, respectively. What is the combined point deduction?",
        "correct": "30 points",
        "options": [
          "30 points",
          "20 points",
          "35 points",
          "40 points"
        ],
        "note": "Count 10 points per hit, capped at two hits on each paper no-shoot.",
        "family": "9.4.2",
        "id": "f4db1f910c9647bc"
      },
      {
        "rule": "10.2.7",
        "prompt": "A competitor leaves 6 non-disappearing scoring targets completely unengaged. They engage the other 5 targets. Before adding any misses, how many failure-to-engage procedurals apply?",
        "correct": "6",
        "options": [
          "6",
          "5",
          "7",
          "8"
        ],
        "note": "",
        "family": "10.2.7",
        "id": "d6027ed7afcbf0dc"
      },
      {
        "rule": "10.2.3",
        "prompt": "While faulting a line, a competitor fires 10 shots and gains a significant advantage. From that position a maximum of 5 scoring hits can be attained. What is the maximum number of procedurals for that fault?",
        "correct": "5",
        "options": [
          "5",
          "4",
          "6",
          "7"
        ],
        "note": "Multiple penalties for the fault are capped by the scoring hits attainable.",
        "family": "10.2.3",
        "id": "78f0f08139c28834"
      },
      {
        "rule": "11.3.2",
        "prompt": "The Arbitration Committee receives a request at 10:57 on Saturday. The Match Director will declare the results final at 11:17 on Sunday. What deadline applies to the committee’s decision?",
        "correct": "By 10:57 on Sunday",
        "options": [
          "By 10:57 on Sunday",
          "Before 11:17 on Sunday",
          "By 10:37 on Sunday",
          "By 10:57 on Monday"
        ],
        "note": "The 24-hour deadline arrives before the declaration of final results.",
        "family": "11.3.2",
        "id": "682a783c53b03f55"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Under Comstock, a competitor earns 55 target points, receives 20 penalty points and finishes in 5.00 seconds. What is the hit factor, rounded to four decimals?",
        "correct": "7.0000",
        "options": [
          "7.0000",
          "11.0000",
          "9.0000",
          "15.0000"
        ],
        "note": "Subtract penalties from target points before dividing by time.",
        "family": "comstock-hit-factor",
        "id": "6b4917642dba515c"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "A 80-point stage is won with a hit factor of 9. A competitor records a hit factor of 7.2. How many stage points does the competitor earn?",
        "correct": "64.00",
        "options": [
          "64.00",
          "62.00",
          "63.00",
          "65.00"
        ],
        "note": "Multiply the available stage points by the competitor’s hit factor divided by the winner’s hit factor.",
        "family": "comstock-stage-points",
        "id": "28ebb69b1638fbdf"
      },
      {
        "rule": "9.2.3",
        "prompt": "A competitor earns 39.2750, 28.6425 and 31.3850 stage points in the three stages of a match. What is the match total?",
        "correct": "99.3025",
        "options": [
          "99.3025",
          "99.4025",
          "99.2025",
          "100.3025"
        ],
        "note": "",
        "family": "match-total",
        "id": "5f4e872e5af06f31"
      },
      {
        "rule": "10.2.4",
        "prompt": "A competitor fires 1 shots before a mandatory reload point, 2 shots after it without reloading, and 3 shots after finally reloading. How many procedural penalties apply to the reload violation?",
        "correct": "2",
        "options": [
          "2",
          "1",
          "3",
          "4"
        ],
        "note": "Count only shots after the required reload point and before the reload.",
        "family": "10.2.4",
        "id": "6e024231dd5c61ec"
      },
      {
        "rule": "10.2.5",
        "prompt": "In a Cooper Tunnel, direct contact with the overhead material drops 1 pieces. Bumping an upright drops another 2. How many procedural penalties apply?",
        "correct": "1",
        "options": [
          "1",
          "0",
          "2",
          "3"
        ],
        "note": "Pieces that fall from striking an upright are exempt.",
        "family": "10.2.5",
        "id": "a494bfc8fae26d63"
      },
      {
        "rule": "10.1.2",
        "prompt": "The Range Officer assesses 7 procedural penalties. What is the total point deduction for these penalties?",
        "correct": "70 points",
        "options": [
          "70 points",
          "50 points",
          "60 points",
          "80 points"
        ],
        "note": "",
        "family": "10.1.2",
        "id": "47ba4f62b92a41c2"
      },
      {
        "rule": "10.2.1",
        "prompt": "A competitor fires 3 shots on each of 2 separate Fault Line breaches, re-entering fully between breaches and gaining no significant advantage. How many procedural penalties apply?",
        "correct": "2",
        "options": [
          "2",
          "1",
          "3",
          "4"
        ],
        "note": "With no significant advantage, count the separate occurrences.",
        "family": "10.2.1",
        "id": "ae87a1170740806b"
      },
      {
        "rule": "11.3.1",
        "prompt": "Match Officials record a disputed call at 09:32. The competitor talks to the Chief Range Officer 15 minutes later. What is the deadline to submit a written arbitration appeal and fee to the Range Master?",
        "correct": "10:32",
        "options": [
          "10:32",
          "10:17",
          "10:47",
          "11:02"
        ],
        "note": "",
        "family": "11.3.1",
        "id": "6588158dd42d9117"
      },
      {
        "rule": "9.8.3",
        "prompt": "The provisional results show a timestamp of 13:08, but were actually posted at 13:19. What is the deadline for a competitor to file a results appeal with the Stats Officer?",
        "correct": "14:19",
        "options": [
          "14:19",
          "14:04",
          "14:34",
          "14:49"
        ],
        "note": "",
        "family": "9.8.3",
        "id": "29a955b04f06e0ec"
      },
      {
        "rule": "11.4.1",
        "prompt": "At a Level III match the maximum individual entry fee is equivalent to US$66. What is the arbitration fee equivalent in local currency?",
        "correct": "US$66",
        "options": [
          "US$66",
          "US$100",
          "US$61",
          "US$71"
        ],
        "note": "Use the lower of US$100 and the maximum individual entry fee.",
        "family": "11.4.1",
        "id": "ee9ce1e4aa409d25"
      },
      {
        "rule": "9.4.2",
        "prompt": "Three paper no-shoots show 2, 2 and 0 hits in their scoring areas, respectively. What is the combined point deduction?",
        "correct": "40 points",
        "options": [
          "40 points",
          "30 points",
          "45 points",
          "50 points"
        ],
        "note": "Count 10 points per hit, capped at two hits on each paper no-shoot.",
        "family": "9.4.2",
        "id": "402cb42239c9c1f8"
      },
      {
        "rule": "10.2.7",
        "prompt": "A competitor leaves 3 non-disappearing scoring targets completely unengaged. They engage the other 6 targets. Before adding any misses, how many failure-to-engage procedurals apply?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "",
        "family": "10.2.7",
        "id": "40285104c3498727"
      },
      {
        "rule": "10.2.3",
        "prompt": "While faulting a line, a competitor fires 11 shots and gains a significant advantage. From that position a maximum of 6 scoring hits can be attained. What is the maximum number of procedurals for that fault?",
        "correct": "6",
        "options": [
          "6",
          "5",
          "7",
          "8"
        ],
        "note": "Multiple penalties for the fault are capped by the scoring hits attainable.",
        "family": "10.2.3",
        "id": "33eda48998525a75"
      },
      {
        "rule": "11.3.2",
        "prompt": "The Arbitration Committee receives a request at 11:16 on Saturday. Final results are scheduled to be declared at 10:56 on Sunday. What is the latest time the committee may rule under that schedule?",
        "correct": "Before 10:56 on Sunday",
        "options": [
          "Before 10:56 on Sunday",
          "By 11:16 on Sunday",
          "By 11:36 on Sunday",
          "Before 10:56 on Monday"
        ],
        "note": "The earlier limit is the declaration of final results.",
        "family": "11.3.2",
        "id": "0ca050eb61851f0f"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Under Comstock, a competitor earns 60 target points, receives 30 penalty points and finishes in 6.00 seconds. What is the hit factor, rounded to four decimals?",
        "correct": "5.0000",
        "options": [
          "5.0000",
          "10.0000",
          "7.5000",
          "15.0000"
        ],
        "note": "Subtract penalties from target points before dividing by time.",
        "family": "comstock-hit-factor",
        "id": "e0956e1c97004596"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "A 90-point stage is won with a hit factor of 10. A competitor records a hit factor of 9.0. How many stage points does the competitor earn?",
        "correct": "81.00",
        "options": [
          "81.00",
          "79.00",
          "80.00",
          "82.00"
        ],
        "note": "Multiply the available stage points by the competitor’s hit factor divided by the winner’s hit factor.",
        "family": "comstock-stage-points",
        "id": "14715e3e5cf69e4f"
      },
      {
        "rule": "9.2.3",
        "prompt": "A competitor earns 41.2750, 29.6425 and 34.3850 stage points in the three stages of a match. What is the match total?",
        "correct": "105.3025",
        "options": [
          "105.3025",
          "105.4025",
          "105.2025",
          "106.3025"
        ],
        "note": "",
        "family": "match-total",
        "id": "074fa194069e06db"
      },
      {
        "rule": "10.2.4",
        "prompt": "A competitor fires 2 shots before a mandatory reload point, 2 shots after it without reloading, and 4 shots after finally reloading. How many procedural penalties apply to the reload violation?",
        "correct": "2",
        "options": [
          "2",
          "1",
          "3",
          "4"
        ],
        "note": "Count only shots after the required reload point and before the reload.",
        "family": "10.2.4",
        "id": "68323701f25334fb"
      },
      {
        "rule": "10.2.5",
        "prompt": "In a Cooper Tunnel, direct contact with the overhead material drops 2 pieces. Bumping an upright drops another 2. How many procedural penalties apply?",
        "correct": "2",
        "options": [
          "2",
          "1",
          "3",
          "4"
        ],
        "note": "Pieces that fall from striking an upright are exempt.",
        "family": "10.2.5",
        "id": "d78787214b190a6e"
      },
      {
        "rule": "10.1.2",
        "prompt": "The Range Officer assesses 8 procedural penalties. What is the total point deduction for these penalties?",
        "correct": "80 points",
        "options": [
          "80 points",
          "60 points",
          "70 points",
          "90 points"
        ],
        "note": "",
        "family": "10.1.2",
        "id": "5d5ad2570ac219a8"
      },
      {
        "rule": "10.2.1",
        "prompt": "A competitor fires 3 shots on each of 3 separate Fault Line breaches, re-entering fully between breaches and gaining no significant advantage. How many procedural penalties apply?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "With no significant advantage, count the separate occurrences.",
        "family": "10.2.1",
        "id": "58f01062c3509bdd"
      },
      {
        "rule": "11.3.1",
        "prompt": "Match Officials record a disputed call at 09:55. The competitor talks to the Chief Range Officer 15 minutes later. What is the deadline to submit a written arbitration appeal and fee to the Range Master?",
        "correct": "10:55",
        "options": [
          "10:55",
          "10:40",
          "11:10",
          "11:25"
        ],
        "note": "",
        "family": "11.3.1",
        "id": "007010000caf70b8"
      },
      {
        "rule": "9.8.3",
        "prompt": "The provisional results show a timestamp of 13:25, but were actually posted at 13:37. What is the deadline for a competitor to file a results appeal with the Stats Officer?",
        "correct": "14:37",
        "options": [
          "14:37",
          "14:22",
          "14:52",
          "15:07"
        ],
        "note": "",
        "family": "9.8.3",
        "id": "251642cc8f8c7f1f"
      },
      {
        "rule": "11.4.1",
        "prompt": "At a Level III match the maximum individual entry fee is equivalent to US$127. What is the arbitration fee equivalent in local currency?",
        "correct": "US$100",
        "options": [
          "US$100",
          "US$127",
          "US$95",
          "US$105"
        ],
        "note": "Use the lower of US$100 and the maximum individual entry fee.",
        "family": "11.4.1",
        "id": "5f76c896f353c461"
      },
      {
        "rule": "9.4.2",
        "prompt": "Three paper no-shoots show 3, 2 and 0 hits in their scoring areas, respectively. What is the combined point deduction?",
        "correct": "40 points",
        "options": [
          "40 points",
          "30 points",
          "45 points",
          "50 points"
        ],
        "note": "Count 10 points per hit, capped at two hits on each paper no-shoot.",
        "family": "9.4.2",
        "id": "f10264af0c61ed3a"
      },
      {
        "rule": "10.2.7",
        "prompt": "A competitor leaves 4 non-disappearing scoring targets completely unengaged. They engage the other 7 targets. Before adding any misses, how many failure-to-engage procedurals apply?",
        "correct": "4",
        "options": [
          "4",
          "3",
          "5",
          "6"
        ],
        "note": "",
        "family": "10.2.7",
        "id": "9bd75fb0011635df"
      },
      {
        "rule": "10.2.3",
        "prompt": "While faulting a line, a competitor fires 12 shots and gains a significant advantage. From that position a maximum of 7 scoring hits can be attained. What is the maximum number of procedurals for that fault?",
        "correct": "7",
        "options": [
          "7",
          "6",
          "8",
          "9"
        ],
        "note": "Multiple penalties for the fault are capped by the scoring hits attainable.",
        "family": "10.2.3",
        "id": "fe4d0980cee323db"
      },
      {
        "rule": "11.3.2",
        "prompt": "The Arbitration Committee receives a request at 11:35 on Saturday. The Match Director will declare the results final at 11:55 on Sunday. What deadline applies to the committee’s decision?",
        "correct": "By 11:35 on Sunday",
        "options": [
          "By 11:35 on Sunday",
          "Before 11:55 on Sunday",
          "By 11:15 on Sunday",
          "By 11:35 on Monday"
        ],
        "note": "The 24-hour deadline arrives before the declaration of final results.",
        "family": "11.3.2",
        "id": "64eca1200b3dfb67"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Under Comstock, a competitor earns 65 target points, receives 10 penalty points and finishes in 7.00 seconds. What is the hit factor, rounded to four decimals?",
        "correct": "7.8571",
        "options": [
          "7.8571",
          "9.2857",
          "8.5714",
          "10.7143"
        ],
        "note": "Subtract penalties from target points before dividing by time.",
        "family": "comstock-hit-factor",
        "id": "dc1a8095996ad676"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "A 100-point stage is won with a hit factor of 8. A competitor records a hit factor of 4.0. How many stage points does the competitor earn?",
        "correct": "50.00",
        "options": [
          "50.00",
          "48.00",
          "49.00",
          "51.00"
        ],
        "note": "Multiply the available stage points by the competitor’s hit factor divided by the winner’s hit factor.",
        "family": "comstock-stage-points",
        "id": "a40790b1b62def3d"
      },
      {
        "rule": "9.2.3",
        "prompt": "A competitor earns 43.2750, 30.6425 and 37.3850 stage points in the three stages of a match. What is the match total?",
        "correct": "111.3025",
        "options": [
          "111.3025",
          "111.4025",
          "111.2025",
          "112.3025"
        ],
        "note": "",
        "family": "match-total",
        "id": "94c3a1b2ed2be128"
      },
      {
        "rule": "10.2.4",
        "prompt": "A competitor fires 3 shots before a mandatory reload point, 3 shots after it without reloading, and 2 shots after finally reloading. How many procedural penalties apply to the reload violation?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "Count only shots after the required reload point and before the reload.",
        "family": "10.2.4",
        "id": "74af5d5f21fe1dfb"
      },
      {
        "rule": "10.2.5",
        "prompt": "In a Cooper Tunnel, direct contact with the overhead material drops 3 pieces. Bumping an upright drops another 2. How many procedural penalties apply?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "Pieces that fall from striking an upright are exempt.",
        "family": "10.2.5",
        "id": "1f535390a3951d7e"
      },
      {
        "rule": "10.1.2",
        "prompt": "The Range Officer assesses 9 procedural penalties. What is the total point deduction for these penalties?",
        "correct": "90 points",
        "options": [
          "90 points",
          "70 points",
          "80 points",
          "100 points"
        ],
        "note": "",
        "family": "10.1.2",
        "id": "8408d43671db7a0e"
      },
      {
        "rule": "10.2.1",
        "prompt": "A competitor fires 3 shots on each of 4 separate Fault Line breaches, re-entering fully between breaches and gaining no significant advantage. How many procedural penalties apply?",
        "correct": "4",
        "options": [
          "4",
          "3",
          "5",
          "6"
        ],
        "note": "With no significant advantage, count the separate occurrences.",
        "family": "10.2.1",
        "id": "2ff8e267c91dde1a"
      },
      {
        "rule": "11.3.1",
        "prompt": "Match Officials record a disputed call at 10:18. The competitor talks to the Chief Range Officer 15 minutes later. What is the deadline to submit a written arbitration appeal and fee to the Range Master?",
        "correct": "11:18",
        "options": [
          "11:18",
          "11:03",
          "11:33",
          "11:48"
        ],
        "note": "",
        "family": "11.3.1",
        "id": "c965916fb531369c"
      },
      {
        "rule": "9.8.3",
        "prompt": "The provisional results show a timestamp of 13:42, but were actually posted at 13:55. What is the deadline for a competitor to file a results appeal with the Stats Officer?",
        "correct": "14:55",
        "options": [
          "14:55",
          "14:40",
          "15:10",
          "15:25"
        ],
        "note": "",
        "family": "9.8.3",
        "id": "2cf52a01b6b110fd"
      },
      {
        "rule": "11.4.1",
        "prompt": "At a Level III match the maximum individual entry fee is equivalent to US$70. What is the arbitration fee equivalent in local currency?",
        "correct": "US$70",
        "options": [
          "US$70",
          "US$100",
          "US$65",
          "US$75"
        ],
        "note": "Use the lower of US$100 and the maximum individual entry fee.",
        "family": "11.4.1",
        "id": "d811849a35cbcaa0"
      },
      {
        "rule": "9.4.2",
        "prompt": "Three paper no-shoots show 1, 3 and 1 hits in their scoring areas, respectively. What is the combined point deduction?",
        "correct": "40 points",
        "options": [
          "40 points",
          "30 points",
          "45 points",
          "50 points"
        ],
        "note": "Count 10 points per hit, capped at two hits on each paper no-shoot.",
        "family": "9.4.2",
        "id": "e7a35042e7ccfa8a"
      },
      {
        "rule": "10.2.7",
        "prompt": "A competitor leaves 5 non-disappearing scoring targets completely unengaged. They engage the other 8 targets. Before adding any misses, how many failure-to-engage procedurals apply?",
        "correct": "5",
        "options": [
          "5",
          "4",
          "6",
          "7"
        ],
        "note": "",
        "family": "10.2.7",
        "id": "fd6b874ef06e73b5"
      },
      {
        "rule": "10.2.3",
        "prompt": "While faulting a line, a competitor fires 13 shots and gains a significant advantage. From that position a maximum of 8 scoring hits can be attained. What is the maximum number of procedurals for that fault?",
        "correct": "8",
        "options": [
          "8",
          "7",
          "9",
          "10"
        ],
        "note": "Multiple penalties for the fault are capped by the scoring hits attainable.",
        "family": "10.2.3",
        "id": "e26303c2b6fb8eef"
      },
      {
        "rule": "11.3.2",
        "prompt": "The Arbitration Committee receives a request at 11:54 on Saturday. Final results are scheduled to be declared at 11:34 on Sunday. What is the latest time the committee may rule under that schedule?",
        "correct": "Before 11:34 on Sunday",
        "options": [
          "Before 11:34 on Sunday",
          "By 11:54 on Sunday",
          "By 12:14 on Sunday",
          "Before 11:34 on Monday"
        ],
        "note": "The earlier limit is the declaration of final results.",
        "family": "11.3.2",
        "id": "2f113c3dcf31d25b"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Under Comstock, a competitor earns 70 target points, receives 20 penalty points and finishes in 8.00 seconds. What is the hit factor, rounded to four decimals?",
        "correct": "6.2500",
        "options": [
          "6.2500",
          "8.7500",
          "7.5000",
          "11.2500"
        ],
        "note": "Subtract penalties from target points before dividing by time.",
        "family": "comstock-hit-factor",
        "id": "194827b22eba79b3"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "A 110-point stage is won with a hit factor of 9. A competitor records a hit factor of 5.4. How many stage points does the competitor earn?",
        "correct": "66.00",
        "options": [
          "66.00",
          "64.00",
          "65.00",
          "67.00"
        ],
        "note": "Multiply the available stage points by the competitor’s hit factor divided by the winner’s hit factor.",
        "family": "comstock-stage-points",
        "id": "ae96f35457d3f054"
      },
      {
        "rule": "9.2.3",
        "prompt": "A competitor earns 45.2750, 31.6425 and 40.3850 stage points in the three stages of a match. What is the match total?",
        "correct": "117.3025",
        "options": [
          "117.3025",
          "117.4025",
          "117.2025",
          "118.3025"
        ],
        "note": "",
        "family": "match-total",
        "id": "14aae3449b1f03c8"
      },
      {
        "rule": "10.2.4",
        "prompt": "A competitor fires 4 shots before a mandatory reload point, 3 shots after it without reloading, and 3 shots after finally reloading. How many procedural penalties apply to the reload violation?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "Count only shots after the required reload point and before the reload.",
        "family": "10.2.4",
        "id": "ed76f5a3f5fb66c2"
      },
      {
        "rule": "10.2.5",
        "prompt": "In a Cooper Tunnel, direct contact with the overhead material drops 4 pieces. Bumping an upright drops another 2. How many procedural penalties apply?",
        "correct": "4",
        "options": [
          "4",
          "3",
          "5",
          "6"
        ],
        "note": "Pieces that fall from striking an upright are exempt.",
        "family": "10.2.5",
        "id": "491749653d1d7d26"
      },
      {
        "rule": "10.1.2",
        "prompt": "The Range Officer assesses 10 procedural penalties. What is the total point deduction for these penalties?",
        "correct": "100 points",
        "options": [
          "100 points",
          "80 points",
          "90 points",
          "110 points"
        ],
        "note": "",
        "family": "10.1.2",
        "id": "100e589875ff53f7"
      },
      {
        "rule": "10.2.1",
        "prompt": "A competitor fires 3 shots on each of 5 separate Fault Line breaches, re-entering fully between breaches and gaining no significant advantage. How many procedural penalties apply?",
        "correct": "5",
        "options": [
          "5",
          "4",
          "6",
          "7"
        ],
        "note": "With no significant advantage, count the separate occurrences.",
        "family": "10.2.1",
        "id": "5e49c94b26b2461c"
      },
      {
        "rule": "11.3.1",
        "prompt": "Match Officials record a disputed call at 10:41. The competitor talks to the Chief Range Officer 15 minutes later. What is the deadline to submit a written arbitration appeal and fee to the Range Master?",
        "correct": "11:41",
        "options": [
          "11:41",
          "11:26",
          "11:56",
          "12:11"
        ],
        "note": "",
        "family": "11.3.1",
        "id": "0d638cd42e10ffb0"
      },
      {
        "rule": "9.8.3",
        "prompt": "The provisional results show a timestamp of 13:59, but were actually posted at 14:13. What is the deadline for a competitor to file a results appeal with the Stats Officer?",
        "correct": "15:13",
        "options": [
          "15:13",
          "14:58",
          "15:28",
          "15:43"
        ],
        "note": "",
        "family": "9.8.3",
        "id": "09e5ceb49c90626e"
      },
      {
        "rule": "11.4.1",
        "prompt": "At a Level III match the maximum individual entry fee is equivalent to US$133. What is the arbitration fee equivalent in local currency?",
        "correct": "US$100",
        "options": [
          "US$100",
          "US$133",
          "US$95",
          "US$105"
        ],
        "note": "Use the lower of US$100 and the maximum individual entry fee.",
        "family": "11.4.1",
        "id": "274ea25396d70949"
      },
      {
        "rule": "9.4.2",
        "prompt": "Three paper no-shoots show 2, 3 and 1 hits in their scoring areas, respectively. What is the combined point deduction?",
        "correct": "50 points",
        "options": [
          "50 points",
          "40 points",
          "55 points",
          "60 points"
        ],
        "note": "Count 10 points per hit, capped at two hits on each paper no-shoot.",
        "family": "9.4.2",
        "id": "3fe10b1743af5a74"
      },
      {
        "rule": "10.2.7",
        "prompt": "A competitor leaves 6 non-disappearing scoring targets completely unengaged. They engage the other 9 targets. Before adding any misses, how many failure-to-engage procedurals apply?",
        "correct": "6",
        "options": [
          "6",
          "5",
          "7",
          "8"
        ],
        "note": "",
        "family": "10.2.7",
        "id": "5bd4bda93c64ae23"
      },
      {
        "rule": "10.2.3",
        "prompt": "While faulting a line, a competitor fires 14 shots and gains a significant advantage. From that position a maximum of 9 scoring hits can be attained. What is the maximum number of procedurals for that fault?",
        "correct": "9",
        "options": [
          "9",
          "8",
          "10",
          "11"
        ],
        "note": "Multiple penalties for the fault are capped by the scoring hits attainable.",
        "family": "10.2.3",
        "id": "8ba798773a134e49"
      },
      {
        "rule": "11.3.2",
        "prompt": "The Arbitration Committee receives a request at 12:13 on Saturday. The Match Director will declare the results final at 12:33 on Sunday. What deadline applies to the committee’s decision?",
        "correct": "By 12:13 on Sunday",
        "options": [
          "By 12:13 on Sunday",
          "Before 12:33 on Sunday",
          "By 11:53 on Sunday",
          "By 12:13 on Monday"
        ],
        "note": "The 24-hour deadline arrives before the declaration of final results.",
        "family": "11.3.2",
        "id": "87e95945c487e4d8"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Under Comstock, a competitor earns 75 target points, receives 30 penalty points and finishes in 5.00 seconds. What is the hit factor, rounded to four decimals?",
        "correct": "9.0000",
        "options": [
          "9.0000",
          "15.0000",
          "12.0000",
          "21.0000"
        ],
        "note": "Subtract penalties from target points before dividing by time.",
        "family": "comstock-hit-factor",
        "id": "6593ce04b3d67d7d"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "A 120-point stage is won with a hit factor of 10. A competitor records a hit factor of 7.0. How many stage points does the competitor earn?",
        "correct": "84.00",
        "options": [
          "84.00",
          "82.00",
          "83.00",
          "85.00"
        ],
        "note": "Multiply the available stage points by the competitor’s hit factor divided by the winner’s hit factor.",
        "family": "comstock-stage-points",
        "id": "125f67b0e89b3b29"
      },
      {
        "rule": "9.2.3",
        "prompt": "A competitor earns 47.2750, 32.6425 and 43.3850 stage points in the three stages of a match. What is the match total?",
        "correct": "123.3025",
        "options": [
          "123.3025",
          "123.4025",
          "123.2025",
          "124.3025"
        ],
        "note": "",
        "family": "match-total",
        "id": "ac71cbd4257fe44c"
      },
      {
        "rule": "10.2.4",
        "prompt": "A competitor fires 1 shots before a mandatory reload point, 3 shots after it without reloading, and 4 shots after finally reloading. How many procedural penalties apply to the reload violation?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "Count only shots after the required reload point and before the reload.",
        "family": "10.2.4",
        "id": "ad42741d9b5b0b33"
      },
      {
        "rule": "10.2.5",
        "prompt": "In a Cooper Tunnel, direct contact with the overhead material drops 1 pieces. Bumping an upright drops another 3. How many procedural penalties apply?",
        "correct": "1",
        "options": [
          "1",
          "0",
          "2",
          "3"
        ],
        "note": "Pieces that fall from striking an upright are exempt.",
        "family": "10.2.5",
        "id": "073fa27a14c6fdba"
      },
      {
        "rule": "10.1.2",
        "prompt": "The Range Officer assesses 11 procedural penalties. What is the total point deduction for these penalties?",
        "correct": "110 points",
        "options": [
          "110 points",
          "90 points",
          "100 points",
          "120 points"
        ],
        "note": "",
        "family": "10.1.2",
        "id": "6ced0a30c97d29fb"
      },
      {
        "rule": "10.2.1",
        "prompt": "A competitor fires 4 shots on each of 2 separate Fault Line breaches, re-entering fully between breaches and gaining no significant advantage. How many procedural penalties apply?",
        "correct": "2",
        "options": [
          "2",
          "1",
          "3",
          "4"
        ],
        "note": "With no significant advantage, count the separate occurrences.",
        "family": "10.2.1",
        "id": "0fdc8b40955167f4"
      },
      {
        "rule": "11.3.1",
        "prompt": "Match Officials record a disputed call at 11:04. The competitor talks to the Chief Range Officer 15 minutes later. What is the deadline to submit a written arbitration appeal and fee to the Range Master?",
        "correct": "12:04",
        "options": [
          "12:04",
          "11:49",
          "12:19",
          "12:34"
        ],
        "note": "",
        "family": "11.3.1",
        "id": "74c72e17cf94ace9"
      },
      {
        "rule": "9.8.3",
        "prompt": "The provisional results show a timestamp of 14:16, but were actually posted at 14:27. What is the deadline for a competitor to file a results appeal with the Stats Officer?",
        "correct": "15:27",
        "options": [
          "15:27",
          "15:12",
          "15:42",
          "15:57"
        ],
        "note": "",
        "family": "9.8.3",
        "id": "7218042e14ad7648"
      },
      {
        "rule": "11.4.1",
        "prompt": "At a Level III match the maximum individual entry fee is equivalent to US$74. What is the arbitration fee equivalent in local currency?",
        "correct": "US$74",
        "options": [
          "US$74",
          "US$100",
          "US$69",
          "US$79"
        ],
        "note": "Use the lower of US$100 and the maximum individual entry fee.",
        "family": "11.4.1",
        "id": "84a17151ec6235aa"
      },
      {
        "rule": "9.4.2",
        "prompt": "Three paper no-shoots show 3, 3 and 1 hits in their scoring areas, respectively. What is the combined point deduction?",
        "correct": "50 points",
        "options": [
          "50 points",
          "40 points",
          "55 points",
          "60 points"
        ],
        "note": "Count 10 points per hit, capped at two hits on each paper no-shoot.",
        "family": "9.4.2",
        "id": "9362ece878e6df51"
      },
      {
        "rule": "10.2.7",
        "prompt": "A competitor leaves 3 non-disappearing scoring targets completely unengaged. They engage the other 10 targets. Before adding any misses, how many failure-to-engage procedurals apply?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "",
        "family": "10.2.7",
        "id": "f187f41432c19f9e"
      },
      {
        "rule": "10.2.3",
        "prompt": "While faulting a line, a competitor fires 15 shots and gains a significant advantage. From that position a maximum of 10 scoring hits can be attained. What is the maximum number of procedurals for that fault?",
        "correct": "10",
        "options": [
          "10",
          "9",
          "11",
          "12"
        ],
        "note": "Multiple penalties for the fault are capped by the scoring hits attainable.",
        "family": "10.2.3",
        "id": "1d0b8f7c31502eb7"
      },
      {
        "rule": "11.3.2",
        "prompt": "The Arbitration Committee receives a request at 12:32 on Saturday. Final results are scheduled to be declared at 12:12 on Sunday. What is the latest time the committee may rule under that schedule?",
        "correct": "Before 12:12 on Sunday",
        "options": [
          "Before 12:12 on Sunday",
          "By 12:32 on Sunday",
          "By 12:52 on Sunday",
          "Before 12:12 on Monday"
        ],
        "note": "The earlier limit is the declaration of final results.",
        "family": "11.3.2",
        "id": "0a04767b90011120"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Under Comstock, a competitor earns 80 target points, receives 10 penalty points and finishes in 6.00 seconds. What is the hit factor, rounded to four decimals?",
        "correct": "11.6667",
        "options": [
          "11.6667",
          "13.3333",
          "12.5000",
          "15.0000"
        ],
        "note": "Subtract penalties from target points before dividing by time.",
        "family": "comstock-hit-factor",
        "id": "0a8487a56defd7d4"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "A 130-point stage is won with a hit factor of 8. A competitor records a hit factor of 6.00. How many stage points does the competitor earn?",
        "correct": "97.50",
        "options": [
          "97.50",
          "95.50",
          "96.50",
          "98.50"
        ],
        "note": "Multiply the available stage points by the competitor’s hit factor divided by the winner’s hit factor.",
        "family": "comstock-stage-points",
        "id": "581a8fb3529e434e"
      },
      {
        "rule": "9.2.3",
        "prompt": "A competitor earns 49.2750, 33.6425 and 46.3850 stage points in the three stages of a match. What is the match total?",
        "correct": "129.3025",
        "options": [
          "129.3025",
          "129.4025",
          "129.2025",
          "130.3025"
        ],
        "note": "",
        "family": "match-total",
        "id": "24a2902d339963fb"
      },
      {
        "rule": "10.2.4",
        "prompt": "A competitor fires 2 shots before a mandatory reload point, 4 shots after it without reloading, and 2 shots after finally reloading. How many procedural penalties apply to the reload violation?",
        "correct": "4",
        "options": [
          "4",
          "3",
          "5",
          "6"
        ],
        "note": "Count only shots after the required reload point and before the reload.",
        "family": "10.2.4",
        "id": "a63d7cb694c1e4e7"
      },
      {
        "rule": "10.2.5",
        "prompt": "In a Cooper Tunnel, direct contact with the overhead material drops 2 pieces. Bumping an upright drops another 3. How many procedural penalties apply?",
        "correct": "2",
        "options": [
          "2",
          "1",
          "3",
          "4"
        ],
        "note": "Pieces that fall from striking an upright are exempt.",
        "family": "10.2.5",
        "id": "d4412d59638309cc"
      },
      {
        "rule": "10.1.2",
        "prompt": "The Range Officer assesses 12 procedural penalties. What is the total point deduction for these penalties?",
        "correct": "120 points",
        "options": [
          "120 points",
          "100 points",
          "110 points",
          "130 points"
        ],
        "note": "",
        "family": "10.1.2",
        "id": "2da427e627a18668"
      },
      {
        "rule": "10.2.1",
        "prompt": "A competitor fires 4 shots on each of 3 separate Fault Line breaches, re-entering fully between breaches and gaining no significant advantage. How many procedural penalties apply?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "With no significant advantage, count the separate occurrences.",
        "family": "10.2.1",
        "id": "21bc41077313a1fb"
      },
      {
        "rule": "11.3.1",
        "prompt": "Match Officials record a disputed call at 11:27. The competitor talks to the Chief Range Officer 15 minutes later. What is the deadline to submit a written arbitration appeal and fee to the Range Master?",
        "correct": "12:27",
        "options": [
          "12:27",
          "12:12",
          "12:42",
          "12:57"
        ],
        "note": "",
        "family": "11.3.1",
        "id": "8b94d01c354e3638"
      },
      {
        "rule": "9.8.3",
        "prompt": "The provisional results show a timestamp of 14:33, but were actually posted at 14:45. What is the deadline for a competitor to file a results appeal with the Stats Officer?",
        "correct": "15:45",
        "options": [
          "15:45",
          "15:30",
          "16:00",
          "16:15"
        ],
        "note": "",
        "family": "9.8.3",
        "id": "7aba270f1596c966"
      },
      {
        "rule": "11.4.1",
        "prompt": "At a Level III match the maximum individual entry fee is equivalent to US$139. What is the arbitration fee equivalent in local currency?",
        "correct": "US$100",
        "options": [
          "US$100",
          "US$139",
          "US$95",
          "US$105"
        ],
        "note": "Use the lower of US$100 and the maximum individual entry fee.",
        "family": "11.4.1",
        "id": "5bb2c4fc1e28915c"
      },
      {
        "rule": "9.4.2",
        "prompt": "Three paper no-shoots show 1, 4 and 1 hits in their scoring areas, respectively. What is the combined point deduction?",
        "correct": "40 points",
        "options": [
          "40 points",
          "30 points",
          "45 points",
          "50 points"
        ],
        "note": "Count 10 points per hit, capped at two hits on each paper no-shoot.",
        "family": "9.4.2",
        "id": "2ce804cf7d3c65a5"
      },
      {
        "rule": "10.2.7",
        "prompt": "A competitor leaves 4 non-disappearing scoring targets completely unengaged. They engage the other 11 targets. Before adding any misses, how many failure-to-engage procedurals apply?",
        "correct": "4",
        "options": [
          "4",
          "3",
          "5",
          "6"
        ],
        "note": "",
        "family": "10.2.7",
        "id": "6a197c545df016c0"
      },
      {
        "rule": "10.2.3",
        "prompt": "While faulting a line, a competitor fires 16 shots and gains a significant advantage. From that position a maximum of 11 scoring hits can be attained. What is the maximum number of procedurals for that fault?",
        "correct": "11",
        "options": [
          "11",
          "10",
          "12",
          "13"
        ],
        "note": "Multiple penalties for the fault are capped by the scoring hits attainable.",
        "family": "10.2.3",
        "id": "ee190b22289ebab1"
      },
      {
        "rule": "11.3.2",
        "prompt": "The Arbitration Committee receives a request at 12:51 on Saturday. The Match Director will declare the results final at 13:11 on Sunday. What deadline applies to the committee’s decision?",
        "correct": "By 12:51 on Sunday",
        "options": [
          "By 12:51 on Sunday",
          "Before 13:11 on Sunday",
          "By 12:31 on Sunday",
          "By 12:51 on Monday"
        ],
        "note": "The 24-hour deadline arrives before the declaration of final results.",
        "family": "11.3.2",
        "id": "87475e17dc3ff41f"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Under Comstock, a competitor earns 85 target points, receives 20 penalty points and finishes in 7.00 seconds. What is the hit factor, rounded to four decimals?",
        "correct": "9.2857",
        "options": [
          "9.2857",
          "12.1429",
          "10.7143",
          "15.0000"
        ],
        "note": "Subtract penalties from target points before dividing by time.",
        "family": "comstock-hit-factor",
        "id": "b85cb293f700cca4"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "A 140-point stage is won with a hit factor of 9. A competitor records a hit factor of 7.2. How many stage points does the competitor earn?",
        "correct": "112.00",
        "options": [
          "112.00",
          "110.00",
          "111.00",
          "113.00"
        ],
        "note": "Multiply the available stage points by the competitor’s hit factor divided by the winner’s hit factor.",
        "family": "comstock-stage-points",
        "id": "80da1262251a8622"
      },
      {
        "rule": "9.2.3",
        "prompt": "A competitor earns 51.2750, 34.6425 and 49.3850 stage points in the three stages of a match. What is the match total?",
        "correct": "135.3025",
        "options": [
          "135.3025",
          "135.4025",
          "135.2025",
          "136.3025"
        ],
        "note": "",
        "family": "match-total",
        "id": "dc93ed95ac38a11e"
      },
      {
        "rule": "10.2.4",
        "prompt": "A competitor fires 3 shots before a mandatory reload point, 4 shots after it without reloading, and 3 shots after finally reloading. How many procedural penalties apply to the reload violation?",
        "correct": "4",
        "options": [
          "4",
          "3",
          "5",
          "6"
        ],
        "note": "Count only shots after the required reload point and before the reload.",
        "family": "10.2.4",
        "id": "ff81f0ebb90fa7fe"
      },
      {
        "rule": "10.2.5",
        "prompt": "In a Cooper Tunnel, direct contact with the overhead material drops 3 pieces. Bumping an upright drops another 3. How many procedural penalties apply?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "Pieces that fall from striking an upright are exempt.",
        "family": "10.2.5",
        "id": "a69a26a0962324c0"
      },
      {
        "rule": "10.1.2",
        "prompt": "The Range Officer assesses 13 procedural penalties. What is the total point deduction for these penalties?",
        "correct": "130 points",
        "options": [
          "130 points",
          "110 points",
          "120 points",
          "140 points"
        ],
        "note": "",
        "family": "10.1.2",
        "id": "f2b4498c35093061"
      },
      {
        "rule": "10.2.1",
        "prompt": "A competitor fires 4 shots on each of 4 separate Fault Line breaches, re-entering fully between breaches and gaining no significant advantage. How many procedural penalties apply?",
        "correct": "4",
        "options": [
          "4",
          "3",
          "5",
          "6"
        ],
        "note": "With no significant advantage, count the separate occurrences.",
        "family": "10.2.1",
        "id": "bcbc115517493d04"
      },
      {
        "rule": "11.3.1",
        "prompt": "Match Officials record a disputed call at 11:50. The competitor talks to the Chief Range Officer 15 minutes later. What is the deadline to submit a written arbitration appeal and fee to the Range Master?",
        "correct": "12:50",
        "options": [
          "12:50",
          "12:35",
          "13:05",
          "13:20"
        ],
        "note": "",
        "family": "11.3.1",
        "id": "5fa6865654c74be5"
      },
      {
        "rule": "9.8.3",
        "prompt": "The provisional results show a timestamp of 14:50, but were actually posted at 15:03. What is the deadline for a competitor to file a results appeal with the Stats Officer?",
        "correct": "16:03",
        "options": [
          "16:03",
          "15:48",
          "16:18",
          "16:33"
        ],
        "note": "",
        "family": "9.8.3",
        "id": "2bb26fd96d3d99e0"
      },
      {
        "rule": "11.4.1",
        "prompt": "At a Level III match the maximum individual entry fee is equivalent to US$78. What is the arbitration fee equivalent in local currency?",
        "correct": "US$78",
        "options": [
          "US$78",
          "US$100",
          "US$73",
          "US$83"
        ],
        "note": "Use the lower of US$100 and the maximum individual entry fee.",
        "family": "11.4.1",
        "id": "b0c07a4dded3ae57"
      },
      {
        "rule": "9.4.2",
        "prompt": "Three paper no-shoots show 2, 4 and 1 hits in their scoring areas, respectively. What is the combined point deduction?",
        "correct": "50 points",
        "options": [
          "50 points",
          "40 points",
          "55 points",
          "60 points"
        ],
        "note": "Count 10 points per hit, capped at two hits on each paper no-shoot.",
        "family": "9.4.2",
        "id": "b8d2a9da680ff132"
      },
      {
        "rule": "10.2.7",
        "prompt": "A competitor leaves 5 non-disappearing scoring targets completely unengaged. They engage the other 12 targets. Before adding any misses, how many failure-to-engage procedurals apply?",
        "correct": "5",
        "options": [
          "5",
          "4",
          "6",
          "7"
        ],
        "note": "",
        "family": "10.2.7",
        "id": "6027dec45b5000f3"
      },
      {
        "rule": "10.2.3",
        "prompt": "While faulting a line, a competitor fires 17 shots and gains a significant advantage. From that position a maximum of 12 scoring hits can be attained. What is the maximum number of procedurals for that fault?",
        "correct": "12",
        "options": [
          "12",
          "11",
          "13",
          "14"
        ],
        "note": "Multiple penalties for the fault are capped by the scoring hits attainable.",
        "family": "10.2.3",
        "id": "8ba2c28d0727460d"
      },
      {
        "rule": "11.3.2",
        "prompt": "The Arbitration Committee receives a request at 13:10 on Saturday. Final results are scheduled to be declared at 12:50 on Sunday. What is the latest time the committee may rule under that schedule?",
        "correct": "Before 12:50 on Sunday",
        "options": [
          "Before 12:50 on Sunday",
          "By 13:10 on Sunday",
          "By 13:30 on Sunday",
          "Before 12:50 on Monday"
        ],
        "note": "The earlier limit is the declaration of final results.",
        "family": "11.3.2",
        "id": "75069bcdc82cd29e"
      }
    ]
  },
  {
    "id": "pcc",
    "name": "Pistol Caliber Carbine",
    "group": "Centerfire",
    "book": "https://drive.google.com/file/d/1Gd-knKAbqb1l2izBWMJu2_fx9ilLpYNP/view",
    "questions": [
      {
        "rule": "1.2.1.3",
        "prompt": "What is the maximum required round count for a PCC Long Course?",
        "correct": "40",
        "options": [
          "40",
          "32",
          "36",
          "42"
        ],
        "note": "",
        "family": "1.2.1.3",
        "id": "09c7c8b39787aedf"
      },
      {
        "rule": "Appendix D, item 6",
        "prompt": "What is the maximum PCC ammunition load in total, including the chamber?",
        "correct": "33 rounds",
        "options": [
          "33 rounds",
          "31 rounds",
          "32 rounds",
          "34 rounds"
        ],
        "note": "The total limit is 33, with at most 32 in the magazine.",
        "family": "Appendix D, item 6",
        "id": "811ddb9ad6db3733"
      },
      {
        "rule": "Appendix D, item 1",
        "prompt": "What is the minimum PCC power factor for scoring?",
        "correct": "125",
        "options": [
          "125",
          "120",
          "130",
          "135"
        ],
        "note": "",
        "family": "Appendix D, item 1",
        "id": "c08599bc6651d713"
      },
      {
        "rule": "Appendix D, item 3",
        "prompt": "What is the minimum PCC bullet weight listed in the division table?",
        "correct": "113 grains",
        "options": [
          "113 grains",
          "110 grains",
          "115 grains",
          "118 grains"
        ],
        "note": "",
        "family": "Appendix D, item 3",
        "id": "e6f2f7f67635ebea"
      },
      {
        "rule": "2.1.3",
        "prompt": "While metal targets are being shot, what minimum distance must be maintained?",
        "correct": "7 m",
        "options": [
          "7 m",
          "6 m",
          "8 m",
          "9 m"
        ],
        "note": "If a Fault Line is used to limit the approach, it must be placed at least 8 m away.",
        "family": "2.1.3",
        "id": "36549773fe6c1e04"
      },
      {
        "rule": "9.4.2",
        "prompt": "Three hits are visible in the scoring area of a single paper no-shoot. What penalty is assessed on that no-shoot?",
        "correct": "−20 points",
        "options": [
          "−20 points",
          "−10 points",
          "−25 points",
          "−30 points"
        ],
        "note": "Two hits at most are penalized on a single paper no-shoot, at 10 points each.",
        "family": "9.4.2",
        "id": "3e71e77f78236b79"
      },
      {
        "rule": "3.2.3",
        "prompt": "Between squads, the written stage briefing needs a clarification for consistency. Who has the authority to amend it?",
        "correct": "Range Master",
        "options": [
          "Range Master",
          "Chief Range Officer",
          "Range Officer",
          "Match Director"
        ],
        "note": "",
        "family": "3.2.3",
        "id": "24be4f173f88362d"
      },
      {
        "rule": "9.1.3",
        "prompt": "A paper target is patched before scoring and the original score cannot be determined. What must the Range Officer order?",
        "correct": "A reshoot of the entire course of fire",
        "options": [
          "A reshoot of the entire course of fire",
          "A reshoot of the affected target only",
          "A rescore using the minimum possible target score",
          "A rescore using the maximum possible target score"
        ],
        "note": "",
        "family": "9.1.3",
        "id": "84e73bae40fef1d1"
      },
      {
        "rule": "10.2.4",
        "prompt": "A competitor fires two shots after the point where a mandatory reload was required, then reloads and fires one more. How many procedural penalties apply for the missed reload?",
        "correct": "2",
        "options": [
          "2",
          "1",
          "3",
          "0"
        ],
        "note": "Count each shot after the required reload point until the reload is performed.",
        "family": "10.2.4",
        "id": "1799ef99d814ab1b"
      },
      {
        "rule": "11.3.1",
        "prompt": "A disputed call is recorded by Match Officials at 13:20. By what time must the written arbitration appeal and applicable fee be submitted to the Range Master?",
        "correct": "14:20",
        "options": [
          "14:20",
          "13:50",
          "14:05",
          "14:50"
        ],
        "note": "The submission window is one hour from the recorded time of the disputed call.",
        "family": "11.3.1",
        "id": "78d8cac4ae7947d1"
      },
      {
        "rule": "9.5.2",
        "prompt": "A hit on a scoring paper target touches the line between two scoring zones. Which value counts?",
        "correct": "The higher of the two zone values",
        "options": [
          "The higher of the two zone values",
          "The lower of the two zone values",
          "The zone containing most of the hit",
          "The zone containing the centre of the hit"
        ],
        "note": "",
        "family": "9.5.2",
        "id": "14d00d4c36342c41"
      },
      {
        "rule": "9.2.2",
        "prompt": "To how many decimal places are individual stage points calculated for stage ranking?",
        "correct": "4",
        "options": [
          "4",
          "2",
          "3",
          "5"
        ],
        "note": "",
        "family": "9.2.2",
        "id": "9e45b306a23c2492"
      },
      {
        "rule": "3.2.4",
        "prompt": "Who sets the duration of the squad’s stage walkthrough?",
        "correct": "Range Officer",
        "options": [
          "Range Officer",
          "Chief Range Officer",
          "Range Master",
          "Match Director"
        ],
        "note": "",
        "family": "3.2.4",
        "id": "2f38cfa6c5d892fc"
      },
      {
        "rule": "3.2.4",
        "prompt": "Moving targets are demonstrated during walkthroughs. What must be consistent across competitors?",
        "correct": "Both duration and frequency",
        "options": [
          "Both duration and frequency",
          "Duration only",
          "Frequency only",
          "Neither duration nor frequency"
        ],
        "note": "",
        "family": "3.2.4",
        "id": "02fb5729cb9e04e5"
      },
      {
        "rule": "4.6.1",
        "prompt": "A competitor adjusts a target stand without authorization during inspection. What penalty may the Range Officer impose for each occurrence?",
        "correct": "One procedural penalty",
        "options": [
          "One procedural penalty",
          "Two procedural penalties",
          "One miss penalty",
          "Two miss penalties"
        ],
        "note": "",
        "family": "4.6.1",
        "id": "5ad2ec3127f1aa75"
      },
      {
        "rule": "6.2.6",
        "prompt": "A competitor is disqualified in a later Division after completing a separate Division at the same match. What happens to the complete earlier score?",
        "correct": "It stays in the results for the earlier Division",
        "options": [
          "It stays in the results for the earlier Division",
          "It stays in the results for the later Division",
          "It is removed from the earlier Division results",
          "It is kept only if the disqualification is overturned"
        ],
        "note": "",
        "family": "6.2.6",
        "id": "2bb09b780d6cd1cf"
      },
      {
        "rule": "6.6.1",
        "prompt": "A competitor misses the scheduled time for a stage. Whose prior approval is required to attempt the stage later?",
        "correct": "Match Director",
        "options": [
          "Match Director",
          "Range Master",
          "Chief Range Officer",
          "Range Officer"
        ],
        "note": "",
        "family": "6.6.1",
        "id": "1313eda1e157a923"
      },
      {
        "rule": "7.1.1",
        "prompt": "Who declares a competitor’s time, scores and penalties on the stage and verifies they are recorded correctly?",
        "correct": "Range Officer",
        "options": [
          "Range Officer",
          "Chief Range Officer",
          "Stats Officer",
          "Range Master"
        ],
        "note": "",
        "family": "7.1.1",
        "id": "0b424efb218f7879"
      },
      {
        "rule": "7.1.2",
        "prompt": "Which official has primary authority over the courses of fire specifically assigned to them, under the Range Master?",
        "correct": "Chief Range Officer",
        "options": [
          "Chief Range Officer",
          "Range Officer",
          "Stats Officer",
          "Match Director"
        ],
        "note": "",
        "family": "7.1.2",
        "id": "c118375a6b2b5323"
      },
      {
        "rule": "7.1.3",
        "prompt": "Who supervises the team that processes score sheets and produces provisional and final results?",
        "correct": "Stats Officer",
        "options": [
          "Stats Officer",
          "Chief Range Officer",
          "Range Master",
          "Quartermaster"
        ],
        "note": "",
        "family": "7.1.3",
        "id": "704c770dd49cbacc"
      },
      {
        "rule": "7.1.4",
        "prompt": "Who is responsible for distributing and maintaining targets, timers and other range equipment?",
        "correct": "Quartermaster",
        "options": [
          "Quartermaster",
          "Chief Range Officer",
          "Range Master",
          "Stats Officer"
        ],
        "note": "",
        "family": "7.1.4",
        "id": "b01b090191e21d17"
      },
      {
        "rule": "7.1.5",
        "prompt": "Which official has overall authority for range safety and rule application across the entire match range?",
        "correct": "Range Master",
        "options": [
          "Range Master",
          "Chief Range Officer",
          "Range Officer",
          "Match Director"
        ],
        "note": "",
        "family": "7.1.5",
        "id": "bfc335ecb25270a0"
      },
      {
        "rule": "8.3.5",
        "prompt": "The Range Officer calls “Stop” during an attempt. Which response is required?",
        "correct": "Stop firing and moving immediately and await instructions",
        "options": [
          "Stop firing and moving immediately and await instructions",
          "Stop firing immediately but finish moving to the next position",
          "Stop moving immediately but finish engaging the current target",
          "Stop firing and moving once the current target has been engaged"
        ],
        "note": "",
        "family": "8.3.5",
        "id": "26049216f3858162"
      },
      {
        "rule": "8.3.8",
        "prompt": "Which declaration authorizes personnel to move forward from the final shooting location for scoring and reset?",
        "correct": "Range Is Clear",
        "options": [
          "Range Is Clear",
          "Are You Ready?",
          "If You Are Finished, Unload And Show Clear",
          "Stop"
        ],
        "note": "",
        "family": "8.3.8",
        "id": "f33938909cd6cc60"
      },
      {
        "rule": "9.1.1",
        "prompt": "During scoring, what minimum distance must a competitor keep from a target unless the Range Officer gives permission to approach?",
        "correct": "1 m",
        "options": [
          "1 m",
          "0.5 m",
          "1.5 m",
          "2 m"
        ],
        "note": "",
        "family": "9.1.1",
        "id": "2d30e249199e32da"
      },
      {
        "rule": "9.1.1",
        "prompt": "A competitor approaches a target closer than 1 m without authorization during scoring. What is the sanction for a first offense?",
        "correct": "A warning",
        "options": [
          "A warning",
          "One automatic procedural penalty",
          "One automatic miss penalty",
          "A warning plus one procedural penalty"
        ],
        "note": "",
        "family": "9.1.1",
        "id": "a0c109e9369b02a9"
      },
      {
        "rule": "9.1.4",
        "prompt": "An unrestored target has extra scoring hits. The Range Officer cannot tell which hits belong to the competitor being scored. What is required?",
        "correct": "A reshoot of the course of fire",
        "options": [
          "A reshoot of the course of fire",
          "A reshoot of the target only",
          "A score using only the lowest possible hits",
          "A score using only the highest possible hits"
        ],
        "note": "",
        "family": "9.1.4",
        "id": "d865d4a181049ade"
      },
      {
        "rule": "9.1.5.1",
        "prompt": "A shot passes wholly through the scoring area of a paper target and then strikes the scoring area of a second paper scoring target. How is the second hit treated?",
        "correct": "It does not count for score",
        "options": [
          "It does not count for score",
          "It scores at its full zone value",
          "It scores at the lowest zone value",
          "It counts as a miss penalty on the second target"
        ],
        "note": "",
        "family": "9.1.5.1",
        "id": "709366270d24cc45"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Under Comstock, which calculation produces a hit factor?",
        "correct": "Target points minus penalties, then divide by time",
        "options": [
          "Target points minus penalties, then divide by time",
          "Target points divided by time, then subtract penalties",
          "Target points minus penalties, then multiply by time",
          "Time divided by target points minus penalties"
        ],
        "note": "",
        "family": "9.2.1.1",
        "id": "2fb26c1e715568ff"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Which competitor receives the maximum stage points available under Comstock?",
        "correct": "The competitor with the highest hit factor",
        "options": [
          "The competitor with the highest hit factor",
          "The competitor with the highest raw target points",
          "The competitor with the fastest recorded time",
          "The competitor with the lowest penalty total"
        ],
        "note": "",
        "family": "9.2.1.1",
        "id": "b034328d19a8c134"
      },
      {
        "rule": "9.2.3",
        "prompt": "Which quantity determines the final ranking within a Division?",
        "correct": "The sum of individual stage points",
        "options": [
          "The sum of individual stage points",
          "The sum of individual stage hit factors",
          "The sum of raw target points before factoring",
          "The average of individual stage placing positions"
        ],
        "note": "",
        "family": "9.2.3",
        "id": "de2a1ae18dce11e2"
      },
      {
        "rule": "9.3.1",
        "prompt": "The Match Director decides a tie must be broken. What does the tiebreaker change?",
        "correct": "Only the final placing of the tied competitors",
        "options": [
          "Only the final placing of the tied competitors",
          "The placing and original match points of the tied competitors",
          "The placing of every competitor in the Division",
          "The original match points without changing the placing"
        ],
        "note": "",
        "family": "9.3.1",
        "id": "0fdc055c5d39575a"
      },
      {
        "rule": "9.6.1",
        "prompt": "After “Range Is Clear” on a stage with ordinary paper targets, who may accompany the scoring official to verify the score?",
        "correct": "The competitor or their delegate",
        "options": [
          "The competitor or their delegate",
          "Only the competitor personally",
          "Only the competitor’s delegate",
          "Only the squad leader"
        ],
        "note": "",
        "family": "9.6.1",
        "id": "aa45c8d054c1ff8b"
      },
      {
        "rule": "9.6.2",
        "prompt": "The Range Officer intends to start scoring paper targets before the competitor finishes the stage. When must competitors be advised?",
        "correct": "During the squad briefing",
        "options": [
          "During the squad briefing",
          "After the Start Signal",
          "After the competitor’s last shot",
          "When provisional results are posted"
        ],
        "note": "",
        "family": "9.6.2",
        "id": "f7c24a4496425719"
      },
      {
        "rule": "9.6.3",
        "prompt": "Neither the competitor nor their delegate verifies a target during scoring. What happens to the right to appeal the scoring of that target?",
        "correct": "It is lost",
        "options": [
          "It is lost",
          "It stays open until the target is reset",
          "It stays open until the score sheet is signed",
          "It stays open until provisional results are posted"
        ],
        "note": "",
        "family": "9.6.3",
        "id": "5ff0c66acb294d60"
      },
      {
        "rule": "9.6.4",
        "prompt": "Who must first receive a challenge to the score on a target before it is patched?",
        "correct": "Range Officer",
        "options": [
          "Range Officer",
          "Chief Range Officer",
          "Range Master",
          "Stats Officer"
        ],
        "note": "",
        "family": "9.6.4",
        "id": "ec57f181f231d00b"
      },
      {
        "rule": "9.7.4",
        "prompt": "A score sheet is signed by both the competitor and Range Officer. With no mutual consent and no arbitration decision, which change is explicitly permitted?",
        "correct": "Correcting an arithmetic error",
        "options": [
          "Correcting an arithmetic error",
          "Re-evaluating a disputed scoring-zone hit",
          "Changing the recorded time based on a squad member’s estimate",
          "Adding a miss based on a later recollection"
        ],
        "note": "",
        "family": "9.7.4",
        "id": "e73cef78ffc6e010"
      },
      {
        "rule": "9.7.5",
        "prompt": "A score sheet has excess entries. To whom must it promptly be referred?",
        "correct": "Range Master",
        "options": [
          "Range Master",
          "Chief Range Officer",
          "Stats Officer",
          "Match Director"
        ],
        "note": "",
        "family": "9.7.5",
        "id": "e89fc7b2c365ea93"
      },
      {
        "rule": "9.7.6.1",
        "prompt": "A stage time is missing from the score sheet and a reshoot is impossible. What is the stage score?",
        "correct": "Zero",
        "options": [
          "Zero",
          "The raw target points minus penalties",
          "The division’s average stage score",
          "The competitor’s average score from the other stages"
        ],
        "note": "",
        "family": "9.7.6.1",
        "id": "164d6cc592c33b90"
      },
      {
        "rule": "9.7.7",
        "prompt": "The original score sheet is lost. The competitor has a legible duplicate acceptable to the Range Master. What is used?",
        "correct": "The competitor’s duplicate",
        "options": [
          "The competitor’s duplicate",
          "A reshoot regardless of the duplicate",
          "A zero score regardless of the duplicate",
          "The squad’s median score"
        ],
        "note": "",
        "family": "9.7.7",
        "id": "9f7a3ce2c9f20e67"
      },
      {
        "rule": "9.8.2",
        "prompt": "At Level IV, where must provisional stage results be posted after all competitors finish?",
        "correct": "At the range and the official match hotel",
        "options": [
          "At the range and the official match hotel",
          "At the range only",
          "At the official match hotel only",
          "At the range and the nearest hotel"
        ],
        "note": "",
        "family": "9.8.2",
        "id": "647b5a758a1113f2"
      },
      {
        "rule": "9.8.3",
        "prompt": "A competitor detects an error in the published provisional stage results. With whom must the appeal be filed?",
        "correct": "Stats Officer",
        "options": [
          "Stats Officer",
          "Chief Range Officer",
          "Range Master",
          "Match Director"
        ],
        "note": "",
        "family": "9.8.3",
        "id": "57791f0ed3b424b0"
      },
      {
        "rule": "9.9.1",
        "prompt": "A moving paper target presents part of its A zone at rest after activation. How is it classified?",
        "correct": "Non-disappearing",
        "options": [
          "Non-disappearing",
          "Disappearing unless the full A zone remains visible",
          "Disappearing unless part of the A zone was visible before activation too",
          "Disappearing because the target moves"
        ],
        "note": "",
        "family": "9.9.1",
        "id": "62043a204521db1d"
      },
      {
        "rule": "9.9.2",
        "prompt": "A genuinely disappearing target is activated before the last shot, but never engaged. Which of the following applies to that target?",
        "correct": "Neither a miss nor a failure-to-engage penalty",
        "options": [
          "Neither a miss nor a failure-to-engage penalty",
          "A miss penalty only",
          "A failure-to-engage penalty only",
          "Both a miss and a failure-to-engage penalty"
        ],
        "note": "",
        "family": "9.9.2",
        "id": "a24aa249ff5c8fb5"
      },
      {
        "rule": "9.9.3",
        "prompt": "A stationary target is partly concealed by a moving vision barrier. Part of its A zone remains exposed after activation. How is the target classified?",
        "correct": "Non-disappearing",
        "options": [
          "Non-disappearing",
          "Disappearing unless its full A zone is exposed",
          "Disappearing because the barrier moves",
          "Disappearing unless the barrier itself is a scoring target"
        ],
        "note": "",
        "family": "9.9.3",
        "id": "32b991228b675bae"
      },
      {
        "rule": "10.1.1",
        "prompt": "What must be recorded for procedural penalties on the score sheet?",
        "correct": "Both the number and the reason",
        "options": [
          "Both the number and the reason",
          "The number only",
          "The reason only",
          "The number and the competitor’s agreement"
        ],
        "note": "",
        "family": "10.1.1",
        "id": "98d216ec3d12862b"
      },
      {
        "rule": "10.1.4",
        "prompt": "A competitor fires while faulting a line, then fires at the same target from inside the line. What happens to the original applicable fault penalty?",
        "correct": "It still applies",
        "options": [
          "It still applies",
          "It is removed if the later shot hits",
          "It is removed if both shots hit",
          "It is changed to a miss if the later shot hits"
        ],
        "note": "",
        "family": "10.1.4",
        "id": "11b671e372d1b1db"
      },
      {
        "rule": "10.2.1",
        "prompt": "A competitor touches the ground beyond a Fault Line while shooting without gaining a significant advantage. How is the penalty normally counted?",
        "correct": "One per occurrence",
        "options": [
          "One per occurrence",
          "One per shot regardless of advantage",
          "One per target engaged",
          "One per scoring hit"
        ],
        "note": "",
        "family": "10.2.1",
        "id": "2687007cbe9cade2"
      },
      {
        "rule": "10.2.2",
        "prompt": "A competitor ignores a written stage procedure and gains a significant advantage. What penalty basis may apply in place of a single penalty for the occurrence?",
        "correct": "One per shot fired during the breach, subject to the applicable cap",
        "options": [
          "One per shot fired during the breach, subject to the applicable cap",
          "One per scoring hit during the breach, subject to the applicable cap",
          "One per target engaged during the breach, subject to the applicable cap",
          "One per shot fired after the breach ended, subject to the applicable cap"
        ],
        "note": "",
        "family": "10.2.2",
        "id": "acf60b7a43e61d24"
      },
      {
        "rule": "10.2.6",
        "prompt": "The Range Officer stops a competitor in time for a first instance of creeping after “Standby” and before the signal. What follows?",
        "correct": "A warning and a restart",
        "options": [
          "A warning and a restart",
          "A procedural penalty and a restart",
          "A warning without a restart",
          "A procedural penalty without a restart"
        ],
        "note": "",
        "family": "10.2.6",
        "id": "d0aa312c30a9e68f"
      },
      {
        "rule": "10.2.7",
        "prompt": "A competitor fails to engage a non-disappearing scoring target. What normally applies?",
        "correct": "One procedural per target plus applicable misses",
        "options": [
          "One procedural per target plus applicable misses",
          "One procedural per target instead of applicable misses",
          "One procedural per missed hit plus applicable misses",
          "Applicable misses only"
        ],
        "note": "",
        "family": "10.2.7",
        "id": "3b6f1c3d22f37ba8"
      },
      {
        "rule": "10.3.2",
        "prompt": "After issuing a disqualification, who must be notified as soon as possible?",
        "correct": "Range Master",
        "options": [
          "Range Master",
          "Chief Range Officer",
          "Stats Officer",
          "Match Director"
        ],
        "note": "",
        "family": "10.3.2",
        "id": "1e60f82bfdebcdb7"
      },
      {
        "rule": "11.1.3",
        "prompt": "A competitor disputes an initial Range Officer ruling. Which is the normal next level before the Range Master?",
        "correct": "Chief Range Officer",
        "options": [
          "Chief Range Officer",
          "Stats Officer",
          "Match Director",
          "Quartermaster"
        ],
        "note": "",
        "family": "11.1.3",
        "id": "e269dacafee493b9"
      },
      {
        "rule": "11.3.2",
        "prompt": "When must the Arbitration Committee reach its decision?",
        "correct": "Within 24 hours of the request or before final results are declared, whichever comes first",
        "options": [
          "Within 24 hours of the request or before final results are declared, whichever comes first",
          "Within 24 hours of the request or before final results are declared, whichever comes last",
          "Within 12 hours of the request or before final results are declared, whichever comes first",
          "Within 24 hours of the disputed call or before final results are declared, whichever comes first"
        ],
        "note": "",
        "family": "11.3.2",
        "id": "ab7a04fd99f427cc"
      },
      {
        "rule": "11.4.1",
        "prompt": "At a Level III match, which amount determines the arbitration fee in local currency?",
        "correct": "The lower of US$100 and the maximum individual entry fee",
        "options": [
          "The lower of US$100 and the maximum individual entry fee",
          "The higher of US$100 and the maximum individual entry fee",
          "The lower of US$100 and the minimum individual entry fee",
          "The maximum individual entry fee regardless of US$100"
        ],
        "note": "",
        "family": "11.4.1",
        "id": "d660fd589e3be129"
      },
      {
        "rule": "11.6.2",
        "prompt": "Who implements and posts the Arbitration Committee’s decision?",
        "correct": "Range Master",
        "options": [
          "Range Master",
          "Chief Range Officer",
          "Stats Officer",
          "Match Director"
        ],
        "note": "",
        "family": "11.6.2",
        "id": "b42ae1c861a560b7"
      },
      {
        "rule": "11.6.4",
        "prompt": "For what can a recorded Arbitration Committee decision serve as precedent?",
        "correct": "A similar subsequent incident at the same match",
        "options": [
          "A similar subsequent incident at the same match",
          "A similar earlier incident at the same match",
          "Any subsequent incident at the same match",
          "A similar incident only at the next match"
        ],
        "note": "",
        "family": "11.6.4",
        "id": "3487c77fa189a244"
      },
      {
        "rule": "11.7.1",
        "prompt": "May someone other than the competitor involved submit an appeal on a third-party basis?",
        "correct": "Yes, under the same Chapter 11 provisions",
        "options": [
          "Yes, under the same Chapter 11 provisions",
          "Yes, with a separate deadline set by the squad",
          "Yes, but only at Level IV and above",
          "No, only the competitor involved may appeal"
        ],
        "note": "",
        "family": "11.7.1",
        "id": "efd6cd40b8400be5"
      },
      {
        "rule": "1.2.1.1",
        "prompt": "A proposed Short Course requires 13 rounds to complete. To what maximum must the required count be reduced?",
        "correct": "12",
        "options": [
          "12",
          "10",
          "11",
          "13"
        ],
        "note": "",
        "family": "1.2.1.1",
        "id": "c65d36bafee45bc1"
      },
      {
        "rule": "1.2.1.2",
        "prompt": "A proposed Medium Course requires 26 rounds to complete. What maximum required count applies?",
        "correct": "24",
        "options": [
          "24",
          "22",
          "23",
          "25"
        ],
        "note": "",
        "family": "1.2.1.2",
        "id": "790ef3fb772e32dd"
      },
      {
        "rule": "1.2.1.3",
        "prompt": "What is the maximum number of scoring hits a Long Course may require from a single location or view?",
        "correct": "10",
        "options": [
          "10",
          "9",
          "11",
          "12"
        ],
        "note": "",
        "family": "1.2.1.3",
        "id": "fa5b57248c91091d"
      },
      {
        "rule": "5.1.11 · February 2026 interpretation",
        "prompt": "How does the February 2026 interpretation treat a firearm fitted with a forced reset trigger?",
        "correct": "It is prohibited",
        "options": [
          "It is prohibited",
          "It is permitted in Open only",
          "It is permitted in any division with a trigger weight check",
          "It is permitted only in Level I and II matches"
        ],
        "note": "",
        "family": "5.1.11 · February 2026 interpretation",
        "id": "3b3a8ef5e6f9580b"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Under Comstock, a competitor earns 35 target points, receives 10 penalty points and finishes in 5.00 seconds. What is the hit factor, rounded to four decimals?",
        "correct": "5.0000",
        "options": [
          "5.0000",
          "7.0000",
          "6.0000",
          "9.0000"
        ],
        "note": "Subtract penalties from target points before dividing by time.",
        "family": "comstock-hit-factor",
        "id": "21196cb03e879fbf"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "A 40-point stage is won with a hit factor of 8. A competitor records a hit factor of 4.0. How many stage points does the competitor earn?",
        "correct": "20.00",
        "options": [
          "20.00",
          "18.00",
          "19.00",
          "21.00"
        ],
        "note": "Multiply the available stage points by the competitor’s hit factor divided by the winner’s hit factor.",
        "family": "comstock-stage-points",
        "id": "3b223b933ed2c978"
      },
      {
        "rule": "9.2.3",
        "prompt": "A competitor earns 31.2750, 24.6425 and 19.3850 stage points in the three stages of a match. What is the match total?",
        "correct": "75.3025",
        "options": [
          "75.3025",
          "75.4025",
          "75.2025",
          "76.3025"
        ],
        "note": "",
        "family": "match-total",
        "id": "84eed92ac69be18f"
      },
      {
        "rule": "10.2.4",
        "prompt": "A competitor fires 1 shots before a mandatory reload point, 1 shots after it without reloading, and 2 shots after finally reloading. How many procedural penalties apply to the reload violation?",
        "correct": "1",
        "options": [
          "1",
          "0",
          "2",
          "3"
        ],
        "note": "Count only shots after the required reload point and before the reload.",
        "family": "10.2.4",
        "id": "b13c6a5f1fe012ab"
      },
      {
        "rule": "10.2.5",
        "prompt": "In a Cooper Tunnel, direct contact with the overhead material drops 1 pieces. Bumping an upright drops another 1. How many procedural penalties apply?",
        "correct": "1",
        "options": [
          "1",
          "0",
          "2",
          "3"
        ],
        "note": "Pieces that fall from striking an upright are exempt.",
        "family": "10.2.5",
        "id": "2bc7b9ec0789807c"
      },
      {
        "rule": "10.1.2",
        "prompt": "The Range Officer assesses 3 procedural penalties. What is the total point deduction for these penalties?",
        "correct": "30 points",
        "options": [
          "30 points",
          "10 points",
          "20 points",
          "40 points"
        ],
        "note": "",
        "family": "10.1.2",
        "id": "b3c678f4a8413c91"
      },
      {
        "rule": "10.2.1",
        "prompt": "A competitor fires 2 shots on each of 2 separate Fault Line breaches, re-entering fully between breaches and gaining no significant advantage. How many procedural penalties apply?",
        "correct": "2",
        "options": [
          "2",
          "1",
          "3",
          "4"
        ],
        "note": "With no significant advantage, count the separate occurrences.",
        "family": "10.2.1",
        "id": "65d0e1630759337f"
      },
      {
        "rule": "11.3.1",
        "prompt": "Match Officials record a disputed call at 08:00. The competitor talks to the Chief Range Officer 15 minutes later. What is the deadline to submit a written arbitration appeal and fee to the Range Master?",
        "correct": "09:00",
        "options": [
          "09:00",
          "08:45",
          "09:15",
          "09:30"
        ],
        "note": "",
        "family": "11.3.1",
        "id": "e73f27d96024f83f"
      },
      {
        "rule": "9.8.3",
        "prompt": "The provisional results show a timestamp of 12:00, but were actually posted at 12:11. What is the deadline for a competitor to file a results appeal with the Stats Officer?",
        "correct": "13:11",
        "options": [
          "13:11",
          "12:56",
          "13:26",
          "13:41"
        ],
        "note": "",
        "family": "9.8.3",
        "id": "dc0d2ecaa091ddbb"
      },
      {
        "rule": "11.4.1",
        "prompt": "At a Level III match the maximum individual entry fee is equivalent to US$58. What is the arbitration fee equivalent in local currency?",
        "correct": "US$58",
        "options": [
          "US$58",
          "US$100",
          "US$53",
          "US$63"
        ],
        "note": "Use the lower of US$100 and the maximum individual entry fee.",
        "family": "11.4.1",
        "id": "34d89f1347aee01f"
      },
      {
        "rule": "9.4.2",
        "prompt": "Three paper no-shoots show 1, 1 and 0 hits in their scoring areas, respectively. What is the combined point deduction?",
        "correct": "20 points",
        "options": [
          "20 points",
          "10 points",
          "25 points",
          "30 points"
        ],
        "note": "Count 10 points per hit, capped at two hits on each paper no-shoot.",
        "family": "9.4.2",
        "id": "2ed02131abe1ee01"
      },
      {
        "rule": "10.2.7",
        "prompt": "A competitor leaves 3 non-disappearing scoring targets completely unengaged. They engage the other 2 targets. Before adding any misses, how many failure-to-engage procedurals apply?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "",
        "family": "10.2.7",
        "id": "74b0110053b22816"
      },
      {
        "rule": "10.2.3",
        "prompt": "While faulting a line, a competitor fires 7 shots and gains a significant advantage. From that position a maximum of 2 scoring hits can be attained. What is the maximum number of procedurals for that fault?",
        "correct": "2",
        "options": [
          "2",
          "1",
          "3",
          "4"
        ],
        "note": "Multiple penalties for the fault are capped by the scoring hits attainable.",
        "family": "10.2.3",
        "id": "a67f0a3b80d3499d"
      },
      {
        "rule": "11.3.2",
        "prompt": "The Arbitration Committee receives a request at 10:00 on Saturday. Final results are scheduled to be declared at 09:40 on Sunday. What is the latest time the committee may rule under that schedule?",
        "correct": "Before 09:40 on Sunday",
        "options": [
          "Before 09:40 on Sunday",
          "By 10:00 on Sunday",
          "By 10:20 on Sunday",
          "Before 09:40 on Monday"
        ],
        "note": "The earlier limit is the declaration of final results.",
        "family": "11.3.2",
        "id": "bc60703e734bf1ae"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Under Comstock, a competitor earns 40 target points, receives 20 penalty points and finishes in 6.00 seconds. What is the hit factor, rounded to four decimals?",
        "correct": "3.3333",
        "options": [
          "3.3333",
          "6.6667",
          "5.0000",
          "10.0000"
        ],
        "note": "Subtract penalties from target points before dividing by time.",
        "family": "comstock-hit-factor",
        "id": "221b267a71db93cf"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "A 50-point stage is won with a hit factor of 9. A competitor records a hit factor of 5.4. How many stage points does the competitor earn?",
        "correct": "30.00",
        "options": [
          "30.00",
          "28.00",
          "29.00",
          "31.00"
        ],
        "note": "Multiply the available stage points by the competitor’s hit factor divided by the winner’s hit factor.",
        "family": "comstock-stage-points",
        "id": "9ba6132933144df4"
      },
      {
        "rule": "9.2.3",
        "prompt": "A competitor earns 33.2750, 25.6425 and 22.3850 stage points in the three stages of a match. What is the match total?",
        "correct": "81.3025",
        "options": [
          "81.3025",
          "81.4025",
          "81.2025",
          "82.3025"
        ],
        "note": "",
        "family": "match-total",
        "id": "2a2ddc7a971836c3"
      },
      {
        "rule": "10.2.4",
        "prompt": "A competitor fires 2 shots before a mandatory reload point, 1 shots after it without reloading, and 3 shots after finally reloading. How many procedural penalties apply to the reload violation?",
        "correct": "1",
        "options": [
          "1",
          "0",
          "2",
          "3"
        ],
        "note": "Count only shots after the required reload point and before the reload.",
        "family": "10.2.4",
        "id": "762cf162802b119a"
      },
      {
        "rule": "10.2.5",
        "prompt": "In a Cooper Tunnel, direct contact with the overhead material drops 2 pieces. Bumping an upright drops another 1. How many procedural penalties apply?",
        "correct": "2",
        "options": [
          "2",
          "1",
          "3",
          "4"
        ],
        "note": "Pieces that fall from striking an upright are exempt.",
        "family": "10.2.5",
        "id": "530bd84ef8b47216"
      },
      {
        "rule": "10.1.2",
        "prompt": "The Range Officer assesses 4 procedural penalties. What is the total point deduction for these penalties?",
        "correct": "40 points",
        "options": [
          "40 points",
          "20 points",
          "30 points",
          "50 points"
        ],
        "note": "",
        "family": "10.1.2",
        "id": "a7aaa4caf4f065cd"
      },
      {
        "rule": "10.2.1",
        "prompt": "A competitor fires 2 shots on each of 3 separate Fault Line breaches, re-entering fully between breaches and gaining no significant advantage. How many procedural penalties apply?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "With no significant advantage, count the separate occurrences.",
        "family": "10.2.1",
        "id": "b6d742daab217181"
      },
      {
        "rule": "11.3.1",
        "prompt": "Match Officials record a disputed call at 08:23. The competitor talks to the Chief Range Officer 15 minutes later. What is the deadline to submit a written arbitration appeal and fee to the Range Master?",
        "correct": "09:23",
        "options": [
          "09:23",
          "09:08",
          "09:38",
          "09:53"
        ],
        "note": "",
        "family": "11.3.1",
        "id": "fd2b9c3ae8f0e93c"
      },
      {
        "rule": "9.8.3",
        "prompt": "The provisional results show a timestamp of 12:17, but were actually posted at 12:29. What is the deadline for a competitor to file a results appeal with the Stats Officer?",
        "correct": "13:29",
        "options": [
          "13:29",
          "13:14",
          "13:44",
          "13:59"
        ],
        "note": "",
        "family": "9.8.3",
        "id": "75719e2f068672a0"
      },
      {
        "rule": "11.4.1",
        "prompt": "At a Level III match the maximum individual entry fee is equivalent to US$115. What is the arbitration fee equivalent in local currency?",
        "correct": "US$100",
        "options": [
          "US$100",
          "US$115",
          "US$95",
          "US$105"
        ],
        "note": "Use the lower of US$100 and the maximum individual entry fee.",
        "family": "11.4.1",
        "id": "7047ed8525176aec"
      },
      {
        "rule": "9.4.2",
        "prompt": "Three paper no-shoots show 2, 1 and 0 hits in their scoring areas, respectively. What is the combined point deduction?",
        "correct": "30 points",
        "options": [
          "30 points",
          "20 points",
          "35 points",
          "40 points"
        ],
        "note": "Count 10 points per hit, capped at two hits on each paper no-shoot.",
        "family": "9.4.2",
        "id": "c4db7b7a451a5a7d"
      },
      {
        "rule": "10.2.7",
        "prompt": "A competitor leaves 4 non-disappearing scoring targets completely unengaged. They engage the other 3 targets. Before adding any misses, how many failure-to-engage procedurals apply?",
        "correct": "4",
        "options": [
          "4",
          "3",
          "5",
          "6"
        ],
        "note": "",
        "family": "10.2.7",
        "id": "5f3e9af5d086e70f"
      },
      {
        "rule": "10.2.3",
        "prompt": "While faulting a line, a competitor fires 8 shots and gains a significant advantage. From that position a maximum of 3 scoring hits can be attained. What is the maximum number of procedurals for that fault?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "Multiple penalties for the fault are capped by the scoring hits attainable.",
        "family": "10.2.3",
        "id": "ebc3eaec4c4e60c1"
      },
      {
        "rule": "11.3.2",
        "prompt": "The Arbitration Committee receives a request at 10:19 on Saturday. The Match Director will declare the results final at 10:39 on Sunday. What deadline applies to the committee’s decision?",
        "correct": "By 10:19 on Sunday",
        "options": [
          "By 10:19 on Sunday",
          "Before 10:39 on Sunday",
          "By 09:59 on Sunday",
          "By 10:19 on Monday"
        ],
        "note": "The 24-hour deadline arrives before the declaration of final results.",
        "family": "11.3.2",
        "id": "e4ad89d611716d41"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Under Comstock, a competitor earns 45 target points, receives 30 penalty points and finishes in 7.00 seconds. What is the hit factor, rounded to four decimals?",
        "correct": "2.1429",
        "options": [
          "2.1429",
          "6.4286",
          "4.2857",
          "10.7143"
        ],
        "note": "Subtract penalties from target points before dividing by time.",
        "family": "comstock-hit-factor",
        "id": "811fb111204f1db3"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "A 60-point stage is won with a hit factor of 10. A competitor records a hit factor of 7.0. How many stage points does the competitor earn?",
        "correct": "42.00",
        "options": [
          "42.00",
          "40.00",
          "41.00",
          "43.00"
        ],
        "note": "Multiply the available stage points by the competitor’s hit factor divided by the winner’s hit factor.",
        "family": "comstock-stage-points",
        "id": "52ec8e4e492a485c"
      },
      {
        "rule": "9.2.3",
        "prompt": "A competitor earns 35.2750, 26.6425 and 25.3850 stage points in the three stages of a match. What is the match total?",
        "correct": "87.3025",
        "options": [
          "87.3025",
          "87.4025",
          "87.2025",
          "88.3025"
        ],
        "note": "",
        "family": "match-total",
        "id": "9de1b28afcc923d6"
      },
      {
        "rule": "10.2.4",
        "prompt": "A competitor fires 3 shots before a mandatory reload point, 1 shots after it without reloading, and 4 shots after finally reloading. How many procedural penalties apply to the reload violation?",
        "correct": "1",
        "options": [
          "1",
          "0",
          "2",
          "3"
        ],
        "note": "Count only shots after the required reload point and before the reload.",
        "family": "10.2.4",
        "id": "881a8b7504b60cad"
      },
      {
        "rule": "10.2.5",
        "prompt": "In a Cooper Tunnel, direct contact with the overhead material drops 3 pieces. Bumping an upright drops another 1. How many procedural penalties apply?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "Pieces that fall from striking an upright are exempt.",
        "family": "10.2.5",
        "id": "5137b4943cba8ec9"
      },
      {
        "rule": "10.1.2",
        "prompt": "The Range Officer assesses 5 procedural penalties. What is the total point deduction for these penalties?",
        "correct": "50 points",
        "options": [
          "50 points",
          "30 points",
          "40 points",
          "60 points"
        ],
        "note": "",
        "family": "10.1.2",
        "id": "8d6f73489143fdbe"
      },
      {
        "rule": "10.2.1",
        "prompt": "A competitor fires 2 shots on each of 4 separate Fault Line breaches, re-entering fully between breaches and gaining no significant advantage. How many procedural penalties apply?",
        "correct": "4",
        "options": [
          "4",
          "3",
          "5",
          "6"
        ],
        "note": "With no significant advantage, count the separate occurrences.",
        "family": "10.2.1",
        "id": "bfd45046f19468df"
      },
      {
        "rule": "11.3.1",
        "prompt": "Match Officials record a disputed call at 08:46. The competitor talks to the Chief Range Officer 15 minutes later. What is the deadline to submit a written arbitration appeal and fee to the Range Master?",
        "correct": "09:46",
        "options": [
          "09:46",
          "09:31",
          "10:01",
          "10:16"
        ],
        "note": "",
        "family": "11.3.1",
        "id": "1646ce84911500d6"
      },
      {
        "rule": "9.8.3",
        "prompt": "The provisional results show a timestamp of 12:34, but were actually posted at 12:47. What is the deadline for a competitor to file a results appeal with the Stats Officer?",
        "correct": "13:47",
        "options": [
          "13:47",
          "13:32",
          "14:02",
          "14:17"
        ],
        "note": "",
        "family": "9.8.3",
        "id": "f183f4405bae9693"
      },
      {
        "rule": "11.4.1",
        "prompt": "At a Level III match the maximum individual entry fee is equivalent to US$62. What is the arbitration fee equivalent in local currency?",
        "correct": "US$62",
        "options": [
          "US$62",
          "US$100",
          "US$57",
          "US$67"
        ],
        "note": "Use the lower of US$100 and the maximum individual entry fee.",
        "family": "11.4.1",
        "id": "2e62692cf1be487d"
      },
      {
        "rule": "9.4.2",
        "prompt": "Three paper no-shoots show 3, 1 and 0 hits in their scoring areas, respectively. What is the combined point deduction?",
        "correct": "30 points",
        "options": [
          "30 points",
          "20 points",
          "35 points",
          "40 points"
        ],
        "note": "Count 10 points per hit, capped at two hits on each paper no-shoot.",
        "family": "9.4.2",
        "id": "9d9d5b6426560ab7"
      },
      {
        "rule": "10.2.7",
        "prompt": "A competitor leaves 5 non-disappearing scoring targets completely unengaged. They engage the other 4 targets. Before adding any misses, how many failure-to-engage procedurals apply?",
        "correct": "5",
        "options": [
          "5",
          "4",
          "6",
          "7"
        ],
        "note": "",
        "family": "10.2.7",
        "id": "0d8a48f3191f4847"
      },
      {
        "rule": "10.2.3",
        "prompt": "While faulting a line, a competitor fires 9 shots and gains a significant advantage. From that position a maximum of 4 scoring hits can be attained. What is the maximum number of procedurals for that fault?",
        "correct": "4",
        "options": [
          "4",
          "3",
          "5",
          "6"
        ],
        "note": "Multiple penalties for the fault are capped by the scoring hits attainable.",
        "family": "10.2.3",
        "id": "0ef941d62c1d78e5"
      },
      {
        "rule": "11.3.2",
        "prompt": "The Arbitration Committee receives a request at 10:38 on Saturday. Final results are scheduled to be declared at 10:18 on Sunday. What is the latest time the committee may rule under that schedule?",
        "correct": "Before 10:18 on Sunday",
        "options": [
          "Before 10:18 on Sunday",
          "By 10:38 on Sunday",
          "By 10:58 on Sunday",
          "Before 10:18 on Monday"
        ],
        "note": "The earlier limit is the declaration of final results.",
        "family": "11.3.2",
        "id": "de38b1edabf021d6"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Under Comstock, a competitor earns 50 target points, receives 10 penalty points and finishes in 8.00 seconds. What is the hit factor, rounded to four decimals?",
        "correct": "5.0000",
        "options": [
          "5.0000",
          "6.2500",
          "5.6250",
          "7.5000"
        ],
        "note": "Subtract penalties from target points before dividing by time.",
        "family": "comstock-hit-factor",
        "id": "a9248c139a4373b7"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "A 70-point stage is won with a hit factor of 8. A competitor records a hit factor of 6.00. How many stage points does the competitor earn?",
        "correct": "52.50",
        "options": [
          "52.50",
          "50.50",
          "51.50",
          "53.50"
        ],
        "note": "Multiply the available stage points by the competitor’s hit factor divided by the winner’s hit factor.",
        "family": "comstock-stage-points",
        "id": "47f4cad0ab27e8ba"
      },
      {
        "rule": "9.2.3",
        "prompt": "A competitor earns 37.2750, 27.6425 and 28.3850 stage points in the three stages of a match. What is the match total?",
        "correct": "93.3025",
        "options": [
          "93.3025",
          "93.4025",
          "93.2025",
          "94.3025"
        ],
        "note": "",
        "family": "match-total",
        "id": "c9e15cec5e09ea03"
      },
      {
        "rule": "10.2.4",
        "prompt": "A competitor fires 4 shots before a mandatory reload point, 2 shots after it without reloading, and 2 shots after finally reloading. How many procedural penalties apply to the reload violation?",
        "correct": "2",
        "options": [
          "2",
          "1",
          "3",
          "4"
        ],
        "note": "Count only shots after the required reload point and before the reload.",
        "family": "10.2.4",
        "id": "006d194da76716db"
      },
      {
        "rule": "10.2.5",
        "prompt": "In a Cooper Tunnel, direct contact with the overhead material drops 4 pieces. Bumping an upright drops another 1. How many procedural penalties apply?",
        "correct": "4",
        "options": [
          "4",
          "3",
          "5",
          "6"
        ],
        "note": "Pieces that fall from striking an upright are exempt.",
        "family": "10.2.5",
        "id": "8e37dab2e4ff09d1"
      },
      {
        "rule": "10.1.2",
        "prompt": "The Range Officer assesses 6 procedural penalties. What is the total point deduction for these penalties?",
        "correct": "60 points",
        "options": [
          "60 points",
          "40 points",
          "50 points",
          "70 points"
        ],
        "note": "",
        "family": "10.1.2",
        "id": "1b476140e351fce9"
      },
      {
        "rule": "10.2.1",
        "prompt": "A competitor fires 2 shots on each of 5 separate Fault Line breaches, re-entering fully between breaches and gaining no significant advantage. How many procedural penalties apply?",
        "correct": "5",
        "options": [
          "5",
          "4",
          "6",
          "7"
        ],
        "note": "With no significant advantage, count the separate occurrences.",
        "family": "10.2.1",
        "id": "e6660f0d591b4f7d"
      },
      {
        "rule": "11.3.1",
        "prompt": "Match Officials record a disputed call at 09:09. The competitor talks to the Chief Range Officer 15 minutes later. What is the deadline to submit a written arbitration appeal and fee to the Range Master?",
        "correct": "10:09",
        "options": [
          "10:09",
          "09:54",
          "10:24",
          "10:39"
        ],
        "note": "",
        "family": "11.3.1",
        "id": "3a39e0f7f339bf48"
      },
      {
        "rule": "9.8.3",
        "prompt": "The provisional results show a timestamp of 12:51, but were actually posted at 13:05. What is the deadline for a competitor to file a results appeal with the Stats Officer?",
        "correct": "14:05",
        "options": [
          "14:05",
          "13:50",
          "14:20",
          "14:35"
        ],
        "note": "",
        "family": "9.8.3",
        "id": "f52890a6657389c5"
      },
      {
        "rule": "11.4.1",
        "prompt": "At a Level III match the maximum individual entry fee is equivalent to US$121. What is the arbitration fee equivalent in local currency?",
        "correct": "US$100",
        "options": [
          "US$100",
          "US$121",
          "US$95",
          "US$105"
        ],
        "note": "Use the lower of US$100 and the maximum individual entry fee.",
        "family": "11.4.1",
        "id": "f8dd8ce82b7d6cb7"
      },
      {
        "rule": "9.4.2",
        "prompt": "Three paper no-shoots show 1, 2 and 0 hits in their scoring areas, respectively. What is the combined point deduction?",
        "correct": "30 points",
        "options": [
          "30 points",
          "20 points",
          "35 points",
          "40 points"
        ],
        "note": "Count 10 points per hit, capped at two hits on each paper no-shoot.",
        "family": "9.4.2",
        "id": "f4db1f910c9647bc"
      },
      {
        "rule": "10.2.7",
        "prompt": "A competitor leaves 6 non-disappearing scoring targets completely unengaged. They engage the other 5 targets. Before adding any misses, how many failure-to-engage procedurals apply?",
        "correct": "6",
        "options": [
          "6",
          "5",
          "7",
          "8"
        ],
        "note": "",
        "family": "10.2.7",
        "id": "d6027ed7afcbf0dc"
      },
      {
        "rule": "10.2.3",
        "prompt": "While faulting a line, a competitor fires 10 shots and gains a significant advantage. From that position a maximum of 5 scoring hits can be attained. What is the maximum number of procedurals for that fault?",
        "correct": "5",
        "options": [
          "5",
          "4",
          "6",
          "7"
        ],
        "note": "Multiple penalties for the fault are capped by the scoring hits attainable.",
        "family": "10.2.3",
        "id": "78f0f08139c28834"
      },
      {
        "rule": "11.3.2",
        "prompt": "The Arbitration Committee receives a request at 10:57 on Saturday. The Match Director will declare the results final at 11:17 on Sunday. What deadline applies to the committee’s decision?",
        "correct": "By 10:57 on Sunday",
        "options": [
          "By 10:57 on Sunday",
          "Before 11:17 on Sunday",
          "By 10:37 on Sunday",
          "By 10:57 on Monday"
        ],
        "note": "The 24-hour deadline arrives before the declaration of final results.",
        "family": "11.3.2",
        "id": "682a783c53b03f55"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Under Comstock, a competitor earns 55 target points, receives 20 penalty points and finishes in 5.00 seconds. What is the hit factor, rounded to four decimals?",
        "correct": "7.0000",
        "options": [
          "7.0000",
          "11.0000",
          "9.0000",
          "15.0000"
        ],
        "note": "Subtract penalties from target points before dividing by time.",
        "family": "comstock-hit-factor",
        "id": "6b4917642dba515c"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "A 80-point stage is won with a hit factor of 9. A competitor records a hit factor of 7.2. How many stage points does the competitor earn?",
        "correct": "64.00",
        "options": [
          "64.00",
          "62.00",
          "63.00",
          "65.00"
        ],
        "note": "Multiply the available stage points by the competitor’s hit factor divided by the winner’s hit factor.",
        "family": "comstock-stage-points",
        "id": "28ebb69b1638fbdf"
      },
      {
        "rule": "9.2.3",
        "prompt": "A competitor earns 39.2750, 28.6425 and 31.3850 stage points in the three stages of a match. What is the match total?",
        "correct": "99.3025",
        "options": [
          "99.3025",
          "99.4025",
          "99.2025",
          "100.3025"
        ],
        "note": "",
        "family": "match-total",
        "id": "5f4e872e5af06f31"
      },
      {
        "rule": "10.2.4",
        "prompt": "A competitor fires 1 shots before a mandatory reload point, 2 shots after it without reloading, and 3 shots after finally reloading. How many procedural penalties apply to the reload violation?",
        "correct": "2",
        "options": [
          "2",
          "1",
          "3",
          "4"
        ],
        "note": "Count only shots after the required reload point and before the reload.",
        "family": "10.2.4",
        "id": "6e024231dd5c61ec"
      },
      {
        "rule": "10.2.5",
        "prompt": "In a Cooper Tunnel, direct contact with the overhead material drops 1 pieces. Bumping an upright drops another 2. How many procedural penalties apply?",
        "correct": "1",
        "options": [
          "1",
          "0",
          "2",
          "3"
        ],
        "note": "Pieces that fall from striking an upright are exempt.",
        "family": "10.2.5",
        "id": "a494bfc8fae26d63"
      },
      {
        "rule": "10.1.2",
        "prompt": "The Range Officer assesses 7 procedural penalties. What is the total point deduction for these penalties?",
        "correct": "70 points",
        "options": [
          "70 points",
          "50 points",
          "60 points",
          "80 points"
        ],
        "note": "",
        "family": "10.1.2",
        "id": "47ba4f62b92a41c2"
      },
      {
        "rule": "10.2.1",
        "prompt": "A competitor fires 3 shots on each of 2 separate Fault Line breaches, re-entering fully between breaches and gaining no significant advantage. How many procedural penalties apply?",
        "correct": "2",
        "options": [
          "2",
          "1",
          "3",
          "4"
        ],
        "note": "With no significant advantage, count the separate occurrences.",
        "family": "10.2.1",
        "id": "ae87a1170740806b"
      },
      {
        "rule": "11.3.1",
        "prompt": "Match Officials record a disputed call at 09:32. The competitor talks to the Chief Range Officer 15 minutes later. What is the deadline to submit a written arbitration appeal and fee to the Range Master?",
        "correct": "10:32",
        "options": [
          "10:32",
          "10:17",
          "10:47",
          "11:02"
        ],
        "note": "",
        "family": "11.3.1",
        "id": "6588158dd42d9117"
      },
      {
        "rule": "9.8.3",
        "prompt": "The provisional results show a timestamp of 13:08, but were actually posted at 13:19. What is the deadline for a competitor to file a results appeal with the Stats Officer?",
        "correct": "14:19",
        "options": [
          "14:19",
          "14:04",
          "14:34",
          "14:49"
        ],
        "note": "",
        "family": "9.8.3",
        "id": "29a955b04f06e0ec"
      },
      {
        "rule": "11.4.1",
        "prompt": "At a Level III match the maximum individual entry fee is equivalent to US$66. What is the arbitration fee equivalent in local currency?",
        "correct": "US$66",
        "options": [
          "US$66",
          "US$100",
          "US$61",
          "US$71"
        ],
        "note": "Use the lower of US$100 and the maximum individual entry fee.",
        "family": "11.4.1",
        "id": "ee9ce1e4aa409d25"
      },
      {
        "rule": "9.4.2",
        "prompt": "Three paper no-shoots show 2, 2 and 0 hits in their scoring areas, respectively. What is the combined point deduction?",
        "correct": "40 points",
        "options": [
          "40 points",
          "30 points",
          "45 points",
          "50 points"
        ],
        "note": "Count 10 points per hit, capped at two hits on each paper no-shoot.",
        "family": "9.4.2",
        "id": "402cb42239c9c1f8"
      },
      {
        "rule": "10.2.7",
        "prompt": "A competitor leaves 3 non-disappearing scoring targets completely unengaged. They engage the other 6 targets. Before adding any misses, how many failure-to-engage procedurals apply?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "",
        "family": "10.2.7",
        "id": "40285104c3498727"
      },
      {
        "rule": "10.2.3",
        "prompt": "While faulting a line, a competitor fires 11 shots and gains a significant advantage. From that position a maximum of 6 scoring hits can be attained. What is the maximum number of procedurals for that fault?",
        "correct": "6",
        "options": [
          "6",
          "5",
          "7",
          "8"
        ],
        "note": "Multiple penalties for the fault are capped by the scoring hits attainable.",
        "family": "10.2.3",
        "id": "33eda48998525a75"
      },
      {
        "rule": "11.3.2",
        "prompt": "The Arbitration Committee receives a request at 11:16 on Saturday. Final results are scheduled to be declared at 10:56 on Sunday. What is the latest time the committee may rule under that schedule?",
        "correct": "Before 10:56 on Sunday",
        "options": [
          "Before 10:56 on Sunday",
          "By 11:16 on Sunday",
          "By 11:36 on Sunday",
          "Before 10:56 on Monday"
        ],
        "note": "The earlier limit is the declaration of final results.",
        "family": "11.3.2",
        "id": "0ca050eb61851f0f"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Under Comstock, a competitor earns 60 target points, receives 30 penalty points and finishes in 6.00 seconds. What is the hit factor, rounded to four decimals?",
        "correct": "5.0000",
        "options": [
          "5.0000",
          "10.0000",
          "7.5000",
          "15.0000"
        ],
        "note": "Subtract penalties from target points before dividing by time.",
        "family": "comstock-hit-factor",
        "id": "e0956e1c97004596"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "A 90-point stage is won with a hit factor of 10. A competitor records a hit factor of 9.0. How many stage points does the competitor earn?",
        "correct": "81.00",
        "options": [
          "81.00",
          "79.00",
          "80.00",
          "82.00"
        ],
        "note": "Multiply the available stage points by the competitor’s hit factor divided by the winner’s hit factor.",
        "family": "comstock-stage-points",
        "id": "14715e3e5cf69e4f"
      },
      {
        "rule": "9.2.3",
        "prompt": "A competitor earns 41.2750, 29.6425 and 34.3850 stage points in the three stages of a match. What is the match total?",
        "correct": "105.3025",
        "options": [
          "105.3025",
          "105.4025",
          "105.2025",
          "106.3025"
        ],
        "note": "",
        "family": "match-total",
        "id": "074fa194069e06db"
      },
      {
        "rule": "10.2.4",
        "prompt": "A competitor fires 2 shots before a mandatory reload point, 2 shots after it without reloading, and 4 shots after finally reloading. How many procedural penalties apply to the reload violation?",
        "correct": "2",
        "options": [
          "2",
          "1",
          "3",
          "4"
        ],
        "note": "Count only shots after the required reload point and before the reload.",
        "family": "10.2.4",
        "id": "68323701f25334fb"
      },
      {
        "rule": "10.2.5",
        "prompt": "In a Cooper Tunnel, direct contact with the overhead material drops 2 pieces. Bumping an upright drops another 2. How many procedural penalties apply?",
        "correct": "2",
        "options": [
          "2",
          "1",
          "3",
          "4"
        ],
        "note": "Pieces that fall from striking an upright are exempt.",
        "family": "10.2.5",
        "id": "d78787214b190a6e"
      },
      {
        "rule": "10.1.2",
        "prompt": "The Range Officer assesses 8 procedural penalties. What is the total point deduction for these penalties?",
        "correct": "80 points",
        "options": [
          "80 points",
          "60 points",
          "70 points",
          "90 points"
        ],
        "note": "",
        "family": "10.1.2",
        "id": "5d5ad2570ac219a8"
      },
      {
        "rule": "10.2.1",
        "prompt": "A competitor fires 3 shots on each of 3 separate Fault Line breaches, re-entering fully between breaches and gaining no significant advantage. How many procedural penalties apply?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "With no significant advantage, count the separate occurrences.",
        "family": "10.2.1",
        "id": "58f01062c3509bdd"
      },
      {
        "rule": "11.3.1",
        "prompt": "Match Officials record a disputed call at 09:55. The competitor talks to the Chief Range Officer 15 minutes later. What is the deadline to submit a written arbitration appeal and fee to the Range Master?",
        "correct": "10:55",
        "options": [
          "10:55",
          "10:40",
          "11:10",
          "11:25"
        ],
        "note": "",
        "family": "11.3.1",
        "id": "007010000caf70b8"
      },
      {
        "rule": "9.8.3",
        "prompt": "The provisional results show a timestamp of 13:25, but were actually posted at 13:37. What is the deadline for a competitor to file a results appeal with the Stats Officer?",
        "correct": "14:37",
        "options": [
          "14:37",
          "14:22",
          "14:52",
          "15:07"
        ],
        "note": "",
        "family": "9.8.3",
        "id": "251642cc8f8c7f1f"
      },
      {
        "rule": "11.4.1",
        "prompt": "At a Level III match the maximum individual entry fee is equivalent to US$127. What is the arbitration fee equivalent in local currency?",
        "correct": "US$100",
        "options": [
          "US$100",
          "US$127",
          "US$95",
          "US$105"
        ],
        "note": "Use the lower of US$100 and the maximum individual entry fee.",
        "family": "11.4.1",
        "id": "5f76c896f353c461"
      },
      {
        "rule": "9.4.2",
        "prompt": "Three paper no-shoots show 3, 2 and 0 hits in their scoring areas, respectively. What is the combined point deduction?",
        "correct": "40 points",
        "options": [
          "40 points",
          "30 points",
          "45 points",
          "50 points"
        ],
        "note": "Count 10 points per hit, capped at two hits on each paper no-shoot.",
        "family": "9.4.2",
        "id": "f10264af0c61ed3a"
      },
      {
        "rule": "10.2.7",
        "prompt": "A competitor leaves 4 non-disappearing scoring targets completely unengaged. They engage the other 7 targets. Before adding any misses, how many failure-to-engage procedurals apply?",
        "correct": "4",
        "options": [
          "4",
          "3",
          "5",
          "6"
        ],
        "note": "",
        "family": "10.2.7",
        "id": "9bd75fb0011635df"
      },
      {
        "rule": "10.2.3",
        "prompt": "While faulting a line, a competitor fires 12 shots and gains a significant advantage. From that position a maximum of 7 scoring hits can be attained. What is the maximum number of procedurals for that fault?",
        "correct": "7",
        "options": [
          "7",
          "6",
          "8",
          "9"
        ],
        "note": "Multiple penalties for the fault are capped by the scoring hits attainable.",
        "family": "10.2.3",
        "id": "fe4d0980cee323db"
      },
      {
        "rule": "11.3.2",
        "prompt": "The Arbitration Committee receives a request at 11:35 on Saturday. The Match Director will declare the results final at 11:55 on Sunday. What deadline applies to the committee’s decision?",
        "correct": "By 11:35 on Sunday",
        "options": [
          "By 11:35 on Sunday",
          "Before 11:55 on Sunday",
          "By 11:15 on Sunday",
          "By 11:35 on Monday"
        ],
        "note": "The 24-hour deadline arrives before the declaration of final results.",
        "family": "11.3.2",
        "id": "64eca1200b3dfb67"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Under Comstock, a competitor earns 65 target points, receives 10 penalty points and finishes in 7.00 seconds. What is the hit factor, rounded to four decimals?",
        "correct": "7.8571",
        "options": [
          "7.8571",
          "9.2857",
          "8.5714",
          "10.7143"
        ],
        "note": "Subtract penalties from target points before dividing by time.",
        "family": "comstock-hit-factor",
        "id": "dc1a8095996ad676"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "A 100-point stage is won with a hit factor of 8. A competitor records a hit factor of 4.0. How many stage points does the competitor earn?",
        "correct": "50.00",
        "options": [
          "50.00",
          "48.00",
          "49.00",
          "51.00"
        ],
        "note": "Multiply the available stage points by the competitor’s hit factor divided by the winner’s hit factor.",
        "family": "comstock-stage-points",
        "id": "a40790b1b62def3d"
      },
      {
        "rule": "9.2.3",
        "prompt": "A competitor earns 43.2750, 30.6425 and 37.3850 stage points in the three stages of a match. What is the match total?",
        "correct": "111.3025",
        "options": [
          "111.3025",
          "111.4025",
          "111.2025",
          "112.3025"
        ],
        "note": "",
        "family": "match-total",
        "id": "94c3a1b2ed2be128"
      },
      {
        "rule": "10.2.4",
        "prompt": "A competitor fires 3 shots before a mandatory reload point, 3 shots after it without reloading, and 2 shots after finally reloading. How many procedural penalties apply to the reload violation?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "Count only shots after the required reload point and before the reload.",
        "family": "10.2.4",
        "id": "74af5d5f21fe1dfb"
      },
      {
        "rule": "10.2.5",
        "prompt": "In a Cooper Tunnel, direct contact with the overhead material drops 3 pieces. Bumping an upright drops another 2. How many procedural penalties apply?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "Pieces that fall from striking an upright are exempt.",
        "family": "10.2.5",
        "id": "1f535390a3951d7e"
      },
      {
        "rule": "10.1.2",
        "prompt": "The Range Officer assesses 9 procedural penalties. What is the total point deduction for these penalties?",
        "correct": "90 points",
        "options": [
          "90 points",
          "70 points",
          "80 points",
          "100 points"
        ],
        "note": "",
        "family": "10.1.2",
        "id": "8408d43671db7a0e"
      },
      {
        "rule": "10.2.1",
        "prompt": "A competitor fires 3 shots on each of 4 separate Fault Line breaches, re-entering fully between breaches and gaining no significant advantage. How many procedural penalties apply?",
        "correct": "4",
        "options": [
          "4",
          "3",
          "5",
          "6"
        ],
        "note": "With no significant advantage, count the separate occurrences.",
        "family": "10.2.1",
        "id": "2ff8e267c91dde1a"
      },
      {
        "rule": "11.3.1",
        "prompt": "Match Officials record a disputed call at 10:18. The competitor talks to the Chief Range Officer 15 minutes later. What is the deadline to submit a written arbitration appeal and fee to the Range Master?",
        "correct": "11:18",
        "options": [
          "11:18",
          "11:03",
          "11:33",
          "11:48"
        ],
        "note": "",
        "family": "11.3.1",
        "id": "c965916fb531369c"
      },
      {
        "rule": "9.8.3",
        "prompt": "The provisional results show a timestamp of 13:42, but were actually posted at 13:55. What is the deadline for a competitor to file a results appeal with the Stats Officer?",
        "correct": "14:55",
        "options": [
          "14:55",
          "14:40",
          "15:10",
          "15:25"
        ],
        "note": "",
        "family": "9.8.3",
        "id": "2cf52a01b6b110fd"
      },
      {
        "rule": "11.4.1",
        "prompt": "At a Level III match the maximum individual entry fee is equivalent to US$70. What is the arbitration fee equivalent in local currency?",
        "correct": "US$70",
        "options": [
          "US$70",
          "US$100",
          "US$65",
          "US$75"
        ],
        "note": "Use the lower of US$100 and the maximum individual entry fee.",
        "family": "11.4.1",
        "id": "d811849a35cbcaa0"
      },
      {
        "rule": "9.4.2",
        "prompt": "Three paper no-shoots show 1, 3 and 1 hits in their scoring areas, respectively. What is the combined point deduction?",
        "correct": "40 points",
        "options": [
          "40 points",
          "30 points",
          "45 points",
          "50 points"
        ],
        "note": "Count 10 points per hit, capped at two hits on each paper no-shoot.",
        "family": "9.4.2",
        "id": "e7a35042e7ccfa8a"
      },
      {
        "rule": "10.2.7",
        "prompt": "A competitor leaves 5 non-disappearing scoring targets completely unengaged. They engage the other 8 targets. Before adding any misses, how many failure-to-engage procedurals apply?",
        "correct": "5",
        "options": [
          "5",
          "4",
          "6",
          "7"
        ],
        "note": "",
        "family": "10.2.7",
        "id": "fd6b874ef06e73b5"
      },
      {
        "rule": "10.2.3",
        "prompt": "While faulting a line, a competitor fires 13 shots and gains a significant advantage. From that position a maximum of 8 scoring hits can be attained. What is the maximum number of procedurals for that fault?",
        "correct": "8",
        "options": [
          "8",
          "7",
          "9",
          "10"
        ],
        "note": "Multiple penalties for the fault are capped by the scoring hits attainable.",
        "family": "10.2.3",
        "id": "e26303c2b6fb8eef"
      },
      {
        "rule": "11.3.2",
        "prompt": "The Arbitration Committee receives a request at 11:54 on Saturday. Final results are scheduled to be declared at 11:34 on Sunday. What is the latest time the committee may rule under that schedule?",
        "correct": "Before 11:34 on Sunday",
        "options": [
          "Before 11:34 on Sunday",
          "By 11:54 on Sunday",
          "By 12:14 on Sunday",
          "Before 11:34 on Monday"
        ],
        "note": "The earlier limit is the declaration of final results.",
        "family": "11.3.2",
        "id": "2f113c3dcf31d25b"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Under Comstock, a competitor earns 70 target points, receives 20 penalty points and finishes in 8.00 seconds. What is the hit factor, rounded to four decimals?",
        "correct": "6.2500",
        "options": [
          "6.2500",
          "8.7500",
          "7.5000",
          "11.2500"
        ],
        "note": "Subtract penalties from target points before dividing by time.",
        "family": "comstock-hit-factor",
        "id": "194827b22eba79b3"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "A 110-point stage is won with a hit factor of 9. A competitor records a hit factor of 5.4. How many stage points does the competitor earn?",
        "correct": "66.00",
        "options": [
          "66.00",
          "64.00",
          "65.00",
          "67.00"
        ],
        "note": "Multiply the available stage points by the competitor’s hit factor divided by the winner’s hit factor.",
        "family": "comstock-stage-points",
        "id": "ae96f35457d3f054"
      },
      {
        "rule": "9.2.3",
        "prompt": "A competitor earns 45.2750, 31.6425 and 40.3850 stage points in the three stages of a match. What is the match total?",
        "correct": "117.3025",
        "options": [
          "117.3025",
          "117.4025",
          "117.2025",
          "118.3025"
        ],
        "note": "",
        "family": "match-total",
        "id": "14aae3449b1f03c8"
      },
      {
        "rule": "10.2.4",
        "prompt": "A competitor fires 4 shots before a mandatory reload point, 3 shots after it without reloading, and 3 shots after finally reloading. How many procedural penalties apply to the reload violation?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "Count only shots after the required reload point and before the reload.",
        "family": "10.2.4",
        "id": "ed76f5a3f5fb66c2"
      },
      {
        "rule": "10.2.5",
        "prompt": "In a Cooper Tunnel, direct contact with the overhead material drops 4 pieces. Bumping an upright drops another 2. How many procedural penalties apply?",
        "correct": "4",
        "options": [
          "4",
          "3",
          "5",
          "6"
        ],
        "note": "Pieces that fall from striking an upright are exempt.",
        "family": "10.2.5",
        "id": "491749653d1d7d26"
      },
      {
        "rule": "10.1.2",
        "prompt": "The Range Officer assesses 10 procedural penalties. What is the total point deduction for these penalties?",
        "correct": "100 points",
        "options": [
          "100 points",
          "80 points",
          "90 points",
          "110 points"
        ],
        "note": "",
        "family": "10.1.2",
        "id": "100e589875ff53f7"
      },
      {
        "rule": "10.2.1",
        "prompt": "A competitor fires 3 shots on each of 5 separate Fault Line breaches, re-entering fully between breaches and gaining no significant advantage. How many procedural penalties apply?",
        "correct": "5",
        "options": [
          "5",
          "4",
          "6",
          "7"
        ],
        "note": "With no significant advantage, count the separate occurrences.",
        "family": "10.2.1",
        "id": "5e49c94b26b2461c"
      },
      {
        "rule": "11.3.1",
        "prompt": "Match Officials record a disputed call at 10:41. The competitor talks to the Chief Range Officer 15 minutes later. What is the deadline to submit a written arbitration appeal and fee to the Range Master?",
        "correct": "11:41",
        "options": [
          "11:41",
          "11:26",
          "11:56",
          "12:11"
        ],
        "note": "",
        "family": "11.3.1",
        "id": "0d638cd42e10ffb0"
      },
      {
        "rule": "9.8.3",
        "prompt": "The provisional results show a timestamp of 13:59, but were actually posted at 14:13. What is the deadline for a competitor to file a results appeal with the Stats Officer?",
        "correct": "15:13",
        "options": [
          "15:13",
          "14:58",
          "15:28",
          "15:43"
        ],
        "note": "",
        "family": "9.8.3",
        "id": "09e5ceb49c90626e"
      },
      {
        "rule": "11.4.1",
        "prompt": "At a Level III match the maximum individual entry fee is equivalent to US$133. What is the arbitration fee equivalent in local currency?",
        "correct": "US$100",
        "options": [
          "US$100",
          "US$133",
          "US$95",
          "US$105"
        ],
        "note": "Use the lower of US$100 and the maximum individual entry fee.",
        "family": "11.4.1",
        "id": "274ea25396d70949"
      },
      {
        "rule": "9.4.2",
        "prompt": "Three paper no-shoots show 2, 3 and 1 hits in their scoring areas, respectively. What is the combined point deduction?",
        "correct": "50 points",
        "options": [
          "50 points",
          "40 points",
          "55 points",
          "60 points"
        ],
        "note": "Count 10 points per hit, capped at two hits on each paper no-shoot.",
        "family": "9.4.2",
        "id": "3fe10b1743af5a74"
      },
      {
        "rule": "10.2.7",
        "prompt": "A competitor leaves 6 non-disappearing scoring targets completely unengaged. They engage the other 9 targets. Before adding any misses, how many failure-to-engage procedurals apply?",
        "correct": "6",
        "options": [
          "6",
          "5",
          "7",
          "8"
        ],
        "note": "",
        "family": "10.2.7",
        "id": "5bd4bda93c64ae23"
      },
      {
        "rule": "10.2.3",
        "prompt": "While faulting a line, a competitor fires 14 shots and gains a significant advantage. From that position a maximum of 9 scoring hits can be attained. What is the maximum number of procedurals for that fault?",
        "correct": "9",
        "options": [
          "9",
          "8",
          "10",
          "11"
        ],
        "note": "Multiple penalties for the fault are capped by the scoring hits attainable.",
        "family": "10.2.3",
        "id": "8ba798773a134e49"
      },
      {
        "rule": "11.3.2",
        "prompt": "The Arbitration Committee receives a request at 12:13 on Saturday. The Match Director will declare the results final at 12:33 on Sunday. What deadline applies to the committee’s decision?",
        "correct": "By 12:13 on Sunday",
        "options": [
          "By 12:13 on Sunday",
          "Before 12:33 on Sunday",
          "By 11:53 on Sunday",
          "By 12:13 on Monday"
        ],
        "note": "The 24-hour deadline arrives before the declaration of final results.",
        "family": "11.3.2",
        "id": "87e95945c487e4d8"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Under Comstock, a competitor earns 75 target points, receives 30 penalty points and finishes in 5.00 seconds. What is the hit factor, rounded to four decimals?",
        "correct": "9.0000",
        "options": [
          "9.0000",
          "15.0000",
          "12.0000",
          "21.0000"
        ],
        "note": "Subtract penalties from target points before dividing by time.",
        "family": "comstock-hit-factor",
        "id": "6593ce04b3d67d7d"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "A 120-point stage is won with a hit factor of 10. A competitor records a hit factor of 7.0. How many stage points does the competitor earn?",
        "correct": "84.00",
        "options": [
          "84.00",
          "82.00",
          "83.00",
          "85.00"
        ],
        "note": "Multiply the available stage points by the competitor’s hit factor divided by the winner’s hit factor.",
        "family": "comstock-stage-points",
        "id": "125f67b0e89b3b29"
      },
      {
        "rule": "9.2.3",
        "prompt": "A competitor earns 47.2750, 32.6425 and 43.3850 stage points in the three stages of a match. What is the match total?",
        "correct": "123.3025",
        "options": [
          "123.3025",
          "123.4025",
          "123.2025",
          "124.3025"
        ],
        "note": "",
        "family": "match-total",
        "id": "ac71cbd4257fe44c"
      },
      {
        "rule": "10.2.4",
        "prompt": "A competitor fires 1 shots before a mandatory reload point, 3 shots after it without reloading, and 4 shots after finally reloading. How many procedural penalties apply to the reload violation?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "Count only shots after the required reload point and before the reload.",
        "family": "10.2.4",
        "id": "ad42741d9b5b0b33"
      },
      {
        "rule": "10.2.5",
        "prompt": "In a Cooper Tunnel, direct contact with the overhead material drops 1 pieces. Bumping an upright drops another 3. How many procedural penalties apply?",
        "correct": "1",
        "options": [
          "1",
          "0",
          "2",
          "3"
        ],
        "note": "Pieces that fall from striking an upright are exempt.",
        "family": "10.2.5",
        "id": "073fa27a14c6fdba"
      },
      {
        "rule": "10.1.2",
        "prompt": "The Range Officer assesses 11 procedural penalties. What is the total point deduction for these penalties?",
        "correct": "110 points",
        "options": [
          "110 points",
          "90 points",
          "100 points",
          "120 points"
        ],
        "note": "",
        "family": "10.1.2",
        "id": "6ced0a30c97d29fb"
      },
      {
        "rule": "10.2.1",
        "prompt": "A competitor fires 4 shots on each of 2 separate Fault Line breaches, re-entering fully between breaches and gaining no significant advantage. How many procedural penalties apply?",
        "correct": "2",
        "options": [
          "2",
          "1",
          "3",
          "4"
        ],
        "note": "With no significant advantage, count the separate occurrences.",
        "family": "10.2.1",
        "id": "0fdc8b40955167f4"
      },
      {
        "rule": "11.3.1",
        "prompt": "Match Officials record a disputed call at 11:04. The competitor talks to the Chief Range Officer 15 minutes later. What is the deadline to submit a written arbitration appeal and fee to the Range Master?",
        "correct": "12:04",
        "options": [
          "12:04",
          "11:49",
          "12:19",
          "12:34"
        ],
        "note": "",
        "family": "11.3.1",
        "id": "74c72e17cf94ace9"
      },
      {
        "rule": "9.8.3",
        "prompt": "The provisional results show a timestamp of 14:16, but were actually posted at 14:27. What is the deadline for a competitor to file a results appeal with the Stats Officer?",
        "correct": "15:27",
        "options": [
          "15:27",
          "15:12",
          "15:42",
          "15:57"
        ],
        "note": "",
        "family": "9.8.3",
        "id": "7218042e14ad7648"
      },
      {
        "rule": "11.4.1",
        "prompt": "At a Level III match the maximum individual entry fee is equivalent to US$74. What is the arbitration fee equivalent in local currency?",
        "correct": "US$74",
        "options": [
          "US$74",
          "US$100",
          "US$69",
          "US$79"
        ],
        "note": "Use the lower of US$100 and the maximum individual entry fee.",
        "family": "11.4.1",
        "id": "84a17151ec6235aa"
      },
      {
        "rule": "9.4.2",
        "prompt": "Three paper no-shoots show 3, 3 and 1 hits in their scoring areas, respectively. What is the combined point deduction?",
        "correct": "50 points",
        "options": [
          "50 points",
          "40 points",
          "55 points",
          "60 points"
        ],
        "note": "Count 10 points per hit, capped at two hits on each paper no-shoot.",
        "family": "9.4.2",
        "id": "9362ece878e6df51"
      },
      {
        "rule": "10.2.7",
        "prompt": "A competitor leaves 3 non-disappearing scoring targets completely unengaged. They engage the other 10 targets. Before adding any misses, how many failure-to-engage procedurals apply?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "",
        "family": "10.2.7",
        "id": "f187f41432c19f9e"
      },
      {
        "rule": "10.2.3",
        "prompt": "While faulting a line, a competitor fires 15 shots and gains a significant advantage. From that position a maximum of 10 scoring hits can be attained. What is the maximum number of procedurals for that fault?",
        "correct": "10",
        "options": [
          "10",
          "9",
          "11",
          "12"
        ],
        "note": "Multiple penalties for the fault are capped by the scoring hits attainable.",
        "family": "10.2.3",
        "id": "1d0b8f7c31502eb7"
      },
      {
        "rule": "11.3.2",
        "prompt": "The Arbitration Committee receives a request at 12:32 on Saturday. Final results are scheduled to be declared at 12:12 on Sunday. What is the latest time the committee may rule under that schedule?",
        "correct": "Before 12:12 on Sunday",
        "options": [
          "Before 12:12 on Sunday",
          "By 12:32 on Sunday",
          "By 12:52 on Sunday",
          "Before 12:12 on Monday"
        ],
        "note": "The earlier limit is the declaration of final results.",
        "family": "11.3.2",
        "id": "0a04767b90011120"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Under Comstock, a competitor earns 80 target points, receives 10 penalty points and finishes in 6.00 seconds. What is the hit factor, rounded to four decimals?",
        "correct": "11.6667",
        "options": [
          "11.6667",
          "13.3333",
          "12.5000",
          "15.0000"
        ],
        "note": "Subtract penalties from target points before dividing by time.",
        "family": "comstock-hit-factor",
        "id": "0a8487a56defd7d4"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "A 130-point stage is won with a hit factor of 8. A competitor records a hit factor of 6.00. How many stage points does the competitor earn?",
        "correct": "97.50",
        "options": [
          "97.50",
          "95.50",
          "96.50",
          "98.50"
        ],
        "note": "Multiply the available stage points by the competitor’s hit factor divided by the winner’s hit factor.",
        "family": "comstock-stage-points",
        "id": "581a8fb3529e434e"
      },
      {
        "rule": "9.2.3",
        "prompt": "A competitor earns 49.2750, 33.6425 and 46.3850 stage points in the three stages of a match. What is the match total?",
        "correct": "129.3025",
        "options": [
          "129.3025",
          "129.4025",
          "129.2025",
          "130.3025"
        ],
        "note": "",
        "family": "match-total",
        "id": "24a2902d339963fb"
      },
      {
        "rule": "10.2.4",
        "prompt": "A competitor fires 2 shots before a mandatory reload point, 4 shots after it without reloading, and 2 shots after finally reloading. How many procedural penalties apply to the reload violation?",
        "correct": "4",
        "options": [
          "4",
          "3",
          "5",
          "6"
        ],
        "note": "Count only shots after the required reload point and before the reload.",
        "family": "10.2.4",
        "id": "a63d7cb694c1e4e7"
      },
      {
        "rule": "10.2.5",
        "prompt": "In a Cooper Tunnel, direct contact with the overhead material drops 2 pieces. Bumping an upright drops another 3. How many procedural penalties apply?",
        "correct": "2",
        "options": [
          "2",
          "1",
          "3",
          "4"
        ],
        "note": "Pieces that fall from striking an upright are exempt.",
        "family": "10.2.5",
        "id": "d4412d59638309cc"
      },
      {
        "rule": "10.1.2",
        "prompt": "The Range Officer assesses 12 procedural penalties. What is the total point deduction for these penalties?",
        "correct": "120 points",
        "options": [
          "120 points",
          "100 points",
          "110 points",
          "130 points"
        ],
        "note": "",
        "family": "10.1.2",
        "id": "2da427e627a18668"
      },
      {
        "rule": "10.2.1",
        "prompt": "A competitor fires 4 shots on each of 3 separate Fault Line breaches, re-entering fully between breaches and gaining no significant advantage. How many procedural penalties apply?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "With no significant advantage, count the separate occurrences.",
        "family": "10.2.1",
        "id": "21bc41077313a1fb"
      },
      {
        "rule": "11.3.1",
        "prompt": "Match Officials record a disputed call at 11:27. The competitor talks to the Chief Range Officer 15 minutes later. What is the deadline to submit a written arbitration appeal and fee to the Range Master?",
        "correct": "12:27",
        "options": [
          "12:27",
          "12:12",
          "12:42",
          "12:57"
        ],
        "note": "",
        "family": "11.3.1",
        "id": "8b94d01c354e3638"
      },
      {
        "rule": "9.8.3",
        "prompt": "The provisional results show a timestamp of 14:33, but were actually posted at 14:45. What is the deadline for a competitor to file a results appeal with the Stats Officer?",
        "correct": "15:45",
        "options": [
          "15:45",
          "15:30",
          "16:00",
          "16:15"
        ],
        "note": "",
        "family": "9.8.3",
        "id": "7aba270f1596c966"
      },
      {
        "rule": "11.4.1",
        "prompt": "At a Level III match the maximum individual entry fee is equivalent to US$139. What is the arbitration fee equivalent in local currency?",
        "correct": "US$100",
        "options": [
          "US$100",
          "US$139",
          "US$95",
          "US$105"
        ],
        "note": "Use the lower of US$100 and the maximum individual entry fee.",
        "family": "11.4.1",
        "id": "5bb2c4fc1e28915c"
      },
      {
        "rule": "9.4.2",
        "prompt": "Three paper no-shoots show 1, 4 and 1 hits in their scoring areas, respectively. What is the combined point deduction?",
        "correct": "40 points",
        "options": [
          "40 points",
          "30 points",
          "45 points",
          "50 points"
        ],
        "note": "Count 10 points per hit, capped at two hits on each paper no-shoot.",
        "family": "9.4.2",
        "id": "2ce804cf7d3c65a5"
      },
      {
        "rule": "10.2.7",
        "prompt": "A competitor leaves 4 non-disappearing scoring targets completely unengaged. They engage the other 11 targets. Before adding any misses, how many failure-to-engage procedurals apply?",
        "correct": "4",
        "options": [
          "4",
          "3",
          "5",
          "6"
        ],
        "note": "",
        "family": "10.2.7",
        "id": "6a197c545df016c0"
      },
      {
        "rule": "10.2.3",
        "prompt": "While faulting a line, a competitor fires 16 shots and gains a significant advantage. From that position a maximum of 11 scoring hits can be attained. What is the maximum number of procedurals for that fault?",
        "correct": "11",
        "options": [
          "11",
          "10",
          "12",
          "13"
        ],
        "note": "Multiple penalties for the fault are capped by the scoring hits attainable.",
        "family": "10.2.3",
        "id": "ee190b22289ebab1"
      },
      {
        "rule": "11.3.2",
        "prompt": "The Arbitration Committee receives a request at 12:51 on Saturday. The Match Director will declare the results final at 13:11 on Sunday. What deadline applies to the committee’s decision?",
        "correct": "By 12:51 on Sunday",
        "options": [
          "By 12:51 on Sunday",
          "Before 13:11 on Sunday",
          "By 12:31 on Sunday",
          "By 12:51 on Monday"
        ],
        "note": "The 24-hour deadline arrives before the declaration of final results.",
        "family": "11.3.2",
        "id": "87475e17dc3ff41f"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Under Comstock, a competitor earns 85 target points, receives 20 penalty points and finishes in 7.00 seconds. What is the hit factor, rounded to four decimals?",
        "correct": "9.2857",
        "options": [
          "9.2857",
          "12.1429",
          "10.7143",
          "15.0000"
        ],
        "note": "Subtract penalties from target points before dividing by time.",
        "family": "comstock-hit-factor",
        "id": "b85cb293f700cca4"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "A 140-point stage is won with a hit factor of 9. A competitor records a hit factor of 7.2. How many stage points does the competitor earn?",
        "correct": "112.00",
        "options": [
          "112.00",
          "110.00",
          "111.00",
          "113.00"
        ],
        "note": "Multiply the available stage points by the competitor’s hit factor divided by the winner’s hit factor.",
        "family": "comstock-stage-points",
        "id": "80da1262251a8622"
      },
      {
        "rule": "9.2.3",
        "prompt": "A competitor earns 51.2750, 34.6425 and 49.3850 stage points in the three stages of a match. What is the match total?",
        "correct": "135.3025",
        "options": [
          "135.3025",
          "135.4025",
          "135.2025",
          "136.3025"
        ],
        "note": "",
        "family": "match-total",
        "id": "dc93ed95ac38a11e"
      },
      {
        "rule": "10.2.4",
        "prompt": "A competitor fires 3 shots before a mandatory reload point, 4 shots after it without reloading, and 3 shots after finally reloading. How many procedural penalties apply to the reload violation?",
        "correct": "4",
        "options": [
          "4",
          "3",
          "5",
          "6"
        ],
        "note": "Count only shots after the required reload point and before the reload.",
        "family": "10.2.4",
        "id": "ff81f0ebb90fa7fe"
      },
      {
        "rule": "10.2.5",
        "prompt": "In a Cooper Tunnel, direct contact with the overhead material drops 3 pieces. Bumping an upright drops another 3. How many procedural penalties apply?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "Pieces that fall from striking an upright are exempt.",
        "family": "10.2.5",
        "id": "a69a26a0962324c0"
      },
      {
        "rule": "10.1.2",
        "prompt": "The Range Officer assesses 13 procedural penalties. What is the total point deduction for these penalties?",
        "correct": "130 points",
        "options": [
          "130 points",
          "110 points",
          "120 points",
          "140 points"
        ],
        "note": "",
        "family": "10.1.2",
        "id": "f2b4498c35093061"
      },
      {
        "rule": "10.2.1",
        "prompt": "A competitor fires 4 shots on each of 4 separate Fault Line breaches, re-entering fully between breaches and gaining no significant advantage. How many procedural penalties apply?",
        "correct": "4",
        "options": [
          "4",
          "3",
          "5",
          "6"
        ],
        "note": "With no significant advantage, count the separate occurrences.",
        "family": "10.2.1",
        "id": "bcbc115517493d04"
      },
      {
        "rule": "11.3.1",
        "prompt": "Match Officials record a disputed call at 11:50. The competitor talks to the Chief Range Officer 15 minutes later. What is the deadline to submit a written arbitration appeal and fee to the Range Master?",
        "correct": "12:50",
        "options": [
          "12:50",
          "12:35",
          "13:05",
          "13:20"
        ],
        "note": "",
        "family": "11.3.1",
        "id": "5fa6865654c74be5"
      },
      {
        "rule": "9.8.3",
        "prompt": "The provisional results show a timestamp of 14:50, but were actually posted at 15:03. What is the deadline for a competitor to file a results appeal with the Stats Officer?",
        "correct": "16:03",
        "options": [
          "16:03",
          "15:48",
          "16:18",
          "16:33"
        ],
        "note": "",
        "family": "9.8.3",
        "id": "2bb26fd96d3d99e0"
      },
      {
        "rule": "11.4.1",
        "prompt": "At a Level III match the maximum individual entry fee is equivalent to US$78. What is the arbitration fee equivalent in local currency?",
        "correct": "US$78",
        "options": [
          "US$78",
          "US$100",
          "US$73",
          "US$83"
        ],
        "note": "Use the lower of US$100 and the maximum individual entry fee.",
        "family": "11.4.1",
        "id": "b0c07a4dded3ae57"
      },
      {
        "rule": "9.4.2",
        "prompt": "Three paper no-shoots show 2, 4 and 1 hits in their scoring areas, respectively. What is the combined point deduction?",
        "correct": "50 points",
        "options": [
          "50 points",
          "40 points",
          "55 points",
          "60 points"
        ],
        "note": "Count 10 points per hit, capped at two hits on each paper no-shoot.",
        "family": "9.4.2",
        "id": "b8d2a9da680ff132"
      },
      {
        "rule": "10.2.7",
        "prompt": "A competitor leaves 5 non-disappearing scoring targets completely unengaged. They engage the other 12 targets. Before adding any misses, how many failure-to-engage procedurals apply?",
        "correct": "5",
        "options": [
          "5",
          "4",
          "6",
          "7"
        ],
        "note": "",
        "family": "10.2.7",
        "id": "6027dec45b5000f3"
      },
      {
        "rule": "10.2.3",
        "prompt": "While faulting a line, a competitor fires 17 shots and gains a significant advantage. From that position a maximum of 12 scoring hits can be attained. What is the maximum number of procedurals for that fault?",
        "correct": "12",
        "options": [
          "12",
          "11",
          "13",
          "14"
        ],
        "note": "Multiple penalties for the fault are capped by the scoring hits attainable.",
        "family": "10.2.3",
        "id": "8ba2c28d0727460d"
      },
      {
        "rule": "11.3.2",
        "prompt": "The Arbitration Committee receives a request at 13:10 on Saturday. Final results are scheduled to be declared at 12:50 on Sunday. What is the latest time the committee may rule under that schedule?",
        "correct": "Before 12:50 on Sunday",
        "options": [
          "Before 12:50 on Sunday",
          "By 13:10 on Sunday",
          "By 13:30 on Sunday",
          "Before 12:50 on Monday"
        ],
        "note": "The earlier limit is the declaration of final results.",
        "family": "11.3.2",
        "id": "75069bcdc82cd29e"
      }
    ]
  },
  {
    "id": "action-air-handgun",
    "name": "Action Air Handgun",
    "group": "Action Air",
    "book": "https://drive.google.com/file/d/19VYSZU3KO3XLfeGsSIL8ynckbLhYvV_O/view",
    "questions": [
      {
        "rule": "1.2.1.3",
        "prompt": "What is the maximum required projectile count for an Action Air Handgun Long Course?",
        "correct": "32",
        "options": [
          "32",
          "28",
          "30",
          "34"
        ],
        "note": "",
        "family": "1.2.1.3",
        "id": "aecd6acc9464bc86"
      },
      {
        "rule": "Appendix D, item 9",
        "prompt": "In Action Air Handgun Open Division, what is the maximum number of projectiles per accessible magazine at the Start Signal?",
        "correct": "28",
        "options": [
          "28",
          "26",
          "27",
          "29"
        ],
        "note": "",
        "family": "Appendix D, item 9",
        "id": "fc25f6072531e5f9"
      },
      {
        "rule": "Appendix D, item 12",
        "prompt": "In Action Air Handgun Standard Division, what is the maximum number of projectiles per accessible magazine at the Start Signal?",
        "correct": "18",
        "options": [
          "18",
          "16",
          "17",
          "19"
        ],
        "note": "",
        "family": "Appendix D, item 12",
        "id": "28e4493e3fc36554"
      },
      {
        "rule": "5.6.1",
        "prompt": "Where the host Region’s law imposes no lower limit, what is the maximum projectile energy?",
        "correct": "2 J",
        "options": [
          "2 J",
          "1.5 J",
          "1.8 J",
          "2.2 J"
        ],
        "note": "",
        "family": "5.6.1",
        "id": "b48bc490b6cb481f"
      },
      {
        "rule": "2.1.3",
        "prompt": "While rigid targets are being shot, what minimum distance must be maintained?",
        "correct": "2 m",
        "options": [
          "2 m",
          "1 m",
          "3 m",
          "4 m"
        ],
        "note": "If a Fault Line is used to limit the approach, it must be placed at least 3 m away.",
        "family": "2.1.3",
        "id": "5ce25fc4c99b19b4"
      },
      {
        "rule": "9.4.2",
        "prompt": "Three hits are visible in the scoring area of a single paper no-shoot. What penalty is assessed on that no-shoot?",
        "correct": "−20 points",
        "options": [
          "−20 points",
          "−10 points",
          "−25 points",
          "−30 points"
        ],
        "note": "Two hits at most are penalized on a single paper no-shoot, at 10 points each.",
        "family": "9.4.2",
        "id": "3e71e77f78236b79"
      },
      {
        "rule": "3.2.3",
        "prompt": "Between squads, the written stage briefing needs a clarification for consistency. Who has the authority to amend it?",
        "correct": "Range Master",
        "options": [
          "Range Master",
          "Chief Range Officer",
          "Range Officer",
          "Match Director"
        ],
        "note": "",
        "family": "3.2.3",
        "id": "24be4f173f88362d"
      },
      {
        "rule": "9.1.3",
        "prompt": "A paper target is patched before scoring and the original score cannot be determined. What must the Range Officer order?",
        "correct": "A reshoot of the entire course of fire",
        "options": [
          "A reshoot of the entire course of fire",
          "A reshoot of the affected target only",
          "A rescore using the minimum possible target score",
          "A rescore using the maximum possible target score"
        ],
        "note": "",
        "family": "9.1.3",
        "id": "84e73bae40fef1d1"
      },
      {
        "rule": "10.2.4",
        "prompt": "A competitor fires two shots after the point where a mandatory reload was required, then reloads and fires one more. How many procedural penalties apply for the missed reload?",
        "correct": "2",
        "options": [
          "2",
          "1",
          "3",
          "0"
        ],
        "note": "Count each shot after the required reload point until the reload is performed.",
        "family": "10.2.4",
        "id": "1799ef99d814ab1b"
      },
      {
        "rule": "11.3.1",
        "prompt": "A disputed call is recorded by Match Officials at 13:20. By what time must the written arbitration appeal and applicable fee be submitted to the Range Master?",
        "correct": "14:20",
        "options": [
          "14:20",
          "13:50",
          "14:05",
          "14:50"
        ],
        "note": "The submission window is one hour from the recorded time of the disputed call.",
        "family": "11.3.1",
        "id": "78d8cac4ae7947d1"
      },
      {
        "rule": "9.5.2",
        "prompt": "A hit on a scoring paper target touches the line between two scoring zones. Which value counts?",
        "correct": "The higher of the two zone values",
        "options": [
          "The higher of the two zone values",
          "The lower of the two zone values",
          "The zone containing most of the hit",
          "The zone containing the centre of the hit"
        ],
        "note": "",
        "family": "9.5.2",
        "id": "14d00d4c36342c41"
      },
      {
        "rule": "9.2.2",
        "prompt": "To how many decimal places are individual stage points calculated for stage ranking?",
        "correct": "4",
        "options": [
          "4",
          "2",
          "3",
          "5"
        ],
        "note": "",
        "family": "9.2.2",
        "id": "9e45b306a23c2492"
      },
      {
        "rule": "3.2.4",
        "prompt": "Who sets the duration of the squad’s stage walkthrough?",
        "correct": "Range Officer",
        "options": [
          "Range Officer",
          "Chief Range Officer",
          "Range Master",
          "Match Director"
        ],
        "note": "",
        "family": "3.2.4",
        "id": "2f38cfa6c5d892fc"
      },
      {
        "rule": "3.2.4",
        "prompt": "Moving targets are demonstrated during walkthroughs. What must be consistent across competitors?",
        "correct": "Both duration and frequency",
        "options": [
          "Both duration and frequency",
          "Duration only",
          "Frequency only",
          "Neither duration nor frequency"
        ],
        "note": "",
        "family": "3.2.4",
        "id": "02fb5729cb9e04e5"
      },
      {
        "rule": "4.6.1",
        "prompt": "A competitor adjusts a target stand without authorization during inspection. What penalty may the Range Officer impose for each occurrence?",
        "correct": "One procedural penalty",
        "options": [
          "One procedural penalty",
          "Two procedural penalties",
          "One miss penalty",
          "Two miss penalties"
        ],
        "note": "",
        "family": "4.6.1",
        "id": "5ad2ec3127f1aa75"
      },
      {
        "rule": "6.2.6",
        "prompt": "A competitor is disqualified in a later Division after completing a separate Division at the same match. What happens to the complete earlier score?",
        "correct": "It stays in the results for the earlier Division",
        "options": [
          "It stays in the results for the earlier Division",
          "It stays in the results for the later Division",
          "It is removed from the earlier Division results",
          "It is kept only if the disqualification is overturned"
        ],
        "note": "",
        "family": "6.2.6",
        "id": "2bb09b780d6cd1cf"
      },
      {
        "rule": "6.6.1",
        "prompt": "A competitor misses the scheduled time for a stage. Whose prior approval is required to attempt the stage later?",
        "correct": "Match Director",
        "options": [
          "Match Director",
          "Range Master",
          "Chief Range Officer",
          "Range Officer"
        ],
        "note": "",
        "family": "6.6.1",
        "id": "1313eda1e157a923"
      },
      {
        "rule": "7.1.1",
        "prompt": "Who declares a competitor’s time, scores and penalties on the stage and verifies they are recorded correctly?",
        "correct": "Range Officer",
        "options": [
          "Range Officer",
          "Chief Range Officer",
          "Stats Officer",
          "Range Master"
        ],
        "note": "",
        "family": "7.1.1",
        "id": "0b424efb218f7879"
      },
      {
        "rule": "7.1.2",
        "prompt": "Which official has primary authority over the courses of fire specifically assigned to them, under the Range Master?",
        "correct": "Chief Range Officer",
        "options": [
          "Chief Range Officer",
          "Range Officer",
          "Stats Officer",
          "Match Director"
        ],
        "note": "",
        "family": "7.1.2",
        "id": "c118375a6b2b5323"
      },
      {
        "rule": "7.1.3",
        "prompt": "Who supervises the team that processes score sheets and produces provisional and final results?",
        "correct": "Stats Officer",
        "options": [
          "Stats Officer",
          "Chief Range Officer",
          "Range Master",
          "Quartermaster"
        ],
        "note": "",
        "family": "7.1.3",
        "id": "704c770dd49cbacc"
      },
      {
        "rule": "7.1.4",
        "prompt": "Who is responsible for distributing and maintaining targets, timers and other range equipment?",
        "correct": "Quartermaster",
        "options": [
          "Quartermaster",
          "Chief Range Officer",
          "Range Master",
          "Stats Officer"
        ],
        "note": "",
        "family": "7.1.4",
        "id": "b01b090191e21d17"
      },
      {
        "rule": "7.1.5",
        "prompt": "Which official has overall authority for range safety and rule application across the entire match range?",
        "correct": "Range Master",
        "options": [
          "Range Master",
          "Chief Range Officer",
          "Range Officer",
          "Match Director"
        ],
        "note": "",
        "family": "7.1.5",
        "id": "bfc335ecb25270a0"
      },
      {
        "rule": "8.3.5",
        "prompt": "The Range Officer calls “Stop” during an attempt. Which response is required?",
        "correct": "Stop firing and moving immediately and await instructions",
        "options": [
          "Stop firing and moving immediately and await instructions",
          "Stop firing immediately but finish moving to the next position",
          "Stop moving immediately but finish engaging the current target",
          "Stop firing and moving once the current target has been engaged"
        ],
        "note": "",
        "family": "8.3.5",
        "id": "26049216f3858162"
      },
      {
        "rule": "8.3.8",
        "prompt": "Which declaration authorizes personnel to move forward from the final shooting location for scoring and reset?",
        "correct": "Range Is Clear",
        "options": [
          "Range Is Clear",
          "Are You Ready?",
          "If You Are Finished, Unload And Show Clear",
          "Stop"
        ],
        "note": "",
        "family": "8.3.8",
        "id": "f33938909cd6cc60"
      },
      {
        "rule": "9.1.1",
        "prompt": "During scoring, what minimum distance must a competitor keep from a target unless the Range Officer gives permission to approach?",
        "correct": "1 m",
        "options": [
          "1 m",
          "0.5 m",
          "1.5 m",
          "2 m"
        ],
        "note": "",
        "family": "9.1.1",
        "id": "2d30e249199e32da"
      },
      {
        "rule": "9.1.1",
        "prompt": "A competitor approaches a target closer than 1 m without authorization during scoring. What is the sanction for a first offense?",
        "correct": "A warning",
        "options": [
          "A warning",
          "One automatic procedural penalty",
          "One automatic miss penalty",
          "A warning plus one procedural penalty"
        ],
        "note": "",
        "family": "9.1.1",
        "id": "a0c109e9369b02a9"
      },
      {
        "rule": "9.1.4",
        "prompt": "An unrestored target has extra scoring hits. The Range Officer cannot tell which hits belong to the competitor being scored. What is required?",
        "correct": "A reshoot of the course of fire",
        "options": [
          "A reshoot of the course of fire",
          "A reshoot of the target only",
          "A score using only the lowest possible hits",
          "A score using only the highest possible hits"
        ],
        "note": "",
        "family": "9.1.4",
        "id": "d865d4a181049ade"
      },
      {
        "rule": "9.1.5.1",
        "prompt": "A shot passes wholly through the scoring area of a paper target and then strikes the scoring area of a second paper scoring target. How is the second hit treated?",
        "correct": "It does not count for score",
        "options": [
          "It does not count for score",
          "It scores at its full zone value",
          "It scores at the lowest zone value",
          "It counts as a miss penalty on the second target"
        ],
        "note": "",
        "family": "9.1.5.1",
        "id": "709366270d24cc45"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Under Comstock, which calculation produces a hit factor?",
        "correct": "Target points minus penalties, then divide by time",
        "options": [
          "Target points minus penalties, then divide by time",
          "Target points divided by time, then subtract penalties",
          "Target points minus penalties, then multiply by time",
          "Time divided by target points minus penalties"
        ],
        "note": "",
        "family": "9.2.1.1",
        "id": "2fb26c1e715568ff"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Which competitor receives the maximum stage points available under Comstock?",
        "correct": "The competitor with the highest hit factor",
        "options": [
          "The competitor with the highest hit factor",
          "The competitor with the highest raw target points",
          "The competitor with the fastest recorded time",
          "The competitor with the lowest penalty total"
        ],
        "note": "",
        "family": "9.2.1.1",
        "id": "b034328d19a8c134"
      },
      {
        "rule": "9.2.3",
        "prompt": "Which quantity determines the final ranking within a Division?",
        "correct": "The sum of individual stage points",
        "options": [
          "The sum of individual stage points",
          "The sum of individual stage hit factors",
          "The sum of raw target points before factoring",
          "The average of individual stage placing positions"
        ],
        "note": "",
        "family": "9.2.3",
        "id": "de2a1ae18dce11e2"
      },
      {
        "rule": "9.3.1",
        "prompt": "The Match Director decides a tie must be broken. What does the tiebreaker change?",
        "correct": "Only the final placing of the tied competitors",
        "options": [
          "Only the final placing of the tied competitors",
          "The placing and original match points of the tied competitors",
          "The placing of every competitor in the Division",
          "The original match points without changing the placing"
        ],
        "note": "",
        "family": "9.3.1",
        "id": "0fdc055c5d39575a"
      },
      {
        "rule": "9.6.1",
        "prompt": "After “Range Is Clear” on a stage with ordinary paper targets, who may accompany the scoring official to verify the score?",
        "correct": "The competitor or their delegate",
        "options": [
          "The competitor or their delegate",
          "Only the competitor personally",
          "Only the competitor’s delegate",
          "Only the squad leader"
        ],
        "note": "",
        "family": "9.6.1",
        "id": "aa45c8d054c1ff8b"
      },
      {
        "rule": "9.6.2",
        "prompt": "The Range Officer intends to start scoring paper targets before the competitor finishes the stage. When must competitors be advised?",
        "correct": "During the squad briefing",
        "options": [
          "During the squad briefing",
          "After the Start Signal",
          "After the competitor’s last shot",
          "When provisional results are posted"
        ],
        "note": "",
        "family": "9.6.2",
        "id": "f7c24a4496425719"
      },
      {
        "rule": "9.6.3",
        "prompt": "Neither the competitor nor their delegate verifies a target during scoring. What happens to the right to appeal the scoring of that target?",
        "correct": "It is lost",
        "options": [
          "It is lost",
          "It stays open until the target is reset",
          "It stays open until the score sheet is signed",
          "It stays open until provisional results are posted"
        ],
        "note": "",
        "family": "9.6.3",
        "id": "5ff0c66acb294d60"
      },
      {
        "rule": "9.6.4",
        "prompt": "Who must first receive a challenge to the score on a target before it is patched?",
        "correct": "Range Officer",
        "options": [
          "Range Officer",
          "Chief Range Officer",
          "Range Master",
          "Stats Officer"
        ],
        "note": "",
        "family": "9.6.4",
        "id": "ec57f181f231d00b"
      },
      {
        "rule": "9.7.4",
        "prompt": "A score sheet is signed by both the competitor and Range Officer. With no mutual consent and no arbitration decision, which change is explicitly permitted?",
        "correct": "Correcting an arithmetic error",
        "options": [
          "Correcting an arithmetic error",
          "Re-evaluating a disputed scoring-zone hit",
          "Changing the recorded time based on a squad member’s estimate",
          "Adding a miss based on a later recollection"
        ],
        "note": "",
        "family": "9.7.4",
        "id": "e73cef78ffc6e010"
      },
      {
        "rule": "9.7.5",
        "prompt": "A score sheet has excess entries. To whom must it promptly be referred?",
        "correct": "Range Master",
        "options": [
          "Range Master",
          "Chief Range Officer",
          "Stats Officer",
          "Match Director"
        ],
        "note": "",
        "family": "9.7.5",
        "id": "e89fc7b2c365ea93"
      },
      {
        "rule": "9.7.6.1",
        "prompt": "A stage time is missing from the score sheet and a reshoot is impossible. What is the stage score?",
        "correct": "Zero",
        "options": [
          "Zero",
          "The raw target points minus penalties",
          "The division’s average stage score",
          "The competitor’s average score from the other stages"
        ],
        "note": "",
        "family": "9.7.6.1",
        "id": "164d6cc592c33b90"
      },
      {
        "rule": "9.7.7",
        "prompt": "The original score sheet is lost. The competitor has a legible duplicate acceptable to the Range Master. What is used?",
        "correct": "The competitor’s duplicate",
        "options": [
          "The competitor’s duplicate",
          "A reshoot regardless of the duplicate",
          "A zero score regardless of the duplicate",
          "The squad’s median score"
        ],
        "note": "",
        "family": "9.7.7",
        "id": "9f7a3ce2c9f20e67"
      },
      {
        "rule": "9.8.2",
        "prompt": "At Level IV, where must provisional stage results be posted after all competitors finish?",
        "correct": "At the range and the official match hotel",
        "options": [
          "At the range and the official match hotel",
          "At the range only",
          "At the official match hotel only",
          "At the range and the nearest hotel"
        ],
        "note": "",
        "family": "9.8.2",
        "id": "647b5a758a1113f2"
      },
      {
        "rule": "9.8.3",
        "prompt": "A competitor detects an error in the published provisional stage results. With whom must the appeal be filed?",
        "correct": "Stats Officer",
        "options": [
          "Stats Officer",
          "Chief Range Officer",
          "Range Master",
          "Match Director"
        ],
        "note": "",
        "family": "9.8.3",
        "id": "57791f0ed3b424b0"
      },
      {
        "rule": "9.9.1",
        "prompt": "A moving paper target presents part of its A zone at rest after activation. How is it classified?",
        "correct": "Non-disappearing",
        "options": [
          "Non-disappearing",
          "Disappearing unless the full A zone remains visible",
          "Disappearing unless part of the A zone was visible before activation too",
          "Disappearing because the target moves"
        ],
        "note": "",
        "family": "9.9.1",
        "id": "62043a204521db1d"
      },
      {
        "rule": "9.9.2",
        "prompt": "A genuinely disappearing target is activated before the last shot, but never engaged. Which of the following applies to that target?",
        "correct": "Neither a miss nor a failure-to-engage penalty",
        "options": [
          "Neither a miss nor a failure-to-engage penalty",
          "A miss penalty only",
          "A failure-to-engage penalty only",
          "Both a miss and a failure-to-engage penalty"
        ],
        "note": "",
        "family": "9.9.2",
        "id": "a24aa249ff5c8fb5"
      },
      {
        "rule": "9.9.3",
        "prompt": "A stationary target is partly concealed by a moving vision barrier. Part of its A zone remains exposed after activation. How is the target classified?",
        "correct": "Non-disappearing",
        "options": [
          "Non-disappearing",
          "Disappearing unless its full A zone is exposed",
          "Disappearing because the barrier moves",
          "Disappearing unless the barrier itself is a scoring target"
        ],
        "note": "",
        "family": "9.9.3",
        "id": "32b991228b675bae"
      },
      {
        "rule": "10.1.1",
        "prompt": "What must be recorded for procedural penalties on the score sheet?",
        "correct": "Both the number and the reason",
        "options": [
          "Both the number and the reason",
          "The number only",
          "The reason only",
          "The number and the competitor’s agreement"
        ],
        "note": "",
        "family": "10.1.1",
        "id": "98d216ec3d12862b"
      },
      {
        "rule": "10.1.4",
        "prompt": "A competitor fires while faulting a line, then fires at the same target from inside the line. What happens to the original applicable fault penalty?",
        "correct": "It still applies",
        "options": [
          "It still applies",
          "It is removed if the later shot hits",
          "It is removed if both shots hit",
          "It is changed to a miss if the later shot hits"
        ],
        "note": "",
        "family": "10.1.4",
        "id": "11b671e372d1b1db"
      },
      {
        "rule": "10.2.1",
        "prompt": "A competitor touches the ground beyond a Fault Line while shooting without gaining a significant advantage. How is the penalty normally counted?",
        "correct": "One per occurrence",
        "options": [
          "One per occurrence",
          "One per shot regardless of advantage",
          "One per target engaged",
          "One per scoring hit"
        ],
        "note": "",
        "family": "10.2.1",
        "id": "2687007cbe9cade2"
      },
      {
        "rule": "10.2.2",
        "prompt": "A competitor ignores a written stage procedure and gains a significant advantage. What penalty basis may apply in place of a single penalty for the occurrence?",
        "correct": "One per shot fired during the breach, subject to the applicable cap",
        "options": [
          "One per shot fired during the breach, subject to the applicable cap",
          "One per scoring hit during the breach, subject to the applicable cap",
          "One per target engaged during the breach, subject to the applicable cap",
          "One per shot fired after the breach ended, subject to the applicable cap"
        ],
        "note": "",
        "family": "10.2.2",
        "id": "acf60b7a43e61d24"
      },
      {
        "rule": "10.2.6",
        "prompt": "The Range Officer stops a competitor in time for a first instance of creeping after “Standby” and before the signal. What follows?",
        "correct": "A warning and a restart",
        "options": [
          "A warning and a restart",
          "A procedural penalty and a restart",
          "A warning without a restart",
          "A procedural penalty without a restart"
        ],
        "note": "",
        "family": "10.2.6",
        "id": "d0aa312c30a9e68f"
      },
      {
        "rule": "10.2.7",
        "prompt": "A competitor fails to engage a non-disappearing scoring target. What normally applies?",
        "correct": "One procedural per target plus applicable misses",
        "options": [
          "One procedural per target plus applicable misses",
          "One procedural per target instead of applicable misses",
          "One procedural per missed hit plus applicable misses",
          "Applicable misses only"
        ],
        "note": "",
        "family": "10.2.7",
        "id": "3b6f1c3d22f37ba8"
      },
      {
        "rule": "10.3.2",
        "prompt": "After issuing a disqualification, who must be notified as soon as possible?",
        "correct": "Range Master",
        "options": [
          "Range Master",
          "Chief Range Officer",
          "Stats Officer",
          "Match Director"
        ],
        "note": "",
        "family": "10.3.2",
        "id": "1e60f82bfdebcdb7"
      },
      {
        "rule": "11.1.3",
        "prompt": "A competitor disputes an initial Range Officer ruling. Which is the normal next level before the Range Master?",
        "correct": "Chief Range Officer",
        "options": [
          "Chief Range Officer",
          "Stats Officer",
          "Match Director",
          "Quartermaster"
        ],
        "note": "",
        "family": "11.1.3",
        "id": "e269dacafee493b9"
      },
      {
        "rule": "11.3.2",
        "prompt": "When must the Arbitration Committee reach its decision?",
        "correct": "Within 24 hours of the request or before final results are declared, whichever comes first",
        "options": [
          "Within 24 hours of the request or before final results are declared, whichever comes first",
          "Within 24 hours of the request or before final results are declared, whichever comes last",
          "Within 12 hours of the request or before final results are declared, whichever comes first",
          "Within 24 hours of the disputed call or before final results are declared, whichever comes first"
        ],
        "note": "",
        "family": "11.3.2",
        "id": "ab7a04fd99f427cc"
      },
      {
        "rule": "11.4.1",
        "prompt": "At a Level III match, which amount determines the arbitration fee in local currency?",
        "correct": "The lower of US$100 and the maximum individual entry fee",
        "options": [
          "The lower of US$100 and the maximum individual entry fee",
          "The higher of US$100 and the maximum individual entry fee",
          "The lower of US$100 and the minimum individual entry fee",
          "The maximum individual entry fee regardless of US$100"
        ],
        "note": "",
        "family": "11.4.1",
        "id": "d660fd589e3be129"
      },
      {
        "rule": "11.6.2",
        "prompt": "Who implements and posts the Arbitration Committee’s decision?",
        "correct": "Range Master",
        "options": [
          "Range Master",
          "Chief Range Officer",
          "Stats Officer",
          "Match Director"
        ],
        "note": "",
        "family": "11.6.2",
        "id": "b42ae1c861a560b7"
      },
      {
        "rule": "11.6.4",
        "prompt": "For what can a recorded Arbitration Committee decision serve as precedent?",
        "correct": "A similar subsequent incident at the same match",
        "options": [
          "A similar subsequent incident at the same match",
          "A similar earlier incident at the same match",
          "Any subsequent incident at the same match",
          "A similar incident only at the next match"
        ],
        "note": "",
        "family": "11.6.4",
        "id": "3487c77fa189a244"
      },
      {
        "rule": "11.7.1",
        "prompt": "May someone other than the competitor involved submit an appeal on a third-party basis?",
        "correct": "Yes, under the same Chapter 11 provisions",
        "options": [
          "Yes, under the same Chapter 11 provisions",
          "Yes, with a separate deadline set by the squad",
          "Yes, but only at Level IV and above",
          "No, only the competitor involved may appeal"
        ],
        "note": "",
        "family": "11.7.1",
        "id": "efd6cd40b8400be5"
      },
      {
        "rule": "1.2.1.1",
        "prompt": "A proposed Short Course requires 13 projectiles to complete. To what maximum must the required count be reduced?",
        "correct": "12",
        "options": [
          "12",
          "10",
          "11",
          "13"
        ],
        "note": "",
        "family": "1.2.1.1",
        "id": "70314aab4783d45e"
      },
      {
        "rule": "1.2.1.2",
        "prompt": "A proposed Medium Course requires 26 projectiles to complete. What maximum required count applies?",
        "correct": "24",
        "options": [
          "24",
          "22",
          "23",
          "25"
        ],
        "note": "",
        "family": "1.2.1.2",
        "id": "6101f3f8c50fd83b"
      },
      {
        "rule": "1.2.1.3",
        "prompt": "What is the maximum number of scoring hits a Long Course may require from a single location or view?",
        "correct": "9",
        "options": [
          "9",
          "8",
          "10",
          "11"
        ],
        "note": "",
        "family": "1.2.1.3",
        "id": "b640843f849ad83b"
      },
      {
        "rule": "5.6.1",
        "prompt": "The host Region’s law limits projectile energy to 1.5 J. What limit applies at this match?",
        "correct": "1.5 J",
        "options": [
          "1.5 J",
          "1.75 J",
          "2.0 J",
          "2.5 J"
        ],
        "note": "",
        "family": "5.6.1",
        "id": "c12586e0a0ad5d86"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Under Comstock, a competitor earns 35 target points, receives 10 penalty points and finishes in 5.00 seconds. What is the hit factor, rounded to four decimals?",
        "correct": "5.0000",
        "options": [
          "5.0000",
          "7.0000",
          "6.0000",
          "9.0000"
        ],
        "note": "Subtract penalties from target points before dividing by time.",
        "family": "comstock-hit-factor",
        "id": "21196cb03e879fbf"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "A 40-point stage is won with a hit factor of 8. A competitor records a hit factor of 4.0. How many stage points does the competitor earn?",
        "correct": "20.00",
        "options": [
          "20.00",
          "18.00",
          "19.00",
          "21.00"
        ],
        "note": "Multiply the available stage points by the competitor’s hit factor divided by the winner’s hit factor.",
        "family": "comstock-stage-points",
        "id": "3b223b933ed2c978"
      },
      {
        "rule": "9.2.3",
        "prompt": "A competitor earns 31.2750, 24.6425 and 19.3850 stage points in the three stages of a match. What is the match total?",
        "correct": "75.3025",
        "options": [
          "75.3025",
          "75.4025",
          "75.2025",
          "76.3025"
        ],
        "note": "",
        "family": "match-total",
        "id": "84eed92ac69be18f"
      },
      {
        "rule": "10.2.4",
        "prompt": "A competitor fires 1 shots before a mandatory reload point, 1 shots after it without reloading, and 2 shots after finally reloading. How many procedural penalties apply to the reload violation?",
        "correct": "1",
        "options": [
          "1",
          "0",
          "2",
          "3"
        ],
        "note": "Count only shots after the required reload point and before the reload.",
        "family": "10.2.4",
        "id": "b13c6a5f1fe012ab"
      },
      {
        "rule": "10.2.5",
        "prompt": "In a Cooper Tunnel, direct contact with the overhead material drops 1 pieces. Bumping an upright drops another 1. How many procedural penalties apply?",
        "correct": "1",
        "options": [
          "1",
          "0",
          "2",
          "3"
        ],
        "note": "Pieces that fall from striking an upright are exempt.",
        "family": "10.2.5",
        "id": "2bc7b9ec0789807c"
      },
      {
        "rule": "10.1.2",
        "prompt": "The Range Officer assesses 3 procedural penalties. What is the total point deduction for these penalties?",
        "correct": "30 points",
        "options": [
          "30 points",
          "10 points",
          "20 points",
          "40 points"
        ],
        "note": "",
        "family": "10.1.2",
        "id": "b3c678f4a8413c91"
      },
      {
        "rule": "10.2.1",
        "prompt": "A competitor fires 2 shots on each of 2 separate Fault Line breaches, re-entering fully between breaches and gaining no significant advantage. How many procedural penalties apply?",
        "correct": "2",
        "options": [
          "2",
          "1",
          "3",
          "4"
        ],
        "note": "With no significant advantage, count the separate occurrences.",
        "family": "10.2.1",
        "id": "65d0e1630759337f"
      },
      {
        "rule": "11.3.1",
        "prompt": "Match Officials record a disputed call at 08:00. The competitor talks to the Chief Range Officer 15 minutes later. What is the deadline to submit a written arbitration appeal and fee to the Range Master?",
        "correct": "09:00",
        "options": [
          "09:00",
          "08:45",
          "09:15",
          "09:30"
        ],
        "note": "",
        "family": "11.3.1",
        "id": "e73f27d96024f83f"
      },
      {
        "rule": "9.8.3",
        "prompt": "The provisional results show a timestamp of 12:00, but were actually posted at 12:11. What is the deadline for a competitor to file a results appeal with the Stats Officer?",
        "correct": "13:11",
        "options": [
          "13:11",
          "12:56",
          "13:26",
          "13:41"
        ],
        "note": "",
        "family": "9.8.3",
        "id": "dc0d2ecaa091ddbb"
      },
      {
        "rule": "11.4.1",
        "prompt": "At a Level III match the maximum individual entry fee is equivalent to US$58. What is the arbitration fee equivalent in local currency?",
        "correct": "US$58",
        "options": [
          "US$58",
          "US$100",
          "US$53",
          "US$63"
        ],
        "note": "Use the lower of US$100 and the maximum individual entry fee.",
        "family": "11.4.1",
        "id": "34d89f1347aee01f"
      },
      {
        "rule": "9.4.2",
        "prompt": "Three paper no-shoots show 1, 1 and 0 hits in their scoring areas, respectively. What is the combined point deduction?",
        "correct": "20 points",
        "options": [
          "20 points",
          "10 points",
          "25 points",
          "30 points"
        ],
        "note": "Count 10 points per hit, capped at two hits on each paper no-shoot.",
        "family": "9.4.2",
        "id": "2ed02131abe1ee01"
      },
      {
        "rule": "10.2.7",
        "prompt": "A competitor leaves 3 non-disappearing scoring targets completely unengaged. They engage the other 2 targets. Before adding any misses, how many failure-to-engage procedurals apply?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "",
        "family": "10.2.7",
        "id": "74b0110053b22816"
      },
      {
        "rule": "10.2.3",
        "prompt": "While faulting a line, a competitor fires 7 shots and gains a significant advantage. From that position a maximum of 2 scoring hits can be attained. What is the maximum number of procedurals for that fault?",
        "correct": "2",
        "options": [
          "2",
          "1",
          "3",
          "4"
        ],
        "note": "Multiple penalties for the fault are capped by the scoring hits attainable.",
        "family": "10.2.3",
        "id": "a67f0a3b80d3499d"
      },
      {
        "rule": "11.3.2",
        "prompt": "The Arbitration Committee receives a request at 10:00 on Saturday. Final results are scheduled to be declared at 09:40 on Sunday. What is the latest time the committee may rule under that schedule?",
        "correct": "Before 09:40 on Sunday",
        "options": [
          "Before 09:40 on Sunday",
          "By 10:00 on Sunday",
          "By 10:20 on Sunday",
          "Before 09:40 on Monday"
        ],
        "note": "The earlier limit is the declaration of final results.",
        "family": "11.3.2",
        "id": "bc60703e734bf1ae"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Under Comstock, a competitor earns 40 target points, receives 20 penalty points and finishes in 6.00 seconds. What is the hit factor, rounded to four decimals?",
        "correct": "3.3333",
        "options": [
          "3.3333",
          "6.6667",
          "5.0000",
          "10.0000"
        ],
        "note": "Subtract penalties from target points before dividing by time.",
        "family": "comstock-hit-factor",
        "id": "221b267a71db93cf"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "A 50-point stage is won with a hit factor of 9. A competitor records a hit factor of 5.4. How many stage points does the competitor earn?",
        "correct": "30.00",
        "options": [
          "30.00",
          "28.00",
          "29.00",
          "31.00"
        ],
        "note": "Multiply the available stage points by the competitor’s hit factor divided by the winner’s hit factor.",
        "family": "comstock-stage-points",
        "id": "9ba6132933144df4"
      },
      {
        "rule": "9.2.3",
        "prompt": "A competitor earns 33.2750, 25.6425 and 22.3850 stage points in the three stages of a match. What is the match total?",
        "correct": "81.3025",
        "options": [
          "81.3025",
          "81.4025",
          "81.2025",
          "82.3025"
        ],
        "note": "",
        "family": "match-total",
        "id": "2a2ddc7a971836c3"
      },
      {
        "rule": "10.2.4",
        "prompt": "A competitor fires 2 shots before a mandatory reload point, 1 shots after it without reloading, and 3 shots after finally reloading. How many procedural penalties apply to the reload violation?",
        "correct": "1",
        "options": [
          "1",
          "0",
          "2",
          "3"
        ],
        "note": "Count only shots after the required reload point and before the reload.",
        "family": "10.2.4",
        "id": "762cf162802b119a"
      },
      {
        "rule": "10.2.5",
        "prompt": "In a Cooper Tunnel, direct contact with the overhead material drops 2 pieces. Bumping an upright drops another 1. How many procedural penalties apply?",
        "correct": "2",
        "options": [
          "2",
          "1",
          "3",
          "4"
        ],
        "note": "Pieces that fall from striking an upright are exempt.",
        "family": "10.2.5",
        "id": "530bd84ef8b47216"
      },
      {
        "rule": "10.1.2",
        "prompt": "The Range Officer assesses 4 procedural penalties. What is the total point deduction for these penalties?",
        "correct": "40 points",
        "options": [
          "40 points",
          "20 points",
          "30 points",
          "50 points"
        ],
        "note": "",
        "family": "10.1.2",
        "id": "a7aaa4caf4f065cd"
      },
      {
        "rule": "10.2.1",
        "prompt": "A competitor fires 2 shots on each of 3 separate Fault Line breaches, re-entering fully between breaches and gaining no significant advantage. How many procedural penalties apply?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "With no significant advantage, count the separate occurrences.",
        "family": "10.2.1",
        "id": "b6d742daab217181"
      },
      {
        "rule": "11.3.1",
        "prompt": "Match Officials record a disputed call at 08:23. The competitor talks to the Chief Range Officer 15 minutes later. What is the deadline to submit a written arbitration appeal and fee to the Range Master?",
        "correct": "09:23",
        "options": [
          "09:23",
          "09:08",
          "09:38",
          "09:53"
        ],
        "note": "",
        "family": "11.3.1",
        "id": "fd2b9c3ae8f0e93c"
      },
      {
        "rule": "9.8.3",
        "prompt": "The provisional results show a timestamp of 12:17, but were actually posted at 12:29. What is the deadline for a competitor to file a results appeal with the Stats Officer?",
        "correct": "13:29",
        "options": [
          "13:29",
          "13:14",
          "13:44",
          "13:59"
        ],
        "note": "",
        "family": "9.8.3",
        "id": "75719e2f068672a0"
      },
      {
        "rule": "11.4.1",
        "prompt": "At a Level III match the maximum individual entry fee is equivalent to US$115. What is the arbitration fee equivalent in local currency?",
        "correct": "US$100",
        "options": [
          "US$100",
          "US$115",
          "US$95",
          "US$105"
        ],
        "note": "Use the lower of US$100 and the maximum individual entry fee.",
        "family": "11.4.1",
        "id": "7047ed8525176aec"
      },
      {
        "rule": "9.4.2",
        "prompt": "Three paper no-shoots show 2, 1 and 0 hits in their scoring areas, respectively. What is the combined point deduction?",
        "correct": "30 points",
        "options": [
          "30 points",
          "20 points",
          "35 points",
          "40 points"
        ],
        "note": "Count 10 points per hit, capped at two hits on each paper no-shoot.",
        "family": "9.4.2",
        "id": "c4db7b7a451a5a7d"
      },
      {
        "rule": "10.2.7",
        "prompt": "A competitor leaves 4 non-disappearing scoring targets completely unengaged. They engage the other 3 targets. Before adding any misses, how many failure-to-engage procedurals apply?",
        "correct": "4",
        "options": [
          "4",
          "3",
          "5",
          "6"
        ],
        "note": "",
        "family": "10.2.7",
        "id": "5f3e9af5d086e70f"
      },
      {
        "rule": "10.2.3",
        "prompt": "While faulting a line, a competitor fires 8 shots and gains a significant advantage. From that position a maximum of 3 scoring hits can be attained. What is the maximum number of procedurals for that fault?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "Multiple penalties for the fault are capped by the scoring hits attainable.",
        "family": "10.2.3",
        "id": "ebc3eaec4c4e60c1"
      },
      {
        "rule": "11.3.2",
        "prompt": "The Arbitration Committee receives a request at 10:19 on Saturday. The Match Director will declare the results final at 10:39 on Sunday. What deadline applies to the committee’s decision?",
        "correct": "By 10:19 on Sunday",
        "options": [
          "By 10:19 on Sunday",
          "Before 10:39 on Sunday",
          "By 09:59 on Sunday",
          "By 10:19 on Monday"
        ],
        "note": "The 24-hour deadline arrives before the declaration of final results.",
        "family": "11.3.2",
        "id": "e4ad89d611716d41"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Under Comstock, a competitor earns 45 target points, receives 30 penalty points and finishes in 7.00 seconds. What is the hit factor, rounded to four decimals?",
        "correct": "2.1429",
        "options": [
          "2.1429",
          "6.4286",
          "4.2857",
          "10.7143"
        ],
        "note": "Subtract penalties from target points before dividing by time.",
        "family": "comstock-hit-factor",
        "id": "811fb111204f1db3"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "A 60-point stage is won with a hit factor of 10. A competitor records a hit factor of 7.0. How many stage points does the competitor earn?",
        "correct": "42.00",
        "options": [
          "42.00",
          "40.00",
          "41.00",
          "43.00"
        ],
        "note": "Multiply the available stage points by the competitor’s hit factor divided by the winner’s hit factor.",
        "family": "comstock-stage-points",
        "id": "52ec8e4e492a485c"
      },
      {
        "rule": "9.2.3",
        "prompt": "A competitor earns 35.2750, 26.6425 and 25.3850 stage points in the three stages of a match. What is the match total?",
        "correct": "87.3025",
        "options": [
          "87.3025",
          "87.4025",
          "87.2025",
          "88.3025"
        ],
        "note": "",
        "family": "match-total",
        "id": "9de1b28afcc923d6"
      },
      {
        "rule": "10.2.4",
        "prompt": "A competitor fires 3 shots before a mandatory reload point, 1 shots after it without reloading, and 4 shots after finally reloading. How many procedural penalties apply to the reload violation?",
        "correct": "1",
        "options": [
          "1",
          "0",
          "2",
          "3"
        ],
        "note": "Count only shots after the required reload point and before the reload.",
        "family": "10.2.4",
        "id": "881a8b7504b60cad"
      },
      {
        "rule": "10.2.5",
        "prompt": "In a Cooper Tunnel, direct contact with the overhead material drops 3 pieces. Bumping an upright drops another 1. How many procedural penalties apply?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "Pieces that fall from striking an upright are exempt.",
        "family": "10.2.5",
        "id": "5137b4943cba8ec9"
      },
      {
        "rule": "10.1.2",
        "prompt": "The Range Officer assesses 5 procedural penalties. What is the total point deduction for these penalties?",
        "correct": "50 points",
        "options": [
          "50 points",
          "30 points",
          "40 points",
          "60 points"
        ],
        "note": "",
        "family": "10.1.2",
        "id": "8d6f73489143fdbe"
      },
      {
        "rule": "10.2.1",
        "prompt": "A competitor fires 2 shots on each of 4 separate Fault Line breaches, re-entering fully between breaches and gaining no significant advantage. How many procedural penalties apply?",
        "correct": "4",
        "options": [
          "4",
          "3",
          "5",
          "6"
        ],
        "note": "With no significant advantage, count the separate occurrences.",
        "family": "10.2.1",
        "id": "bfd45046f19468df"
      },
      {
        "rule": "11.3.1",
        "prompt": "Match Officials record a disputed call at 08:46. The competitor talks to the Chief Range Officer 15 minutes later. What is the deadline to submit a written arbitration appeal and fee to the Range Master?",
        "correct": "09:46",
        "options": [
          "09:46",
          "09:31",
          "10:01",
          "10:16"
        ],
        "note": "",
        "family": "11.3.1",
        "id": "1646ce84911500d6"
      },
      {
        "rule": "9.8.3",
        "prompt": "The provisional results show a timestamp of 12:34, but were actually posted at 12:47. What is the deadline for a competitor to file a results appeal with the Stats Officer?",
        "correct": "13:47",
        "options": [
          "13:47",
          "13:32",
          "14:02",
          "14:17"
        ],
        "note": "",
        "family": "9.8.3",
        "id": "f183f4405bae9693"
      },
      {
        "rule": "11.4.1",
        "prompt": "At a Level III match the maximum individual entry fee is equivalent to US$62. What is the arbitration fee equivalent in local currency?",
        "correct": "US$62",
        "options": [
          "US$62",
          "US$100",
          "US$57",
          "US$67"
        ],
        "note": "Use the lower of US$100 and the maximum individual entry fee.",
        "family": "11.4.1",
        "id": "2e62692cf1be487d"
      },
      {
        "rule": "9.4.2",
        "prompt": "Three paper no-shoots show 3, 1 and 0 hits in their scoring areas, respectively. What is the combined point deduction?",
        "correct": "30 points",
        "options": [
          "30 points",
          "20 points",
          "35 points",
          "40 points"
        ],
        "note": "Count 10 points per hit, capped at two hits on each paper no-shoot.",
        "family": "9.4.2",
        "id": "9d9d5b6426560ab7"
      },
      {
        "rule": "10.2.7",
        "prompt": "A competitor leaves 5 non-disappearing scoring targets completely unengaged. They engage the other 4 targets. Before adding any misses, how many failure-to-engage procedurals apply?",
        "correct": "5",
        "options": [
          "5",
          "4",
          "6",
          "7"
        ],
        "note": "",
        "family": "10.2.7",
        "id": "0d8a48f3191f4847"
      },
      {
        "rule": "10.2.3",
        "prompt": "While faulting a line, a competitor fires 9 shots and gains a significant advantage. From that position a maximum of 4 scoring hits can be attained. What is the maximum number of procedurals for that fault?",
        "correct": "4",
        "options": [
          "4",
          "3",
          "5",
          "6"
        ],
        "note": "Multiple penalties for the fault are capped by the scoring hits attainable.",
        "family": "10.2.3",
        "id": "0ef941d62c1d78e5"
      },
      {
        "rule": "11.3.2",
        "prompt": "The Arbitration Committee receives a request at 10:38 on Saturday. Final results are scheduled to be declared at 10:18 on Sunday. What is the latest time the committee may rule under that schedule?",
        "correct": "Before 10:18 on Sunday",
        "options": [
          "Before 10:18 on Sunday",
          "By 10:38 on Sunday",
          "By 10:58 on Sunday",
          "Before 10:18 on Monday"
        ],
        "note": "The earlier limit is the declaration of final results.",
        "family": "11.3.2",
        "id": "de38b1edabf021d6"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Under Comstock, a competitor earns 50 target points, receives 10 penalty points and finishes in 8.00 seconds. What is the hit factor, rounded to four decimals?",
        "correct": "5.0000",
        "options": [
          "5.0000",
          "6.2500",
          "5.6250",
          "7.5000"
        ],
        "note": "Subtract penalties from target points before dividing by time.",
        "family": "comstock-hit-factor",
        "id": "a9248c139a4373b7"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "A 70-point stage is won with a hit factor of 8. A competitor records a hit factor of 6.00. How many stage points does the competitor earn?",
        "correct": "52.50",
        "options": [
          "52.50",
          "50.50",
          "51.50",
          "53.50"
        ],
        "note": "Multiply the available stage points by the competitor’s hit factor divided by the winner’s hit factor.",
        "family": "comstock-stage-points",
        "id": "47f4cad0ab27e8ba"
      },
      {
        "rule": "9.2.3",
        "prompt": "A competitor earns 37.2750, 27.6425 and 28.3850 stage points in the three stages of a match. What is the match total?",
        "correct": "93.3025",
        "options": [
          "93.3025",
          "93.4025",
          "93.2025",
          "94.3025"
        ],
        "note": "",
        "family": "match-total",
        "id": "c9e15cec5e09ea03"
      },
      {
        "rule": "10.2.4",
        "prompt": "A competitor fires 4 shots before a mandatory reload point, 2 shots after it without reloading, and 2 shots after finally reloading. How many procedural penalties apply to the reload violation?",
        "correct": "2",
        "options": [
          "2",
          "1",
          "3",
          "4"
        ],
        "note": "Count only shots after the required reload point and before the reload.",
        "family": "10.2.4",
        "id": "006d194da76716db"
      },
      {
        "rule": "10.2.5",
        "prompt": "In a Cooper Tunnel, direct contact with the overhead material drops 4 pieces. Bumping an upright drops another 1. How many procedural penalties apply?",
        "correct": "4",
        "options": [
          "4",
          "3",
          "5",
          "6"
        ],
        "note": "Pieces that fall from striking an upright are exempt.",
        "family": "10.2.5",
        "id": "8e37dab2e4ff09d1"
      },
      {
        "rule": "10.1.2",
        "prompt": "The Range Officer assesses 6 procedural penalties. What is the total point deduction for these penalties?",
        "correct": "60 points",
        "options": [
          "60 points",
          "40 points",
          "50 points",
          "70 points"
        ],
        "note": "",
        "family": "10.1.2",
        "id": "1b476140e351fce9"
      },
      {
        "rule": "10.2.1",
        "prompt": "A competitor fires 2 shots on each of 5 separate Fault Line breaches, re-entering fully between breaches and gaining no significant advantage. How many procedural penalties apply?",
        "correct": "5",
        "options": [
          "5",
          "4",
          "6",
          "7"
        ],
        "note": "With no significant advantage, count the separate occurrences.",
        "family": "10.2.1",
        "id": "e6660f0d591b4f7d"
      },
      {
        "rule": "11.3.1",
        "prompt": "Match Officials record a disputed call at 09:09. The competitor talks to the Chief Range Officer 15 minutes later. What is the deadline to submit a written arbitration appeal and fee to the Range Master?",
        "correct": "10:09",
        "options": [
          "10:09",
          "09:54",
          "10:24",
          "10:39"
        ],
        "note": "",
        "family": "11.3.1",
        "id": "3a39e0f7f339bf48"
      },
      {
        "rule": "9.8.3",
        "prompt": "The provisional results show a timestamp of 12:51, but were actually posted at 13:05. What is the deadline for a competitor to file a results appeal with the Stats Officer?",
        "correct": "14:05",
        "options": [
          "14:05",
          "13:50",
          "14:20",
          "14:35"
        ],
        "note": "",
        "family": "9.8.3",
        "id": "f52890a6657389c5"
      },
      {
        "rule": "11.4.1",
        "prompt": "At a Level III match the maximum individual entry fee is equivalent to US$121. What is the arbitration fee equivalent in local currency?",
        "correct": "US$100",
        "options": [
          "US$100",
          "US$121",
          "US$95",
          "US$105"
        ],
        "note": "Use the lower of US$100 and the maximum individual entry fee.",
        "family": "11.4.1",
        "id": "f8dd8ce82b7d6cb7"
      },
      {
        "rule": "9.4.2",
        "prompt": "Three paper no-shoots show 1, 2 and 0 hits in their scoring areas, respectively. What is the combined point deduction?",
        "correct": "30 points",
        "options": [
          "30 points",
          "20 points",
          "35 points",
          "40 points"
        ],
        "note": "Count 10 points per hit, capped at two hits on each paper no-shoot.",
        "family": "9.4.2",
        "id": "f4db1f910c9647bc"
      },
      {
        "rule": "10.2.7",
        "prompt": "A competitor leaves 6 non-disappearing scoring targets completely unengaged. They engage the other 5 targets. Before adding any misses, how many failure-to-engage procedurals apply?",
        "correct": "6",
        "options": [
          "6",
          "5",
          "7",
          "8"
        ],
        "note": "",
        "family": "10.2.7",
        "id": "d6027ed7afcbf0dc"
      },
      {
        "rule": "10.2.3",
        "prompt": "While faulting a line, a competitor fires 10 shots and gains a significant advantage. From that position a maximum of 5 scoring hits can be attained. What is the maximum number of procedurals for that fault?",
        "correct": "5",
        "options": [
          "5",
          "4",
          "6",
          "7"
        ],
        "note": "Multiple penalties for the fault are capped by the scoring hits attainable.",
        "family": "10.2.3",
        "id": "78f0f08139c28834"
      },
      {
        "rule": "11.3.2",
        "prompt": "The Arbitration Committee receives a request at 10:57 on Saturday. The Match Director will declare the results final at 11:17 on Sunday. What deadline applies to the committee’s decision?",
        "correct": "By 10:57 on Sunday",
        "options": [
          "By 10:57 on Sunday",
          "Before 11:17 on Sunday",
          "By 10:37 on Sunday",
          "By 10:57 on Monday"
        ],
        "note": "The 24-hour deadline arrives before the declaration of final results.",
        "family": "11.3.2",
        "id": "682a783c53b03f55"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Under Comstock, a competitor earns 55 target points, receives 20 penalty points and finishes in 5.00 seconds. What is the hit factor, rounded to four decimals?",
        "correct": "7.0000",
        "options": [
          "7.0000",
          "11.0000",
          "9.0000",
          "15.0000"
        ],
        "note": "Subtract penalties from target points before dividing by time.",
        "family": "comstock-hit-factor",
        "id": "6b4917642dba515c"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "A 80-point stage is won with a hit factor of 9. A competitor records a hit factor of 7.2. How many stage points does the competitor earn?",
        "correct": "64.00",
        "options": [
          "64.00",
          "62.00",
          "63.00",
          "65.00"
        ],
        "note": "Multiply the available stage points by the competitor’s hit factor divided by the winner’s hit factor.",
        "family": "comstock-stage-points",
        "id": "28ebb69b1638fbdf"
      },
      {
        "rule": "9.2.3",
        "prompt": "A competitor earns 39.2750, 28.6425 and 31.3850 stage points in the three stages of a match. What is the match total?",
        "correct": "99.3025",
        "options": [
          "99.3025",
          "99.4025",
          "99.2025",
          "100.3025"
        ],
        "note": "",
        "family": "match-total",
        "id": "5f4e872e5af06f31"
      },
      {
        "rule": "10.2.4",
        "prompt": "A competitor fires 1 shots before a mandatory reload point, 2 shots after it without reloading, and 3 shots after finally reloading. How many procedural penalties apply to the reload violation?",
        "correct": "2",
        "options": [
          "2",
          "1",
          "3",
          "4"
        ],
        "note": "Count only shots after the required reload point and before the reload.",
        "family": "10.2.4",
        "id": "6e024231dd5c61ec"
      },
      {
        "rule": "10.2.5",
        "prompt": "In a Cooper Tunnel, direct contact with the overhead material drops 1 pieces. Bumping an upright drops another 2. How many procedural penalties apply?",
        "correct": "1",
        "options": [
          "1",
          "0",
          "2",
          "3"
        ],
        "note": "Pieces that fall from striking an upright are exempt.",
        "family": "10.2.5",
        "id": "a494bfc8fae26d63"
      },
      {
        "rule": "10.1.2",
        "prompt": "The Range Officer assesses 7 procedural penalties. What is the total point deduction for these penalties?",
        "correct": "70 points",
        "options": [
          "70 points",
          "50 points",
          "60 points",
          "80 points"
        ],
        "note": "",
        "family": "10.1.2",
        "id": "47ba4f62b92a41c2"
      },
      {
        "rule": "10.2.1",
        "prompt": "A competitor fires 3 shots on each of 2 separate Fault Line breaches, re-entering fully between breaches and gaining no significant advantage. How many procedural penalties apply?",
        "correct": "2",
        "options": [
          "2",
          "1",
          "3",
          "4"
        ],
        "note": "With no significant advantage, count the separate occurrences.",
        "family": "10.2.1",
        "id": "ae87a1170740806b"
      },
      {
        "rule": "11.3.1",
        "prompt": "Match Officials record a disputed call at 09:32. The competitor talks to the Chief Range Officer 15 minutes later. What is the deadline to submit a written arbitration appeal and fee to the Range Master?",
        "correct": "10:32",
        "options": [
          "10:32",
          "10:17",
          "10:47",
          "11:02"
        ],
        "note": "",
        "family": "11.3.1",
        "id": "6588158dd42d9117"
      },
      {
        "rule": "9.8.3",
        "prompt": "The provisional results show a timestamp of 13:08, but were actually posted at 13:19. What is the deadline for a competitor to file a results appeal with the Stats Officer?",
        "correct": "14:19",
        "options": [
          "14:19",
          "14:04",
          "14:34",
          "14:49"
        ],
        "note": "",
        "family": "9.8.3",
        "id": "29a955b04f06e0ec"
      },
      {
        "rule": "11.4.1",
        "prompt": "At a Level III match the maximum individual entry fee is equivalent to US$66. What is the arbitration fee equivalent in local currency?",
        "correct": "US$66",
        "options": [
          "US$66",
          "US$100",
          "US$61",
          "US$71"
        ],
        "note": "Use the lower of US$100 and the maximum individual entry fee.",
        "family": "11.4.1",
        "id": "ee9ce1e4aa409d25"
      },
      {
        "rule": "9.4.2",
        "prompt": "Three paper no-shoots show 2, 2 and 0 hits in their scoring areas, respectively. What is the combined point deduction?",
        "correct": "40 points",
        "options": [
          "40 points",
          "30 points",
          "45 points",
          "50 points"
        ],
        "note": "Count 10 points per hit, capped at two hits on each paper no-shoot.",
        "family": "9.4.2",
        "id": "402cb42239c9c1f8"
      },
      {
        "rule": "10.2.7",
        "prompt": "A competitor leaves 3 non-disappearing scoring targets completely unengaged. They engage the other 6 targets. Before adding any misses, how many failure-to-engage procedurals apply?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "",
        "family": "10.2.7",
        "id": "40285104c3498727"
      },
      {
        "rule": "10.2.3",
        "prompt": "While faulting a line, a competitor fires 11 shots and gains a significant advantage. From that position a maximum of 6 scoring hits can be attained. What is the maximum number of procedurals for that fault?",
        "correct": "6",
        "options": [
          "6",
          "5",
          "7",
          "8"
        ],
        "note": "Multiple penalties for the fault are capped by the scoring hits attainable.",
        "family": "10.2.3",
        "id": "33eda48998525a75"
      },
      {
        "rule": "11.3.2",
        "prompt": "The Arbitration Committee receives a request at 11:16 on Saturday. Final results are scheduled to be declared at 10:56 on Sunday. What is the latest time the committee may rule under that schedule?",
        "correct": "Before 10:56 on Sunday",
        "options": [
          "Before 10:56 on Sunday",
          "By 11:16 on Sunday",
          "By 11:36 on Sunday",
          "Before 10:56 on Monday"
        ],
        "note": "The earlier limit is the declaration of final results.",
        "family": "11.3.2",
        "id": "0ca050eb61851f0f"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Under Comstock, a competitor earns 60 target points, receives 30 penalty points and finishes in 6.00 seconds. What is the hit factor, rounded to four decimals?",
        "correct": "5.0000",
        "options": [
          "5.0000",
          "10.0000",
          "7.5000",
          "15.0000"
        ],
        "note": "Subtract penalties from target points before dividing by time.",
        "family": "comstock-hit-factor",
        "id": "e0956e1c97004596"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "A 90-point stage is won with a hit factor of 10. A competitor records a hit factor of 9.0. How many stage points does the competitor earn?",
        "correct": "81.00",
        "options": [
          "81.00",
          "79.00",
          "80.00",
          "82.00"
        ],
        "note": "Multiply the available stage points by the competitor’s hit factor divided by the winner’s hit factor.",
        "family": "comstock-stage-points",
        "id": "14715e3e5cf69e4f"
      },
      {
        "rule": "9.2.3",
        "prompt": "A competitor earns 41.2750, 29.6425 and 34.3850 stage points in the three stages of a match. What is the match total?",
        "correct": "105.3025",
        "options": [
          "105.3025",
          "105.4025",
          "105.2025",
          "106.3025"
        ],
        "note": "",
        "family": "match-total",
        "id": "074fa194069e06db"
      },
      {
        "rule": "10.2.4",
        "prompt": "A competitor fires 2 shots before a mandatory reload point, 2 shots after it without reloading, and 4 shots after finally reloading. How many procedural penalties apply to the reload violation?",
        "correct": "2",
        "options": [
          "2",
          "1",
          "3",
          "4"
        ],
        "note": "Count only shots after the required reload point and before the reload.",
        "family": "10.2.4",
        "id": "68323701f25334fb"
      },
      {
        "rule": "10.2.5",
        "prompt": "In a Cooper Tunnel, direct contact with the overhead material drops 2 pieces. Bumping an upright drops another 2. How many procedural penalties apply?",
        "correct": "2",
        "options": [
          "2",
          "1",
          "3",
          "4"
        ],
        "note": "Pieces that fall from striking an upright are exempt.",
        "family": "10.2.5",
        "id": "d78787214b190a6e"
      },
      {
        "rule": "10.1.2",
        "prompt": "The Range Officer assesses 8 procedural penalties. What is the total point deduction for these penalties?",
        "correct": "80 points",
        "options": [
          "80 points",
          "60 points",
          "70 points",
          "90 points"
        ],
        "note": "",
        "family": "10.1.2",
        "id": "5d5ad2570ac219a8"
      },
      {
        "rule": "10.2.1",
        "prompt": "A competitor fires 3 shots on each of 3 separate Fault Line breaches, re-entering fully between breaches and gaining no significant advantage. How many procedural penalties apply?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "With no significant advantage, count the separate occurrences.",
        "family": "10.2.1",
        "id": "58f01062c3509bdd"
      },
      {
        "rule": "11.3.1",
        "prompt": "Match Officials record a disputed call at 09:55. The competitor talks to the Chief Range Officer 15 minutes later. What is the deadline to submit a written arbitration appeal and fee to the Range Master?",
        "correct": "10:55",
        "options": [
          "10:55",
          "10:40",
          "11:10",
          "11:25"
        ],
        "note": "",
        "family": "11.3.1",
        "id": "007010000caf70b8"
      },
      {
        "rule": "9.8.3",
        "prompt": "The provisional results show a timestamp of 13:25, but were actually posted at 13:37. What is the deadline for a competitor to file a results appeal with the Stats Officer?",
        "correct": "14:37",
        "options": [
          "14:37",
          "14:22",
          "14:52",
          "15:07"
        ],
        "note": "",
        "family": "9.8.3",
        "id": "251642cc8f8c7f1f"
      },
      {
        "rule": "11.4.1",
        "prompt": "At a Level III match the maximum individual entry fee is equivalent to US$127. What is the arbitration fee equivalent in local currency?",
        "correct": "US$100",
        "options": [
          "US$100",
          "US$127",
          "US$95",
          "US$105"
        ],
        "note": "Use the lower of US$100 and the maximum individual entry fee.",
        "family": "11.4.1",
        "id": "5f76c896f353c461"
      },
      {
        "rule": "9.4.2",
        "prompt": "Three paper no-shoots show 3, 2 and 0 hits in their scoring areas, respectively. What is the combined point deduction?",
        "correct": "40 points",
        "options": [
          "40 points",
          "30 points",
          "45 points",
          "50 points"
        ],
        "note": "Count 10 points per hit, capped at two hits on each paper no-shoot.",
        "family": "9.4.2",
        "id": "f10264af0c61ed3a"
      },
      {
        "rule": "10.2.7",
        "prompt": "A competitor leaves 4 non-disappearing scoring targets completely unengaged. They engage the other 7 targets. Before adding any misses, how many failure-to-engage procedurals apply?",
        "correct": "4",
        "options": [
          "4",
          "3",
          "5",
          "6"
        ],
        "note": "",
        "family": "10.2.7",
        "id": "9bd75fb0011635df"
      },
      {
        "rule": "10.2.3",
        "prompt": "While faulting a line, a competitor fires 12 shots and gains a significant advantage. From that position a maximum of 7 scoring hits can be attained. What is the maximum number of procedurals for that fault?",
        "correct": "7",
        "options": [
          "7",
          "6",
          "8",
          "9"
        ],
        "note": "Multiple penalties for the fault are capped by the scoring hits attainable.",
        "family": "10.2.3",
        "id": "fe4d0980cee323db"
      },
      {
        "rule": "11.3.2",
        "prompt": "The Arbitration Committee receives a request at 11:35 on Saturday. The Match Director will declare the results final at 11:55 on Sunday. What deadline applies to the committee’s decision?",
        "correct": "By 11:35 on Sunday",
        "options": [
          "By 11:35 on Sunday",
          "Before 11:55 on Sunday",
          "By 11:15 on Sunday",
          "By 11:35 on Monday"
        ],
        "note": "The 24-hour deadline arrives before the declaration of final results.",
        "family": "11.3.2",
        "id": "64eca1200b3dfb67"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Under Comstock, a competitor earns 65 target points, receives 10 penalty points and finishes in 7.00 seconds. What is the hit factor, rounded to four decimals?",
        "correct": "7.8571",
        "options": [
          "7.8571",
          "9.2857",
          "8.5714",
          "10.7143"
        ],
        "note": "Subtract penalties from target points before dividing by time.",
        "family": "comstock-hit-factor",
        "id": "dc1a8095996ad676"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "A 100-point stage is won with a hit factor of 8. A competitor records a hit factor of 4.0. How many stage points does the competitor earn?",
        "correct": "50.00",
        "options": [
          "50.00",
          "48.00",
          "49.00",
          "51.00"
        ],
        "note": "Multiply the available stage points by the competitor’s hit factor divided by the winner’s hit factor.",
        "family": "comstock-stage-points",
        "id": "a40790b1b62def3d"
      },
      {
        "rule": "9.2.3",
        "prompt": "A competitor earns 43.2750, 30.6425 and 37.3850 stage points in the three stages of a match. What is the match total?",
        "correct": "111.3025",
        "options": [
          "111.3025",
          "111.4025",
          "111.2025",
          "112.3025"
        ],
        "note": "",
        "family": "match-total",
        "id": "94c3a1b2ed2be128"
      },
      {
        "rule": "10.2.4",
        "prompt": "A competitor fires 3 shots before a mandatory reload point, 3 shots after it without reloading, and 2 shots after finally reloading. How many procedural penalties apply to the reload violation?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "Count only shots after the required reload point and before the reload.",
        "family": "10.2.4",
        "id": "74af5d5f21fe1dfb"
      },
      {
        "rule": "10.2.5",
        "prompt": "In a Cooper Tunnel, direct contact with the overhead material drops 3 pieces. Bumping an upright drops another 2. How many procedural penalties apply?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "Pieces that fall from striking an upright are exempt.",
        "family": "10.2.5",
        "id": "1f535390a3951d7e"
      },
      {
        "rule": "10.1.2",
        "prompt": "The Range Officer assesses 9 procedural penalties. What is the total point deduction for these penalties?",
        "correct": "90 points",
        "options": [
          "90 points",
          "70 points",
          "80 points",
          "100 points"
        ],
        "note": "",
        "family": "10.1.2",
        "id": "8408d43671db7a0e"
      },
      {
        "rule": "10.2.1",
        "prompt": "A competitor fires 3 shots on each of 4 separate Fault Line breaches, re-entering fully between breaches and gaining no significant advantage. How many procedural penalties apply?",
        "correct": "4",
        "options": [
          "4",
          "3",
          "5",
          "6"
        ],
        "note": "With no significant advantage, count the separate occurrences.",
        "family": "10.2.1",
        "id": "2ff8e267c91dde1a"
      },
      {
        "rule": "11.3.1",
        "prompt": "Match Officials record a disputed call at 10:18. The competitor talks to the Chief Range Officer 15 minutes later. What is the deadline to submit a written arbitration appeal and fee to the Range Master?",
        "correct": "11:18",
        "options": [
          "11:18",
          "11:03",
          "11:33",
          "11:48"
        ],
        "note": "",
        "family": "11.3.1",
        "id": "c965916fb531369c"
      },
      {
        "rule": "9.8.3",
        "prompt": "The provisional results show a timestamp of 13:42, but were actually posted at 13:55. What is the deadline for a competitor to file a results appeal with the Stats Officer?",
        "correct": "14:55",
        "options": [
          "14:55",
          "14:40",
          "15:10",
          "15:25"
        ],
        "note": "",
        "family": "9.8.3",
        "id": "2cf52a01b6b110fd"
      },
      {
        "rule": "11.4.1",
        "prompt": "At a Level III match the maximum individual entry fee is equivalent to US$70. What is the arbitration fee equivalent in local currency?",
        "correct": "US$70",
        "options": [
          "US$70",
          "US$100",
          "US$65",
          "US$75"
        ],
        "note": "Use the lower of US$100 and the maximum individual entry fee.",
        "family": "11.4.1",
        "id": "d811849a35cbcaa0"
      },
      {
        "rule": "9.4.2",
        "prompt": "Three paper no-shoots show 1, 3 and 1 hits in their scoring areas, respectively. What is the combined point deduction?",
        "correct": "40 points",
        "options": [
          "40 points",
          "30 points",
          "45 points",
          "50 points"
        ],
        "note": "Count 10 points per hit, capped at two hits on each paper no-shoot.",
        "family": "9.4.2",
        "id": "e7a35042e7ccfa8a"
      },
      {
        "rule": "10.2.7",
        "prompt": "A competitor leaves 5 non-disappearing scoring targets completely unengaged. They engage the other 8 targets. Before adding any misses, how many failure-to-engage procedurals apply?",
        "correct": "5",
        "options": [
          "5",
          "4",
          "6",
          "7"
        ],
        "note": "",
        "family": "10.2.7",
        "id": "fd6b874ef06e73b5"
      },
      {
        "rule": "10.2.3",
        "prompt": "While faulting a line, a competitor fires 13 shots and gains a significant advantage. From that position a maximum of 8 scoring hits can be attained. What is the maximum number of procedurals for that fault?",
        "correct": "8",
        "options": [
          "8",
          "7",
          "9",
          "10"
        ],
        "note": "Multiple penalties for the fault are capped by the scoring hits attainable.",
        "family": "10.2.3",
        "id": "e26303c2b6fb8eef"
      },
      {
        "rule": "11.3.2",
        "prompt": "The Arbitration Committee receives a request at 11:54 on Saturday. Final results are scheduled to be declared at 11:34 on Sunday. What is the latest time the committee may rule under that schedule?",
        "correct": "Before 11:34 on Sunday",
        "options": [
          "Before 11:34 on Sunday",
          "By 11:54 on Sunday",
          "By 12:14 on Sunday",
          "Before 11:34 on Monday"
        ],
        "note": "The earlier limit is the declaration of final results.",
        "family": "11.3.2",
        "id": "2f113c3dcf31d25b"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Under Comstock, a competitor earns 70 target points, receives 20 penalty points and finishes in 8.00 seconds. What is the hit factor, rounded to four decimals?",
        "correct": "6.2500",
        "options": [
          "6.2500",
          "8.7500",
          "7.5000",
          "11.2500"
        ],
        "note": "Subtract penalties from target points before dividing by time.",
        "family": "comstock-hit-factor",
        "id": "194827b22eba79b3"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "A 110-point stage is won with a hit factor of 9. A competitor records a hit factor of 5.4. How many stage points does the competitor earn?",
        "correct": "66.00",
        "options": [
          "66.00",
          "64.00",
          "65.00",
          "67.00"
        ],
        "note": "Multiply the available stage points by the competitor’s hit factor divided by the winner’s hit factor.",
        "family": "comstock-stage-points",
        "id": "ae96f35457d3f054"
      },
      {
        "rule": "9.2.3",
        "prompt": "A competitor earns 45.2750, 31.6425 and 40.3850 stage points in the three stages of a match. What is the match total?",
        "correct": "117.3025",
        "options": [
          "117.3025",
          "117.4025",
          "117.2025",
          "118.3025"
        ],
        "note": "",
        "family": "match-total",
        "id": "14aae3449b1f03c8"
      },
      {
        "rule": "10.2.4",
        "prompt": "A competitor fires 4 shots before a mandatory reload point, 3 shots after it without reloading, and 3 shots after finally reloading. How many procedural penalties apply to the reload violation?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "Count only shots after the required reload point and before the reload.",
        "family": "10.2.4",
        "id": "ed76f5a3f5fb66c2"
      },
      {
        "rule": "10.2.5",
        "prompt": "In a Cooper Tunnel, direct contact with the overhead material drops 4 pieces. Bumping an upright drops another 2. How many procedural penalties apply?",
        "correct": "4",
        "options": [
          "4",
          "3",
          "5",
          "6"
        ],
        "note": "Pieces that fall from striking an upright are exempt.",
        "family": "10.2.5",
        "id": "491749653d1d7d26"
      },
      {
        "rule": "10.1.2",
        "prompt": "The Range Officer assesses 10 procedural penalties. What is the total point deduction for these penalties?",
        "correct": "100 points",
        "options": [
          "100 points",
          "80 points",
          "90 points",
          "110 points"
        ],
        "note": "",
        "family": "10.1.2",
        "id": "100e589875ff53f7"
      },
      {
        "rule": "10.2.1",
        "prompt": "A competitor fires 3 shots on each of 5 separate Fault Line breaches, re-entering fully between breaches and gaining no significant advantage. How many procedural penalties apply?",
        "correct": "5",
        "options": [
          "5",
          "4",
          "6",
          "7"
        ],
        "note": "With no significant advantage, count the separate occurrences.",
        "family": "10.2.1",
        "id": "5e49c94b26b2461c"
      },
      {
        "rule": "11.3.1",
        "prompt": "Match Officials record a disputed call at 10:41. The competitor talks to the Chief Range Officer 15 minutes later. What is the deadline to submit a written arbitration appeal and fee to the Range Master?",
        "correct": "11:41",
        "options": [
          "11:41",
          "11:26",
          "11:56",
          "12:11"
        ],
        "note": "",
        "family": "11.3.1",
        "id": "0d638cd42e10ffb0"
      },
      {
        "rule": "9.8.3",
        "prompt": "The provisional results show a timestamp of 13:59, but were actually posted at 14:13. What is the deadline for a competitor to file a results appeal with the Stats Officer?",
        "correct": "15:13",
        "options": [
          "15:13",
          "14:58",
          "15:28",
          "15:43"
        ],
        "note": "",
        "family": "9.8.3",
        "id": "09e5ceb49c90626e"
      },
      {
        "rule": "11.4.1",
        "prompt": "At a Level III match the maximum individual entry fee is equivalent to US$133. What is the arbitration fee equivalent in local currency?",
        "correct": "US$100",
        "options": [
          "US$100",
          "US$133",
          "US$95",
          "US$105"
        ],
        "note": "Use the lower of US$100 and the maximum individual entry fee.",
        "family": "11.4.1",
        "id": "274ea25396d70949"
      },
      {
        "rule": "9.4.2",
        "prompt": "Three paper no-shoots show 2, 3 and 1 hits in their scoring areas, respectively. What is the combined point deduction?",
        "correct": "50 points",
        "options": [
          "50 points",
          "40 points",
          "55 points",
          "60 points"
        ],
        "note": "Count 10 points per hit, capped at two hits on each paper no-shoot.",
        "family": "9.4.2",
        "id": "3fe10b1743af5a74"
      },
      {
        "rule": "10.2.7",
        "prompt": "A competitor leaves 6 non-disappearing scoring targets completely unengaged. They engage the other 9 targets. Before adding any misses, how many failure-to-engage procedurals apply?",
        "correct": "6",
        "options": [
          "6",
          "5",
          "7",
          "8"
        ],
        "note": "",
        "family": "10.2.7",
        "id": "5bd4bda93c64ae23"
      },
      {
        "rule": "10.2.3",
        "prompt": "While faulting a line, a competitor fires 14 shots and gains a significant advantage. From that position a maximum of 9 scoring hits can be attained. What is the maximum number of procedurals for that fault?",
        "correct": "9",
        "options": [
          "9",
          "8",
          "10",
          "11"
        ],
        "note": "Multiple penalties for the fault are capped by the scoring hits attainable.",
        "family": "10.2.3",
        "id": "8ba798773a134e49"
      },
      {
        "rule": "11.3.2",
        "prompt": "The Arbitration Committee receives a request at 12:13 on Saturday. The Match Director will declare the results final at 12:33 on Sunday. What deadline applies to the committee’s decision?",
        "correct": "By 12:13 on Sunday",
        "options": [
          "By 12:13 on Sunday",
          "Before 12:33 on Sunday",
          "By 11:53 on Sunday",
          "By 12:13 on Monday"
        ],
        "note": "The 24-hour deadline arrives before the declaration of final results.",
        "family": "11.3.2",
        "id": "87e95945c487e4d8"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Under Comstock, a competitor earns 75 target points, receives 30 penalty points and finishes in 5.00 seconds. What is the hit factor, rounded to four decimals?",
        "correct": "9.0000",
        "options": [
          "9.0000",
          "15.0000",
          "12.0000",
          "21.0000"
        ],
        "note": "Subtract penalties from target points before dividing by time.",
        "family": "comstock-hit-factor",
        "id": "6593ce04b3d67d7d"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "A 120-point stage is won with a hit factor of 10. A competitor records a hit factor of 7.0. How many stage points does the competitor earn?",
        "correct": "84.00",
        "options": [
          "84.00",
          "82.00",
          "83.00",
          "85.00"
        ],
        "note": "Multiply the available stage points by the competitor’s hit factor divided by the winner’s hit factor.",
        "family": "comstock-stage-points",
        "id": "125f67b0e89b3b29"
      },
      {
        "rule": "9.2.3",
        "prompt": "A competitor earns 47.2750, 32.6425 and 43.3850 stage points in the three stages of a match. What is the match total?",
        "correct": "123.3025",
        "options": [
          "123.3025",
          "123.4025",
          "123.2025",
          "124.3025"
        ],
        "note": "",
        "family": "match-total",
        "id": "ac71cbd4257fe44c"
      },
      {
        "rule": "10.2.4",
        "prompt": "A competitor fires 1 shots before a mandatory reload point, 3 shots after it without reloading, and 4 shots after finally reloading. How many procedural penalties apply to the reload violation?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "Count only shots after the required reload point and before the reload.",
        "family": "10.2.4",
        "id": "ad42741d9b5b0b33"
      },
      {
        "rule": "10.2.5",
        "prompt": "In a Cooper Tunnel, direct contact with the overhead material drops 1 pieces. Bumping an upright drops another 3. How many procedural penalties apply?",
        "correct": "1",
        "options": [
          "1",
          "0",
          "2",
          "3"
        ],
        "note": "Pieces that fall from striking an upright are exempt.",
        "family": "10.2.5",
        "id": "073fa27a14c6fdba"
      },
      {
        "rule": "10.1.2",
        "prompt": "The Range Officer assesses 11 procedural penalties. What is the total point deduction for these penalties?",
        "correct": "110 points",
        "options": [
          "110 points",
          "90 points",
          "100 points",
          "120 points"
        ],
        "note": "",
        "family": "10.1.2",
        "id": "6ced0a30c97d29fb"
      },
      {
        "rule": "10.2.1",
        "prompt": "A competitor fires 4 shots on each of 2 separate Fault Line breaches, re-entering fully between breaches and gaining no significant advantage. How many procedural penalties apply?",
        "correct": "2",
        "options": [
          "2",
          "1",
          "3",
          "4"
        ],
        "note": "With no significant advantage, count the separate occurrences.",
        "family": "10.2.1",
        "id": "0fdc8b40955167f4"
      },
      {
        "rule": "11.3.1",
        "prompt": "Match Officials record a disputed call at 11:04. The competitor talks to the Chief Range Officer 15 minutes later. What is the deadline to submit a written arbitration appeal and fee to the Range Master?",
        "correct": "12:04",
        "options": [
          "12:04",
          "11:49",
          "12:19",
          "12:34"
        ],
        "note": "",
        "family": "11.3.1",
        "id": "74c72e17cf94ace9"
      },
      {
        "rule": "9.8.3",
        "prompt": "The provisional results show a timestamp of 14:16, but were actually posted at 14:27. What is the deadline for a competitor to file a results appeal with the Stats Officer?",
        "correct": "15:27",
        "options": [
          "15:27",
          "15:12",
          "15:42",
          "15:57"
        ],
        "note": "",
        "family": "9.8.3",
        "id": "7218042e14ad7648"
      },
      {
        "rule": "11.4.1",
        "prompt": "At a Level III match the maximum individual entry fee is equivalent to US$74. What is the arbitration fee equivalent in local currency?",
        "correct": "US$74",
        "options": [
          "US$74",
          "US$100",
          "US$69",
          "US$79"
        ],
        "note": "Use the lower of US$100 and the maximum individual entry fee.",
        "family": "11.4.1",
        "id": "84a17151ec6235aa"
      },
      {
        "rule": "9.4.2",
        "prompt": "Three paper no-shoots show 3, 3 and 1 hits in their scoring areas, respectively. What is the combined point deduction?",
        "correct": "50 points",
        "options": [
          "50 points",
          "40 points",
          "55 points",
          "60 points"
        ],
        "note": "Count 10 points per hit, capped at two hits on each paper no-shoot.",
        "family": "9.4.2",
        "id": "9362ece878e6df51"
      },
      {
        "rule": "10.2.7",
        "prompt": "A competitor leaves 3 non-disappearing scoring targets completely unengaged. They engage the other 10 targets. Before adding any misses, how many failure-to-engage procedurals apply?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "",
        "family": "10.2.7",
        "id": "f187f41432c19f9e"
      },
      {
        "rule": "10.2.3",
        "prompt": "While faulting a line, a competitor fires 15 shots and gains a significant advantage. From that position a maximum of 10 scoring hits can be attained. What is the maximum number of procedurals for that fault?",
        "correct": "10",
        "options": [
          "10",
          "9",
          "11",
          "12"
        ],
        "note": "Multiple penalties for the fault are capped by the scoring hits attainable.",
        "family": "10.2.3",
        "id": "1d0b8f7c31502eb7"
      },
      {
        "rule": "11.3.2",
        "prompt": "The Arbitration Committee receives a request at 12:32 on Saturday. Final results are scheduled to be declared at 12:12 on Sunday. What is the latest time the committee may rule under that schedule?",
        "correct": "Before 12:12 on Sunday",
        "options": [
          "Before 12:12 on Sunday",
          "By 12:32 on Sunday",
          "By 12:52 on Sunday",
          "Before 12:12 on Monday"
        ],
        "note": "The earlier limit is the declaration of final results.",
        "family": "11.3.2",
        "id": "0a04767b90011120"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Under Comstock, a competitor earns 80 target points, receives 10 penalty points and finishes in 6.00 seconds. What is the hit factor, rounded to four decimals?",
        "correct": "11.6667",
        "options": [
          "11.6667",
          "13.3333",
          "12.5000",
          "15.0000"
        ],
        "note": "Subtract penalties from target points before dividing by time.",
        "family": "comstock-hit-factor",
        "id": "0a8487a56defd7d4"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "A 130-point stage is won with a hit factor of 8. A competitor records a hit factor of 6.00. How many stage points does the competitor earn?",
        "correct": "97.50",
        "options": [
          "97.50",
          "95.50",
          "96.50",
          "98.50"
        ],
        "note": "Multiply the available stage points by the competitor’s hit factor divided by the winner’s hit factor.",
        "family": "comstock-stage-points",
        "id": "581a8fb3529e434e"
      },
      {
        "rule": "9.2.3",
        "prompt": "A competitor earns 49.2750, 33.6425 and 46.3850 stage points in the three stages of a match. What is the match total?",
        "correct": "129.3025",
        "options": [
          "129.3025",
          "129.4025",
          "129.2025",
          "130.3025"
        ],
        "note": "",
        "family": "match-total",
        "id": "24a2902d339963fb"
      },
      {
        "rule": "10.2.4",
        "prompt": "A competitor fires 2 shots before a mandatory reload point, 4 shots after it without reloading, and 2 shots after finally reloading. How many procedural penalties apply to the reload violation?",
        "correct": "4",
        "options": [
          "4",
          "3",
          "5",
          "6"
        ],
        "note": "Count only shots after the required reload point and before the reload.",
        "family": "10.2.4",
        "id": "a63d7cb694c1e4e7"
      },
      {
        "rule": "10.2.5",
        "prompt": "In a Cooper Tunnel, direct contact with the overhead material drops 2 pieces. Bumping an upright drops another 3. How many procedural penalties apply?",
        "correct": "2",
        "options": [
          "2",
          "1",
          "3",
          "4"
        ],
        "note": "Pieces that fall from striking an upright are exempt.",
        "family": "10.2.5",
        "id": "d4412d59638309cc"
      },
      {
        "rule": "10.1.2",
        "prompt": "The Range Officer assesses 12 procedural penalties. What is the total point deduction for these penalties?",
        "correct": "120 points",
        "options": [
          "120 points",
          "100 points",
          "110 points",
          "130 points"
        ],
        "note": "",
        "family": "10.1.2",
        "id": "2da427e627a18668"
      },
      {
        "rule": "10.2.1",
        "prompt": "A competitor fires 4 shots on each of 3 separate Fault Line breaches, re-entering fully between breaches and gaining no significant advantage. How many procedural penalties apply?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "With no significant advantage, count the separate occurrences.",
        "family": "10.2.1",
        "id": "21bc41077313a1fb"
      },
      {
        "rule": "11.3.1",
        "prompt": "Match Officials record a disputed call at 11:27. The competitor talks to the Chief Range Officer 15 minutes later. What is the deadline to submit a written arbitration appeal and fee to the Range Master?",
        "correct": "12:27",
        "options": [
          "12:27",
          "12:12",
          "12:42",
          "12:57"
        ],
        "note": "",
        "family": "11.3.1",
        "id": "8b94d01c354e3638"
      },
      {
        "rule": "9.8.3",
        "prompt": "The provisional results show a timestamp of 14:33, but were actually posted at 14:45. What is the deadline for a competitor to file a results appeal with the Stats Officer?",
        "correct": "15:45",
        "options": [
          "15:45",
          "15:30",
          "16:00",
          "16:15"
        ],
        "note": "",
        "family": "9.8.3",
        "id": "7aba270f1596c966"
      },
      {
        "rule": "11.4.1",
        "prompt": "At a Level III match the maximum individual entry fee is equivalent to US$139. What is the arbitration fee equivalent in local currency?",
        "correct": "US$100",
        "options": [
          "US$100",
          "US$139",
          "US$95",
          "US$105"
        ],
        "note": "Use the lower of US$100 and the maximum individual entry fee.",
        "family": "11.4.1",
        "id": "5bb2c4fc1e28915c"
      },
      {
        "rule": "9.4.2",
        "prompt": "Three paper no-shoots show 1, 4 and 1 hits in their scoring areas, respectively. What is the combined point deduction?",
        "correct": "40 points",
        "options": [
          "40 points",
          "30 points",
          "45 points",
          "50 points"
        ],
        "note": "Count 10 points per hit, capped at two hits on each paper no-shoot.",
        "family": "9.4.2",
        "id": "2ce804cf7d3c65a5"
      },
      {
        "rule": "10.2.7",
        "prompt": "A competitor leaves 4 non-disappearing scoring targets completely unengaged. They engage the other 11 targets. Before adding any misses, how many failure-to-engage procedurals apply?",
        "correct": "4",
        "options": [
          "4",
          "3",
          "5",
          "6"
        ],
        "note": "",
        "family": "10.2.7",
        "id": "6a197c545df016c0"
      },
      {
        "rule": "10.2.3",
        "prompt": "While faulting a line, a competitor fires 16 shots and gains a significant advantage. From that position a maximum of 11 scoring hits can be attained. What is the maximum number of procedurals for that fault?",
        "correct": "11",
        "options": [
          "11",
          "10",
          "12",
          "13"
        ],
        "note": "Multiple penalties for the fault are capped by the scoring hits attainable.",
        "family": "10.2.3",
        "id": "ee190b22289ebab1"
      },
      {
        "rule": "11.3.2",
        "prompt": "The Arbitration Committee receives a request at 12:51 on Saturday. The Match Director will declare the results final at 13:11 on Sunday. What deadline applies to the committee’s decision?",
        "correct": "By 12:51 on Sunday",
        "options": [
          "By 12:51 on Sunday",
          "Before 13:11 on Sunday",
          "By 12:31 on Sunday",
          "By 12:51 on Monday"
        ],
        "note": "The 24-hour deadline arrives before the declaration of final results.",
        "family": "11.3.2",
        "id": "87475e17dc3ff41f"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Under Comstock, a competitor earns 85 target points, receives 20 penalty points and finishes in 7.00 seconds. What is the hit factor, rounded to four decimals?",
        "correct": "9.2857",
        "options": [
          "9.2857",
          "12.1429",
          "10.7143",
          "15.0000"
        ],
        "note": "Subtract penalties from target points before dividing by time.",
        "family": "comstock-hit-factor",
        "id": "b85cb293f700cca4"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "A 140-point stage is won with a hit factor of 9. A competitor records a hit factor of 7.2. How many stage points does the competitor earn?",
        "correct": "112.00",
        "options": [
          "112.00",
          "110.00",
          "111.00",
          "113.00"
        ],
        "note": "Multiply the available stage points by the competitor’s hit factor divided by the winner’s hit factor.",
        "family": "comstock-stage-points",
        "id": "80da1262251a8622"
      },
      {
        "rule": "9.2.3",
        "prompt": "A competitor earns 51.2750, 34.6425 and 49.3850 stage points in the three stages of a match. What is the match total?",
        "correct": "135.3025",
        "options": [
          "135.3025",
          "135.4025",
          "135.2025",
          "136.3025"
        ],
        "note": "",
        "family": "match-total",
        "id": "dc93ed95ac38a11e"
      },
      {
        "rule": "10.2.4",
        "prompt": "A competitor fires 3 shots before a mandatory reload point, 4 shots after it without reloading, and 3 shots after finally reloading. How many procedural penalties apply to the reload violation?",
        "correct": "4",
        "options": [
          "4",
          "3",
          "5",
          "6"
        ],
        "note": "Count only shots after the required reload point and before the reload.",
        "family": "10.2.4",
        "id": "ff81f0ebb90fa7fe"
      },
      {
        "rule": "10.2.5",
        "prompt": "In a Cooper Tunnel, direct contact with the overhead material drops 3 pieces. Bumping an upright drops another 3. How many procedural penalties apply?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "Pieces that fall from striking an upright are exempt.",
        "family": "10.2.5",
        "id": "a69a26a0962324c0"
      },
      {
        "rule": "10.1.2",
        "prompt": "The Range Officer assesses 13 procedural penalties. What is the total point deduction for these penalties?",
        "correct": "130 points",
        "options": [
          "130 points",
          "110 points",
          "120 points",
          "140 points"
        ],
        "note": "",
        "family": "10.1.2",
        "id": "f2b4498c35093061"
      },
      {
        "rule": "10.2.1",
        "prompt": "A competitor fires 4 shots on each of 4 separate Fault Line breaches, re-entering fully between breaches and gaining no significant advantage. How many procedural penalties apply?",
        "correct": "4",
        "options": [
          "4",
          "3",
          "5",
          "6"
        ],
        "note": "With no significant advantage, count the separate occurrences.",
        "family": "10.2.1",
        "id": "bcbc115517493d04"
      },
      {
        "rule": "11.3.1",
        "prompt": "Match Officials record a disputed call at 11:50. The competitor talks to the Chief Range Officer 15 minutes later. What is the deadline to submit a written arbitration appeal and fee to the Range Master?",
        "correct": "12:50",
        "options": [
          "12:50",
          "12:35",
          "13:05",
          "13:20"
        ],
        "note": "",
        "family": "11.3.1",
        "id": "5fa6865654c74be5"
      },
      {
        "rule": "9.8.3",
        "prompt": "The provisional results show a timestamp of 14:50, but were actually posted at 15:03. What is the deadline for a competitor to file a results appeal with the Stats Officer?",
        "correct": "16:03",
        "options": [
          "16:03",
          "15:48",
          "16:18",
          "16:33"
        ],
        "note": "",
        "family": "9.8.3",
        "id": "2bb26fd96d3d99e0"
      },
      {
        "rule": "11.4.1",
        "prompt": "At a Level III match the maximum individual entry fee is equivalent to US$78. What is the arbitration fee equivalent in local currency?",
        "correct": "US$78",
        "options": [
          "US$78",
          "US$100",
          "US$73",
          "US$83"
        ],
        "note": "Use the lower of US$100 and the maximum individual entry fee.",
        "family": "11.4.1",
        "id": "b0c07a4dded3ae57"
      },
      {
        "rule": "9.4.2",
        "prompt": "Three paper no-shoots show 2, 4 and 1 hits in their scoring areas, respectively. What is the combined point deduction?",
        "correct": "50 points",
        "options": [
          "50 points",
          "40 points",
          "55 points",
          "60 points"
        ],
        "note": "Count 10 points per hit, capped at two hits on each paper no-shoot.",
        "family": "9.4.2",
        "id": "b8d2a9da680ff132"
      },
      {
        "rule": "10.2.7",
        "prompt": "A competitor leaves 5 non-disappearing scoring targets completely unengaged. They engage the other 12 targets. Before adding any misses, how many failure-to-engage procedurals apply?",
        "correct": "5",
        "options": [
          "5",
          "4",
          "6",
          "7"
        ],
        "note": "",
        "family": "10.2.7",
        "id": "6027dec45b5000f3"
      },
      {
        "rule": "10.2.3",
        "prompt": "While faulting a line, a competitor fires 17 shots and gains a significant advantage. From that position a maximum of 12 scoring hits can be attained. What is the maximum number of procedurals for that fault?",
        "correct": "12",
        "options": [
          "12",
          "11",
          "13",
          "14"
        ],
        "note": "Multiple penalties for the fault are capped by the scoring hits attainable.",
        "family": "10.2.3",
        "id": "8ba2c28d0727460d"
      },
      {
        "rule": "11.3.2",
        "prompt": "The Arbitration Committee receives a request at 13:10 on Saturday. Final results are scheduled to be declared at 12:50 on Sunday. What is the latest time the committee may rule under that schedule?",
        "correct": "Before 12:50 on Sunday",
        "options": [
          "Before 12:50 on Sunday",
          "By 13:10 on Sunday",
          "By 13:30 on Sunday",
          "Before 12:50 on Monday"
        ],
        "note": "The earlier limit is the declaration of final results.",
        "family": "11.3.2",
        "id": "75069bcdc82cd29e"
      }
    ]
  },
  {
    "id": "action-air-pcc",
    "name": "Action Air PCC",
    "group": "Action Air",
    "book": "https://drive.google.com/file/d/1k4xXKVcRQMZOg6LTJSW0O4bW1zENE6Et/view",
    "questions": [
      {
        "rule": "1.2.1.2",
        "prompt": "What is the maximum required projectile count for an Action Air PCC Medium Course?",
        "correct": "24",
        "options": [
          "24",
          "20",
          "22",
          "26"
        ],
        "note": "",
        "family": "1.2.1.2",
        "id": "3cbbbd7211a4e9f9"
      },
      {
        "rule": "Appendix D, item 1",
        "prompt": "What is the minimum overall length listed for Action Air PCC?",
        "correct": "500 mm",
        "options": [
          "500 mm",
          "450 mm",
          "475 mm",
          "525 mm"
        ],
        "note": "",
        "family": "Appendix D, item 1",
        "id": "b7704d105991a418"
      },
      {
        "rule": "Appendix D, item 10",
        "prompt": "What is the minimum outer barrel length for Action Air PCC?",
        "correct": "250 mm",
        "options": [
          "250 mm",
          "225 mm",
          "240 mm",
          "260 mm"
        ],
        "note": "",
        "family": "Appendix D, item 10",
        "id": "892b536cbb66e97e"
      },
      {
        "rule": "Appendix D, item 5",
        "prompt": "Which statement about optical or electronic sights in Action Air PCC is correct?",
        "correct": "Required in Optics and prohibited in Iron",
        "options": [
          "Required in Optics and prohibited in Iron",
          "Optional in Optics and prohibited in Iron",
          "Required in Optics and optional in Iron",
          "Optional in both Optics and Iron"
        ],
        "note": "",
        "family": "Appendix D, item 5",
        "id": "d1cfee9efa45fd53"
      },
      {
        "rule": "2.1.3",
        "prompt": "While rigid targets are being shot, what minimum distance must be maintained?",
        "correct": "2 m",
        "options": [
          "2 m",
          "1 m",
          "3 m",
          "4 m"
        ],
        "note": "If a Fault Line is used to limit the approach, it must be placed at least 3 m away.",
        "family": "2.1.3",
        "id": "5ce25fc4c99b19b4"
      },
      {
        "rule": "9.4.2",
        "prompt": "Three hits are visible in the scoring area of a single paper no-shoot. What penalty is assessed on that no-shoot?",
        "correct": "−20 points",
        "options": [
          "−20 points",
          "−10 points",
          "−25 points",
          "−30 points"
        ],
        "note": "Two hits at most are penalized on a single paper no-shoot, at 10 points each.",
        "family": "9.4.2",
        "id": "3e71e77f78236b79"
      },
      {
        "rule": "3.2.3",
        "prompt": "Between squads, the written stage briefing needs a clarification for consistency. Who has the authority to amend it?",
        "correct": "Range Master",
        "options": [
          "Range Master",
          "Chief Range Officer",
          "Range Officer",
          "Match Director"
        ],
        "note": "",
        "family": "3.2.3",
        "id": "24be4f173f88362d"
      },
      {
        "rule": "9.1.3",
        "prompt": "A paper target is patched before scoring and the original score cannot be determined. What must the Range Officer order?",
        "correct": "A reshoot of the entire course of fire",
        "options": [
          "A reshoot of the entire course of fire",
          "A reshoot of the affected target only",
          "A rescore using the minimum possible target score",
          "A rescore using the maximum possible target score"
        ],
        "note": "",
        "family": "9.1.3",
        "id": "84e73bae40fef1d1"
      },
      {
        "rule": "10.2.4",
        "prompt": "A competitor fires two shots after the point where a mandatory reload was required, then reloads and fires one more. How many procedural penalties apply for the missed reload?",
        "correct": "2",
        "options": [
          "2",
          "1",
          "3",
          "0"
        ],
        "note": "Count each shot after the required reload point until the reload is performed.",
        "family": "10.2.4",
        "id": "1799ef99d814ab1b"
      },
      {
        "rule": "11.3.1",
        "prompt": "A disputed call is recorded by Match Officials at 13:20. By what time must the written arbitration appeal and applicable fee be submitted to the Range Master?",
        "correct": "14:20",
        "options": [
          "14:20",
          "13:50",
          "14:05",
          "14:50"
        ],
        "note": "The submission window is one hour from the recorded time of the disputed call.",
        "family": "11.3.1",
        "id": "78d8cac4ae7947d1"
      },
      {
        "rule": "9.5.2",
        "prompt": "A hit on a scoring paper target touches the line between two scoring zones. Which value counts?",
        "correct": "The higher of the two zone values",
        "options": [
          "The higher of the two zone values",
          "The lower of the two zone values",
          "The zone containing most of the hit",
          "The zone containing the centre of the hit"
        ],
        "note": "",
        "family": "9.5.2",
        "id": "14d00d4c36342c41"
      },
      {
        "rule": "9.2.2",
        "prompt": "To how many decimal places are individual stage points calculated for stage ranking?",
        "correct": "4",
        "options": [
          "4",
          "2",
          "3",
          "5"
        ],
        "note": "",
        "family": "9.2.2",
        "id": "9e45b306a23c2492"
      },
      {
        "rule": "3.2.4",
        "prompt": "Who sets the duration of the squad’s stage walkthrough?",
        "correct": "Range Officer",
        "options": [
          "Range Officer",
          "Chief Range Officer",
          "Range Master",
          "Match Director"
        ],
        "note": "",
        "family": "3.2.4",
        "id": "2f38cfa6c5d892fc"
      },
      {
        "rule": "3.2.4",
        "prompt": "Moving targets are demonstrated during walkthroughs. What must be consistent across competitors?",
        "correct": "Both duration and frequency",
        "options": [
          "Both duration and frequency",
          "Duration only",
          "Frequency only",
          "Neither duration nor frequency"
        ],
        "note": "",
        "family": "3.2.4",
        "id": "02fb5729cb9e04e5"
      },
      {
        "rule": "4.6.1",
        "prompt": "A competitor adjusts a target stand without authorization during inspection. What penalty may the Range Officer impose for each occurrence?",
        "correct": "One procedural penalty",
        "options": [
          "One procedural penalty",
          "Two procedural penalties",
          "One miss penalty",
          "Two miss penalties"
        ],
        "note": "",
        "family": "4.6.1",
        "id": "5ad2ec3127f1aa75"
      },
      {
        "rule": "6.2.6",
        "prompt": "A competitor is disqualified in a later Division after completing a separate Division at the same match. What happens to the complete earlier score?",
        "correct": "It stays in the results for the earlier Division",
        "options": [
          "It stays in the results for the earlier Division",
          "It stays in the results for the later Division",
          "It is removed from the earlier Division results",
          "It is kept only if the disqualification is overturned"
        ],
        "note": "",
        "family": "6.2.6",
        "id": "2bb09b780d6cd1cf"
      },
      {
        "rule": "6.6.1",
        "prompt": "A competitor misses the scheduled time for a stage. Whose prior approval is required to attempt the stage later?",
        "correct": "Match Director",
        "options": [
          "Match Director",
          "Range Master",
          "Chief Range Officer",
          "Range Officer"
        ],
        "note": "",
        "family": "6.6.1",
        "id": "1313eda1e157a923"
      },
      {
        "rule": "7.1.1",
        "prompt": "Who declares a competitor’s time, scores and penalties on the stage and verifies they are recorded correctly?",
        "correct": "Range Officer",
        "options": [
          "Range Officer",
          "Chief Range Officer",
          "Stats Officer",
          "Range Master"
        ],
        "note": "",
        "family": "7.1.1",
        "id": "0b424efb218f7879"
      },
      {
        "rule": "7.1.2",
        "prompt": "Which official has primary authority over the courses of fire specifically assigned to them, under the Range Master?",
        "correct": "Chief Range Officer",
        "options": [
          "Chief Range Officer",
          "Range Officer",
          "Stats Officer",
          "Match Director"
        ],
        "note": "",
        "family": "7.1.2",
        "id": "c118375a6b2b5323"
      },
      {
        "rule": "7.1.3",
        "prompt": "Who supervises the team that processes score sheets and produces provisional and final results?",
        "correct": "Stats Officer",
        "options": [
          "Stats Officer",
          "Chief Range Officer",
          "Range Master",
          "Quartermaster"
        ],
        "note": "",
        "family": "7.1.3",
        "id": "704c770dd49cbacc"
      },
      {
        "rule": "7.1.4",
        "prompt": "Who is responsible for distributing and maintaining targets, timers and other range equipment?",
        "correct": "Quartermaster",
        "options": [
          "Quartermaster",
          "Chief Range Officer",
          "Range Master",
          "Stats Officer"
        ],
        "note": "",
        "family": "7.1.4",
        "id": "b01b090191e21d17"
      },
      {
        "rule": "7.1.5",
        "prompt": "Which official has overall authority for range safety and rule application across the entire match range?",
        "correct": "Range Master",
        "options": [
          "Range Master",
          "Chief Range Officer",
          "Range Officer",
          "Match Director"
        ],
        "note": "",
        "family": "7.1.5",
        "id": "bfc335ecb25270a0"
      },
      {
        "rule": "8.3.5",
        "prompt": "The Range Officer calls “Stop” during an attempt. Which response is required?",
        "correct": "Stop firing and moving immediately and await instructions",
        "options": [
          "Stop firing and moving immediately and await instructions",
          "Stop firing immediately but finish moving to the next position",
          "Stop moving immediately but finish engaging the current target",
          "Stop firing and moving once the current target has been engaged"
        ],
        "note": "",
        "family": "8.3.5",
        "id": "26049216f3858162"
      },
      {
        "rule": "8.3.8",
        "prompt": "Which declaration authorizes personnel to move forward from the final shooting location for scoring and reset?",
        "correct": "Range Is Clear",
        "options": [
          "Range Is Clear",
          "Are You Ready?",
          "If You Are Finished, Unload And Show Clear",
          "Stop"
        ],
        "note": "",
        "family": "8.3.8",
        "id": "f33938909cd6cc60"
      },
      {
        "rule": "9.1.1",
        "prompt": "During scoring, what minimum distance must a competitor keep from a target unless the Range Officer gives permission to approach?",
        "correct": "1 m",
        "options": [
          "1 m",
          "0.5 m",
          "1.5 m",
          "2 m"
        ],
        "note": "",
        "family": "9.1.1",
        "id": "2d30e249199e32da"
      },
      {
        "rule": "9.1.1",
        "prompt": "A competitor approaches a target closer than 1 m without authorization during scoring. What is the sanction for a first offense?",
        "correct": "A warning",
        "options": [
          "A warning",
          "One automatic procedural penalty",
          "One automatic miss penalty",
          "A warning plus one procedural penalty"
        ],
        "note": "",
        "family": "9.1.1",
        "id": "a0c109e9369b02a9"
      },
      {
        "rule": "9.1.4",
        "prompt": "An unrestored target has extra scoring hits. The Range Officer cannot tell which hits belong to the competitor being scored. What is required?",
        "correct": "A reshoot of the course of fire",
        "options": [
          "A reshoot of the course of fire",
          "A reshoot of the target only",
          "A score using only the lowest possible hits",
          "A score using only the highest possible hits"
        ],
        "note": "",
        "family": "9.1.4",
        "id": "d865d4a181049ade"
      },
      {
        "rule": "9.1.5.1",
        "prompt": "A shot passes wholly through the scoring area of a paper target and then strikes the scoring area of a second paper scoring target. How is the second hit treated?",
        "correct": "It does not count for score",
        "options": [
          "It does not count for score",
          "It scores at its full zone value",
          "It scores at the lowest zone value",
          "It counts as a miss penalty on the second target"
        ],
        "note": "",
        "family": "9.1.5.1",
        "id": "709366270d24cc45"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Under Comstock, which calculation produces a hit factor?",
        "correct": "Target points minus penalties, then divide by time",
        "options": [
          "Target points minus penalties, then divide by time",
          "Target points divided by time, then subtract penalties",
          "Target points minus penalties, then multiply by time",
          "Time divided by target points minus penalties"
        ],
        "note": "",
        "family": "9.2.1.1",
        "id": "2fb26c1e715568ff"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Which competitor receives the maximum stage points available under Comstock?",
        "correct": "The competitor with the highest hit factor",
        "options": [
          "The competitor with the highest hit factor",
          "The competitor with the highest raw target points",
          "The competitor with the fastest recorded time",
          "The competitor with the lowest penalty total"
        ],
        "note": "",
        "family": "9.2.1.1",
        "id": "b034328d19a8c134"
      },
      {
        "rule": "9.2.3",
        "prompt": "Which quantity determines the final ranking within a Division?",
        "correct": "The sum of individual stage points",
        "options": [
          "The sum of individual stage points",
          "The sum of individual stage hit factors",
          "The sum of raw target points before factoring",
          "The average of individual stage placing positions"
        ],
        "note": "",
        "family": "9.2.3",
        "id": "de2a1ae18dce11e2"
      },
      {
        "rule": "9.3.1",
        "prompt": "The Match Director decides a tie must be broken. What does the tiebreaker change?",
        "correct": "Only the final placing of the tied competitors",
        "options": [
          "Only the final placing of the tied competitors",
          "The placing and original match points of the tied competitors",
          "The placing of every competitor in the Division",
          "The original match points without changing the placing"
        ],
        "note": "",
        "family": "9.3.1",
        "id": "0fdc055c5d39575a"
      },
      {
        "rule": "9.6.1",
        "prompt": "After “Range Is Clear” on a stage with ordinary paper targets, who may accompany the scoring official to verify the score?",
        "correct": "The competitor or their delegate",
        "options": [
          "The competitor or their delegate",
          "Only the competitor personally",
          "Only the competitor’s delegate",
          "Only the squad leader"
        ],
        "note": "",
        "family": "9.6.1",
        "id": "aa45c8d054c1ff8b"
      },
      {
        "rule": "9.6.2",
        "prompt": "The Range Officer intends to start scoring paper targets before the competitor finishes the stage. When must competitors be advised?",
        "correct": "During the squad briefing",
        "options": [
          "During the squad briefing",
          "After the Start Signal",
          "After the competitor’s last shot",
          "When provisional results are posted"
        ],
        "note": "",
        "family": "9.6.2",
        "id": "f7c24a4496425719"
      },
      {
        "rule": "9.6.3",
        "prompt": "Neither the competitor nor their delegate verifies a target during scoring. What happens to the right to appeal the scoring of that target?",
        "correct": "It is lost",
        "options": [
          "It is lost",
          "It stays open until the target is reset",
          "It stays open until the score sheet is signed",
          "It stays open until provisional results are posted"
        ],
        "note": "",
        "family": "9.6.3",
        "id": "5ff0c66acb294d60"
      },
      {
        "rule": "9.6.4",
        "prompt": "Who must first receive a challenge to the score on a target before it is patched?",
        "correct": "Range Officer",
        "options": [
          "Range Officer",
          "Chief Range Officer",
          "Range Master",
          "Stats Officer"
        ],
        "note": "",
        "family": "9.6.4",
        "id": "ec57f181f231d00b"
      },
      {
        "rule": "9.7.4",
        "prompt": "A score sheet is signed by both the competitor and Range Officer. With no mutual consent and no arbitration decision, which change is explicitly permitted?",
        "correct": "Correcting an arithmetic error",
        "options": [
          "Correcting an arithmetic error",
          "Re-evaluating a disputed scoring-zone hit",
          "Changing the recorded time based on a squad member’s estimate",
          "Adding a miss based on a later recollection"
        ],
        "note": "",
        "family": "9.7.4",
        "id": "e73cef78ffc6e010"
      },
      {
        "rule": "9.7.5",
        "prompt": "A score sheet has excess entries. To whom must it promptly be referred?",
        "correct": "Range Master",
        "options": [
          "Range Master",
          "Chief Range Officer",
          "Stats Officer",
          "Match Director"
        ],
        "note": "",
        "family": "9.7.5",
        "id": "e89fc7b2c365ea93"
      },
      {
        "rule": "9.7.6.1",
        "prompt": "A stage time is missing from the score sheet and a reshoot is impossible. What is the stage score?",
        "correct": "Zero",
        "options": [
          "Zero",
          "The raw target points minus penalties",
          "The division’s average stage score",
          "The competitor’s average score from the other stages"
        ],
        "note": "",
        "family": "9.7.6.1",
        "id": "164d6cc592c33b90"
      },
      {
        "rule": "9.7.7",
        "prompt": "The original score sheet is lost. The competitor has a legible duplicate acceptable to the Range Master. What is used?",
        "correct": "The competitor’s duplicate",
        "options": [
          "The competitor’s duplicate",
          "A reshoot regardless of the duplicate",
          "A zero score regardless of the duplicate",
          "The squad’s median score"
        ],
        "note": "",
        "family": "9.7.7",
        "id": "9f7a3ce2c9f20e67"
      },
      {
        "rule": "9.8.2",
        "prompt": "At Level IV, where must provisional stage results be posted after all competitors finish?",
        "correct": "At the range and the official match hotel",
        "options": [
          "At the range and the official match hotel",
          "At the range only",
          "At the official match hotel only",
          "At the range and the nearest hotel"
        ],
        "note": "",
        "family": "9.8.2",
        "id": "647b5a758a1113f2"
      },
      {
        "rule": "9.8.3",
        "prompt": "A competitor detects an error in the published provisional stage results. With whom must the appeal be filed?",
        "correct": "Stats Officer",
        "options": [
          "Stats Officer",
          "Chief Range Officer",
          "Range Master",
          "Match Director"
        ],
        "note": "",
        "family": "9.8.3",
        "id": "57791f0ed3b424b0"
      },
      {
        "rule": "9.9.1",
        "prompt": "A moving paper target presents part of its A zone at rest after activation. How is it classified?",
        "correct": "Non-disappearing",
        "options": [
          "Non-disappearing",
          "Disappearing unless the full A zone remains visible",
          "Disappearing unless part of the A zone was visible before activation too",
          "Disappearing because the target moves"
        ],
        "note": "",
        "family": "9.9.1",
        "id": "62043a204521db1d"
      },
      {
        "rule": "9.9.2",
        "prompt": "A genuinely disappearing target is activated before the last shot, but never engaged. Which of the following applies to that target?",
        "correct": "Neither a miss nor a failure-to-engage penalty",
        "options": [
          "Neither a miss nor a failure-to-engage penalty",
          "A miss penalty only",
          "A failure-to-engage penalty only",
          "Both a miss and a failure-to-engage penalty"
        ],
        "note": "",
        "family": "9.9.2",
        "id": "a24aa249ff5c8fb5"
      },
      {
        "rule": "9.9.3",
        "prompt": "A stationary target is partly concealed by a moving vision barrier. Part of its A zone remains exposed after activation. How is the target classified?",
        "correct": "Non-disappearing",
        "options": [
          "Non-disappearing",
          "Disappearing unless its full A zone is exposed",
          "Disappearing because the barrier moves",
          "Disappearing unless the barrier itself is a scoring target"
        ],
        "note": "",
        "family": "9.9.3",
        "id": "32b991228b675bae"
      },
      {
        "rule": "10.1.1",
        "prompt": "What must be recorded for procedural penalties on the score sheet?",
        "correct": "Both the number and the reason",
        "options": [
          "Both the number and the reason",
          "The number only",
          "The reason only",
          "The number and the competitor’s agreement"
        ],
        "note": "",
        "family": "10.1.1",
        "id": "98d216ec3d12862b"
      },
      {
        "rule": "10.1.4",
        "prompt": "A competitor fires while faulting a line, then fires at the same target from inside the line. What happens to the original applicable fault penalty?",
        "correct": "It still applies",
        "options": [
          "It still applies",
          "It is removed if the later shot hits",
          "It is removed if both shots hit",
          "It is changed to a miss if the later shot hits"
        ],
        "note": "",
        "family": "10.1.4",
        "id": "11b671e372d1b1db"
      },
      {
        "rule": "10.2.1",
        "prompt": "A competitor touches the ground beyond a Fault Line while shooting without gaining a significant advantage. How is the penalty normally counted?",
        "correct": "One per occurrence",
        "options": [
          "One per occurrence",
          "One per shot regardless of advantage",
          "One per target engaged",
          "One per scoring hit"
        ],
        "note": "",
        "family": "10.2.1",
        "id": "2687007cbe9cade2"
      },
      {
        "rule": "10.2.2",
        "prompt": "A competitor ignores a written stage procedure and gains a significant advantage. What penalty basis may apply in place of a single penalty for the occurrence?",
        "correct": "One per shot fired during the breach, subject to the applicable cap",
        "options": [
          "One per shot fired during the breach, subject to the applicable cap",
          "One per scoring hit during the breach, subject to the applicable cap",
          "One per target engaged during the breach, subject to the applicable cap",
          "One per shot fired after the breach ended, subject to the applicable cap"
        ],
        "note": "",
        "family": "10.2.2",
        "id": "acf60b7a43e61d24"
      },
      {
        "rule": "10.2.6",
        "prompt": "The Range Officer stops a competitor in time for a first instance of creeping after “Standby” and before the signal. What follows?",
        "correct": "A warning and a restart",
        "options": [
          "A warning and a restart",
          "A procedural penalty and a restart",
          "A warning without a restart",
          "A procedural penalty without a restart"
        ],
        "note": "",
        "family": "10.2.6",
        "id": "d0aa312c30a9e68f"
      },
      {
        "rule": "10.2.7",
        "prompt": "A competitor fails to engage a non-disappearing scoring target. What normally applies?",
        "correct": "One procedural per target plus applicable misses",
        "options": [
          "One procedural per target plus applicable misses",
          "One procedural per target instead of applicable misses",
          "One procedural per missed hit plus applicable misses",
          "Applicable misses only"
        ],
        "note": "",
        "family": "10.2.7",
        "id": "3b6f1c3d22f37ba8"
      },
      {
        "rule": "10.3.2",
        "prompt": "After issuing a disqualification, who must be notified as soon as possible?",
        "correct": "Range Master",
        "options": [
          "Range Master",
          "Chief Range Officer",
          "Stats Officer",
          "Match Director"
        ],
        "note": "",
        "family": "10.3.2",
        "id": "1e60f82bfdebcdb7"
      },
      {
        "rule": "11.1.3",
        "prompt": "A competitor disputes an initial Range Officer ruling. Which is the normal next level before the Range Master?",
        "correct": "Chief Range Officer",
        "options": [
          "Chief Range Officer",
          "Stats Officer",
          "Match Director",
          "Quartermaster"
        ],
        "note": "",
        "family": "11.1.3",
        "id": "e269dacafee493b9"
      },
      {
        "rule": "11.3.2",
        "prompt": "When must the Arbitration Committee reach its decision?",
        "correct": "Within 24 hours of the request or before final results are declared, whichever comes first",
        "options": [
          "Within 24 hours of the request or before final results are declared, whichever comes first",
          "Within 24 hours of the request or before final results are declared, whichever comes last",
          "Within 12 hours of the request or before final results are declared, whichever comes first",
          "Within 24 hours of the disputed call or before final results are declared, whichever comes first"
        ],
        "note": "",
        "family": "11.3.2",
        "id": "ab7a04fd99f427cc"
      },
      {
        "rule": "11.4.1",
        "prompt": "At a Level III match, which amount determines the arbitration fee in local currency?",
        "correct": "The lower of US$100 and the maximum individual entry fee",
        "options": [
          "The lower of US$100 and the maximum individual entry fee",
          "The higher of US$100 and the maximum individual entry fee",
          "The lower of US$100 and the minimum individual entry fee",
          "The maximum individual entry fee regardless of US$100"
        ],
        "note": "",
        "family": "11.4.1",
        "id": "d660fd589e3be129"
      },
      {
        "rule": "11.6.2",
        "prompt": "Who implements and posts the Arbitration Committee’s decision?",
        "correct": "Range Master",
        "options": [
          "Range Master",
          "Chief Range Officer",
          "Stats Officer",
          "Match Director"
        ],
        "note": "",
        "family": "11.6.2",
        "id": "b42ae1c861a560b7"
      },
      {
        "rule": "11.6.4",
        "prompt": "For what can a recorded Arbitration Committee decision serve as precedent?",
        "correct": "A similar subsequent incident at the same match",
        "options": [
          "A similar subsequent incident at the same match",
          "A similar earlier incident at the same match",
          "Any subsequent incident at the same match",
          "A similar incident only at the next match"
        ],
        "note": "",
        "family": "11.6.4",
        "id": "3487c77fa189a244"
      },
      {
        "rule": "11.7.1",
        "prompt": "May someone other than the competitor involved submit an appeal on a third-party basis?",
        "correct": "Yes, under the same Chapter 11 provisions",
        "options": [
          "Yes, under the same Chapter 11 provisions",
          "Yes, with a separate deadline set by the squad",
          "Yes, but only at Level IV and above",
          "No, only the competitor involved may appeal"
        ],
        "note": "",
        "family": "11.7.1",
        "id": "efd6cd40b8400be5"
      },
      {
        "rule": "1.2.1.1",
        "prompt": "A proposed Short Course requires 13 projectiles to complete. To what maximum must the required count be reduced?",
        "correct": "12",
        "options": [
          "12",
          "10",
          "11",
          "13"
        ],
        "note": "",
        "family": "1.2.1.1",
        "id": "70314aab4783d45e"
      },
      {
        "rule": "1.2.1.2",
        "prompt": "What is the maximum number of scoring hits a Medium Course may require from a single location or view?",
        "correct": "10",
        "options": [
          "10",
          "9",
          "11",
          "12"
        ],
        "note": "",
        "family": "1.2.1.2",
        "id": "6101f3f8c50fd83b"
      },
      {
        "rule": "1.2.1.3",
        "prompt": "A proposed Long Course requires 42 projectiles to complete. What is the maximum required count?",
        "correct": "40",
        "options": [
          "40",
          "38",
          "39",
          "41"
        ],
        "note": "",
        "family": "1.2.1.3",
        "id": "dd83b4efeb43aaf1"
      },
      {
        "rule": "5.6.1",
        "prompt": "The host Region’s law limits projectile energy to 1.5 J. What limit applies at this match?",
        "correct": "1.5 J",
        "options": [
          "1.5 J",
          "1.75 J",
          "2.0 J",
          "2.5 J"
        ],
        "note": "",
        "family": "5.6.1",
        "id": "c12586e0a0ad5d86"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Under Comstock, a competitor earns 35 target points, receives 10 penalty points and finishes in 5.00 seconds. What is the hit factor, rounded to four decimals?",
        "correct": "5.0000",
        "options": [
          "5.0000",
          "7.0000",
          "6.0000",
          "9.0000"
        ],
        "note": "Subtract penalties from target points before dividing by time.",
        "family": "comstock-hit-factor",
        "id": "21196cb03e879fbf"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "A 40-point stage is won with a hit factor of 8. A competitor records a hit factor of 4.0. How many stage points does the competitor earn?",
        "correct": "20.00",
        "options": [
          "20.00",
          "18.00",
          "19.00",
          "21.00"
        ],
        "note": "Multiply the available stage points by the competitor’s hit factor divided by the winner’s hit factor.",
        "family": "comstock-stage-points",
        "id": "3b223b933ed2c978"
      },
      {
        "rule": "9.2.3",
        "prompt": "A competitor earns 31.2750, 24.6425 and 19.3850 stage points in the three stages of a match. What is the match total?",
        "correct": "75.3025",
        "options": [
          "75.3025",
          "75.4025",
          "75.2025",
          "76.3025"
        ],
        "note": "",
        "family": "match-total",
        "id": "84eed92ac69be18f"
      },
      {
        "rule": "10.2.4",
        "prompt": "A competitor fires 1 shots before a mandatory reload point, 1 shots after it without reloading, and 2 shots after finally reloading. How many procedural penalties apply to the reload violation?",
        "correct": "1",
        "options": [
          "1",
          "0",
          "2",
          "3"
        ],
        "note": "Count only shots after the required reload point and before the reload.",
        "family": "10.2.4",
        "id": "b13c6a5f1fe012ab"
      },
      {
        "rule": "10.2.5",
        "prompt": "In a Cooper Tunnel, direct contact with the overhead material drops 1 pieces. Bumping an upright drops another 1. How many procedural penalties apply?",
        "correct": "1",
        "options": [
          "1",
          "0",
          "2",
          "3"
        ],
        "note": "Pieces that fall from striking an upright are exempt.",
        "family": "10.2.5",
        "id": "2bc7b9ec0789807c"
      },
      {
        "rule": "10.1.2",
        "prompt": "The Range Officer assesses 3 procedural penalties. What is the total point deduction for these penalties?",
        "correct": "30 points",
        "options": [
          "30 points",
          "10 points",
          "20 points",
          "40 points"
        ],
        "note": "",
        "family": "10.1.2",
        "id": "b3c678f4a8413c91"
      },
      {
        "rule": "10.2.1",
        "prompt": "A competitor fires 2 shots on each of 2 separate Fault Line breaches, re-entering fully between breaches and gaining no significant advantage. How many procedural penalties apply?",
        "correct": "2",
        "options": [
          "2",
          "1",
          "3",
          "4"
        ],
        "note": "With no significant advantage, count the separate occurrences.",
        "family": "10.2.1",
        "id": "65d0e1630759337f"
      },
      {
        "rule": "11.3.1",
        "prompt": "Match Officials record a disputed call at 08:00. The competitor talks to the Chief Range Officer 15 minutes later. What is the deadline to submit a written arbitration appeal and fee to the Range Master?",
        "correct": "09:00",
        "options": [
          "09:00",
          "08:45",
          "09:15",
          "09:30"
        ],
        "note": "",
        "family": "11.3.1",
        "id": "e73f27d96024f83f"
      },
      {
        "rule": "9.8.3",
        "prompt": "The provisional results show a timestamp of 12:00, but were actually posted at 12:11. What is the deadline for a competitor to file a results appeal with the Stats Officer?",
        "correct": "13:11",
        "options": [
          "13:11",
          "12:56",
          "13:26",
          "13:41"
        ],
        "note": "",
        "family": "9.8.3",
        "id": "dc0d2ecaa091ddbb"
      },
      {
        "rule": "11.4.1",
        "prompt": "At a Level III match the maximum individual entry fee is equivalent to US$58. What is the arbitration fee equivalent in local currency?",
        "correct": "US$58",
        "options": [
          "US$58",
          "US$100",
          "US$53",
          "US$63"
        ],
        "note": "Use the lower of US$100 and the maximum individual entry fee.",
        "family": "11.4.1",
        "id": "34d89f1347aee01f"
      },
      {
        "rule": "9.4.2",
        "prompt": "Three paper no-shoots show 1, 1 and 0 hits in their scoring areas, respectively. What is the combined point deduction?",
        "correct": "20 points",
        "options": [
          "20 points",
          "10 points",
          "25 points",
          "30 points"
        ],
        "note": "Count 10 points per hit, capped at two hits on each paper no-shoot.",
        "family": "9.4.2",
        "id": "2ed02131abe1ee01"
      },
      {
        "rule": "10.2.7",
        "prompt": "A competitor leaves 3 non-disappearing scoring targets completely unengaged. They engage the other 2 targets. Before adding any misses, how many failure-to-engage procedurals apply?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "",
        "family": "10.2.7",
        "id": "74b0110053b22816"
      },
      {
        "rule": "10.2.3",
        "prompt": "While faulting a line, a competitor fires 7 shots and gains a significant advantage. From that position a maximum of 2 scoring hits can be attained. What is the maximum number of procedurals for that fault?",
        "correct": "2",
        "options": [
          "2",
          "1",
          "3",
          "4"
        ],
        "note": "Multiple penalties for the fault are capped by the scoring hits attainable.",
        "family": "10.2.3",
        "id": "a67f0a3b80d3499d"
      },
      {
        "rule": "11.3.2",
        "prompt": "The Arbitration Committee receives a request at 10:00 on Saturday. Final results are scheduled to be declared at 09:40 on Sunday. What is the latest time the committee may rule under that schedule?",
        "correct": "Before 09:40 on Sunday",
        "options": [
          "Before 09:40 on Sunday",
          "By 10:00 on Sunday",
          "By 10:20 on Sunday",
          "Before 09:40 on Monday"
        ],
        "note": "The earlier limit is the declaration of final results.",
        "family": "11.3.2",
        "id": "bc60703e734bf1ae"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Under Comstock, a competitor earns 40 target points, receives 20 penalty points and finishes in 6.00 seconds. What is the hit factor, rounded to four decimals?",
        "correct": "3.3333",
        "options": [
          "3.3333",
          "6.6667",
          "5.0000",
          "10.0000"
        ],
        "note": "Subtract penalties from target points before dividing by time.",
        "family": "comstock-hit-factor",
        "id": "221b267a71db93cf"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "A 50-point stage is won with a hit factor of 9. A competitor records a hit factor of 5.4. How many stage points does the competitor earn?",
        "correct": "30.00",
        "options": [
          "30.00",
          "28.00",
          "29.00",
          "31.00"
        ],
        "note": "Multiply the available stage points by the competitor’s hit factor divided by the winner’s hit factor.",
        "family": "comstock-stage-points",
        "id": "9ba6132933144df4"
      },
      {
        "rule": "9.2.3",
        "prompt": "A competitor earns 33.2750, 25.6425 and 22.3850 stage points in the three stages of a match. What is the match total?",
        "correct": "81.3025",
        "options": [
          "81.3025",
          "81.4025",
          "81.2025",
          "82.3025"
        ],
        "note": "",
        "family": "match-total",
        "id": "2a2ddc7a971836c3"
      },
      {
        "rule": "10.2.4",
        "prompt": "A competitor fires 2 shots before a mandatory reload point, 1 shots after it without reloading, and 3 shots after finally reloading. How many procedural penalties apply to the reload violation?",
        "correct": "1",
        "options": [
          "1",
          "0",
          "2",
          "3"
        ],
        "note": "Count only shots after the required reload point and before the reload.",
        "family": "10.2.4",
        "id": "762cf162802b119a"
      },
      {
        "rule": "10.2.5",
        "prompt": "In a Cooper Tunnel, direct contact with the overhead material drops 2 pieces. Bumping an upright drops another 1. How many procedural penalties apply?",
        "correct": "2",
        "options": [
          "2",
          "1",
          "3",
          "4"
        ],
        "note": "Pieces that fall from striking an upright are exempt.",
        "family": "10.2.5",
        "id": "530bd84ef8b47216"
      },
      {
        "rule": "10.1.2",
        "prompt": "The Range Officer assesses 4 procedural penalties. What is the total point deduction for these penalties?",
        "correct": "40 points",
        "options": [
          "40 points",
          "20 points",
          "30 points",
          "50 points"
        ],
        "note": "",
        "family": "10.1.2",
        "id": "a7aaa4caf4f065cd"
      },
      {
        "rule": "10.2.1",
        "prompt": "A competitor fires 2 shots on each of 3 separate Fault Line breaches, re-entering fully between breaches and gaining no significant advantage. How many procedural penalties apply?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "With no significant advantage, count the separate occurrences.",
        "family": "10.2.1",
        "id": "b6d742daab217181"
      },
      {
        "rule": "11.3.1",
        "prompt": "Match Officials record a disputed call at 08:23. The competitor talks to the Chief Range Officer 15 minutes later. What is the deadline to submit a written arbitration appeal and fee to the Range Master?",
        "correct": "09:23",
        "options": [
          "09:23",
          "09:08",
          "09:38",
          "09:53"
        ],
        "note": "",
        "family": "11.3.1",
        "id": "fd2b9c3ae8f0e93c"
      },
      {
        "rule": "9.8.3",
        "prompt": "The provisional results show a timestamp of 12:17, but were actually posted at 12:29. What is the deadline for a competitor to file a results appeal with the Stats Officer?",
        "correct": "13:29",
        "options": [
          "13:29",
          "13:14",
          "13:44",
          "13:59"
        ],
        "note": "",
        "family": "9.8.3",
        "id": "75719e2f068672a0"
      },
      {
        "rule": "11.4.1",
        "prompt": "At a Level III match the maximum individual entry fee is equivalent to US$115. What is the arbitration fee equivalent in local currency?",
        "correct": "US$100",
        "options": [
          "US$100",
          "US$115",
          "US$95",
          "US$105"
        ],
        "note": "Use the lower of US$100 and the maximum individual entry fee.",
        "family": "11.4.1",
        "id": "7047ed8525176aec"
      },
      {
        "rule": "9.4.2",
        "prompt": "Three paper no-shoots show 2, 1 and 0 hits in their scoring areas, respectively. What is the combined point deduction?",
        "correct": "30 points",
        "options": [
          "30 points",
          "20 points",
          "35 points",
          "40 points"
        ],
        "note": "Count 10 points per hit, capped at two hits on each paper no-shoot.",
        "family": "9.4.2",
        "id": "c4db7b7a451a5a7d"
      },
      {
        "rule": "10.2.7",
        "prompt": "A competitor leaves 4 non-disappearing scoring targets completely unengaged. They engage the other 3 targets. Before adding any misses, how many failure-to-engage procedurals apply?",
        "correct": "4",
        "options": [
          "4",
          "3",
          "5",
          "6"
        ],
        "note": "",
        "family": "10.2.7",
        "id": "5f3e9af5d086e70f"
      },
      {
        "rule": "10.2.3",
        "prompt": "While faulting a line, a competitor fires 8 shots and gains a significant advantage. From that position a maximum of 3 scoring hits can be attained. What is the maximum number of procedurals for that fault?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "Multiple penalties for the fault are capped by the scoring hits attainable.",
        "family": "10.2.3",
        "id": "ebc3eaec4c4e60c1"
      },
      {
        "rule": "11.3.2",
        "prompt": "The Arbitration Committee receives a request at 10:19 on Saturday. The Match Director will declare the results final at 10:39 on Sunday. What deadline applies to the committee’s decision?",
        "correct": "By 10:19 on Sunday",
        "options": [
          "By 10:19 on Sunday",
          "Before 10:39 on Sunday",
          "By 09:59 on Sunday",
          "By 10:19 on Monday"
        ],
        "note": "The 24-hour deadline arrives before the declaration of final results.",
        "family": "11.3.2",
        "id": "e4ad89d611716d41"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Under Comstock, a competitor earns 45 target points, receives 30 penalty points and finishes in 7.00 seconds. What is the hit factor, rounded to four decimals?",
        "correct": "2.1429",
        "options": [
          "2.1429",
          "6.4286",
          "4.2857",
          "10.7143"
        ],
        "note": "Subtract penalties from target points before dividing by time.",
        "family": "comstock-hit-factor",
        "id": "811fb111204f1db3"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "A 60-point stage is won with a hit factor of 10. A competitor records a hit factor of 7.0. How many stage points does the competitor earn?",
        "correct": "42.00",
        "options": [
          "42.00",
          "40.00",
          "41.00",
          "43.00"
        ],
        "note": "Multiply the available stage points by the competitor’s hit factor divided by the winner’s hit factor.",
        "family": "comstock-stage-points",
        "id": "52ec8e4e492a485c"
      },
      {
        "rule": "9.2.3",
        "prompt": "A competitor earns 35.2750, 26.6425 and 25.3850 stage points in the three stages of a match. What is the match total?",
        "correct": "87.3025",
        "options": [
          "87.3025",
          "87.4025",
          "87.2025",
          "88.3025"
        ],
        "note": "",
        "family": "match-total",
        "id": "9de1b28afcc923d6"
      },
      {
        "rule": "10.2.4",
        "prompt": "A competitor fires 3 shots before a mandatory reload point, 1 shots after it without reloading, and 4 shots after finally reloading. How many procedural penalties apply to the reload violation?",
        "correct": "1",
        "options": [
          "1",
          "0",
          "2",
          "3"
        ],
        "note": "Count only shots after the required reload point and before the reload.",
        "family": "10.2.4",
        "id": "881a8b7504b60cad"
      },
      {
        "rule": "10.2.5",
        "prompt": "In a Cooper Tunnel, direct contact with the overhead material drops 3 pieces. Bumping an upright drops another 1. How many procedural penalties apply?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "Pieces that fall from striking an upright are exempt.",
        "family": "10.2.5",
        "id": "5137b4943cba8ec9"
      },
      {
        "rule": "10.1.2",
        "prompt": "The Range Officer assesses 5 procedural penalties. What is the total point deduction for these penalties?",
        "correct": "50 points",
        "options": [
          "50 points",
          "30 points",
          "40 points",
          "60 points"
        ],
        "note": "",
        "family": "10.1.2",
        "id": "8d6f73489143fdbe"
      },
      {
        "rule": "10.2.1",
        "prompt": "A competitor fires 2 shots on each of 4 separate Fault Line breaches, re-entering fully between breaches and gaining no significant advantage. How many procedural penalties apply?",
        "correct": "4",
        "options": [
          "4",
          "3",
          "5",
          "6"
        ],
        "note": "With no significant advantage, count the separate occurrences.",
        "family": "10.2.1",
        "id": "bfd45046f19468df"
      },
      {
        "rule": "11.3.1",
        "prompt": "Match Officials record a disputed call at 08:46. The competitor talks to the Chief Range Officer 15 minutes later. What is the deadline to submit a written arbitration appeal and fee to the Range Master?",
        "correct": "09:46",
        "options": [
          "09:46",
          "09:31",
          "10:01",
          "10:16"
        ],
        "note": "",
        "family": "11.3.1",
        "id": "1646ce84911500d6"
      },
      {
        "rule": "9.8.3",
        "prompt": "The provisional results show a timestamp of 12:34, but were actually posted at 12:47. What is the deadline for a competitor to file a results appeal with the Stats Officer?",
        "correct": "13:47",
        "options": [
          "13:47",
          "13:32",
          "14:02",
          "14:17"
        ],
        "note": "",
        "family": "9.8.3",
        "id": "f183f4405bae9693"
      },
      {
        "rule": "11.4.1",
        "prompt": "At a Level III match the maximum individual entry fee is equivalent to US$62. What is the arbitration fee equivalent in local currency?",
        "correct": "US$62",
        "options": [
          "US$62",
          "US$100",
          "US$57",
          "US$67"
        ],
        "note": "Use the lower of US$100 and the maximum individual entry fee.",
        "family": "11.4.1",
        "id": "2e62692cf1be487d"
      },
      {
        "rule": "9.4.2",
        "prompt": "Three paper no-shoots show 3, 1 and 0 hits in their scoring areas, respectively. What is the combined point deduction?",
        "correct": "30 points",
        "options": [
          "30 points",
          "20 points",
          "35 points",
          "40 points"
        ],
        "note": "Count 10 points per hit, capped at two hits on each paper no-shoot.",
        "family": "9.4.2",
        "id": "9d9d5b6426560ab7"
      },
      {
        "rule": "10.2.7",
        "prompt": "A competitor leaves 5 non-disappearing scoring targets completely unengaged. They engage the other 4 targets. Before adding any misses, how many failure-to-engage procedurals apply?",
        "correct": "5",
        "options": [
          "5",
          "4",
          "6",
          "7"
        ],
        "note": "",
        "family": "10.2.7",
        "id": "0d8a48f3191f4847"
      },
      {
        "rule": "10.2.3",
        "prompt": "While faulting a line, a competitor fires 9 shots and gains a significant advantage. From that position a maximum of 4 scoring hits can be attained. What is the maximum number of procedurals for that fault?",
        "correct": "4",
        "options": [
          "4",
          "3",
          "5",
          "6"
        ],
        "note": "Multiple penalties for the fault are capped by the scoring hits attainable.",
        "family": "10.2.3",
        "id": "0ef941d62c1d78e5"
      },
      {
        "rule": "11.3.2",
        "prompt": "The Arbitration Committee receives a request at 10:38 on Saturday. Final results are scheduled to be declared at 10:18 on Sunday. What is the latest time the committee may rule under that schedule?",
        "correct": "Before 10:18 on Sunday",
        "options": [
          "Before 10:18 on Sunday",
          "By 10:38 on Sunday",
          "By 10:58 on Sunday",
          "Before 10:18 on Monday"
        ],
        "note": "The earlier limit is the declaration of final results.",
        "family": "11.3.2",
        "id": "de38b1edabf021d6"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Under Comstock, a competitor earns 50 target points, receives 10 penalty points and finishes in 8.00 seconds. What is the hit factor, rounded to four decimals?",
        "correct": "5.0000",
        "options": [
          "5.0000",
          "6.2500",
          "5.6250",
          "7.5000"
        ],
        "note": "Subtract penalties from target points before dividing by time.",
        "family": "comstock-hit-factor",
        "id": "a9248c139a4373b7"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "A 70-point stage is won with a hit factor of 8. A competitor records a hit factor of 6.00. How many stage points does the competitor earn?",
        "correct": "52.50",
        "options": [
          "52.50",
          "50.50",
          "51.50",
          "53.50"
        ],
        "note": "Multiply the available stage points by the competitor’s hit factor divided by the winner’s hit factor.",
        "family": "comstock-stage-points",
        "id": "47f4cad0ab27e8ba"
      },
      {
        "rule": "9.2.3",
        "prompt": "A competitor earns 37.2750, 27.6425 and 28.3850 stage points in the three stages of a match. What is the match total?",
        "correct": "93.3025",
        "options": [
          "93.3025",
          "93.4025",
          "93.2025",
          "94.3025"
        ],
        "note": "",
        "family": "match-total",
        "id": "c9e15cec5e09ea03"
      },
      {
        "rule": "10.2.4",
        "prompt": "A competitor fires 4 shots before a mandatory reload point, 2 shots after it without reloading, and 2 shots after finally reloading. How many procedural penalties apply to the reload violation?",
        "correct": "2",
        "options": [
          "2",
          "1",
          "3",
          "4"
        ],
        "note": "Count only shots after the required reload point and before the reload.",
        "family": "10.2.4",
        "id": "006d194da76716db"
      },
      {
        "rule": "10.2.5",
        "prompt": "In a Cooper Tunnel, direct contact with the overhead material drops 4 pieces. Bumping an upright drops another 1. How many procedural penalties apply?",
        "correct": "4",
        "options": [
          "4",
          "3",
          "5",
          "6"
        ],
        "note": "Pieces that fall from striking an upright are exempt.",
        "family": "10.2.5",
        "id": "8e37dab2e4ff09d1"
      },
      {
        "rule": "10.1.2",
        "prompt": "The Range Officer assesses 6 procedural penalties. What is the total point deduction for these penalties?",
        "correct": "60 points",
        "options": [
          "60 points",
          "40 points",
          "50 points",
          "70 points"
        ],
        "note": "",
        "family": "10.1.2",
        "id": "1b476140e351fce9"
      },
      {
        "rule": "10.2.1",
        "prompt": "A competitor fires 2 shots on each of 5 separate Fault Line breaches, re-entering fully between breaches and gaining no significant advantage. How many procedural penalties apply?",
        "correct": "5",
        "options": [
          "5",
          "4",
          "6",
          "7"
        ],
        "note": "With no significant advantage, count the separate occurrences.",
        "family": "10.2.1",
        "id": "e6660f0d591b4f7d"
      },
      {
        "rule": "11.3.1",
        "prompt": "Match Officials record a disputed call at 09:09. The competitor talks to the Chief Range Officer 15 minutes later. What is the deadline to submit a written arbitration appeal and fee to the Range Master?",
        "correct": "10:09",
        "options": [
          "10:09",
          "09:54",
          "10:24",
          "10:39"
        ],
        "note": "",
        "family": "11.3.1",
        "id": "3a39e0f7f339bf48"
      },
      {
        "rule": "9.8.3",
        "prompt": "The provisional results show a timestamp of 12:51, but were actually posted at 13:05. What is the deadline for a competitor to file a results appeal with the Stats Officer?",
        "correct": "14:05",
        "options": [
          "14:05",
          "13:50",
          "14:20",
          "14:35"
        ],
        "note": "",
        "family": "9.8.3",
        "id": "f52890a6657389c5"
      },
      {
        "rule": "11.4.1",
        "prompt": "At a Level III match the maximum individual entry fee is equivalent to US$121. What is the arbitration fee equivalent in local currency?",
        "correct": "US$100",
        "options": [
          "US$100",
          "US$121",
          "US$95",
          "US$105"
        ],
        "note": "Use the lower of US$100 and the maximum individual entry fee.",
        "family": "11.4.1",
        "id": "f8dd8ce82b7d6cb7"
      },
      {
        "rule": "9.4.2",
        "prompt": "Three paper no-shoots show 1, 2 and 0 hits in their scoring areas, respectively. What is the combined point deduction?",
        "correct": "30 points",
        "options": [
          "30 points",
          "20 points",
          "35 points",
          "40 points"
        ],
        "note": "Count 10 points per hit, capped at two hits on each paper no-shoot.",
        "family": "9.4.2",
        "id": "f4db1f910c9647bc"
      },
      {
        "rule": "10.2.7",
        "prompt": "A competitor leaves 6 non-disappearing scoring targets completely unengaged. They engage the other 5 targets. Before adding any misses, how many failure-to-engage procedurals apply?",
        "correct": "6",
        "options": [
          "6",
          "5",
          "7",
          "8"
        ],
        "note": "",
        "family": "10.2.7",
        "id": "d6027ed7afcbf0dc"
      },
      {
        "rule": "10.2.3",
        "prompt": "While faulting a line, a competitor fires 10 shots and gains a significant advantage. From that position a maximum of 5 scoring hits can be attained. What is the maximum number of procedurals for that fault?",
        "correct": "5",
        "options": [
          "5",
          "4",
          "6",
          "7"
        ],
        "note": "Multiple penalties for the fault are capped by the scoring hits attainable.",
        "family": "10.2.3",
        "id": "78f0f08139c28834"
      },
      {
        "rule": "11.3.2",
        "prompt": "The Arbitration Committee receives a request at 10:57 on Saturday. The Match Director will declare the results final at 11:17 on Sunday. What deadline applies to the committee’s decision?",
        "correct": "By 10:57 on Sunday",
        "options": [
          "By 10:57 on Sunday",
          "Before 11:17 on Sunday",
          "By 10:37 on Sunday",
          "By 10:57 on Monday"
        ],
        "note": "The 24-hour deadline arrives before the declaration of final results.",
        "family": "11.3.2",
        "id": "682a783c53b03f55"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Under Comstock, a competitor earns 55 target points, receives 20 penalty points and finishes in 5.00 seconds. What is the hit factor, rounded to four decimals?",
        "correct": "7.0000",
        "options": [
          "7.0000",
          "11.0000",
          "9.0000",
          "15.0000"
        ],
        "note": "Subtract penalties from target points before dividing by time.",
        "family": "comstock-hit-factor",
        "id": "6b4917642dba515c"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "A 80-point stage is won with a hit factor of 9. A competitor records a hit factor of 7.2. How many stage points does the competitor earn?",
        "correct": "64.00",
        "options": [
          "64.00",
          "62.00",
          "63.00",
          "65.00"
        ],
        "note": "Multiply the available stage points by the competitor’s hit factor divided by the winner’s hit factor.",
        "family": "comstock-stage-points",
        "id": "28ebb69b1638fbdf"
      },
      {
        "rule": "9.2.3",
        "prompt": "A competitor earns 39.2750, 28.6425 and 31.3850 stage points in the three stages of a match. What is the match total?",
        "correct": "99.3025",
        "options": [
          "99.3025",
          "99.4025",
          "99.2025",
          "100.3025"
        ],
        "note": "",
        "family": "match-total",
        "id": "5f4e872e5af06f31"
      },
      {
        "rule": "10.2.4",
        "prompt": "A competitor fires 1 shots before a mandatory reload point, 2 shots after it without reloading, and 3 shots after finally reloading. How many procedural penalties apply to the reload violation?",
        "correct": "2",
        "options": [
          "2",
          "1",
          "3",
          "4"
        ],
        "note": "Count only shots after the required reload point and before the reload.",
        "family": "10.2.4",
        "id": "6e024231dd5c61ec"
      },
      {
        "rule": "10.2.5",
        "prompt": "In a Cooper Tunnel, direct contact with the overhead material drops 1 pieces. Bumping an upright drops another 2. How many procedural penalties apply?",
        "correct": "1",
        "options": [
          "1",
          "0",
          "2",
          "3"
        ],
        "note": "Pieces that fall from striking an upright are exempt.",
        "family": "10.2.5",
        "id": "a494bfc8fae26d63"
      },
      {
        "rule": "10.1.2",
        "prompt": "The Range Officer assesses 7 procedural penalties. What is the total point deduction for these penalties?",
        "correct": "70 points",
        "options": [
          "70 points",
          "50 points",
          "60 points",
          "80 points"
        ],
        "note": "",
        "family": "10.1.2",
        "id": "47ba4f62b92a41c2"
      },
      {
        "rule": "10.2.1",
        "prompt": "A competitor fires 3 shots on each of 2 separate Fault Line breaches, re-entering fully between breaches and gaining no significant advantage. How many procedural penalties apply?",
        "correct": "2",
        "options": [
          "2",
          "1",
          "3",
          "4"
        ],
        "note": "With no significant advantage, count the separate occurrences.",
        "family": "10.2.1",
        "id": "ae87a1170740806b"
      },
      {
        "rule": "11.3.1",
        "prompt": "Match Officials record a disputed call at 09:32. The competitor talks to the Chief Range Officer 15 minutes later. What is the deadline to submit a written arbitration appeal and fee to the Range Master?",
        "correct": "10:32",
        "options": [
          "10:32",
          "10:17",
          "10:47",
          "11:02"
        ],
        "note": "",
        "family": "11.3.1",
        "id": "6588158dd42d9117"
      },
      {
        "rule": "9.8.3",
        "prompt": "The provisional results show a timestamp of 13:08, but were actually posted at 13:19. What is the deadline for a competitor to file a results appeal with the Stats Officer?",
        "correct": "14:19",
        "options": [
          "14:19",
          "14:04",
          "14:34",
          "14:49"
        ],
        "note": "",
        "family": "9.8.3",
        "id": "29a955b04f06e0ec"
      },
      {
        "rule": "11.4.1",
        "prompt": "At a Level III match the maximum individual entry fee is equivalent to US$66. What is the arbitration fee equivalent in local currency?",
        "correct": "US$66",
        "options": [
          "US$66",
          "US$100",
          "US$61",
          "US$71"
        ],
        "note": "Use the lower of US$100 and the maximum individual entry fee.",
        "family": "11.4.1",
        "id": "ee9ce1e4aa409d25"
      },
      {
        "rule": "9.4.2",
        "prompt": "Three paper no-shoots show 2, 2 and 0 hits in their scoring areas, respectively. What is the combined point deduction?",
        "correct": "40 points",
        "options": [
          "40 points",
          "30 points",
          "45 points",
          "50 points"
        ],
        "note": "Count 10 points per hit, capped at two hits on each paper no-shoot.",
        "family": "9.4.2",
        "id": "402cb42239c9c1f8"
      },
      {
        "rule": "10.2.7",
        "prompt": "A competitor leaves 3 non-disappearing scoring targets completely unengaged. They engage the other 6 targets. Before adding any misses, how many failure-to-engage procedurals apply?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "",
        "family": "10.2.7",
        "id": "40285104c3498727"
      },
      {
        "rule": "10.2.3",
        "prompt": "While faulting a line, a competitor fires 11 shots and gains a significant advantage. From that position a maximum of 6 scoring hits can be attained. What is the maximum number of procedurals for that fault?",
        "correct": "6",
        "options": [
          "6",
          "5",
          "7",
          "8"
        ],
        "note": "Multiple penalties for the fault are capped by the scoring hits attainable.",
        "family": "10.2.3",
        "id": "33eda48998525a75"
      },
      {
        "rule": "11.3.2",
        "prompt": "The Arbitration Committee receives a request at 11:16 on Saturday. Final results are scheduled to be declared at 10:56 on Sunday. What is the latest time the committee may rule under that schedule?",
        "correct": "Before 10:56 on Sunday",
        "options": [
          "Before 10:56 on Sunday",
          "By 11:16 on Sunday",
          "By 11:36 on Sunday",
          "Before 10:56 on Monday"
        ],
        "note": "The earlier limit is the declaration of final results.",
        "family": "11.3.2",
        "id": "0ca050eb61851f0f"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Under Comstock, a competitor earns 60 target points, receives 30 penalty points and finishes in 6.00 seconds. What is the hit factor, rounded to four decimals?",
        "correct": "5.0000",
        "options": [
          "5.0000",
          "10.0000",
          "7.5000",
          "15.0000"
        ],
        "note": "Subtract penalties from target points before dividing by time.",
        "family": "comstock-hit-factor",
        "id": "e0956e1c97004596"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "A 90-point stage is won with a hit factor of 10. A competitor records a hit factor of 9.0. How many stage points does the competitor earn?",
        "correct": "81.00",
        "options": [
          "81.00",
          "79.00",
          "80.00",
          "82.00"
        ],
        "note": "Multiply the available stage points by the competitor’s hit factor divided by the winner’s hit factor.",
        "family": "comstock-stage-points",
        "id": "14715e3e5cf69e4f"
      },
      {
        "rule": "9.2.3",
        "prompt": "A competitor earns 41.2750, 29.6425 and 34.3850 stage points in the three stages of a match. What is the match total?",
        "correct": "105.3025",
        "options": [
          "105.3025",
          "105.4025",
          "105.2025",
          "106.3025"
        ],
        "note": "",
        "family": "match-total",
        "id": "074fa194069e06db"
      },
      {
        "rule": "10.2.4",
        "prompt": "A competitor fires 2 shots before a mandatory reload point, 2 shots after it without reloading, and 4 shots after finally reloading. How many procedural penalties apply to the reload violation?",
        "correct": "2",
        "options": [
          "2",
          "1",
          "3",
          "4"
        ],
        "note": "Count only shots after the required reload point and before the reload.",
        "family": "10.2.4",
        "id": "68323701f25334fb"
      },
      {
        "rule": "10.2.5",
        "prompt": "In a Cooper Tunnel, direct contact with the overhead material drops 2 pieces. Bumping an upright drops another 2. How many procedural penalties apply?",
        "correct": "2",
        "options": [
          "2",
          "1",
          "3",
          "4"
        ],
        "note": "Pieces that fall from striking an upright are exempt.",
        "family": "10.2.5",
        "id": "d78787214b190a6e"
      },
      {
        "rule": "10.1.2",
        "prompt": "The Range Officer assesses 8 procedural penalties. What is the total point deduction for these penalties?",
        "correct": "80 points",
        "options": [
          "80 points",
          "60 points",
          "70 points",
          "90 points"
        ],
        "note": "",
        "family": "10.1.2",
        "id": "5d5ad2570ac219a8"
      },
      {
        "rule": "10.2.1",
        "prompt": "A competitor fires 3 shots on each of 3 separate Fault Line breaches, re-entering fully between breaches and gaining no significant advantage. How many procedural penalties apply?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "With no significant advantage, count the separate occurrences.",
        "family": "10.2.1",
        "id": "58f01062c3509bdd"
      },
      {
        "rule": "11.3.1",
        "prompt": "Match Officials record a disputed call at 09:55. The competitor talks to the Chief Range Officer 15 minutes later. What is the deadline to submit a written arbitration appeal and fee to the Range Master?",
        "correct": "10:55",
        "options": [
          "10:55",
          "10:40",
          "11:10",
          "11:25"
        ],
        "note": "",
        "family": "11.3.1",
        "id": "007010000caf70b8"
      },
      {
        "rule": "9.8.3",
        "prompt": "The provisional results show a timestamp of 13:25, but were actually posted at 13:37. What is the deadline for a competitor to file a results appeal with the Stats Officer?",
        "correct": "14:37",
        "options": [
          "14:37",
          "14:22",
          "14:52",
          "15:07"
        ],
        "note": "",
        "family": "9.8.3",
        "id": "251642cc8f8c7f1f"
      },
      {
        "rule": "11.4.1",
        "prompt": "At a Level III match the maximum individual entry fee is equivalent to US$127. What is the arbitration fee equivalent in local currency?",
        "correct": "US$100",
        "options": [
          "US$100",
          "US$127",
          "US$95",
          "US$105"
        ],
        "note": "Use the lower of US$100 and the maximum individual entry fee.",
        "family": "11.4.1",
        "id": "5f76c896f353c461"
      },
      {
        "rule": "9.4.2",
        "prompt": "Three paper no-shoots show 3, 2 and 0 hits in their scoring areas, respectively. What is the combined point deduction?",
        "correct": "40 points",
        "options": [
          "40 points",
          "30 points",
          "45 points",
          "50 points"
        ],
        "note": "Count 10 points per hit, capped at two hits on each paper no-shoot.",
        "family": "9.4.2",
        "id": "f10264af0c61ed3a"
      },
      {
        "rule": "10.2.7",
        "prompt": "A competitor leaves 4 non-disappearing scoring targets completely unengaged. They engage the other 7 targets. Before adding any misses, how many failure-to-engage procedurals apply?",
        "correct": "4",
        "options": [
          "4",
          "3",
          "5",
          "6"
        ],
        "note": "",
        "family": "10.2.7",
        "id": "9bd75fb0011635df"
      },
      {
        "rule": "10.2.3",
        "prompt": "While faulting a line, a competitor fires 12 shots and gains a significant advantage. From that position a maximum of 7 scoring hits can be attained. What is the maximum number of procedurals for that fault?",
        "correct": "7",
        "options": [
          "7",
          "6",
          "8",
          "9"
        ],
        "note": "Multiple penalties for the fault are capped by the scoring hits attainable.",
        "family": "10.2.3",
        "id": "fe4d0980cee323db"
      },
      {
        "rule": "11.3.2",
        "prompt": "The Arbitration Committee receives a request at 11:35 on Saturday. The Match Director will declare the results final at 11:55 on Sunday. What deadline applies to the committee’s decision?",
        "correct": "By 11:35 on Sunday",
        "options": [
          "By 11:35 on Sunday",
          "Before 11:55 on Sunday",
          "By 11:15 on Sunday",
          "By 11:35 on Monday"
        ],
        "note": "The 24-hour deadline arrives before the declaration of final results.",
        "family": "11.3.2",
        "id": "64eca1200b3dfb67"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Under Comstock, a competitor earns 65 target points, receives 10 penalty points and finishes in 7.00 seconds. What is the hit factor, rounded to four decimals?",
        "correct": "7.8571",
        "options": [
          "7.8571",
          "9.2857",
          "8.5714",
          "10.7143"
        ],
        "note": "Subtract penalties from target points before dividing by time.",
        "family": "comstock-hit-factor",
        "id": "dc1a8095996ad676"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "A 100-point stage is won with a hit factor of 8. A competitor records a hit factor of 4.0. How many stage points does the competitor earn?",
        "correct": "50.00",
        "options": [
          "50.00",
          "48.00",
          "49.00",
          "51.00"
        ],
        "note": "Multiply the available stage points by the competitor’s hit factor divided by the winner’s hit factor.",
        "family": "comstock-stage-points",
        "id": "a40790b1b62def3d"
      },
      {
        "rule": "9.2.3",
        "prompt": "A competitor earns 43.2750, 30.6425 and 37.3850 stage points in the three stages of a match. What is the match total?",
        "correct": "111.3025",
        "options": [
          "111.3025",
          "111.4025",
          "111.2025",
          "112.3025"
        ],
        "note": "",
        "family": "match-total",
        "id": "94c3a1b2ed2be128"
      },
      {
        "rule": "10.2.4",
        "prompt": "A competitor fires 3 shots before a mandatory reload point, 3 shots after it without reloading, and 2 shots after finally reloading. How many procedural penalties apply to the reload violation?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "Count only shots after the required reload point and before the reload.",
        "family": "10.2.4",
        "id": "74af5d5f21fe1dfb"
      },
      {
        "rule": "10.2.5",
        "prompt": "In a Cooper Tunnel, direct contact with the overhead material drops 3 pieces. Bumping an upright drops another 2. How many procedural penalties apply?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "Pieces that fall from striking an upright are exempt.",
        "family": "10.2.5",
        "id": "1f535390a3951d7e"
      },
      {
        "rule": "10.1.2",
        "prompt": "The Range Officer assesses 9 procedural penalties. What is the total point deduction for these penalties?",
        "correct": "90 points",
        "options": [
          "90 points",
          "70 points",
          "80 points",
          "100 points"
        ],
        "note": "",
        "family": "10.1.2",
        "id": "8408d43671db7a0e"
      },
      {
        "rule": "10.2.1",
        "prompt": "A competitor fires 3 shots on each of 4 separate Fault Line breaches, re-entering fully between breaches and gaining no significant advantage. How many procedural penalties apply?",
        "correct": "4",
        "options": [
          "4",
          "3",
          "5",
          "6"
        ],
        "note": "With no significant advantage, count the separate occurrences.",
        "family": "10.2.1",
        "id": "2ff8e267c91dde1a"
      },
      {
        "rule": "11.3.1",
        "prompt": "Match Officials record a disputed call at 10:18. The competitor talks to the Chief Range Officer 15 minutes later. What is the deadline to submit a written arbitration appeal and fee to the Range Master?",
        "correct": "11:18",
        "options": [
          "11:18",
          "11:03",
          "11:33",
          "11:48"
        ],
        "note": "",
        "family": "11.3.1",
        "id": "c965916fb531369c"
      },
      {
        "rule": "9.8.3",
        "prompt": "The provisional results show a timestamp of 13:42, but were actually posted at 13:55. What is the deadline for a competitor to file a results appeal with the Stats Officer?",
        "correct": "14:55",
        "options": [
          "14:55",
          "14:40",
          "15:10",
          "15:25"
        ],
        "note": "",
        "family": "9.8.3",
        "id": "2cf52a01b6b110fd"
      },
      {
        "rule": "11.4.1",
        "prompt": "At a Level III match the maximum individual entry fee is equivalent to US$70. What is the arbitration fee equivalent in local currency?",
        "correct": "US$70",
        "options": [
          "US$70",
          "US$100",
          "US$65",
          "US$75"
        ],
        "note": "Use the lower of US$100 and the maximum individual entry fee.",
        "family": "11.4.1",
        "id": "d811849a35cbcaa0"
      },
      {
        "rule": "9.4.2",
        "prompt": "Three paper no-shoots show 1, 3 and 1 hits in their scoring areas, respectively. What is the combined point deduction?",
        "correct": "40 points",
        "options": [
          "40 points",
          "30 points",
          "45 points",
          "50 points"
        ],
        "note": "Count 10 points per hit, capped at two hits on each paper no-shoot.",
        "family": "9.4.2",
        "id": "e7a35042e7ccfa8a"
      },
      {
        "rule": "10.2.7",
        "prompt": "A competitor leaves 5 non-disappearing scoring targets completely unengaged. They engage the other 8 targets. Before adding any misses, how many failure-to-engage procedurals apply?",
        "correct": "5",
        "options": [
          "5",
          "4",
          "6",
          "7"
        ],
        "note": "",
        "family": "10.2.7",
        "id": "fd6b874ef06e73b5"
      },
      {
        "rule": "10.2.3",
        "prompt": "While faulting a line, a competitor fires 13 shots and gains a significant advantage. From that position a maximum of 8 scoring hits can be attained. What is the maximum number of procedurals for that fault?",
        "correct": "8",
        "options": [
          "8",
          "7",
          "9",
          "10"
        ],
        "note": "Multiple penalties for the fault are capped by the scoring hits attainable.",
        "family": "10.2.3",
        "id": "e26303c2b6fb8eef"
      },
      {
        "rule": "11.3.2",
        "prompt": "The Arbitration Committee receives a request at 11:54 on Saturday. Final results are scheduled to be declared at 11:34 on Sunday. What is the latest time the committee may rule under that schedule?",
        "correct": "Before 11:34 on Sunday",
        "options": [
          "Before 11:34 on Sunday",
          "By 11:54 on Sunday",
          "By 12:14 on Sunday",
          "Before 11:34 on Monday"
        ],
        "note": "The earlier limit is the declaration of final results.",
        "family": "11.3.2",
        "id": "2f113c3dcf31d25b"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Under Comstock, a competitor earns 70 target points, receives 20 penalty points and finishes in 8.00 seconds. What is the hit factor, rounded to four decimals?",
        "correct": "6.2500",
        "options": [
          "6.2500",
          "8.7500",
          "7.5000",
          "11.2500"
        ],
        "note": "Subtract penalties from target points before dividing by time.",
        "family": "comstock-hit-factor",
        "id": "194827b22eba79b3"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "A 110-point stage is won with a hit factor of 9. A competitor records a hit factor of 5.4. How many stage points does the competitor earn?",
        "correct": "66.00",
        "options": [
          "66.00",
          "64.00",
          "65.00",
          "67.00"
        ],
        "note": "Multiply the available stage points by the competitor’s hit factor divided by the winner’s hit factor.",
        "family": "comstock-stage-points",
        "id": "ae96f35457d3f054"
      },
      {
        "rule": "9.2.3",
        "prompt": "A competitor earns 45.2750, 31.6425 and 40.3850 stage points in the three stages of a match. What is the match total?",
        "correct": "117.3025",
        "options": [
          "117.3025",
          "117.4025",
          "117.2025",
          "118.3025"
        ],
        "note": "",
        "family": "match-total",
        "id": "14aae3449b1f03c8"
      },
      {
        "rule": "10.2.4",
        "prompt": "A competitor fires 4 shots before a mandatory reload point, 3 shots after it without reloading, and 3 shots after finally reloading. How many procedural penalties apply to the reload violation?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "Count only shots after the required reload point and before the reload.",
        "family": "10.2.4",
        "id": "ed76f5a3f5fb66c2"
      },
      {
        "rule": "10.2.5",
        "prompt": "In a Cooper Tunnel, direct contact with the overhead material drops 4 pieces. Bumping an upright drops another 2. How many procedural penalties apply?",
        "correct": "4",
        "options": [
          "4",
          "3",
          "5",
          "6"
        ],
        "note": "Pieces that fall from striking an upright are exempt.",
        "family": "10.2.5",
        "id": "491749653d1d7d26"
      },
      {
        "rule": "10.1.2",
        "prompt": "The Range Officer assesses 10 procedural penalties. What is the total point deduction for these penalties?",
        "correct": "100 points",
        "options": [
          "100 points",
          "80 points",
          "90 points",
          "110 points"
        ],
        "note": "",
        "family": "10.1.2",
        "id": "100e589875ff53f7"
      },
      {
        "rule": "10.2.1",
        "prompt": "A competitor fires 3 shots on each of 5 separate Fault Line breaches, re-entering fully between breaches and gaining no significant advantage. How many procedural penalties apply?",
        "correct": "5",
        "options": [
          "5",
          "4",
          "6",
          "7"
        ],
        "note": "With no significant advantage, count the separate occurrences.",
        "family": "10.2.1",
        "id": "5e49c94b26b2461c"
      },
      {
        "rule": "11.3.1",
        "prompt": "Match Officials record a disputed call at 10:41. The competitor talks to the Chief Range Officer 15 minutes later. What is the deadline to submit a written arbitration appeal and fee to the Range Master?",
        "correct": "11:41",
        "options": [
          "11:41",
          "11:26",
          "11:56",
          "12:11"
        ],
        "note": "",
        "family": "11.3.1",
        "id": "0d638cd42e10ffb0"
      },
      {
        "rule": "9.8.3",
        "prompt": "The provisional results show a timestamp of 13:59, but were actually posted at 14:13. What is the deadline for a competitor to file a results appeal with the Stats Officer?",
        "correct": "15:13",
        "options": [
          "15:13",
          "14:58",
          "15:28",
          "15:43"
        ],
        "note": "",
        "family": "9.8.3",
        "id": "09e5ceb49c90626e"
      },
      {
        "rule": "11.4.1",
        "prompt": "At a Level III match the maximum individual entry fee is equivalent to US$133. What is the arbitration fee equivalent in local currency?",
        "correct": "US$100",
        "options": [
          "US$100",
          "US$133",
          "US$95",
          "US$105"
        ],
        "note": "Use the lower of US$100 and the maximum individual entry fee.",
        "family": "11.4.1",
        "id": "274ea25396d70949"
      },
      {
        "rule": "9.4.2",
        "prompt": "Three paper no-shoots show 2, 3 and 1 hits in their scoring areas, respectively. What is the combined point deduction?",
        "correct": "50 points",
        "options": [
          "50 points",
          "40 points",
          "55 points",
          "60 points"
        ],
        "note": "Count 10 points per hit, capped at two hits on each paper no-shoot.",
        "family": "9.4.2",
        "id": "3fe10b1743af5a74"
      },
      {
        "rule": "10.2.7",
        "prompt": "A competitor leaves 6 non-disappearing scoring targets completely unengaged. They engage the other 9 targets. Before adding any misses, how many failure-to-engage procedurals apply?",
        "correct": "6",
        "options": [
          "6",
          "5",
          "7",
          "8"
        ],
        "note": "",
        "family": "10.2.7",
        "id": "5bd4bda93c64ae23"
      },
      {
        "rule": "10.2.3",
        "prompt": "While faulting a line, a competitor fires 14 shots and gains a significant advantage. From that position a maximum of 9 scoring hits can be attained. What is the maximum number of procedurals for that fault?",
        "correct": "9",
        "options": [
          "9",
          "8",
          "10",
          "11"
        ],
        "note": "Multiple penalties for the fault are capped by the scoring hits attainable.",
        "family": "10.2.3",
        "id": "8ba798773a134e49"
      },
      {
        "rule": "11.3.2",
        "prompt": "The Arbitration Committee receives a request at 12:13 on Saturday. The Match Director will declare the results final at 12:33 on Sunday. What deadline applies to the committee’s decision?",
        "correct": "By 12:13 on Sunday",
        "options": [
          "By 12:13 on Sunday",
          "Before 12:33 on Sunday",
          "By 11:53 on Sunday",
          "By 12:13 on Monday"
        ],
        "note": "The 24-hour deadline arrives before the declaration of final results.",
        "family": "11.3.2",
        "id": "87e95945c487e4d8"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Under Comstock, a competitor earns 75 target points, receives 30 penalty points and finishes in 5.00 seconds. What is the hit factor, rounded to four decimals?",
        "correct": "9.0000",
        "options": [
          "9.0000",
          "15.0000",
          "12.0000",
          "21.0000"
        ],
        "note": "Subtract penalties from target points before dividing by time.",
        "family": "comstock-hit-factor",
        "id": "6593ce04b3d67d7d"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "A 120-point stage is won with a hit factor of 10. A competitor records a hit factor of 7.0. How many stage points does the competitor earn?",
        "correct": "84.00",
        "options": [
          "84.00",
          "82.00",
          "83.00",
          "85.00"
        ],
        "note": "Multiply the available stage points by the competitor’s hit factor divided by the winner’s hit factor.",
        "family": "comstock-stage-points",
        "id": "125f67b0e89b3b29"
      },
      {
        "rule": "9.2.3",
        "prompt": "A competitor earns 47.2750, 32.6425 and 43.3850 stage points in the three stages of a match. What is the match total?",
        "correct": "123.3025",
        "options": [
          "123.3025",
          "123.4025",
          "123.2025",
          "124.3025"
        ],
        "note": "",
        "family": "match-total",
        "id": "ac71cbd4257fe44c"
      },
      {
        "rule": "10.2.4",
        "prompt": "A competitor fires 1 shots before a mandatory reload point, 3 shots after it without reloading, and 4 shots after finally reloading. How many procedural penalties apply to the reload violation?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "Count only shots after the required reload point and before the reload.",
        "family": "10.2.4",
        "id": "ad42741d9b5b0b33"
      },
      {
        "rule": "10.2.5",
        "prompt": "In a Cooper Tunnel, direct contact with the overhead material drops 1 pieces. Bumping an upright drops another 3. How many procedural penalties apply?",
        "correct": "1",
        "options": [
          "1",
          "0",
          "2",
          "3"
        ],
        "note": "Pieces that fall from striking an upright are exempt.",
        "family": "10.2.5",
        "id": "073fa27a14c6fdba"
      },
      {
        "rule": "10.1.2",
        "prompt": "The Range Officer assesses 11 procedural penalties. What is the total point deduction for these penalties?",
        "correct": "110 points",
        "options": [
          "110 points",
          "90 points",
          "100 points",
          "120 points"
        ],
        "note": "",
        "family": "10.1.2",
        "id": "6ced0a30c97d29fb"
      },
      {
        "rule": "10.2.1",
        "prompt": "A competitor fires 4 shots on each of 2 separate Fault Line breaches, re-entering fully between breaches and gaining no significant advantage. How many procedural penalties apply?",
        "correct": "2",
        "options": [
          "2",
          "1",
          "3",
          "4"
        ],
        "note": "With no significant advantage, count the separate occurrences.",
        "family": "10.2.1",
        "id": "0fdc8b40955167f4"
      },
      {
        "rule": "11.3.1",
        "prompt": "Match Officials record a disputed call at 11:04. The competitor talks to the Chief Range Officer 15 minutes later. What is the deadline to submit a written arbitration appeal and fee to the Range Master?",
        "correct": "12:04",
        "options": [
          "12:04",
          "11:49",
          "12:19",
          "12:34"
        ],
        "note": "",
        "family": "11.3.1",
        "id": "74c72e17cf94ace9"
      },
      {
        "rule": "9.8.3",
        "prompt": "The provisional results show a timestamp of 14:16, but were actually posted at 14:27. What is the deadline for a competitor to file a results appeal with the Stats Officer?",
        "correct": "15:27",
        "options": [
          "15:27",
          "15:12",
          "15:42",
          "15:57"
        ],
        "note": "",
        "family": "9.8.3",
        "id": "7218042e14ad7648"
      },
      {
        "rule": "11.4.1",
        "prompt": "At a Level III match the maximum individual entry fee is equivalent to US$74. What is the arbitration fee equivalent in local currency?",
        "correct": "US$74",
        "options": [
          "US$74",
          "US$100",
          "US$69",
          "US$79"
        ],
        "note": "Use the lower of US$100 and the maximum individual entry fee.",
        "family": "11.4.1",
        "id": "84a17151ec6235aa"
      },
      {
        "rule": "9.4.2",
        "prompt": "Three paper no-shoots show 3, 3 and 1 hits in their scoring areas, respectively. What is the combined point deduction?",
        "correct": "50 points",
        "options": [
          "50 points",
          "40 points",
          "55 points",
          "60 points"
        ],
        "note": "Count 10 points per hit, capped at two hits on each paper no-shoot.",
        "family": "9.4.2",
        "id": "9362ece878e6df51"
      },
      {
        "rule": "10.2.7",
        "prompt": "A competitor leaves 3 non-disappearing scoring targets completely unengaged. They engage the other 10 targets. Before adding any misses, how many failure-to-engage procedurals apply?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "",
        "family": "10.2.7",
        "id": "f187f41432c19f9e"
      },
      {
        "rule": "10.2.3",
        "prompt": "While faulting a line, a competitor fires 15 shots and gains a significant advantage. From that position a maximum of 10 scoring hits can be attained. What is the maximum number of procedurals for that fault?",
        "correct": "10",
        "options": [
          "10",
          "9",
          "11",
          "12"
        ],
        "note": "Multiple penalties for the fault are capped by the scoring hits attainable.",
        "family": "10.2.3",
        "id": "1d0b8f7c31502eb7"
      },
      {
        "rule": "11.3.2",
        "prompt": "The Arbitration Committee receives a request at 12:32 on Saturday. Final results are scheduled to be declared at 12:12 on Sunday. What is the latest time the committee may rule under that schedule?",
        "correct": "Before 12:12 on Sunday",
        "options": [
          "Before 12:12 on Sunday",
          "By 12:32 on Sunday",
          "By 12:52 on Sunday",
          "Before 12:12 on Monday"
        ],
        "note": "The earlier limit is the declaration of final results.",
        "family": "11.3.2",
        "id": "0a04767b90011120"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Under Comstock, a competitor earns 80 target points, receives 10 penalty points and finishes in 6.00 seconds. What is the hit factor, rounded to four decimals?",
        "correct": "11.6667",
        "options": [
          "11.6667",
          "13.3333",
          "12.5000",
          "15.0000"
        ],
        "note": "Subtract penalties from target points before dividing by time.",
        "family": "comstock-hit-factor",
        "id": "0a8487a56defd7d4"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "A 130-point stage is won with a hit factor of 8. A competitor records a hit factor of 6.00. How many stage points does the competitor earn?",
        "correct": "97.50",
        "options": [
          "97.50",
          "95.50",
          "96.50",
          "98.50"
        ],
        "note": "Multiply the available stage points by the competitor’s hit factor divided by the winner’s hit factor.",
        "family": "comstock-stage-points",
        "id": "581a8fb3529e434e"
      },
      {
        "rule": "9.2.3",
        "prompt": "A competitor earns 49.2750, 33.6425 and 46.3850 stage points in the three stages of a match. What is the match total?",
        "correct": "129.3025",
        "options": [
          "129.3025",
          "129.4025",
          "129.2025",
          "130.3025"
        ],
        "note": "",
        "family": "match-total",
        "id": "24a2902d339963fb"
      },
      {
        "rule": "10.2.4",
        "prompt": "A competitor fires 2 shots before a mandatory reload point, 4 shots after it without reloading, and 2 shots after finally reloading. How many procedural penalties apply to the reload violation?",
        "correct": "4",
        "options": [
          "4",
          "3",
          "5",
          "6"
        ],
        "note": "Count only shots after the required reload point and before the reload.",
        "family": "10.2.4",
        "id": "a63d7cb694c1e4e7"
      },
      {
        "rule": "10.2.5",
        "prompt": "In a Cooper Tunnel, direct contact with the overhead material drops 2 pieces. Bumping an upright drops another 3. How many procedural penalties apply?",
        "correct": "2",
        "options": [
          "2",
          "1",
          "3",
          "4"
        ],
        "note": "Pieces that fall from striking an upright are exempt.",
        "family": "10.2.5",
        "id": "d4412d59638309cc"
      },
      {
        "rule": "10.1.2",
        "prompt": "The Range Officer assesses 12 procedural penalties. What is the total point deduction for these penalties?",
        "correct": "120 points",
        "options": [
          "120 points",
          "100 points",
          "110 points",
          "130 points"
        ],
        "note": "",
        "family": "10.1.2",
        "id": "2da427e627a18668"
      },
      {
        "rule": "10.2.1",
        "prompt": "A competitor fires 4 shots on each of 3 separate Fault Line breaches, re-entering fully between breaches and gaining no significant advantage. How many procedural penalties apply?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "With no significant advantage, count the separate occurrences.",
        "family": "10.2.1",
        "id": "21bc41077313a1fb"
      },
      {
        "rule": "11.3.1",
        "prompt": "Match Officials record a disputed call at 11:27. The competitor talks to the Chief Range Officer 15 minutes later. What is the deadline to submit a written arbitration appeal and fee to the Range Master?",
        "correct": "12:27",
        "options": [
          "12:27",
          "12:12",
          "12:42",
          "12:57"
        ],
        "note": "",
        "family": "11.3.1",
        "id": "8b94d01c354e3638"
      },
      {
        "rule": "9.8.3",
        "prompt": "The provisional results show a timestamp of 14:33, but were actually posted at 14:45. What is the deadline for a competitor to file a results appeal with the Stats Officer?",
        "correct": "15:45",
        "options": [
          "15:45",
          "15:30",
          "16:00",
          "16:15"
        ],
        "note": "",
        "family": "9.8.3",
        "id": "7aba270f1596c966"
      },
      {
        "rule": "11.4.1",
        "prompt": "At a Level III match the maximum individual entry fee is equivalent to US$139. What is the arbitration fee equivalent in local currency?",
        "correct": "US$100",
        "options": [
          "US$100",
          "US$139",
          "US$95",
          "US$105"
        ],
        "note": "Use the lower of US$100 and the maximum individual entry fee.",
        "family": "11.4.1",
        "id": "5bb2c4fc1e28915c"
      },
      {
        "rule": "9.4.2",
        "prompt": "Three paper no-shoots show 1, 4 and 1 hits in their scoring areas, respectively. What is the combined point deduction?",
        "correct": "40 points",
        "options": [
          "40 points",
          "30 points",
          "45 points",
          "50 points"
        ],
        "note": "Count 10 points per hit, capped at two hits on each paper no-shoot.",
        "family": "9.4.2",
        "id": "2ce804cf7d3c65a5"
      },
      {
        "rule": "10.2.7",
        "prompt": "A competitor leaves 4 non-disappearing scoring targets completely unengaged. They engage the other 11 targets. Before adding any misses, how many failure-to-engage procedurals apply?",
        "correct": "4",
        "options": [
          "4",
          "3",
          "5",
          "6"
        ],
        "note": "",
        "family": "10.2.7",
        "id": "6a197c545df016c0"
      },
      {
        "rule": "10.2.3",
        "prompt": "While faulting a line, a competitor fires 16 shots and gains a significant advantage. From that position a maximum of 11 scoring hits can be attained. What is the maximum number of procedurals for that fault?",
        "correct": "11",
        "options": [
          "11",
          "10",
          "12",
          "13"
        ],
        "note": "Multiple penalties for the fault are capped by the scoring hits attainable.",
        "family": "10.2.3",
        "id": "ee190b22289ebab1"
      },
      {
        "rule": "11.3.2",
        "prompt": "The Arbitration Committee receives a request at 12:51 on Saturday. The Match Director will declare the results final at 13:11 on Sunday. What deadline applies to the committee’s decision?",
        "correct": "By 12:51 on Sunday",
        "options": [
          "By 12:51 on Sunday",
          "Before 13:11 on Sunday",
          "By 12:31 on Sunday",
          "By 12:51 on Monday"
        ],
        "note": "The 24-hour deadline arrives before the declaration of final results.",
        "family": "11.3.2",
        "id": "87475e17dc3ff41f"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Under Comstock, a competitor earns 85 target points, receives 20 penalty points and finishes in 7.00 seconds. What is the hit factor, rounded to four decimals?",
        "correct": "9.2857",
        "options": [
          "9.2857",
          "12.1429",
          "10.7143",
          "15.0000"
        ],
        "note": "Subtract penalties from target points before dividing by time.",
        "family": "comstock-hit-factor",
        "id": "b85cb293f700cca4"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "A 140-point stage is won with a hit factor of 9. A competitor records a hit factor of 7.2. How many stage points does the competitor earn?",
        "correct": "112.00",
        "options": [
          "112.00",
          "110.00",
          "111.00",
          "113.00"
        ],
        "note": "Multiply the available stage points by the competitor’s hit factor divided by the winner’s hit factor.",
        "family": "comstock-stage-points",
        "id": "80da1262251a8622"
      },
      {
        "rule": "9.2.3",
        "prompt": "A competitor earns 51.2750, 34.6425 and 49.3850 stage points in the three stages of a match. What is the match total?",
        "correct": "135.3025",
        "options": [
          "135.3025",
          "135.4025",
          "135.2025",
          "136.3025"
        ],
        "note": "",
        "family": "match-total",
        "id": "dc93ed95ac38a11e"
      },
      {
        "rule": "10.2.4",
        "prompt": "A competitor fires 3 shots before a mandatory reload point, 4 shots after it without reloading, and 3 shots after finally reloading. How many procedural penalties apply to the reload violation?",
        "correct": "4",
        "options": [
          "4",
          "3",
          "5",
          "6"
        ],
        "note": "Count only shots after the required reload point and before the reload.",
        "family": "10.2.4",
        "id": "ff81f0ebb90fa7fe"
      },
      {
        "rule": "10.2.5",
        "prompt": "In a Cooper Tunnel, direct contact with the overhead material drops 3 pieces. Bumping an upright drops another 3. How many procedural penalties apply?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "Pieces that fall from striking an upright are exempt.",
        "family": "10.2.5",
        "id": "a69a26a0962324c0"
      },
      {
        "rule": "10.1.2",
        "prompt": "The Range Officer assesses 13 procedural penalties. What is the total point deduction for these penalties?",
        "correct": "130 points",
        "options": [
          "130 points",
          "110 points",
          "120 points",
          "140 points"
        ],
        "note": "",
        "family": "10.1.2",
        "id": "f2b4498c35093061"
      },
      {
        "rule": "10.2.1",
        "prompt": "A competitor fires 4 shots on each of 4 separate Fault Line breaches, re-entering fully between breaches and gaining no significant advantage. How many procedural penalties apply?",
        "correct": "4",
        "options": [
          "4",
          "3",
          "5",
          "6"
        ],
        "note": "With no significant advantage, count the separate occurrences.",
        "family": "10.2.1",
        "id": "bcbc115517493d04"
      },
      {
        "rule": "11.3.1",
        "prompt": "Match Officials record a disputed call at 11:50. The competitor talks to the Chief Range Officer 15 minutes later. What is the deadline to submit a written arbitration appeal and fee to the Range Master?",
        "correct": "12:50",
        "options": [
          "12:50",
          "12:35",
          "13:05",
          "13:20"
        ],
        "note": "",
        "family": "11.3.1",
        "id": "5fa6865654c74be5"
      },
      {
        "rule": "9.8.3",
        "prompt": "The provisional results show a timestamp of 14:50, but were actually posted at 15:03. What is the deadline for a competitor to file a results appeal with the Stats Officer?",
        "correct": "16:03",
        "options": [
          "16:03",
          "15:48",
          "16:18",
          "16:33"
        ],
        "note": "",
        "family": "9.8.3",
        "id": "2bb26fd96d3d99e0"
      },
      {
        "rule": "11.4.1",
        "prompt": "At a Level III match the maximum individual entry fee is equivalent to US$78. What is the arbitration fee equivalent in local currency?",
        "correct": "US$78",
        "options": [
          "US$78",
          "US$100",
          "US$73",
          "US$83"
        ],
        "note": "Use the lower of US$100 and the maximum individual entry fee.",
        "family": "11.4.1",
        "id": "b0c07a4dded3ae57"
      },
      {
        "rule": "9.4.2",
        "prompt": "Three paper no-shoots show 2, 4 and 1 hits in their scoring areas, respectively. What is the combined point deduction?",
        "correct": "50 points",
        "options": [
          "50 points",
          "40 points",
          "55 points",
          "60 points"
        ],
        "note": "Count 10 points per hit, capped at two hits on each paper no-shoot.",
        "family": "9.4.2",
        "id": "b8d2a9da680ff132"
      },
      {
        "rule": "10.2.7",
        "prompt": "A competitor leaves 5 non-disappearing scoring targets completely unengaged. They engage the other 12 targets. Before adding any misses, how many failure-to-engage procedurals apply?",
        "correct": "5",
        "options": [
          "5",
          "4",
          "6",
          "7"
        ],
        "note": "",
        "family": "10.2.7",
        "id": "6027dec45b5000f3"
      },
      {
        "rule": "10.2.3",
        "prompt": "While faulting a line, a competitor fires 17 shots and gains a significant advantage. From that position a maximum of 12 scoring hits can be attained. What is the maximum number of procedurals for that fault?",
        "correct": "12",
        "options": [
          "12",
          "11",
          "13",
          "14"
        ],
        "note": "Multiple penalties for the fault are capped by the scoring hits attainable.",
        "family": "10.2.3",
        "id": "8ba2c28d0727460d"
      },
      {
        "rule": "11.3.2",
        "prompt": "The Arbitration Committee receives a request at 13:10 on Saturday. Final results are scheduled to be declared at 12:50 on Sunday. What is the latest time the committee may rule under that schedule?",
        "correct": "Before 12:50 on Sunday",
        "options": [
          "Before 12:50 on Sunday",
          "By 13:10 on Sunday",
          "By 13:30 on Sunday",
          "Before 12:50 on Monday"
        ],
        "note": "The earlier limit is the declaration of final results.",
        "family": "11.3.2",
        "id": "75069bcdc82cd29e"
      }
    ]
  },
  {
    "id": "action-air-rifle",
    "name": "Action Air Rifle",
    "group": "Action Air",
    "book": "https://drive.google.com/file/d/1T7xPDvhIsIkMD4O_2yiw3_u9NPja7t-J/view",
    "questions": [
      {
        "rule": "1.2.1.2",
        "prompt": "What is the maximum required projectile count for an Action Air Rifle Medium Course?",
        "correct": "20",
        "options": [
          "20",
          "18",
          "22",
          "24"
        ],
        "note": "",
        "family": "1.2.1.2",
        "id": "26c50d389ca07f55"
      },
      {
        "rule": "Appendix D, item 1",
        "prompt": "What is the minimum overall length listed for Action Air Rifle?",
        "correct": "650 mm",
        "options": [
          "650 mm",
          "600 mm",
          "625 mm",
          "675 mm"
        ],
        "note": "",
        "family": "Appendix D, item 1",
        "id": "d5ed2839899c65fa"
      },
      {
        "rule": "Appendix D, item 3",
        "prompt": "How many projectiles may be in the magazine at most at the Start Signal?",
        "correct": "30",
        "options": [
          "30",
          "28",
          "29",
          "31"
        ],
        "note": "",
        "family": "Appendix D, item 3",
        "id": "a581ce65d62b82aa"
      },
      {
        "rule": "Appendix D, item 7",
        "prompt": "Which Action Air Rifle division permits a bipod?",
        "correct": "Semi Auto Open only",
        "options": [
          "Semi Auto Open only",
          "Semi Auto Standard only",
          "Both Semi Auto divisions",
          "Neither Semi Auto division"
        ],
        "note": "",
        "family": "Appendix D, item 7",
        "id": "fdaa3d9158f64cfd"
      },
      {
        "rule": "2.1.3",
        "prompt": "While rigid targets are being shot, what minimum distance must be maintained?",
        "correct": "2 m",
        "options": [
          "2 m",
          "1 m",
          "3 m",
          "4 m"
        ],
        "note": "If a Fault Line is used to limit the approach, it must be placed at least 3 m away.",
        "family": "2.1.3",
        "id": "5ce25fc4c99b19b4"
      },
      {
        "rule": "9.4.2",
        "prompt": "Three hits are visible in the scoring area of a single paper no-shoot. What penalty is assessed on that no-shoot?",
        "correct": "−20 points",
        "options": [
          "−20 points",
          "−10 points",
          "−25 points",
          "−30 points"
        ],
        "note": "Two hits at most are penalized on a single paper no-shoot, at 10 points each.",
        "family": "9.4.2",
        "id": "3e71e77f78236b79"
      },
      {
        "rule": "3.2.3",
        "prompt": "Between squads, the written stage briefing needs a clarification for consistency. Who has the authority to amend it?",
        "correct": "Range Master",
        "options": [
          "Range Master",
          "Chief Range Officer",
          "Range Officer",
          "Match Director"
        ],
        "note": "",
        "family": "3.2.3",
        "id": "24be4f173f88362d"
      },
      {
        "rule": "9.1.3",
        "prompt": "A paper target is patched before scoring and the original score cannot be determined. What must the Range Officer order?",
        "correct": "A reshoot of the entire course of fire",
        "options": [
          "A reshoot of the entire course of fire",
          "A reshoot of the affected target only",
          "A rescore using the minimum possible target score",
          "A rescore using the maximum possible target score"
        ],
        "note": "",
        "family": "9.1.3",
        "id": "84e73bae40fef1d1"
      },
      {
        "rule": "10.2.4",
        "prompt": "A competitor fires two shots after the point where a mandatory reload was required, then reloads and fires one more. How many procedural penalties apply for the missed reload?",
        "correct": "2",
        "options": [
          "2",
          "1",
          "3",
          "0"
        ],
        "note": "Count each shot after the required reload point until the reload is performed.",
        "family": "10.2.4",
        "id": "1799ef99d814ab1b"
      },
      {
        "rule": "11.3.1",
        "prompt": "A disputed call is recorded by Match Officials at 13:20. By what time must the written arbitration appeal and applicable fee be submitted to the Range Master?",
        "correct": "14:20",
        "options": [
          "14:20",
          "13:50",
          "14:05",
          "14:50"
        ],
        "note": "The submission window is one hour from the recorded time of the disputed call.",
        "family": "11.3.1",
        "id": "78d8cac4ae7947d1"
      },
      {
        "rule": "9.5.2",
        "prompt": "A hit on a scoring paper target touches the line between two scoring zones. Which value counts?",
        "correct": "The higher of the two zone values",
        "options": [
          "The higher of the two zone values",
          "The lower of the two zone values",
          "The zone containing most of the hit",
          "The zone containing the centre of the hit"
        ],
        "note": "",
        "family": "9.5.2",
        "id": "14d00d4c36342c41"
      },
      {
        "rule": "9.2.2",
        "prompt": "To how many decimal places are individual stage points calculated for stage ranking?",
        "correct": "4",
        "options": [
          "4",
          "2",
          "3",
          "5"
        ],
        "note": "",
        "family": "9.2.2",
        "id": "9e45b306a23c2492"
      },
      {
        "rule": "3.2.4",
        "prompt": "Who sets the duration of the squad’s stage walkthrough?",
        "correct": "Range Officer",
        "options": [
          "Range Officer",
          "Chief Range Officer",
          "Range Master",
          "Match Director"
        ],
        "note": "",
        "family": "3.2.4",
        "id": "2f38cfa6c5d892fc"
      },
      {
        "rule": "3.2.4",
        "prompt": "Moving targets are demonstrated during walkthroughs. What must be consistent across competitors?",
        "correct": "Both duration and frequency",
        "options": [
          "Both duration and frequency",
          "Duration only",
          "Frequency only",
          "Neither duration nor frequency"
        ],
        "note": "",
        "family": "3.2.4",
        "id": "02fb5729cb9e04e5"
      },
      {
        "rule": "4.6.1",
        "prompt": "A competitor adjusts a target stand without authorization during inspection. What penalty may the Range Officer impose for each occurrence?",
        "correct": "One procedural penalty",
        "options": [
          "One procedural penalty",
          "Two procedural penalties",
          "One miss penalty",
          "Two miss penalties"
        ],
        "note": "",
        "family": "4.6.1",
        "id": "5ad2ec3127f1aa75"
      },
      {
        "rule": "6.2.6",
        "prompt": "A competitor is disqualified in a later Division after completing a separate Division at the same match. What happens to the complete earlier score?",
        "correct": "It stays in the results for the earlier Division",
        "options": [
          "It stays in the results for the earlier Division",
          "It stays in the results for the later Division",
          "It is removed from the earlier Division results",
          "It is kept only if the disqualification is overturned"
        ],
        "note": "",
        "family": "6.2.6",
        "id": "2bb09b780d6cd1cf"
      },
      {
        "rule": "6.6.1",
        "prompt": "A competitor misses the scheduled time for a stage. Whose prior approval is required to attempt the stage later?",
        "correct": "Match Director",
        "options": [
          "Match Director",
          "Range Master",
          "Chief Range Officer",
          "Range Officer"
        ],
        "note": "",
        "family": "6.6.1",
        "id": "1313eda1e157a923"
      },
      {
        "rule": "7.1.1",
        "prompt": "Who declares a competitor’s time, scores and penalties on the stage and verifies they are recorded correctly?",
        "correct": "Range Officer",
        "options": [
          "Range Officer",
          "Chief Range Officer",
          "Stats Officer",
          "Range Master"
        ],
        "note": "",
        "family": "7.1.1",
        "id": "0b424efb218f7879"
      },
      {
        "rule": "7.1.2",
        "prompt": "Which official has primary authority over the courses of fire specifically assigned to them, under the Range Master?",
        "correct": "Chief Range Officer",
        "options": [
          "Chief Range Officer",
          "Range Officer",
          "Stats Officer",
          "Match Director"
        ],
        "note": "",
        "family": "7.1.2",
        "id": "c118375a6b2b5323"
      },
      {
        "rule": "7.1.3",
        "prompt": "Who supervises the team that processes score sheets and produces provisional and final results?",
        "correct": "Stats Officer",
        "options": [
          "Stats Officer",
          "Chief Range Officer",
          "Range Master",
          "Quartermaster"
        ],
        "note": "",
        "family": "7.1.3",
        "id": "704c770dd49cbacc"
      },
      {
        "rule": "7.1.4",
        "prompt": "Who is responsible for distributing and maintaining targets, timers and other range equipment?",
        "correct": "Quartermaster",
        "options": [
          "Quartermaster",
          "Chief Range Officer",
          "Range Master",
          "Stats Officer"
        ],
        "note": "",
        "family": "7.1.4",
        "id": "b01b090191e21d17"
      },
      {
        "rule": "7.1.5",
        "prompt": "Which official has overall authority for range safety and rule application across the entire match range?",
        "correct": "Range Master",
        "options": [
          "Range Master",
          "Chief Range Officer",
          "Range Officer",
          "Match Director"
        ],
        "note": "",
        "family": "7.1.5",
        "id": "bfc335ecb25270a0"
      },
      {
        "rule": "8.3.5",
        "prompt": "The Range Officer calls “Stop” during an attempt. Which response is required?",
        "correct": "Stop firing and moving immediately and await instructions",
        "options": [
          "Stop firing and moving immediately and await instructions",
          "Stop firing immediately but finish moving to the next position",
          "Stop moving immediately but finish engaging the current target",
          "Stop firing and moving once the current target has been engaged"
        ],
        "note": "",
        "family": "8.3.5",
        "id": "26049216f3858162"
      },
      {
        "rule": "8.3.8",
        "prompt": "Which declaration authorizes personnel to move forward from the final shooting location for scoring and reset?",
        "correct": "Range Is Clear",
        "options": [
          "Range Is Clear",
          "Are You Ready?",
          "If You Are Finished, Unload And Show Clear",
          "Stop"
        ],
        "note": "",
        "family": "8.3.8",
        "id": "f33938909cd6cc60"
      },
      {
        "rule": "9.1.1",
        "prompt": "During scoring, what minimum distance must a competitor keep from a target unless the Range Officer gives permission to approach?",
        "correct": "1 m",
        "options": [
          "1 m",
          "0.5 m",
          "1.5 m",
          "2 m"
        ],
        "note": "",
        "family": "9.1.1",
        "id": "2d30e249199e32da"
      },
      {
        "rule": "9.1.1",
        "prompt": "A competitor approaches a target closer than 1 m without authorization during scoring. What is the sanction for a first offense?",
        "correct": "A warning",
        "options": [
          "A warning",
          "One automatic procedural penalty",
          "One automatic miss penalty",
          "A warning plus one procedural penalty"
        ],
        "note": "",
        "family": "9.1.1",
        "id": "a0c109e9369b02a9"
      },
      {
        "rule": "9.1.4",
        "prompt": "An unrestored target has extra scoring hits. The Range Officer cannot tell which hits belong to the competitor being scored. What is required?",
        "correct": "A reshoot of the course of fire",
        "options": [
          "A reshoot of the course of fire",
          "A reshoot of the target only",
          "A score using only the lowest possible hits",
          "A score using only the highest possible hits"
        ],
        "note": "",
        "family": "9.1.4",
        "id": "d865d4a181049ade"
      },
      {
        "rule": "9.1.5.1",
        "prompt": "A shot passes wholly through the scoring area of a paper target and then strikes the scoring area of a second paper scoring target. How is the second hit treated?",
        "correct": "It does not count for score",
        "options": [
          "It does not count for score",
          "It scores at its full zone value",
          "It scores at the lowest zone value",
          "It counts as a miss penalty on the second target"
        ],
        "note": "",
        "family": "9.1.5.1",
        "id": "709366270d24cc45"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Under Comstock, which calculation produces a hit factor?",
        "correct": "Target points minus penalties, then divide by time",
        "options": [
          "Target points minus penalties, then divide by time",
          "Target points divided by time, then subtract penalties",
          "Target points minus penalties, then multiply by time",
          "Time divided by target points minus penalties"
        ],
        "note": "",
        "family": "9.2.1.1",
        "id": "2fb26c1e715568ff"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Which competitor receives the maximum stage points available under Comstock?",
        "correct": "The competitor with the highest hit factor",
        "options": [
          "The competitor with the highest hit factor",
          "The competitor with the highest raw target points",
          "The competitor with the fastest recorded time",
          "The competitor with the lowest penalty total"
        ],
        "note": "",
        "family": "9.2.1.1",
        "id": "b034328d19a8c134"
      },
      {
        "rule": "9.2.3",
        "prompt": "Which quantity determines the final ranking within a Division?",
        "correct": "The sum of individual stage points",
        "options": [
          "The sum of individual stage points",
          "The sum of individual stage hit factors",
          "The sum of raw target points before factoring",
          "The average of individual stage placing positions"
        ],
        "note": "",
        "family": "9.2.3",
        "id": "de2a1ae18dce11e2"
      },
      {
        "rule": "9.3.1",
        "prompt": "The Match Director decides a tie must be broken. What does the tiebreaker change?",
        "correct": "Only the final placing of the tied competitors",
        "options": [
          "Only the final placing of the tied competitors",
          "The placing and original match points of the tied competitors",
          "The placing of every competitor in the Division",
          "The original match points without changing the placing"
        ],
        "note": "",
        "family": "9.3.1",
        "id": "0fdc055c5d39575a"
      },
      {
        "rule": "9.6.1",
        "prompt": "After “Range Is Clear” on a stage with ordinary paper targets, who may accompany the scoring official to verify the score?",
        "correct": "The competitor or their delegate",
        "options": [
          "The competitor or their delegate",
          "Only the competitor personally",
          "Only the competitor’s delegate",
          "Only the squad leader"
        ],
        "note": "",
        "family": "9.6.1",
        "id": "aa45c8d054c1ff8b"
      },
      {
        "rule": "9.6.2",
        "prompt": "The Range Officer intends to start scoring paper targets before the competitor finishes the stage. When must competitors be advised?",
        "correct": "During the squad briefing",
        "options": [
          "During the squad briefing",
          "After the Start Signal",
          "After the competitor’s last shot",
          "When provisional results are posted"
        ],
        "note": "",
        "family": "9.6.2",
        "id": "f7c24a4496425719"
      },
      {
        "rule": "9.6.3",
        "prompt": "Neither the competitor nor their delegate verifies a target during scoring. What happens to the right to appeal the scoring of that target?",
        "correct": "It is lost",
        "options": [
          "It is lost",
          "It stays open until the target is reset",
          "It stays open until the score sheet is signed",
          "It stays open until provisional results are posted"
        ],
        "note": "",
        "family": "9.6.3",
        "id": "5ff0c66acb294d60"
      },
      {
        "rule": "9.6.4",
        "prompt": "Who must first receive a challenge to the score on a target before it is patched?",
        "correct": "Range Officer",
        "options": [
          "Range Officer",
          "Chief Range Officer",
          "Range Master",
          "Stats Officer"
        ],
        "note": "",
        "family": "9.6.4",
        "id": "ec57f181f231d00b"
      },
      {
        "rule": "9.7.4",
        "prompt": "A score sheet is signed by both the competitor and Range Officer. With no mutual consent and no arbitration decision, which change is explicitly permitted?",
        "correct": "Correcting an arithmetic error",
        "options": [
          "Correcting an arithmetic error",
          "Re-evaluating a disputed scoring-zone hit",
          "Changing the recorded time based on a squad member’s estimate",
          "Adding a miss based on a later recollection"
        ],
        "note": "",
        "family": "9.7.4",
        "id": "e73cef78ffc6e010"
      },
      {
        "rule": "9.7.5",
        "prompt": "A score sheet has excess entries. To whom must it promptly be referred?",
        "correct": "Range Master",
        "options": [
          "Range Master",
          "Chief Range Officer",
          "Stats Officer",
          "Match Director"
        ],
        "note": "",
        "family": "9.7.5",
        "id": "e89fc7b2c365ea93"
      },
      {
        "rule": "9.7.6.1",
        "prompt": "A stage time is missing from the score sheet and a reshoot is impossible. What is the stage score?",
        "correct": "Zero",
        "options": [
          "Zero",
          "The raw target points minus penalties",
          "The division’s average stage score",
          "The competitor’s average score from the other stages"
        ],
        "note": "",
        "family": "9.7.6.1",
        "id": "164d6cc592c33b90"
      },
      {
        "rule": "9.7.7",
        "prompt": "The original score sheet is lost. The competitor has a legible duplicate acceptable to the Range Master. What is used?",
        "correct": "The competitor’s duplicate",
        "options": [
          "The competitor’s duplicate",
          "A reshoot regardless of the duplicate",
          "A zero score regardless of the duplicate",
          "The squad’s median score"
        ],
        "note": "",
        "family": "9.7.7",
        "id": "9f7a3ce2c9f20e67"
      },
      {
        "rule": "9.8.2",
        "prompt": "At Level IV, where must provisional stage results be posted after all competitors finish?",
        "correct": "At the range and the official match hotel",
        "options": [
          "At the range and the official match hotel",
          "At the range only",
          "At the official match hotel only",
          "At the range and the nearest hotel"
        ],
        "note": "",
        "family": "9.8.2",
        "id": "647b5a758a1113f2"
      },
      {
        "rule": "9.8.3",
        "prompt": "A competitor detects an error in the published provisional stage results. With whom must the appeal be filed?",
        "correct": "Stats Officer",
        "options": [
          "Stats Officer",
          "Chief Range Officer",
          "Range Master",
          "Match Director"
        ],
        "note": "",
        "family": "9.8.3",
        "id": "57791f0ed3b424b0"
      },
      {
        "rule": "9.9.1",
        "prompt": "A moving paper target presents part of its A zone at rest after activation. How is it classified?",
        "correct": "Non-disappearing",
        "options": [
          "Non-disappearing",
          "Disappearing unless the full A zone remains visible",
          "Disappearing unless part of the A zone was visible before activation too",
          "Disappearing because the target moves"
        ],
        "note": "",
        "family": "9.9.1",
        "id": "62043a204521db1d"
      },
      {
        "rule": "9.9.2",
        "prompt": "A genuinely disappearing target is activated before the last shot, but never engaged. Which of the following applies to that target?",
        "correct": "Neither a miss nor a failure-to-engage penalty",
        "options": [
          "Neither a miss nor a failure-to-engage penalty",
          "A miss penalty only",
          "A failure-to-engage penalty only",
          "Both a miss and a failure-to-engage penalty"
        ],
        "note": "",
        "family": "9.9.2",
        "id": "a24aa249ff5c8fb5"
      },
      {
        "rule": "9.9.3",
        "prompt": "A stationary target is partly concealed by a moving vision barrier. Part of its A zone remains exposed after activation. How is the target classified?",
        "correct": "Non-disappearing",
        "options": [
          "Non-disappearing",
          "Disappearing unless its full A zone is exposed",
          "Disappearing because the barrier moves",
          "Disappearing unless the barrier itself is a scoring target"
        ],
        "note": "",
        "family": "9.9.3",
        "id": "32b991228b675bae"
      },
      {
        "rule": "10.1.1",
        "prompt": "What must be recorded for procedural penalties on the score sheet?",
        "correct": "Both the number and the reason",
        "options": [
          "Both the number and the reason",
          "The number only",
          "The reason only",
          "The number and the competitor’s agreement"
        ],
        "note": "",
        "family": "10.1.1",
        "id": "98d216ec3d12862b"
      },
      {
        "rule": "10.1.4",
        "prompt": "A competitor fires while faulting a line, then fires at the same target from inside the line. What happens to the original applicable fault penalty?",
        "correct": "It still applies",
        "options": [
          "It still applies",
          "It is removed if the later shot hits",
          "It is removed if both shots hit",
          "It is changed to a miss if the later shot hits"
        ],
        "note": "",
        "family": "10.1.4",
        "id": "11b671e372d1b1db"
      },
      {
        "rule": "10.2.1",
        "prompt": "A competitor touches the ground beyond a Fault Line while shooting without gaining a significant advantage. How is the penalty normally counted?",
        "correct": "One per occurrence",
        "options": [
          "One per occurrence",
          "One per shot regardless of advantage",
          "One per target engaged",
          "One per scoring hit"
        ],
        "note": "",
        "family": "10.2.1",
        "id": "2687007cbe9cade2"
      },
      {
        "rule": "10.2.2",
        "prompt": "A competitor ignores a written stage procedure and gains a significant advantage. What penalty basis may apply in place of a single penalty for the occurrence?",
        "correct": "One per shot fired during the breach, subject to the applicable cap",
        "options": [
          "One per shot fired during the breach, subject to the applicable cap",
          "One per scoring hit during the breach, subject to the applicable cap",
          "One per target engaged during the breach, subject to the applicable cap",
          "One per shot fired after the breach ended, subject to the applicable cap"
        ],
        "note": "",
        "family": "10.2.2",
        "id": "acf60b7a43e61d24"
      },
      {
        "rule": "10.2.6",
        "prompt": "The Range Officer stops a competitor in time for a first instance of creeping after “Standby” and before the signal. What follows?",
        "correct": "A warning and a restart",
        "options": [
          "A warning and a restart",
          "A procedural penalty and a restart",
          "A warning without a restart",
          "A procedural penalty without a restart"
        ],
        "note": "",
        "family": "10.2.6",
        "id": "d0aa312c30a9e68f"
      },
      {
        "rule": "10.2.7",
        "prompt": "A competitor fails to engage a non-disappearing scoring target. What normally applies?",
        "correct": "One procedural per target plus applicable misses",
        "options": [
          "One procedural per target plus applicable misses",
          "One procedural per target instead of applicable misses",
          "One procedural per missed hit plus applicable misses",
          "Applicable misses only"
        ],
        "note": "",
        "family": "10.2.7",
        "id": "3b6f1c3d22f37ba8"
      },
      {
        "rule": "10.3.2",
        "prompt": "After issuing a disqualification, who must be notified as soon as possible?",
        "correct": "Range Master",
        "options": [
          "Range Master",
          "Chief Range Officer",
          "Stats Officer",
          "Match Director"
        ],
        "note": "",
        "family": "10.3.2",
        "id": "1e60f82bfdebcdb7"
      },
      {
        "rule": "11.1.3",
        "prompt": "A competitor disputes an initial Range Officer ruling. Which is the normal next level before the Range Master?",
        "correct": "Chief Range Officer",
        "options": [
          "Chief Range Officer",
          "Stats Officer",
          "Match Director",
          "Quartermaster"
        ],
        "note": "",
        "family": "11.1.3",
        "id": "e269dacafee493b9"
      },
      {
        "rule": "11.3.2",
        "prompt": "When must the Arbitration Committee reach its decision?",
        "correct": "Within 24 hours of the request or before final results are declared, whichever comes first",
        "options": [
          "Within 24 hours of the request or before final results are declared, whichever comes first",
          "Within 24 hours of the request or before final results are declared, whichever comes last",
          "Within 12 hours of the request or before final results are declared, whichever comes first",
          "Within 24 hours of the disputed call or before final results are declared, whichever comes first"
        ],
        "note": "",
        "family": "11.3.2",
        "id": "ab7a04fd99f427cc"
      },
      {
        "rule": "11.4.1",
        "prompt": "At a Level III match, which amount determines the arbitration fee in local currency?",
        "correct": "The lower of US$100 and the maximum individual entry fee",
        "options": [
          "The lower of US$100 and the maximum individual entry fee",
          "The higher of US$100 and the maximum individual entry fee",
          "The lower of US$100 and the minimum individual entry fee",
          "The maximum individual entry fee regardless of US$100"
        ],
        "note": "",
        "family": "11.4.1",
        "id": "d660fd589e3be129"
      },
      {
        "rule": "11.6.2",
        "prompt": "Who implements and posts the Arbitration Committee’s decision?",
        "correct": "Range Master",
        "options": [
          "Range Master",
          "Chief Range Officer",
          "Stats Officer",
          "Match Director"
        ],
        "note": "",
        "family": "11.6.2",
        "id": "b42ae1c861a560b7"
      },
      {
        "rule": "11.6.4",
        "prompt": "For what can a recorded Arbitration Committee decision serve as precedent?",
        "correct": "A similar subsequent incident at the same match",
        "options": [
          "A similar subsequent incident at the same match",
          "A similar earlier incident at the same match",
          "Any subsequent incident at the same match",
          "A similar incident only at the next match"
        ],
        "note": "",
        "family": "11.6.4",
        "id": "3487c77fa189a244"
      },
      {
        "rule": "11.7.1",
        "prompt": "May someone other than the competitor involved submit an appeal on a third-party basis?",
        "correct": "Yes, under the same Chapter 11 provisions",
        "options": [
          "Yes, under the same Chapter 11 provisions",
          "Yes, with a separate deadline set by the squad",
          "Yes, but only at Level IV and above",
          "No, only the competitor involved may appeal"
        ],
        "note": "",
        "family": "11.7.1",
        "id": "efd6cd40b8400be5"
      },
      {
        "rule": "1.2.1.1",
        "prompt": "A proposed Short Course requires 11 projectiles to complete. To what maximum must the required count be reduced?",
        "correct": "10",
        "options": [
          "10",
          "8",
          "9",
          "11"
        ],
        "note": "",
        "family": "1.2.1.1",
        "id": "91c2c53b71b8b572"
      },
      {
        "rule": "1.2.1.2",
        "prompt": "What is the maximum number of scoring targets a Medium Course may require from a single location or view?",
        "correct": "5",
        "options": [
          "5",
          "4",
          "6",
          "7"
        ],
        "note": "",
        "family": "1.2.1.2",
        "id": "95d706f4f97213f1"
      },
      {
        "rule": "1.2.1.3",
        "prompt": "A proposed Long Course requires 42 projectiles to complete. What is the maximum required count?",
        "correct": "40",
        "options": [
          "40",
          "38",
          "39",
          "41"
        ],
        "note": "",
        "family": "1.2.1.3",
        "id": "dd83b4efeb43aaf1"
      },
      {
        "rule": "5.6.1",
        "prompt": "The host Region’s law limits projectile energy to 1.5 J. What limit applies at this match?",
        "correct": "1.5 J",
        "options": [
          "1.5 J",
          "1.75 J",
          "2.0 J",
          "2.5 J"
        ],
        "note": "",
        "family": "5.6.1",
        "id": "c12586e0a0ad5d86"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Under Comstock, a competitor earns 35 target points, receives 10 penalty points and finishes in 5.00 seconds. What is the hit factor, rounded to four decimals?",
        "correct": "5.0000",
        "options": [
          "5.0000",
          "7.0000",
          "6.0000",
          "9.0000"
        ],
        "note": "Subtract penalties from target points before dividing by time.",
        "family": "comstock-hit-factor",
        "id": "21196cb03e879fbf"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "A 40-point stage is won with a hit factor of 8. A competitor records a hit factor of 4.0. How many stage points does the competitor earn?",
        "correct": "20.00",
        "options": [
          "20.00",
          "18.00",
          "19.00",
          "21.00"
        ],
        "note": "Multiply the available stage points by the competitor’s hit factor divided by the winner’s hit factor.",
        "family": "comstock-stage-points",
        "id": "3b223b933ed2c978"
      },
      {
        "rule": "9.2.3",
        "prompt": "A competitor earns 31.2750, 24.6425 and 19.3850 stage points in the three stages of a match. What is the match total?",
        "correct": "75.3025",
        "options": [
          "75.3025",
          "75.4025",
          "75.2025",
          "76.3025"
        ],
        "note": "",
        "family": "match-total",
        "id": "84eed92ac69be18f"
      },
      {
        "rule": "10.2.4",
        "prompt": "A competitor fires 1 shots before a mandatory reload point, 1 shots after it without reloading, and 2 shots after finally reloading. How many procedural penalties apply to the reload violation?",
        "correct": "1",
        "options": [
          "1",
          "0",
          "2",
          "3"
        ],
        "note": "Count only shots after the required reload point and before the reload.",
        "family": "10.2.4",
        "id": "b13c6a5f1fe012ab"
      },
      {
        "rule": "10.2.5",
        "prompt": "In a Cooper Tunnel, direct contact with the overhead material drops 1 pieces. Bumping an upright drops another 1. How many procedural penalties apply?",
        "correct": "1",
        "options": [
          "1",
          "0",
          "2",
          "3"
        ],
        "note": "Pieces that fall from striking an upright are exempt.",
        "family": "10.2.5",
        "id": "2bc7b9ec0789807c"
      },
      {
        "rule": "10.1.2",
        "prompt": "The Range Officer assesses 3 procedural penalties. What is the total point deduction for these penalties?",
        "correct": "30 points",
        "options": [
          "30 points",
          "10 points",
          "20 points",
          "40 points"
        ],
        "note": "",
        "family": "10.1.2",
        "id": "b3c678f4a8413c91"
      },
      {
        "rule": "10.2.1",
        "prompt": "A competitor fires 2 shots on each of 2 separate Fault Line breaches, re-entering fully between breaches and gaining no significant advantage. How many procedural penalties apply?",
        "correct": "2",
        "options": [
          "2",
          "1",
          "3",
          "4"
        ],
        "note": "With no significant advantage, count the separate occurrences.",
        "family": "10.2.1",
        "id": "65d0e1630759337f"
      },
      {
        "rule": "11.3.1",
        "prompt": "Match Officials record a disputed call at 08:00. The competitor talks to the Chief Range Officer 15 minutes later. What is the deadline to submit a written arbitration appeal and fee to the Range Master?",
        "correct": "09:00",
        "options": [
          "09:00",
          "08:45",
          "09:15",
          "09:30"
        ],
        "note": "",
        "family": "11.3.1",
        "id": "e73f27d96024f83f"
      },
      {
        "rule": "9.8.3",
        "prompt": "The provisional results show a timestamp of 12:00, but were actually posted at 12:11. What is the deadline for a competitor to file a results appeal with the Stats Officer?",
        "correct": "13:11",
        "options": [
          "13:11",
          "12:56",
          "13:26",
          "13:41"
        ],
        "note": "",
        "family": "9.8.3",
        "id": "dc0d2ecaa091ddbb"
      },
      {
        "rule": "11.4.1",
        "prompt": "At a Level III match the maximum individual entry fee is equivalent to US$58. What is the arbitration fee equivalent in local currency?",
        "correct": "US$58",
        "options": [
          "US$58",
          "US$100",
          "US$53",
          "US$63"
        ],
        "note": "Use the lower of US$100 and the maximum individual entry fee.",
        "family": "11.4.1",
        "id": "34d89f1347aee01f"
      },
      {
        "rule": "9.4.2",
        "prompt": "Three paper no-shoots show 1, 1 and 0 hits in their scoring areas, respectively. What is the combined point deduction?",
        "correct": "20 points",
        "options": [
          "20 points",
          "10 points",
          "25 points",
          "30 points"
        ],
        "note": "Count 10 points per hit, capped at two hits on each paper no-shoot.",
        "family": "9.4.2",
        "id": "2ed02131abe1ee01"
      },
      {
        "rule": "10.2.7",
        "prompt": "A competitor leaves 3 non-disappearing scoring targets completely unengaged. They engage the other 2 targets. Before adding any misses, how many failure-to-engage procedurals apply?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "",
        "family": "10.2.7",
        "id": "74b0110053b22816"
      },
      {
        "rule": "10.2.3",
        "prompt": "While faulting a line, a competitor fires 7 shots and gains a significant advantage. From that position a maximum of 2 scoring hits can be attained. What is the maximum number of procedurals for that fault?",
        "correct": "2",
        "options": [
          "2",
          "1",
          "3",
          "4"
        ],
        "note": "Multiple penalties for the fault are capped by the scoring hits attainable.",
        "family": "10.2.3",
        "id": "a67f0a3b80d3499d"
      },
      {
        "rule": "11.3.2",
        "prompt": "The Arbitration Committee receives a request at 10:00 on Saturday. Final results are scheduled to be declared at 09:40 on Sunday. What is the latest time the committee may rule under that schedule?",
        "correct": "Before 09:40 on Sunday",
        "options": [
          "Before 09:40 on Sunday",
          "By 10:00 on Sunday",
          "By 10:20 on Sunday",
          "Before 09:40 on Monday"
        ],
        "note": "The earlier limit is the declaration of final results.",
        "family": "11.3.2",
        "id": "bc60703e734bf1ae"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Under Comstock, a competitor earns 40 target points, receives 20 penalty points and finishes in 6.00 seconds. What is the hit factor, rounded to four decimals?",
        "correct": "3.3333",
        "options": [
          "3.3333",
          "6.6667",
          "5.0000",
          "10.0000"
        ],
        "note": "Subtract penalties from target points before dividing by time.",
        "family": "comstock-hit-factor",
        "id": "221b267a71db93cf"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "A 50-point stage is won with a hit factor of 9. A competitor records a hit factor of 5.4. How many stage points does the competitor earn?",
        "correct": "30.00",
        "options": [
          "30.00",
          "28.00",
          "29.00",
          "31.00"
        ],
        "note": "Multiply the available stage points by the competitor’s hit factor divided by the winner’s hit factor.",
        "family": "comstock-stage-points",
        "id": "9ba6132933144df4"
      },
      {
        "rule": "9.2.3",
        "prompt": "A competitor earns 33.2750, 25.6425 and 22.3850 stage points in the three stages of a match. What is the match total?",
        "correct": "81.3025",
        "options": [
          "81.3025",
          "81.4025",
          "81.2025",
          "82.3025"
        ],
        "note": "",
        "family": "match-total",
        "id": "2a2ddc7a971836c3"
      },
      {
        "rule": "10.2.4",
        "prompt": "A competitor fires 2 shots before a mandatory reload point, 1 shots after it without reloading, and 3 shots after finally reloading. How many procedural penalties apply to the reload violation?",
        "correct": "1",
        "options": [
          "1",
          "0",
          "2",
          "3"
        ],
        "note": "Count only shots after the required reload point and before the reload.",
        "family": "10.2.4",
        "id": "762cf162802b119a"
      },
      {
        "rule": "10.2.5",
        "prompt": "In a Cooper Tunnel, direct contact with the overhead material drops 2 pieces. Bumping an upright drops another 1. How many procedural penalties apply?",
        "correct": "2",
        "options": [
          "2",
          "1",
          "3",
          "4"
        ],
        "note": "Pieces that fall from striking an upright are exempt.",
        "family": "10.2.5",
        "id": "530bd84ef8b47216"
      },
      {
        "rule": "10.1.2",
        "prompt": "The Range Officer assesses 4 procedural penalties. What is the total point deduction for these penalties?",
        "correct": "40 points",
        "options": [
          "40 points",
          "20 points",
          "30 points",
          "50 points"
        ],
        "note": "",
        "family": "10.1.2",
        "id": "a7aaa4caf4f065cd"
      },
      {
        "rule": "10.2.1",
        "prompt": "A competitor fires 2 shots on each of 3 separate Fault Line breaches, re-entering fully between breaches and gaining no significant advantage. How many procedural penalties apply?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "With no significant advantage, count the separate occurrences.",
        "family": "10.2.1",
        "id": "b6d742daab217181"
      },
      {
        "rule": "11.3.1",
        "prompt": "Match Officials record a disputed call at 08:23. The competitor talks to the Chief Range Officer 15 minutes later. What is the deadline to submit a written arbitration appeal and fee to the Range Master?",
        "correct": "09:23",
        "options": [
          "09:23",
          "09:08",
          "09:38",
          "09:53"
        ],
        "note": "",
        "family": "11.3.1",
        "id": "fd2b9c3ae8f0e93c"
      },
      {
        "rule": "9.8.3",
        "prompt": "The provisional results show a timestamp of 12:17, but were actually posted at 12:29. What is the deadline for a competitor to file a results appeal with the Stats Officer?",
        "correct": "13:29",
        "options": [
          "13:29",
          "13:14",
          "13:44",
          "13:59"
        ],
        "note": "",
        "family": "9.8.3",
        "id": "75719e2f068672a0"
      },
      {
        "rule": "11.4.1",
        "prompt": "At a Level III match the maximum individual entry fee is equivalent to US$115. What is the arbitration fee equivalent in local currency?",
        "correct": "US$100",
        "options": [
          "US$100",
          "US$115",
          "US$95",
          "US$105"
        ],
        "note": "Use the lower of US$100 and the maximum individual entry fee.",
        "family": "11.4.1",
        "id": "7047ed8525176aec"
      },
      {
        "rule": "9.4.2",
        "prompt": "Three paper no-shoots show 2, 1 and 0 hits in their scoring areas, respectively. What is the combined point deduction?",
        "correct": "30 points",
        "options": [
          "30 points",
          "20 points",
          "35 points",
          "40 points"
        ],
        "note": "Count 10 points per hit, capped at two hits on each paper no-shoot.",
        "family": "9.4.2",
        "id": "c4db7b7a451a5a7d"
      },
      {
        "rule": "10.2.7",
        "prompt": "A competitor leaves 4 non-disappearing scoring targets completely unengaged. They engage the other 3 targets. Before adding any misses, how many failure-to-engage procedurals apply?",
        "correct": "4",
        "options": [
          "4",
          "3",
          "5",
          "6"
        ],
        "note": "",
        "family": "10.2.7",
        "id": "5f3e9af5d086e70f"
      },
      {
        "rule": "10.2.3",
        "prompt": "While faulting a line, a competitor fires 8 shots and gains a significant advantage. From that position a maximum of 3 scoring hits can be attained. What is the maximum number of procedurals for that fault?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "Multiple penalties for the fault are capped by the scoring hits attainable.",
        "family": "10.2.3",
        "id": "ebc3eaec4c4e60c1"
      },
      {
        "rule": "11.3.2",
        "prompt": "The Arbitration Committee receives a request at 10:19 on Saturday. The Match Director will declare the results final at 10:39 on Sunday. What deadline applies to the committee’s decision?",
        "correct": "By 10:19 on Sunday",
        "options": [
          "By 10:19 on Sunday",
          "Before 10:39 on Sunday",
          "By 09:59 on Sunday",
          "By 10:19 on Monday"
        ],
        "note": "The 24-hour deadline arrives before the declaration of final results.",
        "family": "11.3.2",
        "id": "e4ad89d611716d41"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Under Comstock, a competitor earns 45 target points, receives 30 penalty points and finishes in 7.00 seconds. What is the hit factor, rounded to four decimals?",
        "correct": "2.1429",
        "options": [
          "2.1429",
          "6.4286",
          "4.2857",
          "10.7143"
        ],
        "note": "Subtract penalties from target points before dividing by time.",
        "family": "comstock-hit-factor",
        "id": "811fb111204f1db3"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "A 60-point stage is won with a hit factor of 10. A competitor records a hit factor of 7.0. How many stage points does the competitor earn?",
        "correct": "42.00",
        "options": [
          "42.00",
          "40.00",
          "41.00",
          "43.00"
        ],
        "note": "Multiply the available stage points by the competitor’s hit factor divided by the winner’s hit factor.",
        "family": "comstock-stage-points",
        "id": "52ec8e4e492a485c"
      },
      {
        "rule": "9.2.3",
        "prompt": "A competitor earns 35.2750, 26.6425 and 25.3850 stage points in the three stages of a match. What is the match total?",
        "correct": "87.3025",
        "options": [
          "87.3025",
          "87.4025",
          "87.2025",
          "88.3025"
        ],
        "note": "",
        "family": "match-total",
        "id": "9de1b28afcc923d6"
      },
      {
        "rule": "10.2.4",
        "prompt": "A competitor fires 3 shots before a mandatory reload point, 1 shots after it without reloading, and 4 shots after finally reloading. How many procedural penalties apply to the reload violation?",
        "correct": "1",
        "options": [
          "1",
          "0",
          "2",
          "3"
        ],
        "note": "Count only shots after the required reload point and before the reload.",
        "family": "10.2.4",
        "id": "881a8b7504b60cad"
      },
      {
        "rule": "10.2.5",
        "prompt": "In a Cooper Tunnel, direct contact with the overhead material drops 3 pieces. Bumping an upright drops another 1. How many procedural penalties apply?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "Pieces that fall from striking an upright are exempt.",
        "family": "10.2.5",
        "id": "5137b4943cba8ec9"
      },
      {
        "rule": "10.1.2",
        "prompt": "The Range Officer assesses 5 procedural penalties. What is the total point deduction for these penalties?",
        "correct": "50 points",
        "options": [
          "50 points",
          "30 points",
          "40 points",
          "60 points"
        ],
        "note": "",
        "family": "10.1.2",
        "id": "8d6f73489143fdbe"
      },
      {
        "rule": "10.2.1",
        "prompt": "A competitor fires 2 shots on each of 4 separate Fault Line breaches, re-entering fully between breaches and gaining no significant advantage. How many procedural penalties apply?",
        "correct": "4",
        "options": [
          "4",
          "3",
          "5",
          "6"
        ],
        "note": "With no significant advantage, count the separate occurrences.",
        "family": "10.2.1",
        "id": "bfd45046f19468df"
      },
      {
        "rule": "11.3.1",
        "prompt": "Match Officials record a disputed call at 08:46. The competitor talks to the Chief Range Officer 15 minutes later. What is the deadline to submit a written arbitration appeal and fee to the Range Master?",
        "correct": "09:46",
        "options": [
          "09:46",
          "09:31",
          "10:01",
          "10:16"
        ],
        "note": "",
        "family": "11.3.1",
        "id": "1646ce84911500d6"
      },
      {
        "rule": "9.8.3",
        "prompt": "The provisional results show a timestamp of 12:34, but were actually posted at 12:47. What is the deadline for a competitor to file a results appeal with the Stats Officer?",
        "correct": "13:47",
        "options": [
          "13:47",
          "13:32",
          "14:02",
          "14:17"
        ],
        "note": "",
        "family": "9.8.3",
        "id": "f183f4405bae9693"
      },
      {
        "rule": "11.4.1",
        "prompt": "At a Level III match the maximum individual entry fee is equivalent to US$62. What is the arbitration fee equivalent in local currency?",
        "correct": "US$62",
        "options": [
          "US$62",
          "US$100",
          "US$57",
          "US$67"
        ],
        "note": "Use the lower of US$100 and the maximum individual entry fee.",
        "family": "11.4.1",
        "id": "2e62692cf1be487d"
      },
      {
        "rule": "9.4.2",
        "prompt": "Three paper no-shoots show 3, 1 and 0 hits in their scoring areas, respectively. What is the combined point deduction?",
        "correct": "30 points",
        "options": [
          "30 points",
          "20 points",
          "35 points",
          "40 points"
        ],
        "note": "Count 10 points per hit, capped at two hits on each paper no-shoot.",
        "family": "9.4.2",
        "id": "9d9d5b6426560ab7"
      },
      {
        "rule": "10.2.7",
        "prompt": "A competitor leaves 5 non-disappearing scoring targets completely unengaged. They engage the other 4 targets. Before adding any misses, how many failure-to-engage procedurals apply?",
        "correct": "5",
        "options": [
          "5",
          "4",
          "6",
          "7"
        ],
        "note": "",
        "family": "10.2.7",
        "id": "0d8a48f3191f4847"
      },
      {
        "rule": "10.2.3",
        "prompt": "While faulting a line, a competitor fires 9 shots and gains a significant advantage. From that position a maximum of 4 scoring hits can be attained. What is the maximum number of procedurals for that fault?",
        "correct": "4",
        "options": [
          "4",
          "3",
          "5",
          "6"
        ],
        "note": "Multiple penalties for the fault are capped by the scoring hits attainable.",
        "family": "10.2.3",
        "id": "0ef941d62c1d78e5"
      },
      {
        "rule": "11.3.2",
        "prompt": "The Arbitration Committee receives a request at 10:38 on Saturday. Final results are scheduled to be declared at 10:18 on Sunday. What is the latest time the committee may rule under that schedule?",
        "correct": "Before 10:18 on Sunday",
        "options": [
          "Before 10:18 on Sunday",
          "By 10:38 on Sunday",
          "By 10:58 on Sunday",
          "Before 10:18 on Monday"
        ],
        "note": "The earlier limit is the declaration of final results.",
        "family": "11.3.2",
        "id": "de38b1edabf021d6"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Under Comstock, a competitor earns 50 target points, receives 10 penalty points and finishes in 8.00 seconds. What is the hit factor, rounded to four decimals?",
        "correct": "5.0000",
        "options": [
          "5.0000",
          "6.2500",
          "5.6250",
          "7.5000"
        ],
        "note": "Subtract penalties from target points before dividing by time.",
        "family": "comstock-hit-factor",
        "id": "a9248c139a4373b7"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "A 70-point stage is won with a hit factor of 8. A competitor records a hit factor of 6.00. How many stage points does the competitor earn?",
        "correct": "52.50",
        "options": [
          "52.50",
          "50.50",
          "51.50",
          "53.50"
        ],
        "note": "Multiply the available stage points by the competitor’s hit factor divided by the winner’s hit factor.",
        "family": "comstock-stage-points",
        "id": "47f4cad0ab27e8ba"
      },
      {
        "rule": "9.2.3",
        "prompt": "A competitor earns 37.2750, 27.6425 and 28.3850 stage points in the three stages of a match. What is the match total?",
        "correct": "93.3025",
        "options": [
          "93.3025",
          "93.4025",
          "93.2025",
          "94.3025"
        ],
        "note": "",
        "family": "match-total",
        "id": "c9e15cec5e09ea03"
      },
      {
        "rule": "10.2.4",
        "prompt": "A competitor fires 4 shots before a mandatory reload point, 2 shots after it without reloading, and 2 shots after finally reloading. How many procedural penalties apply to the reload violation?",
        "correct": "2",
        "options": [
          "2",
          "1",
          "3",
          "4"
        ],
        "note": "Count only shots after the required reload point and before the reload.",
        "family": "10.2.4",
        "id": "006d194da76716db"
      },
      {
        "rule": "10.2.5",
        "prompt": "In a Cooper Tunnel, direct contact with the overhead material drops 4 pieces. Bumping an upright drops another 1. How many procedural penalties apply?",
        "correct": "4",
        "options": [
          "4",
          "3",
          "5",
          "6"
        ],
        "note": "Pieces that fall from striking an upright are exempt.",
        "family": "10.2.5",
        "id": "8e37dab2e4ff09d1"
      },
      {
        "rule": "10.1.2",
        "prompt": "The Range Officer assesses 6 procedural penalties. What is the total point deduction for these penalties?",
        "correct": "60 points",
        "options": [
          "60 points",
          "40 points",
          "50 points",
          "70 points"
        ],
        "note": "",
        "family": "10.1.2",
        "id": "1b476140e351fce9"
      },
      {
        "rule": "10.2.1",
        "prompt": "A competitor fires 2 shots on each of 5 separate Fault Line breaches, re-entering fully between breaches and gaining no significant advantage. How many procedural penalties apply?",
        "correct": "5",
        "options": [
          "5",
          "4",
          "6",
          "7"
        ],
        "note": "With no significant advantage, count the separate occurrences.",
        "family": "10.2.1",
        "id": "e6660f0d591b4f7d"
      },
      {
        "rule": "11.3.1",
        "prompt": "Match Officials record a disputed call at 09:09. The competitor talks to the Chief Range Officer 15 minutes later. What is the deadline to submit a written arbitration appeal and fee to the Range Master?",
        "correct": "10:09",
        "options": [
          "10:09",
          "09:54",
          "10:24",
          "10:39"
        ],
        "note": "",
        "family": "11.3.1",
        "id": "3a39e0f7f339bf48"
      },
      {
        "rule": "9.8.3",
        "prompt": "The provisional results show a timestamp of 12:51, but were actually posted at 13:05. What is the deadline for a competitor to file a results appeal with the Stats Officer?",
        "correct": "14:05",
        "options": [
          "14:05",
          "13:50",
          "14:20",
          "14:35"
        ],
        "note": "",
        "family": "9.8.3",
        "id": "f52890a6657389c5"
      },
      {
        "rule": "11.4.1",
        "prompt": "At a Level III match the maximum individual entry fee is equivalent to US$121. What is the arbitration fee equivalent in local currency?",
        "correct": "US$100",
        "options": [
          "US$100",
          "US$121",
          "US$95",
          "US$105"
        ],
        "note": "Use the lower of US$100 and the maximum individual entry fee.",
        "family": "11.4.1",
        "id": "f8dd8ce82b7d6cb7"
      },
      {
        "rule": "9.4.2",
        "prompt": "Three paper no-shoots show 1, 2 and 0 hits in their scoring areas, respectively. What is the combined point deduction?",
        "correct": "30 points",
        "options": [
          "30 points",
          "20 points",
          "35 points",
          "40 points"
        ],
        "note": "Count 10 points per hit, capped at two hits on each paper no-shoot.",
        "family": "9.4.2",
        "id": "f4db1f910c9647bc"
      },
      {
        "rule": "10.2.7",
        "prompt": "A competitor leaves 6 non-disappearing scoring targets completely unengaged. They engage the other 5 targets. Before adding any misses, how many failure-to-engage procedurals apply?",
        "correct": "6",
        "options": [
          "6",
          "5",
          "7",
          "8"
        ],
        "note": "",
        "family": "10.2.7",
        "id": "d6027ed7afcbf0dc"
      },
      {
        "rule": "10.2.3",
        "prompt": "While faulting a line, a competitor fires 10 shots and gains a significant advantage. From that position a maximum of 5 scoring hits can be attained. What is the maximum number of procedurals for that fault?",
        "correct": "5",
        "options": [
          "5",
          "4",
          "6",
          "7"
        ],
        "note": "Multiple penalties for the fault are capped by the scoring hits attainable.",
        "family": "10.2.3",
        "id": "78f0f08139c28834"
      },
      {
        "rule": "11.3.2",
        "prompt": "The Arbitration Committee receives a request at 10:57 on Saturday. The Match Director will declare the results final at 11:17 on Sunday. What deadline applies to the committee’s decision?",
        "correct": "By 10:57 on Sunday",
        "options": [
          "By 10:57 on Sunday",
          "Before 11:17 on Sunday",
          "By 10:37 on Sunday",
          "By 10:57 on Monday"
        ],
        "note": "The 24-hour deadline arrives before the declaration of final results.",
        "family": "11.3.2",
        "id": "682a783c53b03f55"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Under Comstock, a competitor earns 55 target points, receives 20 penalty points and finishes in 5.00 seconds. What is the hit factor, rounded to four decimals?",
        "correct": "7.0000",
        "options": [
          "7.0000",
          "11.0000",
          "9.0000",
          "15.0000"
        ],
        "note": "Subtract penalties from target points before dividing by time.",
        "family": "comstock-hit-factor",
        "id": "6b4917642dba515c"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "A 80-point stage is won with a hit factor of 9. A competitor records a hit factor of 7.2. How many stage points does the competitor earn?",
        "correct": "64.00",
        "options": [
          "64.00",
          "62.00",
          "63.00",
          "65.00"
        ],
        "note": "Multiply the available stage points by the competitor’s hit factor divided by the winner’s hit factor.",
        "family": "comstock-stage-points",
        "id": "28ebb69b1638fbdf"
      },
      {
        "rule": "9.2.3",
        "prompt": "A competitor earns 39.2750, 28.6425 and 31.3850 stage points in the three stages of a match. What is the match total?",
        "correct": "99.3025",
        "options": [
          "99.3025",
          "99.4025",
          "99.2025",
          "100.3025"
        ],
        "note": "",
        "family": "match-total",
        "id": "5f4e872e5af06f31"
      },
      {
        "rule": "10.2.4",
        "prompt": "A competitor fires 1 shots before a mandatory reload point, 2 shots after it without reloading, and 3 shots after finally reloading. How many procedural penalties apply to the reload violation?",
        "correct": "2",
        "options": [
          "2",
          "1",
          "3",
          "4"
        ],
        "note": "Count only shots after the required reload point and before the reload.",
        "family": "10.2.4",
        "id": "6e024231dd5c61ec"
      },
      {
        "rule": "10.2.5",
        "prompt": "In a Cooper Tunnel, direct contact with the overhead material drops 1 pieces. Bumping an upright drops another 2. How many procedural penalties apply?",
        "correct": "1",
        "options": [
          "1",
          "0",
          "2",
          "3"
        ],
        "note": "Pieces that fall from striking an upright are exempt.",
        "family": "10.2.5",
        "id": "a494bfc8fae26d63"
      },
      {
        "rule": "10.1.2",
        "prompt": "The Range Officer assesses 7 procedural penalties. What is the total point deduction for these penalties?",
        "correct": "70 points",
        "options": [
          "70 points",
          "50 points",
          "60 points",
          "80 points"
        ],
        "note": "",
        "family": "10.1.2",
        "id": "47ba4f62b92a41c2"
      },
      {
        "rule": "10.2.1",
        "prompt": "A competitor fires 3 shots on each of 2 separate Fault Line breaches, re-entering fully between breaches and gaining no significant advantage. How many procedural penalties apply?",
        "correct": "2",
        "options": [
          "2",
          "1",
          "3",
          "4"
        ],
        "note": "With no significant advantage, count the separate occurrences.",
        "family": "10.2.1",
        "id": "ae87a1170740806b"
      },
      {
        "rule": "11.3.1",
        "prompt": "Match Officials record a disputed call at 09:32. The competitor talks to the Chief Range Officer 15 minutes later. What is the deadline to submit a written arbitration appeal and fee to the Range Master?",
        "correct": "10:32",
        "options": [
          "10:32",
          "10:17",
          "10:47",
          "11:02"
        ],
        "note": "",
        "family": "11.3.1",
        "id": "6588158dd42d9117"
      },
      {
        "rule": "9.8.3",
        "prompt": "The provisional results show a timestamp of 13:08, but were actually posted at 13:19. What is the deadline for a competitor to file a results appeal with the Stats Officer?",
        "correct": "14:19",
        "options": [
          "14:19",
          "14:04",
          "14:34",
          "14:49"
        ],
        "note": "",
        "family": "9.8.3",
        "id": "29a955b04f06e0ec"
      },
      {
        "rule": "11.4.1",
        "prompt": "At a Level III match the maximum individual entry fee is equivalent to US$66. What is the arbitration fee equivalent in local currency?",
        "correct": "US$66",
        "options": [
          "US$66",
          "US$100",
          "US$61",
          "US$71"
        ],
        "note": "Use the lower of US$100 and the maximum individual entry fee.",
        "family": "11.4.1",
        "id": "ee9ce1e4aa409d25"
      },
      {
        "rule": "9.4.2",
        "prompt": "Three paper no-shoots show 2, 2 and 0 hits in their scoring areas, respectively. What is the combined point deduction?",
        "correct": "40 points",
        "options": [
          "40 points",
          "30 points",
          "45 points",
          "50 points"
        ],
        "note": "Count 10 points per hit, capped at two hits on each paper no-shoot.",
        "family": "9.4.2",
        "id": "402cb42239c9c1f8"
      },
      {
        "rule": "10.2.7",
        "prompt": "A competitor leaves 3 non-disappearing scoring targets completely unengaged. They engage the other 6 targets. Before adding any misses, how many failure-to-engage procedurals apply?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "",
        "family": "10.2.7",
        "id": "40285104c3498727"
      },
      {
        "rule": "10.2.3",
        "prompt": "While faulting a line, a competitor fires 11 shots and gains a significant advantage. From that position a maximum of 6 scoring hits can be attained. What is the maximum number of procedurals for that fault?",
        "correct": "6",
        "options": [
          "6",
          "5",
          "7",
          "8"
        ],
        "note": "Multiple penalties for the fault are capped by the scoring hits attainable.",
        "family": "10.2.3",
        "id": "33eda48998525a75"
      },
      {
        "rule": "11.3.2",
        "prompt": "The Arbitration Committee receives a request at 11:16 on Saturday. Final results are scheduled to be declared at 10:56 on Sunday. What is the latest time the committee may rule under that schedule?",
        "correct": "Before 10:56 on Sunday",
        "options": [
          "Before 10:56 on Sunday",
          "By 11:16 on Sunday",
          "By 11:36 on Sunday",
          "Before 10:56 on Monday"
        ],
        "note": "The earlier limit is the declaration of final results.",
        "family": "11.3.2",
        "id": "0ca050eb61851f0f"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Under Comstock, a competitor earns 60 target points, receives 30 penalty points and finishes in 6.00 seconds. What is the hit factor, rounded to four decimals?",
        "correct": "5.0000",
        "options": [
          "5.0000",
          "10.0000",
          "7.5000",
          "15.0000"
        ],
        "note": "Subtract penalties from target points before dividing by time.",
        "family": "comstock-hit-factor",
        "id": "e0956e1c97004596"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "A 90-point stage is won with a hit factor of 10. A competitor records a hit factor of 9.0. How many stage points does the competitor earn?",
        "correct": "81.00",
        "options": [
          "81.00",
          "79.00",
          "80.00",
          "82.00"
        ],
        "note": "Multiply the available stage points by the competitor’s hit factor divided by the winner’s hit factor.",
        "family": "comstock-stage-points",
        "id": "14715e3e5cf69e4f"
      },
      {
        "rule": "9.2.3",
        "prompt": "A competitor earns 41.2750, 29.6425 and 34.3850 stage points in the three stages of a match. What is the match total?",
        "correct": "105.3025",
        "options": [
          "105.3025",
          "105.4025",
          "105.2025",
          "106.3025"
        ],
        "note": "",
        "family": "match-total",
        "id": "074fa194069e06db"
      },
      {
        "rule": "10.2.4",
        "prompt": "A competitor fires 2 shots before a mandatory reload point, 2 shots after it without reloading, and 4 shots after finally reloading. How many procedural penalties apply to the reload violation?",
        "correct": "2",
        "options": [
          "2",
          "1",
          "3",
          "4"
        ],
        "note": "Count only shots after the required reload point and before the reload.",
        "family": "10.2.4",
        "id": "68323701f25334fb"
      },
      {
        "rule": "10.2.5",
        "prompt": "In a Cooper Tunnel, direct contact with the overhead material drops 2 pieces. Bumping an upright drops another 2. How many procedural penalties apply?",
        "correct": "2",
        "options": [
          "2",
          "1",
          "3",
          "4"
        ],
        "note": "Pieces that fall from striking an upright are exempt.",
        "family": "10.2.5",
        "id": "d78787214b190a6e"
      },
      {
        "rule": "10.1.2",
        "prompt": "The Range Officer assesses 8 procedural penalties. What is the total point deduction for these penalties?",
        "correct": "80 points",
        "options": [
          "80 points",
          "60 points",
          "70 points",
          "90 points"
        ],
        "note": "",
        "family": "10.1.2",
        "id": "5d5ad2570ac219a8"
      },
      {
        "rule": "10.2.1",
        "prompt": "A competitor fires 3 shots on each of 3 separate Fault Line breaches, re-entering fully between breaches and gaining no significant advantage. How many procedural penalties apply?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "With no significant advantage, count the separate occurrences.",
        "family": "10.2.1",
        "id": "58f01062c3509bdd"
      },
      {
        "rule": "11.3.1",
        "prompt": "Match Officials record a disputed call at 09:55. The competitor talks to the Chief Range Officer 15 minutes later. What is the deadline to submit a written arbitration appeal and fee to the Range Master?",
        "correct": "10:55",
        "options": [
          "10:55",
          "10:40",
          "11:10",
          "11:25"
        ],
        "note": "",
        "family": "11.3.1",
        "id": "007010000caf70b8"
      },
      {
        "rule": "9.8.3",
        "prompt": "The provisional results show a timestamp of 13:25, but were actually posted at 13:37. What is the deadline for a competitor to file a results appeal with the Stats Officer?",
        "correct": "14:37",
        "options": [
          "14:37",
          "14:22",
          "14:52",
          "15:07"
        ],
        "note": "",
        "family": "9.8.3",
        "id": "251642cc8f8c7f1f"
      },
      {
        "rule": "11.4.1",
        "prompt": "At a Level III match the maximum individual entry fee is equivalent to US$127. What is the arbitration fee equivalent in local currency?",
        "correct": "US$100",
        "options": [
          "US$100",
          "US$127",
          "US$95",
          "US$105"
        ],
        "note": "Use the lower of US$100 and the maximum individual entry fee.",
        "family": "11.4.1",
        "id": "5f76c896f353c461"
      },
      {
        "rule": "9.4.2",
        "prompt": "Three paper no-shoots show 3, 2 and 0 hits in their scoring areas, respectively. What is the combined point deduction?",
        "correct": "40 points",
        "options": [
          "40 points",
          "30 points",
          "45 points",
          "50 points"
        ],
        "note": "Count 10 points per hit, capped at two hits on each paper no-shoot.",
        "family": "9.4.2",
        "id": "f10264af0c61ed3a"
      },
      {
        "rule": "10.2.7",
        "prompt": "A competitor leaves 4 non-disappearing scoring targets completely unengaged. They engage the other 7 targets. Before adding any misses, how many failure-to-engage procedurals apply?",
        "correct": "4",
        "options": [
          "4",
          "3",
          "5",
          "6"
        ],
        "note": "",
        "family": "10.2.7",
        "id": "9bd75fb0011635df"
      },
      {
        "rule": "10.2.3",
        "prompt": "While faulting a line, a competitor fires 12 shots and gains a significant advantage. From that position a maximum of 7 scoring hits can be attained. What is the maximum number of procedurals for that fault?",
        "correct": "7",
        "options": [
          "7",
          "6",
          "8",
          "9"
        ],
        "note": "Multiple penalties for the fault are capped by the scoring hits attainable.",
        "family": "10.2.3",
        "id": "fe4d0980cee323db"
      },
      {
        "rule": "11.3.2",
        "prompt": "The Arbitration Committee receives a request at 11:35 on Saturday. The Match Director will declare the results final at 11:55 on Sunday. What deadline applies to the committee’s decision?",
        "correct": "By 11:35 on Sunday",
        "options": [
          "By 11:35 on Sunday",
          "Before 11:55 on Sunday",
          "By 11:15 on Sunday",
          "By 11:35 on Monday"
        ],
        "note": "The 24-hour deadline arrives before the declaration of final results.",
        "family": "11.3.2",
        "id": "64eca1200b3dfb67"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Under Comstock, a competitor earns 65 target points, receives 10 penalty points and finishes in 7.00 seconds. What is the hit factor, rounded to four decimals?",
        "correct": "7.8571",
        "options": [
          "7.8571",
          "9.2857",
          "8.5714",
          "10.7143"
        ],
        "note": "Subtract penalties from target points before dividing by time.",
        "family": "comstock-hit-factor",
        "id": "dc1a8095996ad676"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "A 100-point stage is won with a hit factor of 8. A competitor records a hit factor of 4.0. How many stage points does the competitor earn?",
        "correct": "50.00",
        "options": [
          "50.00",
          "48.00",
          "49.00",
          "51.00"
        ],
        "note": "Multiply the available stage points by the competitor’s hit factor divided by the winner’s hit factor.",
        "family": "comstock-stage-points",
        "id": "a40790b1b62def3d"
      },
      {
        "rule": "9.2.3",
        "prompt": "A competitor earns 43.2750, 30.6425 and 37.3850 stage points in the three stages of a match. What is the match total?",
        "correct": "111.3025",
        "options": [
          "111.3025",
          "111.4025",
          "111.2025",
          "112.3025"
        ],
        "note": "",
        "family": "match-total",
        "id": "94c3a1b2ed2be128"
      },
      {
        "rule": "10.2.4",
        "prompt": "A competitor fires 3 shots before a mandatory reload point, 3 shots after it without reloading, and 2 shots after finally reloading. How many procedural penalties apply to the reload violation?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "Count only shots after the required reload point and before the reload.",
        "family": "10.2.4",
        "id": "74af5d5f21fe1dfb"
      },
      {
        "rule": "10.2.5",
        "prompt": "In a Cooper Tunnel, direct contact with the overhead material drops 3 pieces. Bumping an upright drops another 2. How many procedural penalties apply?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "Pieces that fall from striking an upright are exempt.",
        "family": "10.2.5",
        "id": "1f535390a3951d7e"
      },
      {
        "rule": "10.1.2",
        "prompt": "The Range Officer assesses 9 procedural penalties. What is the total point deduction for these penalties?",
        "correct": "90 points",
        "options": [
          "90 points",
          "70 points",
          "80 points",
          "100 points"
        ],
        "note": "",
        "family": "10.1.2",
        "id": "8408d43671db7a0e"
      },
      {
        "rule": "10.2.1",
        "prompt": "A competitor fires 3 shots on each of 4 separate Fault Line breaches, re-entering fully between breaches and gaining no significant advantage. How many procedural penalties apply?",
        "correct": "4",
        "options": [
          "4",
          "3",
          "5",
          "6"
        ],
        "note": "With no significant advantage, count the separate occurrences.",
        "family": "10.2.1",
        "id": "2ff8e267c91dde1a"
      },
      {
        "rule": "11.3.1",
        "prompt": "Match Officials record a disputed call at 10:18. The competitor talks to the Chief Range Officer 15 minutes later. What is the deadline to submit a written arbitration appeal and fee to the Range Master?",
        "correct": "11:18",
        "options": [
          "11:18",
          "11:03",
          "11:33",
          "11:48"
        ],
        "note": "",
        "family": "11.3.1",
        "id": "c965916fb531369c"
      },
      {
        "rule": "9.8.3",
        "prompt": "The provisional results show a timestamp of 13:42, but were actually posted at 13:55. What is the deadline for a competitor to file a results appeal with the Stats Officer?",
        "correct": "14:55",
        "options": [
          "14:55",
          "14:40",
          "15:10",
          "15:25"
        ],
        "note": "",
        "family": "9.8.3",
        "id": "2cf52a01b6b110fd"
      },
      {
        "rule": "11.4.1",
        "prompt": "At a Level III match the maximum individual entry fee is equivalent to US$70. What is the arbitration fee equivalent in local currency?",
        "correct": "US$70",
        "options": [
          "US$70",
          "US$100",
          "US$65",
          "US$75"
        ],
        "note": "Use the lower of US$100 and the maximum individual entry fee.",
        "family": "11.4.1",
        "id": "d811849a35cbcaa0"
      },
      {
        "rule": "9.4.2",
        "prompt": "Three paper no-shoots show 1, 3 and 1 hits in their scoring areas, respectively. What is the combined point deduction?",
        "correct": "40 points",
        "options": [
          "40 points",
          "30 points",
          "45 points",
          "50 points"
        ],
        "note": "Count 10 points per hit, capped at two hits on each paper no-shoot.",
        "family": "9.4.2",
        "id": "e7a35042e7ccfa8a"
      },
      {
        "rule": "10.2.7",
        "prompt": "A competitor leaves 5 non-disappearing scoring targets completely unengaged. They engage the other 8 targets. Before adding any misses, how many failure-to-engage procedurals apply?",
        "correct": "5",
        "options": [
          "5",
          "4",
          "6",
          "7"
        ],
        "note": "",
        "family": "10.2.7",
        "id": "fd6b874ef06e73b5"
      },
      {
        "rule": "10.2.3",
        "prompt": "While faulting a line, a competitor fires 13 shots and gains a significant advantage. From that position a maximum of 8 scoring hits can be attained. What is the maximum number of procedurals for that fault?",
        "correct": "8",
        "options": [
          "8",
          "7",
          "9",
          "10"
        ],
        "note": "Multiple penalties for the fault are capped by the scoring hits attainable.",
        "family": "10.2.3",
        "id": "e26303c2b6fb8eef"
      },
      {
        "rule": "11.3.2",
        "prompt": "The Arbitration Committee receives a request at 11:54 on Saturday. Final results are scheduled to be declared at 11:34 on Sunday. What is the latest time the committee may rule under that schedule?",
        "correct": "Before 11:34 on Sunday",
        "options": [
          "Before 11:34 on Sunday",
          "By 11:54 on Sunday",
          "By 12:14 on Sunday",
          "Before 11:34 on Monday"
        ],
        "note": "The earlier limit is the declaration of final results.",
        "family": "11.3.2",
        "id": "2f113c3dcf31d25b"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Under Comstock, a competitor earns 70 target points, receives 20 penalty points and finishes in 8.00 seconds. What is the hit factor, rounded to four decimals?",
        "correct": "6.2500",
        "options": [
          "6.2500",
          "8.7500",
          "7.5000",
          "11.2500"
        ],
        "note": "Subtract penalties from target points before dividing by time.",
        "family": "comstock-hit-factor",
        "id": "194827b22eba79b3"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "A 110-point stage is won with a hit factor of 9. A competitor records a hit factor of 5.4. How many stage points does the competitor earn?",
        "correct": "66.00",
        "options": [
          "66.00",
          "64.00",
          "65.00",
          "67.00"
        ],
        "note": "Multiply the available stage points by the competitor’s hit factor divided by the winner’s hit factor.",
        "family": "comstock-stage-points",
        "id": "ae96f35457d3f054"
      },
      {
        "rule": "9.2.3",
        "prompt": "A competitor earns 45.2750, 31.6425 and 40.3850 stage points in the three stages of a match. What is the match total?",
        "correct": "117.3025",
        "options": [
          "117.3025",
          "117.4025",
          "117.2025",
          "118.3025"
        ],
        "note": "",
        "family": "match-total",
        "id": "14aae3449b1f03c8"
      },
      {
        "rule": "10.2.4",
        "prompt": "A competitor fires 4 shots before a mandatory reload point, 3 shots after it without reloading, and 3 shots after finally reloading. How many procedural penalties apply to the reload violation?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "Count only shots after the required reload point and before the reload.",
        "family": "10.2.4",
        "id": "ed76f5a3f5fb66c2"
      },
      {
        "rule": "10.2.5",
        "prompt": "In a Cooper Tunnel, direct contact with the overhead material drops 4 pieces. Bumping an upright drops another 2. How many procedural penalties apply?",
        "correct": "4",
        "options": [
          "4",
          "3",
          "5",
          "6"
        ],
        "note": "Pieces that fall from striking an upright are exempt.",
        "family": "10.2.5",
        "id": "491749653d1d7d26"
      },
      {
        "rule": "10.1.2",
        "prompt": "The Range Officer assesses 10 procedural penalties. What is the total point deduction for these penalties?",
        "correct": "100 points",
        "options": [
          "100 points",
          "80 points",
          "90 points",
          "110 points"
        ],
        "note": "",
        "family": "10.1.2",
        "id": "100e589875ff53f7"
      },
      {
        "rule": "10.2.1",
        "prompt": "A competitor fires 3 shots on each of 5 separate Fault Line breaches, re-entering fully between breaches and gaining no significant advantage. How many procedural penalties apply?",
        "correct": "5",
        "options": [
          "5",
          "4",
          "6",
          "7"
        ],
        "note": "With no significant advantage, count the separate occurrences.",
        "family": "10.2.1",
        "id": "5e49c94b26b2461c"
      },
      {
        "rule": "11.3.1",
        "prompt": "Match Officials record a disputed call at 10:41. The competitor talks to the Chief Range Officer 15 minutes later. What is the deadline to submit a written arbitration appeal and fee to the Range Master?",
        "correct": "11:41",
        "options": [
          "11:41",
          "11:26",
          "11:56",
          "12:11"
        ],
        "note": "",
        "family": "11.3.1",
        "id": "0d638cd42e10ffb0"
      },
      {
        "rule": "9.8.3",
        "prompt": "The provisional results show a timestamp of 13:59, but were actually posted at 14:13. What is the deadline for a competitor to file a results appeal with the Stats Officer?",
        "correct": "15:13",
        "options": [
          "15:13",
          "14:58",
          "15:28",
          "15:43"
        ],
        "note": "",
        "family": "9.8.3",
        "id": "09e5ceb49c90626e"
      },
      {
        "rule": "11.4.1",
        "prompt": "At a Level III match the maximum individual entry fee is equivalent to US$133. What is the arbitration fee equivalent in local currency?",
        "correct": "US$100",
        "options": [
          "US$100",
          "US$133",
          "US$95",
          "US$105"
        ],
        "note": "Use the lower of US$100 and the maximum individual entry fee.",
        "family": "11.4.1",
        "id": "274ea25396d70949"
      },
      {
        "rule": "9.4.2",
        "prompt": "Three paper no-shoots show 2, 3 and 1 hits in their scoring areas, respectively. What is the combined point deduction?",
        "correct": "50 points",
        "options": [
          "50 points",
          "40 points",
          "55 points",
          "60 points"
        ],
        "note": "Count 10 points per hit, capped at two hits on each paper no-shoot.",
        "family": "9.4.2",
        "id": "3fe10b1743af5a74"
      },
      {
        "rule": "10.2.7",
        "prompt": "A competitor leaves 6 non-disappearing scoring targets completely unengaged. They engage the other 9 targets. Before adding any misses, how many failure-to-engage procedurals apply?",
        "correct": "6",
        "options": [
          "6",
          "5",
          "7",
          "8"
        ],
        "note": "",
        "family": "10.2.7",
        "id": "5bd4bda93c64ae23"
      },
      {
        "rule": "10.2.3",
        "prompt": "While faulting a line, a competitor fires 14 shots and gains a significant advantage. From that position a maximum of 9 scoring hits can be attained. What is the maximum number of procedurals for that fault?",
        "correct": "9",
        "options": [
          "9",
          "8",
          "10",
          "11"
        ],
        "note": "Multiple penalties for the fault are capped by the scoring hits attainable.",
        "family": "10.2.3",
        "id": "8ba798773a134e49"
      },
      {
        "rule": "11.3.2",
        "prompt": "The Arbitration Committee receives a request at 12:13 on Saturday. The Match Director will declare the results final at 12:33 on Sunday. What deadline applies to the committee’s decision?",
        "correct": "By 12:13 on Sunday",
        "options": [
          "By 12:13 on Sunday",
          "Before 12:33 on Sunday",
          "By 11:53 on Sunday",
          "By 12:13 on Monday"
        ],
        "note": "The 24-hour deadline arrives before the declaration of final results.",
        "family": "11.3.2",
        "id": "87e95945c487e4d8"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Under Comstock, a competitor earns 75 target points, receives 30 penalty points and finishes in 5.00 seconds. What is the hit factor, rounded to four decimals?",
        "correct": "9.0000",
        "options": [
          "9.0000",
          "15.0000",
          "12.0000",
          "21.0000"
        ],
        "note": "Subtract penalties from target points before dividing by time.",
        "family": "comstock-hit-factor",
        "id": "6593ce04b3d67d7d"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "A 120-point stage is won with a hit factor of 10. A competitor records a hit factor of 7.0. How many stage points does the competitor earn?",
        "correct": "84.00",
        "options": [
          "84.00",
          "82.00",
          "83.00",
          "85.00"
        ],
        "note": "Multiply the available stage points by the competitor’s hit factor divided by the winner’s hit factor.",
        "family": "comstock-stage-points",
        "id": "125f67b0e89b3b29"
      },
      {
        "rule": "9.2.3",
        "prompt": "A competitor earns 47.2750, 32.6425 and 43.3850 stage points in the three stages of a match. What is the match total?",
        "correct": "123.3025",
        "options": [
          "123.3025",
          "123.4025",
          "123.2025",
          "124.3025"
        ],
        "note": "",
        "family": "match-total",
        "id": "ac71cbd4257fe44c"
      },
      {
        "rule": "10.2.4",
        "prompt": "A competitor fires 1 shots before a mandatory reload point, 3 shots after it without reloading, and 4 shots after finally reloading. How many procedural penalties apply to the reload violation?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "Count only shots after the required reload point and before the reload.",
        "family": "10.2.4",
        "id": "ad42741d9b5b0b33"
      },
      {
        "rule": "10.2.5",
        "prompt": "In a Cooper Tunnel, direct contact with the overhead material drops 1 pieces. Bumping an upright drops another 3. How many procedural penalties apply?",
        "correct": "1",
        "options": [
          "1",
          "0",
          "2",
          "3"
        ],
        "note": "Pieces that fall from striking an upright are exempt.",
        "family": "10.2.5",
        "id": "073fa27a14c6fdba"
      },
      {
        "rule": "10.1.2",
        "prompt": "The Range Officer assesses 11 procedural penalties. What is the total point deduction for these penalties?",
        "correct": "110 points",
        "options": [
          "110 points",
          "90 points",
          "100 points",
          "120 points"
        ],
        "note": "",
        "family": "10.1.2",
        "id": "6ced0a30c97d29fb"
      },
      {
        "rule": "10.2.1",
        "prompt": "A competitor fires 4 shots on each of 2 separate Fault Line breaches, re-entering fully between breaches and gaining no significant advantage. How many procedural penalties apply?",
        "correct": "2",
        "options": [
          "2",
          "1",
          "3",
          "4"
        ],
        "note": "With no significant advantage, count the separate occurrences.",
        "family": "10.2.1",
        "id": "0fdc8b40955167f4"
      },
      {
        "rule": "11.3.1",
        "prompt": "Match Officials record a disputed call at 11:04. The competitor talks to the Chief Range Officer 15 minutes later. What is the deadline to submit a written arbitration appeal and fee to the Range Master?",
        "correct": "12:04",
        "options": [
          "12:04",
          "11:49",
          "12:19",
          "12:34"
        ],
        "note": "",
        "family": "11.3.1",
        "id": "74c72e17cf94ace9"
      },
      {
        "rule": "9.8.3",
        "prompt": "The provisional results show a timestamp of 14:16, but were actually posted at 14:27. What is the deadline for a competitor to file a results appeal with the Stats Officer?",
        "correct": "15:27",
        "options": [
          "15:27",
          "15:12",
          "15:42",
          "15:57"
        ],
        "note": "",
        "family": "9.8.3",
        "id": "7218042e14ad7648"
      },
      {
        "rule": "11.4.1",
        "prompt": "At a Level III match the maximum individual entry fee is equivalent to US$74. What is the arbitration fee equivalent in local currency?",
        "correct": "US$74",
        "options": [
          "US$74",
          "US$100",
          "US$69",
          "US$79"
        ],
        "note": "Use the lower of US$100 and the maximum individual entry fee.",
        "family": "11.4.1",
        "id": "84a17151ec6235aa"
      },
      {
        "rule": "9.4.2",
        "prompt": "Three paper no-shoots show 3, 3 and 1 hits in their scoring areas, respectively. What is the combined point deduction?",
        "correct": "50 points",
        "options": [
          "50 points",
          "40 points",
          "55 points",
          "60 points"
        ],
        "note": "Count 10 points per hit, capped at two hits on each paper no-shoot.",
        "family": "9.4.2",
        "id": "9362ece878e6df51"
      },
      {
        "rule": "10.2.7",
        "prompt": "A competitor leaves 3 non-disappearing scoring targets completely unengaged. They engage the other 10 targets. Before adding any misses, how many failure-to-engage procedurals apply?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "",
        "family": "10.2.7",
        "id": "f187f41432c19f9e"
      },
      {
        "rule": "10.2.3",
        "prompt": "While faulting a line, a competitor fires 15 shots and gains a significant advantage. From that position a maximum of 10 scoring hits can be attained. What is the maximum number of procedurals for that fault?",
        "correct": "10",
        "options": [
          "10",
          "9",
          "11",
          "12"
        ],
        "note": "Multiple penalties for the fault are capped by the scoring hits attainable.",
        "family": "10.2.3",
        "id": "1d0b8f7c31502eb7"
      },
      {
        "rule": "11.3.2",
        "prompt": "The Arbitration Committee receives a request at 12:32 on Saturday. Final results are scheduled to be declared at 12:12 on Sunday. What is the latest time the committee may rule under that schedule?",
        "correct": "Before 12:12 on Sunday",
        "options": [
          "Before 12:12 on Sunday",
          "By 12:32 on Sunday",
          "By 12:52 on Sunday",
          "Before 12:12 on Monday"
        ],
        "note": "The earlier limit is the declaration of final results.",
        "family": "11.3.2",
        "id": "0a04767b90011120"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Under Comstock, a competitor earns 80 target points, receives 10 penalty points and finishes in 6.00 seconds. What is the hit factor, rounded to four decimals?",
        "correct": "11.6667",
        "options": [
          "11.6667",
          "13.3333",
          "12.5000",
          "15.0000"
        ],
        "note": "Subtract penalties from target points before dividing by time.",
        "family": "comstock-hit-factor",
        "id": "0a8487a56defd7d4"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "A 130-point stage is won with a hit factor of 8. A competitor records a hit factor of 6.00. How many stage points does the competitor earn?",
        "correct": "97.50",
        "options": [
          "97.50",
          "95.50",
          "96.50",
          "98.50"
        ],
        "note": "Multiply the available stage points by the competitor’s hit factor divided by the winner’s hit factor.",
        "family": "comstock-stage-points",
        "id": "581a8fb3529e434e"
      },
      {
        "rule": "9.2.3",
        "prompt": "A competitor earns 49.2750, 33.6425 and 46.3850 stage points in the three stages of a match. What is the match total?",
        "correct": "129.3025",
        "options": [
          "129.3025",
          "129.4025",
          "129.2025",
          "130.3025"
        ],
        "note": "",
        "family": "match-total",
        "id": "24a2902d339963fb"
      },
      {
        "rule": "10.2.4",
        "prompt": "A competitor fires 2 shots before a mandatory reload point, 4 shots after it without reloading, and 2 shots after finally reloading. How many procedural penalties apply to the reload violation?",
        "correct": "4",
        "options": [
          "4",
          "3",
          "5",
          "6"
        ],
        "note": "Count only shots after the required reload point and before the reload.",
        "family": "10.2.4",
        "id": "a63d7cb694c1e4e7"
      },
      {
        "rule": "10.2.5",
        "prompt": "In a Cooper Tunnel, direct contact with the overhead material drops 2 pieces. Bumping an upright drops another 3. How many procedural penalties apply?",
        "correct": "2",
        "options": [
          "2",
          "1",
          "3",
          "4"
        ],
        "note": "Pieces that fall from striking an upright are exempt.",
        "family": "10.2.5",
        "id": "d4412d59638309cc"
      },
      {
        "rule": "10.1.2",
        "prompt": "The Range Officer assesses 12 procedural penalties. What is the total point deduction for these penalties?",
        "correct": "120 points",
        "options": [
          "120 points",
          "100 points",
          "110 points",
          "130 points"
        ],
        "note": "",
        "family": "10.1.2",
        "id": "2da427e627a18668"
      },
      {
        "rule": "10.2.1",
        "prompt": "A competitor fires 4 shots on each of 3 separate Fault Line breaches, re-entering fully between breaches and gaining no significant advantage. How many procedural penalties apply?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "With no significant advantage, count the separate occurrences.",
        "family": "10.2.1",
        "id": "21bc41077313a1fb"
      },
      {
        "rule": "11.3.1",
        "prompt": "Match Officials record a disputed call at 11:27. The competitor talks to the Chief Range Officer 15 minutes later. What is the deadline to submit a written arbitration appeal and fee to the Range Master?",
        "correct": "12:27",
        "options": [
          "12:27",
          "12:12",
          "12:42",
          "12:57"
        ],
        "note": "",
        "family": "11.3.1",
        "id": "8b94d01c354e3638"
      },
      {
        "rule": "9.8.3",
        "prompt": "The provisional results show a timestamp of 14:33, but were actually posted at 14:45. What is the deadline for a competitor to file a results appeal with the Stats Officer?",
        "correct": "15:45",
        "options": [
          "15:45",
          "15:30",
          "16:00",
          "16:15"
        ],
        "note": "",
        "family": "9.8.3",
        "id": "7aba270f1596c966"
      },
      {
        "rule": "11.4.1",
        "prompt": "At a Level III match the maximum individual entry fee is equivalent to US$139. What is the arbitration fee equivalent in local currency?",
        "correct": "US$100",
        "options": [
          "US$100",
          "US$139",
          "US$95",
          "US$105"
        ],
        "note": "Use the lower of US$100 and the maximum individual entry fee.",
        "family": "11.4.1",
        "id": "5bb2c4fc1e28915c"
      },
      {
        "rule": "9.4.2",
        "prompt": "Three paper no-shoots show 1, 4 and 1 hits in their scoring areas, respectively. What is the combined point deduction?",
        "correct": "40 points",
        "options": [
          "40 points",
          "30 points",
          "45 points",
          "50 points"
        ],
        "note": "Count 10 points per hit, capped at two hits on each paper no-shoot.",
        "family": "9.4.2",
        "id": "2ce804cf7d3c65a5"
      },
      {
        "rule": "10.2.7",
        "prompt": "A competitor leaves 4 non-disappearing scoring targets completely unengaged. They engage the other 11 targets. Before adding any misses, how many failure-to-engage procedurals apply?",
        "correct": "4",
        "options": [
          "4",
          "3",
          "5",
          "6"
        ],
        "note": "",
        "family": "10.2.7",
        "id": "6a197c545df016c0"
      },
      {
        "rule": "10.2.3",
        "prompt": "While faulting a line, a competitor fires 16 shots and gains a significant advantage. From that position a maximum of 11 scoring hits can be attained. What is the maximum number of procedurals for that fault?",
        "correct": "11",
        "options": [
          "11",
          "10",
          "12",
          "13"
        ],
        "note": "Multiple penalties for the fault are capped by the scoring hits attainable.",
        "family": "10.2.3",
        "id": "ee190b22289ebab1"
      },
      {
        "rule": "11.3.2",
        "prompt": "The Arbitration Committee receives a request at 12:51 on Saturday. The Match Director will declare the results final at 13:11 on Sunday. What deadline applies to the committee’s decision?",
        "correct": "By 12:51 on Sunday",
        "options": [
          "By 12:51 on Sunday",
          "Before 13:11 on Sunday",
          "By 12:31 on Sunday",
          "By 12:51 on Monday"
        ],
        "note": "The 24-hour deadline arrives before the declaration of final results.",
        "family": "11.3.2",
        "id": "87475e17dc3ff41f"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "Under Comstock, a competitor earns 85 target points, receives 20 penalty points and finishes in 7.00 seconds. What is the hit factor, rounded to four decimals?",
        "correct": "9.2857",
        "options": [
          "9.2857",
          "12.1429",
          "10.7143",
          "15.0000"
        ],
        "note": "Subtract penalties from target points before dividing by time.",
        "family": "comstock-hit-factor",
        "id": "b85cb293f700cca4"
      },
      {
        "rule": "9.2.1.1",
        "prompt": "A 140-point stage is won with a hit factor of 9. A competitor records a hit factor of 7.2. How many stage points does the competitor earn?",
        "correct": "112.00",
        "options": [
          "112.00",
          "110.00",
          "111.00",
          "113.00"
        ],
        "note": "Multiply the available stage points by the competitor’s hit factor divided by the winner’s hit factor.",
        "family": "comstock-stage-points",
        "id": "80da1262251a8622"
      },
      {
        "rule": "9.2.3",
        "prompt": "A competitor earns 51.2750, 34.6425 and 49.3850 stage points in the three stages of a match. What is the match total?",
        "correct": "135.3025",
        "options": [
          "135.3025",
          "135.4025",
          "135.2025",
          "136.3025"
        ],
        "note": "",
        "family": "match-total",
        "id": "dc93ed95ac38a11e"
      },
      {
        "rule": "10.2.4",
        "prompt": "A competitor fires 3 shots before a mandatory reload point, 4 shots after it without reloading, and 3 shots after finally reloading. How many procedural penalties apply to the reload violation?",
        "correct": "4",
        "options": [
          "4",
          "3",
          "5",
          "6"
        ],
        "note": "Count only shots after the required reload point and before the reload.",
        "family": "10.2.4",
        "id": "ff81f0ebb90fa7fe"
      },
      {
        "rule": "10.2.5",
        "prompt": "In a Cooper Tunnel, direct contact with the overhead material drops 3 pieces. Bumping an upright drops another 3. How many procedural penalties apply?",
        "correct": "3",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "note": "Pieces that fall from striking an upright are exempt.",
        "family": "10.2.5",
        "id": "a69a26a0962324c0"
      },
      {
        "rule": "10.1.2",
        "prompt": "The Range Officer assesses 13 procedural penalties. What is the total point deduction for these penalties?",
        "correct": "130 points",
        "options": [
          "130 points",
          "110 points",
          "120 points",
          "140 points"
        ],
        "note": "",
        "family": "10.1.2",
        "id": "f2b4498c35093061"
      },
      {
        "rule": "10.2.1",
        "prompt": "A competitor fires 4 shots on each of 4 separate Fault Line breaches, re-entering fully between breaches and gaining no significant advantage. How many procedural penalties apply?",
        "correct": "4",
        "options": [
          "4",
          "3",
          "5",
          "6"
        ],
        "note": "With no significant advantage, count the separate occurrences.",
        "family": "10.2.1",
        "id": "bcbc115517493d04"
      },
      {
        "rule": "11.3.1",
        "prompt": "Match Officials record a disputed call at 11:50. The competitor talks to the Chief Range Officer 15 minutes later. What is the deadline to submit a written arbitration appeal and fee to the Range Master?",
        "correct": "12:50",
        "options": [
          "12:50",
          "12:35",
          "13:05",
          "13:20"
        ],
        "note": "",
        "family": "11.3.1",
        "id": "5fa6865654c74be5"
      },
      {
        "rule": "9.8.3",
        "prompt": "The provisional results show a timestamp of 14:50, but were actually posted at 15:03. What is the deadline for a competitor to file a results appeal with the Stats Officer?",
        "correct": "16:03",
        "options": [
          "16:03",
          "15:48",
          "16:18",
          "16:33"
        ],
        "note": "",
        "family": "9.8.3",
        "id": "2bb26fd96d3d99e0"
      },
      {
        "rule": "11.4.1",
        "prompt": "At a Level III match the maximum individual entry fee is equivalent to US$78. What is the arbitration fee equivalent in local currency?",
        "correct": "US$78",
        "options": [
          "US$78",
          "US$100",
          "US$73",
          "US$83"
        ],
        "note": "Use the lower of US$100 and the maximum individual entry fee.",
        "family": "11.4.1",
        "id": "b0c07a4dded3ae57"
      },
      {
        "rule": "9.4.2",
        "prompt": "Three paper no-shoots show 2, 4 and 1 hits in their scoring areas, respectively. What is the combined point deduction?",
        "correct": "50 points",
        "options": [
          "50 points",
          "40 points",
          "55 points",
          "60 points"
        ],
        "note": "Count 10 points per hit, capped at two hits on each paper no-shoot.",
        "family": "9.4.2",
        "id": "b8d2a9da680ff132"
      },
      {
        "rule": "10.2.7",
        "prompt": "A competitor leaves 5 non-disappearing scoring targets completely unengaged. They engage the other 12 targets. Before adding any misses, how many failure-to-engage procedurals apply?",
        "correct": "5",
        "options": [
          "5",
          "4",
          "6",
          "7"
        ],
        "note": "",
        "family": "10.2.7",
        "id": "6027dec45b5000f3"
      },
      {
        "rule": "10.2.3",
        "prompt": "While faulting a line, a competitor fires 17 shots and gains a significant advantage. From that position a maximum of 12 scoring hits can be attained. What is the maximum number of procedurals for that fault?",
        "correct": "12",
        "options": [
          "12",
          "11",
          "13",
          "14"
        ],
        "note": "Multiple penalties for the fault are capped by the scoring hits attainable.",
        "family": "10.2.3",
        "id": "8ba2c28d0727460d"
      },
      {
        "rule": "11.3.2",
        "prompt": "The Arbitration Committee receives a request at 13:10 on Saturday. Final results are scheduled to be declared at 12:50 on Sunday. What is the latest time the committee may rule under that schedule?",
        "correct": "Before 12:50 on Sunday",
        "options": [
          "Before 12:50 on Sunday",
          "By 13:10 on Sunday",
          "By 13:30 on Sunday",
          "Before 12:50 on Monday"
        ],
        "note": "The earlier limit is the declaration of final results.",
        "family": "11.3.2",
        "id": "75069bcdc82cd29e"
      }
    ]
  }
];
