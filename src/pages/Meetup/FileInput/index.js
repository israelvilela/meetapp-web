import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';
import { MdPhotoCamera } from 'react-icons/md';
import { Container, FileUpload } from './styles';

import api from '~/services/api';

export default function FileInput(props) {
  const ref = useRef(null);
  const { defaultValue, registerField } = useField('file');

  const [arquivo, setArquivo] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);

  useEffect(() => {
    function setField() {
      if (ref.current) {
        registerField({
          name: 'fileId',
          ref: ref.current,
          path: 'dataset.file',
        });
      }
    }

    setField();
  }, [registerField]);

  async function handleChange(e) {
    const data = new FormData();
    data.append('file', e.target.files[0]);

    const response = await api.post('files', data);

    const { id, url } = response.data;

    setArquivo(id);
    setPreview(url);
  }

  return (
    <Container>
      <label htmlFor="file">
        <img
          src={
            preview || 'https://api.adorable.io/avatars/285/abott@adorable.png'
          }
          alt=""
        />
        {/* <FileUpload>
          <img
            src={
              preview ||
              'https://api.adorable.io/avatars/285/abott@adorable.png'
            }
            alt=""
          />
        </FileUpload> */}
        {/* <MdPhotoCamera title="Selecionar imagem" size={40} /> */}

        <input
          type="file"
          id="file"
          accept="image/*"
          data-file={arquivo}
          onChange={handleChange}
          ref={ref}
        />
      </label>
    </Container>
  );
}
