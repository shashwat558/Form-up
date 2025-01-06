
import StatsCard from "@/components/StatsCard";
import { getFormStats } from "../actions/form";
import { LuView} from "react-icons/lu";
import { Suspense } from "react";
import {FaWpforms} from "react-icons/fa";
import {HiCursorClick} from "react-icons/hi";
import {TbArrowBounce} from "react-icons/tb"
import { Separator } from "@/components/ui/separator";
import CreateFormButton from "@/components/CreateFormButton";



export default function Home() {
  return (
    <div className="container pt-4"><Suspense>
      <CardStatsWrapper/>
      </Suspense>
      <Separator className="my-6"/>
      <h2 className="font-bold text-4xl col-span-2">Your Forms</h2>
      <Separator className="my-6"/>
      <CreateFormButton />
      </div>
  );
}

async function CardStatsWrapper(){
  const stats = await getFormStats();
  return <StatsCards loading={false} data={stats}/>
}




interface StatsCardProps {
  data: Awaited<ReturnType<typeof getFormStats>>
  loading: boolean
}

const StatsCards = (props: StatsCardProps) => {
  const {data, loading} = props;
  return (
    <div className="w-full gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-8">
      <StatsCard title="Total visits"

      icon = {<LuView className="text-blue-600"/>}
      helperText = "All time form visits"
      loading = {loading}
      value = {data.visits.toLocaleString()}
      className="shadow-md shadow-blue-600"
      
      />
      
      
      
      <StatsCard title="Total submissions"

      icon = {<FaWpforms className="text-yellow-600"/>}
      helperText = "All time form submission"
      loading = {loading}
      value = {data.submission.toLocaleString()}
      className="shadow-md shadow-yellow-600"
      
      />

      <StatsCard title="Submission rate"

      icon = {<HiCursorClick className="text-green-600"/>}
      helperText = "Visits that turned into submissions"
      loading = {loading}
      value = {data.submissionRate.toLocaleString()}
      className="shadow-md shadow-green-600"
      
      />

      <StatsCard title="Bounce rate"

      icon = {<TbArrowBounce className="text-red-600"/>}
      helperText = "Visits that leaves without interacting"
      loading = {loading}
      value = {data.bounceRate.toLocaleString()}
      className="shadow-md shadow-red-600"
      
      />

    </div>
 
  )
}
