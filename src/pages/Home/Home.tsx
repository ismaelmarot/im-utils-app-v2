import { useState } from 'react';
import AppCard from '../../components/AppCard/AppCard';
import { ContainerStyled, CardsStack } from './Home.styled';

export default function Home() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const apps = [
    { title: "💰 Cash Counter", description: "App para contar dinero fácilmente" },
    { title: "📊 Gastos", description: "Control de gastos personales" },
    { title: "🚗 Autos", description: "Registro de mantenimiento y consumo" },
    { title: "🚗 Autos", description: "Registro de mantenimiento y consumo" },
    { title: "🚗 Autos", description: "Registro de mantenimiento y consumo" },
    { title: "🚗 Autos", description: "Registro de mantenimiento y consumo" },
    { title: "🚗 Autos", description: "Registro de mantenimiento y consumo" },
    { title: "🚗 Autos", description: "Registro de mantenimiento y consumo" },
    { title: "🚗 Autos", description: "Registro de mantenimiento y consumo" },
    { title: "🚗 Autos", description: "Registro de mantenimiento y consumo" },
  ];

  const handleCardClick = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index); // toggle
  };

  return (
    <ContainerStyled>
      <CardsStack>
        {apps.map((app, index) => (
          <div
            key={index}
            className={`card-wrapper ${expandedIndex === index ? "expanded" : ""}`}
            onClick={() => handleCardClick(index)}
          >
            <AppCard title={app.title} description={app.description} />
          </div>
        ))}
      </CardsStack>
    </ContainerStyled>
  );
}
