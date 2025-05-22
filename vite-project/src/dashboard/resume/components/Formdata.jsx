import React, { useContext, useState } from "react";
import { Button } from "../../../components/ui/button";
import { ArrowLeft, ArrowRight, LayoutGrid } from "lucide-react";
import PerosnalDetail from "./Form/PerosnalDetail";
import Summary from "./Form/summary";
import Experience from "./Form/Experience";
import Education from "./Form/Education";
import Skills from "./Form/Skills";
const Formdata = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [enableNext, setEnableNext] = useState(true);
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <Button variant="outline" className="flex items-center gap-2">
          <LayoutGrid className="w-4 h-4" />
          Theme
        </Button>
        <div className="flex justify-between items-center gap-3">
          {activeIndex > 1 && (
            <Button
              className="flex items-center gap-2"
              onClick={() => {
                setActiveIndex(activeIndex - 1);
              }}
            >
              <ArrowLeft className="w-4 h-4" />
            </Button>
          )}
          <Button
            disabled={!enableNext}
            className="flex items-center gap-2"
            onClick={() => {
              setActiveIndex(activeIndex + 1);
            }}
          >
            Next
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
      {activeIndex == 1 ? (
        <PerosnalDetail
          enableNext={(v) => {
            setEnableNext(v);
          }}
        />
      ) : activeIndex == 2 ? (
        <Summary
          enableNext={(v) => {
            setEnableNext(v);
          }}
        />
      ) : activeIndex == 3 ? (
        <Experience />
      ) : activeIndex == 4 ? (
        <Education />
      ) : activeIndex == 5 ? (
        <Skills />
      ) : null}
    </div>
  );
};

export default Formdata;
