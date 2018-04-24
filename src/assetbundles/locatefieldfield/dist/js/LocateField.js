/**
 * Locate plugin for Craft CMS
 *
 * LocateField Field JS
 *
 * @author    Isaac Gray
 * @copyright Copyright (c) 2018 Isaac Gray
 * @link      https://www.vaersaagod.no/
 * @package   Locate
 * @since     2.0.0LocateLocateField
 */

;(function ($, window, document, undefined) {

    var pluginName = "LocateLocateField",
        defaults = {};

    // Plugin constructor
    function Plugin(element, options) {
        this.element = element;

        this.options = $.extend({}, defaults, options);

        this._defaults = defaults;
        this._name = pluginName;

        this.init();
    }

    Plugin.prototype = {

        init: function (id) {
            var _this = this;


            $(function () {
                var fields = {
                    lat: document.getElementById(_this.options.prefix + _this.options.name + '-lat'),
                    lng: document.getElementById(_this.options.prefix + _this.options.name + '-lng'),
                    placeid: document.getElementById(_this.options.prefix + _this.options.name + '-placeid'),
                }
                var input = document.getElementById(_this.options.prefix + _this.options.name + '-location');
                var options = JSON.parse('{' + _this.options.optionsObject + '}');
                var autocomplete = new google.maps.places.Autocomplete(input, options);
                autocomplete.addListener('place_changed', function () {
                    var place = autocomplete.getPlace();
                    console.log(place);
                    fields.lat.value = place.geometry.location.lat();
                    fields.lng.value = place.geometry.location.lng()
                    fields.placeid.value = place.place_id;
                });

                input.addEventListener('change', function(e) {
                   if (!input.value) {
                       fields.lat.value = '';
                       fields.lng.value = '';
                       fields.placeid.value = '';
                   }
                });
            });
        }
    };

    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[pluginName] = function (options) {
        return this.each(function () {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName,
                    new Plugin(this, options));
            }
        });
    };

})(jQuery, window, document);