import axios from "axios";
import { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI } from "../config/config";

interface SpotifyResponse {

}

class SpotifyClient {

    constructor() {
        this.getAccessToken();
    }

    async getAccessToken() : Promise<void> {

        const response = await axios.post('https://accounts.spotify.com/api/token', `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });
        console.log(response.data.access_token);
        // window.localStorage.setItem('token', response.data.access_token);
    }

    async getPositiveMusic() : Promise<SpotifyResponse> {
        const response = await axios.get(
            'https://api.spotify.com/v1/search', {
            params: {
                
            },
            headers: {
                Authorization: `Bearer ${window.localStorage.getItem('token')}`,
            }
        });
        return response;
    }

    async getNegativeMusic() : Promise<SpotifyResponse> {
        const response = await axios.get('', {
            params: {
                
            },
            headers: {
                Authorization: `Bearer ${window.localStorage.getItem('token')}`,
            }
        });
        return response;
    }
}

export default SpotifyClient;