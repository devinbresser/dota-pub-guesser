function getCleanHeroName(heroId){
    for(let i=0; i<200;i++){
        if(heroId == heroList.result.heroes[i].id){
            return heroList.result.heroes[i].name.replace('npc_dota_hero_','');;
        }
    }
}

export default getCleanHeroName;