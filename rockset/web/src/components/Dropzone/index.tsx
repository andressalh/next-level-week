import React, {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'
import './styles.css';
import {FiUpload} from 'react-icons/fi';

interface Props {
  onFileUpload: (file: File) => void;
}
const  Dropzone: React.FC<Props> = ({onFileUpload}) => {
  const [selectedFileUrl, setselectedFileUrl] = useState('');

  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0];
    const fileUrl = URL.createObjectURL(file);
    setselectedFileUrl(fileUrl);
    onFileUpload(file);
  }, [onFileUpload])

  const {getRootProps, getInputProps} = useDropzone({
    onDrop,
    accept: 'image/*'
  })

  return (
    <div className="dropzone" {...getRootProps()}>
      <input {...getInputProps()}  accept="image/*"/>
        { selectedFileUrl 
          ? <img src={selectedFileUrl} alt="Point thumnail"/>
          : (
            <p>
              <FiUpload/>
              Imagem do estabelecimento
            </p> 
          )
        }
        
    </div>
  )
}



export default Dropzone;