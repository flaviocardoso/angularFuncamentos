import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewUser } from './new-user';

const API_URl = 'http://localhost:3000';

@Injectable({ providedIn: 'root'})
export class SignupService {
    constructor(private http: HttpClient) {}
    checkUserNameTaken (userName: string) {
        return this.http.get(API_URl + '/user/exists/' + userName);
    }
    signup (newUser: NewUser) {
        return this.http.post(API_URl + '/user/signup', newUser);
    }
}
