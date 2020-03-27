import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import teams from './misc'

class Match extends Component{
    state = {
        searched_summoner:
            {
                    summoner_name: 'username',
                    match_outcome: 'win or defeat',
                    champion: 'champname',
                    champion_level: 'champlevel',
                    summoner_spell_1: 'first summoner spell',
                    summoner_spell_2: 'second summoner spell',
                    main_keystone: "primary keystone",
                    secondary_keystone: "secondary keystone",
                    division: 'tier and number',
                    kills: 'kills, a number',
                    deaths: 'deaths, a number',
                    assists: 'assists, a number',
                    total_damage: 'total damage, a number',
                    champion_damage: 'damage to champs, a number',
                    control_wards_placed: 'control wards place, a number',
                    wards_placed: 'total wards, a number',
                    wards_killed: 'total killed wards, a number',
                    cs: 'total minions killed',
                    total_team_kills: 'total kills by the searched team',
                    tier_average: 'the average tier',
                    items: ['titanic_hydra', 'steraks_gage', 'ninja_tabi', 'black_cleaver', 'warding_totem'],
                    vision_score: 'vision score, a number'
        },
        teams
    }
}
