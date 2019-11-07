import React from 'react'

const CommentsList = ({data}) => {
    return(
        <ul className={"comments"}>
            {
                data.map((el, ind) => {
                    return(
                        <li className = {"comments__item"}>
                        <div className="comments__user-name">{` ${el.userName} live comment:`}</div>
                        <div className="comments__comments">{el.comment}</div>
                    </li>
                    )
                })
            }
        </ul>
    )
}

export default CommentsList