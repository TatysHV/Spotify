
module.exports = (app) => {
    const services = app.services;

    return {

        index: async () => {
            return await services.spotifyApi.getProfile();
        },
        
        listening: async () => {
            return await services.spotifyApi.getProfileCurrentSong();
        },

        play: async () => {
            return await services.spotifyApi.playSong();
        },

        pause: async () => {
            return await services.spotifyApi.pauseSong();
        },

        nextTrack: async () => {
            return await services.spotifyApi.nextTrack();
        },

        previousTrack: async () => {
            return await services.spotifyApi.previousTrack();
        },

        playlists: async () => {
            return await services.spotifyApi.profilePlaylists();
        },

        playlistTracks: async (playlistId) => {
            return await services.spotifyApi.playlistTracks(playlistId);
        },

        playlistInfo: async (playlistId) => {
            return await services.spotifyApi.getPlaylistInfo(playlistId);
        },
        
        addPlaylist: async (name) => {
            return await services.spotifyApi.addPlaylist(name);
        },

        token: async(clientId, clientSecret, code, urlRedirect) => {
            return await services.spotifyApi.getToken(clientId, clientSecret, code, urlRedirect);
        }

    };
};
