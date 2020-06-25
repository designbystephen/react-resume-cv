import React from 'react';
import { Header, Reflex, PageContent, SideBar } from '../components';
import { WorkHistory, TechnicalSkills } from '../containers';
import PersonalSkills from '../containers/PersonalSkills';

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
          </SideBar>
        </Reflex>
      </main>
    </>
  );
}

export default App;
