import Textarea from "../../ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { setNote } from "../../../store/features/questionnaire/questionnaireSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import Button from "../../ui/button";

const schema = z.object({
  note: z.string({ message: "Note must be a valid string" }),
});

type SchemaType = z.infer<typeof schema>;

const EnterNote = () => {
  const note = useAppSelector((s) => s.questionnaire.note);
  const dispatch = useAppDispatch();

  const { register, handleSubmit } = useForm<SchemaType>({
    mode: "all",
    defaultValues: {
      note,
    },
    resolver: zodResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit((data) => dispatch(setNote(data.note)))}>
      <Textarea {...register("note")} placeholder="Enter note here" />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default EnterNote;
