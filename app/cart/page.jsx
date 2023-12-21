import React from 'react'

const page = () => {
  return (
    <div className='mt-40 mb-48'>
<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-blue-500 d">
        <thead className="text-xs text-blue-700 uppercase bg-blue-50 ">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Product name
                </th>
                <th scope="col" className="px-6 py-3">
                    Color
                </th>
                <th scope="col" className="px-6 py-3">
                    Category
                </th>
                <th scope="col" className="px-6 py-3">
                    Price
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
           
           
        </tbody>
    </table>

    <div className='m-6'>no cart item found</div>
</div>
    <button className="btn btn-info bg-blue-200 text-blue-800 hover:bg-blue-400 hover:text-white mt-8 px-10">Pay</button>

    </div>
  )
}

export default page
