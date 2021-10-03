import Axios from 'axios';

const developmentDB = "http://localhost:3000";

export const uploadImageToDB = async (image) => {
    try {
        const res = await Axios.post(developmentDB + "/upload-image", image);
        console.log(res.data)
        return res.data;
    } catch (err) {
        // return err.response.data.message;
    }
};
export const deleteImageFromDB = async (image) => {
    try {
        const res = await Axios.delete(developmentDB + "/delete-image?id="+image._id);
        return res.data;
    } catch (err) {
        // return err.response.data.message;
    }
};
export const getMyImagesFromDB = async () => {
    try {
        const res = await Axios.get(developmentDB + "/get-images");
        return res.data;
    } catch (err) {
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

