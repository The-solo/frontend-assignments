import { atom } from "recoil"; 
import profilePic from '../storage/sasuke.jpg'

export const profileState = atom({
    key : "profileState",
    default : profilePic
});

export const userNameState = atom({
    key : "userNameState",
    default : "uchiha sasuke",
});

export const locationState = atom({
    key : "locationState",
    default : "Hidden leaf",  
});

export const ageState = atom({
    key : "ageState",
    default : 30,
});

export const followingState = atom({
    key : "followingState",
    default : 400,
});

export const photoState = atom({
    key : "likeState",
    default : "8.2k"
});

export const followersState= atom({
    key : "followersState",
    default : "100k"
});

