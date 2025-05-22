import React,{useContext,useState} from "react";
import { Button } from "../../../../components/ui/button";
import globalAPI from "../../../../../service/globalAPI";
import { FormPreviewContext } from "../../../../context/FormPreviewContext";
import { useParams } from "react-router-dom";
import { Brain, Loader2 } from "lucide-react";
import { toast } from "sonner";

const Summary = ({ enableNext }) => {
  const { resumeInfo, setResume } = useContext(FormPreviewContext);
  const [formData, SetData] = useState();
  const [loader, setLoader] = useState(false);
  const Params = useParams();
  const changeHandler = (e) => {
    const { name, value } = e.target;
    enableNext(false);
    SetData({
      ...formData,
      [name]: value,
    });
    setResume({
      ...resumeInfo,
      [name]: value,
    });
  };
  const SubmitHandler = (e) => {
    e.preventDefault();
    setLoader(true);
    const data = {
      data: formData,
    };
    globalAPI.UpdateResume(Params.resumeId, data).then(
      (res) => {
        console.log(res);
        enableNext(true);
        setLoader(false);
        toast("Summay is Updated!");
      },
      (err) => {
        console.log(err);
        setLoader(false);
      }
    );
  };

  return (
    <div
      className="mb-6 border-t-4 shadow-md p-4 rounded-sm  bg-white"
      style={{ borderColor: resumeInfo?.themeColor }}
    >
      <h2 className="text-2xl font-bold ">Summary</h2>
      <p className="text-semibold mt-1 mb-3">Add Summary for your Resume</p>

      <form onSubmit={SubmitHandler} className="space-y-4">
        <div className="flex flex-col gap-2 ">
          <div className="flex justify-end">
            <Button type="button" variant="outline" className="w-3xs">
              <Brain className="w-4 h-4" />
              Generate From AI
            </Button>
          </div>
          <textarea
            name="summery"
            onChange={changeHandler}
            defaultValue={resumeInfo?.summery}
            rows="6"
            className="border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <div className="flex items-center justify-end ">
            <Button type="submit" disabled={loader}>
              {loader ? <Loader2 className="animate-spin" /> : "save"}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Summary;
