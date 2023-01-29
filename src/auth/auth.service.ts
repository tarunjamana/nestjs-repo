import { Injectable } from "@nestjs/common";

@Injectable({})

export class AuthService {
    signin(){
       return {msg:'I have signed in successfully'}
    }

    signup(){
       return {msg:'I have signed up successfully'}
    }
}