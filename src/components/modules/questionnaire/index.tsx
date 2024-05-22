import { setCurrentStep } from "../../../store/features/questionnaire/questionnaireSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import Button from "../../ui/button";
import EnterCoupon from "./enter-coupon";
import GenerateCoupon from "./generate-coupon";
import SelectWebSeries from "./select-webseries";
import QuestionnaireSummary from "./summary";

const STEPS = [
  {
    title: "Select your favorite web series",
    component: SelectWebSeries,
  },
  {
    title: "Generate a discount coupon",
    component: GenerateCoupon,
  },
  {
    title: "Enter generated coupon",
    component: EnterCoupon,
  },
  {
    title: "Summary of your answers",
    component: QuestionnaireSummary,
  },
];
const Questionnaire = () => {
  const currentStep = useAppSelector((s) => s.questionnaire.currentStep);
  const dispatch = useAppDispatch();

  const handleNext = () => {
    if (currentStep === STEPS.length - 1) {
      dispatch(setCurrentStep(Infinity));
    } else {
      dispatch(setCurrentStep(currentStep + 1));
    }
  };

  const handlePrev = () => {
    if (currentStep === 0) {
      return;
    } else {
      dispatch(setCurrentStep(currentStep - 1));
    }
  };
  const CurrentStep = STEPS[currentStep].component;

  return (
    <div className="">
      <p className="text-2xl mb-3">
        Step {currentStep + 1} of {STEPS.length}
      </p>
      <p className="text-xl mb-2">{STEPS[currentStep].title}</p>
      <CurrentStep />
      <div className="flex gap-3">
        <Button onClick={handleNext} className="mt-6">
          {currentStep === STEPS.length - 1 ? "Submit" : "Next"}
        </Button>
        <Button
          onClick={handlePrev}
          className="mt-6 bg-transparent border-2 text-gray-800 border-purple-700 hover:text-white"
        >
          Back
        </Button>
      </div>
    </div>
  );
};

export default Questionnaire;
