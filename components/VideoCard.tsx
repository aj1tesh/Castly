"use client";
import Link from "next/link";
import Image from "next/image";

const VideoCard = ({id, title, thumbnail, duration, views, createdAt, userImg, username, visibility}: VideoCardProps) => {
    return (
        <Link href={`/video/${id}`} className="video-card">
            <Image src={thumbnail} alt="thumbnail" width={290} height={290} className="thumbnail" />
            <article>
            <h2>{title} ~ {createdAt.toLocaleDateString("en-US", {year: "numeric", month: "short", day: "numeric"})}</h2>
                <div>
                    <figure>
                        <Image src={userImg} alt="user" width={32} height={32} className="rounded-full aspect-square"/>
                        <figcaption>
                            <h3>{username}</h3>
                            <p>{visibility}</p>
                        </figcaption>
                    </figure>
                    <aside>
                        <Image src="/assets/icons/eye.svg" alt="views" width={16} height={16}/>
                        <span>{views}</span>
                    </aside>    
                </div>
            </article>
            <button onClick={() => {}} className="copy-btn">
                <Image src="/assets/icons/link.svg" alt="copy" width={29} height={16}/>
            </button>
            {duration && (      
                <div className="duration">
                    {Math.floor(duration / 60)}:{(duration % 60).toString().padStart(2, '0')}
                </div>
            )}
        </Link>
    )
}

export default VideoCard;