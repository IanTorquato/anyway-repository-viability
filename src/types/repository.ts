import { RestEndpointMethodTypes } from '@octokit/rest';

export type RepositoryType = RestEndpointMethodTypes['repos']['get']['response']['data'];
