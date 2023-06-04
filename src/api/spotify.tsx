import axios from "axios";
import { CLIENT_ID, CLIENT_SECRET } from "../config/config";

class SpotifyClient {
  async getAccessToken(): Promise<string> {
    const response = await axios.post(
      "https://accounts.spotify.com/api/token",
      `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    return await response.data.access_token;
  }

  async getPositiveMusic(accessToken: Promise<string>): Promise<any> {
    const token = await accessToken;
    const response = await axios.get(
      "https://api.spotify.com/v1/recommendations",
      {
        params: {
          seed_genres: "happy,funk,kpop,happy,pop",
          market: "KR",
          popularity: 50,
          limit: 2,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data.tracks;
  }

  async getNegativeMusic(accessToken: Promise<string>): Promise<any> {
    const token = await accessToken;
    const response = await axios.get(
      "https://api.spotify.com/v1/recommendations",
      {
        params: {
          seed_genres: "acoustic,sad,jazz,classical,holidays",
          market: "KR",
          popularity: 50,
          limit: 2,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data.tracks;
  }
}

const spotifyClient = new SpotifyClient();
const accessToken = spotifyClient.getAccessToken();

let positiveList: any[], negativeList: any[];

spotifyClient.getPositiveMusic(accessToken).then((data) => {
  positiveList = data;
});
spotifyClient.getNegativeMusic(accessToken).then((data) => {
  negativeList = data;
});

export { positiveList, negativeList };
