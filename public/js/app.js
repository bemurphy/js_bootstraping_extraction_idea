var App = App || {};
App.bootstrapping = App.bootstrapping || {};

// This could actually use a library function to define the function for
// us and ensure we don't clobber with a redefinition
App.bootstrapping.foo_init = function(data) {
  console.log("foo_init:", data);
};

App.bootstrapping.other_init = function(data) {
  console.log("other_init:", data);
};

// No monkeying after the fact
Object.freeze(App.bootstrapping);

App.runBootstrapping = function(el) {
  var $el = $(el),
      id = $el.attr('id'),
      fun = App.bootstrapping[id],
      jsonText, data;

  if (typeof(fun) === 'function') {
    jsonText = $el.html();
    // This is one key rule, that all data we work
    // with run through JSON.parse.  See OWASP for more
    // details: http://bit.ly/VC6N4d
    data = JSON.parse(jsonText);
    fun(data);
  }
};

App.runAllBootstrapping = function() {
  $('script.js-bootstrap').each(function(idx, el){
    App.runBootstrapping(el);
  });
};

$(function(){
  App.runAllBootstrapping();
});
