import { generateCoupon } from "../../../libs/coupan";
import { setGeneratedCoupon } from "../../../store/features/questionnaire/questionnaireSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import Button from "../../ui/button";

const GenerateCoupon = () => {
  const coupon = useAppSelector((s) => s.questionnaire.generatedCoupon);
  const dispatch = useAppDispatch();
  return (
    <div>
      <Button onClick={() => dispatch(setGeneratedCoupon(generateCoupon()))}>
        Generate
      </Button>
      <p className="text-xl mt-2">
        Generated coupon: <span>{coupon ?? "XXXXXXOO"}</span>
      </p>
    </div>
  );
};

export default GenerateCoupon;
