import {all,call} from "redux-saga/effects"
import { CategoriesSaga } from "./category/category.saga"
import { UserSaga } from "./user/user.saga"

export function* rootSaga(){
    yield all([call(CategoriesSaga),call(UserSaga)])
}