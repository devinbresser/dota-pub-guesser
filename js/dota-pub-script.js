// initialization
const apiKey = "5BA88786D92A82430B13AB8DF11AABC5";
var heroList = { // a slightly smaller json file containing hero data
    "result":{
    "heroes":[
    {
    "name":"npc_dota_hero_antimage",
    "id":1
    },
    {
    "name":"npc_dota_hero_axe",
    "id":2
    },
    {
    "name":"npc_dota_hero_bane",
    "id":3
    },
    {
    "name":"npc_dota_hero_bloodseeker",
    "id":4
    },
    {
    "name":"npc_dota_hero_crystal_maiden",
    "id":5
    },
    {
    "name":"npc_dota_hero_drow_ranger",
    "id":6
    },
    {
    "name":"npc_dota_hero_earthshaker",
    "id":7
    },
    {
    "name":"npc_dota_hero_juggernaut",
    "id":8
    },
    {
    "name":"npc_dota_hero_mirana",
    "id":9
    },
    {
    "name":"npc_dota_hero_nevermore",
    "id":11
    },
    {
    "name":"npc_dota_hero_morphling",
    "id":10
    },
    {
    "name":"npc_dota_hero_phantom_lancer",
    "id":12
    },
    {
    "name":"npc_dota_hero_puck",
    "id":13
    },
    {
    "name":"npc_dota_hero_pudge",
    "id":14
    },
    {
    "name":"npc_dota_hero_razor",
    "id":15
    },
    {
    "name":"npc_dota_hero_sand_king",
    "id":16
    },
    {
    "name":"npc_dota_hero_storm_spirit",
    "id":17
    },
    {
    "name":"npc_dota_hero_sven",
    "id":18
    },
    {
    "name":"npc_dota_hero_tiny",
    "id":19
    },
    {
    "name":"npc_dota_hero_vengefulspirit",
    "id":20
    },
    {
    "name":"npc_dota_hero_windrunner",
    "id":21
    },
    {
    "name":"npc_dota_hero_zuus",
    "id":22
    },
    {
    "name":"npc_dota_hero_kunkka",
    "id":23
    },
    {
    "name":"npc_dota_hero_lina",
    "id":25
    },
    {
    "name":"npc_dota_hero_lich",
    "id":31
    },
    {
    "name":"npc_dota_hero_lion",
    "id":26
    },
    {
    "name":"npc_dota_hero_shadow_shaman",
    "id":27
    },
    {
    "name":"npc_dota_hero_slardar",
    "id":28
    },
    {
    "name":"npc_dota_hero_tidehunter",
    "id":29
    },
    {
    "name":"npc_dota_hero_witch_doctor",
    "id":30
    },
    {
    "name":"npc_dota_hero_riki",
    "id":32
    },
    {
    "name":"npc_dota_hero_enigma",
    "id":33
    },
    {
    "name":"npc_dota_hero_tinker",
    "id":34
    },
    {
    "name":"npc_dota_hero_sniper",
    "id":35
    },
    {
    "name":"npc_dota_hero_necrolyte",
    "id":36
    },
    {
    "name":"npc_dota_hero_warlock",
    "id":37
    },
    {
    "name":"npc_dota_hero_beastmaster",
    "id":38
    },
    {
    "name":"npc_dota_hero_queenofpain",
    "id":39
    },
    {
    "name":"npc_dota_hero_venomancer",
    "id":40
    },
    {
    "name":"npc_dota_hero_faceless_void",
    "id":41
    },
    {
    "name":"npc_dota_hero_skeleton_king",
    "id":42
    },
    {
    "name":"npc_dota_hero_death_prophet",
    "id":43
    },
    {
    "name":"npc_dota_hero_phantom_assassin",
    "id":44
    },
    {
    "name":"npc_dota_hero_pugna",
    "id":45
    },
    {
    "name":"npc_dota_hero_templar_assassin",
    "id":46
    },
    {
    "name":"npc_dota_hero_viper",
    "id":47
    },
    {
    "name":"npc_dota_hero_luna",
    "id":48
    },
    {
    "name":"npc_dota_hero_dragon_knight",
    "id":49
    },
    {
    "name":"npc_dota_hero_dazzle",
    "id":50
    },
    {
    "name":"npc_dota_hero_rattletrap",
    "id":51
    },
    {
    "name":"npc_dota_hero_leshrac",
    "id":52
    },
    {
    "name":"npc_dota_hero_furion",
    "id":53
    },
    {
    "name":"npc_dota_hero_life_stealer",
    "id":54
    },
    {
    "name":"npc_dota_hero_dark_seer",
    "id":55
    },
    {
    "name":"npc_dota_hero_clinkz",
    "id":56
    },
    {
    "name":"npc_dota_hero_omniknight",
    "id":57
    },
    {
    "name":"npc_dota_hero_enchantress",
    "id":58
    },
    {
    "name":"npc_dota_hero_huskar",
    "id":59
    },
    {
    "name":"npc_dota_hero_night_stalker",
    "id":60
    },
    {
    "name":"npc_dota_hero_broodmother",
    "id":61
    },
    {
    "name":"npc_dota_hero_bounty_hunter",
    "id":62
    },
    {
    "name":"npc_dota_hero_weaver",
    "id":63
    },
    {
    "name":"npc_dota_hero_jakiro",
    "id":64
    },
    {
    "name":"npc_dota_hero_batrider",
    "id":65
    },
    {
    "name":"npc_dota_hero_chen",
    "id":66
    },
    {
    "name":"npc_dota_hero_spectre",
    "id":67
    },
    {
    "name":"npc_dota_hero_doom_bringer",
    "id":69
    },
    {
    "name":"npc_dota_hero_ancient_apparition",
    "id":68
    },
    {
    "name":"npc_dota_hero_ursa",
    "id":70
    },
    {
    "name":"npc_dota_hero_spirit_breaker",
    "id":71
    },
    {
    "name":"npc_dota_hero_gyrocopter",
    "id":72
    },
    {
    "name":"npc_dota_hero_alchemist",
    "id":73
    },
    {
    "name":"npc_dota_hero_invoker",
    "id":74
    },
    {
    "name":"npc_dota_hero_silencer",
    "id":75
    },
    {
    "name":"npc_dota_hero_obsidian_destroyer",
    "id":76
    },
    {
    "name":"npc_dota_hero_lycan",
    "id":77
    },
    {
    "name":"npc_dota_hero_brewmaster",
    "id":78
    },
    {
    "name":"npc_dota_hero_shadow_demon",
    "id":79
    },
    {
    "name":"npc_dota_hero_lone_druid",
    "id":80
    },
    {
    "name":"npc_dota_hero_chaos_knight",
    "id":81
    },
    {
    "name":"npc_dota_hero_meepo",
    "id":82
    },
    {
    "name":"npc_dota_hero_treant",
    "id":83
    },
    {
    "name":"npc_dota_hero_ogre_magi",
    "id":84
    },
    {
    "name":"npc_dota_hero_undying",
    "id":85
    },
    {
    "name":"npc_dota_hero_rubick",
    "id":86
    },
    {
    "name":"npc_dota_hero_disruptor",
    "id":87
    },
    {
    "name":"npc_dota_hero_nyx_assassin",
    "id":88
    },
    {
    "name":"npc_dota_hero_naga_siren",
    "id":89
    },
    {
    "name":"npc_dota_hero_keeper_of_the_light",
    "id":90
    },
    {
    "name":"npc_dota_hero_wisp",
    "id":91
    },
    {
    "name":"npc_dota_hero_visage",
    "id":92
    },
    {
    "name":"npc_dota_hero_slark",
    "id":93
    },
    {
    "name":"npc_dota_hero_medusa",
    "id":94
    },
    {
    "name":"npc_dota_hero_troll_warlord",
    "id":95
    },
    {
    "name":"npc_dota_hero_centaur",
    "id":96
    },
    {
    "name":"npc_dota_hero_magnataur",
    "id":97
    },
    {
    "name":"npc_dota_hero_shredder",
    "id":98
    },
    {
    "name":"npc_dota_hero_bristleback",
    "id":99
    },
    {
    "name":"npc_dota_hero_tusk",
    "id":100
    },
    {
    "name":"npc_dota_hero_skywrath_mage",
    "id":101
    },
    {
    "name":"npc_dota_hero_abaddon",
    "id":102
    },
    {
    "name":"npc_dota_hero_elder_titan",
    "id":103
    },
    {
    "name":"npc_dota_hero_legion_commander",
    "id":104
    },
    {
    "name":"npc_dota_hero_ember_spirit",
    "id":106
    },
    {
    "name":"npc_dota_hero_earth_spirit",
    "id":107
    },
    {
    "name":"npc_dota_hero_terrorblade",
    "id":109
    },
    {
    "name":"npc_dota_hero_phoenix",
    "id":110
    },
    {
    "name":"npc_dota_hero_oracle",
    "id":111
    },
    {
    "name":"npc_dota_hero_techies",
    "id":105
    },
    {
    "name":"npc_dota_hero_winter_wyvern",
    "id":112
    },
    {
    "name":"npc_dota_hero_arc_warden",
    "id":113
    },
    {
    "name":"npc_dota_hero_abyssal_underlord",
    "id":108
    },
    {
    "name":"npc_dota_hero_monkey_king",
    "id":114
    },
    {
    "name":"npc_dota_hero_pangolier",
    "id":120
    },
    {
    "name":"npc_dota_hero_dark_willow",
    "id":119
    },
    {
    "name":"npc_dota_hero_grimstroke",
    "id":121
    },
    {
    "name":"npc_dota_hero_mars",
    "id":129
    },
    {
    "name":"npc_dota_hero_void_spirit",
    "id":126
    },
    {
    "name":"npc_dota_hero_snapfire",
    "id":128
    }
    ]
    ,
    "status":200,
    "count":119
    }
    } 

