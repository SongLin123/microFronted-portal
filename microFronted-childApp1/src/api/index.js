import axios from "axios";
import {Message} from 'element-ui'

const http = axios.create({
    // transformRequest:[function(data){
   
    //     let st = '';
    //     for(let i in data){
    //         let str = '';
    //         str = `${encodeURI((i))}=${encodeURI(data[i])}&`
    //         st += str;
    //     }
    //     return st;
    // }],
    timeout:15000
});

http.interceptors.response.use((res)=>{
    return res;
},(error)=>{
    
    if(error.response.status===419){
        Message.error({message:"登录未授权!"});
        window.location.href=location.protocol+'//'+location.host+location.pathname+"/login"
    }else if(error.response.status===500){
        Message.error({message: '服务器错误!'});
    }else {
        Message.error({message: error.response.data});
    }
    return Promise.reject(error)
})
export default http;

