export function leetcodeContests(element) {
    // codechef url
    const LEETCODE_URL = 'https://leetcode.com/graphql?query={%20allContests%20{%20title%20titleSlug%20startTime%20duration%20__typename%20}%20}'
    async function fetchLeetcodeContests(){
        const response = await fetch(LEETCODE_URL);
        return response.json();
    }
    // data>allContests>title,titleSlug,startTime,duration,__typename
    const leetcode_contests = Promise.resolve(fetchLeetcodeContests());
    leetcode_contests.then((val)=>{
        var rows = `
                    <tr>
                        <th>NAME</th><th>START</th><th>DURATION</th>
                    </tr>
                    `
        var data = val.data.allContests
        let length = data.length
        for(let i = 0; i < length; i++){
            var obj = new Date(data[i].startTime*1000);
            console.log(obj);
            if(obj>Date.now()){
                var row = `
                    <tr>
                            <td>${data[i].title}</td>
                            <td>${formatTS(obj)}</td>
                            <td>${data[i].duration/60} mins</td>
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
  