import Axios from 'axios';

const developmentDB = "http://localhost:4000";

export const uploadImageToDB = async (image,token) => {
    try {
        const res = await Axios.post(developmentDB + "/upload-image", image,{
            headers:{
                'Authorization': `Bearer ${token}`,
            }
        });
        console.log(res.data)
        return res.data;
    } catch (err) {
        console.log(err)
    }
};
export const deleteImageFromDB = async (id,key,token) => {
    try {
        const res = await Axios.delete(developmentDB + "/delete-image",{ data: { id,key }, headers: { "Authorization": `Bearer ${token}` } });
        return res.data;
    } catch (err) {
        console.log(err.response.data.message)
        // return err.response.data.message;
    }
};
export const getMyImagesFromDB = async (token) => {
    console.log(token)
    try {
        const res = await Axios.get(developmentDB + "/get-my-images",{
            headers:{
                'Authorization': `Bearer ${token}`
            }
        });
        return res.data;
    } catch (err) {
        console.log(err.response.data.message)
        // return err.response.data.message;
    }
};
export const loginToDB = async ({email,password}) => {
    try {
        const res = await Axios.post(developmentDB + "/login",{email,password});
        return res.data;
    } catch (err) {
        // return err.response.data.message;
    }
};
export const logoutFromDB = async (token) => {
    try {
        const res = await Axios.post(developmentDB + "/logout",{token},{
            headers:{
                'Authorization': `Bearer ${token}`
            }
        });
        return res.data;
    } catch (err) {
        // return err.response.data.message;
    }
};

