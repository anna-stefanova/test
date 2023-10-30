// написать интерфейсы запроса и ответов
interface IPayment {
    sum: number;
    from: number;
    to: number;
}

interface IRequest extends IPayment {}

enum StatusResponse {
    SUCCESS = 'success',
    FAILED = 'failed'
}

interface DataSuccessResponse extends IPayment {
    databaseId: number;
}

interface DataFailedResponse {
    errorMessage: string,
    errorCode: number
}

interface IResponseSuccess {
    status: StatusResponse.SUCCESS;
    data: DataSuccessResponse;
}

interface IResponseFailed {
    status: StatusResponse.FAILED;
    data: DataFailedResponse;
}

type f = (res: IResponseSuccess | IResponseFailed) => number;

function getIdFromData(res: IResponseSuccess | IResponseFailed):number {
    if (isSuccess(res)) {
        return res.data.databaseId;
    } else {
        return res.data.errorCode;
    }
}


function isSuccess(r: IResponseSuccess | IResponseFailed): r is IResponseSuccess {
    return r.status === StatusResponse.SUCCESS;
}
