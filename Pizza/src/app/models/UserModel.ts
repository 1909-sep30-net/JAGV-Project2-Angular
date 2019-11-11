import UserTypeModel from './UserTypeModel';
import AddressModel from './AddressModel';

export default interface UserModel {
    id: number,
    name: string,
    password: string,
    userType: UserTypeModel,
    address: AddressModel

}