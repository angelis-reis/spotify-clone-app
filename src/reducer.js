export const initialState = {
	user: null,
	playlists: [],
	playing: false,
	item: null,
	token: null
	// token: "BQA9ot_sowUT3Wx7BpI77fMpvTwEa23MIVOGjb8JAAQd334U-U8hm-cbFjWh84lrY-utCRYZHzPKxG_ObWlnGNGyvWsMqslgJ0S4-A_NsviYaO-0xLMJ1uFaF6dEMtiQJKMzbGYhCV3nSja62vBM-4INMCpgrd_d1Q"
};

const reducer = (state, action) => {
	// console.log("action: ", action);

	switch (action.type) {
		case 'SET_TOKEN':
			return {
				...state,
				token: action.token
			};

		case 'SET_USER':
			return {
				...state,
				user: action.user
			};

		case 'SET_PLAYLISTS':
			return {
				...state,
				playlists: action.playlists
			};

		default:
			return state;
	}
};

export default reducer;
