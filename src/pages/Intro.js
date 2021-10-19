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
        <Primitives.Heading.H1>Sjekkliste for prosjektering av trapp i nybygg</Primitives.Heading.H1>
        <Primitives.Paragraphs.Lead>Skal du prosjektere trapp i et nybygg? Lurer du på hvilke krav i byggteknisk forskrift som er relevante for din trapp?</Primitives.Paragraphs.Lead>
        <Primitives.Heading.H2>Slik går du frem:</Primitives.Heading.H2>
        <ul>
          <li>Velg deg ut en trapp du holder på å prosjektere</li>
          <li>Svar på noen spørsmål om plasseringen og egenskapene til trappa</li>
          <li>Få opp en tilpasset sjekkliste med de kravene som må oppfylles fra trappebestemmelsen i TEK17</li>
        </ul>
        <Primitives.Paragraphs.P>
        Sjekklisten dekker alle relevante krav  fra TEK17 § 12-14. Dette inkluderer alle relevante preaksepterte ytelelser, og relevante krav til tilgjengelighet og universell utforming.
        </Primitives.Paragraphs.P>
        <Primitives.Paragraphs.P>Lykke til! </Primitives.Paragraphs.P>
        <Primitives.Button.MainButton type="button" onClick={() => close()}>
          Start veiviseren
        </Primitives.Button.MainButton>
        <Primitives.Paragraphs.P><br/>DETTE ER EN TESTVERSJON. OPPDAGER DU FEIL ELLER MANGLER? SEND EN E-POST TIL <a href="mailto:roa@dibk.no">ROA@DIBK.NO</a> </Primitives.Paragraphs.P>
        <Primitives.Paragraphs.P><br/><a href="https://dibk-tekcheck-api.azurewebsites.net/api/sjekkliste">Api for sjekklisten</a></Primitives.Paragraphs.P>
      </IntroMain>
    </Primitives.Wizard>
  );
}

Intro.propTypes = {
  close: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

export default connect(state => ({ data: state['@WIZARD_STATE'] }))(Intro);
