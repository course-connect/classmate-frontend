import { useEffect } from 'react';
import Cookie from 'js-cookie';
import { useSelector } from 'react-redux';

export default function CookieHandler() {
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    Cookie.set('accessToken', auth.accessToken);
    Cookie.set('isAuthenticated', auth.isAuthenticated);
  }, [auth]);
}
