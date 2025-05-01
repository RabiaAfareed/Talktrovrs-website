import Image from "next/image";

const ComparisonSection = () => {
  return (
    <section className="py-16 px-4 rounded-xl shadow-md max-w-6xl mx-auto mt-[149px]">
      <div className="text-center mb-10 ">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-600">
          Why Business Choose TalkTroves Over Chatfuel
        </h2>
        <p className="text-gray-600 mt-2">
          Find out how TalkTroves stands out from other alternatives
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Feature 1 */}
        <div className="bg-blue-50 rounded-lg p-6 text-center shadow-sm">
          <div className="flex justify-center mb-4">
            <Image
              src="/heart.png"
              alt="Improved Satisfaction"
              width={30}
              height={30}
            />
          </div>
          <h3 className="text-blue-600 font-semibold text-lg mb-2">
            Improved Satisfaction
          </h3>
          <p className="text-gray-600 text-sm">
            TalkTroves customer support solution helps to increase customer satisfaction & improve conversion rates.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bg-blue-50 rounded-lg p-6 text-center shadow-sm">
          <div className="flex justify-center mb-4">
            <Image
              src="/group.png"
              alt="Increased Agent Productivity"
              width={30}
              height={30}
            />
          </div>
          <h3 className="text-blue-600 font-semibold text-lg mb-2">
            Increased Agent Productivity
          </h3>
          <p className="text-gray-600 text-sm">
            Decrease the work time of your agents and solve more customer queries.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="bg-blue-50 rounded-lg p-6 text-center shadow-sm">
          <div className="flex justify-center mb-4">
            <Image
              src="/camera.png"
              alt="Feature Rich"
              width={30}
              height={30}
            />
          </div>
          <h3 className="text-blue-600 font-semibold text-lg mb-2">
            Feature Rich
          </h3>
          <p className="text-gray-600 text-sm">
            With more than 175 TalkTroves features, providing support will be a piece of cake.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
