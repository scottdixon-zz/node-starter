const axios = require('axios')

const github = axios.create({
  baseURL: 'https://api.github.com'
})

function reposBy(username) {
  return github.get(`/users/${username}/repos`)
}

function getRepo(username,repo) {
  return github.get(`/repos/${username}/${repo}`)
}

function getReadMe(username, repoName) {
  return github.get(`/repos/${username}/${repoName}/readme`, {
    headers: {
      Accept: 'application/vnd.github.VERSION.raw'
    }
  });
};

function getIssues(username, repoName) {
  return github.get(`/repos/${username}/${repoName}/issues`, {
    headers: {
      Accept: 'application/vnd.github.VERSION.raw'
    }
  });
};


module.exports = { reposBy, getRepo, getReadMe, getIssues }
