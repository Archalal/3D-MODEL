import axios from "axios";
import baseURL from "./baseurl";


const commonAPI=async(httpmethod,endpoints,reqBody,reqHeaders)=>{
    const requestedConfig={
        method:httpmethod,
        url:baseURL+endpoints,
        data:reqBody,
        headers:reqHeaders?reqHeaders:{"Content-type":"application/json"}
    }
    return await axios(requestedConfig)
    .then((res)=>{
        return res
    })
    .catch((err)=>{
        return err
    })
}

export default commonAPI