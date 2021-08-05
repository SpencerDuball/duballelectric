import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { PauseCircle, PauseCirclePropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/PauseCircle",
  component: PauseCircle,
} as ComponentMeta<typeof PauseCircle>;

const Template: ComponentStory<typeof PauseCircle> = (
  args: PauseCirclePropsI
) => (
  <x.div display="flex" gap="20px">
    <PauseCircle {...args} />
    <PauseCircle {...args} fill="red.500" />
    <PauseCircle {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
