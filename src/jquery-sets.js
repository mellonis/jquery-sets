void function ($) {
    'use strict';
    $.fn.intersect = function (other) {
        return this.filter(function () {
            return other.get().indexOf(this) != -1;
        });
    };
    $.fn.union = function (other) {
        return this.add(other);
    };
    $.fn.except = function (other) {
        return this.filter(function () {
            return other.get().indexOf(this) == -1;
        });
    };
    $.fn.subsetOf = function (other) {
        return this.map(function () {
            return other.get().indexOf(this) != -1;
        }).get().every(function (cv) {
            return cv;
        });
    };
    $.fn.equivalent = function (other) {
        return this.subsetOf(other) && other.subsetOf(this);
    }
}(jQuery);