"use strict";
var StatusResponse;
(function (StatusResponse) {
    StatusResponse["SUCCESS"] = "success";
    StatusResponse["FAILED"] = "failed";
})(StatusResponse || (StatusResponse = {}));
function getIdFromData(res) {
    if (isSuccess(res)) {
        return res.data.databaseId;
    }
    else {
        return res.data.errorCode;
    }
}
function isSuccess(r) {
    return r.status === StatusResponse.SUCCESS;
}
//# sourceMappingURL=hw3-4.js.map