var heroArray = [];
var laneArray = [];
var parsedMatchIdArray = [];
var ranksArray = [];
var previousMatchId;
var gamesRemaining = 101;
var victor;
var testMatchArray = [];
var radiantLineup = document.getElementById("radiant-lineup");
var direLineup = document.getElementById("dire-lineup");
var radiantInfoUnit = document.getElementById("radiant-info-unit");
var direInfoUnit = document.getElementById("dire-info-unit");
var beginButton = document.getElementById("begin-game-button");
var titleUnit = document.getElementById("title-unit");
//var heroListUrl = "https://api.steampowered.com/IEconDOTA2_570/GetHeroes/v0001/?key="+apiKey;

var bgNumber = Math.floor(Math.random()*10);
document.body.style.backgroundImage="url(./images/body-bgs/body-bg"+bgNumber+".png)";

//var desiredMatchId = 5445131421;
fetch('https://api.opendota.com/api/publicMatches/')
    .then(res => res.json())
    .then(matchList =>{
        testMatchArray=matchList;
    })

//////////////////////////////////////////////////////////////
// script for the title sequence

beginButton.onclick = function(){
    // initial setup
    titleUnit.classList.add("animated-begin-button-1");
    radiantLineup.classList.add("radiant-entering-box");
    direLineup.classList.add("dire-entering-box");
    setup();       
    titleUnit.onanimationend = () =>{ 
        titleUnit.style.visibility="hidden";

    }
}

