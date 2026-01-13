'use client';

import { useEffect, useState } from 'react';

interface ImageUploadProps {
  onImageSelect: (file: File) => void;
}

export function ImageUpload({ onImageSelect }: ImageUploadProps) {
  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  return (
    <div className="space-y-4">
      <label
        htmlFor="image"
        className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-gray-400 transition-colors"
      >
        {preview ? (
          <div className="relative w-full h-full flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={preview}
              alt="Pré-visualização"
              className="max-h-full max-w-full object-contain rounded-lg"
            />
          </div>
        ) : (
          <div className="text-center">
            <svg
              className="mx-auto h-10 w-10 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <p className="mt-2 text-sm text-gray-500">Clique para selecionar uma imagem</p>
          </div>
        )}
        <input
          id="image"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (!file) return;

            const objectURL = URL.createObjectURL(file);
            setPreview(objectURL);
            onImageSelect(file);
          }}
        />
      </label>
    </div>
  );
}
