(function (global, module) {

    if ('undefined' == typeof module) {
        var module = { exports: {} }
            ,exports = module.exports
    }

    /**
     * Exports.
     */
    module.exports = smLevenshtein();

    function smLevenshtein() {
        return {

            version : '0.0.1',

            similarity : function(a, b) {
                if (a == undefined || b == undefined) {
                    return 0;
                }
                var c = this._notNormalisedSimilarity(a, b);
                return (1 - (c / Math.max(a.length, b.length)));
            },

            _notNormalisedSimilarity : function(a, b) {
                var i;
                var j;
                var cost;
                var d = new Array();

                if (a.length == 0) {
                    return b.length;
                }

                if (b.length == 0) {
                    return a.length;
                }

                for (i = 0; i <= a.length; i++) {
                    d[ i ] = new Array();
                    d[ i ][ 0 ] = i;
                }

                for (j = 0; j <= b.length; j++) {
                    d[ 0 ][ j ] = j;
                }

                for (i = 1; i <= a.length; i++) {
                    for (j = 1; j <= b.length; j++) {
                        if (a.charAt(i - 1) == b.charAt(j - 1)) {
                            cost = 0;
                        }
                        else {
                            cost = 1;
                        }

                        d[ i ][ j ] = Math.min(d[ i - 1 ][ j ] + 1, d[ i ][ j - 1 ] + 1, d[ i - 1 ][ j - 1 ] + cost);
                    }
                }

                return d[ a.length ][ b.length ];
            }

        };
    };

    if ('undefined' != typeof window) {
        window.smLevenshtein = module.exports;
    }

    })(
        this
            , 'undefined' != typeof module ? module : {}
            , 'undefined' != typeof exports ? exports : {}
        );