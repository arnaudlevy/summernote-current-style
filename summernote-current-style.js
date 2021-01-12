/*! summernote-current-style v1.0.4 */
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
          var node = e.target.nodeName.toLowerCase();
          console.log(node);
          e.stopPropagation();
          // Remove active class from old list
          $editor.find('.dropdown-style .dropdown-item').removeClass('active');
          // Remove active class from new list
          $editor.find('.dropdown-style li').removeClass('active');
          // Add active class to current style
          $editor.find('.dropdown-style [aria-label="' + node + '"]').addClass('active');
        }
      }
    }
  });
}));
