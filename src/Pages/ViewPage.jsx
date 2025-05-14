import React, { useEffect, useState } from 'react';
import { getAllModel } from '../../services/allAPI';
import { Card, Spinner, Alert, Row, Col, Container, Button } from 'react-bootstrap';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import baseURL from '../../services/baseurl';
import './ViewPage.css'; // Create this CSS file for custom styles

const Model = ({ url }) => {
  const { scene } = useGLTF(url);
  return <primitive object={scene} scale={0.5} />;
};

const ModelViewer = ({ url }) => {
 

  return (
    <div className="model-viewer-container">
     
      <Canvas 
        style={{ 
          height: '300px', 
          width: '100%',
          backgroundColor: '#f8f9fa',
          borderRadius: '4px 4px 0 0'
        }}
        camera={{ position: [0, 0, 5], fov: 50 }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <React.Suspense fallback={null}>
          <Model 
            url={url} 
          
          />
          <OrbitControls 
            enableZoom={true}
            enablePan={true}
            enableRotate={true}
            minDistance={1}
            maxDistance={20}
            screenSpacePanning={false}
          />
        </React.Suspense>
      </Canvas>
    </div>
  );
};

const ViewPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getModel();
  }, []);

  const getModel = async () => {
    try {
    
      const response = await getAllModel();
      setData(response.data );
    } catch (error) {
      console.error("Failed to fetch models:", error);
      setError("Failed to load models. Please try again later.");
    } 
  };

 

  return (
    <Container className="py-4">
      <h2 className="mb-4 text-center">3D Model Gallery</h2>
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {data.map((model, index) => (
          <Col key={index}>
            <Card className="h-100 shadow-sm">
              <ModelViewer url={`${baseURL}/uploads/${model.glbImage}`} />
              <Card.Body>
                <Card.Title className="text-truncate">{model.name || 'Untitled Model'}</Card.Title>
                
                {model.description && (
                  <Card.Text className="text-muted small">
                    {model.description}
                  </Card.Text>
                )}
              </Card.Body>
              <Card.Footer className="bg-white border-top-0">
              
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ViewPage;