import { useState } from 'react';
import AppCard from '../../components/AppCard/AppCard';
import { ContainerAppCard, ContainerStyled } from './Home.styled';
import useProjectsData from '../../hooks/useProjectsData';

export default function Home() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const { projects, loading, error } = useProjectsData();

  const handleCardClick = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  if (loading) return <p>Cargando proyectos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <ContainerStyled>
      {projects.map((app, index) => (
        <ContainerAppCard
          key={index}
          className={`card-wrapper ${expandedIndex === index ? 'expanded' : ''}`}
          onClick={() => handleCardClick(index)}
        >
          <AppCard
            title={app.title}
            description={app.short_description}
          />
        </ContainerAppCard>
      ))}
    </ContainerStyled>
  );
}
