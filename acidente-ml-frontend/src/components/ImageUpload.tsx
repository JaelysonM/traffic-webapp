"use client"

import Image from 'next/image'
import { useState, useEffect } from 'react';

export function ImageUpload() {

  const [preview, setPreview] = useState<string | null>(null)

    useEffect(() => {
        return () => {
            if (preview)
                URL.revokeObjectURL(preview)
        }
    }, [preview])

  return (
    
    <div className="mt-6">
      <label className="block text-sm font-medium mb-2 text-gray-600">
        Imagem do acidente
      </label>

      <input
        type="file"
        id="srcImage"
        accept="image/*"
        className="w-full text-sm text-gray-600"
        onChange={(e) => {
            const file = e.target.files?.[0]
            if (file){
                const objectURL = URL.createObjectURL(file)
                setPreview(objectURL)
            }
        }}

        />

        {preview && (<Image src={preview} alt="#" width={200} height={200} 
        ></Image>)}
      
    </div>
  );
}
