import Image from 'next/image'
import React from 'react'

interface FileinputProps {
    id: string;
    label: string;
    accept: string;
    file: File | null;
    previewUrl: string | null;
    inputRef: React.RefObject<HTMLInputElement> | null;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onReset: () => void;
    type: 'video' | 'image';
}

const Fileinput = ({ id, label, accept, file, previewUrl, inputRef, onChange, onReset, type }: FileinputProps) => {
    return (
        <section className='file-input'>
        <div className='file-input'>
            <label htmlFor={id}>{label}</label>
            <input
                type="file"
                id={id}
                accept={accept}
                ref={inputRef}
                onChange={onChange}
                hidden
            />
            {!previewUrl ? (
                <figure style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <Image src="/assets/icons/upload.svg" alt="Upload" width={24} height={24} />
                    <span>Upload your {id} here</span>
                </figure>
            ) : (
                <div></div>
            )}
            {file && <button onClick={onReset}>Reset</button>}
            {type === 'video' && previewUrl && <video src={previewUrl} controls />}
            {type === 'image' && previewUrl && <img src={previewUrl} alt='Preview' />}
        </div>
        </section>
    )
}

export default Fileinput