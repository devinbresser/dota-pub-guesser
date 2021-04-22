index = 0;

function setup(){
    fetch(`http://localhost:3000/getMatchData/${index}`)
        .then(res => res.json())
        .then(matchData => {
            console.log("https://opendota.com/matches/"+matchData.match_id)
        })
        /*
        radiantLineup.onanimationend = () =>{
            radiantLineup.classList.remove("radiant-donezo-box");
            direLineup.classList.remove("dire-donezo-box");
            infoBarTop.classList.remove("fading-out");
            infoBarBottom.classList.remove("fading-out");
            checkbox.classList.remove("fade-in");
            checkbox.style.visibility="hidden";
        }
        */
}

setup();