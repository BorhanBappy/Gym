// ProgramDetails.js

import { useParams } from "react-router-dom";
import { Programs } from "./Data";

function ProgramDetails() {
  const { id } = useParams();
  const program = Programs.find((program) => program.ID === parseInt(id));

  if (!program) {
    return <div>Program not found</div>;
  }

  const programDescription =
    program.ID === 1 ? (
      <ol className="list-decimal pl-5 m-8 text-xl space-y-9 text-justify">
        <li>
          <strong>Basic Equipment:</strong> The gym primarily offers simple and
          user-friendly exercise equipment, making it easy for beginners to use.
        </li>
        <li>
          <strong>Instructional Support:</strong> Knowledgeable staff and
          trainers are readily available to offer guidance on proper form,
          workouts, and equipment usage.
        </li>
        <li>
          <strong>Structured Programs:</strong> Beginner Gym often provides
          structured workout programs or classes tailored to newcomers, helping
          them build a solid foundation for fitness.
        </li>
        <li>
          <strong>Safety Emphasis:</strong> Safety is a top priority, with an
          emphasis on injury prevention and the use of lighter weights and
          resistance levels.
        </li>
        <li>
          <strong>Comfortable Atmosphere:</strong> The atmosphere is
          non-intimidating and friendly, creating a comfortable space for
          beginners to gain confidence in their fitness routines.
        </li>
      </ol>
    ) : program.ID === 2 ? (
      <ol className="list-decimal pl-5 m-8 text-xl space-y-9 text-justify">
        <li>
          <strong>Variety of Equipment:</strong> The gym offers a wide range of
          exercise equipment, including both basic and more advanced options.
        </li>
        <li>
          <strong>Progressive Workouts:</strong> Intermediate Gym focuses on
          progressive training, helping individuals build on their existing
          fitness levels and challenge themselves.
        </li>
        <li>
          <strong>Experienced Trainers:</strong> Trainers at this gym have a
          deeper understanding of fitness and can provide more advanced guidance
          and programming.
        </li>
        <li>
          <strong>Group Classes:</strong> Group classes, such as HIIT, spinning,
          or circuit training, are available for those seeking structured
          workouts with a bit more intensity.
        </li>
        <li>
          <strong>Goal Orientation:</strong> Members are encouraged to set
          specific fitness goals and work towards achieving them with the
          support of the gym`&apos;`s resources.
        </li>
      </ol>
    ) : program.ID === 3 ? (
      <ol className="list-decimal pl-5 m-8 text-xl space-y-9 text-justify">
        <li className="mb-2">
          <strong>Top-of-the-Line Equipment:</strong> Advanced Gym boasts
          state-of-the-art equipment, including specialized machines and
          advanced tools for strength and conditioning.
        </li>
        <li className="mb-2">
          <strong>Elite Trainers:</strong> The gym employs experienced trainers
          with certifications in specialized fields like sports performance,
          powerlifting, or bodybuilding.
        </li>
        <li className="mb-2">
          <strong>Competition and Sports Focus:</strong> Advanced Gym often
          caters to competitive athletes and may have facilities for specific
          sports training, such as indoor tracks, swimming pools, or
          sports-specific courts.
        </li>
        <li className="mb-2">
          <strong>Customized Training:</strong> Workouts and training programs
          are highly customized to meet individual performance goals, whether
          it`&apos;`s for competition, bodybuilding, or athletic performance.
        </li>
        <li className="mb-2">
          <strong>Recovery Facilities:</strong> Advanced gyms may offer recovery
          services such as cryotherapy, physical therapy, or sports massage to
          optimize performance and minimize injuries.
        </li>
        <li className="mb-2">
          <strong>High-Intensity Workouts:</strong> The focus is on
          high-intensity training, with members pushing their limits to achieve
          peak fitness levels.
        </li>
        <li className="mb-2">
          <strong>Performance Metrics:</strong> Advanced gyms often use
          technology to track and analyze performance metrics, allowing for
          data-driven training and progress assessment.
        </li>
      </ol>
    ) : (
      "This is a default description for unknown Program IDs."
    );

  return (
    <div>
      <h2 className=" text-center text-3xl text-yellow-400">{program.title}</h2>
      <p className=" text-black">{programDescription}</p>
    </div>
  );
}

export default ProgramDetails;
