import * as React from 'react';
import absoluteUrl from 'next-absolute-url';
import { Checker, CheckerFields } from '../interfaces/Checker';
import { NextPage } from 'next';
import { AppContainer } from '../components/ui/AppContainer';
import { CardResponsiveBar } from '../components/charts/cards/CardResponsiveBar';
import { MarginLarge } from '../components/ui/margins/MarginLarge';
import { groupCheckersByWeekDay } from '../utils/groupCheckersByWeekDay';
import { groupCheckersByYear } from '../utils/groupCheckersByYear';
import { CardResponsiveLine } from '../components/charts/cards/CardResponsiveLine';
import { CardResponsiveCalendar } from '../components/charts/cards/CardResponsiveCalendar';
import { sortCheckersByCreatedAsc } from '../utils/sortCheckers';
import { AppHeader } from '../components/ui/AppHeader';
import { IconChecker } from '../components/ui/IconChecker';
import * as requester from '../utils/requester';

interface IndexPageProps {
  checkers: Checker[];
  currentAmountOfCheckers: number;
}

interface IntroTextProps {
  fromYear: number;
  currentAmount: number;
}

const IntroText: React.FC<IntroTextProps> = ({ fromYear, currentAmount }) => {
  return (
    <>
      <p>
        Denna sajt har sedan {fromYear} samlat lite <i>(något onödig)</i> info från Aftonbladet.
      </p>
      <p>
        Den info som har samlats in är hur många <IconChecker /> Aftonbladet använder varje dag.
      </p>
      <p>
        <IconChecker /> {currentAmount} st just nu! <IconChecker /> Senaste dagarna! <IconChecker /> Antal per veckodag!{' '}
        <IconChecker /> Senaste åren! <IconChecker />
      </p>
    </>
  );
};

const Index: NextPage<IndexPageProps> = ({ checkers, currentAmountOfCheckers }) => {
  const checkersCountByWeekday = groupCheckersByWeekDay(checkers);
  const checkersSmall = [...checkers].splice(0, 15);
  const checkersByYear = [...groupCheckersByYear(checkers).sort(sortCheckersByCreatedAsc)];
  return (
    <AppContainer>
      <div style={{ textAlign: 'center' }}>
        <AppHeader text="Aftonbladet Checkr" />
        <IntroText
          fromYear={new Date(checkers[checkers.length - 1][CheckerFields.created]).getFullYear()}
          currentAmount={currentAmountOfCheckers}
        />
      </div>
      <MarginLarge />
      <CardResponsiveLine
        keys={[CheckerFields.amount]}
        indexBy={CheckerFields.created}
        checkers={checkersSmall}
        header="De senaste dagarna"
      />
      <MarginLarge />
      <CardResponsiveBar
        keys={[CheckerFields.amount]}
        indexBy={CheckerFields.day}
        checkers={checkersCountByWeekday}
        header="Per veckodag"
      />
      <MarginLarge />
      <CardResponsiveBar
        keys={[CheckerFields.amount]}
        indexBy={CheckerFields.year}
        checkers={checkersByYear}
        header="Årsvis"
      />
      <MarginLarge />
      <CardResponsiveCalendar height={750} checkers={checkers} header="Över sikt" />
      <MarginLarge />
    </AppContainer>
  );
};

Index.getInitialProps = async context => {
  const { origin } = absoluteUrl(context.req);
  const checkers = await requester.getAllCheckers(origin);
  const currentAmount = await requester.getCurrentAmountOfCheckers(origin);

  return {
    checkers,
    currentAmountOfCheckers: currentAmount,
  };
};

export default Index;
