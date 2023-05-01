export function codechefContests(element) {
    // codechef url
    const CODECHEF_URL = 'http://localhost:3600/codechef'
    async function fetchCodechefContests(){
    const response = await fetch(CODECHEF_URL);
    // var data = await response.json();
    // console.log(data);
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
                <td>${formatTS(present_contests[i]["contest_start_date"])}</td>
                <td>${present_contests[i]["contest_end_date"]}</td>
                <td>${present_contests[i]["contest_duration"]} mins</td>
        </tr>
        `
        rows = rows+row
    }
    element.innerHTML = "<table>"+rows+"</table>"
    })
  }

  function formatTS(timestamp){
    return timestamp
}
  