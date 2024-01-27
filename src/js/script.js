'use strict'

// PART 1
const createCandidate = function (name, skills) {
  return {
    name,
    skills
  }
}

console.log(createCandidate('Сашко', ['JavaScript', 'HTML', 'CSS', 'GIT']))

// PART 2

const requirementsList = ['JavaScript', 'HTML', 'CSS', 'GIT']

const addNewRequirement = function (requirement) {
  requirementsList.push(requirement)
  return requirementsList
}

console.log(addNewRequirement('React'))

// PART 3

const candidate = {
  name: 'Крістіна',
  skills: ['JavaScript', 'HTML', 'CSS', 'GIT']
}

const conductInterview = function (candidate, requirementsList) {
  if (!candidate || !candidate.skills || !Array.isArray(candidate.skills)) {
    return false
  }
  for (const requirement of requirementsList) {
    if (!candidate.skills.includes(requirement)) {
      return false
    }
  }
  return true
}

console.log(conductInterview(candidate, requirementsList))

// PART 4

const candidatesList = [
  { name: 'Крістіна', skills: ['JavaScript', 'HTML', 'CSS', 'GIT'] },
  { name: 'Дмитро', skills: ['JavaScript', 'HTML', 'CSS'] },
  { name: 'Сашко', skills: ['JavaScript', 'HTML', 'CSS', 'GIT', 'React'] }
]

const evaluateCandidate = function (candidate, evaluationFunction) {
  return evaluationFunction(candidate)
}

const planInterviews = function (candidatesList, requirementsList, evaluationFunction) {
  const evaluatedCandidates = candidatesList.map(candidate => ({
    candidate,
    score: evaluateCandidate(candidate, evaluationFunction)
  }))

  const sortedCandidates = evaluatedCandidates.sort((a, b) => b.score - a.score)

  return sortedCandidates.map(evaluatedCandidate => evaluatedCandidate.candidate)
}

const evaluationFunction = function (candidate) {
  const matchingRequirements = requirementsList.filter(requirement =>
    candidate.skills.includes(requirement)
  )

  return (matchingRequirements.length / requirementsList.length) * 100
}

const sortedCandidates = planInterviews(candidatesList, requirementsList, evaluationFunction)

console.log(sortedCandidates)
