const redirectUri = 'http://localhost:3000/';

const clientId = 'd9b6b47052784047bba768f69404c6d1';

const scopes = [
	'user-read-currently-playing',
	'user-read-recently-played',
	'user-read-playback-state',
	'user-top-read',
	'user-modify-playback-state'
];

const authEndpoint = 'https://accounts.spotify.com/authorize';

export const getTokenFromUrl = () => {
	// function to extract the token from the redirect Url
	return window.location.hash
		.substring(1)
		.split('&')
		.reduce((initial, item) => {
			// http://localhost:3000/#access_token=BQCUyEDCI25qiyvvHqvBRbJVbZZqFaqco3H0hhtFBgZxrGSJAnxruqVBr-g9Evl4iTGiFpgAqozymCq_7WScbiYvocWo_tjIxtvjsWm50BjqLrzKzLpe57saEyyuOQTxvMii9Fu03oCxO79TBHX0TeZBZ7MI9LrP6Q&token_type=Bearer&expires_in=3600

			let parts = item.split('=');

			initial[parts[0]] = decodeURIComponent(parts[1]);

			console.log('get token from url');

			return initial;
		}, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
	'%20'
)}&response_type=token&show_dialog=true`;
