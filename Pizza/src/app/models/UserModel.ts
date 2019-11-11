import UserTypeModel from './UserTypeModel';
import AddressModel from './AddressModel';

export default interface UserModel {
    id: number,
    name: string,
    password: string,
    UserType: UserTypeModel,
    Address: AddressModel

}