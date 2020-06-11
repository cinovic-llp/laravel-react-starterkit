import { put, takeEvery, delay, call, takeLatest } from "redux-saga/effects";
import {ActionDisplayUserDetails,ActionDisplayUserList} from "../Action";
import {GET_USER,GET_USER_LIST} from "../Action";
import {ApiGetUser,ApiGetUserList} from "../../../api";

export function* getUser(data) {
    const response = yield call(ApiGetUser);
    if(response.status == 200){
        yield put(ActionDisplayUserDetails(response.data));
    }
}
export function* getUserList(data){
    const response = yield call(ApiGetUserList, data);
    yield put(ActionDisplayUserList(response.data));
}


export const userSaga = [
    takeEvery(GET_USER, getUser),
    takeEvery(GET_USER_LIST, getUserList)
];
