import React, { useEffect, useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { addModel } from '../../services/allAPI';
import './OverView.css';

const ModelViewer = ({ url }) => {
  const { scene } = useGLTF(url);
  return <primitive object={scene} />;
};

const OverView = () => {
  const [preview, setPreview] = useState("");
  const [data, setData] = useState({
    name: "",
    glbImage: null
  });
console.log(data.glbImage);


  useEffect(() => {
    if (data.glbImage) {
      const objectUrl = URL.createObjectURL(data.glbImage);
      setPreview(objectUrl);
      return () => URL.revokeObjectURL(objectUrl);
    }
  }, [data.glbImage]);

 
   const submit = async () => {
  if (data.name && data.glbImage) {
    try {
      const payload = new FormData();
      payload.append("name", data.name);
      payload.append("glbImage", data.glbImage);

      const reqHeaders = {
        "Content-Type": "multipart/form-data"
      };

      const apiResponse = await addModel(payload, reqHeaders);
      if (apiResponse.status === 201) {
        alert("Added Successfully");
        setData({ name: "", glbImage: null });
        setPreview("");
      } else {
        alert("Upload failed. Please try again.");
      }
    } catch (err) {
      console.error("Upload error:", err);
      alert("Something went wrong. Please check the console for details.");
    }
  } else {
    alert("Please fill out all fields");
  }
};

  

  return (
    <div className="model-upload-container">
      <div className="header-section">
        <h1 className="model-upload-title">3D Model Upload</h1>
        <p className="model-upload-subtitle">Upload and preview your 3D models in GLB/GLTF format</p>
      </div>

      <div className="main-content">
        <div className="form-preview-wrapper">
          <div className="upload-form-container">
            <div className="form-section">
              <div className="form-header">
                <i className="fas fa-cube form-icon"></i>
                <h2 className="form-section-title">Model Information</h2>
              </div>
              
              <div className="form-group">
                <label className="form-label" htmlFor="modelName">
                  <i className="fas fa-tag label-icon"></i>
                  Model Name
                </label>
                <div className="input-wrapper">
                  <input
                    type="text"
                    value={data.name}
                    onChange={(e) => setData({ ...data, name: e.target.value })}
                    className="form-input"
                    placeholder="Enter a descriptive name for your model"
                    required
                  />
                  <i className="fas fa-pen input-icon"></i>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">
                  <i className="fas fa-file-upload label-icon"></i>
                  3D Model File
                </label>
                <label className="file-upload-label">
                  <input
                    type="file"
                    accept=".glb,.gltf"
                   onChange={(e) => {
                    const file = e.target.files[0];
                    if (file && !["model/gltf-binary", "model/gltf+json"].includes(file.type)) {
                      alert("Invalid file type. Please upload a .glb or .gltf file.");
                      return;
                    }
                    setData({ ...data, glbImage: file });
                  }}

                    style={{ display: "none" }}
                    required
                  />
                  <div className={`file-upload-box ${preview ? 'has-file' : ''}`}>
                    {preview ? (
                      <div className="file-selected-content">
                        <i className="fas fa-check-circle success-icon"></i>
                        <div className="file-info">
                          <span className="file-selected-text">File Ready for Upload</span>
                          <p className="file-name">{data.glbImage.name}</p>
                        </div>
                      </div>
                    ) : (
                      <div className="file-upload-content">
                        <i className="fas fa-cloud-upload-alt file-upload-icon"></i>
                        <p className="file-upload-text">Browse or Drag & Drop GLB/GLTF File</p>
                      </div>
                    )}
                  </div>
                </label>
              </div>
            </div>

            <div className="button-wrapper">
              <button
                onClick={submit}
                className="upload-button"
              >
                <i className="fas fa-upload button-icon"></i>
                Upload Model
              </button>
            </div>
          </div>

          {preview && (
            <div className="preview-container">
              <div className="preview-header">
                <i className="fas fa-eye preview-icon"></i>
                <h2 className="preview-title">Model Preview</h2>
              </div>
              <div className="model-canvas-container">
                <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
                  <ambientLight intensity={1} />
                  <directionalLight position={[10, 10, 5]} intensity={1} />
                  <Suspense fallback={null}>
                    <ModelViewer url={preview} />
                    <OrbitControls enableZoom={true} autoRotate />
                  </Suspense>
                </Canvas>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OverView;