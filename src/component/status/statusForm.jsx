import Image from 'next/image'
import Link from 'next/link';
import { useState } from 'react';
const StatusSectionForm = ({setStatusOn}) => {
  return (
    
            <div className='status-upload-form'>
                <form className='status-upload-form-wrap'>
                  <div className='title'>
                    Create Post
                    <div className='close' onClick={()=>setStatusOn(false)} >close</div>
                  </div>
                  <div className="status-here">
                    <textarea name="" placeholder="what's on your mind?" />
                  </div>
                  <div className="image-upload">
                    <input type="file" multiple accept="image/*" />
                  </div>
                  <input type="submit" value="Post" className='submit-post' />
                </form>
            </div>
      
  )
}

export default StatusSectionForm