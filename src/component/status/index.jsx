import Image from 'next/image'
import Link from 'next/link';
import { useState } from 'react';
import StatusForm from '../StatusForm';
const StatusSection = () => {
  const [statusOn, setStatusOn] = useState(false);
  const statusOnModal = () =>{
    setStatusOn(true)
  }
  return (
    <>
        <div className="status">
            <figure>
                <Link href="/">
                    <Image src="" alt="" width={40} height={40}/>
                </Link>
            </figure>
            <div className='status-upload' onClick={statusOnModal}></div>
        </div>
        {statusOn && 
            <div>
                <div className='close' onClick={()=>setStatusOn(false)} />
                <StatusForm />
            </div>
        }
    </>
  )
}

export default StatusSection