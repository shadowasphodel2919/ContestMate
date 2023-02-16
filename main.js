import './style.css'
import { codechefContests } from './codechef';
import { codeforcesContests } from './codeforces';
const app = document.querySelector('#app')
const contest_codechef = document.querySelector('.contest_codechef')
codechefContests(contest_codechef)
const contest_codeforces = document.querySelector('.contest_codeforces')
codeforcesContests(contest_codeforces)

