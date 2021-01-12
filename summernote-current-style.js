/*! summernote-current-style v1.0.3 */
(function (factory) {
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('jquery'));
  } else {
    factory(window.jQuery);
  }
}
(function ($) {
  $.extend($.summernote.plugins, {
    'current-style': function (context) {
      var self = this,
          $editor = context.layoutInfo.editor;
      this.events = {
        'summernote.mousedown': function (we, e) {
          var el = e.target,
              node = el.nodeName.toLowerCase();
          // Old list
          $editor.find('.dropdown-style .dropdown-item').removeClass('active');
          // New list
          $editor.find('.dropdown-style li').removeClass('active');
          $editor.find('.dropdown-style [aria-label="' + node + '"]').addClass('active');
        }
      }
    }
  });
}));
