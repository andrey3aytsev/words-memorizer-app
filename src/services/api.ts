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
}

export { ApiService };
