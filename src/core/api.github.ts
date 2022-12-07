import { Octokit } from '@octokit/rest';

export const githubApi = new Octokit({
  baseUrl: 'https://api.github.com',
});
