//axios to call api's
import axios from 'axios';
import { API_NOTIFICATION_MESSAGES,SERVICE_URLS } from '../constants/config';
//import { SERVICE_URLS } from '../constants/config';
import { getAccessToken, getType } from '../utils/common-utils';

const API_URL= 'http://localhost:4000';

// creating api
const axiosInstance = axios.create({
    baseURL: API_URL,
    timeout: 10000,
    headers:{
        "Accept":"application/json, form-data",
        "Content-Type": "application/json",
        // "Content-Type":"multipart/form-data",
        // "accept":"multipart/form-data"
    }
})

axiosInstance.interceptors.request.use(
    function(config){
        if(config.TYPE.params){
            config.params = config.TYPE.params;
        }
        else if(config.TYPE.query){
            config.url = config.url + '/' + config.TYPE.query;
        }
        return config;
    },
    function(error){
       
        return Promise.reject(error);
    },
)

axiosInstance.interceptors.response.use(
    function(response){
        //stop global loader here
        return proessResponse(response);
    },
    function(error){
        //stop global loader here
        return Promise.reject(processError(error));
    },
)

const proessResponse = (response)=>
{
    if(response?.status===200){
        return{isSuccess:true, data: response.data}
    }
    else{
        return{
            isFailure: true,
            status:response?.status,
            msg: response?.msg,
            code: response?.code
        }
    }
}

const processError = (error)=>
{
if(error.response){
    //request sent but response of error
    console.log('ERROR IN RESPONSE:', error.toJSON());
    return {
        isError:true,
        msg:API_NOTIFICATION_MESSAGES.responseFailure,
        code:error.response.status
    }
}
else if(error.request)
{
    //request made but not sent so no response 
    console.log('ERROR IN REQUEST:', error.toJSON());
    return {
        isError:true,
        msg:API_NOTIFICATION_MESSAGES.requestFailure,
        code:""
    }
}
else{
    //frontend issue no req sent
    console.log('ERROR IN NETWORK:', error.toJSON());
    return {
        isError:true,
        msg:API_NOTIFICATION_MESSAGES.networkError,
        code:""
    }

}
}

const API={};

for(const [key,value] of Object.entries(SERVICE_URLS)){
    API[key]=(body, showUploadProgress, showDownloadProgress) =>
        axiosInstance({
            method: value.method,
            url:value.url,
            data: value.method === 'DELETE'? {} : body,
            responseType: value.responseType,
            headers:{
                authorization: getAccessToken(),
            },
            TYPE: getType(value, body),
            onUploadProgress: function(progressEvent){
                if(showUploadProgress){
                    let percentageCompleted = Math.round((progressEvent.loaded *100)/progressEvent.total) 
                    showUploadProgress(percentageCompleted);
                }
            },
            onDownloadProgress:function(progressEvent){
                if(showDownloadProgress){
                    let percentageCompleted = Math.round((progressEvent.loaded *100)/progressEvent.total) 
                    showDownloadProgress(percentageCompleted);
                }
            }
        });
    
}

export {API};