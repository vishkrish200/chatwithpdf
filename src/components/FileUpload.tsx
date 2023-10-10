"use client";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

export default function FileUpload() {
  const onDrop = useCallback((acceptedFiles: any) => {
    console.log(acceptedFiles);
    // Do something with the files
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "application/pdf": [".pdf"] },
  });

  return (
    <div className="w-1/4 h-auto bg-gray-100 ">
      <div
        {...getRootProps({
          className:
            "border-dashed border-2 rounded-xl cursor-pointer bg-gray-50 text-center py-8 flex justify-center items-center text-slate-400 text-sm",
        })}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag n drop some files here, or click to select files</p>
        )}
      </div>
    </div>
  );
}
