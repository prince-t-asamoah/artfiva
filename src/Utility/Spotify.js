let accessToken, tokenExpiresIn;

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
            }
        }
    }
}

export default spotify;