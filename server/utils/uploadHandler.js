const cloudinary = require("../config/cloudinary")

exports.uploadSingleFile = async(file)=>{
    const data = await cloudinary.uploader.upload(file.tempFilePath);
    return data.url
}

exports.uploadMultipleFile = async(files)=>{
    let data = [];
    
    if (files.tempFilePath){
        // data.push(await this.uploadSingleFile(files));
        const obj = await cloudinary.uploader.upload(files.tempFilePath, {resource_type: "video"})
        data.push(obj.url);
        return data;
    }

    for (let i = 0; i < files.length; i++) {
        const obj = await cloudinary.uploader.upload(files[i].tempFilePath, {resource_type: "video"});
        data.push(obj.url);
    }
    return data;
}