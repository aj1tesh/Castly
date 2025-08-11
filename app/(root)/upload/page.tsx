'use client'
import FormField from '@/components/FormField'
import Fileinput from '@/components/Fileinput'
import { ChangeEvent, useState } from 'react'

const Page = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        visibility: 'public',
    });

    const video = {
        file: null as File | null,
        previewUrl: null as string | null,
        inputRef: null as React.RefObject<HTMLInputElement> | null,
        handleFileChange: () => {},
        resetFile: () => {}
    };
    
    const thumbnail = {
        file: null as File | null,
        previewUrl: null as string | null,
        inputRef: null as React.RefObject<HTMLInputElement> | null,
        handleFileChange: () => {},
        resetFile: () => {}
    };

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [error, setError] = useState<string | null>(null); // setError kept for future error handling

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Implement form submission logic
        console.log('Form submitted:', formData);
    }

    return (
        <div className='wrapper-md upload-page'>
            <h1 className='text-2xl font-bold'>Upload a Video</h1>
        
            {error && <div className='error-field'>{error}</div>}

            <form className='rounded-20 shadow-10 gap-6 w-full flex flex-col px-5 py-7.5' onSubmit={handleSubmit}>
                <FormField
                    id='title'
                    label='Title'
                    as='input'
                    type='text'
                    placeholder='A crisp and catchy title'
                    value={formData.title}
                    onChange={handleInputChange}
                />
                <FormField
                    id='description'
                    label='Description'
                    as='textarea'
                    placeholder='And what&apos;s your video about?'
                    value={formData.description}
                    onChange={handleInputChange}
                />

                <Fileinput 
                    id='video'
                    label='Video'
                    accept='video/*'
                    file={video.file}
                    previewUrl={video.previewUrl}
                    inputRef={video.inputRef}
                    onChange={video.handleFileChange}
                    onReset={video.resetFile}
                    type='video'
                />
                <Fileinput
                    id='thumbnail'
                    label='Thumbnail'
                    accept='image/*'
                    file={thumbnail.file}
                    previewUrl={thumbnail.previewUrl}
                    inputRef={thumbnail.inputRef}
                    onChange={thumbnail.handleFileChange}
                    onReset={thumbnail.resetFile}
                    type='image'
                />

                <FormField
                    id='visibility'
                    label='Visibility'
                    as='select'
                    options={[
                        {value: 'public', label: 'I don\'t care'},
                        {value: 'private', label: 'Only for me'}
                    ]}
                    value={formData.visibility}
                    onChange={handleInputChange}
                />

                <button type="submit" className="submit-button">
                    Upload Video
                </button>
            </form>
        </div>
    )
}

export default Page