// method: initialize the page based on a match
function setup(){

    heroArray = [];
    laneArray = [];
    ranksArray = [];

    var randomMatchId = grabRandomParsedMatch(testMatchArray);
    fetch('https://api.opendota.com/api/matches/'+randomMatchId)
        .then(res => res.json())
        .then(matchData => {
            initMatch(matchData);
            printSomething(matchData);
            })
        radiantLineup.onanimationend = () =>{
            radiantLineup.classList.remove("radiant-donezo-box");
            direLineup.classList.remove("dire-donezo-box");
        }
}

// method: grab a random item from opendota's fetched match list 
function grabRandomParsedMatch(data){
    previousMatchId = data[Math.floor(Math.random()*gamesRemaining)].match_id
    return previousMatchId;
}

// function populateParsedArray(data){
//     for(let i=0; i<100; i++){
//         parsedMatchIdArray.push(data[i].match_id)
//     }
//     for(let i=0; i<10; i++){
//         console.log(parsedMatchIdArray[i])
//     }
// }

function printSomething(data){
    console.log("https://opendota.com/matches/" + data.match_id, " region: " + data.region);
}

// sorts lanes into offlane, mid and safelane
function sortLanes(data){
    for(let i=0; i<10; i++){
        // mid condition
        if(data.players[i].lane==2){
            laneArray.push(getCleanHeroName(data.players[i].hero_id)+": mid")
        };

        // bot lane conditions
        if(data.players[i].lane==1 && data.players[i].isRadiant){
            laneArray.push(getCleanHeroName(data.players[i].hero_id)+": safe")
        } else if(data.players[i].lane==1){
            laneArray.push(getCleanHeroName(data.players[i].hero_id)+": off")
        }

        // bot lane conditions
        if(data.players[i].lane==3 && data.players[i].isRadiant){
            laneArray.push(getCleanHeroName(data.players[i].hero_id)+": off")
        } else if(data.players[i].lane==3){
            laneArray.push(getCleanHeroName(data.players[i].hero_id)+": safe")
        }
    }

}

