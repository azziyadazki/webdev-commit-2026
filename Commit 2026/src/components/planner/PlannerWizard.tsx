import type { ComponentType } from 'react';
import { usePlannerContext } from '../../context/PlannerContext';
import type { PlannerStep } from '../../types';
import PlannerProgress from './PlannerProgress';
import Step1Kitchen from './steps/Step1Kitchen';
import Step2Duration from './steps/Step2Duration';
import Step3Budget from './steps/Step3Budget';
import Step4Swipe from './steps/Step4Swipe';
import Step5Optimize from './steps/Step5Optimize';
import Step6Summary from './steps/Step6Summary';
import Step7Schedule from './steps/Step7Schedule';

const STEPS: Record<PlannerStep, ComponentType> = {
  1: Step1Kitchen,
  2: Step2Duration,
  3: Step3Budget,
  4: Step4Swipe,
  5: Step5Optimize,
  6: Step6Summary,
  7: Step7Schedule,
};

export default function PlannerWizard() {
  const { planner } = usePlannerContext();
  const ActiveStep = STEPS[planner.step];

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <PlannerProgress step={planner.step} />
      <ActiveStep />
    </div>
  );
}
