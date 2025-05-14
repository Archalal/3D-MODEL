import commonAPI from "./commonAPI";

export  const addModel=async(reqBody,reqHeaders)=>{
    return await commonAPI("post","/imageuploads",reqBody,reqHeaders)

}

export const getAllModel=async()=>{
    return  await commonAPI("get","/getall","")
}