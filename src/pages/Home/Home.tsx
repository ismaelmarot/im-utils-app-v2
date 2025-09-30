import { Container, Row, Col } from 'react-bootstrap';
import AppCard from '../../components/AppCard/AppCard';

export default function Home() {
  const apps = [
    { title: "💰 Cash Counter", description: "App para contar dinero fácilmente" },
    { title: "📊 Gastos", description: "Control de gastos personales" },
    { title: "🚗 Autos", description: "Registro de mantenimiento y consumo" },
  ];

  return (
    <Container className='py-5'>
      <Row className='g-4'>
        {apps.map((app, index) => (
          <Col key={index} xs={12} sm={6} md={4}>
            <AppCard title={app.title} description={app.description} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
