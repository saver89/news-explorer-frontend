import './App.css';
import { Route, Switch } from 'react-router-dom';
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
import { useState } from 'react';

function App() {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  return (
    <div className="app">
      <Switch>
        <Route path="/saved-news">
          <Header onLogin={() => setShowSignIn(true)} />
          <SavedNewsHeader />
          <SavedNews></SavedNews>
        </Route>
        <Route exact path="/">
          <div className="header-image">
            <Header onLogin={() => setShowSignIn(true)} />
            <SearchForm></SearchForm>
          </div>
          <Main />
          <About />
        </Route>
      </Switch>
      <Footer />
      <SigninPopup
        isVisible={showSignIn}
        onClose={() => setShowSignIn(false)}
        onBottomClick={() => {
          setShowSignIn(false);
          setShowSignUp(true);
        }}
        onSubmit={(evt)=>{
          evt.preventDefault();
          setShowSignIn(false)
        }}
      />
      <SignupPopup
        isVisible={showSignUp}
        onClose={() => setShowSignUp(false)}
        onBottomClick={() => {
          setShowSignIn(true);
          setShowSignUp(false);
        }}
        onSubmit={(evt)=>{
          evt.preventDefault();
          setShowSignUp(false);
          setShowNotification(true);
        }}
      />
      <NotificationPopup
        title="Пользователь успешно зарегистрирован!"
        isVisible={showNotification}
        onClose={() => setShowNotification(false)}
        onSubmit={(evt)=>{
          evt.preventDefault();
          setShowNotification(false);
        }}
      />
    </div>
  );
}

export default App;
