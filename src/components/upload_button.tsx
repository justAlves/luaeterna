'use client'

import React from 'react'
import { Button } from './ui/button'
import { UploadIcon } from 'lucide-react'
import Image from 'next/image'

export default function UploadButton() {
    const inputRef = React.useRef<HTMLInputElement>(null)
    const [image, setImage] = React.useState<File | null>(null)

  return (
    <div>
      <input
        ref={inputRef}
        type="file"
        className="hidden"
        name='image'  
        multiple={false}
        accept='image/*'
        onChange={(e) => {
          console.log(e.target)
          const file = e.target.files?.[0]
          if (file) {
            console.log(file)
            setImage(file)
          }
        }}
      />
      <label 
        htmlFor="upload-button"
        className="text-sm font-medium text-app_secondary block mb-2"  
      >
        Envie uma imagem do casal ou de um momento especial
      </label>
      <Button 
        onClick={() => inputRef.current?.click()}
        type='button'
        variant='outline'
        className='text-black'
        id='upload-button'
      >
        <UploadIcon/>
        Escolha uma imagem
      </Button>
      {image && (
        <div>
          <p className="text-sm text-app_secondary mt-4">
            Imagem enviada: {image.name}
          </p>
          <Image
            src={URL.createObjectURL(image)}
            alt="Imagem enviada"
            width={100}
            height={100}
            className="mt-4 w-24"
          />
        </div>
      )}
    </div>
  )
}
