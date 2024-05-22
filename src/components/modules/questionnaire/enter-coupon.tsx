import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import Input from "../../ui/input";
import { z } from "zod";
import { couponRegex } from "../../../libs/coupan";
import { zodResolver } from "@hookform/resolvers/zod";
import { setEnteredCoupon } from "../../../store/features/questionnaire/questionnaireSlice";
import Button from "../../ui/button";

const schema = z.object({
  coupon: z
    .string({ message: "Enter valid coupon" })
    .regex(couponRegex, { message: "Coupon should be of the form ABCDE98" }),
});

type SchemaType = z.infer<typeof schema>;

const EnterCoupon = () => {
  const coupon = useAppSelector((s) => s.questionnaire.enteredCoupon);
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm<SchemaType>({
    mode: "all",
    defaultValues: {
      coupon: coupon,
    },
    resolver: zodResolver(schema),
  });

  return (
    <form
      onSubmit={handleSubmit((data) => dispatch(setEnteredCoupon(data.coupon)))}
    >
      <Input {...register("coupon")} placeholder="Enter coupon code" />
      <p className="min-h-3 mt-2 text-red-500">{errors.coupon?.message}</p>
      <p className="min-h-3">
        {isSubmitted && !errors.coupon && !coupon
          ? `Coupon submitted: ${coupon}`
          : ""}
      </p>
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default EnterCoupon;
