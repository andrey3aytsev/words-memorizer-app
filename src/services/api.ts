class ApiService {
  static basePath = 'http://localhost:3001';

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
