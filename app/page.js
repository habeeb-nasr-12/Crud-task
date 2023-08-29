import Image from 'next/image'
import ToDOList from './Components/ToDoList'
import { getAllClients } from '@/api'
import AddClient from './Components/AddClient'

export default async function Home() {
  const Clients = await getAllClients()

  return (

    <main className='w-3/4  mx-auto  mt-4 '>
      <div>
        <div className='text-center my-5 flex flex-col gap-4  '>

          <h1 className='text-2xl font-bold '>Client List APP</h1>
          <AddClient />
        </div>
        <ToDOList Clients={Clients} />
      </div>
    </main>
  )
}
