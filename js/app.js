class App extends React.Component {

  componentWillMount() {
    this.generateAuthInstance();
    console.log(this.lock);
  }

  generateAuthInstance() {
  this.lock = new Auth0({
    domain: 'conciergeauctions.auth0.com',
    clientID: 'ntt3BvkTCUch2Eo3WZNsL9gINvREKHUq'
  })
  }

  googleSignin() {
    this.lock.login({
      connection: 'google-oauth2',
      popup: true,
      scope: 'openid'
    }, function(err, profile, userToken, accessToken, state, refreshToken) {
      console.log({err, profile, userToken, accessToken, state, refreshToken})
    });
  }


  render() {
    return (
      <button onClick={this.googleSignin.bind(this)}> Sign in With Google </button>
    )

  }
}



ReactDOM.render(<App/>, document.getElementById('root'));
