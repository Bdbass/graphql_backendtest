const { RESTDataSource } = require('apollo-datasource-rest');

class GithubApi extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://api.github.com/'
    }

    async getUser(name) {
        try {
            const response = await this.get(`users/${name}`);
            return response;
        } catch (e) {
            console.log(e);
        }


    }
}

module.exports = GithubApi;