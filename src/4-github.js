const github = require('./api/github')

// Get all repos of someone
github.reposBy('facebook')
  .then(res => {
    const repos = res.data
    console.log(`Found ${repos.length} repos:`)
    repos.forEach(repo => {
      console.log(`${repo.name}`)
    })
  })

github.reposBy('Microsoft')
  .then(res => {
    const repos = res.data
    console.log(`Found ${repos.length} repos:`)
    repos.forEach(repo => {
      console.log(`${repo.name}`)
    })
  })

/*

Challenges:
1. Add usage of the `github.reposBy` to find all repos belonging to 'Microsoft'
2. Add function to load the info for a particular repo. Add examples to load for repos 'facebook/react' and 'Microsoft/vscode'
3. Add function to retrieve the contents of the readme file for a particular repo [https://developer.github.com/v3/repos/contents/#get-the-readme]. Hint: see **4-github.rest** file. Add examples to load for repos 'facebook/react' and 'Microsoft/vscode'
3. Add function to `src/api/github` to list all the issues for a particular repo [https://developer.github.com/v3/issues/#list-issues]. Add examples to load and display key info for repos 'facebook/react' and 'Microsoft/vscode'

*/

// Get specific repo by owner and name
github.getRepo('Microsoft','vscode')
  .then(res => {
    const repo = res.data
    console.log('Extracting data...')
    console.log(`Repo owner: ${repo.owner.login}`)
    console.log(`Name: ${repo.name}`)
    console.log(`Description: ${repo.description}`)
    console.log('-------------------')
  })

github.getRepo('Facebook','react')
  .then(res => {
    const repo = res.data
    console.log('Extracting data...')
    console.log(`Repo owner: ${repo.owner.login}`)
    console.log(`Name: ${repo.name}`)
    console.log(`Description: ${repo.description}`)
    console.log('-------------------')
  })

// Retrieve contents of README.md from someone's specific repo
  github.getReadMe('Facebook','react')
    .then(res => {
      console.log(res.data)
    })

  github.getIssues('Facebook','react')
    .then(res => {
      const issues = res.data
      console.log(issues)
    })
