import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/errorMiddleware.js";
import { User } from "../models/userSchema.js";
import { generateToken } from "../utils/jwtToken.js";
import cloudinary from "cloudinary";
 

export const patientRegister = catchAsyncErrors(async (req, res, next) => {
    const {firstName, lastName, email, phone, dob, gender, password, role } = req.body;
    if(!firstName || !lastName || !email || !phone || !dob || !gender || !password || !role){
        return next(new ErrorHandler("Please fill full form!", 400));
    }
    let user = await User.findOne({email});
    if(user){
        return next(new ErrorHandler("User already Registered!", 400));
    }
    user = await User.create({firstName, lastName, email, phone, dob, gender, password, role});

    generateToken(user, "User registered!", 200, res);
    // res.status(200).json({
    //     success: true,
    //     message: "User registered!",
    // }); 
});


export const login = catchAsyncErrors(async (req, res, next) => {
    const {email, password, confirmPassword, role} = req.body;
    if(!email || !password || !confirmPassword || !role){
        return next(new ErrorHandler("Please provide all details!", 400));
    }
    if(password !== confirmPassword){
        return next(new ErrorHandler("password and confirm password do not match!!", 400));
    }
    const user = await User.findOne({email}).select("+password");
    if(!user){
        return next(new ErrorHandler("User not registered!", 400));
    }
    
    const isPasswordMatched = await user.comparePassword(password);
    if(!isPasswordMatched){ 
        return next(new ErrorHandler("Invalid email or password!", 400));
    }

    if(role !== user.role){
        return next(new ErrorHandler("User with this role not found!", 400));
    } 
    generateToken(user, "User logged in successfully!", 200, res);
    // res.status(200).json({
    //     success: true,
    //     message: "User logged in successfully!",
    // });
});


export const addNewAdmin = catchAsyncErrors(async (req, res, next) => {
    const { firstName, lastName, email, phone, dob, gender, password } = req.body;

    if(!firstName || !lastName || !email || !phone || !dob || !gender || !password ){
        return next(new ErrorHandler("Please fill full form!", 400));
    }   

    const isRegistered = await User.findOne({email});
    if(isRegistered){
        return next(new ErrorHandler(`${isRegistered.role} with this email already exists!`));
    }
    const admin = await User.create({firstName, lastName, email, phone, dob, gender, password, role: "Admin"});
    res.status(200).json({
        success: true,
        message: "New admin registered",
    }); 
});       


export const addnewDoctor = catchAsyncErrors(async (req, res, next) => {

    if(!req.files || Object.keys(req.files).length === 0){
        console.log("No files uploaded:", req.files);
        return next(new ErrorHandler("Doctor Avatar required!", 400));
    }
    const {docAvatar} = req.files;
    if (!docAvatar || !docAvatar.mimetype) {
        console.log("Invalid file upload:", docAvatar);
        return next(new ErrorHandler("Invalid file upload", 400));
    }

    const allowedFormats = ["image/png", "image/jpeg", "image/webp"];
    if(!allowedFormats.includes(docAvatar.mimetype)){
        return next(new ErrorHandler("File format not supported", 400));
    }


    const { firstName, lastName, email, phone, dob, gender, password, role, doctorDepartment } = req.body;
    if(!firstName || !lastName || !email || !phone || !dob || !gender || !password || !role || !doctorDepartment){
        return next(new ErrorHandler("Please fill full form!", 400)); 
    }

    const isDocRegistered = await User.findOne({email});
    if(isDocRegistered){
        return next(new ErrorHandler(`${isDocRegistered.role} with this email already exists!`, 400));
    } 

    const cloudinaryResponse = await cloudinary.uploader.upload(docAvatar.tempFilePath);

    if(!cloudinaryResponse || cloudinaryResponse.error ){
        console.error("Cloudinary error:", cloudinaryResponse.error || "Unknown cloudinary error");
    }


    const doctor = await User.create({firstName, lastName, email, phone, dob, gender, password, role, doctorDepartment, 
        docAvatar: {
        public_id: cloudinaryResponse.public_id,
        url: cloudinaryResponse.secure_url,
        },
    }); 
    res.status(200).json({
        success: true,
        message: "New doctor registered",
        doctor,
    }); 
});
               
 
export const getAllDoctors = catchAsyncErrors(async (req, res, next) => {
    const doctors = await User.find({role: "Doctor"});
    res.status(200).json({
        success: true,
        doctors,
    });
});


// get user details
export const getUserDetails = catchAsyncErrors(async (req, res,next) => {
    const user = req.user;
    res.status(200).json({
        success: true,
        user,
    });
});


export const logoutAdmin = catchAsyncErrors(async (req, res, next) =>{
    res.status(200).cookie("adminToken", "", {
        httpOnly: true,
        expires: new Date(Date.now()),
    }).json({
        success: true,
        message: "Admin logged out successfully!",
    });
});

export const logoutPatient = catchAsyncErrors(async (req, res, next) =>{
    res.status(200).cookie("patientToken", "", {
        httpOnly: true,
        expires: new Date(Date.now()),
    }).json({
        success: true,
        message: "Patient logged out successfully!",
    });
});

export const logoutDoctor = catchAsyncErrors(async (req, res, next) =>{
    res.status(200).cookie("doctorToken", "", {
        httpOnly: true,
        expires: new Date(Date.now()),
    }).json({
        success: true,
        message: "Doctor logged out successfully!",
    });
});


