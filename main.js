import './style.css'
import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';
import { codechefContests } from './codechef';
import { codeforcesContests } from './codeforces';
import { leetcodeContests } from './leetcode';
const app = document.querySelector('#app')
const contest_codechef = document.querySelector('.contest_codechef')
codechefContests(contest_codechef)
const contest_codeforces = document.querySelector('.contest_codeforces')
codeforcesContests(contest_codeforces)
const contest_leetcode = document.querySelector('.contest_leetcode')
leetcodeContests(contest_leetcode)



//scrollTimeline
const scrollTracker = document.querySelector('.scrollTracker')
const scrollTimeline = new ScrollTimeline({
    scrollOffsets: [
        new CSSUnitValue(0,'percent'),
        new CSSUnitValue(100,'percent'),
    ]
})
scrollTracker.animate(
    {
        transform: ['scaleX(0)', 'scaleX(1)']
    },
    {
        timeline: scrollTimeline
    }
)


