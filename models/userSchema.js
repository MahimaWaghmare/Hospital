import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: [3, "First Name must contain atleast 3 Characters!"],
    },
    lastName: {
        type: String,
        required: true,
        minLength: [3, "Last Name must contain atleast 3 Characters!"],
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "Please provide valid email!"],
    },
    phone: {
        type: String,
        required: true,
        minLength: [10, "Phone number must contain 10 digits!"],
        maxLength: [10, "Phone number must contain 10 digits!"],
    },
    dob: {
        type: Date,
        required: [true, "DOB is required!"],
    },
    gender: {
        type: String, 
        required: true,
        enum: ["Male", "Female","Others"],
    },
    password: {
        type: String,
        minLength: [8, "Password must contain atleast 8 Characters!"],
        required: true,
        select: false,
    },
    role: {
        type: String,
        required: true,
        enum: ["Admin", "Patient", "Doctor"],
    },
    doctorDepartment: {
        type: String,
    },
    docAvatar: {
        public_id: String,
        url: String,
    },
});


userSchema.pre("save", async function(next){
    if(!this.isModified("password")){
        next();
    }
    this.password = await bcrypt.hash(this.password, 10);

    // if (this.dob && typeof this.dob === 'string') {
    //     const dobParts = this.dob.split('/');
    //     const day = parseInt(dobParts[0], 10);
    //     const month = parseInt(dobParts[1], 10) - 1;
    //     const year = parseInt(dobParts[2], 10);
    //     this.dob = new Date(year, month, day);
    // }
    // next();
    
});

userSchema.methods.comparePassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.methods.generateJsonWebToken = function() {
    return jwt.sign({id: this._id}, process.env.JWT_SECRET_KEY, {
        expiresIn: process.env.JWT_EXPIRES,
    });
};


export const User = mongoose.model("User", userSchema);