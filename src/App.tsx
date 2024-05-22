import Questionnaire from "./components/modules/questionnaire";
import { useAppSelector } from "./store/hooks";

function App() {
  const currentStep = useAppSelector((s) => s.questionnaire.currentStep);
  return (
    <main className="min-h-96 max-w-4xl mx-auto flex items-center">
      {currentStep !== Infinity && <Questionnaire />}
      {currentStep === Infinity && (
        <div className="flex flex-col justify-center p-4 ">
          <h1 className="text-3xl font-semibold">Thank you for your time</h1>
          <p>You have successfully submitted your response.</p>
        </div>
      )}
    </main>
  );
}

export default App;
