import { Button } from "@/app/_components/ui/button";
import { Card, CardContent } from "@/app/_components/ui/card";

export const Header = () => {
  return (
    <div className=" bg-violet-800 p-12">
      {/* Stacked Cards Effect */}
      <div className="relative mx-auto ">
        {/* Background Cards */}
        <div className="absolute -right-3 -top-3 h-full w-full rounded-2xl bg-gradient-to-r from-orange-400 to-violet-700" />
        <div className="absolute -right-1.5 -top-1.5 h-full w-full rounded-2xl bg-gradient-to-r from-orange-500 to-violet-800" />

        {/* Main Card */}
        <Card className="relative">
          <CardContent className="flex justify-between p-12 h-96">
            <div className="grid gap-2">
              <h1 className="text-4xl font-bold text-purple-700">FPVM</h1>
              <h2 className="text-xl font-semibold text-orange-500">
                Ampandrana Taninanandrano
              </h2>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <Button className="w-fit bg-purple-700 hover:bg-purple-800">
                Explore FPVM
              </Button>
            </div>

            {/* STAF Graphic */}
            <div className="relative">
              <div className="p-8">
                <Card className="relative w-[400px] h-[200px] overflow-hidden transform perspective-1000 rotate-y-10 rounded-2xl">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-purple-700" />
                  <div className="relative h-full flex items-center justify-start p-8">
                    <div className="text-4xl font-bold text-white tracking-wider">
                      STAF
                    </div>
                    {/* Stars */}
                    <div className="absolute inset-0">
                      {[
                        "top-[20%] left-[15%] w-3 h-3 opacity-40",
                        "top-[40%] left-[25%] w-4 h-4 opacity-50",
                        "top-[30%] left-[35%] w-3 h-3 opacity-30",
                        "top-[50%] left-[45%] w-5 h-5 opacity-60",
                        "top-[25%] left-[60%] w-4 h-4 opacity-50",
                        "top-[45%] left-[75%] w-6 h-6 opacity-70",
                        "top-[35%] left-[85%] w-8 h-8 opacity-90",
                      ].map((className, index) => (
                        <div key={index} className={`absolute ${className}`}>
                          <svg
                            className="text-white"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                          </svg>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
