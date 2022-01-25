import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Primitives } from 'losen';
import { IntroMain } from '../primitives/IntroMain';

function Intro({ close, data }) {
  const arrayWithData = Object.keys(data);

  // close / hide intro page if user has begun schema journey
  // TODO: a better approach might be to exclude the $computed prop if
  // it's values is non-existent, in losen.
  if (
    arrayWithData.length !== 0 &&
    !(arrayWithData.length === 1 && !arrayWithData[0] !== '$computed')
  ) {
    close();
  }

  return (
    <Primitives.Wizard>
      <IntroMain>
        <Primitives.Heading.H1>Skal du prosjektere trapp i et nybygg? </Primitives.Heading.H1>
        <Primitives.Paragraphs.Lead>Finn ut hvilke krav fra trappebestemmelsen i TEK17 som gjelder akkurat din trapp.</Primitives.Paragraphs.Lead>
        <Primitives.Heading.H2>Slik fungerer det:</Primitives.Heading.H2>
        <ul>
          <li>velg ut én trapp du skal prosjektere</li>
          <li>svar på spørsmål om hvor trappa skal plasseres og hvem som skal bruke den</li>
          <li>få opp hvilke krav og preaksepterte ytelser som gjelder akkurat denne trappa</li>
        </ul>
        <Primitives.Paragraphs.P>
        Verktøyet viser hvilke krav og preaksepterte ytelser fra <a href="https://dibk.no/regelverk/byggteknisk-forskrift-tek17/12/iii/12-14">TEK17 § 12-14</a> som gjelder din trapp. Du får blant annet svar på om trappa har krav til tilgjenglighet, og hvilke krav som gjelder bredder, høyder, repos og håndløpere. 
        </Primitives.Paragraphs.P>
        <Primitives.Paragraphs.P>Selv om verktøyet hjelper deg med å finne kravene, er det fortsatt den som prosjekterer som har ansvaret for den planlagte løsningen. </Primitives.Paragraphs.P>
        <Primitives.Button.MainButton type="button" onClick={() => close()}>
          Sett i gang
        </Primitives.Button.MainButton>
        <Primitives.Paragraphs.P><br/><a href="https://dibk-tekcheck-api.azurewebsites.net/api/sjekkliste">API (for utviklere)</a></Primitives.Paragraphs.P>
      </IntroMain>
    </Primitives.Wizard>
  );
}

Intro.propTypes = {
  close: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

export default connect(state => ({ data: state['@WIZARD_STATE'] }))(Intro);
