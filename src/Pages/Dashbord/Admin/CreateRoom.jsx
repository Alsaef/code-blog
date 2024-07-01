import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { useCreateRoomMutation } from '../../../features/RoomApi/RoomApi';
const CreateRoom = () => {
    const { register, handleSubmit, formState: { errors },reset } = useForm();
    const {user:{role}}=useSelector(state=>state.auth)
    const [createRoom,{isSuccess,isLoading,isError}]=useCreateRoomMutation()
    const onSubmit = data => {
        const newRoom={
            name:data.name,
            role:role
        }
        console.log(newRoom)
        createRoom(newRoom)
    }
    useEffect(()=>{
        if (!isLoading&&isSuccess) {
            toast.success('Room Create Successful',{id:'createroom'})  
        }
    },[isLoading,isSuccess])
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
                <h2 className='py-3 text-xl font-bold'>Create <span className='text-blue-400'>Room</span></h2>
                <div className="mb-4">
                    <label className="input input-bordered flex items-center gap-2">
                        Room Name:
                        <input {...register("name", {required: true})} type="text" className="grow" placeholder="" />
                    </label>
                </div>
                <button type="submit" className="btn btn-blue">Create Room</button>
            </form>
        </div>
    );
};

export default CreateRoom;