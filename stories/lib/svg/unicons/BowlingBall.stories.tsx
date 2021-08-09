import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { BowlingBall, BowlingBallPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/BowlingBall",
  component: BowlingBall,
} as ComponentMeta<typeof BowlingBall>;

const Template: ComponentStory<typeof BowlingBall> = (
  args: BowlingBallPropsI
) => (
  <x.div display="flex" gap="20px">
    <BowlingBall {...args} />
    <BowlingBall {...args} fill="red.500" />
    <BowlingBall {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
