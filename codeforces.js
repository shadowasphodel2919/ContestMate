export function codeforcesContests(element) {
    // codechef url
    const CODEFORCES_URL = 'https://codeforces.com/api/contest.list'
    async function fetchCodeforcesContests(){
        const response = await fetch(CODEFORCES_URL);
        return response.json();
    }
    // durationSeconds, frozen, id, name, phase, relativeTimeSeconds, startTimeSeconds, type
    const codeforces_contests = Promise.resolve(fetchCodeforcesContests());
    codeforces_contests.then((val)=>{
        var rows = `
                    <tr>
                        <th>CODE</th><th>NAME</th><th>START</th><th>DURATION</th>
                    </tr>
                    `
        let length = val.result.length
        for(let i = 0; i < length; i++){
            if(val.result[i].phase=="BEFORE"){
                var obj = new Date(val.result[i].startTimeSeconds*1000);
                console.log(obj);
                var row = `
                <tr>
                        <td>${val.result[i].id}</td>
                        <td>${val.result[i].name}</td>
                        <td>${formatTS(obj)}</td>
                        <td>${new Date(val.result[i].durationSeconds*1000)}</td>
                </tr>
                `
                rows = rows+row
            }
        }
        element.innerHTML = "<table>"+rows+"</table>"
    })
  }

function formatTS(timestamp){
   return timestamp.toLocaleDateString()+" "+timestamp.toLocaleTimeString()
}
  