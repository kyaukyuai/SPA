/*
 * spa.chat.js
 *
*/
/*jslint    browser: true, continue: true,
devel: true, indent: 2, maxerr: 50,
newcap: true, nomen: true, plusplus: true,
regexp: true, sloppy: true, vars: false,
white: true
*/
/*global $, spa, getComputedStyle */

spa.chat = (function () {
  var
    configMap = {
      main_html: String()
        + '<div class="spa-chat">'
          + '<div class="spa-chat-head>'
            + '<div class="spa-chat-head-toggle">+</div>'
            + '<div class="spa-chat-head-title">'
              + 'Chat'
            + '</div>'
          + '</div>'
          + '<div class="spa-chat-closer">x</div>'
          + '<div class="spa-chat-sizer">'
            + '<div class="spa-chat-msgs"></div>'
            + '<div class="spa-chat-box">'
              + '<input type="text"/>'
              + '<div>send</div>'
            + '</div>'
          + '</div>'
        + '</div>',

      settable_map: {}
    },
    stateMap = { $container: null },
    jqueryMap = {},

    setJqueryMap, configModule, initModule;
  // -----------------------------------------
  setJqueryMap = function () {
    var $container = stateMap.$container;
    jqueryMap = { $container: $container };
  };

  configModule = function ( input_map ) {
    spa.util.setConfigMap({
      input_map: input_map,
      settable_map: configMap.settable_map,
      config_map: configMap
    });
    return true;
  };

  initModule = function ( $container ) {
    $container.html( configMap.main_html );
    stateMap.$container = $container;
    setJqueryMap();
    return true;
  };

  return {
    configModule: configModule,
    initModule: initModule
  };
  // -----------------------------------------
}());