// approximately sorts into core vs support
function coreSupportSort(data){
    //todo
}


// method: get clean hero name from ID
function getCleanHeroName(heroId){
    for(let i=0; i<120;i++){
        if(heroId == heroList.result.heroes[i].id){
            return heroList.result.heroes[i].name.replace('npc_dota_hero_','');;
        }
    }
}

// method: finds the mode rank tier from the provided data
function modeRank(data){
    console.log(Math.mode(ranksArray.substring(0,1)));
    
}

// method: fills the hero array with the id's of heroes from the json
// converted to clean names for image retrieval
// also fills the ranks array with rank information
function fillHeroArray(data){
    for(let i=0; i<10; i++){
        heroArray.push(getCleanHeroName(data.players[i].hero_id));
        ranksArray.push(data.players[i].rank_tier);
    }
}

// method: returns true when the game is ranked, and false otherwise (for consistent rank data)
function isRanked(data){
    console.log(data.game_mode==22);
    return data.game_mode==22;
}

// method: initializes the page for a new round
function initMatch(data){
    victor = data.radiant_win;
    fillHeroArray(data);
    sortLanes(data);

    // temporarily scrapped: individual rank data
    // if(!isRanked(data)){
    //     document.getElementById("radiant-ranks-box").style.display="none";
    //     document.getElementById("dire-ranks-box").style.display="none";
    // }
    
    // populate the images from hero info in the JSON file
    for(let i=0; i<5;i++){
        document.getElementById("radiant"+(1+i)).src="http://cdn.dota2.com/apps/dota2/images/heroes/"+heroArray[i]+"_lg.png";
        document.getElementById("radiant-rank"+(1+i)).src="./images/ranks/"+ranksArray[i]+".png";
    }
    for(let i=0; i<5;i++){
        document.getElementById("dire"+(1+i)).src="http://cdn.dota2.com/apps/dota2/images/heroes/"+heroArray[5+i]+"_lg.png";
        document.getElementById("dire-rank"+(1+i)).src="./images/ranks/"+ranksArray[5+i]+".png";
    }
}



// when a victory button is clicked, do something...
document.getElementById("radiant-lineup").onclick = function(){
    if(!victor){
        alert("Incorrect");
        return;
    }
    if(victor){
        radiantLineup.classList.remove("radiant-entering-box");
        direLineup.classList.remove("dire-entering-box");
        radiantLineup.classList.add("radiant-donezo-box");
        direLineup.classList.add("dire-donezo-box");
        setup();
    }
}

document.getElementById("dire-lineup").onclick = function(){
    if(victor){
        alert("Incorrect");
        return;
    }

    if(victor==false){ 
        radiantLineup.classList.remove("radiant-entering-box");
        direLineup.classList.remove("dire-entering-box");
        radiantLineup.classList.add("radiant-donezo-box");
        direLineup.classList.add("dire-donezo-box");
        setup(); 
    }
}





// location of hero icons:
// http://cdn.dota2.com/apps/dota2/images/heroes/[HERONAME]_lg.png