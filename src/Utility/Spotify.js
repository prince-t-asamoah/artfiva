let accessToken, tokenExpiresIn;
const CLIENT_ID = '5a3f2e12dce84254b9e74f21ed388014';
const REDIRECT_URI = 'http://localhost:3000/';

const spotify = {
    getAccessToken() {
        if (accessToken) {
            return accessToken;
        } else {
            //Gets access token and its expiration time from URL
            accessToken = window.location.href.match(/access_token=([^&]*)/);
            tokenExpiresIn = window.location.href.match(/expires_in=([^&]*)/);
            if (accessToken && tokenExpiresIn) {
                window.setTimeout(() => accessToken = '', tokenExpiresIn * 1000);
                window.history.pushState('Access Token', null, '/');
                window.history = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&scope=playlist-modify-public&redirect_uri=${REDIRECT_URI}`;
            }
        }
    }
}

export default spotify;