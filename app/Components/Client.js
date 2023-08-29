"use client"

import React, { useState } from 'react'
import { FiEdit } from "react-icons/fi"
import { FiTrash2 } from "react-icons/fi"
import Modal from './Model'
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation'
import { deleteClient, editClient } from '@/api'



const Client = ({ client }) => {
    const [openModelEdit, setOpenModalEdit] = useState(false)
    const [openModelDeleted, setOpenModalDeleted] = useState(false)
    const [taskToEdit, setTasktoEdit] = useState(client.Name)
    const router = useRouter()
    const [priority, setPriorty] = useState(client.priority)
    const handleSubmitEditClient = async (e) => {
        e.preventDefault()
        try {
            await editClient({
                id: client.id,
                Name: taskToEdit,
                priority
            })

            setOpenModalEdit(false)
            router.refresh()
            toast.success("Client has been edited  successfully")
        } catch (error) {
            toast.error(error)
        }
    }
    const handleDeleteClient = async (id) => {
        try {
            await deleteClient(id);
            setOpenModalDeleted(false)
            router.refresh()
            toast.success("Client has been deleted")
        } catch (error) {
            toast.error(error)
        }
    }

    return (

        <tr >

            <th className='w-1/2 text-center'>{client.Name}</th>
            <th className={`w-1/4 priorty text-center 
${client.priority === "High" ? 'bg-red-200' : client.priority === "Medium" ? 'bg-yellow-200' : client.priority === "Low" ? "bg-green-200" : ''} `}>{client.priority}</th>
            <th className='flex text-center  ml-20     gap-10'>
            <FiEdit onClick={() => { setOpenModalEdit(true) }} cursor={"pointer"} className='text-blue-500  text-xl' size={25} />
                <Modal openModal={openModelEdit} setOpenModal={setOpenModalEdit}>
                    <form onSubmit={handleSubmitEditClient} method="dialog" className="modal-box">
                        <button onClick={() => { setOpenModalEdit(false) }} className="tn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        <h3 className='font-bold text-lg'>Edit  task</h3>

                        <div className='modal-action flex flex-col'>
                            <input
                                value={taskToEdit}
                                onChange={(e) => { setTasktoEdit(e.target.value) }}
                                type='text'
                                placeholder='Type here'
                                /*  */ className='input input-bordered w-full'
                            />
                            <div className='w-full '>
                                <select value={priority}
                                    className=' input input-bordered  my-3  w-full  m-auto   '
                                    onChange={(e) => { setPriorty(e.target.value) }}>
                                    <option className=' items-center' selected value="Low">low</option>
                                    <option value="High">High</option>
                                    <option value="Medium">Meduim</option>
                                </select>
                            </div>

                            <button type='submit' className='btn'>
                                Submit
                            </button>
                        </div>
                    </form>
                </Modal>
                <FiTrash2 onClick={() => { setOpenModalDeleted(true) }} cursor={"pointer"} className='text-red-500' size={25} />
                <Modal openModal={openModelDeleted} setOpenModal={setOpenModalDeleted}>
                    <div className="modal-box">
                        <h3>Are you sure, you want to delete this task ?</h3>
                        <div className='modal-action'>
                            <button className='btn' onClick={() => { handleDeleteClient(client.id) }}>Yes</button>
                            <button className='btn' onClick={() => { setOpenModalDeleted(false) }}>NO</button>
                        </div>
                    </div>
                </Modal>

            </th>

        </tr >

    )
}

export default Client
