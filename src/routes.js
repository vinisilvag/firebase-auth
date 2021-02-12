import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Container, Spinner } from './styles/LoadingStyles';

import { useAuth } from './contexts/AuthContext';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Chat from './pages/Chat';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) =>
        currentUser ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )
      }
    />
  );
};

const AuthRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) =>
        currentUser ? (
          <Redirect
            to={{ pathname: '/app', state: { from: props.location } }}
          />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

const Routes = () => {
  const { loading } = useAuth();

  if (loading) {
    return (
      <Container>
        <Spinner />
      </Container>
    );
  }

  return (
    <BrowserRouter>
      <Switch>
        <AuthRoute path="/" component={SignIn} exact />
        <AuthRoute path="/signup" component={SignUp} />
        <AuthRoute path="/chat" component={Chat} />
        <ProtectedRoute path="/app" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
