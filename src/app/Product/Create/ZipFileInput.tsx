import React from 'react';

interface ZipFileInputProps {
  onFileChange: (file: File | null) => void;
}

const ZipFileInput: React.FC<ZipFileInputProps> = ({ onFileChange }) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    onFileChange(file);
  };

  return (
    <div className='my-4'>
      <label className='block text-sm font-medium text-gray-700'>
        Upload ZIP File
      </label>
      <input
        type='file'
        accept='.zip'
        onChange={handleFileChange}
        className='mt-1 block w-full text-sm text-gray-500
                   file:mr-4 file:py-2 file:px-4
                   file:rounded-full file:border-0
                   file:text-sm file:font-semibold
                   file:bg-blue-50 file:text-blue-700
                   hover:file:bg-blue-100'
      />
    </div>
  );
};

export default ZipFileInput;
