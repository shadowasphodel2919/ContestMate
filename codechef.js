export function codechefContests(element) {
    // codechef url
    const CODECHEF_URL = 'https://www.codechef.com/api/list/contests/all'
    async function fetchCodechefContests(){
    const response = await fetch(CODECHEF_URL);
    return response.json();
    }
    const codechef_contests = Promise.resolve(fetchCodechefContests());
    codechef_contests.then((val)=>{
    var rows = `
    <tr>
        <th>CODE</th><th>NAME</th><th>START</th><th>END</th><th>DURATION</th>
    </tr>
    `
    var present_contests = val["future_contests"]
    for(let i = 0; i < present_contests.length; i++){
        var row = `
        <tr>
                <td>${present_contests[i]["contest_code"]}</td>
                <td>${present_contests[i]["contest_name"]}</td>
                <td>${present_contests[i]["contest_start_date"]}</td>
                <td>${present_contests[i]["contest_end_date"]}</td>
                <td>${present_contests[i]["contest_duration"]}</td>
        </tr>
        `
        rows = rows+row
    }
    element.innerHTML = "<table>"+rows+"</table>"
    })
  }
  