import styled from 'styled-components'

import LogoLight from '../../assets/Logo - Light.svg'
import LogoWoman from '../../assets/Logo - Woman.png'

const AboutWrapper = styled.div`
  height: 100%;
  margin: 0 auto;
  padding: 0 16%;
  text-align: center;
  overflow-y: scroll;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`

const Logo = styled.img`
  margin: 0 auto;
  height: 200px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    height: 100px;
  }
`

const Heading = styled.h2`
  color: var(--btn-selected);
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`

const SubHeading = styled.h3`
  color: var(--btn-selected);
  margin-top: 20px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`

const Paragraph = styled.p`
  color: var(--tertiary);
  line-height: 1.6;
  margin-bottom: 20px;
  text-align: justify;

  strong {
    color: var(--quaternary);
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`

const UnorderedList = styled.ul`
  list-style: none;
  margin-bottom: 20px;
  text-align: justify;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`

const ListItem = styled.li`
  color: var(--tertiary);
  margin-bottom: 10px;

  strong {
    color: var(--quaternary);
  }
`

const About = () => {
  return (
    <AboutWrapper>
      <Logo
        src={LogoLight}
        onMouseOver={e => {
          e.currentTarget.src = LogoWoman
          e.currentTarget.style.backgroundColor = 'var(--btn-selected)'
        }}
        onMouseOut={e => {
          e.currentTarget.src = LogoLight
          e.currentTarget.style.backgroundColor = 'transparent'
        }}
        alt="Logo"
      />
      <Heading>
        Sobre o FitHub: Elevando Seu Bem-Estar por Meio da Tecnologia
      </Heading>
      <Paragraph>
        Bem-vindo ao FitHub, o seu companheiro definitivo na jornada em direção
        à saúde e bem-estar. Em sintonia com a visão do Desenvolvimento
        Sustentável da ONU, especificamente no Objetivo de Desenvolvimento
        Sustentável 3 - Saúde e Bem-Estar, o FitHub surge como uma inovação
        dedicada a aprimorar sua qualidade de vida.
      </Paragraph>

      <SubHeading>Recursos Especiais:</SubHeading>
      <UnorderedList>
        <ListItem>
          <strong>Acompanhamento de Medidas:</strong> Registre seu progresso de
          maneira fácil e visual. Acompanhe suas conquistas em direção às suas
          metas de saúde.
        </ListItem>
        <ListItem>
          <strong>Fichas de Treino Personalizadas:</strong> Explore nossa ampla
          biblioteca de exercícios e crie fichas de treino personalizadas com
          base em suas preferências. O FitHub permite a personalização, dando a
          você o controle sobre sua rotina de exercícios.
        </ListItem>
        <ListItem>
          <strong>Versatilidade:</strong> Com ou sem equipamento, em casa ou na
          academia, o FitHub é flexível para se adequar ao seu estilo de vida.
          Acreditamos que a saúde não deve ter barreiras.
        </ListItem>
        <ListItem>
          <strong>Inovação em Saúde:</strong> O FitHub não é apenas um sistema
          estático; é dinâmico. Apresentamos um ChatBot integrado para
          esclarecer suas dúvidas instantaneamente, oferecendo suporte contínuo
          para garantir que você esteja bem informado em sua jornada de saúde.
        </ListItem>
      </UnorderedList>

      <SubHeading>Aviso Importante:</SubHeading>
      <Paragraph>
        Antes de iniciar qualquer novo programa de exercícios, recomendamos que
        consulte um profissional de saúde ou um educador físico para garantir
        que suas escolhas estejam alinhadas com suas condições físicas e
        objetivos de saúde. Lembre-se, você é o único responsável pela criação e
        execução de sua ficha de treino.
      </Paragraph>
      <Paragraph>
        <strong>
          O FitHub não é um substituto para aconselhamento médico profissional.
          Consulte seu médico antes de iniciar qualquer programa de exercícios.
        </strong>
      </Paragraph>

      <SubHeading>Missão do FitHub:</SubHeading>
      <Paragraph>
        A missão do FitHub é alinhar-se aos princípios dos ODS, particularmente
        ao ODS 3, promovendo um estilo de vida saudável e sustentável para todas
        as comunidades. Acreditamos que a melhoria da saúde individual contribui
        para o fortalecimento das comunidades como um todo.
      </Paragraph>
    </AboutWrapper>
  )
}

export default About
