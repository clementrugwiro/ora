import * as Auth from "./features/auth.feature";

import * as user from "./features/user.feature";

const reducers = {
  register: Auth.default.registerReducer,
  login: Auth.default.loginReducer,
};

export default reducers;
