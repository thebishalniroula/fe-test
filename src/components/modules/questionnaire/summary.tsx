import { useAppSelector } from "../../../store/hooks";

const QuestionnaireSummary = () => {
  const { webSeries, generatedCoupon, enteredCoupon, note } = useAppSelector(
    (s) => s.questionnaire
  );
  return (
    <div>
      <p className="text-xl">
        Web series: <span className="font-medium">{webSeries}</span>
      </p>
      <p className="text-xl">
        Generated coupon: <span>{generatedCoupon}</span>
      </p>
      <p className="text-xl">
        Entered coupon: <span>{enteredCoupon}</span>
      </p>
      <p className="text-xl">
        Note: <span>{note}</span>
      </p>
    </div>
  );
};

export default QuestionnaireSummary;
