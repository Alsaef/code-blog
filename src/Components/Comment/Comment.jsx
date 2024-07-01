import React from 'react';
import { useSelector } from 'react-redux';

const Comment = ({ comment }) => {
    const { user: { email } } = useSelector(state => state.auth)
    return (
        <div>

            <article className="p-6 text-base bg-white rounded-lg dark:bg-gray-900 my-4">
                <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                        {
                            comment.userDetils.map(user => (
                                <p key={user._id} className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold"><img
                                    className="mr-2 w-6 h-6 rounded-full"
                                    src={user.image}
                                    alt="Michael Gough" />{user.name}</p>
                            ))
                        }
                        <p className="text-sm text-gray-600 dark:text-gray-400"><time pubdate datetime="2022-02-08"
                            title="February 8th, 2022">{comment.createdAt?.slice(0, 10)}</time></p>
                       {
                        comment.email===email&& <div className="dropdown">
                        <div tabIndex={0} role="button" className=" mx-5 text-xl">...</div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-[100px]">
                            <li><a>Delete</a></li>
                        </ul>
                    </div>
                       }
                    </div>

                </div>
                <p className="text-gray-500 dark:text-gray-400">{comment.comments}</p>
            </article>

        </div>
    );
};

export default Comment;