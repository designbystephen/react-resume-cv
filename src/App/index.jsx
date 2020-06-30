import React from 'react';
import { Header, Reflex, PageContent, SideBar } from '../components';
import { WorkHistory, TechnicalSkills, PersonalSkills, EducationHistory } from '../containers';

function App() {
  return (
    <>
      <Header />
      <main role="main">
        <Reflex classModifiers="reflex--tablet">
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
      <footer role="contentinfo"></footer>
    </>
  );
}

export default App;
