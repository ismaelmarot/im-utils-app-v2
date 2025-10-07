import { useState } from 'react';
import AppCard from '../../components/AppCard/AppCard';
import { ContainerStyled } from './Home.styled';

export default function Home() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const apps = [
    { title: "Product Entry App", description: "App para contar dinero fácilmente" },
    { title: "Products Exit App", description: "Control de gastos personales" },
    { title: "Cash Counter", description: "Money counter by quantities." },
  ];

  const handleCardClick = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <ContainerStyled>
      {apps.map((app, index) => (
        <div
          key={index}
          className={`card-wrapper ${expandedIndex === index ? 'expanded' : ''}`}
          onClick={() => handleCardClick(index)}
        >
          <AppCard title={app.title} description={app.description} />
        </div>
      ))}
    </ContainerStyled>
  );
}
