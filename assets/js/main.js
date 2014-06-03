/* globals jQuery, document, FastClick */
(function ($) {
  'use strict';

  $(document).ready(function () {
    /**
     * Remove 300ms delay on some touch devices
     */
    FastClick.attach(document.body);
  });

}(jQuery));