// let accessToken, tokenExpiresIn;
// const CLIENT_ID = '5a3f2e12dce84254b9e74f21ed388014';
// const REDIRECT_URI = 'http://localhost:3000/';

const Spotify = {
    accessToken: null,
    tokenExpiresIn: null,
    CLIENT_ID: '5a3f2e12dce84254b9e74f21ed388014',
    REDIRECT_URI: 'http://localhost:3000/',
    getAccessToken() {
        if (this.accessToken) {
            return this.accessToken;
        } else {
            //Gets access token and its expiration time from URL
            let accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
            let tokenExpiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

            if (accessTokenMatch && tokenExpiresInMatch) {
                this.accessToken = accessTokenMatch[1];
                this.tokenExpiresIn = Number(tokenExpiresInMatch[1]);
                //Clears accessToken and get new one when it expires
                window.setTimeout(() => this.accessToken = '', this.tokenExpiresIn * 1000);
                window.history.pushState('Access Token', null, '/');
                return this.accessToken;
            } else {
                window.location.href = `https://accounts.spotify.com/authorize?client_id=${this.CLIENT_ID}&response_type=token&scope=playlist-modify-public&redirect_uri=${this.REDIRECT_URI}`;
            }
        }
    },
    searchTrack(TERM) {
        const accessToken = this.getAccessToken();
        return fetch(`https://api.spotify.com/v1/search?type=track&q=${TERM}`, {
             headers: {
                Authorization: `Bearer ${accessToken}`
            }
        }).then(response => {
            return response.json();
        }).then(responseObj => {
            if (!responseObj.tracks) {
                return [];
            } else {
                return responseObj.tracks.items.map(track => ({
                    id: track.id,
                    name: track.name,
                    artist: track.artists[0].name,
                    album: track.album.name,
                    uri: track.uri
                }));
            }
        }).catch (error => console.log(error));
    },
    savePlayList(name, trackUris) {
        if (!name || !trackUris) return;
        const accessToken = this.getAccessToken();
        const headers = { Authorization: `Bearer ${accessToken}`};
        let userId;
        return fetch(`https://api.spotify.com/v1/me`, { headers: headers})
        .then(response => response.json())
        .then(responseObj => {
            userId = responseObj.id;
            return fetch(`https:/api.spotify.com/v1/users/${userId}/playlists`, {
                headers: headers,
                method: 'POST',
                body: JSON.stringify({name: name})
            }).then(response => response.json())
            .then(responseObj => {
                const playlistId = responseObj.id;
                return fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`, {
                    headers: headers,
                    method: 'POST',
                    body: JSON.stringify({uris: trackUris})
                })
            })
        })
    }
}

export default Spotify;