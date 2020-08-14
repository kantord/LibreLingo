"use strict";
exports.__esModule = true;
var js_levenshtein_1 = require("js-levenshtein");
var id = function (x) { return x; };
var ignorePunctuation = function (form) { return form.replace(/[!¡?¿,.]/g, ""); };
var ignoreCasing = function (form) { return form.toLowerCase(); };
var ignoreWhitespace = function (form) {
    return form.replace(/^\s+|\s+$/g, "").replace(/\s+/g, " ");
};
var normalize = function (form) { return ignoreWhitespace(ignoreCasing(form)); };
var areSentencesSimilar = function (sentence1, sentence2) {
    return js_levenshtein_1["default"](normalize(sentence1), normalize(sentence2)) <= 1;
};
var areSentencesIdentical = function (sentence1, sentence2) {
    return normalize(sentence1) === normalize(sentence2);
};
var getSuggestion = ({
    alwaysSuggest: alwaysSuggest,
    answer: answer,
    mappedForm: mappedForm,
    suggester: suggester,
    form: form
});
!alwaysSuggest && areSentencesIdentical(answer, mappedForm)
    ? ""
    : suggester(form);
var evaluateAnswerRaw = function (_a) {
    var validAnswers = _a.validAnswers, answer = _a.answer, suggester = _a.suggester, alwaysSuggest = _a.alwaysSuggest, mapper = _a.mapper;
    var correct = false, suggestion = "";
    validAnswers.forEach(function (form) {
        var mappedForm = mapper(form);
        if (areSentencesSimilar(answer, mappedForm)) {
            if (correct && !suggestion) {
                return;
            }
            correct = true;
            suggestion = getSuggestion({
                alwaysSuggest: alwaysSuggest,
                answer: answer,
                mappedForm: mappedForm,
                suggester: suggester,
                form: form
            });
        }
    });
    return { correct: correct, suggestion: suggestion };
};
function evaluateAnswer(_a) {
    var validAnswers = _a.validAnswers, answer = _a.answer;
    var result = evaluateAnswerRaw({
        mapper: id,
        validAnswers: validAnswers,
        answer: answer,
        suggester: function (form) { return "You made a small error. Correct spelling: " + form; }
    });
    if (!result.correct) {
        result = evaluateAnswerRaw({
            alwaysSuggest: true,
            validAnswers: validAnswers,
            mapper: ignorePunctuation,
            answer: answer,
            suggester: function (form) { return "Watch out for punctuation! Correct spelling: " + form; }
        });
    }
    return result;
}
exports["default"] = evaluateAnswer;
