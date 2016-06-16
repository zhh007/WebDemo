define(function () {
    var counter = {};

    return {
        getNewID: function (ctrlType) {
            if (typeof counter[ctrlType] === "undefined") {
                counter[ctrlType] = 0;
            } else {
                counter[ctrlType] += 1;
            }

            return counter[ctrlType];
        }
    };
});