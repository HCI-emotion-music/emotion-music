import axios from "axios";
import { CLIENT_ID, CLIENT_SECRET } from "../config/config";

class SpotifyClient {
    
    accessToken: Promise<string>;
    
    constructor() {
        this.accessToken = this.getAccessToken();
        const positiveMusicInfo = this.getPositiveMusic();
        const negativeMusicInfo = this.getNegativeMusic();

        console.log(this.accessToken);
        console.log(positiveMusicInfo);
        console.log(negativeMusicInfo);

    }

    async getAccessToken() : Promise<string> {
        
        const response = await axios.post('https://accounts.spotify.com/api/token', `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });

        console.log(response.data.access_token);
        
        return response.data.access_token;
    }

    async getPositiveMusic() : Promise<any> {

        // const response = await axios.get(
        //     'https://api.spotify.com/v1/search', {
        //     params: {
                
        //     },
        //     headers: {
        //         Authorization: `Bearer ${this.accessToken}`,
        //     }
        // });
        // return response;

        return '';
    }

    async getNegativeMusic() : Promise<any> {
        // const response = await axios.get('', {
        //     params: {
                
        //     },
        //     headers: {
        //         Authorization: `Bearer ${this.accessToken}`,
        //     }
        // });
        // return response;

        return '';
    }
}

const spotifyClient = new SpotifyClient();

export default spotifyClient;