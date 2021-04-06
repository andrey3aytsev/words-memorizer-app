class ApiService {
  static basePath: string = 'http://localhost:3001/api';

  static getWords(): any {
    //return fetch(`${this.basePath}/words`);
    return Promise.resolve([{
      "id": "8d057b16-90d6-11eb-b12e-68b34a57d72f",
      "origin": "book",
      "translation": "книга1"
    }]);
  }
}

export { ApiService };
