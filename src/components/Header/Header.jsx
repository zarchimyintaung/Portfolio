import React from 'react'

const Header = () => {
  return (
    
    <div className='bg-secondary-color'>
        <div className='flex w-100 container mx-auto py-4'>
            <div className='flex-1'>
                <div className='flex w-100 justify-between'>
                    <div>
                        <span className='primary-color mr-2'>Free Call :</span>
                        <span className='text-white'>+95 09 760 511 244</span>
                    </div>

                    <div>
                        <span className='primary-color mr-2'>Email Address : </span>
                        <span className='text-white'>zarchimyintaung12@gmail.com</span>
                    </div>
                </div>
            </div>

            <div>
                <ul className='list-none'>
                    <li className='inline'>
                        <a href="/" className='p-3'>
                            o
                        </a>
                    </li>
                    <li className='inline'>
                        <a href="/" className='p-3'>
                            o
                        </a>
                    </li>
                    <li  className='inline'>
                        <a href="/" className='p-3'>
                            o
                        </a>
                    </li>   
                </ul>
            </div>

        </div>
    </div>
  )
}

export default Header