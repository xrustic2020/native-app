import React, {useContext} from 'react';

import authContext from '../../context/AuthContext';
import AuthStack from '../../screens/AuthStack/AuthStack';
import TabStack from '../../screens/TabStack/TabStack';

const AuthCheck = () => {
  const {isAuthorization} = useContext(authContext);
  return <>{isAuthorization ? <TabStack /> : <AuthStack />}</>;
};

export default AuthCheck;
