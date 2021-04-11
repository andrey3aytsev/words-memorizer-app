class ApiService {
  static basePath: string = 'http://localhost:3001';

  static getWords(): Promise<any> {
    return fetch(`${this.basePath}/words`);
  }
}

export { ApiService };
