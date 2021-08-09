import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { GolfBall, GolfBallPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/GolfBall",
  component: GolfBall,
} as ComponentMeta<typeof GolfBall>;

const Template: ComponentStory<typeof GolfBall> = (args: GolfBallPropsI) => (
  <x.div display="flex" gap="20px">
    <GolfBall {...args} />
    <GolfBall {...args} fill="red.500" />
    <GolfBall {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
