import * as React from 'react';
import absoluteUrl from 'next-absolute-url';
import { Checker, CheckerFields } from '../interfaces/Checker';
import { NextPage } from 'next';
import { AppContainer } from '../components/ui/AppContainer';
import { MarginLarge } from '../components/ui/margins/MarginLarge';
import { groupCheckersByWeekDay } from '../utils/grouping/groupCheckersByWeekDay';
import { groupCheckersByYear } from '../utils/grouping/groupCheckersByYear';
import { sortCheckersByCreatedAsc } from '../utils/sortCheckers';
import { AppHeader } from '../components/ui/AppHeader';
import { IconChecker } from '../components/ui/IconChecker';
import * as requester from '../utils/requester';
import { groupCheckersByQuarter } from '../utils/grouping/groupCheckersByQuarter';
import { ResponsiveLine } from '../components/charts/ResponsiveLine';
import { Card } from '../components/ui/Card';
import { ResponsiveBar } from '../components/charts/ResponsiveBar';
import { ResponsiveCalendar } from '../components/charts/ResponsiveCalendar';
import { ResponsivePie } from '../components/charts/ResponsivePie';

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
  const checkersLatest = [...checkers].splice(0, 15);
  const checkersByYear = [...groupCheckersByYear(checkers).sort(sortCheckersByCreatedAsc)];
  const checkersByQuarter = groupCheckersByQuarter(checkers);

  return (
    <AppContainer>
      <div style={{ textAlign: 'center' }}>
        <AppHeader text="Aftonbladet Checker" />
        <IntroText
          fromYear={new Date(checkers[checkers.length - 1][CheckerFields.created]).getFullYear()}
          currentAmount={currentAmountOfCheckers}
        />
      </div>
      <MarginLarge />
      <Card header="De senaste dagarna">
        <ResponsiveLine keys={[CheckerFields.amount]} indexBy={CheckerFields.created} checkers={checkersLatest} />
        <MarginLarge />
      </Card>
      <MarginLarge />
      <Card header="Per veckodag">
        <ResponsiveBar keys={[CheckerFields.amount]} indexBy={CheckerFields.day} checkers={checkersCountByWeekday} />
        <MarginLarge />
      </Card>
      <MarginLarge />
      <Card header="Över tid" height={750}>
        <ResponsiveCalendar checkers={checkers} />
        <MarginLarge />
      </Card>
      <MarginLarge />
      <Card header="Kvartalsvis">
        <ResponsivePie checkers={checkersByQuarter} />
        <MarginLarge />
      </Card>
      <MarginLarge />
      <Card header="Årsvis">
        <ResponsiveBar keys={[CheckerFields.amount]} indexBy={CheckerFields.year} checkers={checkersByYear} />
        <MarginLarge />
      </Card>
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
