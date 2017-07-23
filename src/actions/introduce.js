import {easyfetch} from '../util/NetUtil';
export const INTRO_SUCCESS = 'INTRO_SUCCESS';
export const INTRO_FAILURE = 'INTRO_FAILURE';




export const intro = ()=>{
    return (dispatch)=>{
        return easyfetch('introprice','get')
            .then(result=>{
                return dispatch(introSuccess(result));
            })
            .catch(error=>{
                return dispatch(introFailure(error));
            });
    }
};


const introSuccess=(result)=>({type:INTRO_SUCCESS,result,loading:false});
const introFailure=(error)=>({type:INTRO_FAILURE,error,loading:false});
