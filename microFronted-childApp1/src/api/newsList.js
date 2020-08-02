import axios from "./index"
import axios2 from "axios"
import xios from "axios" 
const xhr=xios.create({ headers: {'Content-type': 'multipart/form-data; '} })

//分页列表
export const getNewsList = params =>{
    return axios.get("/api/articles/list",{params:params}).then(res => res.data);
};
//添加
export const newsAdd = params => {
    return xhr.post("/api/articles/add", params).then(res => res.data);
};
//删除
export const newsDelete = params => {
    return axios.delete("/api/articles/delete", {params:params}).then(res => res.data);
};









