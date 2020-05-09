import axios from 'axios';

class ApiClientFactory {

  restApiClient

  token

  constructor() {
    this.restApiClient = this.createRestClientInstance();
  }

  // eslint-disable-next-line class-methods-use-this
  createRestClientInstance() {
    const client = axios.create({
      baseURL: "http://www.fulek.com/nks/api/aw",
      timeout: 15000,
    });
    this.setupIntereptors(client);
    return client;
  }
  setupIntereptors(client) {
    const restClient = client || this.restApiClient;
    restClient.interceptors.request.use(async config => {
      if (!this.token) {
       return config;
      }
      // eslint-disable-next-line no-param-reassign
      config.headers.Authorization = `Bearer ${this.token}`;
      return config;
    },
    error => Promise.reject(error));
  }

  setTokens(token) {
    this.token = token;
    this.setupIntereptors(undefined);
  }
  getRestApiClient() {
      if(this.restApiClient) {
          return this.restApiClient
      }
    this.restApiClient = this.createRestClientInstance();
    return this.restApiClient;
  }

  getToknes(){
    return this.token;
  }
}

export const apiClientFactory = new ApiClientFactory();