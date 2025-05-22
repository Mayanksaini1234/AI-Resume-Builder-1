import React, { useState } from "react";
import { Loader2, PlusSquare } from "lucide-react";
import globalAPI from "../../../service/globalAPI";
import { v4 as uuidv4 } from "uuid";
import { Button } from "../../components/ui/button";
import { Input } from "@/components/ui/input";
import { useUser } from "@clerk/clerk-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import{ useNavigate} from 'react-router-dom';

const AddResume = () => {
  const [OpenDialogue, SetDialouge] = useState(false);
  const [title, setTitle] = useState("");
  const [loader, setLoader] = useState(false);
  const { user } = useUser();
  const navigate = useNavigate();
  
  const createResume = async () => {
    setLoader(true);
    const uuid = uuidv4();
    const data = {
      data: {
        title,
        uuid,
        userName: user?.fullName,
        userEmail: user?.primaryEmailAddress?.emailAddress,
      },
    }


  globalAPI.createResume(data).then(
    (res) => {
      console.log(res.data.data.documentId);
      if (res) {
        setLoader(false);
        navigate("/dashboard/resume/"+res.data.data.documentId+"/edit")
      }
    },
    (err) => {
      console.log(err);
      setLoader(false);
    }
  );
}
  return (
    <div>
      <div className="border p-20 py-24 bg-secondary flex justify-center items-center rounded-[10px] h-[300px] hover:shadow-md transition-all scale-105 cursor-pointer border-dashed"
        onClick={() => SetDialouge(true)}  >
        <PlusSquare />
      </div>
      <Dialog open={OpenDialogue}>
        <DialogContent>
          <DialogTitle>Create New Resume</DialogTitle>
          <DialogDescription>
            Add title for your new Resume
            <Input
              className="mt-5"
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Ex-FullStack Developer..."
            />
          </DialogDescription>
          <div className="flex justify-end gap-5 items-center ">
            <Button variant="Ghost" onClick={() => SetDialouge(false)}>
              Cancel
            </Button>

            <Button disabled={!title || loader} onClick={createResume}>
              {loader ? <Loader2 className="animate-spin" /> : "Create"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddResume;
