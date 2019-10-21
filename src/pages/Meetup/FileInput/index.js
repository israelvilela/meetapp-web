/* eslint-disable react-hooks/exhaustive-deps */
import { useField } from '@rocketseat/unform';
import React, { useEffect, useRef, useState } from 'react';
import { MdPhotoCamera } from 'react-icons/md';
import api from '~/services/api';
import { Container } from './styles';

export default function FileInput() {
  const { defaultValue, registerField } = useField('file');

  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);
  const ref = useRef();

  useEffect(() => {
    if (defaultValue && ref.current) {
      setPreview(defaultValue.url);
      setFile(defaultValue.id);
      registerField({
        name: 'file_id',
        ref: ref.current,
        path: 'dataset.file',
      });
    }
  }, [defaultValue, ref.current]);

  async function handleChange(e) {
    const data = new FormData();
    data.append('file', e.target.files[0]);

    const response = await api.post('files', data);

    const { id, url } = response.data;

    registerField({
      name: 'file_id',
      ref: ref.current,
      path: 'dataset.file',
    });

    setFile(id);
    setPreview(url);
  }
  return (
    <Container>
      <label htmlFor="file">
        {preview ? (
          <img src={preview} alt="" />
        ) : (
          <div>
            <MdPhotoCamera title="Selecionar imagem" size={40} />
            <span>Selecionar imagem</span>
          </div>
        )}

        <input
          type="file"
          id="file"
          accept="image/*"
          data-file={file}
          onChange={handleChange}
          ref={ref}
        />
      </label>
    </Container>
  );
}
