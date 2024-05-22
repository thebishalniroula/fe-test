import Radio from "../../ui/radio";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { setSelectedWebSeries } from "../../../store/features/questionnaire/questionnaireSlice";

const WEB_SERIES_OPTIONS = [
  {
    label: "Game of Thrones",
    value: "GOT",
  },
  {
    label: "House of the Dragons",
    value: "HOD",
  },
  {
    label: "Lord of the Rings",
    value: "LOR",
  },
  {
    label: "Breaking Bad",
    value: "BB",
  },
];

const SelectWebSeries = () => {
  const selectedWebSeries = useAppSelector((s) => s.questionnaire.webSeries);
  const dispatch = useAppDispatch();
  return (
    <Radio
      options={WEB_SERIES_OPTIONS}
      value={selectedWebSeries}
      onChange={(value) => dispatch(setSelectedWebSeries(value))}
    />
  );
};

export default SelectWebSeries;
