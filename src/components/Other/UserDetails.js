import React from 'react'
import { useRecoilValue } from 'recoil'
import {fetchUserDetails} from '../../recoil/selector/selector'

export default function UserDetails() {
    const userDetails = useRecoilValue(fetchUserDetails);
    console.log("data = "+ userDetails)

    const { data } = userDetails;
    return (    
        data.map(item =>(
            <div key={item.id}>
                    <img src={item.avatar} />
                    <p>
                        First Name : {item.first_name} Last Name : {item.last_name}
                    </p>
                    <p>
                        Email : {item.email }
                    </p>                
            </div>
            ))
    )
}
