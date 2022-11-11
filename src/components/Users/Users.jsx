import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user_image.png";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize); //округляем число страниц в большую сторону
    let pagesArray = [];
    for (let i = 1; i <= pagesCount; i++) {
        pagesArray.push(i);
    }

    return <div>
        <div className={s.pageBar}>
            {pagesArray.map(p => {
                return <span
                             className={`${s.page} ${props.currentPage === p && s.selectedPage}`}//скленивание двух классов
                             onClick={(e) => {
                                 props.onPageChanged(p);
                             }}>{p}</span>
            })}
        </div>
        {
            props.usersData.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.large != null ? u.photos.large : userPhoto} className={s.userPhoto}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    props.unfollowbro(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    props.followbro(u.id)
                                }}>Follow</button>}
                        </div>
                    </span>
                <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                    </span>
            </div>)
        }
    </div>
}

export default Users;