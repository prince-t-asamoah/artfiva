let accessToken, tokenExpiresIn;

const spotify = {
    getAccessToken() {
        if (accessToken) {
            return accessToken;
        } else {
            accessToken = window.location.href.match(/access_token=([^&]*)/);
            tokenExpiresIn = window.location.href.match(/expires_in=([^&]*)/);
        }
    }
}

export default spotify;