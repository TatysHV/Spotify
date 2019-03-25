import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private url = 'https://accounts.spotify.com';
  private redirectUrl = 'http://localhost:4200/callback';
  private scopes = 'user-read-private user-read-email playlist-modify-public \
  user-modify-playback-state user-read-currently-playing user-read-playback-state';
  private clientId: string;
  private clientSecret: string;

  constructor(private http: HttpClient) { }

  getAuthorization(clientId, clientSecret) {
    this.setClientId(clientId);
    this.setClientSecret(clientSecret);
    location.href = `${this.url}/authorize?client_id=${clientId}&response_type=code&redirect_uri=
    ${encodeURIComponent(this.redirectUrl)}&scope=${encodeURIComponent(this.scopes)}`;
  }

  setClientId(clientId) {
    this.clientId = clientId;
    localStorage.setItem('clientId', clientId);
  }

  getClientId() {
    return localStorage.getItem('clientId');
  }

  setClientSecret(clientSecret) {
    this.clientSecret = clientSecret;
    localStorage.setItem('clientSecret', clientSecret);
  }

  getClientSecret() {
    return localStorage.getItem('clientSecret');
  }

  getCredentials(code) {
    const data = {
      clientId: this.getClientId(),
      clientSecret: this.getClientSecret(),
      code,
      urlRedirect: this.redirectUrl
    };
    return this.http.post(`${API_URL}/token`, data);
  }
}
