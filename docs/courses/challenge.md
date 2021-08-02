# LibreLingo Documentation on Challenge

A **Challenge** is a single task or question the user responds to as they study using LibreLingo. Challenges are not configured directly, but [automatically generated from Skill configuration](skill.md#how-skills-generate-challenges).

To get a better understanding, you can read the [course basics](README.md#basics).

---

**Confused?**
[Ask people](https://github.com/kantord/LibreLingo/discussions) on GitHub Discussions.

---

**Table of Contents:**
- [Cards challenge](#cards-challenge)
- [Short input challenge](#short-input-challenge)
- [Options challenge](#options-challenge)
- [Chips challenge](#chips-challenge)
- [Listening challenge](#listening-challenge)

## Cards challenge

<img src="/docs/screenshots/cards-challenge.png" width="400px"></img>

*Generated from:* `New words` only
*Task:* translation, multiple-choice
*Direction:* source -> target only
*Properties used:* `Word`, `Translation`, `Images` -- both of the asked word and of two or three other words in the same skill
*Mini-dictionary available:* No

In this challenge type, the user is presented with a word in their source language, and three (four on mobile) cards to choose from. Each card contains a target language word and a matching image, the latter of which functions as a big hint since the user may have never seen this target language word before.

Note that for each card, a random image is selected from the `Images` array.

## Short input challenge

<img src="/docs/screenshots/short-input-challenge.png" width="400px"></img>

*Generated from:* `New words` only
*Task:* translation, free-form
*Direction:* source -> target only
*Properties used:* `Word`, `Translation`, `Images`
*Mini-dictionary available:* Yes

In this challenge type, the user is presented with a word in their source language, and a text box in which to input the translation into the target language. There is also a random image from the `Images` array on the right, but since this challenge asks for the target language, the image does not give the user any additional information. If the user does need a hint, the mini-dictionary is available for this challenge.

## Options challenge

<img src="/docs/screenshots/options-challenge.png" width="400px"></img>

*Generated from:* `Phrases` only
*Task:* translation, multiple-choice
*Direction:* source -> target only
*Properties used:* `Phrase`, `Translation` both of the asked phrase and two other phrases in the same skill
*Mini-dictionary available:* No

In this challenge type, the user is presented with a phrase in their source language, and three options from which they must choose the correct translation into the target language. There are no hints available.

## Chips challenge

<img src="/docs/screenshots/chips-challenge.png" width="400px"></img>

*Generated from:* `Phrases` only
*Task:* translation, set of words provided
*Direction:* Both directions: source -> target, target -> source
*Properties used:*
- If source -> target: `Phrase`, `Translation`, `Alternative translations`; `Translation` and `Alternative translations` of other phrases anywhere in the course
- If target -> source: `Translation`, `Phrase`, `Alternative versions`; `Phrase` and `Alternative versions` of other phrases anywhere in the course
*Mini-dictionary available:* Yes

In this challenge type, the user is presented with a phrase in one language and a set of words in the other language. This set will always include all words of the `Translation` field. The user's task is to use this words as "building blocks" to create *any* acceptable translation for the phrase they've been presented with.

The mini-dictionary is available to give hints about individual words but there are no hints about grammar or sentence structure.

The chips will never include exact duplicates of each other.

## Listening challenge

<img src="/docs/screenshots/listening-challenge.png" width="400px"></img>

*Generated from:* `New words` and `Phrases`
*Task:* transcription
*Direction:* N/A, target language only
*Properties used:* `Word` or `Phrase`
*Mini-dictionary available:* No

In this challenge type, the user is played audio of a word or phrase in the target language, and is presented with a text box to transcribe the audio (still in the target language). The user can re-listen to the audio, if necessary.
