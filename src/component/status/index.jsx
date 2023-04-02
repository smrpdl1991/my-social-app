import Image from 'next/image'
import Link from 'next/link';
import { useState } from 'react';
import StatusSectionForm from './statusForm';

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
            <div className='status-upload' onClick={statusOnModal}>What's on your mind ?</div>
        </div>
        {statusOn && 
            <StatusSectionForm setStatusOn={setStatusOn}/>
        }
    </>
  )
}

export default StatusSection