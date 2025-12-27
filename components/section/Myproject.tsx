import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react"; // මීට කලින් ඉගෙනගත්තු icons

const projects = [
  {
    id: 1,
    title: "Project Alpha",
    desc: "Next.js Web Application",
    status: "Live",
  },
  {
    id: 2,
    title: "Project Beta",
    desc: "Mobile UI Design System",
    status: "In Progress",
  },
];

export default function CurrentProjects() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">
            Current projects
          </h2>
          <p className="text-muted-foreground">
            මම දැනට වැඩ කරන ව්‍යාපෘති කිහිපයක්
          </p>
        </div>
        <button className="text-sm font-medium flex items-center hover:underline italic">
          visit sample <ArrowUpRight className="ml-1 h-4 w-4" />
        </button>
      </div>

      <div className="grid gap-4">
        {projects.map((project) => (
          <Card
            key={project.id}
            className="group relative overflow-hidden border-none bg-slate-100 hover:bg-slate-200 transition-all duration-300 rounded-[30px]"
          >
            <CardContent className="p-4 flex items-center gap-6">
              {/* වම්පස ඇති රවුම් පින්තූරය (Project Logo/Image) */}
              <div className="w-16 h-16 bg-black rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform">
                {project.title[0]}
              </div>

              {/* විස්තරය */}
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-lg">{project.title}</h3>
                  <Badge
                    variant="secondary"
                    className="bg-white text-[10px] h-5"
                  >
                    {project.status}
                  </Badge>
                </div>
                <p className="text-sm text-gray-500">{project.desc}</p>
              </div>

              {/* දකුණු පස ඇති කුඩා Icon එක */}
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:bg-black group-hover:text-white transition-colors">
                <ArrowUpRight className="h-5 w-5" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
