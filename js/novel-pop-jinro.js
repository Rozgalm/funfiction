var jp = jp;
if (!jp) jp = {};
if (!jp.generate_galm) jp.generate_galm = {};
if (!jp.generate_galm.novel) jp.generate_galm.novel = {};
(function ($) {
  
  section = [
    {
      right:
//1page 右
`人狼１日目。犠牲者は１人。
<br>これから議論が始まる。
`,
      left:
//1page 左
`宣言したのは３人。その内騙りは２人と思われる。
<br>今夜は一体誰を吊るべきか。
`
    },
    {
      right:
//2page 右
`人狼２日目。吊１人、犠牲者１人。
<br>騙りは誰なのか、審議が始まる。
`,
      left:
//2page 左
`前日のことを踏まえて議論が熱くなる。
<br>信用に足りるのは誰か。
`
    },
    {
      right:
//3page 右
`人狼３日目。吊１人だが犠牲者はいないようだ。
<br>どうやら村にもまだ希望があるらしい。
`,
      left:
//3page 左
`ｇｊを出した狩人は未だ出ず。潜伏して静かに護衛を続けるのだろう。
<br>今夜は人狼が厳しい夜を迎えるだろうか。
`
    }
  ];

  jp.generate_galm.novel.section = section;

})(jQuery);
