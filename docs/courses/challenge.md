# LibreLingo Documentation on Challenge

As they study using LibreLingo, users respond to a series of tasks or questions called **Challenge**s.

Challenges are not configured directly but [automatically generated from Skill configuration](skill.md#how-skills-are-taught-to-the-user).

---

**Confused?**
[Ask people](https://github.com/LibreLingo/LibreLingo/discussions) on GitHub Discussions.

---

**Table of Contents:**

- [Challenge order](#challenge-order)
- [Cards challenge](#cards-challenge)
- [Short input challenge](#short-input-challenge)
- [Options challenge](#options-challenge)
- [Chips challenge](#chips-challenge)
- [Listening challenge](#listening-challenge)

## Challenge order

The order of words and phrases within a skill is random, but certain challenge types always come before others. This is denoted by the _Priority_ values listed under each challenge type. First-priority challenges come before second-priority challenges, which come before third-priority challenges.

## Cards challenge

![Text asks the user: which of these is "river"? Below this heading are three cards. Each card contains a Spanish word and a corresponding image. In the center, the correct choice (río) is selected.](/docs/screenshots/cards-challenge.png)

- _Generated from:_ `New words` only
- _Task:_ translation, multiple-choice
- _Direction:_ source -> target only
- _Properties used:_ `Word`, `Translation`, `Images` -- both of the asked word and of two or three other words in the same skill
- _Mini-dictionary available:_ No
- _Priority_: First

In this challenge type, the user is presented with a word in their source language and three (four on mobile) cards to choose from. Each card contains a target language word and a matching image, which is a big hint since the user may have never seen this target language word before.

Note that for each card, a random image is selected from the word's `Images` array.

## Short input challenge

![Text asks the user to type the word "river" in Spanish. Below this heading is a text box and a set of buttons to insert Spanish-specific characters. At right is an image of a river.](/docs/screenshots/short-input-challenge.png)

- _Generated from:_ `New words` only
- _Task:_ translation, free-form
- _Direction:_ source -> target only
- _Properties used:_ `Word`, `Translation`, `Images`
- _Mini-dictionary available:_ Yes
- _Priority_: Second

In this challenge type, the user is presented with a word in their source language and a text box in which to input the translation into the target language. There is also a random image from the `Images` array on the right, but since this challenge asks for the target language, the image does not give the user any additional information. If the user does need a hint, the mini-dictionary is available for this challenge.

## Options challenge

![Text asks the user which one of the options is "Let's go to the beach!". Below this question are three Spanish sentences with radio buttons to their left.](/docs/screenshots/options-challenge.png)

- _Generated from:_ `Phrases` only
- _Task:_ translation, multiple-choice
- _Direction:_ source -> target only
- _Properties used:_ `Phrase`, `Translation` both of the asked phrase and two other phrases in the same skill
- _Mini-dictionary available:_ No
- _Priority_: First

In this challenge type, the user is presented with a phrase in their source language and three options from which they must choose the correct translation into the target language. There are no hints available.

## Chips challenge

![Text instructs the user to translate the phrase "Let's go to the beach!". At the bottom of the image, there is a group of draggable Spanish words.](/docs/screenshots/chips-challenge.png)

- _Generated from:_ `Phrases` only
- _Task:_ translation, set of words provided
- _Direction:_ Both directions: source -> target, target -> source
- _Properties used:_
  - If source -> target: `Phrase`, `Translation`, `Alternative translations`; `Translation` and `Alternative translations` of other phrases anywhere in the course
  - If target -> source: `Translation`, `Phrase`, `Alternative versions`; `Phrase` and `Alternative versions` of other phrases anywhere in the course
- _Mini-dictionary available:_ Yes
- _Priority_: Third

In this challenge type, the user is presented with a phrase in one language and a set of words in the other language. This set will always include all words of the `Translation` field. The user's task is to use these words as "building blocks" to create _any_ acceptable translation for the phrase they've been presented with.

The mini-dictionary is available to give hints about individual words, but there are no hints about grammar or sentence structure.

The chips will never include exact duplicates of each other.

## Listening challenge

![Text instructs the user: "Type what you hear". Below this heading is a text box and a set of buttons to insert Spanish-specific characters.](/docs/screenshots/listening-challenge.png)

- _Generated from:_ `New words` and `Phrases`
- _Task:_ transcription
- _Direction:_ N/A, target language only
- _Properties used:_ `Word` or `Phrase`
- _Mini-dictionary available:_ No
- _Priority_: Second

In this challenge type, the user is played audio of a word or phrase in the target language and is presented with a text box to transcribe the audio (still in the target language). The user can re-listen to the audio if necessary.
