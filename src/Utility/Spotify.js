let accessToken;

const spotify = {
    getAccessToken() {
        if (accessToken) return accessToken;
    }
}

export default spotify;