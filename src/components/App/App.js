import './App.css';
import { Route, Switch, useHistory } from 'react-router-dom';
import SavedNews from '../SavedNews/SavedNews';
import Header from '../Header/Header';
import Main from '../Main/Main';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import About from '../About/About';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import SigninPopup from '../SigninPopup/SigninPopup';
import SignupPopup from '../SignupPopup/SignupPopup';
import NotificationPopup from '../NotificationPopup/NotificationPopup';
import * as NewsApi from '../../utils/NewsApi';
import { useEffect, useState } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import * as MainApi from '../../utils/MainApi';
import { useFormWithValidation } from '../UseForm/UseForm';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

function App() {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationText, setNotificationText] = useState('');
  const [showNotificationSubmit, setShowNotificationSubmit] = useState(true);
  const [showCards, setShowCards] = useState(false);
  const [newsCards, setNewsCards] = useState([]);
  const [showLoader, setShowLoader] = useState(false);
  const [showIcon, setShowIcon] = useState(false);
  const [loaderText, setLoaderText] = useState('');
  const [currentUser, setCurrentUser] = useState({
    _id: '',
    name: '',
    email: '',
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [savedCards, setSavedCards] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const signInForm = useFormWithValidation();
  const signUpForm = useFormWithValidation();
  const history = useHistory();

  useEffect(() => {
    if (
      localStorage.getItem('articles') &&
      localStorage.getItem('searchValue')
    ) {
      setNewsCards(JSON.parse(localStorage.getItem('articles')));
      setSearchValue(localStorage.getItem('searchValue'));
      setShowCards(true);
    }
  }, []);

  useEffect(() => {
    MainApi.checkToken()
      .then((res) => {
        if (res.data) {
          setIsLoggedIn(true);
          setCurrentUser(res.data);
        }
      })
      .catch((err) => console.log(err));
  }, [isLoggedIn]);

  useEffect(() => {
    if (isLoggedIn) {
      MainApi.getArticles()
        .then((res) => {
          if (res.data) {
            setSavedCards(res.data);
          }
        })
        .catch((err) => showError(err.message || err));
    } else {
      setSavedCards([]);
    }
  }, [isLoggedIn]);

  function showError(errorMessage) {
    setShowNotification(true);
    setShowNotificationSubmit(false);
    setNotificationText(errorMessage);
  }

  async function handleSearch(searchValue) {
    try {
      setShowLoader(true);
      setShowIcon(true);
      setShowCards(false);
      setLoaderText('Идет поиск новостей...');
      const res = await NewsApi.getNews(searchValue);

      setShowCards(true);
      setShowLoader(false);
      localStorage.setItem('articles', JSON.stringify(res.articles));
      localStorage.setItem('searchValue', searchValue);

      setNewsCards(res.articles);
    } catch (err) {
      setNewsCards([]);
      setShowCards(false);
      setShowLoader(true);
      setShowIcon(false);

      setLoaderText(
        'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен.' +
          'Подождите немного и попробуйте ещё раз'
      );
    }
  }

  async function handleSignUp(evt) {
    evt.preventDefault();

    try {
      const res = await MainApi.signUp(signUpForm.values);

      if (res.data) {
        setShowSignUp(false);
        setShowNotification(true);
        setShowNotificationSubmit(true);
        setNotificationText('Пользователь успешно зарегистрирован!');
      }
    } catch (err) {
      setShowSignUp(false);
      showError(err.message || err);
    }
  }

  async function handleSignIn(evt) {
    evt.preventDefault();

    try {
      await MainApi.signIn(signInForm.values);

      setShowSignIn(false);
      setIsLoggedIn(true);
    } catch (err) {
      setShowSignIn(false);
      showError(err.message || err);
    }
  }

  async function handleSignOut() {
    try {
      await MainApi.signOut();
      history.push('/');
      setIsLoggedIn(false);
    } catch (err) {
      showError(err.message || err);
    }
  }

  async function cardSaveHandler(article) {
    try {
      const res = await MainApi.saveArticle(article);

      if (res.data) {
        setSavedCards([...savedCards, res.data]);
      }
    } catch (err) {
      showError(err.message || err);
    }
  }

  async function cardDeleteHandler(articleId) {
    try {
      const res = await MainApi.deleteArticle(articleId);

      if (res.data) {
        setSavedCards(savedCards.filter((card) => card._id !== articleId));
      }
    } catch (err) {
      showError(err.message || err);
    }
  }

  function showSignInPopup() {
    signInForm.resetForm();
    setShowSignIn(true);
    setShowSignUp(false);
    setShowNotification(false);
  }

  function showSignUpPopup() {
    signUpForm.resetForm();
    setShowSignIn(false);
    setShowSignUp(true);
    setShowNotification(false);
  }

  function handleOnClose() {
    setShowSignIn(false);
    setShowSignUp(false);
    setShowNotification(false);
  }

  function handleNotificationSubmit(evt) {
    evt.preventDefault();
    showSignUpPopup();
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Switch>
          <ProtectedRoute
            loggedIn={isLoggedIn}
            showSignInPopup={showSignInPopup}
            path="/saved-news"
          >
            <Header
              onLogin={showSignInPopup}
              isLoggedIn={isLoggedIn}
              onLogout={handleSignOut}
            />
            <SavedNewsHeader savedCards={savedCards} />
            <SavedNews
              savedCards={savedCards}
              cardSaveHandler={cardSaveHandler}
              cardDeleteHandler={cardDeleteHandler}
            />
          </ProtectedRoute>
          <Route exact path="/">
            <div className="header-image">
              <Header
                onLogin={showSignInPopup}
                isLoggedIn={isLoggedIn}
                onLogout={handleSignOut}
              />
              <SearchForm
                onSubmit={handleSearch}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
              />
            </div>
            <Main
              showLoader={showLoader}
              showIcon={showIcon}
              loaderText={loaderText}
              showCards={showCards}
              newsCards={newsCards}
              savedCards={savedCards}
              cardSaveHandler={cardSaveHandler}
              cardDeleteHandler={cardDeleteHandler}
              keyword={searchValue}
              showSignInPopup={showSignInPopup}
            />
            <About />
          </Route>
        </Switch>
        <Footer />
        <SigninPopup
          isVisible={showSignIn}
          onClose={handleOnClose}
          onBottomClick={showSignUpPopup}
          onSubmit={handleSignIn}
          validateObject={signInForm}
        />
        <SignupPopup
          isVisible={showSignUp}
          onClose={handleOnClose}
          onBottomClick={showSignInPopup}
          onSubmit={handleSignUp}
          validateObject={signUpForm}
        />
        <NotificationPopup
          title={notificationText}
          isVisible={showNotification}
          onClose={handleOnClose}
          onSubmit={handleNotificationSubmit}
          showSubmit={showNotificationSubmit}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
