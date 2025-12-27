import { Card } from "@/components/ui/card";

export default function MyBusinessSection() {
  return (
    <div className=" mx-auto lg:p-10 p-5">
      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-medium text-center mb-12">
        My business
      </h2>

      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-auto md:h-[500px]">
        {/* වම්පස ඇති ලොකු Card එක (Main Card) */}
        <Card className="md:col-span-2 md:row-span-2 bg-slate-200 border-none rounded-[40px] shadow-none h-40 md:h-full">
          {/* Content goes here */}
        </Card>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4 h-auto md:h-[500px] md:row-span-2">
          {/* දකුණු පස ඇති කුඩා Card 4 */}
          <Card className="bg-slate-200 border-none rounded-xl md:rounded-2xl shadow-none h-40 md:h-full">
            {/* Content 1 */}
          </Card>

          <Card className="bg-slate-200 border-none rounded-xl md:rounded-2xl shadow-none h-40 md:h-full">
            {/* Content 2 */}
          </Card>

          <Card className="bg-slate-200 border-none rounded-xl md:rounded-2xl shadow-none h-40 md:h-full">
            {/* Content 3 */}
          </Card>

          <Card className="bg-slate-200 border-none rounded-xl md:rounded-2xl shadow-none h-40 md:h-full">
            {/* Content 4 */}
          </Card>
        </div>
      </div>
    </div>
  );
}
