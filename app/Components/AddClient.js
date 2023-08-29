"use client"
import React, { useState } from 'react'
import { AiOutlinePlus } from "react-icons/ai"
import { toast } from 'react-toastify';
import Modal from './Model'
import { addClient } from '@/api'
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";
const AddClient = () => {
    const [openModal, setOpenModal] = useState(false);
    const [newClient, setnewClient] = useState('');
    const [priority, setPriorty] = useState()

    const router = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await addClient({
                id: uuidv4(),
                Name: newClient,
                priority
            })
            if (newClient) {
                setnewClient('')
                setOpenModal(false)
                router.refresh()
                toast.success("New Client added successfully")
            }


        } catch (error) {
            toast.error("Faild to add the Client ")

        }
    };

    return (
        <div>
            <button onClick={() => { setOpenModal(true) }} className='btn btn-primary w-full'> Add new Client  <AiOutlinePlus className='ml-2' size={18} />  </button>
            <Modal openModal={openModal} setOpenModal={setOpenModal}>
                <form onSubmit={handleSubmit} method="dialog" className="modal-box">
                    <button onClick={() => { setOpenModal(false) }} className="tn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    <h3 className='font-bold text-lg'>Add new task</h3>

                    <div className='modal-action flex flex-col '>
                        <input
                            onChange={(e) => { setnewClient(e.target.value) }}
                            value={newClient}
                            minLength={4}
                            required
                            type='text'
                            placeholder='Type here'
                            className='input  input-bordered  w-full'
                        />
                        <div className='w-full '>
                            <select value={priority}
                                required
                                className='     input input-bordered  my-3  w-full  m-auto   '
                                onChange={(e) => { setPriorty(e.target.value) }}>
                                <option className=' items-center' disabled selected value="null">----</option>
                                <option className=' items-center' value="Low">low</option>
                                <option value="High">High</option>
                                <option value="Medium">Meduim</option>
                            </select>
                        </div>
                        <button disabled={!newClient || !priority} type='submit' className='btn'>
                            Submit
                        </button>
                    </div>
                </form>
            </Modal>
        </div>
    )
}

export default AddClient
