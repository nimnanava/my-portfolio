import { Card, CardContent } from "@/components/ui/card";

export default function Doing() {
  return (
    <div className=" p-10 bg-[#D9D9D9] rounded-[40px] mt-15 mx-10 ">
      {/* Heading & Intro */}
      <div className="mb-8 px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          What am I doing?
        </h2>
        <p className="text-sm md:text-base text-gray-800 max-w-4xl leading-relaxed">
          simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industrs standard dummy text ever since the
          1500s...
        </p>
      </div>

      {/* Cards Container */}
      <div className="flex flex-col md:flex-row gap-6 items-start">
        {/* Card 01 */}
        <Card className="w-full md:w-1/2 h-20 hover:h-96 transition-all duration-500 ease-in-out border-none rounded-[30px] overflow-hidden shadow-sm">
          <CardContent className="p-6">
            {/* මෙතනට ඔයාගේ Content එක දාන්න */}
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia
              accusantium labore, dolores nesciunt illo omnis expedita commodi
              tempore animi minus maxime suscipit fugit laborum. Repudiandae,
              tempore. Nesciunt reiciendis maiores deleniti?
            </p>
          </CardContent>
        </Card>

        {/* Card 02 */}
        <Card className="w-full md:w-1/2 h-20 hover:h-96 transition-all duration-500 ease-in-out border-none rounded-[30px] overflow-hidden shadow-sm">
          <CardContent className="p-6">
            {/* මෙතනට ඔයාගේ Content එක දාන්න */}
            <p className="text-gray-400">Card Content 2</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
