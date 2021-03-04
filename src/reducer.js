   
    export const initialState = {
        user: null,
        playlists: [],
        playing: false,
        item: null,
        token: null

    };

    const reducer = (state, action) => {

        console.log("action: ", action);

        switch(action.type) {

            

            case 'SET_TOKEN':
                return(
                    {
                        ...state,
                        token: action.token
                    }
                );

            case 'SET_USER':
            return(
                {
                    ...state,
                    user: action.user
                }
            );

            default:
                return(
                    state
                )
        };

    }

    export default reducer