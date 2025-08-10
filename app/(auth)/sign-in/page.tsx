import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <main className="sign-in">
        <aside className="testimonial">
            <Link href="/" className="logo-link">
                <Image src="/assets/icons/logo.svg" alt="logo" width={32} height={32}/>
                <h1>Castly</h1>
            </Link>

            <div className="description">
                <section>
                    <figure className="stars">
                        {Array.from({length: 5}).map((_, index) => (
                            <Image src="/assets/icons/star.svg" alt="stars" width={20} height={20} key={index}/>
                        ))}
                    </figure>
                    <p className="testimonial-text">
                        &quot;Castly is a platform that allows you to create and share your videos with the world.&quot;
                    </p>
                    <article className="user-testimonial">
                      <Image src="/assets/images/jason.png" alt="user" width={64} height={64} className="rounded-full"/>
                      <div className="user-info">
                        <h2>Pucchi Mehta</h2>
                        <p>Product Designer, BoomCom</p>
                      </div>
                    </article>
                </section>
            </div>
            
            <footer className="copyright">
              <p>© Castly {new Date().getFullYear()}</p>
            </footer>
        </aside>
        
        <aside className="google-sign-in">
          <section>
            <Link href="/" className="logo-link">
                <Image src="/assets/icons/logo.svg" alt="logo" width={32} height={32}/>
                <h1>Castly</h1>
            </Link>
            <p>Create your very own video content with <span>Castly</span> in no time!</p>
            <button className="google-btn">
              <Image src="/assets/icons/google.svg" alt="google" width={22} height={22}/>
              <span>Continue with Google</span>
            </button>
          </section>
        </aside>
        <div className="overlay"/>
    </main>
  )
}

export default page