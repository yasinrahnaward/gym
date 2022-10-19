import class1 from "./../../assets/Classess/class-01.jpg";
import class2 from "./../../assets/Classess/class-02.jpg";
import class3 from "./../../assets/Classess/class-03.jpg";
import calss4 from "./../../assets/Classess/class-04.jpg";
import calss5 from "./../../assets/Classess/class-05.jpg";

import {IoIosBicycle ,IoIosFitness}from 'react-icons/io'
import { GiGymBag } from "react-icons/gi";

const Classess = [
  {
    id: '1',
    name: 'Dance',
    desc:
      'Better health leads to a better you. Our wellness center is available to all members for strength, cardio, endurance, flexibility, functional fitness.',
    img:class1 ,
    classIcon:<GiGymBag/>
  },
  {
    id: '2',
    name: 'Weight Gain',
    desc:
      'Additional training classes, like equipment instruction and developing a proper workout routine, are also available to help you get the most.',
    img:class2 ,
    classIcon:<IoIosBicycle/>
  },
  {
    id: '3',
    name: 'Youqa',
    desc:
      'Each day, dozens of classes are offered for all fitness types and abilities. To see what classes are happening today, check the schedule below.',
    img: class3,
    classIcon:<IoIosFitness/>
  },
  {
    id: '4',
    name: "Weight Lifting",
    desc:
      'Drop-in group fitness classes are a perfect way to learn a new skill, make friends, or improve your fitness. We offer .',
    img:calss4 ,
    classIcon:<IoIosBicycle/>
  },
  {
    id: '5',
    name: 'Running',
    desc:
      'A tracking website that will show the performance of the website. Also you will get some useful advice to improve the performance.',
    img: calss5,
    classIcon:<GiGymBag/>
  },
  {
    id: '2',
    name: 'Weight Gain',
    desc:
      'Additional training classes, like equipment instruction and developing a proper workout routine, are also available to help you get the most.',
    img:class1 ,
    classIcon:<IoIosBicycle/>
  },
];

export default Classess;