import {easyfetch} from '../util/NetUtil';
export const ASKPRICE_SUCCESS = 'ASKPRICE_SUCCESS';
export const ASKPRICE_FAILURE = 'ASKPRICE_FAILURE';




export const askPrice = (json)=>{
    return (dispatch)=>{
        return easyfetch('xunjia','post',json,'json')
            .then(result=>{
                return dispatch(askpriceSuccess(result));
            })
            .catch(error=>{
                console.log(error);
                return dispatch(askpriceFailure(error));
            });
    }
};


const askpriceSuccess=(result)=>({type:ASKPRICE_SUCCESS,result,loading:false});
const askpriceFailure=(error)=>({type:ASKPRICE_FAILURE,error,loading:false});
