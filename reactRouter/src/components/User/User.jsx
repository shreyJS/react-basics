import { useParams } from "react-router-dom";

function User() {
    // useParams() returns an object which contains one property received from router.
    const obj = useParams()
    console.log(obj);
    return ( <div className="bg-gray-600 text-white text-3xl p-4">{obj.userId}</div> );
}

export default User;