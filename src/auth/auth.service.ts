import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import bcrypt from "bcryptjs"

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(user_email: string, user_password: string): Promise<any> {
    const where = " deleted != '*' and \"isActive\" is true and user.email = :email"
    const bind  = { email: user_email};

    const user = await this.usersService.customSelect(where, bind);

    //If the email exist in the database, test if the password is the same
    if(user){
        //decrypt the password to see if the passwords match
        const match = await bcrypt.compare(user.password, user_password)

        //return the user information if the password is correct.
        if(match){ 
            const { password, ...result } = user;
            return result;
        }else{
            return null;
        }
        
    }else{
        return null
    }
  }
}