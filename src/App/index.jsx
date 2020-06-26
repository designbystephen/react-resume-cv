import React from 'react';
import { Header, Reflex, PageContent, SideBar } from '../components';
import { WorkHistory, TechnicalSkills, PersonalSkills, EducationHistory } from '../containers';

function App() {
  return (
    <>
      <Header />
      <main>
        <Reflex>
          <PageContent>
            <WorkHistory />
          </PageContent>
          <SideBar>
            <TechnicalSkills />
            <PersonalSkills />
            <EducationHistory />
          </SideBar>
        </Reflex>
      </main>
    </>
  );
}

export default App;
