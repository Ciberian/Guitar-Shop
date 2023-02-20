import SiteHeader from '../../../components/page-components/site-header/site-header';
import SiteFooter from '../../../components/page-components/site-footer/site-footer';
import { useNavigate } from 'react-router-dom';
import { useEffect, FormEvent, ChangeEvent, useState } from 'react';
import { registerAction } from '../../../store/api-actions';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { getAuthorizationStatus } from '../../../store/user-process/selectors';
import {
  AppRoute,
  AuthorizationStatus,
  MIN_NAME_LENGTH,
  MAX_NAME_LENGTH,
  MIN_PASSWORD_LENGTH,
  MAX_PASSWORD_LENGTH,
} from '../../../constants';

function RegisterPage(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      navigate(AppRoute.Root);
    }
  }, [authorizationStatus, navigate]);

  const [formData, setFormData] = useState({name: '', email: '', password: ''});

  const formDataChangeHandler = ({ target }: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = target;
    const newFormData = { ...formData, [name]: value };
    setFormData(newFormData);
  };

  const loginFormSubmitHandler = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(registerAction(formData));
  };

  const [passwordView, setPasswordView] = useState(false);

  const changePasswordView = () => {
    const toggledPasswordView = !passwordView;
    setPasswordView(toggledPasswordView);
  };

  return (
    <div className="wrapper">
      <SiteHeader />
      <main className="page-content">
        <div className="container">
          <section className="login">
            <h1 className="login__title">Регистрация</h1>
            <form onSubmit={loginFormSubmitHandler} action="#" method="get">
              <div className="input-login">
                <label htmlFor="name">Введите имя</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  autoComplete="off"
                  minLength={MIN_NAME_LENGTH}
                  maxLength={MAX_NAME_LENGTH}
                  onChange={formDataChangeHandler}
                  required
                />
                <p className="input-login__error">{formData.name.trim().length === 0 ? 'Заполните поле' : ''}</p>
              </div>
              <div className="input-login">
                <label htmlFor="email">Введите e-mail</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="off"
                  onChange={formDataChangeHandler}
                  required
                />
                <p className="input-login__error">{formData.email.trim().length === 0 ? 'Заполните поле' : ''}</p>
              </div>
              <div className="input-login">
                <label htmlFor="password">Придумайте пароль</label>
                <span>
                  <input
                    type={ passwordView ? 'text' : 'password'}
                    placeholder="• • • • • • • • • • • •"
                    id="password"
                    name="password"
                    autoComplete="off"
                    minLength={MIN_PASSWORD_LENGTH}
                    maxLength={MAX_PASSWORD_LENGTH}
                    onChange={formDataChangeHandler}
                    required
                  />
                  <button
                    className="input-login__button-eye"
                    type="button"
                    onClick={changePasswordView}
                  >
                    <svg width="14" height="8" aria-hidden="true">
                      <use xlinkHref="#icon-eye"></use>
                    </svg>
                  </button>
                </span>
                <p className="input-login__error">{formData.password.trim().length === 0 ? 'Заполните поле' : ''}</p>
              </div>
              <button className="button login__button button--medium" type="submit">Зарегистрироваться</button>
            </form>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

export default RegisterPage;
