var io = io;
if (!io) io = {};
if (!io.github) io.github = {};
if (!io.github.novel) io.github.novel = {};

(function ($) {
  var novelpop = io.github.novelpop;
  var page = 0;

  // 初期化処理
  function init() {

    if ($('#novel-content').length > 0) {
      initNovelIntroduction();
    }

    if ($('#novel-pop').length > 0) {
      initNovelViewer();
    }

  }

  // 小説タイトルを紹介するページ
  function initNovelIntroduction() {

    $(document)
    .on('click', '#novel-content .show-novel', shownovel)
    .on('click', '#novel-content .link-types a', switchLinkType)
    ;

  }

  // 小説をWebで読む用のページ
  function initNovelViewer() {

    showNovelSection();
    refreshPageAction();

    $(document)
      .on('click', '#novel-pop .page-action', clickPageAction)
      ;
  
  }

  function shownovel() {
    console.log('call shownovel function.');

    var $self = $(this);
    var url = $self.val();

    var features = [];
    features.push('width=800')
    features.push('height=600')
    features.push('location=no')
    features.push('resizable=no')

    window.open(url, '_blank', features.join(','));
  }

  function switchLinkType() {

    var $self = $(this);
    var $parent = $self.closest('.novel-show-link');
    var $links = $parent.find('.link-group');

    $links.removeClass('active');
    switch ($self.data('link-type')) {

      case 'web':
        $links.filter('.web').addClass('active');
        break;

      case 'pixiv':
        $links.filter('.pixiv').addClass('active');
        break;
    }

    $parent.find('.dropdown-text').text($self.text());

  }


  function refreshPageAction() {
    var $novelView = $('#novel-pop');
    var $prev = $novelView.find('.page-action.prev-page');

    if (page <= 0) {
      $prev.hide();
    } else {
      $prev.show();
    }
    var $next =$novelView.find('.page-action.next-page');
    if (page >= novelpop.section.length -1) {
      $next.hide();
    } else {
      $next.show();
    }
  }

  function clickPageAction() {

    $self = $(this);

    if ($self.hasClass('next-page')) {

      if (page < novelpop.section.length -1) {
        // 次のページを表示
        page++;
        showNovelSection();
      }
    } else if ($self.hasClass('prev-page')) {
      if (page >0) {
        //前のページを表示
        page--;
        showNovelSection();
      }
    }
    refreshPageAction();

    return false;
  }

  function showNovelSection() {

    var $novelView = $('#novel-pop');
    var section = novelpop.section[page];

    $novelView
      .find('.novel-content-right .inner-content')
        .html(section.right)
        .end()
      .find('.novel-content-left .inner-content')
        .html(section.left);

  }

  // 外部公開する関数を登録
  io.github.novel.init = init;

})(jQuery);
jQuery(function(){

  // 初期化処理を実行
  io.github.novel.init();
  
});