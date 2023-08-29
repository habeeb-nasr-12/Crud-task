
import React from 'react'   
import Client from './Client'


const ToDOList = ({ Clients }) => {
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">

                    <thead>
                        <tr>
                            <th className='text-center'>Client name  </th>
                             <th  className='text-center'>Priorty</th>
                            <th  className='text-center'>Actions </th>
                        </tr>
                    </thead>
                    <tbody>
                        {Clients?.map((client) => (
                            <Client key={client.id} client={client} />
                        ))}



                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default ToDOList
