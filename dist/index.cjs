'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var lr = require('@lezer/lr');
var language = require('@codemirror/language');

// This file was generated by lezer-generator. You probably shouldn't edit it.
const parser = lr.LRParser.deserialize({
  version: 14,
  states: "$zQQOPOOOfOQO'#C^OnOSO'#C_OvOWO'#C`O!OO`O'#CbO!WOpO'#CcOOOO'#Cg'#CgOOOO'#Cd'#CdQQOPOOOOOO,58x,58xO!`OQO,58xOOOO,58y,58yO!eOSO,58yO!jOWO,58zO!rOWO,58zOOOO,58|,58|O!wO`O,58|OOOO,58},58}O!|OpO,58}OOOO-E6b-E6bOOOO1G.d1G.dOOOO1G.e1G.eOOOO1G.f1G.fO#ROWO1G.fO#WOWO1G.fOOOO1G.h1G.hOOOO1G.i1G.iOOOO7+$Q7+$QO#`OWO7+$QOOOO<<Gl<<Gl",
  stateData: "#e~OYVO[PO_QObROeSOhTO~O]YO^XO~O`[OaZO~OT]Oc^O~Of`Og_O~OibOjaO~O^dO~OaeO~OcgOdfO~OThO~OgiO~OjjO~OdkO~OclOdkO~OdmO~O",
  goto: "k[PP]]]P]]aPPgTUOWQWORcWTVOW",
  nodeNames: "⚠ CriticMarkup Addition Deletion Substitution MSub Comment Highlight",
  maxTerm: 26,
  skippedNodes: [0],
  repeatNodeCount: 1,
  tokenData: "'o~R]XYzYZz]^zpqzqrzrszs#Oz#O#P!P#P#oz#o#p#s#p;'Sz;'S;=`'i<%lOz~!POY~~!UXY~rsz!P!Qz#O#Pz#U#Vz#Y#Zz#b#cz#f#gz#h#iz#i#j!q~!tR!Q![!}!c!i!}#T#Z!}~#QR!Q![#Z!c!i#Z#T#Z#Z~#^R!Q![#g!c!i#g#T#Z#g~#jR!Q![z!c!iz#T#Zz~#xVY~vw$_{|%`}!O%k!^!_%v!_!`'V!`!a']#r#s'c~$bP#Z#[$e~$hP#h#i$k~$nP!]!^$q~$tPvw$w~$zP#Z#[$}~%QP#h#i%T~%WP!]!^%Z~%`Oe~~%cP{|%f~%kO[~~%nP}!O%q~%vO_~~%yQ#W#X&P#a#b&h~&SP#X#Y&V~&YP#`#a&]~&`P!`!a&c~&hOb~~&kP#T#U&n~&qP#f#g&t~&wP#_#`&z~&}P!`!a'Q~'VOh~~'YP!_!`'Q~'`P!`!a%Z~'fP#r#s&c~'lP;=`<%lz",
  tokenizers: [5, new lr.LocalTokenGroup("h~RP{|U~XP{|[~_P#q#rb~gO^~~", 23, 13), new lr.LocalTokenGroup("h~RP}!OU~XP}!O[~_P#q#rb~gOa~~", 23, 16), new lr.LocalTokenGroup("!x~RQ!^!_X#r#s!S~[P!P!Q_~bP#W#Xe~hP#X#Yk~nP#`#aq~tP!`!aw~zP#q#r}~!SOd~~!VRvw!`!`!a!r#r#sw~!cP#Z#[!f~!iP#h#i!l~!oP!]!^!r~!wOT~~", 85, 19), new lr.LocalTokenGroup("!g~RQvwX!^!_!`~[P#`#a_~bP#h#ie~hP!]!^k~nPvwq~tP#`#aw~zP#h#i}~!QP!]!^!T~!WP#q#r!Z~!`Og~~!cP!^!_!T~", 68, 22), new lr.LocalTokenGroup("!a~RQ!^!_X!_!`!Y~[P!P!Q_~bP#a#be~hP#T#Uk~nP#f#gq~tP#_#`w~zP!`!a}~!QP#q#r!T~!YOj~~!]P!_!`}~", 62, 25)],
  topRules: {"CriticMarkup":[0,1]},
  tokenPrec: 0
});

const criticmarkupLanguage = language.LRLanguage.define({
    parser,
});
function criticmarkup() {
    return new language.LanguageSupport(criticmarkupLanguage);
}

exports.criticmarkup = criticmarkup;
exports.criticmarkupLanguage = criticmarkupLanguage;
