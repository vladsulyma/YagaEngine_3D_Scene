import { Github, Linkedin, Send } from "lucide-react";
import type { HotspotData } from "../types/HotspotData";

export const HOTSPOTS: HotspotData[] = [
  {
    id: 1,
    title: "Animation core",
    text: "This function handles the dynamic flight animation of the bat, ensuring smooth, natural movement across the scene. It provides frame-by-frame control and timing adjustments to achieve realistic motion. Animation Core is designed to integrate easily with other scene elements while maintaining performance.",
    position: [2, 5, 3],
    cameraPoint: 1
  },
  {
    id: 2,
    title: "Fluid simulation",
    text: "Responsible for the boiling cauldron effect, this function simulates liquid dynamics with visually appealing turbulence and surface interactions. It allows real-time adjustments of parameters such as viscosity, bubble size, and flow direction. Fluid Simulation enhances immersion by making the potion feel alive and responsive.",
    position: [1, 0.8, -1],
    cameraPoint: 2
  },
  {
    id: 3,
    title: "Target system",
    text: "Manages the interactive target on the scarecrow, tracking hits, misses, and aiming mechanics. The system supports visual feedback and scoring logic to engage users with accurate interaction detection. Target System ensures responsive and satisfying gameplay experiences.",
    position: [4.4, 0.97, -1.78],
    cameraPoint: 3
  },
  {
    id: 4,
    title: "NPC Coordination",
    text: "Controls the three heroes on the boat, orchestrating their movement and reactions as a cohesive group. It handles AI behavior, positioning, and interactions with the environment, simulating realistic teamwork. NPC Coordination provides smooth, natural motion across waves while maintaining character individuality.",
    position: [5.5, 1, -11.5],
    cameraPoint: 4
  },
  {
    id: 5,
    title: "Contacts",
    text: (
      <>
        <div className="flex flex-col gap-1">
          <p>Developer: Vladyslav Sulyma</p>
          <a
            href="mailto:sulymavladyslav@gmail.com"
            className="text-nowrap transition-all duration-300 hover:text-[#88c057]"
          >
            Email: sulymavladyslav@gmail.com
          </a>
          <div className="flex gap-2 mt-1 justify-start">
            <a
              href="https://github.com/vladsulyma"
              className="inline-flex items-center justify-center p-4 transition-all duration-300 hover:text-[#88c057]"
            >
              <Github />
            </a>
            <a
              href="https://dou.ua/users/vladyslav-sulyma/"
              className="inline-flex items-center justify-center p-4 font-bold transition-all duration-300 hover:text-[#88c057]"
            >
              DOU
            </a>
            <a
              href="https://t.me/sulymavladyslav"
              className="inline-flex items-center justify-center p-4 transition-all duration-300 hover:text-[#88c057]"
            >
              <Send />
            </a>
            <a
              href="https://www.linkedin.com/in/vladyslav-sulyma-5b4125360/"
              className="inline-flex items-center justify-center p-4 transition-all duration-300 hover:text-[#88c057]"
            >
              <Linkedin />
            </a>
          </div>
        </div>
      </>
    ),
    secondaryTitle1: "Get in touch!",
    secondaryTitle2: "Licenses & Credits",
    extraText: (
      <>
        <p>
          Model Information:
          <ul className="list-disc ml-6">
            <li>
              <strong>Title:</strong> Baba Yaga&apos;s hut
            </li>
            <li>
              <strong>Source:</strong>{" "}
              <a
                href="https://sketchfab.com/3d-models/baba-yagas-hut-479b5f3c493349b18c59dbcbe354d98f"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline transition-all duration-300 hover:text-[#88c057]"
              >
                Sketchfab
              </a>
            </li>
            <li>
              <strong>Author:</strong>{" "}
              <a
                href="https://sketchfab.com/Inuciian"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline transition-all duration-300 hover:text-[#88c057]"
              >
                Inuciian
              </a>
            </li>
            <li>
              <strong>License:</strong> CC-BY-4.0 (
              <a
                href="http://creativecommons.org/licenses/by/4.0/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline transition-all duration-300 hover:text-[#88c057]"
              >
                details
              </a>
              )
            </li>
            <li>
              <strong>Requirements:</strong> Author must be credited. Commercial
              use is allowed. If you use this 3D model in your project, be sure
              to copy-paste this credit wherever you share it:
              <br />
              This work is based on{" "}
              <a
                href="https://sketchfab.com/3d-models/baba-yagas-hut-479b5f3c493349b18c59dbcbe354d98f"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline transition-all duration-300 hover:text-[#88c057]"
              >
                &quot;Baba Yaga&apos;s hut&quot;
              </a>{" "}
              by{" "}
              <a
                href="https://sketchfab.com/Inuciian"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline transition-all duration-300 hover:text-[#88c057]"
              >
                Inuciian
              </a>{" "}
              licensed under CC-BY-4.0.
            </li>
          </ul>
        </p>
      </>
    ),
    position: [-3.3, 4.7, 0],
    cameraPoint: 5
  }
];
