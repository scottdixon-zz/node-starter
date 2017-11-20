const axios = require('axios')

const github = axios.create({
  baseURL: 'https://api.github.com'
})

function reposBy(username) {
  return github.get(`/users/${username}/repos`)
}

function repo(username, repoName) {
  return github.get(`/repos/${username}/${repoName}`)
}

function getReadMe(username, repoName) {
  return github.get(`/repos/${username}/${repoName}/readme`)
}

function issues(username, repoName) {
  return github.get(`/repos/${username}/${repoName}/issues`)
}

module.exports = { reposBy, repo, getReadMe, issues }
