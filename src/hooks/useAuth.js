import { useSelector } from "react-redux";


const useAuth = () => {
 const token = localStorage.getItem('token')
 let isOrganization = false
 let isAdmin = false
 let status = 'STUDENT'

 if(token){
    const data = JSON.parse(localStorage.getItem('user'))
    console.log('data',data)
    const {userName,roles} = data

    isOrganization = roles?.includes('ORGANIZATION')
    isAdmin = roles?.includes('ADMIN')

    if(isOrganization) status = 'ORGANIZATION'
    if(isAdmin) status = 'ADMIN'

    return { userName, roles, isOrganization, isAdmin, status };
 }

 return { userName: "", roles: [], isOrganization, isAdmin, status };
}

export default useAuth