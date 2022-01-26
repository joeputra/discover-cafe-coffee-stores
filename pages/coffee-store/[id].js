import {useRouter} from 'next/router'
import Link from  'next/link'
const CoffeeStore = () => {
    const router = useRouter()
    console.log("router",router)
    return (
    <div>Coffee Store Page
        <Link href="/">
            <a>Back To Home</a>
        </Link>
    </div>
    );
;}

export default CoffeeStore

