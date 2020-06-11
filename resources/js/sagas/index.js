
import { all } from "redux-saga/effects";
import {userSaga} from "../Module/Users/Sagas/userSaga";

export default function* rootSaga() {
    yield all([
        ...userSaga
    ])
}
