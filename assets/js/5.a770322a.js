(window.webpackJsonp=window.webpackJsonp||[]).push([[5,7],{310:function(n,a,e){},313:function(n,a){n.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},314:function(n,a,e){var t=e(5),r=e(96);n.exports=function(n,a,e){var c,m;return r&&"function"==typeof(c=a.constructor)&&c!==e&&t(m=c.prototype)&&m!==e.prototype&&r(n,m),n}},317:function(n,a,e){var t=e(24),r="["+e(313)+"]",c=RegExp("^"+r+r+"*"),m=RegExp(r+r+"*$"),i=function(n){return function(a){var e=String(t(a));return 1&n&&(e=e.replace(c,"")),2&n&&(e=e.replace(m,"")),e}};n.exports={start:i(1),end:i(2),trim:i(3)}},345:function(n,a,e){"use strict";var t=e(310);e.n(t).a},374:function(n,a,e){"use strict";e.r(a);e(93),e(94);var t=e(0),r={name:"abcjs-editor",watch:{callbacks:function(){this.onchange()},abc:function(){this.$refs.textarea.value=this.abc;new(e(303).Editor)("abc",{canvas_id:"paper",warnings_id:"warnings",onchange:this.onchange,abcjsParams:{add_classes:!0,responsive:"resize"},indicate_changed:!0})}},props:{abc:{type:String,required:!0},callbacks:{type:Array,required:!1}},mounted:function(){var n=this;t.a.nextTick((function(){n.$refs.textarea.value=n.abc;new(e(303).Editor)("abc",{canvas_id:"paper",warnings_id:"warnings",onchange:n.onchange,abcjsParams:{add_classes:!0,responsive:"resize"},indicate_changed:!0})}))},methods:{onchange:function(){var n=this;this.callbacks&&this.callbacks.forEach((function(a){a.redraw&&a.redraw(n.$refs.textarea.value)}))}}},c=(e(345),e(43)),m=Object(c.a)(r,(function(){var n=this.$createElement,a=this._self._c||n;return a("div",{staticClass:"abcjs-editor"},[a("textarea",{ref:"textarea",attrs:{id:"abc"}}),this._v(" "),a("div",{attrs:{id:"warnings"}}),this._v(" "),a("div",{attrs:{id:"paper"}})])}),[],!1,null,null,null);a.default=m.exports},472:function(n,a,e){"use strict";var t=e(6),r=e(4),c=e(95),m=e(11),i=e(8),d=e(18),o=e(314),s=e(45),A=e(2),u=e(29),l=e(67).f,p=e(26).f,f=e(9).f,h=e(317).trim,E=r.Number,g=E.prototype,D="Number"==d(u(g)),B=function(n){var a,e,t,r,c,m,i,d,o=s(n,!1);if("string"==typeof o&&o.length>2)if(43===(a=(o=h(o)).charCodeAt(0))||45===a){if(88===(e=o.charCodeAt(2))||120===e)return NaN}else if(48===a){switch(o.charCodeAt(1)){case 66:case 98:t=2,r=49;break;case 79:case 111:t=8,r=55;break;default:return+o}for(m=(c=o.slice(2)).length,i=0;i<m;i++)if((d=c.charCodeAt(i))<48||d>r)return NaN;return parseInt(c,t)}return+o};if(c("Number",!E(" 0o1")||!E("0b1")||E("+0x1"))){for(var b,I=function(n){var a=arguments.length<1?0:n,e=this;return e instanceof I&&(D?A((function(){g.valueOf.call(e)})):"Number"!=d(e))?o(new E(B(a)),e,I):B(a)},G=t?l(E):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),C=0;G.length>C;C++)i(E,b=G[C])&&!i(I,b)&&f(I,b,p(E,b));I.prototype=g,g.constructor=I,m(r,"Number",I)}},484:function(n,a,e){"use strict";e.r(a);e(472);var t=e(0),r={name:"example-tune-book",components:{AbcjsEditor:e(374).default},props:{callbacks:{type:Array,required:!1},tuneId:{type:Number,required:!1}},computed:{abc:function(){return this.abcjs?void 0===this.tuneId?this.allTunes:new this.abcjs.TuneBook(this.allTunes).getTuneById(""+this.tuneId).abc:""}},mounted:function(){var n=this;t.a.nextTick((function(){n.abcjs=e(303)}))},data:function(){return{allTunes:'%%gchordfont "itim-music,Itim" 20\nX: 1\nT:Money Lost\nM:3/4\nL:1/8\nQ:1/4=100\nC:Paul Rosen\nS:Copyright 2007, Paul Rosen\nR:Klezmer\nK:Dm\nAde|:"Dm"(f2d)e gf|"A7"e2^c4|"Gm"B>>^c BA BG|"A"A3Ade|"Dm"(f2d)e gf|"A7"e2^c4|\n"Gm"A>>B "A7"AG FE|1"Dm"D3Ade:|2"Dm"D3DEF||:"Gm"(G2D)E FG|"Dm"A2F4|"Gm"B>>c "A7"BA BG|\n"Dm"A3 DEF|"Gm"(G2D)EFG|"Dm"A2F4|"E°"E>>Fy "(A7)"ED^C2|1"Dm"D3DEF:|2"Dm"D6||\n\nX: 32\nT:Pretty Little Liza\nC:Paul Rosen\nS:Copyright 2005, Paul Rosen\nM:4/4\nL:1/8\nQ:1/2=106\nR:old time\nK:Am\n"Am"A2AA c2dd|e2eg e2dc|A2AA c2dd|e2cc A2cc|"Em (G)"B2BB B2BB|\nB2BB B2BB|"Am"A2AA c2dd|e2eg e2c2|"D"d2dd d2dd|d2dd d2cd|\n"Am"e2cc A2c2|"G"BAG2 BAG2|"Am"A2AA A2AA|A2AA A2AA|:"Am"e4 a3e|"G"g2d2- d2eg|\n"Am"a2aa ged2|"Em"e2ee e2ee|"Am"e4 a3e|"G"g2d2- d2Bc|"Em"d2e2 dcB2|"Am"A2AA A2AA:|\n\nX:49\nM:4/4\nL:1/16\n%%stretchlast .7\nQ:1/4=100\nT:Piano\n%%staves {(PianoRightHand) (PianoLeftHand)}\nV:PianoRightHand clef=treble\nV:PianoLeftHand clef=bass\nK:C\n[V: PianoRightHand] !mp!e2f2 e2d2 c2B2 A4|!>(!B2d2 g4 c6 !>)!e2|!p![G4e4] z4 A4 G4|c12 z4|[A12f12] [g4d4]|z4 !<(!B4 !<)![A8c8]|\n!mf!A4 z4 d8|B8 [G4c4] z4|f2A2 c4 f4 g4|[f12d12] e4|!<(!A4 A4 c2e2 !<)!g4|!f!e8 z8|\n[A4d4] z4 A8|BcBA G4 c4 G2B2|A2G2 A2B2 c4 B2G2|c12 z4|]\n[V: PianoLeftHand] [E,12C,12] F,4|[G,8D,8] [C,8E,8]|G,4 C,4 C,4 B,,A,,C,B,,|A,,12 z4|A,,4 B,,4 C,2D,2 B,,C,D,E,|C,2E,2 G,4 E,2F,2 G,4|\nF,4 A,4 [A,8F,8]|G,2F,2 E,2D,2 [C,4E,4] z4|[F,8A,8] [D,4A,4] z4|F,2G,2 A,2F,2 D,2F,2 C,2B,,2|C,4 F,A,D,F, E,4 z4|C,8 z8|\nF,4 E,4 F,4 A,4|[D,8G,8] E,4 z4|C,4 [C,4F,4] z4 G,4|C,12 z4|]\n\nX:77\nT:Mary\nM:C\nL:1/4\nK:G\nBAGA| BBB2|AAA2| Bdd2|\nw:Mar- y had a lit- tle lamb, lit- tle lamb, lit- tle lamb,\nBAGA| BBBB|AABA |G|]\nw:Mar- y had a lit- tle lamb whose fleece was white as snow.\n\nX:102\n%%staves 1 2 3\nT: Sonata I\nC: J.S. Bach\nM: C\nQ:"Adagio"\nL: 1/8\nK:C\nV:1 clef=treble name="Violino I"      sname="Vl. I"\nV:2 clef=treble name="Violino II"     sname="Vl. II"  space=+10\nV:3 clef=bass   name="Violoncello" sname="Vc."\n[V:1]  g8-|gf/e/ {e}f>g (a/f/d/f/) (A//=B//A//B//TB3//A///B///)|\n[V:2] z8 | z8 |\n[V:3] z cec gGBG | Aa- a/_b/a/g/ f3 g/f/ |\n%\n[V:1] c/gf/ E/ed/ c/c\'b/ A/ag/ | ^f/e/d- d/(c/B/A/) G/(e/c/e/) Aa| d2-d/g/_b/a/ a3 g/=f/|\n[V:2] c8- | cB/A/ {A}B>c (e/c/A/c/) (E//^F//E//F//TF3//E///F///) | G/(D/G/A/) _B/G/g/e/ ^cA d2-|\n[V:3] edcB AG^FE | D^FGg c3d/c/| _BG g2-gf/e/ f>g|\n\nX:232\nT:Amazing Grace\nC:Lyric Author: John Newton\nR:Early American Melody\nZ:Public Domain\nN:A well known tune\nL:1/4\nM:3/4\n%%staves (S A) (T B)\nV:S clef=treble name=""\nV:A clef=treble name=""\nV:T clef=bass name=""\nV:B clef=bass name=""\nK:Ab\n% Measures 1 - 7\n[V:S] (E/ F/) | A2 (c/ A/) | c2 B | A2 F |  E2 (E/ F/) | A2 (c/ A/) | c2 (B/ c/) | He2 |\n[V:A] (C/ D/) | C2 (E/ C/) | E2 D | C2 D | C2 (C/ D/) | C2 (E/ C/) | E2 A | G2 |\n[V:T] A, | E,2 A, | A,2 G, | A,2 A, | A,2 A, | E,2 A, | A,2 A, | HB,2 |\n[V:B] A,, | A,,2 A,, | A,,2 E, | F,2 D, | A,,2 A,, | A,,2 A,, | A,2 F, | E,2 |\n% Measures 8 - 14\n[V:S] (B/ c/) | e2 (e/ c/)  | A2 (F/ E/) |  A2 F | E2 (E/ F/) | A2 (c/ A/) | c2 B | HA2 |\n[V:A] G | A2 (A/ E/) | E2 (D/ C/) | F2 D | C2 (C/ D/) | C2 (E/ A/) | G2 G | E2 |\n[V:T] E | C2 (C/ A,/) | C2 A, | A,2 A, | A,2 A, | A,2 (A,/ C/) | E2 D | HC2 |\n[V:B] E, | A,2 A, | A,2 A, | D,2 D, | A,,2 A, | F,2 E, | E,2 E, | A,,2 |\n\nX:400\nT:Drum Kit\n%%map drummap D    print=D heads=x_head   % pedal hi-hat\n%%map drummap E    print=E                % bass drum 1\n%%map drummap F    print=F                % acoustic bass drum\n%%map drummap G    print=G                % low floor tom-tom\n%%map drummap A    print=A                % high floor tom-tom\n%%map drummap B    print=B                % low tom-tom\n%%map drummap ^B   print=B heads=triangle % tambourine\n%%map drummap c    print=c                % acoustic snare\n%%map drummap _c   print=c                % electric snare\n%%map drummap ^c   print=c heads=triangle % low wood block\n%%map drummap =c   print=c                % side stick\n%%map drummap d    print=d                % low-mid tom tom\n%%map drummap ^d   print=d heads=triangle % high wood block\n%%map drummap e    print=e                % high-mid tom tom\n%%map drummap ^e   print=e heads=triangle % cowbell\n%%map drummap f    print=f                % high tom tom\n%%map drummap ^f   print=f heads=x_head   % ride cymbal 1\n%%map drummap g    print=g heads=x_head   % closed hi-hat\n%%map drummap ^g   print=g heads=diamond  % open hi-hat\n%%map drummap a    print=a heads=x_head   % crash cymbal 1\n%%map drummap ^a   print=a heads=triangle % open triangle\n%%MIDI drummap D   44 % pedal hi-hat\n%%MIDI drummap E   36 % bass drum 1\n%%MIDI drummap F   35 % acoustic bass drum\n%%MIDI drummap G   41 % low floor tom-tom\n%%MIDI drummap A   43 % high floor tom-tom\n%%MIDI drummap B   45 % low tom-tom\n%%MIDI drummap ^B  54 % tambourine\n%%MIDI drummap c   38 % acoustic snare\n%%MIDI drummap _c  40 % electric snare\n%%MIDI drummap ^c  77 % low wood block\n%%MIDI drummap =c  37 % side stick\n%%MIDI drummap d   47 % low-mid tom tom\n%%MIDI drummap ^d  76 % high wood block\n%%MIDI drummap e   48 % high-mid tom tom\n%%MIDI drummap ^e  56 % cowbell\n%%MIDI drummap f   50 % high tom tom\n%%MIDI drummap ^f  51 % ride cymbal 1\n%%MIDI drummap g   42 % closed hi-hat\n%%MIDI drummap ^g  46 % open hi-hat\n%%MIDI drummap a   49 % crash cymbal 1\n%%MIDI drummap ^a  81 % open triangle\n%%score (1 2)\nQ:1/4=120\nM:4/4\nL:1/4\nK:C perc\nV:1\nz4| g/^f/g/^f/ g/^f/g/^f/| c/^f/g/^f/ A/^f/g/^f/| c/^f/g/^f/ A/^f/g/^f/|\nc/c/g/^f/ A/A/g/^f/| c/^f/c/^f/ A/^f/A/^f/|(3B/B/B/ (3f/f/f/ (3e/e/e/ (3d/d/d/ | a4|\nV:2\nE D E/E/ D|E D E/E/ D|E D E/E/ D|E D E/E/ D|\nE D E/E/ D|E D E/E/ D|E D E/E/ D|E D E/E/ D|\n',abcjs:null}}},c=e(43),m=Object(c.a)(r,(function(){var n=this.$createElement,a=this._self._c||n;return a("div",{staticClass:"example-tune-book"},[a("abcjs-editor",{attrs:{callbacks:this.callbacks,abc:this.abc}})],1)}),[],!1,null,null,null);a.default=m.exports}}]);