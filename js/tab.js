/*tab*/
   
// 預設顯示第一個 Tab
var _showTab = 0;
$('.moreSection').each(function(){
  // 目前的頁籤區塊
  var $tab = $(this);

  var $defaultLi = $('.tabs li', $tab).eq(_showTab).addClass('active');
  $($defaultLi.find('a').attr('href')).siblings().hide();
  
  // 當 li 頁籤被點擊時...
  // 若要改成滑鼠移到 li 頁籤就切換時, 把 click 改成 mouseover
  $('.tabs li', $tab).click(function() {
    // 找出 li 中的超連結 href(#id)
    var $this = $(this),
      _clickTab = $this.find('a').attr('href');
    // 把目前點擊到的 li 頁籤加上 .active
    // 並把兄弟元素中有 .active 的都移除 class
    $this.addClass('active').siblings('.active').removeClass('active');
    // 淡入相對應的內容並隱藏兄弟元素
    $(_clickTab).stop(false, true).fadeIn().siblings().hide();

    return false;
  }).find('a').focus(function(){
    this.blur();
  });
});

//href

let url = location.href;
let ary = url.split('/');
let nowPage = ary[ary.length -1];
let nowPageName = url.split('#');
let nowTab = nowPageName[nowPageName.length -1];

if(nowTab){
  $('.tabs li').removeClass('active');
  $('a[href="#'+nowTab+'"]').parent('li').addClass('active');

  window.setTimeout(( () => $('html,body').animate({scrollTop:-1100},0)), 100);
}


