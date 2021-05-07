class ApiService {
  static basePath = process.env.REACT_APP_API_URL;

  static getWords(): Promise<Response> {
    return fetch(`${this.basePath}/words`);
  }

  static deleteWord(id: string): Promise<Response> {
    return fetch(`${this.basePath}/words/${id}`, {
      method: 'DELETE',
    });
  }

  static createWord(params: {origin: string, translation: string}): Promise<Response> {
    return fetch(`${this.basePath}/words`, {
      method: 'POST',
      body: JSON.stringify(params),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}

export { ApiService };
