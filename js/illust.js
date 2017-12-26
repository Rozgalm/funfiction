(function ($) {

  var categorys = [
    {
      category: 'original',
      title: 'オリジナル',
      images: [
        {
          filename: 'illust1.png',
          title: '狼',
          comment: 'ファンタジックな狼(｀･ω･´)'
        },
        {
          filename: 'novel1.png',
          title: '悪魔',
          comment: 'フォロワーさんがイメージしてくれたキャラ！'
        }
      ]
    },
    {
      category: 'kingyo',
      title: 'きんぎょ荘',
      images: [
        {
          filename: 'illust2.png',
          title: 'きんぎょ荘',
          comment: 'きんぎょ荘メンバーのタクトくん(*´ω｀*)'
        }
      ]
    },
    {
      category: 'office',
      title: '事務所',
      images: [
        {
          filename: 'illust3.png',
          title: '紗夜と海人',
          comment: '幸せになってほしい……'
        },
        {
          filename: 'novel2.png',
          title: 'かわい女の子',
          comment: 'あるセッションで出てきたNPC。'
        },
        {
          filename: 'novel3.png',
          title: 'かわいい女の子２',
          comment: 'あるセッションで出てきたNPCその2。結構好き'
        },
        {
          filename: 'novel4.png',
          title: 'かっこいい男の子',
          comment: 'あるセッションで出てきたNPCその3。やんちゃっ子'
        },
        {
          filename: 'novel5.png',
          title: 'かっこいい男の子',
          comment: 'あるセッションで出てきたNPCその4。賢い'
        }
      ]
    },
    {
      category: 'jikkyo',
      title: '実況',
      images: [
        {
          filename: 'illust4.png',
          title: 'wrwrd',
          comment: 'ちょっとおこなzm氏(´∀｀；)'
        }
      ]
    },
    {
      category: 'other',
      title: 'その他',
      images: [
        {
          filename: 'novel7.png',
          title: '身内',
          comment: '身内のセッションの相手キャラ(*´ω｀*)'
        },
      ]
    }
  ];

  var $illust = $('#illust-content');

  // 最初のリスト表示
  var $list = $illust.find('.list');
  categorys.forEach(function (item, idx) {

    var $title = $('<a />');
    $title
      .addClass('list-group-item category')
      .attr('href', '#');

    $('<span />')
      .addClass('category-name')
      .text(item.title)
      .appendTo($title);

    var $imglist = $('<ul />').addClass('title-list').hide();
    item.images.forEach(function (img, imgidx) {
      var $imgtitle = $('<li />');
      $('<a />')
        .addClass('image-link')
        .attr('href', '#')
        .text(img.title)
        .data('imginfo', {
          category: item.category,
          index: imgidx
        })
        .appendTo($imgtitle);
      $imglist.append($imgtitle);
    });
    $imglist.appendTo($title);

    $list.append($title);
  });
  $illust.find('.left-content .loading').remove();

  // クリックしたカテゴリのタイトルを表示
  $(document).on('click', '#illust-content .left-content .category', function () {
    var $self = $(this);
    var $clist = $('#illust-content').find('.left-content .category');

    $clist
      .not($self)
      .removeClass('active')
      .find('.title-list')
      .hide(300);

    var $tlist = $self.find('.title-list');
    if ($tlist.is(':visible')) {
      $tlist.hide(100);
      $self.removeClass('active');
    } else {
      $self.addClass('active');
      $tlist.show(300);
    }

  });

  //クリックしたリンクの画像を表示
  $(document)
    .on('click', '#illust-content .left-content .image-link', showImage)
    .on('click', '#illust-content .right-content .thumbnail-image', showImage);

  function showImage(e) {
    var $self = $(this);
    var $rcontent = $illust.find('.right-content');
    var $loading = $rcontent.find('.loading');
    var $preview = $rcontent.find('.preview');
    var imginfo = $self.data('imginfo');

    categorys.forEach(function (category, idx) {
      if (category.category !== imginfo.category) {
        return;
      }
      var item = category.images[imginfo.index];
      $loading.show();
      $preview
        .empty()
        .append(
        $('<img />').attr('src', 'img/' + item.filename)
        )
        .append(
        $('<div />').text(item.comment)
        );
      $loading.hide();


      //　サムネイルリストの作成
      var $thumbnails = $illust.find('.thumbnail-list');
      var $slick = $('<div />');
      category.images.forEach(function (img, imgidx) {

        var cls = '';
        if (imgidx === imginfo.index) {
          cls = ' selected';
        }
        $('<div />')
          .addClass('thumbnail-image' + cls)
          .data('imginfo', {
            category: category.category,
            index: imgidx
          })
          .append(
          $('<img />')
            .attr('src', 'img/' + img.filename)
            .attr('alt', img.title)
            .attr('title', img.title)
          )
          .appendTo($slick);
      });
      $thumbnails.empty();

      $slick
        .appendTo($thumbnails)
        .slick({
          rows: 1,
          slidesToShow: 4,
          slidesToScroll: 1
        });
    });

    return false;

  }

})(jQuery);