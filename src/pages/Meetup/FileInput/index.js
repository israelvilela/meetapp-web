import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';
import { MdPhotoCamera } from 'react-icons/md';
import { Container } from './styles';

import api from '~/services/api';

export default function FileInput() {
  const ref = useRef();
  const { defaultValue } = useField('file');

  const [arquivo, setArquivo] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);

  useEffect(() => {
    function load() {
      if (defaultValue) {
        setPreview(defaultValue.url);
        // registerField({
        //   name: 'fileId',
        //   ref: ref.current,
        //   path: 'dataset.file',
        // });
      }
    }

    load();
  }, [defaultValue]);

  async function handleChange(e) {
    const data = new FormData();
    data.append('file', e.target.files[0]);

    const response = await api.post('files', data);

    const { id, url } = response.data;

    setArquivo(id);
    setPreview(url);
  }
  console.log(defaultValue);
  return (
    <Container>
      <label htmlFor="file">
        {preview ? (
          <img src={preview} alt="" />
        ) : (
          <MdPhotoCamera title="Selecionar imagem" size={40} />
        )}

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
