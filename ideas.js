// From work:

//gitlab collapsibility
function () {
  $('.diff-header .diff-btn-group')
    .append($('<a class="btn btn-small toggler">toggle</a>')
      .click(function () {
        $(this)
          .closest('.diff-file')
          .find('.diff-content')
          .toggle();
      }));
}

//bookmark version
javascript: (function () {  $('.diff-header .diff-btn-group').append($('<a class="btn btn-small toggler">toggle</a>').click(function () {    $(this).closest('.diff-file').find('.diff-content').toggle();  }));})();
