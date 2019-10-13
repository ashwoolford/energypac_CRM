import { FETCH_OPPORTUNITY, NEW_OPPORTUNITY } from './types';


export function fetchOpportunities(){
    return function(dispatch){
        var url = 'https://cors-anywhere.herokuapp.com/http://thawing-earth-45113.herokuapp.com/api/opportunities/';

        fetch(url, {
            method: 'GET',
            headers:{
                'X-Requested-With': 'XMLHttpRequest'
            }
        })
        .then(res => res.json())
        .then(opportunities => dispatch({
            type: FETCH_OPPORTUNITY,
            payload: opportunities
        }));
    }
};

export function createOpportunity(formData){
    return function(dispatch){
        var url = 'https://cors-anywhere.herokuapp.com/http://thawing-earth-45113.herokuapp.com/api/opportunities/';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(formData => dispatch({
            type: NEW_OPPORTUNITY,
            payload: formData
        }));
    }
};