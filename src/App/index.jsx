import React from 'react';
import { Header, Reflex, PageContent, SideBar, Footer, RecruiterSection } from '../components';
import { WorkHistory, TechnicalSkills, PersonalSkills, EducationHistory } from '../containers';

function App() {
  return (
    <>
      <RecruiterSection />
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
      <Footer />
    </>
  );
}

export default App;
